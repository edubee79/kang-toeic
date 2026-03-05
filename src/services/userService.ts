import { doc, getDoc, setDoc, collection, query, where, getDocs, DocumentReference, DocumentSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface UserProfile {
    userId: string;
    username: string; // login ID
    name: string; // legacy or fallback
    userName?: string; // actual name (matched from Signup)
    className?: string; // e.g. "Sparta 700+"
    targetScore?: number;
    targetRC?: number;
    targetLC?: number;
    partTargets?: {
        p1_goal: number; p2_goal: number; p3_goal: number; p4_goal: number;
        p5_goal: number; p6_goal: number;
        p7s_goal: number; p7d_goal: number; p7f_goal?: number;
    };
    status?: 'pending' | 'approved' | 'rejected';
    rejectionReason?: string;
}

const getVerifiedUserDoc = async (userId: string): Promise<{ ref: DocumentReference, snap?: DocumentSnapshot } | null> => {
    if (!userId) return null;

    // 1. Try exact document ID
    const userRef = doc(db, 'Winter_Users', userId);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) return { ref: userRef, snap: userSnap };

    // 2. Try by userId field
    const q = query(collection(db, 'Winter_Users'), where('userId', '==', userId));
    const qSnap = await getDocs(q);
    if (!qSnap.empty) return { ref: qSnap.docs[0].ref, snap: qSnap.docs[0] };

    // 3. Try by username field
    const q2 = query(collection(db, 'Winter_Users'), where('username', '==', userId));
    const qSnap2 = await getDocs(q2);
    if (!qSnap2.empty) return { ref: qSnap2.docs[0].ref, snap: qSnap2.docs[0] };

    return null; // Not found anywhere
};

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
    if (!userId) return null;
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (verified && verified.snap && verified.snap.exists()) {
            return { userId, ...verified.snap.data() } as UserProfile;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};

export const updateTargetScore = async (userId: string, targetScore: number): Promise<void> => {
    // Legacy support or simple update
    // We should probably create a more detailed update function
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (!verified) throw new Error("User document not found.");
        await setDoc(verified.ref, {
            targetScore: targetScore
        }, { merge: true });
    } catch (error) {
        console.error("Error updating target score:", error);
        throw error;
    }
};

export const updateTargetDetails = async (
    userId: string,
    data: {
        targetScore: number;
        targetRC: number;
        targetLC: number;
        partTargets: {
            p1_goal: number; p2_goal: number; p3_goal: number; p4_goal: number;
            p5_goal: number; p6_goal: number;
            p7s_goal: number; p7d_goal: number; p7f_goal?: number;
        }
    }
): Promise<void> => {
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (!verified) throw new Error("User document not found.");
        await setDoc(verified.ref, data, { merge: true });
    } catch (error) {
        console.error("Error updating target details:", error);
        throw error;
    }
};
