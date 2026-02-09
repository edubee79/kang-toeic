'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Trophy, Lock, PlayCircle } from 'lucide-react';
import { part7TestData } from '@/data/toeic/reading/part7/tests';
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

export default function Part7LobbyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [testHistory, setTestHistory] = useState<Record<number, { attempts?: number; lastScore?: number }>>({});
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    useEffect(() => {
        setIsMounted(true);

        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part7/test/${testId}?mode=real`);
                return;
            }
        }

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            // Load history for all tests
            const history: Record<number, any> = {};
            part7TestData.forEach(test => {
                const saved = localStorage.getItem(`part7_history_test_${test.testId}`);
                if (saved) {
                    history[test.testId] = JSON.parse(saved);
                }
            });
            setTestHistory(history);

            // Fetch completion status
            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;
                const units = Array.from({ length: 10 }, (_, i) => `RC_Part7_Test${i + 1}_real`);
                const completionData = await getMultipleTestCompletions(userId, units);
                setCompletions(completionData);
            }

            setLoading(false);
        };
        fetchAccess();
    }, [router, searchParams]);

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxTest = access?.maxSets?.part7 || 10;

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 7</span>
                            <span className="text-amber-500"> Single</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">지문 분석 ⸱ 단일 지문 집중 훈련</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/10 shrink-0">
                        <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Reading Drills</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Single Passage Mode</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 font-inter">
                    {part7TestData.map((test) => {
                        const isLocked = test.testId > maxTest;
                        const history = testHistory[test.testId] || {};
                        const totalQuestions = test.sets.reduce((acc, p) => acc + p.questions.length, 0);

                        return (
                            <div
                                key={test.testId}
                                className={cn(
                                    "group relative bg-slate-900 border transition-all duration-300 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-1 md:gap-2",
                                    isLocked
                                        ? "border-slate-800 opacity-60 grayscale cursor-not-allowed"
                                        : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-amber-500/50"
                                )}
                            >
                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-amber-500/20 text-amber-400 border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white'
                                        )}>
                                            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <h3 className={cn(
                                            "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-4",
                                            isLocked ? "text-slate-600" : "text-white"
                                        )}>
                                            TEST {String(test.testId).padStart(2, '0')}
                                        </h3>
                                    </div>
                                    <div className="shrink-0 pl-2 flex items-center gap-2">
                                        {!isLocked && completions[`RC_Part7_Test${test.testId}_real`] && (
                                            <CompletionBadge
                                                completed={completions[`RC_Part7_Test${test.testId}_real`].completed}
                                                score={completions[`RC_Part7_Test${test.testId}_real`].score}
                                                total={completions[`RC_Part7_Test${test.testId}_real`].total}
                                            />
                                        )}
                                        {!isLocked ? (
                                            <Link href={`/homework/part7/test/${test.testId}?mode=real`}>
                                                <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-amber-400 transition-colors" />
                                            </Link>
                                        ) : (
                                            <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-10 md:pl-14 space-y-1.5">
                                    <p className={cn(
                                        "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        isLocked ? "text-slate-700" : "text-slate-500"
                                    )}>
                                        PART 7 ⸱ SINGLE PASSAGE
                                    </p>
                                    {history.attempts && !isLocked && (
                                        <div className="flex items-center gap-2">
                                            <span className="flex items-center gap-1 text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded uppercase leading-none border border-emerald-500/20 truncate">
                                                {history.attempts}회
                                            </span>
                                            {history.lastScore !== undefined && (
                                                <span className="text-[10px] font-black text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded uppercase leading-none border border-amber-500/20 truncate">
                                                    Best: {history.lastScore}/{totalQuestions}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
