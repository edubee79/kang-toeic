'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Home, BarChart3, RotateCcw, Award, Clock, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LevelTestService, LevelTestAnalysis } from '@/services/levelTestService';
import { cn } from '@/lib/utils';

export default function LevelTestResult() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = searchParams.get('testId');
    const attemptId = searchParams.get('attemptId');

    const [attempt, setAttempt] = useState<any>(null);
    const [analysis, setAnalysis] = useState<LevelTestAnalysis | null>(null);

    useEffect(() => {
        const fetchResult = async () => {
            const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
            const key = `full-half_${testId}`;
            const data = savedAttempts[key];

            if (data && data.answers) {
                setAttempt(data);

                if (attemptId) {
                    const result = await LevelTestService.analyzeAttempt(attemptId);
                    if (result) {
                        setAnalysis(result);
                    }
                }
            } else {
                router.push('/mock-test');
            }
        };

        fetchResult();
    }, [testId, router, attemptId]);

    if (!attempt || !analysis) return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="text-slate-400 font-bold animate-pulse">깡쌤의 정밀 취약 분석 리포트 생성 중...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center py-6 px-4 md:px-6 font-sans">
            <div className="max-w-4xl w-full space-y-4 animate-in fade-in duration-500">
                {/* Header */}
                <div className="bg-slate-900 rounded-[2rem] p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl -mr-32 -mt-32"></div>
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-2 text-center md:text-left">
                            <span className="bg-rose-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest">Level Test Analysis</span>
                            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
                                {testId?.includes('b') ? '레벨테스트 2회 결과' : '레벨테스트 1회 결과'}
                            </h1>
                            <p className="text-slate-400 font-bold tracking-tight text-xs">응시 일시: {new Date(attempt.date).toLocaleString()}</p>
                        </div>

                        <div className="flex gap-4 md:gap-8 bg-white/5 p-4 md:p-6 rounded-[1.5rem] border border-white/10 shadow-inner">
                            <div className="text-center group">
                                <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1 group-hover:text-blue-300">LC 점수</p>
                                <p className="text-2xl font-black">{analysis.lcScore}<span className="text-[10px] ml-0.5 opacity-50">점</span></p>
                                <p className={cn("text-[10px] font-black mt-1", analysis.lcScore >= analysis.lcTarget ? "text-emerald-400" : "text-rose-400")}>
                                    {analysis.lcScore >= analysis.lcTarget ? `+${analysis.lcScore - analysis.lcTarget}` : `${analysis.lcScore - analysis.lcTarget}`}
                                </p>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center group">
                                <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest mb-1 group-hover:text-emerald-300">RC 점수</p>
                                <p className="text-2xl font-black">{analysis.rcScore}<span className="text-[10px] ml-0.5 opacity-50">점</span></p>
                                <p className={cn("text-[10px] font-black mt-1", analysis.rcScore >= analysis.rcTarget ? "text-emerald-400" : "text-rose-400")}>
                                    {analysis.rcScore >= analysis.rcTarget ? `+${analysis.rcScore - analysis.rcTarget}` : `${analysis.rcScore - analysis.rcTarget}`}
                                </p>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="text-center">
                                <p className="text-[9px] font-black text-indigo-400 uppercase tracking-widest mb-1">환산 총점</p>
                                <p className="text-4xl font-black tracking-tighter text-white leading-none">{analysis.overallScore}<span className="text-sm ml-0.5 font-black text-white italic">점</span></p>
                                <div className="mt-2 flex flex-col items-center">
                                    <div className="h-px w-full bg-white/10 my-1"></div>
                                    <p className="text-[9px] font-bold text-slate-500 uppercase">목표: {analysis.targetGoal}점</p>
                                    <p className={cn("text-[10px] font-black mt-0.5", analysis.overallScore >= analysis.targetGoal ? "text-emerald-400" : "text-rose-400")}>
                                        {analysis.overallScore >= analysis.targetGoal ? `목표 달성 (+${analysis.overallScore - analysis.targetGoal})` : `목표 대비 ${analysis.targetGoal - analysis.overallScore}점 부족`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Weakness Diagnosis */}
                <Card className="rounded-[2rem] border-none shadow-lg bg-white overflow-hidden">
                    <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-rose-500" />
                        <h2 className="text-xl font-black text-slate-800 tracking-tight italic">깡쌤의 레벨테스트 취약 유형 진단</h2>
                        <span className="hidden md:inline-block ml-auto text-[10px] font-bold text-slate-400">목표 점수: {analysis.targetGoal}점</span>
                    </div>
                    <CardContent className="p-4 md:p-6 space-y-3">
                        {['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7s', 'p7m']
                            .filter(key => analysis.partStats[key] && analysis.partStats[key].correct < analysis.partStats[key].target)
                            .map((key) => {
                                const stat = analysis.partStats[key];
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
                                                    "{stat.customCoaching || '정밀 진단 준비 중'}"
                                                </p>
                                                <p className="text-slate-600 font-medium text-xs leading-relaxed">
                                                    <span className="text-emerald-600 text-xs font-black block mb-0.5">깡쌤의 해결책</span>
                                                    • {stat.solution || '추천 학습 로드맵 확인 요망'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </CardContent>
                </Card>

                {/* Part Achievements & Time Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="rounded-[2rem] border-none shadow-md bg-white">
                        <div className="px-8 py-4 border-b border-slate-50 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4 text-slate-400" />
                            <h3 className="text-sm font-black text-slate-700">파트별 달성 현황</h3>
                        </div>
                        <CardContent className="p-4 grid grid-cols-2 gap-2">
                            {Object.entries(analysis.partStats).map(([key, stat]: [any, any]) => (
                                <div key={key} className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-sm transition-all">
                                    <span className="font-black text-slate-400 text-[10px] group-hover:text-indigo-500 transition-colors">{key.toUpperCase()}</span>
                                    <div className="text-right">
                                        <div className="flex items-baseline justify-end gap-1">
                                            <span className={cn("text-lg font-black", stat.correct < stat.target ? "text-rose-500" : "text-emerald-500")}>{stat.correct}</span>
                                            <span className="text-slate-300 font-bold text-xs">/ {stat.total || stat.target}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card className="rounded-[2rem] border-none shadow-md bg-slate-900 text-white overflow-hidden">
                        <div className="px-8 py-4 border-b border-white/5 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-400" />
                            <h3 className="text-sm font-black text-indigo-400">RC 실전 시간 안배 (Full 환산)</h3>
                        </div>
                        <CardContent className="p-6 space-y-4">
                            {analysis.rcTimeAnalysis.map((item, idx) => (
                                <div key={idx} className="space-y-1.5">
                                    <div className="flex justify-between items-end">
                                        <div className="flex flex-col">
                                            <p className="font-black text-slate-500 italic tracking-widest text-[9px] uppercase">{item.part}</p>
                                            <p className="text-[10px] font-bold text-slate-400">
                                                권장 {Math.floor(item.targetFull / 60)}분 / <span className={item.level === 'GREEN' ? "text-emerald-400" : "text-rose-400"}>예상 {Math.floor(item.estimateFull / 60)}분</span>
                                            </p>
                                        </div>
                                        <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-full",
                                            item.level === 'RED' ? "bg-rose-500/20 text-rose-400" :
                                                item.level === 'YELLOW' ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
                                        )}>
                                            {item.level} PACE
                                        </span>
                                    </div>
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className={cn("h-full rounded-full transition-all duration-1000",
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

                {/* Footer */}
                <div className="flex gap-4 pt-2">
                    <Button
                        onClick={() => router.push('/student/dashboard')}
                        variant="outline"
                        className="flex-1 h-20 border-2 border-slate-200 rounded-[2rem] font-black text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <Home className="w-5 h-5 mr-3" />
                        학습 대시보드로 복귀
                    </Button>
                </div>
            </div>
        </div>
    );
}
