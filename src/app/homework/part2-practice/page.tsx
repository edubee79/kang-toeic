'use client';

import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Headphones, PlayCircle, Activity } from "lucide-react";

const tests = [1, 2, 3, 4, 5];

export default function Part2Lobby() {
    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">LC PART 2<br /><span className="text-emerald-500">REAL TEST</span></h2>
                <p className="text-slate-400 font-medium text-xs">질의응답 실전 감각 키우기</p>
            </div>

            <div className="space-y-4">
                {tests.map((test) => (
                    <Link key={test} href={`/homework/part2-practice/${test}`}>
                        <Card className="group relative bg-slate-800/50 p-6 rounded-[2rem] border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all cursor-pointer overflow-hidden">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:text-emerald-400 shadow-lg border border-slate-800">
                                        <Headphones className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white italic tracking-tighter">TEST {String(test).padStart(2, '0')}</h3>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Multiple Choice</p>
                                    </div>
                                </div>

                                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-emerald-500 transition-colors">
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/20 text-center">
                <div className="flex justify-center mb-2 text-emerald-400">
                    <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-emerald-300 font-bold leading-relaxed">
                    오디오 파일이 필요합니다.<br />
                    (public/audio 폴더에 Test_XX-XX.mp3 형식)
                </p>
            </div>
        </div>
    );
}
