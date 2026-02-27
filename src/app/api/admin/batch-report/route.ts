import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { BatchReportService } from "@/services/batchReportService";
import { getAIReportSchedule, updateLastReportDate } from "@/services/configService";

export async function POST(req: Request) {
    try {
        if (!db) {
            return NextResponse.json({ error: "Firebase Admin not initialized" }, { status: 500 });
        }

        // --- Security Check ---
        const schedule = await getAIReportSchedule();
        const { searchParams } = new URL(req.url);
        const isForce = searchParams.get('force') === 'true';

        if (!schedule.isAutoBatchEnabled && !isForce) {
            return NextResponse.json({
                error: "Auto-batch is currently disabled by administrator."
            }, { status: 403 });
        }

        const summary = await BatchReportService.executeBatch();

        // Update the system-wide last report date after batch success
        if (summary.success > 0) {
            await updateLastReportDate();
        }

        return NextResponse.json({
            message: "Batch generation completed.",
            summary
        });

    } catch (error: any) {
        console.error("Batch Analysis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
