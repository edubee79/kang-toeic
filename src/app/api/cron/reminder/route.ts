import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

/**
 * 숙제 미완료자 자동 독촉 알림 크론 잡
 * 매 정각마다 실행되어 해당 시간에 설정된 반 학생들에게 알림을 보냅니다.
 */
export async function GET(req: Request) {
    // 보안을 위한 크론 시크릿 확인 (Vercel Cron용)
    const authHeader = req.headers.get('authorization');
    if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const db = admin.firestore();

        // 1. 현재 한국 시간(KST) 계산
        const now = new Date();
        const kstOffset = 9 * 60 * 60 * 1000;
        const kstNow = new Date(now.getTime() + kstOffset);

        const currentHour = kstNow.getUTCHours();
        const currentTimeStr = `${String(currentHour).padStart(2, '0')}:00`;

        console.log(`[Cron Reminder] ${currentTimeStr} (KST) 알림 체크 시작...`);

        // 2. 해당 시간에 알림이 설정된 반 찾기
        const classesSnap = await db.collection('Classes')
            .where('reminderTime', '==', currentTimeStr)
            .get();

        if (classesSnap.empty) {
            return NextResponse.json({ success: true, message: '보낼 알림이 있는 반이 없습니다.' });
        }

        const stats = { totalSent: 0, classesChecked: classesSnap.size };
        const results: any[] = [];

        for (const classDoc of classesSnap.docs) {
            const classData = classDoc.data();
            const className = classData.name;
            const reminderDay = classData.reminderDay || 'today';

            // 3. 목표 날짜 계산 (당일 알림이면 오늘, 익일 알림이면 어제 배포된 숙제 대상)
            const targetDate = new Date(kstNow);
            if (reminderDay === 'tomorrow') {
                targetDate.setDate(targetDate.getDate() - 1);
            }

            // 날짜 비교를 위해 시작과 끝 시점 설정 (KST 기준)
            const startOfTarget = new Date(targetDate);
            startOfTarget.setUTCHours(0, 0, 0, 0); // KST 00:00
            const endOfTarget = new Date(targetDate);
            endOfTarget.setUTCHours(23, 59, 59, 999); // KST 23:59

            // 실제 Firestore 타임스탬프로 변환 (-9시간 해서 UTC로)
            const fsStart = admin.firestore.Timestamp.fromDate(new Date(startOfTarget.getTime() - kstOffset));
            const fsEnd = admin.firestore.Timestamp.fromDate(new Date(endOfTarget.getTime() - kstOffset));

            // 4. 해당 날짜에 배포된 숙제(Assignments) 목록 가져오기
            const assignmentsSnap = await db.collection('Assignments')
                .where('targetClass', 'in', [className, 'all'])
                .where('createdAt', '>=', fsStart)
                .where('createdAt', '<=', fsEnd)
                .get();

            if (assignmentsSnap.empty) {
                console.log(`[${className}] 해당 날짜 배포 숙제 없음.`);
                continue;
            }

            const targetAssignments = assignmentsSnap.docs.map(d => d.data());

            // 5. 반 학생 목록 가져오기
            const studentsSnap = await db.collection('Winter_Users')
                .where('className', '==', className)
                .where('status', '==', 'approved')
                .get();

            for (const studentDoc of studentsSnap.docs) {
                const student = studentDoc.data();
                const studentId = studentDoc.id;
                const fcmToken = student.fcmToken;

                if (!fcmToken) continue;

                // 6. 각 숙제별 완료 여부 체크
                let unfinishedTasks = [];
                for (const assign of targetAssignments) {
                    const resultSnap = await db.collection('Manager_Results')
                        .where('studentId', '==', studentId)
                        .where('type', '==', assign.type)
                        .where('detail', '==', assign.detail)
                        .get();

                    if (resultSnap.empty) {
                        unfinishedTasks.push(assign.typeLabel || assign.type);
                    }
                }

                if (unfinishedTasks.length > 0) {
                    // 7. 푸시 알림 발송
                    const title = '📙 오늘의 숙제가 기다리고 있어요!';
                    const body = `${student.userName || student.name}님, 아직 완료되지 않은 숙제가 ${unfinishedTasks.length}건 있습니다. 지금 바로 시작해보세요!`;

                    try {
                        await admin.messaging().send({
                            notification: { title, body },
                            token: fcmToken,
                            data: {
                                type: 'homework_reminder',
                                click_action: 'FLUTTER_NOTIFICATION_CLICK'
                            }
                        });

                        // 인앱 알림 기록
                        await db.collection('User_Notifications').add({
                            userId: studentId,
                            title,
                            body,
                            timestamp: admin.firestore.FieldValue.serverTimestamp(),
                            isRead: false,
                            type: 'homework_reminder'
                        });

                        stats.totalSent++;
                        results.push({ student: student.userName, class: className });
                    } catch (err) {
                        console.error(`[Push Error] ${studentId}:`, err);
                    }
                }
            }
        }

        return NextResponse.json({ success: true, stats, results });
    } catch (error: any) {
        console.error('[Reminder Cron Critical Error]', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
