'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, ChevronRight, AlertCircle, Sparkles, Search, BarChart3, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HalfTestService, HalfTestAnalysis } from '@/services/halfTestService';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { cn } from '@/lib/utils';

export default function IncorrectAnalysisPage() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const testId = Number(params?.testId);
    const attemptId = searchParams.get('attemptId');

    const [attempt, setAttempt] = useState<any>(null);
    const [halfAnalysis, setHalfAnalysis] = useState<HalfTestAnalysis | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!attemptId) return;
            try {
                const docRef = doc(db, 'MockTestAttempts', attemptId);
                const snapshot = await getDoc(docRef);
                if (snapshot.exists()) {
                    setAttempt(snapshot.data());
                    const analysis = await HalfTestService.analyzeAttempt(attemptId);
                    if (analysis) setHalfAnalysis(analysis);
                }
            } catch (error) {
                console.error("Error fetching analysis data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [attemptId]);

    if (loading) return (
        <div className="min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center p-6 text-center text-white">
            <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">심층 오답 데이터 분석 중...</p>
        </div>
    );

    if (!attempt || !halfAnalysis) return null;

    const totalMissed = Object.values(halfAnalysis.partStats).reduce((acc, s) => acc + (s.total - s.correct), 0);

    const getReviewUrl = (p: string) => {
        return `/mock-test/universal-review?attemptId=${attemptId}&part=${p}`;
    };

    const getQuickSolutionUrl = (p: string) => {
        return `/mock-test/full/${testId}/result/quick-solution?attemptId=${attemptId}&part=${p}`;
    };

    return (
        <div className="min-h-screen bg-[#0a0c10] text-slate-200 pb-20">
            {/* Header Area */}
            <div className="sticky top-0 z-50 bg-[#0a0c10]/80 backdrop-blur-xl border-b border-white/5 px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => router.back()}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <div>
                        <h1 className="text-base font-black italic tracking-tight uppercase">오답 정밀 분석 리포트</h1>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">{attempt.studentName} 수험생</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-rose-500/30 text-rose-500 font-black italic text-[10px] uppercase px-3 py-1 bg-rose-500/5">
                        Total {totalMissed} Missed
                    </Badge>
                </div>
            </div>

            <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
                {/* Intro Section */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase tracking-[0.4em] italic">
                        <BarChart3 className="w-4 h-4" />
                        Part-by-Part Insights
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white">
                        취약 파트 <span className="text-indigo-500 not-italic underline decoration-indigo-500/50 underline-offset-8">집중 분석</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                        단순히 정답을 확인하는 것을 넘어, 각 파트별 실수의 패턴을 파악하십시오.
                        <span className="text-slate-200"> "Quick Solution"</span>은 핵심 해설을, <span className="text-indigo-400"> "Review"</span>는 실제 시험 도구로 다시 풀어보는 도구입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(halfAnalysis.partStats).map(([part, stat]) => {
                        const missedCount = stat.total - stat.correct;
                        const isCompleted = missedCount === 0;
                        const partLabel = (() => {
                            const labels: Record<string, string> = {
                                p1: 'Part 1', p2: 'Part 2', p3: 'Part 3', p4: 'Part 4',
                                p5: 'Part 5', p6: 'Part 6', p7s: 'Part 7 (Single)', p7m: 'Part 7 (Multi)'
                            };
                            return labels[part] || part.toUpperCase();
                        })();

                        return (
                            <Card
                                key={part}
                                className={cn(
                                    "bg-white/5 border border-white/5 rounded-[2.5rem] p-8 transition-all relative overflow-hidden group",
                                    !isCompleted && "hover:border-indigo-500/30 hover:bg-white/[0.07] cursor-pointer"
                                )}
                                onClick={() => !isCompleted && router.push(getQuickSolutionUrl(part))}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic block">
                                            {stat.correct} / {stat.total} Correct
                                        </span>
                                        <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter shrink-0">{partLabel}</h4>
                                    </div>
                                    {isCompleted ? (
                                        <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                            <CheckCircle2 className="w-7 h-7" />
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-end">
                                            <span className="text-4xl font-black text-rose-500 italic leading-none">-{missedCount}</span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase italic tracking-widest mt-1">Points Loss</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-3 mt-8 relative z-10">
                                    {isCompleted ? (
                                        <div className="w-full py-3 bg-emerald-500/5 text-emerald-500/50 rounded-2xl font-black text-[10px] uppercase tracking-widest border border-emerald-500/10 flex items-center justify-center italic">
                                            Excellent Performance
                                        </div>
                                    ) : (
                                        <>
                                            <Button
                                                variant="outline"
                                                className="flex-1 h-12 border-white/10 hover:border-indigo-500/50 bg-transparent text-slate-200 rounded-2xl font-black text-xs uppercase italic tracking-tight transition-all"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push(getQuickSolutionUrl(part));
                                                }}
                                            >
                                                Solution
                                            </Button>
                                            <Button
                                                className="flex-1 h-12 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black text-xs uppercase italic tracking-tight shadow-xl shadow-indigo-600/20 transition-all active:scale-95"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push(getReviewUrl(part));
                                                }}
                                            >
                                                Start Review
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Footer Section: Guide Cards */}
                <div className="mt-20 p-10 bg-gradient-to-br from-indigo-900/20 to-slate-900/20 rounded-[3rem] border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/20">
                            <Sparkles className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h4 className="text-white font-black italic uppercase tracking-tight text-lg">Solution Mode</h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">
                            강쌤의 해설과 정답 근거를 즉시 확인합니다. 문제를 보는 즉시 포인트가 잡히지 않을 때 효과적입니다.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center border border-rose-500/20">
                            <Target className="w-5 h-5 text-rose-400" />
                        </div>
                        <h4 className="text-white font-black italic uppercase tracking-tight text-lg">Review Mode</h4>
                        <p className="text-slate-400 text-sm font-medium leading-relaxed">
                            실제 시험 시간 압박을 느끼며 다시 풀어봅니다. 본인의 실수를 근본적으로 교정하고 싶을 때 권장합니다.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
