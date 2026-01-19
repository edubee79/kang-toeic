'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock, Trophy, Lock } from 'lucide-react';
import { part7TestData } from '@/data/toeic/reading/part7/tests';
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

export default function Part7LobbyPage() {
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [testHistory, setTestHistory] = useState<Record<number, { attempts?: number; lastScore?: number }>>({});

    useEffect(() => {
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            // Load history for all tests
            const history: Record<number, any> = {};
            part7TestData.forEach(test => {
                const saved = localStorage.getItem(`part7_history_test_${test.testId}`);
                if (saved) {
                    history[test.testId] = JSON.parse(saved);
                }
            });
            setTestHistory(history);

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

    const maxTest = access?.maxSets?.part7 || 10;

    return (
        <div className="min-h-screen bg-slate-950 px-6 py-12 pb-32">
            <div className="max-w-2xl mx-auto space-y-12">
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
                            RC Part 7 (Single)
                        </h1>
                        <p className="text-slate-400 font-medium text-lg">
                            Reading Comprehension (단일 지문 집중 훈련) | 현재 {maxTest}회차 오픈
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1">About Part 7</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Part 7 tests your reading comprehension.
                                    This section focuses on <strong>Single Passages</strong> (Text Messages, Emails, Notices).
                                    Double and Triple passages are available in the PC-only Full Test mode.
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
                                {part7TestData.length}
                            </span>
                        </h2>
                    </div>

                    <div className="grid gap-4">
                        {part7TestData.map((test) => {
                            const isLocked = test.testId > maxTest;
                            const history = testHistory[test.testId] || {};

                            const totalQuestions = test.sets.reduce((acc, p) => acc + p.questions.length, 0);

                            return (
                                <div
                                    key={test.testId}
                                    className={cn(
                                        "group relative bg-slate-900 border transition-all duration-300 rounded-3xl p-6",
                                        isLocked
                                            ? "border-slate-800 opacity-40 grayscale"
                                            : "hover:bg-slate-800 border-slate-800 hover:border-slate-700"
                                    )}
                                >
                                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                                    P7 • {test.sets.length} Sets • {totalQuestions} Questions
                                                </span>
                                                {history.attempts && !isLocked && (
                                                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase">
                                                        <Trophy className="w-2.5 h-2.5" />
                                                        {history.attempts}회 완료
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold transition-colors",
                                                isLocked ? "text-slate-500" : "text-white group-hover:text-amber-400"
                                            )}>
                                                {test.title}
                                            </h3>
                                            {history.lastScore !== undefined && !isLocked && (
                                                <p className="text-xs font-medium text-slate-400">
                                                    최근 점수: <span className="text-white font-bold">{history.lastScore}</span> / {totalQuestions}
                                                </p>
                                            )}
                                            {!isLocked && (
                                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mt-2">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    <span>권장풀이시간 MAX 25분</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex gap-3 w-full sm:w-auto">
                                            <Link
                                                href={isLocked ? "#" : `/homework/part7/test/${test.testId}?mode=real`}
                                                onClick={(e) => {
                                                    if (isLocked) {
                                                        e.preventDefault();
                                                        alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                                    }
                                                }}
                                                className={cn(
                                                    "flex-1 sm:flex-none h-12 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg",
                                                    isLocked
                                                        ? "bg-slate-800 text-slate-600 shadow-none cursor-not-allowed"
                                                        : "bg-amber-600 hover:bg-amber-500 text-white shadow-amber-900/20"
                                                )}
                                            >
                                                {isLocked ? <Lock className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                                <span>{isLocked ? "Locked" : "실전 테스트"}</span>
                                            </Link>
                                        </div>
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
