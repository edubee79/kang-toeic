'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { part5TestData } from '@/data/toeic/reading/part5/tests';
import { ArrowLeft, ChevronRight, Trophy, BookOpen, Timer, Lock, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

export default function Part5RealLobbyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    useEffect(() => {
        setIsMounted(true);

        // Check for test parameter and auto-redirect
        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part5-real/mode/${testId}`);
                return;
            }
        }

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            // Fetch completion status
            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;

                // Generate unit names for all tests (matching Firestore format)
                const units = Array.from({ length: 10 }, (_, i) => `RC_Part5_Test${i + 1}_real`);
                const completionData = await getMultipleTestCompletions(userId, units);
                setCompletions(completionData);
            }

            setLoading(false);
        };
        fetchAccess();
    }, [router, searchParams]);

    if (!isMounted || loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxTest = access?.maxSets?.part5 || 10;

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 5</span>
                            <span className="text-amber-500"> Simulation</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">실전 30문항 ⸱ 10분 타임어택</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/10 shrink-0">
                        <Trophy className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Real Combat</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Score Booster Mode</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 font-inter">
                    {part5TestData.map((test) => {
                        const isLocked = test.testId > maxTest;
                        return (
                            <Link
                                href={isLocked ? "#" : `/homework/part5-real/mode/${test.testId}`}
                                key={test.testId}
                                onClick={(e) => {
                                    if (isLocked) {
                                        e.preventDefault();
                                        alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                    }
                                }}
                            >
                                <div
                                    className={cn(
                                        "group relative bg-slate-900 border transition-all duration-300 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-1 md:gap-2",
                                        isLocked
                                            ? "border-slate-800 opacity-60 cursor-not-allowed grayscale"
                                            : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-amber-500/50"
                                    )}
                                >
                                    <div className="relative z-10 flex items-center justify-between w-full">
                                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                            <div className={cn(
                                                "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                                isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-amber-500/20 text-amber-400 border-amber-500/30 group-hover:bg-amber-500 group-hover:text-white'
                                            )}>
                                                <Trophy className="w-4 h-4 md:w-5 md:h-5" />
                                            </div>
                                            <h3 className={cn(
                                                "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-4",
                                                isLocked ? "text-slate-600" : "text-white"
                                            )}>
                                                TEST {String(test.testId).padStart(2, '0')}
                                            </h3>
                                        </div>
                                        <div className="shrink-0 pl-2 flex items-center gap-2">
                                            {!isLocked && completions[`RC_Part5_Test${test.testId}_real`] && (
                                                <CompletionBadge
                                                    completed={completions[`RC_Part5_Test${test.testId}_real`].completed}
                                                    score={completions[`RC_Part5_Test${test.testId}_real`].score}
                                                    total={completions[`RC_Part5_Test${test.testId}_real`].total}
                                                />
                                            )}
                                            {isLocked ? (
                                                <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                            ) : (
                                                <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-amber-400 transition-colors" />
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-10 md:pl-14">
                                        <p className={cn(
                                            "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                            isLocked ? "text-slate-700" : "text-slate-500"
                                        )}>
                                            PART 5 ⸱ 30Q ⸱ 10MIN
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
