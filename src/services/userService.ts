import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface UserProfile {
    userId: string;
    username: string;
    name: string;
    className?: string; // e.g. "Sparta 700+"
    targetScore?: number;
    targetRC?: number;
    targetLC?: number;
    partTargets?: {
        p1: number; p2: number; p3: number; p4: number;
        p5: number; p6: number;
        p7_single: number; p7_double: number;
    };
}

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
    if (!userId) return null;
    try {
        const userRef = doc(db, 'Winter_Users', userId);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return { userId, ...userSnap.data() } as UserProfile;
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
        const userRef = doc(db, 'Winter_Users', userId);
        await setDoc(userRef, {
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
            p1: number; p2: number; p3: number; p4: number;
            p5: number; p6: number;
            p7_single: number; p7_double: number;
        }
    }
): Promise<void> => {
    try {
        const userRef = doc(db, 'Winter_Users', userId);
        await setDoc(userRef, data, { merge: true });
    } catch (error) {
        console.error("Error updating target details:", error);
        throw error;
    }
};
