'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { part6TestData, Part6Question } from '@/data/toeic/reading/part6/tests';
import { getPart6ClassificationLabel } from '@/data/toeic/reading/part6/classification';
// For now, reuse P5 map or just display raw if P6 specific.
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, AlertCircle, BookOpen, Tag, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchDictionary } from '@/components/common/TouchDictionary';

function Part6TestRunnerContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = Number(params.testId);
    const mode = searchParams.get('mode') || 'real'; // 'real' or 'drill'
    const isDrillMode = mode === 'drill';

    // Find Test Data
    const testSet = part6TestData.find(t => t.testId === testId);

    // Flatten questions for easier counting/progress
    const allQuestions = testSet?.passages.flatMap(p => p.questions) || [];

    // State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // { "131": "A" }
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null); // For highlighting
    const [currentPassageIndex, setCurrentPassageIndex] = useState(0);

    // Refs for scrolling
    const mainScrollRef = useRef<HTMLDivElement>(null);

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });

    useEffect(() => {
        if (!testSet) return;

        // Load Progress (Real Mode only)
        if (!isDrillMode) {
            const savedProgress = localStorage.getItem(`part6_progress_test_${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        // Load History
        const savedHistory = localStorage.getItem(`part6_history_test_${testId}`);
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
            localStorage.setItem(`part6_progress_test_${testId}`, JSON.stringify({
                selectedAnswers,
                elapsedTime
            }));
        }
    }, [selectedAnswers, elapsedTime, testId, reviewMode, showCompletion, isDrillMode]);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && !showCompletion && !reviewMode) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, showCompletion, reviewMode]);

    // Auto-scroll to top when passage changes
    useEffect(() => {
        mainScrollRef.current?.scrollTo(0, 0);
    }, [currentPassageIndex]);

    if (!testSet) return notFound();

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;
        if (isDrillMode && selectedAnswers[questionId]) return; // Lock in drill mode

        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
        setActiveQuestionId(questionId);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const getScore = () => {
        return allQuestions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    };

    const finishTest = async () => {
        setIsTimerRunning(false);
        const score = getScore();
        setShowCompletion(true);

        // Save to Firebase
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                // Identify Incorrect Questions
                const incorrects: { id: string, classification: string }[] = [];
                allQuestions.forEach(q => {
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
                    unit: `RC_Part6_Test${testId}_${mode}`,
                    score: score,
                    total: allQuestions.length,
                    wrongCount: allQuestions.length - score,
                    incorrectQuestions: incorrects,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: mode,
                    type: 'part6_test',
                    detail: `Test ${testId}`
                });
            } catch (e) { console.error(e); }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part6_history_test_${testId}`, JSON.stringify(newHistory));
        if (!isDrillMode) localStorage.removeItem(`part6_progress_test_${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        setHistory({ attempts: nextAttempt, lastScore: undefined });
        localStorage.setItem(`part6_history_test_${testId}`, JSON.stringify({ attempts: nextAttempt }));

        setShowCompletion(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setIsTimerRunning(true);
        setCurrentPassageIndex(0);
        window.scrollTo(0, 0);
    };

    // Text Parser for Markers
    const renderContentWithMarkers = (content: string, questions: Part6Question[]) => {
        // Split by regex [131]
        const parts = content.split(/(\[\d+\])/g);

        return parts.map((part, idx) => {
            const match = part.match(/\[(\d+)\]/);
            if (match) {
                const qId = match[1];
                const q = questions.find(q => q.id === qId);
                const isSelected = activeQuestionId === qId;
                const answer = selectedAnswers[qId];

                // Show Answer in review/drill mode if revealed
                const isRevealed = reviewMode || (isDrillMode && !!answer);
                const isCorrect = answer === q?.correctAnswer;

                const markerText = isRevealed && answer ? q?.options.find(o => o.label === answer)?.text : `[${qId}]`;

                return (
                    <span
                        key={idx}
                        id={`marker-${qId}`}
                        onClick={() => {
                            setActiveQuestionId(qId);
                        }}
                        className={cn(
                            "inline-flex items-center justify-center min-w-[2rem] lg:min-w-[3rem] px-1 lg:px-2 mx-0.5 lg:mx-1 rounded lg:rounded-lg border lg:border-2 font-bold cursor-pointer transition-all align-middle text-[11px] lg:text-base",
                            isSelected ? "ring-1 lg:ring-2 ring-indigo-500 ring-offset-1 lg:ring-offset-2 ring-offset-slate-900 border-indigo-500 bg-indigo-500/10 text-indigo-400" : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600",
                            isRevealed && (isCorrect ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-rose-500 text-rose-400 bg-rose-500/10")
                        )}
                    >
                        {reviewMode && testId === 1 && markerText ? <TouchDictionary text={markerText} /> : markerText}
                    </span>
                );
            }
            return (
                <span key={idx} className="whitespace-pre-wrap">
                    {reviewMode && testId === 1 ? <TouchDictionary text={part} /> : part}
                </span>
            );
        });
    };

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
                    Part 6 • Test {testId} • {isDrillMode ? "Drill Mode" : `시도 횟수: ${history.attempts}회`}
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{history.lastScore}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {allQuestions.length}</span>
                    </div>
                    <div className="text-slate-500 font-bold flex items-center justify-center gap-2 mt-4 grayscale opacity-70">
                        <Timer className="w-4 h-4" />
                        <span>소요 시간: {formatTime(elapsedTime)}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    <button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentPassageIndex(0); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                        틀린문제 확인
                    </button>
                    <button onClick={handleRetake} className={cn("w-full h-14 text-white rounded-2xl font-bold active:scale-95 transition-all", isDrillMode ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-600 hover:bg-amber-500")}>
                        다시 풀기
                    </button>
                    <Link href="/homework/part6" className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const filteredPassages = reviewMode
        ? testSet.passages.filter(p => p.questions.some(q => selectedAnswers[q.id] !== q.correctAnswer))
        : testSet.passages;

    const passage = filteredPassages[currentPassageIndex];

    if (reviewMode && filteredPassages.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
                <h2 className="text-3xl font-black text-white mb-4 italic">PERFECT!</h2>
                <p className="text-slate-400 mb-8 font-medium">틀린 문제가 없습니다. 모든 문제를 맞히셨습니다!</p>
                <Button onClick={() => setReviewMode(false)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 h-14 rounded-2xl font-bold border border-slate-700">
                    학습 결과로 돌아가기
                </Button>
            </div>
        );
    }

    if (!passage) {
        // Fallback for index out of bounds if filtered list changes
        setCurrentPassageIndex(0);
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] h-screen bg-slate-950 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-10 lg:h-16 bg-slate-950/95 border-b border-white/5 flex items-center justify-between px-2 lg:px-6 shrink-0 z-20">
                <div className="flex items-center gap-1 lg:gap-4">
                    <button
                        onClick={() => router.push('/homework/part6')}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 className="text-white font-bold text-[13px] lg:text-lg">Part 6</h2>
                    <div className="text-slate-400 text-[11px] lg:text-sm hidden lg:block">{testSet.title}</div>
                </div>
                <div className="flex items-center gap-1 lg:gap-4">
                    <div className="font-mono text-slate-400 text-[10px] lg:text-base">{formatTime(elapsedTime)}</div>
                    {!reviewMode && (
                        <Button
                            onClick={finishTest}
                            disabled={!isDrillMode && Object.keys(selectedAnswers).length < allQuestions.length}
                            className={cn(
                                "h-8 lg:h-10 text-xs lg:text-sm px-3 lg:px-4",
                                isDrillMode ? (Object.keys(selectedAnswers).length === allQuestions.length ? "bg-indigo-600" : "bg-slate-800") : "bg-amber-600"
                            )}
                        >
                            {isDrillMode ? (Object.keys(selectedAnswers).length === allQuestions.length ? "종료" : "제출") : "제출"}
                        </Button>
                    )}
                </div>
            </div>

            {/* Content Area - Zero padding on mobile */}
            <div ref={mainScrollRef} className="flex-1 overflow-y-auto scroll-smooth p-0 lg:p-6 pb-0 lg:pb-32">
                <div className="w-full max-w-[1800px] mx-auto h-full flex flex-col">
                    {/* Progress Bar / Pagination Strips - Hidden on Mobile */}
                    <div className="hidden lg:flex gap-2 mb-6 justify-center">
                        {filteredPassages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentPassageIndex(idx)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    idx === currentPassageIndex ? "w-12 bg-indigo-500" :
                                        (idx < currentPassageIndex ? "w-4 bg-indigo-500/50" : "w-4 bg-slate-800")
                                )}
                            />
                        ))}
                    </div>

                    {/* Vertical Split Layout: 70% Passage / 30% Questions on Mobile */}
                    <div key={passage.id} className="flex flex-col lg:grid lg:grid-cols-10 gap-0 lg:gap-8 flex-1 h-full overflow-hidden lg:overflow-visible">
                        {/* Passage: 70% on Mobile, 70% on Desktop */}
                        <div className={cn(
                            "h-[70%] lg:h-fit overflow-y-auto lg:overflow-visible p-0 lg:p-0 border-b border-slate-700 lg:border-none",
                            "lg:col-span-7 lg:sticky lg:top-0 space-y-0 lg:space-y-4"
                        )}>
                            <div className="bg-white text-slate-900 rounded-none lg:rounded-xl p-2 lg:p-8 shadow-none lg:shadow-xl font-serif text-[13px] lg:text-lg leading-tight lg:leading-loose mx-auto w-full select-none min-h-full lg:min-h-[500px]">
                                {/* Guidance Line */}
                                {passage.guidance && (
                                    <div className="bg-slate-50 border-y lg:border-none border-slate-200 py-1 px-4 mb-4 text-[11px] lg:text-sm text-slate-500 font-sans italic text-center">
                                        {passage.guidance}
                                    </div>
                                )}

                                {/* Header info */}
                                {passage.title && <h3 className="font-sans font-bold text-center border-b pb-1 lg:pb-4 mb-1 lg:mb-4 text-slate-800 text-[13px] lg:text-base">{passage.title}</h3>}

                                <div className="whitespace-pre-wrap space-y-2 lg:space-y-3 text-justify">
                                    {renderContentWithMarkers(passage.content, passage.questions)}
                                </div>
                            </div>
                            {passage.translation && reviewMode && (
                                <div className="bg-slate-900/50 p-1 lg:p-4 rounded lg:rounded-xl text-slate-400 text-[10px] lg:text-sm mt-4">
                                    <p className="font-bold mb-0 lg:mb-1 text-slate-300 text-[10px] lg:text-sm">전문 해석:</p>
                                    <div className="whitespace-pre-wrap">
                                        {testId === 1 ? <TouchDictionary text={passage.translation} /> : passage.translation}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Questions: 30% on Mobile, 30% on Desktop */}
                        <div className="flex flex-col h-[30%] lg:h-auto lg:col-span-3">
                            <div className={cn(
                                "flex-1 overflow-y-auto lg:overflow-visible bg-slate-900/50 lg:bg-transparent p-0 lg:p-0",
                                "space-y-0.5 lg:space-y-3"
                            )}>
                                {/* Questions */}
                                <div className="space-y-0.5 lg:space-y-3 p-1 lg:p-0 pb-0">
                                    {passage.questions
                                        .filter(q => !reviewMode || selectedAnswers[q.id] !== q.correctAnswer)
                                        .map((q) => {
                                            const isRevealed = reviewMode || (isDrillMode && !!selectedAnswers[q.id]);
                                            const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                                            const isActive = activeQuestionId === q.id;

                                            return (
                                                <div
                                                    key={q.id}
                                                    id={`q-card-${q.id}`}
                                                    className={cn(
                                                        "bg-slate-900 border rounded-none lg:rounded-xl p-1 lg:p-4 transition-all scroll-mt-0 lg:scroll-mt-24 font-sans",
                                                        isActive ? "border-indigo-500 shadow-none lg:shadow-lg lg:shadow-indigo-500/10 bg-indigo-500/5" : "border-slate-800",
                                                        isRevealed && isCorrect && "border-emerald-500/30 bg-emerald-500/5",
                                                        isRevealed && !isCorrect && "border-rose-500/30 bg-rose-500/5"
                                                    )}
                                                    onClick={() => {
                                                        setActiveQuestionId(q.id);
                                                    }}
                                                >
                                                    <div className="flex justify-between items-start mb-1 lg:mb-3">
                                                        <div className="text-slate-200 font-bold text-[13px] lg:text-sm leading-tight">
                                                            <span className={cn(
                                                                "inline-flex items-center justify-center font-black text-[11px] lg:text-xs mr-1",
                                                                isActive ? "text-indigo-400" : "text-slate-500"
                                                            )}>
                                                                {q.id}.
                                                            </span>
                                                            {reviewMode && testId === 1 ? <TouchDictionary text={q.text} /> : q.text}
                                                        </div>
                                                        {isRevealed && !isCorrect && (
                                                            <span className="text-[10px] font-black text-rose-500 px-1.5 py-0.5 bg-rose-500/10 rounded uppercase">Incorrect</span>
                                                        )}
                                                    </div>

                                                    <div className="grid gap-0.5 lg:gap-1.5">
                                                        {q.options.map((opt) => (
                                                            <button
                                                                key={opt.label}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleSelect(q.id, opt.label);
                                                                }}
                                                                disabled={!!isRevealed}
                                                                className={cn(
                                                                    "text-left px-1 lg:px-3 py-0.5 lg:py-2 rounded-sm lg:rounded border text-[13px] lg:text-sm transition-all flex items-center gap-0.5 lg:gap-3",
                                                                    selectedAnswers[q.id] === opt.label
                                                                        ? "bg-indigo-600 border-indigo-500 text-white font-bold"
                                                                        : "bg-slate-800/50 border-slate-700/50 text-slate-300 font-medium hover:bg-slate-800 hover:text-white",
                                                                    isRevealed && opt.label === q.correctAnswer && "ring-1 lg:ring-2 ring-emerald-500 border-emerald-500 bg-emerald-500/20 text-emerald-400",
                                                                    isRevealed && selectedAnswers[q.id] === opt.label && selectedAnswers[q.id] !== q.correctAnswer && "bg-rose-500 border-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.3)]"
                                                                )}
                                                            >
                                                                <span className={cn(
                                                                    "font-black w-2 lg:w-4 text-[8px] lg:text-xs",
                                                                    selectedAnswers[q.id] === opt.label ? "text-white/50" : "text-slate-500"
                                                                )}>{opt.label}</span>
                                                                <span className="leading-tight">
                                                                    {reviewMode && testId === 1 ? <TouchDictionary text={opt.text} /> : opt.text}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>

                                                    {isRevealed && (
                                                        <div className="mt-1 lg:mt-4 pt-1 lg:pt-4 border-t border-slate-800/50 text-[9px] lg:text-sm space-y-0.5 lg:space-y-2 animate-in fade-in">
                                                            <div className="flex flex-wrap items-center gap-1.5 lg:gap-2 mb-0.5 lg:mb-2 text-emerald-400">
                                                                <span className="text-slate-500 text-[10px] lg:text-xs font-bold uppercase tracking-wider">Answer:</span>
                                                                <span className="font-black">{q.correctAnswer}</span>
                                                                <div className="ml-auto">
                                                                    <span className="inline-flex items-center gap-0.5 lg:gap-1.5 px-1 lg:px-2.5 py-0.5 lg:py-1 rounded-sm lg:rounded-md bg-slate-800 text-[8px] lg:text-xs font-medium text-slate-300 border border-slate-700">
                                                                        <Tag className="w-2 h-2 lg:w-3 lg:h-3" />
                                                                        <span>{getPart6ClassificationLabel(q.classification)}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="text-slate-100 text-[10px] lg:text-sm leading-snug font-medium bg-slate-800/30 p-2 rounded border border-white/5">
                                                                <span className="text-amber-500 font-black mr-2 uppercase tracking-tighter text-[9px] lg:text-[11px]">Explanation:</span>
                                                                {testId === 1 ? (
                                                                    <TouchDictionary text={q.explanation || q.translation || "해설이 없습니다."} />
                                                                ) : (
                                                                    q.explanation || q.translation || "해설이 없습니다."
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            {/* Navigation Buttons - Fixed at bottom on mobile, below questions on desktop */}
                            <div className="shrink-0 flex gap-2 lg:gap-4 p-2 lg:pt-8 lg:pb-12 lg:px-0 bg-slate-950 lg:bg-transparent border-t border-slate-800 lg:border-none">
                                <Button
                                    variant="outline"
                                    className="flex-1 h-8 lg:h-12 text-xs lg:text-sm border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
                                    disabled={currentPassageIndex === 0}
                                    onClick={() => {
                                        setCurrentPassageIndex(prev => Math.max(0, prev - 1));
                                    }}
                                >
                                    <span className="hidden lg:inline">이전 지문</span>
                                    <span className="lg:hidden">이전</span>
                                </Button>

                                {currentPassageIndex < filteredPassages.length - 1 ? (
                                    <Button
                                        className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                                        onClick={() => {
                                            setCurrentPassageIndex(prev => Math.min(filteredPassages.length - 1, prev + 1));
                                        }}
                                    >
                                        <span className="hidden lg:inline">다음 지문</span>
                                        <span className="lg:hidden">다음</span>
                                    </Button>
                                ) : (
                                    reviewMode ? (
                                        <Button
                                            className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-slate-600 hover:bg-slate-500 text-white font-bold"
                                            onClick={() => {
                                                setShowCompletion(true);
                                                setReviewMode(false);
                                            }}
                                        >
                                            <span className="hidden lg:inline">학습 결과로</span>
                                            <span className="lg:hidden">종료</span>
                                        </Button>
                                    ) : (
                                        <Button
                                            className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                                            onClick={finishTest}
                                            disabled={!isDrillMode && Object.keys(selectedAnswers).length < allQuestions.length}
                                        >
                                            <span className="hidden lg:inline">시험 종료</span>
                                            <span className="lg:hidden">종료</span>
                                        </Button>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Part6TestRunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part6TestRunnerContent />
        </React.Suspense>
    );
}
