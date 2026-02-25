'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { cn } from '@/lib/utils';
import {
    Loader2, AlertCircle, AlertTriangle, BarChart2, TrendingUp, Target, Zap,
    BookOpen, ChevronRight, CheckCircle2, Calendar, RotateCcw,
    ArrowLeft, Sparkles, Lock
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ResponsiveContainer } from 'recharts';
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';
import { TargetSettingSection } from '@/components/dashboard/TargetSettingSection';
import { UserProfile } from '@/services/userService';

// 🧪 PRODUCTION MODE (TEST_MODE logic has been merged into logic block)
const TEST_MODE = false;

export default function StudentAnalysisPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState<WeaknessReport | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [recommendedTest, setRecommendedTest] = useState<{ testId: number; title: string; url: string } | null>(null);
    const [typeReviewAssignments, setTypeReviewAssignments] = useState<any[]>([]);
    const [aiRecommendations, setAiRecommendations] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

    // AI Weekly Report States
    const [user, setUser] = useState<any>(null);
    const [loadingWeeklyReport, setLoadingWeeklyReport] = useState(false);
    const [aiWeeklyReport, setAiWeeklyReport] = useState('');
    const [showFullReport, setShowFullReport] = useState(false);
    const [reportDate, setReportDate] = useState<string | null>(null);
    const [aiSchedule, setAiSchedule] = useState<any>(null);
    const [isReportDayEnabled, setIsReportDayEnabled] = useState(true);
    const [analysisTab, setAnalysisTab] = useState<'ANALYSIS' | 'PRESCRIPTION'>('ANALYSIS');

    const [error, setError] = useState<string | null>(null);
    const [showGuide, setShowGuide] = useState(false);

    const fetchWeaknessData = async (forceRefresh: boolean = false) => {
        try {
            setLoading(true);
            setError(null);

            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                router.push('/');
                return;
            }
            const userObj = JSON.parse(userStr);
            const userId = userObj.userId || userObj.uid;
            setUser(userObj);

            // Fetch Main Report
            console.log("Fetching weakness analysis...", forceRefresh ? "(Force Refresh)" : "");
            const data = await WeaknessService.analyzeUserWeakness(userId, forceRefresh);
            setReport(data);

            // Fetch AI Recommendations (Prescriptions)
            const aiRecs = await WeaknessService.getAiRecommendations(userId);
            setAiRecommendations(aiRecs);

            // Fetch AI Report Schedule
            const { getAIReportSchedule } = await import('@/services/configService');
            const schedule = await getAIReportSchedule();
            setAiSchedule(schedule);

            // Check if today is an enabled day
            const today = new Date().getDay();
            const isEnabled = schedule.enabledDays.includes(today);
            setIsReportDayEnabled(isEnabled);

            // Fetch recommended test if there's a weakest part
            if (data.weakestPart && data.weakestPart.part !== 'none') {
                try {
                    const response = await fetch(`/api/homework/next-test?userId=${userId}&part=${data.weakestPart.part}`);
                    const testData = await response.json();

                    if (testData.success && testData.testId) {
                        const partUrlMap: Record<string, string> = {
                            'p1': 'part1-real', 'p2': 'part2-real', 'p3': 'part3-real', 'p4': 'part4-real',
                            'p5': 'part5-real', 'p6': 'part6-real', 'p7_single': 'part7-real', 'p7_double': 'part7-real'
                        };
                        const url = partUrlMap[data.weakestPart.part];

                        setRecommendedTest({
                            testId: testData.testId,
                            title: `Part ${data.weakestPart.part.replace('p', '')} Test ${testData.testId}`,
                            url: `/homework/${url}?test=${testData.testId}&from=/student/analysis`
                        });
                    }
                } catch (err) {
                    console.warn('Recommended test fetch failed:', err);
                }
            }

            // Fetch regular Type Review assignments
            try {
                const q = query(
                    collection(db, 'Assignments'),
                    where('targetStudentId', '==', userId),
                    where('type', '==', 'type_review')
                );

                const snap = await getDocs(q);
                const fetchedAssignments = snap.docs
                    .map(doc => ({ id: doc.id, ...doc.data() }))
                    .filter((a: any) => a.status === 'active' && !a.isAiGenerated);

                setTypeReviewAssignments(fetchedAssignments);
            } catch (err) {
                console.warn('Assignments fetch failed:', err);
            }

            // Fetch Manager_Results
            try {
                const qResults = query(
                    collection(db, 'Manager_Results'),
                    where('studentId', '==', userId)
                );
                const resultsSnap = await getDocs(qResults);
                const doneMap: Record<string, boolean> = {};
                resultsSnap.forEach(d => {
                    const r = d.data();
                    const key = `${r.type}_${r.detail}_${r.mode || 'real'}`;
                    doneMap[key] = true;
                });
                setCompletedMap(doneMap);
            } catch (err) {
                console.warn('Results fetch failed:', err);
            }

            // Fetch Persisted AI Report
            if (data.latestWeeklyReport) {
                setAiWeeklyReport(data.latestWeeklyReport.content);
                setReportDate(data.latestWeeklyReport.createdAt);
            }

        } catch (err: any) {
            console.error('Initial load failed:', err);
            setError(err.message || '데이터를 불러오는 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setIsMounted(true);
        fetchWeaknessData();
    }, [router]);

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white animate-in fade-in duration-500">
                {/* Force Push Notification Activation */}
                {user?.userId && <NotificationForceModal userId={user.userId || user.uid} />}

                <div className="flex h-screen items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex h-screen flex-col items-center justify-center bg-slate-900 p-6 text-center">
                <div className="mb-4 rounded-full bg-rose-500/10 p-4">
                    <AlertCircle className="h-12 w-12 text-rose-500" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">오류가 발생했습니다</h2>
                <p className="text-slate-400 mb-6 max-w-md">{error}</p>
                <Button onClick={() => window.location.reload()} className="bg-indigo-600 hover:bg-indigo-500">
                    다시 시도하기
                </Button>
            </div>
        );
    }

    if (!report || report.weakestTags.length === 0) {
        return (
            <div className="flex h-screen flex-col items-center justify-center bg-slate-900 p-6 text-center">
                <div className="mb-4 rounded-full bg-slate-800 p-4">
                    <Target className="h-12 w-12 text-slate-500" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">데이터가 충분하지 않습니다</h2>
                <p className="text-slate-400 mb-6">문제를 더 풀면 약점을 분석해드릴게요!</p>
                <Button onClick={() => router.push('/student/home')} className="bg-indigo-600 hover:bg-indigo-500">
                    문제 풀러 가기
                </Button>
            </div>
        );
    }

    const chartData = report.weakestTags.map(tag => ({
        name: tag.label,
        value: tag.incorrect,
        fullTag: tag
    }));

    // NEW PREDICTION LOGIC (UNIFIED)
    const lcParts = ['p1', 'p2', 'p3', 'p4'];
    const rcParts = ['p5', 'p6', 'p7s', 'p7d'];

    const lcCorrect = lcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);
    const rcCorrect = rcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);

    // User Formula: (LC_Sum * 5) + 10, (RC_Sum * 5) - 10
    const lcScore = lcCorrect > 0 ? (lcCorrect * 5) + 10 : 0;
    const rcScore = rcCorrect > 0 ? (rcCorrect * 5) - 10 : 0;

    const estScore = Math.max(0, lcScore) + Math.max(0, rcScore);
    const progress = Math.min(100, Math.round((estScore / report.targetScore) * 100));

    // Map stats for TargetSettingSection
    const currentStatsForTarget = {
        p1_cur: report.targetStats.p1?.latest || 0,
        p2_cur: report.targetStats.p2?.latest || 0,
        p3_cur: report.targetStats.p3?.latest || 0,
        p4_cur: report.targetStats.p4?.latest || 0,
        p5_cur: report.targetStats.p5?.latest || 0,
        p6_cur: report.targetStats.p6?.latest || 0,
        p7s_cur: report.targetStats.p7s?.latest || 0,
        p7d_cur: report.targetStats.p7d?.latest || 0,
        p7f_cur: (report.targetStats.p7s?.latest || 0) + (report.targetStats.p7d?.latest || 0)
    };

    return (
        <div className="space-y-6 max-w-7xl mx-auto pb-20 pt-4 px-4">
            {/* Force Push Notification Activation */}
            {user?.userId && <NotificationForceModal userId={user.userId || user.uid} />}

            {/* AI Analysis Tab Navigation */}
            <div className="flex justify-between items-center border-b border-white/5 pb-2 px-2">
                <div className="flex gap-6">
                    <button
                        onClick={() => setAnalysisTab('ANALYSIS')}
                        className={cn(
                            "text-2xl font-black italic tracking-tighter transition-all relative uppercase",
                            analysisTab === 'ANALYSIS' ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
                        )}
                    >
                        AI 리포트
                        {analysisTab === 'ANALYSIS' && <div className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />}
                    </button>
                    <button
                        onClick={() => setAnalysisTab('PRESCRIPTION')}
                        className={cn(
                            "text-2xl font-black italic tracking-tighter transition-all relative uppercase",
                            analysisTab === 'PRESCRIPTION' ? "text-indigo-400" : "text-slate-500 hover:text-slate-300"
                        )}
                    >
                        학습 처방
                        {analysisTab === 'PRESCRIPTION' && <div className="absolute -bottom-2 left-0 right-0 h-1 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />}
                    </button>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => fetchWeaknessData(true)}
                    className="h-10 w-10 p-0 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-full transition-all"
                >
                    <RotateCcw className={cn("w-5 h-5", loading && "animate-spin")} />
                </Button>
            </div>

            {analysisTab === 'ANALYSIS' ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* 헬프 가이드 (토글형) */}
                    <Card className="bg-slate-900 border-indigo-500/20 p-4 relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="p-1.5 bg-indigo-500/20 rounded-lg text-indigo-400">
                                        <AlertCircle className="w-4 h-4" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white tracking-tight uppercase">AI 분석 페이지 사용 가이드</h3>
                                </div>
                                <button
                                    onClick={() => setShowGuide(!showGuide)}
                                    className="text-[10px] font-bold text-slate-500 hover:text-white transition-colors border border-slate-700 px-2 py-1 rounded"
                                >
                                    {showGuide ? '가이드 접기' : '도움말 보기'}
                                </button>
                            </div>

                            {showGuide && (
                                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-indigo-400 uppercase tracking-wider">01. 목표점수 설정</p>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            [나의 목표 상세 현황] 내의 <span className="text-white">목표 수정하기</span> 버튼으로 파트별 목표 점수를 직접 변경할 수 있습니다.
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-indigo-400 uppercase tracking-wider">02. 목표 달성도 공식</p>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            최근 학습한 문제의 <span className="text-white">정답률과 난이도</span>를 AI가 실시간 시뮬레이션하여 예상 토익 점수를 도출합니다.
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-indigo-400 uppercase tracking-wider">03. 정밀 분석 리포트</p>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            학습 데이터가 누적되면 활성화됩니다. AI가 <span className="text-white">주간 학습 패턴</span>을 심층 분석하여 보완점을 제시합니다.
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[11px] font-black text-indigo-400 uppercase tracking-wider">04. AI 학습 처방</p>
                                        <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                            분석 결과를 바탕으로 <span className="text-white">약점 유형만 골라내어</span> 보강할 수 있는 맞춤 과제(AI Homework)를 생성합니다.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* 1. TOP: Goals & Achievement (LITERAL CODE COPY FROM WEAKNESS DASHBOARD) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Detailed Target Card (copied from TargetSettingSection Display View) */}
                        <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden text-inter">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Target className="text-indigo-400 w-5 h-5" />
                                            <h3 className="text-lg font-bold text-white">나의 목표 상세 현황</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm">
                                            목표: <span className="text-white font-bold">{report.targetScore}점</span>
                                            (LC {report.targetLCScore} / RC {report.targetRCScore})
                                        </p>
                                    </div>
                                    <Button
                                        onClick={() => router.push('/student/home')}
                                        variant="outline"
                                        className="h-8 text-xs border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                                    >
                                        목표 수정하기
                                    </Button>
                                </div>

                                {/* Comparison Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* LC Column */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase border-b border-blue-500/20 pb-1">Listening (LC)</h4>
                                        {['p1', 'p2', 'p3', 'p4'].map((p) => {
                                            const partStats = report.targetStats[p] || { target: 0, average: 0, latest: 0 };
                                            const goal = partStats.target;
                                            const current = partStats.average;
                                            const latest = partStats.latest;
                                            const gap = latest - goal;  // ✅ Use latest, not average

                                            return (
                                                <div key={p} className="flex items-center text-sm gap-2 font-inter">
                                                    <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{p}</span>
                                                    <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                            <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}</span>
                                                        </div>
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">평균</span>
                                                            <span className="text-white font-bold text-sm tracking-tight">{current}</span>
                                                        </div>
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">최근</span>
                                                            <span className={cn("font-bold text-sm tracking-tight", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                        </div>
                                                    </div>
                                                    <span className={cn("text-[11px] w-10 text-right font-black flex-shrink-0 font-inter", gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                                        {gap !== 0 ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* RC Column */}
                                    <div className="space-y-3">
                                        <h4 className="text-xs font-bold text-indigo-400 mb-2 uppercase border-b border-indigo-500/20 pb-1">Reading (RC)</h4>
                                        {['p5', 'p6', 'p7s', 'p7d'].map((p) => {
                                            const partStats = report.targetStats[p] || { target: 0, average: 0, latest: 0 };
                                            const goal = partStats.target;
                                            const current = partStats.average;
                                            const latest = partStats.latest;
                                            const gap = latest - goal;  // ✅ Use latest, not average

                                            const labelMap: Record<string, string> = {
                                                p5: 'P5', p6: 'P6', p7s: 'P7 S', p7d: 'P7 D'
                                            };

                                            return (
                                                <div key={p} className="flex items-center text-sm gap-2 font-inter">
                                                    <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{labelMap[p] || p}</span>
                                                    <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                            <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}</span>
                                                        </div>
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">평균</span>
                                                            <span className="text-white font-bold text-sm tracking-tight">{current}</span>
                                                        </div>
                                                        <div className="flex flex-col items-center min-w-[32px]">
                                                            <span className="text-slate-500 text-[9px] mb-0.5">최근</span>
                                                            <span className={cn("font-bold text-sm tracking-tight", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                        </div>
                                                    </div>
                                                    <span className={cn("text-[11px] w-10 text-right font-black flex-shrink-0 font-inter", gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                                        {gap !== 0 ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Score Overview Card (copied from StudentDashboard summary) */}
                        <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden font-inter">
                            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <Target className="text-indigo-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">나의 목표 달성도</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                        <div className="text-3xl font-black text-white">{report.targetScore}<span className="text-base text-slate-500 ml-1 font-normal">점</span></div>
                                        <div className="mt-2 text-xs text-slate-500">목표까지 <span className="text-indigo-400 font-bold">+{Math.max(0, report.targetScore - estScore)}점</span> 남았습니다.</div>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-xs font-medium mb-1 font-bold">AI PREDICTION</p>
                                        <div className="text-3xl font-black text-indigo-400">{estScore}<span className="text-base text-indigo-500/50 ml-1 font-normal">점</span></div>
                                        <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                                            <TrendingUp className="w-3 h-3 text-emerald-500" />
                                            <span className="text-emerald-500 font-bold">최근 학습 결과 반영</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>진행률</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* 2. MIDDLE: AI Analysis 섹션 */}
                    <div className="grid grid-cols-1 gap-8">
                        <Card className="border-indigo-500/20 bg-indigo-500/5 backdrop-blur relative overflow-hidden min-h-[400px]">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="text-white flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-amber-400" />
                                    AI 주간 정밀 분석 (Beta)
                                </CardTitle>
                                <Button
                                    onClick={async () => {
                                        if (!report) return;

                                        // ✅ Check if today is an enabled day
                                        if (!isReportDayEnabled) {
                                            const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
                                            const enabledDayNames = aiSchedule?.enabledDays.map((d: number) => dayNames[d]).join(', ') || '설정된 요일 없음';
                                            alert(`AI 리포트는 ${enabledDayNames}에만 생성할 수 있습니다.`);
                                            return;
                                        }

                                        setLoadingWeeklyReport(true);
                                        try {
                                            const userStr = localStorage.getItem('toeic_user');
                                            const user = userStr ? JSON.parse(userStr) : {};

                                            // ✅ Fetch AI report schedule and calculate period
                                            const { getAIReportSchedule, calculateReportPeriod } = await import('@/services/configService');
                                            const schedule = await getAIReportSchedule();
                                            const periodDays = calculateReportPeriod(schedule.lastReportDate);

                                            const weeklyStats = await WeaknessService.getWeeklyDetailedStats(
                                                user.userId || user.uid,
                                                periodDays  // ✅ Dynamic period
                                            );

                                            const response = await fetch('/api/ai-tutor/weekly-report', {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify({
                                                    stats: weeklyStats,
                                                    goals: {
                                                        targetScore: report.targetScore,
                                                        targetLC: report.targetLCScore,
                                                        targetRC: report.targetRCScore,
                                                        currentEst: estScore
                                                    },
                                                    targetStats: report.targetStats,  // ✅ 파트별 목표 추가
                                                    weakestTags: report.weakestTags,
                                                    studentName: user.userName || user.name || "학생",
                                                    userId: user.userId || user.uid,
                                                    periodDays  // ✅ Pass period to API
                                                })
                                            });

                                            const data = await response.json();

                                            if (response.ok && data.text) {
                                                setAiWeeklyReport(data.text);
                                                setReportDate(new Date().toISOString());
                                                setShowFullReport(true); // Open upon generation
                                            } else {
                                                console.error("API Error:", data.error || "Unknown error");
                                                alert(data.error || "리포트 생성 중 오류가 발생했습니다. 잠시 후 서버가 재시작되면 다시 시도해주세요.");
                                            }
                                        } catch (e) {
                                            console.error(e);
                                        } finally {
                                            setLoadingWeeklyReport(false);
                                        }
                                    }}
                                    disabled={loadingWeeklyReport || !isReportDayEnabled}
                                    className={`text-xs font-bold h-8 ${!isReportDayEnabled
                                        ? 'bg-slate-600 hover:bg-slate-600 cursor-not-allowed'
                                        : 'bg-indigo-600 hover:bg-indigo-500'
                                        }`}
                                >
                                    {loadingWeeklyReport ? (
                                        <>
                                            <Loader2 className="w-3 h-3 mr-2 animate-spin" />
                                            분석 중...
                                        </>
                                    ) : !isReportDayEnabled ? (
                                        <>
                                            <Lock className="w-3 h-3 mr-2" />
                                            오늘은 생성 불가
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="w-3 h-3 mr-2" />
                                            리포트 생성하기
                                        </>
                                    )}
                                </Button>
                            </CardHeader>
                            <CardContent>
                                {loadingWeeklyReport ? (
                                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                                        <div className="relative">
                                            <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                                            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-indigo-400 animate-pulse" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-white font-bold">강쌤 AI가 분석 중입니다...</p>
                                            <p className="text-slate-500 text-xs mt-1">지난 1주일간의 모든 학습 데이터를 검토하고 있습니다.</p>
                                        </div>
                                    </div>
                                ) : aiWeeklyReport ? (
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm">최신 정밀 리포트가 준비되어 있습니다</p>
                                                    <p className="text-slate-500 text-[10px]">{reportDate ? new Date(reportDate).toLocaleDateString() : ''} 분석 완료</p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => setShowFullReport(!showFullReport)}
                                                className="text-xs border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 h-8"
                                            >
                                                {showFullReport ? '리포트 숨기기' : '전체 내용 보기'}
                                            </Button>
                                        </div>

                                        {showFullReport && (
                                            <div className="text-slate-200 text-sm leading-relaxed prose prose-invert max-w-none prose-p:my-2 prose-headings:text-white prose-headings:font-black prose-strong:text-amber-400 animate-in fade-in slide-in-from-top-4 duration-500 border-t border-white/5 pt-4">
                                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                    {aiWeeklyReport}
                                                </ReactMarkdown>
                                                <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                                                    <button
                                                        onClick={() => setShowFullReport(false)}
                                                        className="text-[10px] text-slate-500 hover:text-white font-bold uppercase transition-colors"
                                                    >
                                                        리포트 닫기
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-slate-200 text-lg leading-relaxed font-medium mb-6">
                                            {report.analysisMessage}
                                        </p>
                                        {report.weakestTags.length > 0 && (
                                            <div className="space-y-3">
                                                <h4 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                                    <AlertCircle className="w-3 h-3 text-rose-500" />
                                                    반복 오답 분석 (상위 5개)
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {report.weakestTags.map(tag => (
                                                        <div key={tag.tag} className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2">
                                                            <span className="text-sm font-bold text-slate-200">{tag.label}</span>
                                                            <span className="bg-rose-500/20 text-rose-500 text-[10px] font-black px-1.5 py-0.5 rounded">
                                                                {tag.incorrect}회 오답
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                                                    * 우측 상단의 '리포트 생성하기' 버튼을 누르면 AI가 오답 원인과 처방전이 포함된 정밀 리포트를 작성합니다.
                                                </p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* 3. BOTTOM: AI Homework Recommendations */}
                    <Card className="border-none bg-slate-900 relative overflow-hidden shadow-2xl ring-1 ring-white/5">
                        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                        <CardContent className="p-8">
                            <div className="space-y-8">
                                {/* Header */}
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-black border border-emerald-500/20 tracking-wider">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        AI 맞춤 정밀 처방전
                                    </div>
                                    <h3 className="text-3xl font-black text-white leading-tight">
                                        취약점을 뿌리뽑기 위한<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 underline decoration-emerald-500/30 underline-offset-8">오늘의 필승 학습 전략</span>
                                    </h3>
                                    <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                                        실제 오답 데이터와 목표 점수 분석을 기반으로 엄선된 학습 경로입니다.
                                        아래 두 가지 방식 중 선택하여 주말 동안 꾸준히 학습하세요.
                                    </p>
                                </div>

                                {/* AI Recommendations Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                                    {aiRecommendations.length > 0 ? (
                                        aiRecommendations.map((item) => {
                                            // Deriving match key from homeworkUrl
                                            // Example: /homework/part5-real/test/10?mode=drill&tag=p5-conjunctions
                                            const url = item.homeworkUrl || '';
                                            const isPart2 = url.includes('part2');
                                            const parts = url.split('/');
                                            const testIdPart = isPart2 ? parts[3] : parts[4]; // Adjust based on path structure
                                            const testId = testIdPart?.split('?')[0];
                                            const urlParams = new URLSearchParams(url.split('?')[1] || '');
                                            const mode = urlParams.get('mode') || 'real';

                                            // Map part path to result type
                                            const pathMap: Record<string, string> = {
                                                'part1-real': 'part1_test',
                                                'part2': 'part2_test',
                                                'part3': 'part3_test',
                                                'part4': 'part4_test',
                                                'part5-real': 'part5_test',
                                                'part6': 'part6_test',
                                                'part7': 'part7_test'
                                            };
                                            const path = isPart2 ? 'part2' : parts[2];
                                            const type = pathMap[path] || 'unknown';

                                            const matchKey = `${type}_Test ${testId}_${mode}`;
                                            const isDone = completedMap[matchKey];

                                            return (
                                                <button
                                                    key={item.id}
                                                    onClick={() => {
                                                        const link = item.homeworkUrl;
                                                        const separator = link.includes('?') ? '&' : '?';
                                                        router.push(`${link}${separator}from=/student/analysis`);
                                                    }}
                                                    className={cn(
                                                        "group relative bg-slate-950 border rounded-2xl p-6 text-left transition-all overflow-hidden",
                                                        isDone ? "border-emerald-500/50 bg-emerald-500/5 shadow-inner" : "border-white/5 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "absolute top-0 right-0 w-24 h-24 rounded-full -mr-12 -mt-12 blur-2xl transition-colors",
                                                        isDone ? "bg-emerald-500/10" : "bg-emerald-500/5 group-hover:bg-emerald-500/10"
                                                    )}></div>
                                                    <div className="relative z-10">
                                                        <div className="flex justify-between items-start mb-4">
                                                            <div className={cn(
                                                                "w-12 h-12 rounded-xl flex items-center justify-center transition-transform",
                                                                isDone ? "bg-emerald-500 text-white" : "bg-emerald-500/10 text-emerald-400 group-hover:scale-110"
                                                            )}>
                                                                {isDone ? <CheckCircle2 className="w-6 h-6" /> : <Zap className="w-6 h-6" />}
                                                            </div>
                                                            {isDone && (
                                                                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest animate-in fade-in zoom-in duration-300">
                                                                    <CheckCircle2 className="w-3 h-3" />
                                                                    COMPLETED
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-2">
                                                                <span className={cn(
                                                                    "text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest",
                                                                    isDone ? "text-emerald-300 bg-emerald-900/40" : "text-emerald-400 bg-emerald-500/10"
                                                                )}>
                                                                    AI Priority
                                                                </span>
                                                            </div>
                                                            <h4 className={cn(
                                                                "text-[17px] font-black leading-tight",
                                                                isDone ? "text-emerald-100/70" : "text-white"
                                                            )}>{item.title}</h4>
                                                            <p className="text-[11px] text-slate-400 leading-relaxed font-medium line-clamp-3">
                                                                {item.description}
                                                            </p>
                                                            <div className={cn(
                                                                "pt-2 flex items-center gap-2 text-[10px] font-black transition-transform",
                                                                isDone ? "text-emerald-500" : "text-emerald-400 group-hover:translate-x-2"
                                                            )}>
                                                                <span>{isDone ? '다시 보강하기' : '지금 바로 보강하기'}</span>
                                                                <ChevronRight className="w-3 h-3" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            );
                                        })
                                    ) : (
                                        <div className="col-span-full py-12 flex flex-col items-center justify-center text-center bg-slate-950/50 rounded-2xl border border-dashed border-white/5 mx-auto w-full">
                                            <Sparkles className="w-8 h-8 text-slate-700 mb-3" />
                                            <p className="text-slate-500 text-sm font-medium">위의 버튼을 눌러 리포트를 생성하면<br />나만을 위한 맞춤 처방 과제가 이곳에 생성됩니다.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}
