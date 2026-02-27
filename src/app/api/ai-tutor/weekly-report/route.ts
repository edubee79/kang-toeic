import { NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { WeeklyReportService } from "@/services/weeklyReportService";

export async function POST(req: Request) {
    try {
        if (!db) {
            return NextResponse.json({ error: "Firebase Admin not initialized" }, { status: 500 });
        }

        const body = await req.json();
        const { stats, goals, targetStats, weakestTags, studentName, userId } = body;

        // ✅ targetStats를 goals에 병합 — AuditEngine이 파트별 목표 정확도를 읽기 위해 필수
        const enrichedGoals = { ...goals, targetStats };

        const result = await WeeklyReportService.generateReportForUser(userId, studentName, stats, enrichedGoals, weakestTags);

        if (result.success) {
            // Fetch the updated content to return
            const userDoc = await db.collection('Winter_Users').doc(userId).get();
            const aiText = userDoc.data()?.latestWeeklyReport?.content || "리포트가 생성되었으나 내용을 불러오지 못했습니다.";

            try {
                const { updateLastReportDate } = await import('@/services/configService');
                await updateLastReportDate();
            } catch (se) { console.error("Update date failed:", se); }

            return NextResponse.json({ text: aiText });
        } else {
            return NextResponse.json({ error: result.error }, { status: 500 });
        }

    } catch (error: any) {
        console.error("Weekly Analysis API Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
