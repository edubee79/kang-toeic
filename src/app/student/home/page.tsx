"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { Target, Calendar, BarChart2, Zap, CheckCircle2, Trophy, ArrowRight, Flame, TrendingUp, Medal, Settings, User, AlertCircle, ChevronDown, ChevronUp, RotateCcw } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useUserData } from '@/context/UserDataContext';
import { NotificationSetter } from '@/components/dashboard/NotificationSetter';
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';
import { NotificationDropdown } from '@/components/dashboard/NotificationDropdown';
import { GoalOnboardingModal } from '@/components/modals/GoalOnboardingModal';

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
                        <div className="text-3xl font-black text-white italic tracking-tighter pr-2">
                            {target}<span className="text-base text-slate-500 ml-1 font-normal not-italic">점</span>
                        </div>
                        <div className="mt-2 text-[10px] text-slate-500 font-bold uppercase tracking-tight">
                            목표까지 <span className="text-indigo-400">+{Math.max(0, target - current)}점</span> 남았습니다
                        </div>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] font-bold mb-1 uppercase tracking-tight">AI 예측 점수</p>
                        <div className="text-3xl font-black text-indigo-400 italic tracking-tighter pr-2">
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
                        <span className="font-black text-indigo-400 italic pr-1">{percentage}%</span>
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
    const {
        user: profile,
        report: weaknessReport,
        rankInfo,
        streak,
        loading: globalLoading,
        refreshAll,
        setUserGoal
    } = useUserData();

    const [loading, setLoading] = useState(true);
    const [assignments, setAssignments] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, any>>({});
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [showPastAssignments, setShowPastAssignments] = useState(false);

    // Derived values from context
    const currentScore = profile?.performanceSummary?.predictedTotal || 0;
    const targetScore = profile?.targetScore || 850;

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        const activeUserId = parsedUser.userId || parsedUser.id || parsedUser.username;

        if (activeUserId) {
            // Use global refresh instead of local fetch
            refreshAll(activeUserId, parsedUser.className || 'default');
            fetchAssignments(parsedUser.className || 'default', activeUserId);
        }
    }, [router, refreshAll]);

    // Check for onboarding
    useEffect(() => {
        if (!globalLoading && profile) {
            if (!profile.targetScore || profile.targetScore === 0) {
                setShowOnboarding(true);
            } else {
                setShowOnboarding(false);
            }
        }
    }, [globalLoading, profile]);

    // Internal loading state should sync with global or internal processes
    useEffect(() => {
        if (!globalLoading) {
            setLoading(false);
        }
    }, [globalLoading]);

    const handleOnboardingConfirm = async (score: number) => {
        if (profile) {
            await setUserGoal(profile.userId, profile.className || 'default', score);
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

    const getThisWeekMonday = () => {
        const now = new Date();
        const day = now.getDay(); // 0 is Sunday, 1 is Monday...
        // If Sunday (0), we need to go back 6 days to get to Monday. Otherwise, subtract (day - 1)
        const diff = now.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(now.setDate(diff));
        monday.setHours(0, 0, 0, 0);
        return monday;
    };

    const thisWeekMonday = getThisWeekMonday();

    const thisWeekAssignments = pendingAssignments.filter(a => {
        if (!a.createdAt || !a.createdAt.toDate) return false;
        return a.createdAt.toDate() >= thisWeekMonday;
    });

    const pastAssignments = pendingAssignments.filter(a => {
        if (!a.createdAt || !a.createdAt.toDate) return true; // Without date falls to past backlog
        return a.createdAt.toDate() < thisWeekMonday;
    });
    return (
        <div className="min-h-screen bg-[#0B0F1A] pb-24 font-sans text-white">
            {/* Force Push Notification Activation */}
            {profile?.userId && <NotificationForceModal userId={profile.userId} />}

            {/* Goal Onboarding Modal */}
            <GoalOnboardingModal
                isOpen={showOnboarding}
                onConfirm={handleOnboardingConfirm}
            />

            {/* Approval Status Banner */}
            {profile?.status === 'pending' && (
                <div className="mx-6 mt-6 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0 border border-indigo-500/30">
                        <AlertCircle className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                        <p className="text-white font-bold text-sm tracking-tight">
                            현재 <span className="text-indigo-400">가입 승인 대기 중</span>입니다.
                        </p>
                        <p className="text-slate-400 text-xs font-medium">
                            관리자의 승인이 완료된 후 모든 학습 기능을 정상적으로 이용하실 수 있습니다.
                        </p>
                    </div>
                </div>
            )}

            {/* Header: Class & Notifications */}
            <div className="px-6 pt-8 flex justify-between items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
                        <Trophy className="w-3.5 h-3.5 text-amber-500" />
                        <span className="text-xs font-black italic pr-1">
                            {profile?.className || '수강반 정보 없음'}
                            <span className="text-slate-500 not-italic ml-1">반</span>
                        </span>
                    </div>

                    {rankInfo && (
                        <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                            <Medal className="w-3.5 h-3.5 text-indigo-400" />
                            <span className="text-xs font-black italic pr-1">
                                {rankInfo.rank}<span className="text-slate-500 not-italic ml-0.5">위</span>
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        <span className="text-xs font-black italic pr-1">
                            {streak}<span className="text-slate-500 not-italic ml-0.5">일째</span>
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {(profile?.userId || profile?.username || profile?.id) && (
                        <div className="flex items-center gap-3">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => refreshAll(profile.userId || profile.username || profile.id, profile.className || 'default', true)}
                                disabled={globalLoading}
                                className="h-10 w-10 p-0 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-full transition-all"
                                title="점수 및 정보 새로고침"
                            >
                                <RotateCcw className={cn("w-5 h-5", globalLoading && "animate-spin")} />
                            </Button>
                            <NotificationDropdown userId={profile.userId || profile.username || profile.id} />
                            <NotificationSetter userId={profile.userId || profile.username || profile.id} />
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
                        <h3 className="text-lg font-black uppercase tracking-tighter italic pr-2">이번 주 미션</h3>
                    </div>
                    {thisWeekAssignments.length > 0 && (
                        <span className="text-[10px] font-black text-indigo-400 uppercase bg-indigo-500/10 px-2 py-1 rounded-md">
                            이번 주 {thisWeekAssignments.length}개 남음
                        </span>
                    )}
                </div>

                {thisWeekAssignments.length > 0 ? (
                    <div className="space-y-4">
                        {thisWeekAssignments.map((assign) => (
                            <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id, assign.homeworkUrl)}>
                                <Card className="p-6 bg-slate-900/60 border-white/5 hover:border-indigo-500/30 transition-all rounded-[2rem] group relative overflow-hidden">
                                    <div className="absolute right-0 top-0 w-24 h-full bg-indigo-500/5 -skew-x-12 translate-x-12"></div>
                                    <div className="relative z-10 flex justify-between items-center">
                                        <div className="space-y-1">
                                            <Badge variant="outline" className="text-[9px] font-black border-none bg-indigo-500/20 text-indigo-300 uppercase italic tracking-widest pr-1">{assign.typeLabel || assign.type}</Badge>
                                            <h4 className="text-xl font-black text-white italic tracking-tight leading-tight truncate max-w-[200px] pr-2">
                                                {assign.title || assign.detail}
                                            </h4>
                                        </div>
                                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 text-white font-black italic uppercase text-xs h-10 px-5 rounded-xl shadow-lg shadow-indigo-900/50 pr-6">
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
                        <p className="text-slate-400 font-black italic">이번 주의 모든 미션을 완료했습니다!</p>
                    </Card>
                )}

                {/* Past Backlogs */}
                {pastAssignments.length > 0 && (
                    <div className="mt-8 border-t border-slate-800/50 pt-6">
                        <Button
                            variant="ghost"
                            className="w-full flex items-center justify-between p-4 h-auto bg-slate-900/30 hover:bg-slate-900/60 border border-slate-800 rounded-2xl"
                            onClick={() => setShowPastAssignments(!showPastAssignments)}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                                    <AlertCircle className="w-4 h-4 text-slate-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-bold text-slate-300 text-sm">지난 주 밀린 과제 보기</h4>
                                    <p className="text-xs text-slate-500">기한이 지났지만 완료하지 않은 과제가 {pastAssignments.length}개 있습니다.</p>
                                </div>
                            </div>
                            {showPastAssignments ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                        </Button>

                        {showPastAssignments && (
                            <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                                {pastAssignments.map((assign) => (
                                    <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id, assign.homeworkUrl)} className="block opacity-70 hover:opacity-100 transition-opacity">
                                        <Card className="p-4 bg-slate-900/40 border-slate-800 hover:border-slate-700 transition-all rounded-xl group relative overflow-hidden flex justify-between items-center">
                                            <div className="space-y-0.5">
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-[9px] font-black border-slate-700 bg-slate-800/50 text-slate-400 uppercase pr-1">{assign.typeLabel || assign.type}</Badge>
                                                    <span className="text-xs text-rose-500/70 font-black tracking-tight">기한 초과</span>
                                                </div>
                                                <h4 className="text-sm font-bold text-slate-300 truncate max-w-[200px]">
                                                    {assign.title || assign.detail}
                                                </h4>
                                            </div>
                                            <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white group-hover:bg-slate-800 h-8 px-3 rounded-lg">
                                                진행 <ArrowRight className="ml-1 w-3 h-3" />
                                            </Button>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

        </div>
    );
}
