'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Headphones, Mic2, Lock, PlayCircle, Layers, CheckCircle } from 'lucide-react';
import { part1RealTests } from '@/data/toeic/listening/part1/tests';
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { cn } from "@/lib/utils";
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

export default function Part1RealLobby() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=PROBLEM';
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    // NEW: Volume Filtering State
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

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            // Fetch completion status
            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;

                // Generate unit names (matching Firestore format)
                // We'll fetch for both potential volumes to be safe
                const units = [
                    ...Array.from({ length: 10 }, (_, i) => `Part1 Real Test Vol3 ${i + 1}`),
                    ...Array.from({ length: 10 }, (_, i) => `Part1 Real Test Vol4 ${i + 1}`)
                ];
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

    // Filter tests by selected volume
    const filteredTests = part1RealTests.filter(t => t.vol === selectedVol);

    // NEW: Get limit for the specific volume
    const volLimits = access?.maxSets?.part1_real;
    const maxSet = typeof volLimits === 'object'
        ? (volLimits[selectedVol.toString()] || 0)
        : (volLimits || 10);

    // Available volumes (unique)
    const volumes = Array.from(new Set(part1RealTests.map(t => t.vol))).sort();

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">LC Part 1</span>
                            <span className="text-indigo-500"> Real Test</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">Photographs (사진 묘사 실전)</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxSet} Sets Open</p>
                </div>
            </div>

            <div className="w-full px-4 md:px-8 py-4 md:py-6">
                {/* Header Section with Icon */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                            <Headphones className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">LC Simulation</h2>
                            <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Real Test Mode</p>
                        </div>
                    </div>

                    {/* NEW: Volume Selector Tabs */}
                    <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
                        {volumes.map((v) => (
                            <button
                                key={v}
                                onClick={() => {
                                    setSelectedVol(v as number);
                                    const params = new URLSearchParams(searchParams.toString());
                                    params.set('vol', v.toString());
                                    router.push(`/homework/part1-real?${params.toString()}`, { scroll: false });
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

                {/* Grid Section */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 font-inter">
                    {filteredTests.map((test, index) => {
                        const isLocked = test.testId > maxSet;

                        return (
                            <Link
                                key={`${test.vol}-${test.testId}`}
                                href={isLocked ? "#" : `/homework/part1-real/test/${test.vol}/${test.testId}?from=${encodeURIComponent(`/homework/part1-real?vol=${selectedVol}&from=${encodeURIComponent(fromPath)}`)}`}
                                onClick={(e) => {
                                    if (isLocked) {
                                        e.preventDefault();
                                        alert(`Vol ${test.vol}의 ${maxSet}회차까지만 현재 오픈되어 있습니다.`);
                                    }
                                }}
                                className={cn(
                                    "group relative bg-slate-900 border transition-all duration-300 rounded-xl md:rounded-2xl p-3 md:p-6 flex flex-col gap-2 min-h-[100px] md:min-h-[120px]",
                                    isLocked
                                        ? "border-slate-800 opacity-60 grayscale cursor-not-allowed"
                                        : completions[`Part1 Real Test Vol${test.vol} ${test.testId}`]?.completed
                                            ? "bg-indigo-500/10 border-indigo-500/40 hover:bg-slate-800 shadow-lg shadow-indigo-500/10"
                                            : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50"
                                )}
                            >
                                <div className="relative z-10 flex items-start justify-between w-full gap-2">
                                    <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            isLocked ? 'text-slate-600 border-slate-800' : 'text-indigo-400 border-slate-800 group-hover:text-indigo-300'
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
                                            {!isLocked && completions[`Part1 Real Test Vol${test.vol} ${test.testId}`]?.completed && (
                                                <span className="text-[10px] font-black text-indigo-400 mt-1 uppercase italic pr-1">
                                                    SCORE: {completions[`Part1 Real Test Vol${test.vol} ${test.testId}`].score}/{completions[`Part1 Real Test Vol${test.vol} ${test.testId}`].total}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-1.5">
                                        {isLocked ? (
                                            <Lock className="w-3.5 h-3.5 md:w-5 md:h-5 text-slate-700" />
                                        ) : completions[`Part1 Real Test Vol${test.vol} ${test.testId}`]?.completed ? (
                                            <>
                                                <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
                                                <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-emerald-400 transition-colors ml-1 md:ml-2" />
                                            </>
                                        ) : (
                                            <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-9 md:pl-14 mt-auto">
                                    <p className={cn(
                                        "text-[9px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        isLocked ? "text-slate-700" : (completions[`Part1 Real Test Vol${test.vol} ${test.testId}`]?.completed ? "text-indigo-400" : "text-slate-500")
                                    )}>
                                        {isLocked ? `VOL ${test.vol} ⸱ ${test.questions.length} Q` : (completions[`Part1 Real Test Vol${test.vol} ${test.testId}`]?.completed ? 'COMPLETED' : `PART 1 ⸱ VOL ${test.vol} ⸱ ${test.questions.length} Q`)}
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
