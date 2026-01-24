'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Home, BarChart3, RotateCcw, Award, Clock, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCorrectAnswersForTest9, getCorrectAnswersForTest10, calculateScaledScore } from '@/lib/mock/scoring';
import { HalfTestService, HalfTestAnalysis } from '@/services/halfTestService';
import { cn } from '@/lib/utils';

export default function MockTestResult() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const testIdStr = params?.testId as string;
    const attemptId = searchParams.get('attemptId');
    const halfParam = searchParams.get('half'); // 쿼리 파라미터 체크 추가
    const isHalf = testIdStr?.includes('a') || testIdStr?.includes('b') || !!halfParam;
    const finalTestIdLabel = halfParam || testIdStr;
    const testId = Number(isHalf ? (halfParam || testIdStr).replace(/[^0-9]/g, '') : params?.testId);

    const [attempt, setAttempt] = useState<any>(null);
    const [halfAnalysis, setHalfAnalysis] = useState<HalfTestAnalysis | null>(null);
    const [stats, setStats] = useState<{
        lcRaw: number;
        rcRaw: number;
        lcScaled: number;
        rcScaled: number;
        total: number;
        isHalf?: boolean;
    } | null>(null);

    useEffect(() => {
        const fetchResult = async () => {
            const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
            const key = isHalf ? `full-half_${halfParam || testIdStr}` : `full-${testId}`;
            const data = savedAttempts[key];

            if (data && data.answers) {
                setAttempt(data);

                // 1. Scoring Logic
                let lcCorrect = 0;
                let rcCorrect = 0;

                // Determine which answer sheet to use
                const correctAnswers = testId === 9 ? getCorrectAnswersForTest9() :
                    testId === 10 ? getCorrectAnswersForTest10() : {};

                Object.entries(correctAnswers).forEach(([qId, correct]) => {
                    const userAns = data.answers[qId];
                    if (userAns === correct) {
                        const qNum = parseInt(qId.replace(/[^0-9]/g, ''));
                        if (qNum <= 100) lcCorrect++;
                        else rcCorrect++;
                    }
                });

                if (isHalf) {
                    // Half Test: Simple x10 scoring for level visualization (roughly)
                    setStats({
                        lcRaw: lcCorrect,
                        rcRaw: rcCorrect,
                        lcScaled: lcCorrect * 10,
                        rcScaled: rcCorrect * 10,
                        total: (lcCorrect + rcCorrect) * 10,
                        isHalf: true
                    });

                    // 2. Fetch REAL Time Analysis
                    if (attemptId) {
                        const analysis = await HalfTestService.analyzeAttempt(attemptId);
                        if (analysis) setHalfAnalysis(analysis);
                    }
                } else {
                    // Full Mock Test: Use ETS conversion table
                    const lcScaled = calculateScaledScore(lcCorrect, 'LC');
                    const rcScaled = calculateScaledScore(rcCorrect, 'RC');
                    setStats({
                        lcRaw: lcCorrect,
                        rcRaw: rcCorrect,
                        lcScaled,
                        rcScaled,
                        total: lcScaled + rcScaled,
                        isHalf: false
                    });
                }
            } else {
                router.push('/mock-test');
            }
        };

        fetchResult();
    }, [testId, testIdStr, isHalf, router, attemptId]);

    if (!attempt || !stats || (stats.isHalf && !halfAnalysis)) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="text-slate-400 font-bold animate-pulse">데이터 분석 리포트 생성 중...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-6 px-4 md:px-6 font-sans">
            <div className="max-w-4xl w-full space-y-4 animate-in fade-in duration-500">
                {/* 1. 상단 타이틀 및 점수 (Compact Header) */}
                <div className="bg-slate-900 rounded-[2rem] p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Premium Analysis</span>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                                1회 레벨테스트 <span className="text-indigo-400">학습결과</span>
                            </h1>
                            <p className="text-slate-400 font-bold tracking-tight text-xs">응시 일시: {new Date(attempt.date).toLocaleString()}</p>
                        </div>

                        <div className="flex gap-4 md:gap-8 bg-white/5 p-4 md:p-6 rounded-[1.5rem] border border-white/10 shadow-inner">
                            <div className="text-center group">
                                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1 group-hover:text-blue-300">LC 점수</p>
                                <p className="text-2xl font-black">{halfAnalysis.lcScore}<span className="text-[10px] ml-0.5 opacity-50">점</span></p>
                                <p className={cn("text-[10px] font-black mt-1", halfAnalysis.lcScore >= (halfAnalysis as any).lcTarget ? "text-emerald-400" : "text-rose-400")}>
                                    {halfAnalysis.lcScore >= (halfAnalysis as any).lcTarget ? `+${halfAnalysis.lcScore - (halfAnalysis as any).lcTarget}` : `${halfAnalysis.lcScore - (halfAnalysis as any).lcTarget}`}
                                </p>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center group">
                                <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-1 group-hover:text-emerald-300">RC 점수</p>
                                <p className="text-2xl font-black">{halfAnalysis.rcScore}<span className="text-[10px] ml-0.5 opacity-50">점</span></p>
                                <p className={cn("text-[10px] font-black mt-1", halfAnalysis.rcScore >= (halfAnalysis as any).rcTarget ? "text-emerald-400" : "text-rose-400")}>
                                    {halfAnalysis.rcScore >= (halfAnalysis as any).rcTarget ? `+${halfAnalysis.rcScore - (halfAnalysis as any).rcTarget}` : `${halfAnalysis.rcScore - (halfAnalysis as any).rcTarget}`}
                                </p>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1">환산 총점</p>
                                <p className="text-4xl font-black tracking-tighter text-white leading-none">{stats.total}<span className="text-sm ml-0.5 font-black text-white italic">점</span></p>
                                <div className="mt-2 flex flex-col items-center">
                                    <div className="h-px w-full bg-white/10 my-1"></div>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">목표: {halfAnalysis.targetGoal}점</p>
                                    <p className={cn("text-[10px] font-black mt-0.5", stats.total >= halfAnalysis.targetGoal ? "text-emerald-400" : "text-rose-400")}>
                                        {stats.total >= halfAnalysis.targetGoal ? `목표 달성 (+${stats.total - halfAnalysis.targetGoal})` : `목표 대비 ${halfAnalysis.targetGoal - stats.total}점 부족`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. [핵심] 중앙 약점 진단 (Compact Diagnosis) */}
                <Card className="rounded-[2rem] border-none shadow-lg bg-white overflow-hidden">
                    <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-rose-500" />
                        <h2 className="text-xl font-black text-slate-800 tracking-tight italic">깡쌤의 정밀 취약 유형 진단</h2>
                        <span className="hidden md:inline-block ml-auto text-[10px] font-bold text-slate-400">목표 점수: {halfAnalysis.targetGoal}점</span>
                    </div>
                    <CardContent className="p-4 md:p-6 space-y-3">
                        {['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7s', 'p7m']
                            .filter(key => halfAnalysis.partStats[key] && halfAnalysis.partStats[key].correct < halfAnalysis.partStats[key].target)
                            .map((key) => {
                                const stat = halfAnalysis.partStats[key];
                                return (
                                    <div key={key} className="flex flex-col md:flex-row gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100/50 hover:bg-indigo-50/30 transition-colors">
                                        <div className="shrink-0 flex md:flex-col items-center justify-center gap-2 md:w-20">
                                            <span className="text-2xl font-black text-slate-900">{key.toUpperCase()}</span>
                                            <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">MISS {stat.target - stat.correct}</span>
                                        </div>
                                        <div className="flex-1 space-y-3">
                                            <div className="flex flex-wrap gap-2">
                                                {stat.wrongTags.length > 0 && Array.from(new Set(stat.wrongTags)).slice(0, 3).map((tag: any, idx) => (
                                                    <span key={idx} className="bg-white text-slate-700 text-[10px] font-black px-3 py-1 rounded-xl border border-slate-200 shadow-sm italic"># {tag}</span>
                                                ))}
                                                {stat.wrongPassages.length > 0 && Array.from(new Set(stat.wrongPassages)).slice(0, 2).map((pass: any, idx) => (
                                                    <span key={idx} className="bg-indigo-600 text-white text-[10px] font-black px-3 py-1 rounded-xl shadow-sm"># {pass}</span>
                                                ))}
                                            </div>
                                            <div className="space-y-1.5 border-l-4 border-indigo-500/20 pl-4 py-1">
                                                <p className="text-slate-800 font-bold text-sm leading-relaxed whitespace-pre-wrap">
                                                    <span className="text-indigo-600 text-xs font-black block mb-0.5">원인 진단</span>
                                                    "{stat.customCoaching}"
                                                </p>
                                                <p className="text-slate-600 font-medium text-xs leading-relaxed">
                                                    <span className="text-emerald-600 text-xs font-black block mb-0.5">깡쌤의 해결책</span>
                                                    • {stat.solution}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </CardContent>
                </Card>

                {/* 3. 하단 분석 (Status & Time) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="rounded-[2rem] border-none shadow-md bg-white">
                        <div className="px-8 py-4 border-b border-slate-50 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-slate-400" />
                            <h3 className="text-sm font-black text-slate-700">파트별 달성 현황</h3>
                        </div>
                        <CardContent className="p-4 grid grid-cols-2 gap-2">
                            {Object.entries(halfAnalysis.partStats).map(([key, stat]: [any, any]) => (
                                <div key={key} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
                                    <span className="font-black text-slate-400 text-[10px] group-hover:text-indigo-500 transition-colors">{key.toUpperCase()}</span>
                                    <div className="text-right">
                                        <div className="flex items-baseline justify-end gap-1">
                                            <span className={cn("text-lg font-black", stat.correct < stat.target ? "text-rose-500" : "text-emerald-500")}>{stat.correct}</span>
                                            <span className="text-slate-300 font-bold text-xs">/ {stat.target}</span>
                                        </div>
                                        <p className={cn("text-[9px] font-bold leading-none mt-0.5", stat.correct >= stat.target ? "text-emerald-600/70" : "text-rose-500/70")}>
                                            {stat.correct >= stat.target ? `+${stat.correct - stat.target} 달성` : `-${stat.target - stat.correct} 부족`}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="rounded-[2rem] border-none shadow-md bg-slate-900 text-white overflow-hidden">
                        <div className="px-8 py-4 border-b border-white/5 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <h3 className="text-sm font-black text-indigo-400">RC 실전 시간 안배</h3>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            {halfAnalysis.rcTimeAnalysis.map((item, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <div className="flex justify-between items-end">
                                        <p className="font-black text-slate-500 italic tracking-widest text-[9px] uppercase">{item.part}</p>
                                        <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-full",
                                            item.level === 'RED' ? "bg-rose-500/20 text-rose-400" :
                                                item.level === 'YELLOW' ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
                                        )}>
                                            {item.level} PACE
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-slate-200 leading-snug italic">"{item.coachingText}"</p>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={cn("h-full transition-all duration-1000",
                                                item.level === 'RED' ? "bg-rose-500" : item.level === 'YELLOW' ? "bg-amber-500" : "bg-emerald-500"
                                            )}
                                            style={{ width: `${Math.min((item.estimateFull / item.targetFull) * 100, 100)}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Footer Actions (Compact) */}
                <div className="flex gap-4 pt-2">
                    <Button
                        onClick={() => router.push('/student/dashboard')}
                        variant="outline"
                        className="flex-1 h-24 border-2 border-slate-200 rounded-[2rem] font-black text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all text-xl tracking-tighter shadow-sm group"
                    >
                        <Home className="w-6 h-6 mr-3 transition-transform group-hover:-translate-y-1" />
                        학습 대시보드로 복귀
                    </Button>
                    <Button
                        onClick={() => router.push(`/mock-test/half/${finalTestIdLabel}`)}
                        className="flex-1 h-24 rounded-[2rem] font-black text-white bg-indigo-600 hover:bg-indigo-700 shadow-2xl shadow-indigo-200 transition-all active:scale-95 text-xl tracking-tighter group"
                    >
                        <RotateCcw className="w-6 h-6 mr-3 transition-transform group-hover:rotate-180 duration-500" />
                        하프테스트 다시 응시
                    </Button>
                </div>
            </div>
        </div>
    );
}


function ScoreBox({ label, raw, total, scaled, color }: { label: string, raw: number, total: number, scaled: number, color: string }) {
    const bgColor = color === 'rose' ? 'bg-rose-50' : (color === 'blue' ? 'bg-blue-50' : 'bg-emerald-50');
    const textColor = color === 'rose' ? 'text-rose-600' : (color === 'blue' ? 'text-blue-600' : 'text-emerald-600');
    const borderColor = color === 'rose' ? 'border-rose-100' : (color === 'blue' ? 'border-blue-100' : 'border-emerald-100');

    return (
        <div className={cn(bgColor, borderColor, "border-2 p-8 rounded-3xl flex flex-col items-center shadow-sm transition-transform hover:-translate-y-1")}>
            <span className={cn("text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1", textColor)}>{label}</span>
            <span className="text-5xl font-black text-slate-900 tracking-tighter">{scaled}</span>
            <div className="mt-4 flex items-center gap-1.5 px-4 py-1.5 bg-white rounded-full border border-inherit shadow-inner">
                <span className="text-[10px] font-black text-slate-400 uppercase">Raw Score:</span>
                <span className={cn("text-[12px] font-black", textColor)}>{raw}/{total}</span>
            </div>
        </div>
    );
}

function ProgressBar({ label, current, total, color }: { label: string, current: number, total: number, color: string }) {
    const percentage = (current / total) * 100;
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-xs font-black text-slate-700 px-1 uppercase tracking-tighter">
                <span>{label}</span>
                <span className="text-indigo-600">{Math.round(percentage)}% Correct</span>
            </div>
            <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden p-1 shadow-inner">
                <div
                    className={cn("h-full rounded-full transition-all duration-1000 ease-out shadow-lg", color)}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
