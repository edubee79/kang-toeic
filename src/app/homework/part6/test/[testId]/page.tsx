'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { part6TestData, Part6Question } from '@/data/rc_part6';
import { getPart6ClassificationLabel } from '@/data/part6_classification_map';
// For now, reuse P5 map or just display raw if P6 specific.
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, AlertCircle, BookOpen, Tag, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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

    useEffect(() => {
        if (!testSet) return;
        // Load/Save progress logic similar to Part 5 (omitted for brevity in first pass, or can copy)
    }, [testId, testSet]);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && !showCompletion && !reviewMode) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, showCompletion, reviewMode]);

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

    const finishTest = () => {
        setIsTimerRunning(false);
        setShowCompletion(true);
        // Save to Firebase logic here
    };

    const getScore = () => {
        return allQuestions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
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

                return (
                    <span
                        key={idx}
                        id={`marker-${qId}`}
                        onClick={() => {
                            setActiveQuestionId(qId);
                            // document.getElementById(`q-card-${qId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={cn(
                            "inline-flex items-center justify-center min-w-[2rem] lg:min-w-[3rem] px-1 lg:px-2 mx-0.5 lg:mx-1 rounded lg:rounded-lg border lg:border-2 font-bold cursor-pointer transition-all align-middle text-[11px] lg:text-base",
                            isSelected ? "ring-1 lg:ring-2 ring-indigo-500 ring-offset-1 lg:ring-offset-2 ring-offset-slate-900 border-indigo-500 bg-indigo-500/10 text-indigo-400" : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600",
                            isRevealed && (isCorrect ? "border-emerald-500 text-emerald-400 bg-emerald-500/10" : "border-rose-500 text-rose-400 bg-rose-500/10")
                        )}
                    >
                        {isRevealed && answer ? q?.options.find(o => o.label === answer)?.text : `[${qId}]`}
                    </span>
                );
            }
            return <span key={idx} className="whitespace-pre-wrap">{part}</span>;
        });
    };

    if (showCompletion) {
        // ... Reuse Completion UI ...
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-black text-white mb-4">Test Complete</h2>
                <p className="text-xl text-slate-400 mb-8">Score: {getScore()} / {allQuestions.length}</p>
                <div className="flex gap-4">
                    <Button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentPassageIndex(0); }} variant="outline">Review</Button>
                    <Link href="/homework/part6"><Button>Exit</Button></Link>
                </div>
            </div>
        )
    }

    const passage = testSet.passages[currentPassageIndex];

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
                    <h2 className="text-white font-bold text-[13px] lg:text-lg">P6</h2>
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
                            {isDrillMode ? "Finish" : "Submit"}
                        </Button>
                    )}
                </div>
            </div>

            {/* Content Area - Zero padding on mobile */}
            <div className="flex-1 overflow-y-auto scroll-smooth p-0 lg:p-6 pb-0 lg:pb-32">
                <div className="w-full max-w-[1800px] mx-auto h-full flex flex-col">
                    {/* Progress Bar / Pagination Strips - Hidden on Mobile */}
                    <div className="hidden lg:flex gap-2 mb-6 justify-center">
                        {testSet.passages.map((_, idx) => (
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
                                <div className="bg-slate-900/50 p-1 lg:p-4 rounded lg:rounded-xl text-slate-400 text-[10px] lg:text-sm">
                                    <p className="font-bold mb-0 lg:mb-1 text-slate-300 text-[10px] lg:text-sm">Translation:</p>
                                    {passage.translation}
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
                                    {passage.questions.map((q) => {
                                        const isRevealed = reviewMode || (isDrillMode && !!selectedAnswers[q.id]);
                                        const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                                        const isActive = activeQuestionId === q.id;

                                        return (
                                            <div
                                                key={q.id}
                                                id={`q-card-${q.id}`}
                                                className={cn(
                                                    "bg-slate-900 border rounded-none lg:rounded-xl p-1 lg:p-4 transition-all scroll-mt-0 lg:scroll-mt-24",
                                                    isActive ? "border-indigo-500 shadow-none lg:shadow-lg lg:shadow-indigo-500/10 bg-indigo-500/5" : "border-slate-800",
                                                    isRevealed && isCorrect && "border-emerald-500/30 bg-emerald-500/5",
                                                    isRevealed && !isCorrect && "border-rose-500/30 bg-rose-500/5"
                                                )}
                                                onClick={() => {
                                                    setActiveQuestionId(q.id);
                                                }}
                                            >
                                                <p className="text-slate-200 font-bold mb-1 lg:mb-3 text-[13px] lg:text-sm leading-tight">
                                                    <span className={cn(
                                                        "inline-flex items-center justify-center font-black text-[11px] lg:text-xs mr-1",
                                                        isActive ? "text-indigo-400" : "text-slate-500"
                                                    )}>
                                                        {q.id}.
                                                    </span>
                                                    {q.text}
                                                </p>

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
                                                                isRevealed && selectedAnswers[q.id] === opt.label && selectedAnswers[q.id] !== q.correctAnswer && "bg-rose-500 border-rose-500"
                                                            )}
                                                        >
                                                            <span className="font-black opacity-50 w-2 lg:w-4 text-[8px] lg:text-xs">{opt.label}</span>
                                                            <span className="leading-tight">{opt.text}</span>
                                                        </button>
                                                    ))}
                                                </div>

                                                {isRevealed && (
                                                    <div className="mt-1 lg:mt-4 pt-1 lg:pt-4 border-t border-slate-800/50 text-[9px] lg:text-sm space-y-0.5 lg:space-y-2 animate-in fade-in">
                                                        <div className="mb-0.5 lg:mb-2">
                                                            <span className="inline-flex items-center gap-0.5 lg:gap-1.5 px-1 lg:px-2.5 py-0.5 lg:py-1 rounded-sm lg:rounded-md bg-slate-800 text-[8px] lg:text-xs font-medium text-slate-300 border border-slate-700">
                                                                <Tag className="w-2 h-2 lg:w-3 lg:h-3" />
                                                                <span className="hidden lg:inline">{getPart6ClassificationLabel(q.classification)}</span>
                                                            </span>
                                                        </div>
                                                        <p className="text-slate-400 text-[9px] lg:text-sm leading-tight hidden lg:block"><span className="text-slate-500 font-bold">Translation:</span> {q.translation}</p>
                                                        <p className="text-amber-500/80 italic text-[9px] lg:text-sm leading-tight hidden lg:block"><span className="font-bold opacity-75">Tip:</span> {q.explanation}</p>
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
                                    <span className="hidden lg:inline">Previous Passage</span>
                                    <span className="lg:hidden">Prev</span>
                                </Button>

                                {currentPassageIndex < testSet.passages.length - 1 ? (
                                    <Button
                                        className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                                        onClick={() => {
                                            setCurrentPassageIndex(prev => Math.min(testSet.passages.length - 1, prev + 1));
                                        }}
                                    >
                                        <span className="hidden lg:inline">Next Passage</span>
                                        <span className="lg:hidden">Next</span>
                                    </Button>
                                ) : (
                                    !reviewMode && (
                                        <Button
                                            className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                                            onClick={finishTest}
                                            disabled={!isDrillMode && Object.keys(selectedAnswers).length < allQuestions.length}
                                        >
                                            <span className="hidden lg:inline">Finish Test</span>
                                            <span className="lg:hidden">Finish</span>
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
