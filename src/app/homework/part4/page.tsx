'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { ArrowLeft, Headphones, PlayCircle, Activity, Lock, Layers, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

// Mock data for tests (1 to 10)
import { part4Data } from '@/data/part4';

// Map data to tests
const tests = part4Data.map(t => ({
    id: t.testId,
    vol: t.vol,
    title: `TEST ${String(t.testId).padStart(2, '0')}`,
    isActive: true
})).sort((a, b) => a.id - b.id);

export default function Part4LobbyPage() {
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
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part4/test/${testId}`);
                return;
            }
        }

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;
                const units = [
                    ...Array.from({ length: 10 }, (_, i) => `Part4 Real Test Vol3 ${i + 1}`),
                    ...Array.from({ length: 10 }, (_, i) => `Part4 Real Test Vol4 ${i + 1}`)
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

    // Volume Logic
    const volumes = Array.from(new Set(tests.map(t => t.vol))).sort();

    // NEW: Get limit for the specific volume
    const volLimits = access?.maxSets?.part4;
    const maxTest = typeof volLimits === 'object'
        ? (volLimits[selectedVol.toString()] || 0)
        : (volLimits || 10);

    const outputTests = tests.filter(t => t.vol === selectedVol).map(t => ({
        ...t,
        isActive: t.id <= maxTest
    }));

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-32 px-0">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 4</span>
                            <span className="text-indigo-500"> Simulation</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">1인 담화 청해 ⸱ 30문항 실전 정복</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex items-center gap-3 md:gap-4 px-3 md:px-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                            <Activity className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Combat Training</h2>
                            <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Listening Drills</p>
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
                                    router.push(`/homework/part4?${params.toString()}`, { scroll: false });
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

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 font-inter">
                    {outputTests.map((test) => (
                        <Link
                            key={test.id}
                            href={test.isActive ? `/homework/part4/test/${test.vol}/${test.id}?from=${encodeURIComponent(`/homework/part4?vol=${selectedVol}&from=${encodeURIComponent(fromPath)}`)}` : '#'}
                            onClick={(e) => {
                                if (!test.isActive) {
                                    e.preventDefault();
                                    alert(`Vol ${test.vol}의 ${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                }
                            }}
                        >
                            <Card className={cn(
                                "group relative p-3 md:p-6 rounded-xl md:rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col gap-2 min-h-[100px] md:min-h-[120px]",
                                test.isActive
                                    ? completions[`Part4 Real Test Vol${test.vol} ${test.id}`]?.completed
                                        ? 'bg-indigo-500/10 border-indigo-500/40 hover:bg-slate-800 shadow-lg shadow-indigo-500/10'
                                        : 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50'
                                    : 'bg-slate-900 border-slate-800 opacity-60 cursor-not-allowed'
                            )}>
                                <div className="relative z-10 flex items-start justify-between w-full gap-2">
                                    <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            !test.isActive
                                                ? 'text-slate-600 border-slate-800'
                                                : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white'
                                        )}>
                                            {test.vol}
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className={cn(
                                                "text-xl md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-2",
                                                !test.isActive ? "text-slate-600" : "text-white"
                                            )}>
                                                TEST {String(test.id).padStart(2, '0')}
                                            </h3>
                                            {test.isActive && completions[`Part4 Real Test Vol${test.vol} ${test.id}`]?.completed && (
                                                <span className="text-[10px] font-black text-indigo-400 mt-1 uppercase italic pr-1">
                                                    SCORE: {completions[`Part4 Real Test Vol${test.vol} ${test.id}`].score}/{completions[`Part4 Real Test Vol${test.vol} ${test.id}`].total}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center gap-1.5">
                                        {!test.isActive ? (
                                            <Lock className="w-3.5 h-3.5 md:w-5 md:h-5 text-slate-700" />
                                        ) : completions[`Part4 Real Test Vol${test.vol} ${test.id}`]?.completed ? (
                                            <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
                                        ) : (
                                            <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-9 md:pl-14 mt-auto">
                                    <p className={cn(
                                        "text-[9px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        !test.isActive ? "text-slate-700" : (completions[`Part4 Real Test Vol${test.vol} ${test.id}`]?.completed ? "text-indigo-400" : "text-slate-500")
                                    )}>
                                        {!test.isActive ? `VOL ${test.vol} ⸱ 30 Q` : (completions[`Part4 Real Test Vol${test.vol} ${test.id}`]?.completed ? 'COMPLETED' : `PART 4 ⸱ VOL ${test.vol} ⸱ 30 Q`)}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-indigo-500/5 p-4 py-6 border-y border-indigo-500/10 text-center">
                <p className="text-[11px] md:text-sm text-indigo-400/70 font-black uppercase tracking-[0.2em] leading-tight flex items-center justify-center gap-3">
                    <Activity className="w-4 h-4 animate-pulse" />
                    AI 음성 실전 설명문 청취 훈련 시스템
                </p>
            </div>
        </div>
    );
}
