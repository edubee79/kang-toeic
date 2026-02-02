'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Monitor, MonitorPlay, Clock, BookOpen, Lock, PlayCircle } from 'lucide-react';
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
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Part 7</span>
                            <span className="text-indigo-500"> Double+</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">다중 지문 분석 ⸱ 고득점 완결판</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxTest} Tests Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                        <MonitorPlay className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Expert Drills</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Multi Passage Mode</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 font-inter">
                    {testSets.map((set) => {
                        const showLocked = set.isLocked || set.dataMissing;
                        return (
                            <Link
                                key={set.id}
                                href={showLocked ? "#" : `/homework/part7-double/test/${set.id}?mode=real`}
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
                                    "group relative bg-slate-900 border transition-all duration-300 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col gap-1 md:gap-2",
                                    showLocked
                                        ? "border-slate-800 opacity-60 grayscale cursor-not-allowed"
                                        : "bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50"
                                )}
                            >
                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                                        <div className={cn(
                                            "w-7 h-7 md:w-10 md:h-10 rounded md:rounded-xl flex items-center justify-center shadow-lg border text-[10px] md:text-sm font-black transition-all bg-slate-950 shrink-0",
                                            showLocked ? 'bg-slate-800 text-slate-600 border-slate-800' : 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30 group-hover:bg-indigo-500 group-hover:text-white'
                                        )}>
                                            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
                                        </div>
                                        <h3 className={cn(
                                            "text-[22px] md:text-3xl font-black transition-colors leading-none italic tracking-tighter pr-4",
                                            showLocked ? "text-slate-600" : "text-white"
                                        )}>
                                            TEST {String(set.id).padStart(2, '0')}
                                        </h3>
                                    </div>
                                    <div className="shrink-0 pl-2">
                                        {!showLocked ? (
                                            <PlayCircle className="w-5 h-5 md:w-7 md:h-7 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                        ) : (
                                            <Lock className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                                        )}
                                    </div>
                                </div>

                                <div className="pl-10 md:pl-14">
                                    <p className={cn(
                                        "text-[10px] md:text-sm font-black tracking-widest uppercase opacity-60 leading-none",
                                        showLocked ? "text-slate-700" : "text-slate-500"
                                    )}>
                                        PART 7 ⸱ MULTI PASSAGE
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
