import { doc, getDoc, updateDoc } from 'firebase/firestore';
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
        p5: number; p6: number; p7: number;
    };
}

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
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
        await updateDoc(userRef, {
            targetScore: targetScore
        });
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
            p5: number; p6: number; p7: number;
        }
    }
): Promise<void> => {
    try {
        const userRef = doc(db, 'Winter_Users', userId);
        await updateDoc(userRef, data);
    } catch (error) {
        console.error("Error updating target details:", error);
        throw error;
    }
};
