'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mic2, PlayCircle, Star, Award, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';

const sets = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ShadowingLobby() {
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=PROBLEM';
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    useEffect(() => {
        setIsMounted(true);
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;
                const units = sets.map(s => `Shadowing_Unit01_Set${s}`);
                const completionData = await getMultipleTestCompletions(userId, units);
                setCompletions(completionData);
            }
            setLoading(false);
        };
        fetchAccess();
    }, []);

    if (!isMounted || loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxSet = access?.maxSets?.part1 || 5;

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 1</span>
                            <span className="text-indigo-500"> Master</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">Shadowing & Listening 집중 훈련</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxSet} Sets Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                        <Award className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Skill Building</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Intensive Shadowing</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 font-inter">
                    {sets.map((set) => {
                        const isLocked = set > maxSet;
                        return (
                            <Link
                                key={set}
                                href={isLocked ? "#" : `/homework/part1/${set}?from=${encodeURIComponent(`/homework/part1?from=${encodeURIComponent(fromPath)}`)}`}
                                onClick={(e) => {
                                    if (isLocked) {
                                        e.preventDefault();
                                        alert(`${maxSet}세트까지만 현재 오픈되어 있습니다.`);
                                    }
                                }}
                            >
                                <Card className={cn(
                                    "group relative p-4 md:p-6 rounded-xl md:rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col gap-1 md:gap-2",
                                    isLocked
                                        ? 'bg-slate-900 border-slate-800 opacity-60'
                                        : completions[`Shadowing_Unit01_Set${set}`]?.completed
                                            ? 'bg-indigo-500/10 border-indigo-500/30 hover:bg-indigo-500/20 shadow-lg shadow-indigo-500/10'
                                            : 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50'
                                )}>
                                    <div className="relative z-10 flex items-center justify-between w-full">
                                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                            <div className={cn(
                                                "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                                isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400'
                                            )}>
                                                {set}
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className={cn(
                                                    "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter",
                                                    isLocked ? "text-slate-600" : "text-white"
                                                )}>
                                                    SET {String(set).padStart(2, '0')}
                                                </h3>
                                                {!isLocked && completions[`Shadowing_Unit01_Set${set}`]?.completed && (
                                                    <span className="text-[10px] font-black text-indigo-400 mt-1 uppercase italic">
                                                        SCORE: {completions[`Shadowing_Unit01_Set${set}`].score}/20
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="shrink-0 pl-2">
                                            {isLocked ? (
                                                <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                            ) : completions[`Shadowing_Unit01_Set${set}`]?.completed ? (
                                                <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-emerald-500" />
                                            ) : (
                                                <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="pl-10 md:pl-14">
                                        <p className={cn(
                                            "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                            isLocked ? "text-slate-700" : (completions[`Shadowing_Unit01_Set${set}`]?.completed ? "text-indigo-400" : "text-slate-500")
                                        )}>
                                            {isLocked ? 'LOCKED' : completions[`Shadowing_Unit01_Set${set}`]?.completed ? 'COMPLETED' : '20 SENTENCES'}
                                        </p>
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bg-indigo-500/5 p-4 rounded-xl border border-indigo-500/10 text-center mx-1">
                <p className="text-[10px] md:text-xs text-indigo-400/70 font-bold leading-tight flex items-center justify-center gap-2">
                    <Mic2 className="w-3 h-3" />
                    Chrome 권장 & 마이크 허용 필수
                </p>
            </div>
        </div>
    );
}
