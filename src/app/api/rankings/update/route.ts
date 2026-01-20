import { NextResponse } from 'next/server';
import { updateRankings } from '@/services/rankingService';

export async function POST(request: Request) {
    try {
        const { period, className } = await request.json();

        // Default to current week if not provided
        // Logic to get "2026-W03"
        let targetPeriod = period;
        if (!targetPeriod) {
            const now = new Date();
            const year = now.getFullYear();
            const onejan = new Date(year, 0, 1);
            const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
            targetPeriod = `${year}-W${String(week).padStart(2, '0')}`;
        }

        const result = await updateRankings(targetPeriod, className || 'all');

        return NextResponse.json({
            period: targetPeriod,
            ...result
        });

    } catch (error: any) {
        console.error("Ranking update API error:", error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
