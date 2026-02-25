"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { Target, Calendar, BarChart2, Zap, CheckCircle2, Trophy, ArrowRight, Flame, TrendingUp, Medal, Settings, User } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { getUserProfile } from '@/services/userService';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { getUserStreak, getUserRankInfo } from '@/services/rankingService';
import { NotificationSetter } from '@/components/dashboard/NotificationSetter';
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';
import { NotificationDropdown } from '@/components/dashboard/NotificationDropdown';

// --- UI Components for Home ---

// 1. 목표 달성도 컴포넌트 (기존 대시보드 오리지널 스타일)
function GoalAchievement({ current, target }: { current: number; target: number }) {
    const percentage = Math.min(100, Math.round((current / target) * 100));

    return (
        <div className="p-8 relative overflow-hidden font-sans">
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                    <Target className="text-indigo-400 w-5 h-5" />
                    <h3 className="text-lg font-bold text-white uppercase tracking-tight">나의 목표 달성도</h3>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-slate-400 text-[10px] font-bold mb-1 uppercase tracking-tight">목표 점수</p>
                        <div className="text-3xl font-black text-white italic tracking-tighter">
                            {target}<span className="text-base text-slate-500 ml-1 font-normal not-italic">점</span>
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                            목표까지 <span className="text-indigo-400">+{Math.max(0, target - current)}점</span> 남았습니다
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] font-bold mb-1 uppercase tracking-tight">AI 예측 점수</p>
                        <div className="text-3xl font-black text-indigo-400 italic tracking-tighter">
                            {current}<span className="text-base text-indigo-500/50 ml-1 font-normal not-italic">점</span>
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 flex items-center gap-1 font-bold uppercase tracking-tight">
                            <TrendingUp className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">최근 학습 결과 반영</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span className="font-bold uppercase tracking-widest opacity-60">진행도</span>
                        <span className="font-black text-indigo-400 italic">{percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function StudentHomePage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [assignments, setAssignments] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, any>>({});
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [targetScore, setTargetScore] = useState<number>(850);
    const [weaknessReport, setWeaknessReport] = useState<WeaknessReport | null>(null);
    const [streak, setStreak] = useState<number>(0);
    const [rankInfo, setRankInfo] = useState<any>(null);

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        fetchData(parsedUser.userId, parsedUser.className);
    }, [router]);

    const fetchData = async (userId: string, className: string) => {
        setLoading(true);
        try {
            const [profile, report] = await Promise.all([
                getUserProfile(userId),
                WeaknessService.analyzeUserWeakness(userId)
            ]);

            if (profile) {
                setTargetScore(profile.targetScore || 850);
                if (profile.performanceSummary) {
                    setCurrentScore(profile.performanceSummary.predictedTotal);
                }
            }

            const [streakCount, rankData] = await Promise.all([
                getUserStreak(userId),
                getUserRankInfo(userId, className)
            ]);

            setStreak(streakCount);
            setRankInfo(rankData);
            setWeaknessReport(report);
            await fetchAssignments(className, userId);
        } finally {
            setLoading(false);
        }
    };

    const fetchAssignments = async (className: string, userId: string) => {
        const qPersonal = query(collection(db, "Assignments"), where("targetStudentId", "==", userId));
        const qClass = query(collection(db, "Assignments"), where("targetClass", "==", className));
        const qAll = query(collection(db, "Assignments"), where("targetClass", "==", "all"));
        const statsQ = query(collection(db, "Manager_Results"), where("studentId", "==", userId));

        const [pSnap, cSnap, aSnap, sSnap] = await Promise.all([
            getDocs(qPersonal), getDocs(qClass), getDocs(qAll), getDocs(statsQ)
        ]);

        const doneMap: Record<string, any> = {};
        sSnap.forEach(d => {
            const r = d.data();
            if (r.type && r.detail) doneMap[`${r.type}_${r.detail}`] = true;
        });
        setCompletedMap(doneMap);

        const assignmentMap = new Map();
        [...pSnap.docs, ...cSnap.docs, ...aSnap.docs].forEach(doc => {
            assignmentMap.set(doc.id, { id: doc.id, ...doc.data() });
        });

        const sorted = Array.from(assignmentMap.values())
            .filter(data => !data.isAiGenerated)
            .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));

        setAssignments(sorted);
    };

    const getHomeworkLink = (type: string, detail: string, id: string, homeworkUrl?: string) => {
        const currentPath = encodeURIComponent('/student/home');
        if (homeworkUrl) {
            const separator = homeworkUrl.includes('?') ? '&' : '?';
            return `${homeworkUrl}${separator}from=${currentPath}`;
        }
        return `/student/selection?from=${currentPath}`;
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <Zap className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <div className="text-slate-500 font-black uppercase tracking-widest text-sm italic">나의 학습방 로딩 중...</div>
        </div>
    );

    const pendingAssignments = assignments.filter(a => !completedMap[`${a.type}_${a.detail}`]);

    return (
        <div className="min-h-screen bg-[#0B0F1A] pb-24 font-sans text-white">
            {/* Force Push Notification Activation */}
            {user?.userId && <NotificationForceModal userId={user.userId} />}

            {/* Header: Class & Notifications */}
            <div className="px-6 pt-8 flex justify-between items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-black italic">
                            {user?.className || '수강반 정보 없음'}
                            <span className="text-slate-500 not-italic ml-1">반</span>
                        </span>
                    </div>

                    {rankInfo && (
                        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                            <Medal className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-xs font-black italic">
                                {rankInfo.rank}<span className="text-slate-500 not-italic ml-0.5">위</span>
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs font-black italic">
                            {streak}<span className="text-slate-500 not-italic ml-0.5">일째</span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {user?.userId && (
                        <div className="flex items-center gap-3">
                            <NotificationDropdown userId={user.userId} />
                            <NotificationSetter userId={user.userId} />
                        </div>
                    )}
                </div>
            </div>

            {/* Score Section */}
            <div className="mt-4 px-6">
                <Card className="bg-gradient-to-b from-slate-900/80 to-slate-900/40 border-white/5 rounded-[2.5rem] overflow-hidden">
                    <GoalAchievement current={currentScore} target={targetScore} />
                </Card>
            </div>

            {/* Main Mission (Teacher's Assignment) */}
            <div className="mt-8 px-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-400" />
                        <h3 className="text-lg font-black uppercase tracking-tighter italic">선생님의 미션</h3>
                    </div>
                    {pendingAssignments.length > 0 && (
                        <span className="text-[10px] font-black text-indigo-400 uppercase bg-indigo-500/10 px-2 py-1 rounded-md">
                            {pendingAssignments.length}개의 남은 과제
                        </span>
                    )}
                </div>

                {pendingAssignments.length > 0 ? (
                    <div className="space-y-4">
                        {pendingAssignments.slice(0, 2).map((assign) => (
                            <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id, assign.homeworkUrl)}>
                                <Card className="p-6 bg-slate-900/60 border-white/5 hover:border-indigo-500/30 transition-all rounded-[2rem] group relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-24 h-full bg-indigo-500/5 -skew-x-12 translate-x-12"></div>
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div className="space-y-1">
                                            <Badge variant="outline" className="text-[9px] font-black border-none bg-indigo-500/20 text-indigo-300 uppercase italic tracking-widest">{assign.typeLabel || assign.type}</Badge>
                                            <h4 className="text-xl font-black text-white italic tracking-tight leading-tight truncate max-w-[200px]">
                                                {assign.title || assign.detail}
                                            </h4>
                                        </div>
                                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 text-white font-black italic uppercase text-xs h-10 px-5 rounded-xl shadow-lg shadow-indigo-900/50">
                                            Go <ArrowRight className="ml-1 w-3 h-3" />
                                        </Button>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <Card className="p-10 bg-slate-900/20 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center">
                        <CheckCircle2 className="w-12 h-12 text-emerald-500/50 mb-3" />
                        <p className="text-slate-400 font-black italic">오늘의 모든 미션을 완료했습니다!</p>
                    </Card>
                )}
            </div>

        </div>
    );
}
