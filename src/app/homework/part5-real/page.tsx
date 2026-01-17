"use client";

import Link from 'next/link';
import { part5TestData } from '@/data/toeic/reading/part5/tests';
import { ChevronRight, Trophy, BookOpen, Timer } from "lucide-react";

export default function Part5RealLobbyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-4">
                        실전 모의고사 PART 5
                    </h1>
                    <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl">
                        실전과 동일한 환경에서 30문제를 풀고 점수를 확인하세요.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Section: Real Practice */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/10">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black tracking-tight text-white/90">REAL PRACTICE</h2>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Simulation Test</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {part5TestData.map((test) => (
                            <Link
                                href={`/homework/part5-real/mode/${test.testId}`}
                                key={test.testId}
                                className="group block bg-slate-900/50 hover:bg-amber-900/10 border border-slate-800 hover:border-amber-500/30 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex justify-between items-center">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20">
                                                Test {String(test.testId).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                                            {test.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                            <BookOpen className="w-4 h-4" />
                                            <span>{test.questions.length} Questions</span>
                                            <span className="w-1 h-1 rounded-full bg-slate-700" />
                                            <Timer className="w-4 h-4 ml-1" />
                                            <span>~15 min</span>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-slate-800 group-hover:bg-amber-500 text-slate-500 group-hover:text-slate-900 flex items-center justify-center transition-all shadow-lg scale-90 group-hover:scale-100">
                                        <ChevronRight className="w-6 h-6 stroke-[3]" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
