'use client';

import React, { useState, useEffect } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { part7TestData, Part7Question } from '@/data/rc_part7';
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight, AlertCircle, BookOpen, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        if (isDrillMode && selectedAnswers[questionId]) return;

        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const finishTest = () => {
        setIsTimerRunning(false);
        setShowCompletion(true);
    };

    const getScore = () => {
        return allQuestions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    };

    if (showCompletion) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-black text-white mb-4">Test Complete</h2>
                <p className="text-xl text-slate-400 mb-8">Score: {getScore()} / {allQuestions.length}</p>
                <div className="flex gap-4">
                    <Button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentSetIndex(0); }} variant="outline">Review</Button>
                    <Link href="/homework/part7"><Button>Exit</Button></Link>
                </div>
            </div>
        )
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
                    <h2 className="text-white font-bold text-[13px] lg:text-lg">P7</h2>
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

            <div className="flex-1 overflow-y-auto scroll-smooth p-0 lg:p-6 pb-0 lg:pb-32">
                <div className="w-full max-w-[1800px] mx-auto h-full flex flex-col">
                    {/* Progress Bar / Pagination - Hidden on Mobile */}
                    <div className="hidden lg:flex gap-2 mb-6 justify-center">
                        {testSet.sets.map((_, idx) => (
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

                    {(() => {
                        const currentSet = testSet.sets[currentSetIndex];
                        return (
                            <div key={currentSet.id} className="flex flex-col lg:grid lg:grid-cols-10 gap-0 lg:gap-8 flex-1 h-full overflow-hidden lg:overflow-visible">
                                {/* Passages: 70% on Mobile, 70% on Desktop */}
                                <div className="h-[70%] lg:h-fit lg:col-span-7 lg:sticky lg:top-0 space-y-2 lg:space-y-8 overflow-y-auto lg:overflow-visible p-0 lg:p-0 border-b border-slate-700 lg:border-none">
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
                                                    <p className="font-bold mb-0 lg:mb-1 text-slate-300 text-[10px] lg:text-sm">Translation ({passage.label || `Passage ${pIdx + 1}`}):</p>
                                                    {passage.translation}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Questions */}
                                <div className="flex flex-col h-[30%] lg:h-auto lg:col-span-3">
                                    <div className={cn(
                                        "flex-1 overflow-y-auto lg:overflow-visible bg-slate-900/50 lg:bg-transparent p-0 lg:p-0",
                                        "space-y-0.5 lg:space-y-3"
                                    )}>
                                        <div className="space-y-0.5 lg:space-y-3 p-1 lg:p-0 pb-0">
                                            {currentSet.questions.map((q) => {
                                                const isRevealed = reviewMode || (isDrillMode && !!selectedAnswers[q.id]);
                                                const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

                                                return (
                                                    <div
                                                        key={q.id}
                                                        className={cn(
                                                            "bg-slate-900 border rounded-none lg:rounded-xl p-1 lg:p-4 transition-all",
                                                            isRevealed && isCorrect && "border-emerald-500/30 bg-emerald-500/5",
                                                            isRevealed && !isCorrect && "border-rose-500/30 bg-rose-500/5",
                                                            !isRevealed && "border-slate-800"
                                                        )}
                                                    >
                                                        <p className="text-slate-200 font-bold mb-1 lg:mb-3 text-[13px] lg:text-sm leading-tight">
                                                            <span className={cn(
                                                                "inline-flex items-center justify-center font-black text-[11px] lg:text-xs mr-1",
                                                                "text-slate-500"
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

                                                        {
                                                            isRevealed && (
                                                                <div className="mt-1 lg:mt-4 pt-1 lg:pt-4 border-t border-slate-800/50 text-[9px] lg:text-sm space-y-0.5 lg:space-y-2 animate-in fade-in">
                                                                    <p className="text-slate-400 text-[9px] lg:text-sm leading-tight hidden lg:block"><span className="text-slate-500 font-bold">Translation:</span> {q.translation}</p>
                                                                    <p className="text-amber-500/80 italic text-[9px] lg:text-sm leading-tight hidden lg:block"><span className="font-bold opacity-75">Tip:</span> {q.explanation}</p>
                                                                </div>
                                                            )
                                                        }
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

                                        {currentSetIndex < testSet.sets.length - 1 ? (
                                            <Button
                                                className="flex-1 h-8 lg:h-12 text-xs lg:text-sm bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                                                onClick={() => {
                                                    setCurrentSetIndex(prev => Math.min(testSet.sets.length - 1, prev + 1));
                                                    // window.scrollTo(0,0);
                                                }}
                                            >
                                                <span className="hidden lg:inline">Next Set</span>
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
                        );
                    })()}
                </div>
            </div>
        </div >
    );
}

export default function Part7TestRunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part7TestRunnerContent />
        </React.Suspense>
    );
}
