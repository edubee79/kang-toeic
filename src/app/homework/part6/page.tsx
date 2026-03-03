'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Trophy, Star, Lock, PlayCircle, Layers, CheckCircle } from 'lucide-react';
import { part6TestData } from '@/data/toeic/reading/part6/tests';
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

export default function Part6LobbyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=PROBLEM';
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});
    const [selectedVol, setSelectedVol] = useState<number>(() => {
        const volParam = searchParams.get('vol');
        return volParam ? parseInt(volParam) : 3;
    });

    // Update selectedVol when URL param changes (e.g., via back button)
    useEffect(() => {
        const volParam = searchParams.get('vol');
        if (volParam) {
            const v = parseInt(volParam);
            if (!isNaN(v) && v !== selectedVol) {
                setSelectedVol(v);
            }
        }
    }, [searchParams, selectedVol]);

    useEffect(() => {
        setIsMounted(true);

        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId)) {
                // Legacy URL support - default to vol 3 or try to find?
                // For safety, redirect to lobby or assume vol 3
                router.push(`/homework/part6/test/3/${testId}?mode=real`);
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
                // Need to cover multiple volumes
                const units = [
                    ...Array.from({ length: 15 }, (_, i) => `RC_Part6_Vol3_Test${i + 1}_real`),
                    ...Array.from({ length: 15 }, (_, i) => `RC_Part6_Vol4_Test${i + 1}_real`)
                ];
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

    // Volume Logic
    const volumes = Array.from(new Set(part6TestData.map(t => t.vol))).sort();

    // NEW: Get limit for the specific volume
    const volLimits = access?.maxSets?.part6;
    const maxTest = typeof volLimits === 'object'
        ? (volLimits[selectedVol.toString()] || 0)
        : (volLimits || 10);

    const filteredTests = part6TestData.filter(t => t.vol === selectedVol);

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-32 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 6</span>
                            <span className="text-indigo-500"> Simulation</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">장문 공란 메우기 ⸱ 16문항 실전 정복</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3 md:gap-4 px-3 md:px-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                            <Layers className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <div className="flex items-center flex-wrap gap-2 md:gap-3">
                                <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Reading Drills</h2>
                                <span className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-lg md:rounded-xl bg-slate-900 border border-indigo-500/30 text-[9px] md:text-[11px] font-black text-indigo-400 uppercase tracking-tight shadow-lg shadow-indigo-500/5">
                                    <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    권장 풀이시간: 7분
                                </span>
                            </div>
                            <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Text Completion Mode</p>
                        </div>
                    </div>

                    {/* Volume Selector Tabs */}
                    <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl mr-3 md:mr-0">
                        {volumes.map((v) => (
                            <button
                                key={v}
                                onClick={() => {
                                    setSelectedVol(v);
                                    const params = new URLSearchParams(searchParams.toString());
                                    params.set('vol', v.toString());
                                    router.push(`/homework/part6?${params.toString()}`, { scroll: false });
                                }}
                                className={cn(
                                    "px-4 md:px-6 py-2 rounded-lg text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-200 flex items-center gap-2",
                                    selectedVol === v
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                                        : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                <Layers className={cn("w-3 h-3 md:w-4 h-4", selectedVol === v ? "text-indigo-200" : "text-slate-600")} />
                                Vol {v}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 font-inter">
                    {filteredTests.map((test) => {
                        const isLocked = test.testId > maxTest;
                        const completionKey = `RC_Part6_Vol${test.vol}_Test${test.testId}_real`;
                        const completion = completions[completionKey];

                        return (
                            <Link
                                key={test.testId}
                                href={isLocked ? "#" : `/homework/part6/test/${test.vol}/${test.testId}?mode=real&from=${encodeURIComponent(`/homework/part6?vol=${selectedVol}&from=${encodeURIComponent(fromPath)}`)}`}
                                onClick={(e) => {
                                    if (isLocked) {
                                        e.preventDefault();
                                        alert(`Vol ${test.vol}의 ${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                    }
                                }}
                                className={cn(
                                    "group relative p-3 md:p-6 rounded-xl md:rounded-2xl border transition-all duration-300 flex flex-col gap-2 min-h-[100px] md:min-h-[120px]",
                                    isLocked
                                        ? "bg-slate-900 border-slate-800 opacity-60 grayscale cursor-not-allowed"
                                        : completions[completionKey]?.completed
                                            ? "bg-indigo-500/10 border-indigo-500/40 hover:bg-slate-800 shadow-lg shadow-indigo-500/10"
                                            : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50"
                                )}
                            >
                                <div className="relative z-10 flex items-start justify-between w-full gap-2">
                                    <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            isLocked
                                                ? 'bg-slate-800 text-slate-600 border-slate-800'
                                                : 'bg-indigo-500/20 text-indigo-500 border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white'
                                        )}>
                                            {test.vol}
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className={cn(
                                                "text-xl md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-2",
                                                isLocked ? "text-slate-600" : "text-white"
                                            )}>
                                                TEST {String(test.testId).padStart(2, '0')}
                                            </h3>
                                            {!isLocked && completions[completionKey]?.completed && (
                                                <span className="text-[10px] font-black text-indigo-400 mt-1 uppercase italic pr-1">
                                                    SCORE: {completions[completionKey].score}/{completions[completionKey].total}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-1.5">
                                        {isLocked ? (
                                            <Lock className="w-3.5 h-3.5 md:w-5 md:h-5 text-slate-700" />
                                        ) : completions[completionKey]?.completed ? (
                                            <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
                                        ) : (
                                            <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-9 md:pl-14 mt-auto">
                                    <p className={cn(
                                        "text-[9px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        isLocked ? "text-slate-700" : (completions[completionKey]?.completed ? "text-indigo-400" : "text-slate-500")
                                    )}>
                                        {isLocked ? `VOL ${test.vol} ⸱ 16Q` : (completions[completionKey]?.completed ? 'COMPLETED' : `PART 6 ⸱ VOL ${test.vol} ⸱ 16Q`)}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
