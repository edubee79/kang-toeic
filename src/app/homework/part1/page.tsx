'use client';

import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Mic2, PlayCircle, Star, Award, CheckCircle } from "lucide-react";

const sets = [1, 2, 3, 4, 5];

export default function ShadowingLobby() {
    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">SHADOWING<br /><span className="text-indigo-500">MASTER</span></h2>
                <p className="text-slate-400 font-medium text-xs">듣고 말하며 입이 트이는 실전 훈련</p>
            </div>

            <div className="space-y-4">
                {sets.map((set) => (
                    <Link key={set} href={`/homework/part1/${set}`}>
                        <Card className="group relative bg-slate-800/50 p-6 rounded-[2rem] border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all cursor-pointer overflow-hidden">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:text-indigo-400 shadow-lg border border-slate-800">
                                        <span className="font-black text-xl italic">{set}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white italic tracking-tighter">SET {String(set).padStart(2, '0')}</h3>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">20 Sentences</p>
                                    </div>
                                </div>

                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-indigo-500 transition-colors">
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
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
