'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { part7TestData, Part7Question } from '@/data/toeic/reading/part7/tests';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, AlertCircle, BookOpen, ChevronLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getStandardizedPassageType } from '@/lib/toeic/rc-passage-types';

function Part7TestRunnerContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const testId = Number(params.testId);
    const mode = searchParams.get('mode') || 'real';
    const isDrillMode = mode === 'drill';

    // Find Test Data
    const testSet = part7TestData.find(t => t.testId === testId);

    // Flatten questions
    const allQuestions = testSet?.sets.flatMap(s => s.questions) || [];

    // State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);

    const passageContainerRef = React.useRef<HTMLDivElement>(null);
    const questionContainerRef = React.useRef<HTMLDivElement>(null);
    const mainContainerRef = React.useRef<HTMLDivElement>(null);
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Scroll to top on set change
    useEffect(() => {
        passageContainerRef.current?.scrollTo(0, 0);
        questionContainerRef.current?.scrollTo(0, 0);
        mainContainerRef.current?.scrollTo(0, 0);
    }, [currentSetIndex, reviewMode]);

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (!testSet) return;

        // Load Progress (Real Mode only)
        if (!isDrillMode) {
            const savedProgress = localStorage.getItem(`part7_progress_test_${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                    if (parsed.currentSetIndex !== undefined) setCurrentSetIndex(parsed.currentSetIndex);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        // Load History
        const savedHistory = localStorage.getItem(`part7_history_test_${testId}`);
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
            localStorage.setItem(`part7_progress_test_${testId}`, JSON.stringify({
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

    if (!isMounted) return null;
    if (!testSet) return notFound();

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;
        if (isDrillMode && selectedAnswers[questionId]) return;

        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));

        // Auto-scroll to next question
        scrollToNext(questionId);
    };

    const scrollToNext = (currentId: string) => {
        const questionsInSet = currentSet.questions;
        const currentIndexInSet = questionsInSet.findIndex(q => q.id === currentId);

        if (currentIndexInSet !== -1 && currentIndexInSet < questionsInSet.length - 1) {
            const nextId = questionsInSet[currentIndexInSet + 1].id;
            setTimeout(() => {
                const nextEl = questionRefs.current[nextId];
                if (nextEl) {
                    if (window.innerWidth < 1024) { // lg breakpoint
                        const container = questionContainerRef.current;
                        if (container) {
                            const containerTop = container.getBoundingClientRect().top;
                            const elementTop = nextEl.getBoundingClientRect().top;
                            const scrollPos = elementTop - containerTop + container.scrollTop;
                            container.scrollTo({ top: scrollPos - 10, behavior: 'smooth' });
                        }
                    } else {
                        const yOffset = -100;
                        const y = nextEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                }
            }, 100);
        }
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
                // Identify Incorrect Questions by iterating through sets and passages
                const incorrects: { id: string, classification: string, contentType?: string }[] = [];
                testSet?.sets.forEach(set => {
                    // Collect and standardize types for all passages in the set
                    const passageTypes = Array.from(new Set(set.passages.map(p => getStandardizedPassageType(p.type)))).join(' / ');

                    set.questions.forEach(q => {
                        if (selectedAnswers[q.id] !== q.correctAnswer) {
                            incorrects.push({
                                id: `P7_T${testId}_Q${q.id}`,
                                classification: q.classification || 'Unknown',
                                contentType: passageTypes
                            });
                        }
                    });
                });

                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.username || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    className: user.userClass || user.className || "Unknown",
                    unit: `RC_Part7_Test${testId}_${mode}`,
                    score: score,
                    total: allQuestions.length,
                    wrongCount: allQuestions.length - score,
                    incorrectQuestions: incorrects,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: mode,
                    type: 'part7_test',
                    detail: `Test ${testId}`
                });
            } catch (e) { console.error(e); }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part7_history_test_${testId}`, JSON.stringify(newHistory));
        if (!isDrillMode) localStorage.removeItem(`part7_progress_test_${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        setHistory({ attempts: nextAttempt, lastScore: undefined });
        localStorage.setItem(`part7_history_test_${testId}`, JSON.stringify({ attempts: nextAttempt }));

        setShowCompletion(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setIsTimerRunning(true);
        setCurrentSetIndex(0);
        window.scrollTo(0, 0);
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
                    Part 7 • Test {testId} • {isDrillMode ? "Drill Mode" : `시도 횟수: ${history.attempts}회`}
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
                    <button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentSetIndex(0); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                        틀린문제 확인
                    </button>
                    <button onClick={handleRetake} className={cn("w-full h-14 text-white rounded-2xl font-bold active:scale-95 transition-all", isDrillMode ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-600 hover:bg-amber-500")}>
                        다시 풀기
                    </button>
                    <Link href="/homework/part7" className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const filteredSets = reviewMode
        ? testSet.sets.filter(s => s.questions.some(q => selectedAnswers[q.id] !== q.correctAnswer))
        : testSet.sets;

    const currentSet = filteredSets[currentSetIndex];

    if (reviewMode && filteredSets.length === 0) {
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

    if (!currentSet) {
        return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500 font-mono tracking-tighter">PREPARING TEST...</div>;
    }

    return (
        <div className="fixed inset-0 z-[100] h-screen bg-slate-950 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-10 lg:h-16 bg-slate-950/95 border-b border-white/5 flex items-center justify-between px-2 lg:px-6 shrink-0 z-20">
                <div className="flex items-center gap-1 lg:gap-4">
                    <button
                        onClick={() => router.push('/homework/part7')}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 className="text-white font-bold text-[13px] lg:text-lg">Part 7</h2>
                    <div className="text-slate-400 text-[11px] lg:text-sm hidden lg:block">{testSet.title}</div>
                </div>
                <div className="flex items-center gap-1 lg:gap-4">
                    {!reviewMode && !isDrillMode && (
                        <Button
                            variant="ghost"
                            className="h-8 lg:h-8 text-[10px] lg:text-xs px-2 lg:px-3 text-indigo-400 hover:text-white hover:bg-indigo-900/50 border border-indigo-500/30 font-bold"
                            onClick={() => {
                                // Save Progress & Exit
                                if (Object.keys(selectedAnswers).length > 0) {
                                    localStorage.setItem(`part7_progress_test_${testId}`, JSON.stringify({
                                        selectedAnswers,
                                        elapsedTime,
                                        currentSetIndex
                                    }));
                                }
                                router.push('/homework/part7');
                            }}
                        >
                            <span className="hidden lg:inline mr-1">💾</span> 중단하고 나가기
                        </Button>
                    )}
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

            <div ref={mainContainerRef} className="flex-1 overflow-y-auto scroll-smooth p-0 lg:p-6 pb-0 lg:pb-32">
                <div className="w-full max-w-[1800px] mx-auto h-full flex flex-col">
                    {/* Progress Bar / Pagination - Hidden on Mobile */}
                    <div className="hidden lg:flex gap-2 mb-6 justify-center">
                        {filteredSets.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSetIndex(idx)}
                                className={cn(
                                    "h-1.5 rounded-full transition-all duration-300",
                                    idx === currentSetIndex ? "w-12 bg-indigo-500" :
                                        (idx < currentSetIndex ? "w-4 bg-indigo-500/50" : "w-4 bg-slate-800")
                                )}
                            />
                        ))}
                    </div>

                    <div key={currentSet.id} className="flex flex-col lg:grid lg:grid-cols-10 gap-0 lg:gap-8 flex-1 h-full overflow-hidden lg:overflow-visible">
                        {/* Passages: 70% on Mobile, 70% on Desktop */}
                        <div ref={passageContainerRef} className="h-[70%] lg:h-fit lg:col-span-7 lg:sticky lg:top-0 space-y-2 lg:space-y-8 overflow-y-auto lg:overflow-visible p-0 lg:p-0 border-b border-slate-700 lg:border-none">
                            {/* Question Range Header */}
                            <div className="text-slate-400 text-xs lg:text-sm font-medium px-2 lg:px-0 pt-2 lg:pt-0">
                                Questions {currentSet.questionRange} refer to the following {currentSet.passages.length > 1 ? `${currentSet.passages.length} passages` : currentSet.passages[0].type.toLowerCase().replace('_', ' ')}.
                            </div>

                            {currentSet.passages.map((passage, pIdx) => (
                                <div key={passage.id} className="space-y-4">
                                    {/* Label if multiple */}
                                    {currentSet.passages.length > 1 && (
                                        <div className="text-slate-500 font-bold text-sm uppercase tracking-wider pl-2">
                                            Passage {pIdx + 1}
                                        </div>
                                    )}

                                    <div className="bg-white text-slate-900 rounded-none lg:rounded-xl p-2 lg:p-8 shadow-none lg:shadow-xl font-serif text-[13px] lg:text-lg leading-tight lg:leading-loose mx-auto w-full select-none min-h-[200px] lg:min-h-[300px]">
                                        {/* Header info */}
                                        {(passage.title || passage.label) && (
                                            <h3 className="font-sans font-bold text-center border-b pb-1 lg:pb-4 mb-1 lg:mb-4 text-slate-800 text-[13px] lg:text-base">
                                                {passage.label && <span className="block text-xs text-slate-500 mb-1 uppercase tracking-widest">{passage.label}</span>}
                                                {passage.title}
                                            </h3>
                                        )}

                                        <div className="whitespace-pre-wrap space-y-2 lg:space-y-3 text-justify">
                                            {passage.content}
                                        </div>
                                    </div>
                                    {passage.translation && reviewMode && (
                                        <div className="bg-slate-900/50 p-1 lg:p-4 rounded lg:rounded-xl text-slate-400 text-[10px] lg:text-sm">
                                            <p className="font-bold mb-0 lg:mb-1 text-slate-300 text-[10px] lg:text-sm">전문 해석 ({passage.label || `Passage ${pIdx + 1}`}):</p>
                                            <div className="whitespace-pre-wrap">{passage.translation}</div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Questions */}
                        <div className="flex flex-col h-[30%] lg:h-auto lg:col-span-3">
                            <div ref={questionContainerRef} className={cn(
                                "flex-1 overflow-y-auto lg:overflow-visible bg-slate-900/50 lg:bg-transparent p-0 lg:p-0",
                                "space-y-0.5 lg:space-y-3"
                            )}>
                                <div className="space-y-0.5 lg:space-y-3 p-1 lg:p-0 pb-0">
                                    {currentSet.questions
                                        .filter(q => !reviewMode || selectedAnswers[q.id] !== q.correctAnswer)
                                        .map((q) => {
                                            const isRevealed = reviewMode || (isDrillMode && !!selectedAnswers[q.id]);
                                            const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

                                            return (
                                                <div
                                                    key={q.id}
                                                    ref={(el) => { questionRefs.current[q.id] = el; }}
                                                    className={cn(
                                                        "bg-slate-900 border rounded-none lg:rounded-xl p-1 lg:p-4 transition-all font-sans",
                                                        isRevealed && isCorrect && "border-emerald-500/30 bg-emerald-500/5",
                                                        isRevealed && !isCorrect && "border-rose-500/30 bg-rose-500/5",
                                                        !isRevealed && "border-slate-800 shadow-xl"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-start mb-1 lg:mb-3">
                                                        <p className="text-slate-200 font-bold text-[13px] lg:text-sm leading-tight">
                                                            <span className={cn(
                                                                "inline-flex items-center justify-center font-black text-[11px] lg:text-xs mr-1",
                                                                "text-slate-500"
                                                            )}>
                                                                {q.id}.
                                                            </span>
                                                            {q.text}
                                                        </p>
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
                                                                <span className="leading-tight">{opt.text}</span>
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
                                                                        <span>{q.classification || "분류 없음"}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {q.translation && (
                                                                <div className="text-slate-400 text-[10px] lg:text-sm leading-snug">
                                                                    <span className="text-slate-500 font-bold mr-2 text-[9px] lg:text-xs uppercase">Translation:</span>
                                                                    {q.translation}
                                                                </div>
                                                            )}
                                                            <div className="text-slate-100 text-[10px] lg:text-sm leading-snug font-medium bg-slate-800/30 p-2 rounded border border-white/5 mt-1 lg:mt-2">
                                                                <span className="text-amber-500 font-black mr-2 uppercase tracking-tighter text-[9px] lg:text-[11px]">Explanation:</span>
                                                                {q.explanation || "해설이 없습니다."}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>

                            {/* Navigation Buttons - Fixed at bottom on mobile */}
                            <div className="shrink-0 flex gap-2 lg:gap-4 p-2 lg:pt-8 lg:pb-12 lg:px-0 bg-slate-950 lg:bg-transparent border-t border-slate-800 lg:border-none">
                                <Button
                                    variant="outline"
                                    className="flex-1 h-8 lg:h-12 text-xs lg:text-sm border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
                                    disabled={currentSetIndex === 0}
                                    onClick={() => {
                                        setCurrentSetIndex(prev => Math.max(0, prev - 1));
                                        // window.scrollTo(0,0);
                                    }}
                                >
                                    <span className="hidden lg:inline">Previous Set</span>
                                    <span className="lg:hidden">Prev</span>
                                </Button>

                                {currentSetIndex < filteredSets.length - 1 ? (
                                    <Button
                                        className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                                        onClick={() => {
                                            setCurrentSetIndex(prev => Math.min(filteredSets.length - 1, prev + 1));
                                            // window.scrollTo(0,0);
                                        }}
                                    >
                                        <span className="hidden lg:inline">다음 세트</span>
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

export default function Part7TestRunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part7TestRunnerContent />
        </React.Suspense>
    );
}
