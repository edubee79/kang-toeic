'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Trophy, Star } from 'lucide-react';
import { part6TestData } from '@/data/toeic/reading/part6/tests';
import { cn } from "@/lib/utils";

export default function Part6LobbyPage() {
    return (
        <div className="min-h-screen bg-slate-950 px-6 py-12 pb-32">
            <div className="max-w-2xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <Link
                        href="/homework"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-bold text-sm">Dashboard</span>
                    </Link>

                    <div>
                        <h1 className="text-4xl font-black text-white italic tracking-tighter mb-2">
                            RC Part 6
                        </h1>
                        <p className="text-slate-400 font-medium text-lg">
                            Text Completion (장문 공란 메우기)
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">About Part 6</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Part 6 consists of 4 incomplete texts. Each text has 4 questions.
                                    You must select the best answer to complete the text.
                                    This part tests your understanding of grammar, vocabulary, and context.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Test List */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            Available Tests
                            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
                                {part6TestData.length}
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-4">
                        {part6TestData.map((test) => (
                            <div
                                key={test.testId}
                                className="group relative bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-black text-indigo-500 uppercase tracking-widest bg-indigo-500/10 px-2 py-0.5 rounded-full">
                                                Test {test.testId}
                                            </span>
                                            <span className="text-xs font-bold text-slate-500">
                                                {test.passages.length} Passages • {test.passages.reduce((acc, p) => acc + p.questions.length, 0)} Questions
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                                            {test.title}
                                        </h3>
                                    </div>

                                    <div className="flex gap-3 w-full sm:w-auto">
                                        <Link
                                            href={`/homework/part6/test/${test.testId}?mode=drill`}
                                            className="flex-1 sm:flex-none h-12 px-6 rounded-2xl bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white font-bold flex items-center justify-center gap-2 transition-all border border-slate-700 hover:border-indigo-500"
                                        >
                                            <Trophy className="w-4 h-4" />
                                            <span>Drill</span>
                                        </Link>
                                        <Link
                                            href={`/homework/part6/test/${test.testId}?mode=real`}
                                            className="flex-1 sm:flex-none h-12 px-6 rounded-2xl bg-slate-100 hover:bg-white text-slate-900 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/5"
                                        >
                                            <Clock className="w-4 h-4" />
                                            <span>Start</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
