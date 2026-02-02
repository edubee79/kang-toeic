'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { ArrowLeft, Headphones, PlayCircle, Activity, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

// Mock data for tests (1 to 10)
const initialTests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `TEST ${String(i + 1).padStart(2, '0')}`,
    isActive: true
}));

export default function Part3LobbyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part3/test/${testId}`);
                return;
            }
        }

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
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

    const maxTest = access?.maxSets?.part3 || 10;
    const tests = initialTests.map(t => ({
        ...t,
        isActive: t.id <= maxTest
    }));

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 3</span>
                            <span className="text-emerald-500"> Simulation</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">대화 내용 파악 ⸱ 39문항 집중 실전</p>
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
                    {tests.map((test) => (
                        <Link
                            key={test.id}
                            href={test.isActive ? `/homework/part3/test/${test.id}` : '#'}
                            onClick={(e) => {
                                if (!test.isActive) {
                                    e.preventDefault();
                                    alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                }
                            }}
                        >
                            <Card className={cn(
                                "group relative p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col gap-1 md:gap-2",
                                test.isActive
                                    ? 'bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800'
                                    : 'bg-slate-900 border-slate-800 opacity-60 cursor-not-allowed'
                            )}>
                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            !test.isActive ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white'
                                        )}>
                                            <Headphones className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <h3 className={cn(
                                            "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-4",
                                            !test.isActive ? "text-slate-600" : "text-white"
                                        )}>
                                            TEST {String(test.id).padStart(2, '0')}
                                        </h3>
                                    </div>
                                    <div className="shrink-0 pl-2">
                                        {!test.isActive ? (
                                            <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                        ) : (
                                            <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-10 md:pl-14">
                                    <p className={cn(
                                        "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        !test.isActive ? "text-slate-700" : "text-slate-500"
                                    )}>
                                        PART 3 ⸱ 39 QUESTIONS
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="bg-emerald-500/5 p-4 py-6 border-y border-emerald-500/10 text-center">
                <p className="text-[11px] md:text-sm text-emerald-400/70 font-black uppercase tracking-[0.2em] leading-tight flex items-center justify-center gap-3">
                    <Activity className="w-4 h-4 animate-pulse" />
                    AI 음성 실전 대화 청취 훈련 시스템
                </p>
            </div>
        </div>
    );
}
