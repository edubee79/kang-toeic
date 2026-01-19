
import { NextResponse } from 'next/server';
import { admin } from '@/lib/firebase-admin';

export async function POST(req: Request) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
        }

        console.log(`[API] Deleting assignment: ${id}`);
        await admin.firestore().collection('Assignments').doc(id).delete();

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete assignment error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
