'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Monitor, Clock, BookOpen, Lock } from 'lucide-react';
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

// Import the extracted RC data files
import { fullPracticeTest } from '@/data/rc_part7_practice'; // RC 1회
import { test2PracticeSet } from '@/data/rc_part7_test2'; // RC 2회
import { test3PracticeSet } from '@/data/rc_part7_test3'; // RC 3회
import { test4PracticeSet } from '@/data/rc_part7_test4'; // RC 4회
import { test5PracticeSet } from '@/data/rc_part7_test5'; // RC 5회
import { rcPart7Test6 } from '@/data/rc_part7_test6'; // RC 6회
import { rcPart7Test7 } from '@/data/rc_part7_test7'; // RC 7회
import { rcPart7Test8 } from '@/data/rc_part7_test8'; // RC 8회
import { rcPart7Test9 } from '@/data/rc_part7_test9'; // RC 9회
import { rcPart7Test10 } from '@/data/rc_part7_test10'; // RC 10회

const availableTests = [
    { id: 1, data: fullPracticeTest, title: 'RC 1회' },
    { id: 2, data: test2PracticeSet, title: 'RC 2회' },
    { id: 3, data: test3PracticeSet, title: 'RC 3회' },
    { id: 4, data: test4PracticeSet, title: 'RC 4회' },
    { id: 5, data: test5PracticeSet, title: 'RC 5회' },
    { id: 6, data: rcPart7Test6, title: 'RC 6회' },
    { id: 7, data: rcPart7Test7, title: 'RC 7회' },
    { id: 8, data: rcPart7Test8, title: 'RC 8회' },
    { id: 9, data: rcPart7Test9, title: 'RC 9회' },
    { id: 10, data: rcPart7Test10, title: 'RC 10회' },
];

export default function Part7DoubleLobbyPage() {
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

    const maxTest = access?.maxSets?.part7_double || 10;

    const testSets = Array.from({ length: 10 }, (_, i) => {
        const testId = i + 1;
        const testData = availableTests.find(t => t.id === testId);
        const dataExists = !!testData;

        // Final status depends on both data existence and admin limit
        const rangeLocked = testId > maxTest;
        const isActuallyAvailable = dataExists && !rangeLocked;

        return {
            id: testId,
            title: testData?.title || `RC ${testId}회 (준비중)`,
            count: 5, // 5 sets per test
            questionCount: 25,
            isLocked: rangeLocked,
            dataMissing: !dataExists,
            path: isActuallyAvailable ? `/homework/part7/practice?test=${testId}` : "#"
        };
    });

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
                            RC Part 7 (Double & Triple)
                        </h1>
                        <p className="text-slate-400 font-medium text-lg">
                            Reading Comprehension (이중/삼중 지문 실전 - PC Only) | 현재 {maxTest}회차 오픈
                        </p>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
                                <Monitor className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-white font-bold text-lg mb-1">About Double & Triple Passages</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-3">
                                    This section simulates the real TOEIC environment for Questions 176-200.
                                    <br />
                                    It contains 2 Double Passage sets and 3 Triple Passage sets per test.
                                    <strong className="text-indigo-400 ml-1">Optimized for PC screens.</strong>
                                </p>
                                <div className="flex items-center gap-2 text-indigo-400">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-bold">권장풀이시간 MAX 25분</span>
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
                                {testSets.length}
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {testSets.map((set) => {
                            const showLocked = set.isLocked || set.dataMissing;

                            return (
                                <div
                                    key={set.id}
                                    className={cn(
                                        "group relative bg-slate-900 border transition-all duration-300 rounded-3xl p-6",
                                        showLocked
                                            ? "border-slate-800 opacity-40 grayscale"
                                            : "hover:bg-slate-800 border-slate-800 hover:border-slate-700"
                                    )}
                                >
                                    <div className="flex flex-col gap-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-slate-500">
                                                        {set.count} Sets • {set.questionCount} Questions
                                                    </span>
                                                </div>
                                                {showLocked && (
                                                    <span className="flex items-center gap-1 text-[10px] font-bold bg-slate-800 text-slate-500 px-2 py-0.5 rounded uppercase">
                                                        <Lock className="w-2.5 h-2.5" />
                                                        {set.isLocked ? "Range Locked" : "Coming Soon"}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className={cn(
                                                "text-xl font-bold transition-colors",
                                                showLocked ? "text-slate-600" : "text-white group-hover:text-indigo-400"
                                            )}>
                                                {set.title}
                                            </h3>
                                            {!showLocked && (
                                                <div className="flex items-center gap-2 text-slate-500 text-xs font-bold mt-2">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    <span>권장풀이시간 MAX 25분</span>
                                                </div>
                                            )}
                                        </div>

                                        <Link
                                            href={showLocked ? "#" : set.path}
                                            onClick={(e) => {
                                                if (showLocked) {
                                                    e.preventDefault();
                                                    if (set.isLocked) {
                                                        alert(`${maxTest}회차까지만 현재 오픈되어 있습니다.`);
                                                    } else {
                                                        alert("준비중인 테스트입니다.");
                                                    }
                                                }
                                            }}
                                            className={cn(
                                                "w-full h-12 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg",
                                                showLocked
                                                    ? "bg-slate-800 text-slate-600 shadow-none cursor-not-allowed"
                                                    : "bg-slate-100 hover:bg-white text-slate-900 shadow-white/5"
                                            )}
                                        >
                                            {showLocked ? <Lock className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                                            <span>{showLocked ? (set.isLocked ? "Locked" : "Coming Soon") : "Start Test"}</span>
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
