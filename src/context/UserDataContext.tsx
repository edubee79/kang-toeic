'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { getUserProfile, UserProfile } from '@/services/userService';
import { getUserStreak, getUserRankInfo } from '@/services/rankingService';
import { calculateDistributedGoals } from '@/lib/utils/goal-utils';
import { updateTargetDetails } from '@/services/userService';

interface UserDataContextType {
    user: UserProfile | null;
    report: WeaknessReport | null;
    rankInfo: any | null;
    streak: number;
    loading: boolean;
    refreshAll: (userId: string, className: string, force?: boolean) => Promise<void>;
    setUserGoal: (userId: string, className: string, totalScore: number) => Promise<void>;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

export function UserDataProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [report, setReport] = useState<WeaknessReport | null>(null);
    const [rankInfo, setRankInfo] = useState<any | null>(null);
    const [streak, setStreak] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [lastFetchedUserId, setLastFetchedUserId] = useState<string | null>(null);

    const refreshAll = useCallback(async (userId: string, className: string, force: boolean = false) => {
        // If already loading or same user and not forced, skip
        if (loading) return;
        if (!force && lastFetchedUserId === userId && report) return;

        setLoading(true);
        try {
            console.log(`[UserDataContext] Fetching data for ${userId}... (force: ${force})`);

            // Parallel execution for maximum speed
            const [profile, analysisReport, streakCount, rankData] = await Promise.all([
                getUserProfile(userId),
                WeaknessService.analyzeUserWeakness(userId, force),
                getUserStreak(userId),
                getUserRankInfo(userId, className)
            ]);

            setUser(profile);
            setReport(analysisReport);
            setStreak(streakCount);
            setRankInfo(rankData);
            setLastFetchedUserId(userId);

            console.log(`[UserDataContext] Data sync complete.`);
        } catch (error) {
            console.error('[UserDataContext] Error syncing data:', error);
        } finally {
            setLoading(false);
        }
    }, [loading, lastFetchedUserId, report]);

    const setUserGoal = useCallback(async (userId: string, className: string, totalScore: number) => {
        setLoading(true);
        try {
            const distributedData = calculateDistributedGoals(totalScore);
            await updateTargetDetails(userId, distributedData);
            // Refresh to sync report and profile
            await refreshAll(userId, className, true);
        } catch (error) {
            console.error('[UserDataContext] Error setting user goal:', error);
        } finally {
            setLoading(false);
        }
    }, [refreshAll]);

    return (
        <UserDataContext.Provider value={{
            user,
            report,
            rankInfo,
            streak,
            loading,
            refreshAll,
            setUserGoal
        }}>
            {children}
        </UserDataContext.Provider>
    );
}

export function useUserData() {
    const context = useContext(UserDataContext);
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
}
