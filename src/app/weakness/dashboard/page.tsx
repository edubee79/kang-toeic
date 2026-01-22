'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { Loader2, AlertCircle, AlertTriangle, BarChart2, TrendingUp, Target, Zap, BookOpen, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

// 🧪 TEST MODE: Set to true to simulate assignments without Firestore
const TEST_MODE = true;

export default function WeaknessDashboardPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState<WeaknessReport | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [recommendedTest, setRecommendedTest] = useState<{ testId: number; title: string; url: string } | null>(null);
    const [typeReviewAssignments, setTypeReviewAssignments] = useState<any[]>([]);

    useEffect(() => {
        setIsMounted(true);
        const fetchWeakness = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                router.push('/');
                return;
            }
            const user = JSON.parse(userStr);
            const userId = user.userId || user.uid;

            const data = await WeaknessService.analyzeUserWeakness(userId);
            console.log('📊 Weakness Report:', data);
            console.log('📊 Weakest Part:', data?.weakestPart);
            setReport(data);

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
                            url: `/homework/${url}?test=${testData.testId}`
                        });
                    }
                } catch (error) {
                    console.error('Error fetching recommended test:', error);
                }
            }

            // 🧪 TEST MODE or PRODUCTION MODE
            if (TEST_MODE) {
                // Generate mock assignments for testing
                const mockAssignments = [
                    {
                        id: 'test',  // Use 'test' to match custom page logic
                        type: 'type_review',
                        title: '📚 Part 2 유형별 복습',
                        description: '자주 틀린 유형: Indirect, YesNo, Tag',
                        targetPart: 'p2',
                        homeworkUrl: '/homework/part2/custom?assignmentId=test'
                    },
                    {
                        id: 'test',  // Use 'test' to match custom page logic
                        type: 'type_review',
                        title: '📚 Part 5 유형별 복습',
                        description: '자주 틀린 유형: 동명사, 분사, 관계대명사',
                        targetPart: 'p5',
                        homeworkUrl: '/homework/part5/custom?assignmentId=test'
                    }
                ];
                setTypeReviewAssignments(mockAssignments);
            } else {
                // PRODUCTION: Fetch from Firestore
                try {
                    const assignmentsSnapshot = await getDocs(
                        query(
                            collection(db, 'Assignments'),
                            where('targetStudentId', '==', userId),
                            where('type', '==', 'type_review'),
                            where('status', '==', 'active')
                        )
                    );

                    const assignments = assignmentsSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setTypeReviewAssignments(assignments);
                } catch (error) {
                    console.error('Error fetching type review assignments:', error);
                }
            }

            setLoading(false);
        };
        fetchWeakness();
    }, [router]);

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-900">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
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
                <Button onClick={() => router.push('/student/dashboard')} className="bg-indigo-600 hover:bg-indigo-500">
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

    // EXACT PREDICTION LOGIC FROM STUDENT DASHBOARD
    const totalCorrect = Object.values(report.targetStats).reduce((acc, curr) => acc + curr.average, 0);
    const estScore = totalCorrect > 0 ? Math.round((totalCorrect / 200) * 990) : 0;
    const progress = Math.min(100, Math.round((estScore / report.targetScore) * 100));

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20 pt-8 px-4">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
                        <BarChart2 className="w-8 h-8 text-indigo-500" />
                        나의 약점 분석 리포트
                    </h1>
                    <p className="text-slate-400 text-sm">목표 성적 달성을 위한 정밀 처방전입니다.</p>
                </div>
                <Button
                    onClick={() => router.push('/student/dashboard')}
                    variant="outline"
                    className="bg-slate-800 text-white border-slate-700 hover:bg-slate-700 hover:border-indigo-500/50 font-bold"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    나의 학습방으로
                </Button>
            </div>

            {/* 1. TOP: Goals & Achievement (LITERAL CODE COPY FROM STUDENT DASHBOARD) */}
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
                                onClick={() => router.push('/student/dashboard')}
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
                                    const goal = report.targetStats[p].target;
                                    const current = report.targetStats[p].average;
                                    const latest = report.targetStats[p].latest;
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
                                {['p5', 'p6', 'p7_single', 'p7_double'].map((p) => {
                                    const goal = report.targetStats[p].target;
                                    const current = report.targetStats[p].average;
                                    const latest = report.targetStats[p].latest;
                                    const gap = latest - goal;  // ✅ Use latest, not average

                                    return (
                                        <div key={p} className="flex items-center text-sm gap-2 font-inter">
                                            <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{p.replace('p7_', 'P7 ').replace('single', 'S').replace('double', 'D')}</span>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-indigo-500/20 bg-indigo-500/5 backdrop-blur relative overflow-hidden">
                    <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-400" />
                            AI 정밀 분석
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-200 text-lg leading-relaxed font-medium">
                            {report.analysisMessage}
                        </p>
                        {report.weakestTags.length > 0 && (
                            <div className="mt-6 space-y-3">
                                <h4 className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                                    <AlertCircle className="w-3 h-3 text-rose-500" />
                                    3회 이상 반복된 취약 유형
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
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="border-slate-800 bg-slate-900/50 backdrop-blur">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm text-slate-400">오답 유형 비중</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData.slice(0, 5)}>
                                    <XAxis dataKey="name" hide />
                                    <Bar dataKey="value" barSize={20} radius={[4, 4, 0, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={index === 0 ? '#f43f5e' : '#6366f1'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* 3. BOTTOM: AI Homework Recommendations */}
            <Card className="border-2 border-emerald-500/20 bg-slate-900 relative overflow-hidden">
                <CardContent className="p-8">
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold border border-emerald-500/20">
                                <Zap className="w-3 h-3" />
                                AI 맞춤 학습 추천
                            </div>
                            <h3 className="text-2xl font-black text-white leading-tight">
                                취약점을 완벽하게 보완하기 위한<br />
                                <span className="text-emerald-500">맞춤형 주말 과제</span>가 준비되었습니다.
                            </h3>
                            <p className="text-slate-400 max-w-2xl text-sm leading-relaxed">
                                실제 오답 데이터와 목표 점수 분석을 기반으로 엄선된 학습 경로입니다.
                                아래 두 가지 방식 중 선택하여 주말 동안 꾸준히 학습하세요.
                            </p>
                        </div>

                        {/* Two Homework Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            {/* Option 1: Weak Part Practice */}
                            <button
                                onClick={() => {
                                    if (recommendedTest) {
                                        router.push(recommendedTest.url);
                                    }
                                }}
                                className="group relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/30 hover:border-indigo-500/50 rounded-xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/30 transition-colors">
                                        <Target className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">1순위</span>
                                            <h4 className="text-lg font-black text-white">AI 추천 취약 파트 연습</h4>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                            {recommendedTest
                                                ? `${report.weakestPart?.part.toUpperCase().replace('_', ' ')} ${recommendedTest.title} 실전 모의고사를 풀어보세요.`
                                                : '목표 대비 가장 부족한 파트를 분석 중입니다...'}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-indigo-400 font-bold">
                                            <span>실전 모의고사 풀기</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </button>

                            {/* Option 2: Type Review - Dynamic rendering */}
                            {typeReviewAssignments.length > 0 ? (
                                typeReviewAssignments.map((assignment, idx) => (
                                    <button
                                        key={assignment.id + '_' + idx}
                                        onClick={() => {
                                            router.push(assignment.homeworkUrl);
                                        }}
                                        className="group relative bg-gradient-to-br from-rose-500/10 to-orange-500/10 border-2 border-rose-500/30 hover:border-rose-500/50 rounded-xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-rose-500/20"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/30 transition-colors">
                                                <AlertTriangle className="w-6 h-6 text-rose-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">
                                                        2순위 {typeReviewAssignments.length > 1 ? `(${idx + 1}/${typeReviewAssignments.length})` : ''}
                                                    </span>
                                                    <h4 className="text-lg font-black text-white">{assignment.title}</h4>
                                                </div>
                                                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                                    {assignment.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-rose-400 font-bold">
                                                    <span>유형별 문제 풀기</span>
                                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <button
                                    onClick={() => {
                                        router.push('/homework/part5/custom?assignmentId=test');
                                    }}
                                    className="group relative bg-gradient-to-br from-rose-500/10 to-orange-500/10 border-2 border-rose-500/30 hover:border-rose-500/50 rounded-xl p-6 text-left transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-rose-500/20"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/30 transition-colors">
                                            <AlertTriangle className="w-6 h-6 text-rose-400" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">2순위</span>
                                                <h4 className="text-lg font-black text-white">자주 틀리는 유형 학습</h4>
                                            </div>
                                            <p className="text-sm text-slate-400 leading-relaxed mb-3">
                                                {report.weakestTags.length > 0
                                                    ? `${report.weakestTags[0].label} 등 반복 오답 유형을 집중 복습합니다.`
                                                    : '이번 주 3회 이상 틀린 유형을 분석하여 제공합니다.'}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-rose-400 font-bold">
                                                <span>유형별 문제 풀기 (테스트)</span>
                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
