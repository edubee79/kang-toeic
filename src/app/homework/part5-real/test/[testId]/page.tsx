"use client";

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { part5TestData } from '@/data/toeic/reading/part5/tests';
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, AlertCircle, BookOpen, Tag } from "lucide-react";

function Part5TestRunnerContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = Number(params.testId);
    const mode = searchParams.get('mode') || 'real'; // 'real' or 'drill'
    const isDrillMode = mode === 'drill';

    // Find Test Data
    const testSet = part5TestData.find(t => t.testId === testId);

    // State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // { "101": "A" }
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    // Refs for scrolling
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });

    useEffect(() => {
        if (!testSet) return;

        // Load Progress (Real Mode only)
        if (!isDrillMode) {
            const savedProgress = localStorage.getItem(`part5_progress_test_${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.selectedAnswers) {
                        setSelectedAnswers(parsed.selectedAnswers);

                        // Scroll to the first UNANSWERED question or the last one
                        // Find the highest index answered
                        const answeredIds = Object.keys(parsed.selectedAnswers);
                        if (answeredIds.length > 0 && testSet && testSet.questions) {
                            const lastAnsweredId = answeredIds[answeredIds.length - 1]; // Assumption: keys inserted in order? Not guaranteed.
                            // Better: Find index in array
                            let maxIndex = -1;
                            testSet.questions.forEach((q, idx) => {
                                if (parsed.selectedAnswers[q.id]) maxIndex = idx;
                            });

                            if (maxIndex !== -1 && maxIndex < testSet.questions.length - 1) {
                                // Scroll into view of the NEXT question (maxIndex + 1)
                                const nextQ = testSet.questions[maxIndex + 1];
                                setTimeout(() => {
                                    const el = document.getElementById(`q-${nextQ.id}`);
                                    if (el) {
                                        const yOffset = -100;
                                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }, 500); // 500ms delay to ensure render
                            }
                        }
                    }
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        // Load History
        const savedHistory = localStorage.getItem(`part5_history_test_${testId}`);
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) { console.error(e); }
        }
    }, [testId, testSet, isDrillMode]);

    // Save Progress (Real Mode only)
    useEffect(() => {
        if (isDrillMode || reviewMode || showCompletion) return;
        if (Object.keys(selectedAnswers).length > 0) {
            localStorage.setItem(`part5_progress_test_${testId}`, JSON.stringify({
                selectedAnswers,
                elapsedTime
            }));
        }
    }, [selectedAnswers, elapsedTime, testId, reviewMode, showCompletion, isDrillMode]);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && !showCompletion && !reviewMode) {
            interval = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, showCompletion, reviewMode]);


    if (!testSet) return notFound();

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;

        // In Drill Mode, if already answered, don't allow changing (strict feedback)
        // Or allowing changing? User said "immediately success/fail". 
        // Typically drill mode locks the answer once revealed.
        if (isDrillMode && selectedAnswers[questionId]) return;

        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));

        // Auto-scroll to next question
        scrollToNext(questionId);
    };

    const scrollToNext = (currentId: string) => {
        const questions = testSet.questions;
        const currentIndexInSet = questions.findIndex(q => q.id === currentId);

        if (currentIndexInSet !== -1 && currentIndexInSet < questions.length - 1) {
            const nextId = questions[currentIndexInSet + 1].id;
            setTimeout(() => {
                const nextEl = questionRefs.current[nextId];
                if (nextEl) {
                    const yOffset = -100; // Leave space for sticky header
                    const y = nextEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const calculateScore = () => {
        let score = 0;
        testSet.questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) score++;
        });
        return score;
    };

    const finishTest = async () => {
        setIsTimerRunning(false);
        const score = calculateScore();
        setShowCompletion(true);

        // Save to Firebase (Manager Results)
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                // Identify Incorrect Questions
                const incorrects: { id: string, classification: string }[] = [];
                testSet.questions.forEach(q => {
                    if (selectedAnswers[q.id] !== q.correctAnswer) {
                        incorrects.push({
                            id: q.id.toString(),
                            classification: q.classification || 'Unknown'
                        });
                    }
                });

                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.username || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    className: user.userClass || user.className || "Unknown",
                    unit: `RC_Part5_Test${testId}_${mode}`,
                    score: score,
                    total: testSet.questions.length,
                    wrongCount: testSet.questions.length - score,
                    incorrectQuestions: incorrects, // Critical for Weakness Analysis
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: mode,
                    type: 'part5_test',
                    detail: `Test ${testId}`
                });
            } catch (e) { console.error(e); }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part5_history_test_${testId}`, JSON.stringify(newHistory));
        if (!isDrillMode) localStorage.removeItem(`part5_progress_test_${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        setHistory({ attempts: nextAttempt, lastScore: undefined });
        localStorage.setItem(`part5_history_test_${testId}`, JSON.stringify({ attempts: nextAttempt }));

        setShowCompletion(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setIsTimerRunning(true);
        window.scrollTo(0, 0);
    };

    // Completion View
    if (showCompletion) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className={cn(
                    "w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 ring-1 shadow-2xl",
                    isDrillMode ? "bg-indigo-500/10 text-indigo-500 ring-indigo-500/50" : "bg-amber-500/10 text-amber-500 ring-amber-500/50"
                )}>
                    {isDrillMode ? <BookOpen className="w-12 h-12" /> : <Trophy className="w-12 h-12" />}
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    {isDrillMode ? "훈련 완료" : "학습 완료"}
                </h2>
                <p className={cn("font-bold tracking-widest text-xs uppercase mb-8", isDrillMode ? "text-indigo-500" : "text-amber-500")}>
                    Part 5 • Test {testId} • {isDrillMode ? "Drill Mode" : `시도 횟수: ${history.attempts}회`}
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{history.lastScore}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {testSet.questions.length}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    <button onClick={() => { setShowCompletion(false); setReviewMode(true); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                        틀린문제 확인
                    </button>
                    <button onClick={handleRetake} className={cn("w-full h-14 text-white rounded-2xl font-bold active:scale-95 transition-all", isDrillMode ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-600 hover:bg-amber-500")}>
                        다시 풀기
                    </button>
                    <Link href="/homework/part5-real" className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    // Main Test View
    return (
        <div className="min-h-screen bg-slate-950 pb-32">
            {/* Sticky Header */}
            <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-xl">
                <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.back()} // Go back to Mode Select or Lobby
                            className="text-slate-400 hover:text-white"
                        >
                            <ChevronRight className="w-6 h-6 rotate-180" />
                        </Button>
                        <span className={cn("text-[10px] font-black tracking-widest uppercase block mb-0.5", isDrillMode ? "text-indigo-500" : "text-amber-500")}>
                            {reviewMode ? '오답 확인' : (isDrillMode ? '훈련 모드' : `TEST ${testId}`)}
                        </span>
                    </div>

                    <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-sm font-bold text-white">
                            {Object.keys(selectedAnswers).length} / {testSet.questions.length}
                        </span>
                    </div>

                    <div className={cn("flex items-center gap-2", (reviewMode || isDrillMode) && "opacity-50")}>
                        {/* Save & Exit Button for Real Mode */}
                        {!reviewMode && !isDrillMode && (
                            <button
                                onClick={() => {
                                    // Explicit Save
                                    if (Object.keys(selectedAnswers).length > 0) {
                                        localStorage.setItem(`part5_progress_test_${testId}`, JSON.stringify({
                                            selectedAnswers,
                                            elapsedTime
                                        }));
                                    }
                                    router.push('/homework/part5-real');
                                }}
                                className="mr-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/50 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
                            >
                                중단하고 나가기
                            </button>
                        )}

                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                            <Timer className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-mono text-slate-200">{formatTime(elapsedTime)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 md:px-4 py-4 md:py-8 space-y-4 md:space-y-6">
                {testSet.questions.filter(q => !reviewMode || selectedAnswers[q.id] !== q.correctAnswer).map((q, idx) => {
                    const isSelected = !!selectedAnswers[q.id];
                    const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

                    // Reveal condition: Review Mode OR (Drill Mode AND Answered)
                    const isRevealed = reviewMode || (isDrillMode && isSelected);

                    return (
                        <div
                            key={q.id}
                            id={`q-${q.id}`}
                            ref={(el) => { questionRefs.current[q.id] = el; }}
                            className={cn(
                                "p-6 transition-all duration-300 bg-slate-900/40 border border-slate-800 rounded-3xl",
                                isRevealed
                                    ? (isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20")
                                    : "hover:border-slate-700"
                            )}
                        >
                            <div className="flex gap-3 md:gap-4">
                                <div className={cn(
                                    "flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center font-black text-[10px] md:text-xs border",
                                    isRevealed
                                        ? (isCorrect ? "bg-emerald-500 text-slate-900 border-emerald-500" : "bg-rose-500 text-white border-rose-500")
                                        : (isSelected ? "bg-amber-500 text-slate-900 border-amber-500" : "bg-slate-800 text-slate-500 border-slate-700")
                                )}>
                                    {q.id}
                                </div>

                                <div className="flex-1 space-y-4 md:space-y-6">
                                    <p className="text-base md:text-lg font-medium text-slate-200 leading-relaxed">
                                        {q.text.split(/_____/).map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i < arr.length - 1 && (
                                                    <span className={cn(
                                                        "inline-block min-w-[2.5rem] md:min-w-[3rem] border-b-2 mx-1 text-center font-bold px-1 transition-colors",
                                                        selectedAnswers[q.id]
                                                            ? (isRevealed
                                                                ? (isCorrect ? "text-emerald-400 border-emerald-500" : "text-rose-400 border-rose-500")
                                                                : "text-amber-400 border-amber-500/50"
                                                            )
                                                            : "border-slate-600 text-transparent"
                                                    )}>
                                                        {selectedAnswers[q.id]
                                                            ? q.options.find(o => o.label === selectedAnswers[q.id])?.text
                                                            : ""
                                                        }
                                                    </span>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                        {q.options.map((opt) => (
                                            <button
                                                key={opt.label}
                                                onClick={() => handleSelect(q.id, opt.label)}
                                                disabled={isRevealed}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 md:px-4 md:py-3 rounded-xl border text-left transition-all active:scale-[0.98]",
                                                    selectedAnswers[q.id] === opt.label
                                                        ? (isRevealed
                                                            ? (opt.label === q.correctAnswer ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300" : "bg-rose-500/20 border-rose-500/50 text-rose-300")
                                                            : "bg-amber-500/10 border-amber-500/50 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                                                        )
                                                        : (isRevealed && opt.label === q.correctAnswer
                                                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/50" // Show correct answer in review if missed
                                                            : "bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                                        )
                                                )}
                                            >
                                                <span className={cn(
                                                    "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border flex-shrink-0",
                                                    selectedAnswers[q.id] === opt.label
                                                        ? "border-current"
                                                        : "border-slate-600 text-slate-600"
                                                )}>
                                                    {opt.label}
                                                </span>
                                                <span className="font-bold text-sm md:text-base">{opt.text}</span>
                                            </button>
                                        ))}
                                    </div>


                                    {isRevealed && (
                                        <div className={cn(
                                            "mt-4 pt-4 border-t border-slate-800/50 space-y-2 animate-in fade-in slide-in-from-top-2",
                                            isCorrect ? "text-emerald-400" : "text-rose-400"
                                        )}>
                                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                                <span className="text-slate-500 text-sm font-bold">Answer:</span>
                                                <span className="font-black text-sm">{q.correctAnswer}</span>

                                                {/* Classification Badge */}
                                                <div className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                                                    <Tag className="w-3 h-3 text-slate-500" />
                                                    <span className="text-[10px] text-slate-400 font-bold">
                                                        {getClassificationLabel(q.classification)}
                                                    </span>
                                                </div>

                                                {isDrillMode && (
                                                    <span className="font-black italic opacity-50 text-sm ml-2">
                                                        {isCorrect ? "CORRECT" : "WRONG"}
                                                    </span>
                                                )}
                                            </div>
                                            {q.translation && (
                                                <p className="text-sm text-slate-400 mb-1">{q.translation}</p>
                                            )}
                                            {q.explanation && (
                                                <p className="text-sm text-amber-500/80 italic">{q.explanation}</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Floating Submit/Finish Button */}
            {
                !reviewMode && (
                    <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center pointer-events-none">
                        <button
                            onClick={finishTest}
                            disabled={!isDrillMode && Object.keys(selectedAnswers).length < testSet.questions.length} // Real Mode strict validation
                            className={cn(
                                "pointer-events-auto shadow-2xl px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 transition-all active:scale-95",
                                isDrillMode
                                    ? (Object.keys(selectedAnswers).length === testSet.questions.length ? "bg-indigo-500 text-white shadow-indigo-500/20" : "bg-slate-800 text-slate-500")
                                    : (Object.keys(selectedAnswers).length > 0 ? "bg-amber-500 text-slate-900 shadow-amber-500/20" : "bg-slate-800 text-slate-500")
                            )}
                        >
                            <span>{isDrillMode ? (Object.keys(selectedAnswers).length === testSet.questions.length ? "훈련 종료" : `${Object.keys(selectedAnswers).length} / ${testSet.questions.length}`) : "답안 제출"}</span>
                            {(!isDrillMode || Object.keys(selectedAnswers).length === testSet.questions.length) && <ChevronRight className="w-5 h-5" />}
                        </button>
                    </div>
                )
            }
        </div >
    );
}

// Add Button to imports
import { Button } from "@/components/ui/button";

export default function Part5TestRunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part5TestRunnerContent />
        </React.Suspense>
    );
}
