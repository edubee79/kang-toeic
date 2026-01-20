'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Headphones, Mic2, Lock, PlayCircle } from 'lucide-react';
import { part1RealTests } from '@/data/toeic/listening/part1/tests';
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { cn } from "@/lib/utils";

export default function Part1RealLobby() {
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
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

    const maxSet = access?.maxSets?.part1_real || 10;

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
                            LC Part 1 <span className="text-indigo-500">(Real Test)</span>
                        </h1>
                        <p className="text-slate-400 font-medium text-lg leading-tight">
                            Photographs (사진 묘사 실전 훈련) | 현재 {maxSet}회차 오픈
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0 border border-indigo-500/20">
                                <Headphones className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">About Part 1</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Part 1 consists of 6 picture description questions.
                                    Listen to four statements and select the one that best describes the picture.
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
                                {part1RealTests.length}
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-4">
                        {part1RealTests.map((test, index) => {
                            const isLocked = (index + 1) > maxSet;
                            return (
                                <div
                                    key={test.testId}
                                    className={cn(
                                        "group relative bg-slate-900 border rounded-3xl p-6 transition-all duration-300",
                                        isLocked
                                            ? "opacity-60 border-slate-800 grayscale cursor-not-allowed"
                                            : "hover:bg-slate-800 border-slate-800 hover:border-indigo-500/50"
                                    )}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                                    Part 1 • {test.questions.length} Questions
                                                </span>
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold transition-colors mb-1",
                                                isLocked ? "text-slate-500" : "text-white group-hover:text-indigo-400"
                                            )}>
                                                {test.title}
                                            </h3>
                                        </div>

                                        {isLocked ? (
                                            <div className="h-12 w-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-600 border border-slate-700">
                                                <Lock className="w-5 h-5" />
                                            </div>
                                        ) : (
                                            <Link
                                                href={`/homework/part1-real/test/${test.testId}`}
                                                className="h-12 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
                                            >
                                                <PlayCircle className="w-4 h-4" />
                                                <span>Start</span>
                                            </Link>
                                        )}
                                    </div>

                                    {isLocked && (
                                        <div className="absolute inset-0 z-10" onClick={() => alert(`${maxSet}회차까지만 현재 오픈되어 있습니다.`)} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
