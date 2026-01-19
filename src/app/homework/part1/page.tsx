'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Mic2, PlayCircle, Star, Award, CheckCircle, Lock } from "lucide-react";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

const sets = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ShadowingLobby() {
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

    const maxSet = access?.maxSets?.part1 || 5;

    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">SHADOWING<br /><span className="text-indigo-500">MASTER</span></h2>
                <p className="text-slate-400 font-medium text-xs">듣고 말하며 입이 트이는 실전 훈련 | 현재 {maxSet}세트 오픈</p>
            </div>

            <div className="space-y-4">
                {sets.map((set) => {
                    const isLocked = set > maxSet;
                    return (
                        <Link
                            key={set}
                            href={isLocked ? "#" : `/homework/part1/${set}`}
                            onClick={(e) => {
                                if (isLocked) {
                                    e.preventDefault();
                                    alert(`${maxSet}세트까지만 현재 오픈되어 있습니다.`);
                                }
                            }}
                        >
                            <Card className={`
                group relative p-6 rounded-[2rem] border transition-all cursor-pointer overflow-hidden
                ${isLocked
                                    ? 'bg-slate-900 border-slate-800 opacity-60'
                                    : 'bg-slate-800/80 border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800'
                                }
              `}>
                                {!isLocked && (
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
                                )}

                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`
                      w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border 
                      ${isLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400'}
                    `}>
                                            {isLocked ? <Lock className="w-5 h-5" /> : <span className="font-black text-xl italic">{set}</span>}
                                        </div>
                                        <div>
                                            <h3 className={`text-lg font-black italic tracking-tighter ${isLocked ? 'text-slate-500' : 'text-white'}`}>SET {String(set).padStart(2, '0')}</h3>
                                            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{isLocked ? 'Locked' : '20 Sentences'}</p>
                                        </div>
                                    </div>

                                    <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${isLocked ? 'bg-slate-800 text-slate-700' : 'bg-slate-900 text-slate-600 group-hover:text-indigo-500'}
                  `}>
                                        <PlayCircle className="w-6 h-6" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            <div className="bg-indigo-500/10 p-6 rounded-3xl border border-indigo-500/20 text-center">
                <div className="flex justify-center mb-2 text-indigo-400">
                    <Mic2 className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-indigo-300 font-bold leading-relaxed">
                    크롬(Chrome) 브라우저 사용을 권장합니다.<br />
                    마이크 권한을 꼭 허용해주세요!
                </p>
            </div>
        </div>
    );
}
