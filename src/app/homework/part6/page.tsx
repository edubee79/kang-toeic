'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Trophy, Star, Lock } from 'lucide-react';
import { part6TestData } from '@/data/toeic/reading/part6/tests';
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

export default function Part6LobbyPage() {
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
                router.push(`/homework/part6/test/${testId}?mode=real`);
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

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxTest = access?.maxSets?.part6 || 10;

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-12 pb-32">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-bold text-sm">Dashboard</span>
                    </Link>

                    <div>
                        <h1 className="text-4xl font-black text-white italic tracking-tighter mb-2 uppercase">
                            RC Part 6
                        </h1>
                        <p className="text-slate-400 font-medium text-lg">
                            Text Completion (장문 공란 메우기) | 현재 {maxTest}회차 오픈
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-lg mb-1">About Part 6</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                    Part 6 consists of 4 incomplete texts. Each text has 4 questions.
                                    You must select the best answer to complete the text.
                                    This part tests your understanding of grammar, vocabulary, and context.
                                </p>
                                <div className="flex items-center gap-2 text-indigo-400">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-bold">권장풀이시간 MAX 8분</span>
                                </div>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {part6TestData.map((test) => {
                            const isLocked = test.testId > maxTest;
                            return (
                                <div
                                    key={test.testId}
                                    className={cn(
                                        "group relative bg-slate-900 border transition-all duration-300 rounded-3xl p-6",
                                        isLocked
                                            ? "border-slate-800 opacity-60"
                                            : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50"
                                    )}
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-500">
                                                    {isLocked ? "Locked" : `${test.passages.length} Passages • ${test.passages.reduce((acc, p) => acc + p.questions.length, 0)} Questions`}
                                                </span>
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold transition-colors",
                                                isLocked ? "text-slate-500" : "text-white group-hover:text-indigo-400"
                                            )}>
                                            </h3>
                                            {!isLocked && (
                                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mt-2">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    <span>권장풀이시간 MAX 8분</span>
                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href={isLocked ? "#" : `/homework/part6/test/${test.testId}?mode=real`}
                                            onClick={(e) => {
                                                if (isLocked) {
                                                    e.preventDefault();
                                                    alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                                }
                                            }}
                                            className={cn(
                                                "w-full h-12 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg",
                                                isLocked
                                                    ? "bg-slate-800 text-slate-600 shadow-none cursor-not-allowed"
                                                    : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20"
                                            )}
                                        >
                                            {isLocked ? <Lock className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                            <span>{isLocked ? "Locked" : "Start"}</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
