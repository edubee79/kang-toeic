'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Headphones, PlayCircle, Activity, Mic2, Lock } from "lucide-react";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

const tests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Part2Lobby() {
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
            setLoading(false);
        };
        fetchAccess();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxTest = access?.maxSets?.part2 || 10;

    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">LC PART 2<br /><span className="text-emerald-500">REAL TEST</span></h2>
                <p className="text-slate-400 font-medium text-xs">질의응답 실전 감각 키우기 | 현재 {maxTest}회차 오픈</p>

                {/* Button Legend */}
                <div className="flex gap-4 mt-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-emerald-600/20 border border-emerald-500/50 flex items-center justify-center text-emerald-500">
                            <PlayCircle className="w-3 h-3" />
                        </div>
                        실전 문제 풀기
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center text-indigo-500">
                            <Mic2 className="w-3 h-3" />
                        </div>
                        쉐도잉 연습 (Beta)
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {tests.map((test) => {
                    const isLocked = test > maxTest;
                    return (
                        <Card key={test} className={`
                            group relative p-6 rounded-[2rem] border transition-all overflow-hidden
                            ${isLocked
                                ? 'bg-slate-900 border-slate-800 opacity-60'
                                : 'bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800'
                            }
                        `}>
                            {!isLocked && (
                                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
                            )}

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`
                                        w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border 
                                        ${isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white'}
                                    `}>
                                        {isLocked ? <Lock className="w-6 h-6" /> : <Headphones className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-black italic tracking-tighter ${isLocked ? 'text-slate-500' : 'text-white'}`}>TEST {String(test).padStart(2, '0')}</h3>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{isLocked ? 'Locked' : 'Multiple Choice'}</p>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        href={isLocked ? "#" : `/homework/part2/${test}`}
                                        onClick={(e) => {
                                            if (isLocked) {
                                                e.preventDefault();
                                                alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                            }
                                        }}
                                    >
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${isLocked ? 'bg-slate-800 border-slate-800 text-slate-700' : 'bg-emerald-600/20 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500 hover:text-white'}`} title={isLocked ? "Locked" : "Start Test"}>
                                            <PlayCircle className="w-6 h-6" />
                                        </div>
                                    </Link>
                                    {!isLocked && (
                                        <Link href={`/homework/part2/shadowing/${test}`}>
                                            <div className="w-10 h-10 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all cursor-pointer" title="Start Shadowing">
                                                <Mic2 className="w-5 h-5" />
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/20 text-center">
                <div className="flex justify-center mb-2 text-emerald-400">
                    <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-emerald-300 font-bold leading-relaxed">
                    실전과 동일한 AI 음성으로<br />
                    청취 훈련이 진행됩니다.
                </p>
            </div>
        </div>
    );
}
