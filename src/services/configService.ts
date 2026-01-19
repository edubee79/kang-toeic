import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface FeatureAccess {
    part1: boolean;
    part2: boolean;
    part3: boolean;
    part4: boolean;
    part5: boolean;
    part6: boolean;
    part7: boolean;
    part7_double: boolean;
    mockTest: boolean;
    voca?: boolean; // Now explicitly optional but controllable
    grammar?: boolean;
    part1_real?: boolean;
    maxSets?: Record<string, number>;
}

const DEFAULT_ACCESS: FeatureAccess = {
    part1: true,
    part2: true,
    part3: true,
    part4: true,
    part5: true,
    part6: true,
    part7: true,
    part7_double: true,
    mockTest: true,
    voca: true,
    grammar: true,
    maxSets: {
        part1: 10,
        part2: 10,
        part3: 10,
        part4: 10,
        part5: 10,
        part6: 5,
        part7: 5,
        part7_double: 5,
        mockTest: 10,
        voca: 15,
        grammar: 10,
        part1_real: 10
    }
};

export const getFeatureAccess = async (): Promise<FeatureAccess> => {
    try {
        const docRef = doc(db, 'System_Settings', 'feature_access');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                ...DEFAULT_ACCESS,
                ...data,
                maxSets: { ...(DEFAULT_ACCESS.maxSets || {}), ...(data.maxSets || {}) }
            } as FeatureAccess;
        }
        return DEFAULT_ACCESS;
    } catch (error) {
        console.error("Error fetching feature access:", error);
        return DEFAULT_ACCESS;
    }
};

export const setFeatureAccess = async (access: FeatureAccess): Promise<void> => {
    try {
        const docRef = doc(db, 'System_Settings', 'feature_access');
        await setDoc(docRef, access);
    } catch (error) {
        console.error("Error saving feature access:", error);
        throw error;
    }
};
