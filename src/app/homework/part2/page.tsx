'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { ArrowLeft, Headphones, PlayCircle, Activity, Mic2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Part2Lobby() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    useEffect(() => {
        setIsMounted(true);

        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part2/${testId}`);
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

                // Generate unit names (matching Firestore format)
                const units = Array.from({ length: 10 }, (_, i) => `LC_Part2_Test${i + 1}`);
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

    const maxTest = access?.maxSets?.part2 || 10;

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 2</span>
                            <span className="text-emerald-500"> Simulation</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">응답 찾기 실전 ⸱ 쉐도잉 훈련</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10 shrink-0">
                        <Activity className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Combat Training</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Listening Drills</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 font-inter">
                    {tests.map((test) => {
                        const isLocked = test > maxTest;
                        return (
                            <Card key={test} className={cn(
                                "group relative p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all overflow-hidden flex flex-col gap-1 md:gap-2",
                                isLocked
                                    ? 'bg-slate-900 border-slate-800 opacity-60 grayscale'
                                    : 'bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800'
                            )}>
                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white'
                                        )}>
                                            {test}
                                        </div>
                                        <h3 className={cn(
                                            "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-4",
                                            isLocked ? "text-slate-600" : "text-white"
                                        )}>
                                            TEST {String(test).padStart(2, '0')}
                                        </h3>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-1.5 md:gap-3">
                                        {!isLocked && completions[`LC_Part2_Test${test}`] && (
                                            <CompletionBadge
                                                completed={completions[`LC_Part2_Test${test}`].completed}
                                                score={completions[`LC_Part2_Test${test}`].score}
                                                total={completions[`LC_Part2_Test${test}`].total}
                                            />
                                        )}
                                        {isLocked ? (
                                            <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                        ) : (
                                            <>
                                                <Link href={`/homework/part2/${test}?mode=real`} title="Test Mode">
                                                    <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 hover:text-emerald-400 transition-colors" />
                                                </Link>
                                                <Link href={`/homework/part2/shadowing/${test}`} title="Shadowing Mode">
                                                    <Mic2 className="w-5 h-5 md:w-7 md:h-7 text-slate-600 hover:text-emerald-400 transition-colors" />
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="pl-10 md:pl-14">
                                    <p className={cn(
                                        "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        isLocked ? "text-slate-700" : "text-slate-500"
                                    )}>
                                        PART 2 ⸱ 25 QUESTIONS
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>

            <div className="bg-emerald-500/5 p-4 py-6 border-y border-emerald-500/10 text-center">
                <p className="text-[11px] md:text-sm text-emerald-400/70 font-black uppercase tracking-[0.2em] leading-tight flex items-center justify-center gap-3">
                    <Activity className="w-4 h-4 animate-pulse" />
                    AI 음성 실전 청취 훈련 시스템
                </p>
            </div>
        </div>
    );
}
