import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function POST(req: Request) {
    try {
        const { token, title, body, userId } = await req.json();

        if (!token) {
            return NextResponse.json({ success: false, error: 'Token is required' }, { status: 400 });
        }

        const message = {
            notification: {
                title: title || '공지사항',
                body: body || '새로운 알림이 도착했습니다.',
            },
            token: token,
        };

        // 1. Send the actual push notification
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);

        // 2. Save to Firestore for in-app viewing if userId is provided
        if (userId) {
            await admin.firestore().collection('User_Notifications').add({
                userId,
                title: title || '공지사항',
                body: body || '새로운 알림이 도착했습니다.',
                timestamp: admin.firestore.FieldValue.serverTimestamp(),
                isRead: false,
                type: 'message'
            });
        }

        return NextResponse.json({ success: true, messageId: response });
    } catch (error: any) {
        console.error('Error sending message:', error);
        return NextResponse.json({ success: false, error: error.message || 'Failed to send notification' }, { status: 500 });
    }
}
