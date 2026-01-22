/**
 * Weekly Homework Cron Job
 * 
 * Schedule: Every Friday at 18:00 KST (09:00 UTC)
 * Purpose: Automatically distribute AI-generated homework to all students
 */

import { NextRequest, NextResponse } from 'next/server';
import { distributeFridayHomeworkToAll } from '@/services/supplementaryHomeworkService';

export async function GET(request: NextRequest) {
    // Verify cron secret to prevent unauthorized access
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET || 'your-secret-key';

    if (authHeader !== `Bearer ${cronSecret}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        console.log('[CRON] Starting weekly homework distribution...');
        const startTime = Date.now();

        const result = await distributeFridayHomeworkToAll();

        const duration = Date.now() - startTime;

        console.log('[CRON] Homework distribution completed:', {
            totalStudents: result.totalStudents,
            successCount: result.successCount,
            errorCount: result.errors.length,
            duration: `${duration}ms`
        });

        if (result.errors.length > 0) {
            console.error('[CRON] Errors encountered:', result.errors);
        }

        return NextResponse.json({
            success: result.success,
            message: `Distributed homework to ${result.successCount}/${result.totalStudents} students`,
            totalStudents: result.totalStudents,
            successCount: result.successCount,
            errors: result.errors,
            duration: `${duration}ms`,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('[CRON] Fatal error in weekly homework distribution:', error);

        return NextResponse.json({
            success: false,
            error: String(error),
            timestamp: new Date().toISOString()
        }, { status: 500 });
    }
}
