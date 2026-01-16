
"use client";

import React from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Headphones, PlayCircle, Activity } from "lucide-react";

// Mock data for tests (1 to 10)
const tests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `TEST ${String(i + 1).padStart(2, '0')}`,
    isActive: true // All tests active
}));

export default function Part4LobbyPage() {
    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight text-white">LC PART 4<br /><span className="text-indigo-500">SHORT TALKS</span></h2>
                <p className="text-slate-400 font-medium text-xs">짧은 설명문 실전 모의고사</p>
            </div>

            <div className="space-y-4">
                {tests.map((test) => (
                    <Link
                        key={test.id}
                        href={test.isActive ? `/homework/part4/test/${test.id}` : '#'}
                    >
                        <Card className={`
                group relative p-6 rounded-[2rem] border transition-all cursor-pointer overflow-hidden
                ${test.isActive
                                ? 'bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800'
                                : 'bg-slate-900/50 border-transparent opacity-60 cursor-not-allowed'}
            `}
                        >
                            {test.isActive && (
                                <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all"></div>
                            )}

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border 
                    ${test.isActive ? 'bg-slate-900 text-indigo-500 group-hover:text-indigo-400 border-slate-800' : 'bg-slate-800 text-slate-600 border-slate-800'}
                  `}>
                                        <Headphones className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-black italic tracking-tighter ${test.isActive ? 'text-white' : 'text-slate-500'}`}>
                                            {test.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                                            {test.id <= 3 ? '스키밍 연습' : '실전 연습'}
                                        </p>
                                    </div>
                                </div>

                                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${test.isActive ? 'bg-slate-900 text-slate-600 group-hover:text-indigo-500' : 'bg-slate-800 text-slate-700'}
                `}>
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="bg-indigo-500/10 p-6 rounded-3xl border border-indigo-500/20 text-center">
                <div className="flex justify-center mb-2 text-indigo-400">
                    <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-indigo-300 font-bold leading-relaxed">
                    실전과 동일한 환경에서<br />
                    설명문 청취 훈련이 진행됩니다.
                </p>
            </div>
        </div>
    );
}
