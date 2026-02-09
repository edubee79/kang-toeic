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
    voca?: boolean;
    grammar?: boolean;
    part1_real?: boolean;
    levelTest?: boolean;
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
    levelTest: true,
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
        part1_real: 10,
        levelTest: 2
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

// ============================================
// AI Report Schedule Configuration
// ============================================

export interface AIReportSchedule {
    enabledDays: number[];  // 0=Sunday, 1=Monday, ..., 6=Saturday
    lastReportDate?: string;  // ISO date string
    updatedAt?: string;
    updatedBy?: string;
}

const DEFAULT_SCHEDULE: AIReportSchedule = {
    enabledDays: [5],  // Default: Friday only
};

export const getAIReportSchedule = async (): Promise<AIReportSchedule> => {
    try {
        const docRef = doc(db, 'System_Config', 'aiReportSchedule');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { ...DEFAULT_SCHEDULE, ...docSnap.data() } as AIReportSchedule;
        }
        return DEFAULT_SCHEDULE;
    } catch (error) {
        console.error("Error fetching AI report schedule:", error);
        return DEFAULT_SCHEDULE;
    }
};

export const setAIReportSchedule = async (schedule: AIReportSchedule): Promise<void> => {
    try {
        const docRef = doc(db, 'System_Config', 'aiReportSchedule');
        await setDoc(docRef, {
            ...schedule,
            updatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error saving AI report schedule:", error);
        throw error;
    }
};

export const updateLastReportDate = async (): Promise<void> => {
    try {
        const docRef = doc(db, 'System_Config', 'aiReportSchedule');
        const current = await getAIReportSchedule();
        await setDoc(docRef, {
            ...current,
            lastReportDate: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error updating last report date:", error);
        throw error;
    }
};

export const calculateReportPeriod = (lastReportDate?: string): number => {
    if (!lastReportDate) return 7;  // Default 7 days if no previous report

    const daysSince = Math.floor(
        (Date.now() - new Date(lastReportDate).getTime()) / (1000 * 60 * 60 * 24)
    );

    return Math.max(1, daysSince);  // Minimum 1 day
};
