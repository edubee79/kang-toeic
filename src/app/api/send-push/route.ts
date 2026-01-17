import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function POST(req: Request) {
    try {
        const { token, title, body } = await req.json();

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

        // Send a message to the device corresponding to the provided registration token.
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);

        return NextResponse.json({ success: true, messageId: response });
    } catch (error: any) {
        console.error('Error sending message:', error);
        return NextResponse.json({ success: false, error: error.message || 'Failed to send notification' }, { status: 500 });
    }
}
