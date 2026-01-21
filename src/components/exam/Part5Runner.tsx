
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Timer, CheckCircle2, XCircle, Trophy, ChevronRight, BookOpen, Tag, Play, Volume2 } from "lucide-react";
import { getClassificationLabel } from '@/data/toeic/reading/part5/classification';
import { Part5TestQuestion } from '@/data/toeic/reading/part5/tests';

interface Part5RunnerProps {
    testId: string | number;
    title: string;
    questions: Part5TestQuestion[];
    mode: 'real' | 'drill' | 'weakness';
    storageKey?: string; // If provided, auto-saves progress
    onFinish: (score: number, elapsedTime: number, selectedAnswers: Record<string, string>) => void;
    initialHistory?: { attempts: number; lastScore?: number };
    onExit: () => void;
}

export function Part5Runner({
    testId,
    title,
    questions,
    mode,
    storageKey,
    onFinish,
    initialHistory = { attempts: 1 },
    onExit
}: Part5RunnerProps) {
    const isDrillMode = mode === 'drill';
    const isWeaknessMode = mode === 'weakness';

    // State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    // Initial Load
    useEffect(() => {
        if (storageKey) {
            const saved = localStorage.getItem(storageKey);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }
    }, [storageKey]);

    // Auto-Save
    useEffect(() => {
        if (storageKey && !showCompletion && !reviewMode && Object.keys(selectedAnswers).length > 0) {
            localStorage.setItem(storageKey, JSON.stringify({
                selectedAnswers,
                elapsedTime
            }));
        }
    }, [storageKey, selectedAnswers, elapsedTime, showCompletion, reviewMode]);

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

    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;
        if (isDrillMode && selectedAnswers[questionId]) return; // Strict drill mode
        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handlePlayAudio = (id: string, url: string) => {
        if (currentlyPlaying === id) {
            audioRef.current?.pause();
            setCurrentlyPlaying(null);
        } else {
            if (audioRef.current) {
                audioRef.current.src = url;
                audioRef.current.play();
                setCurrentlyPlaying(id);
            }
        }
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) score++;
        });
        return score;
    };

    const handleFinish = () => {
        setIsTimerRunning(false);
        const score = calculateScore();
        setShowCompletion(true);
        if (storageKey) localStorage.removeItem(storageKey);
        onFinish(score, elapsedTime, selectedAnswers);
    };

    const handleRetake = () => {
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
                    isDrillMode || isWeaknessMode ? "bg-indigo-500/10 text-indigo-500 ring-indigo-500/50" : "bg-amber-500/10 text-amber-500 ring-amber-500/50"
                )}>
                    {isDrillMode || isWeaknessMode ? <BookOpen className="w-12 h-12" /> : <Trophy className="w-12 h-12" />}
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    {isWeaknessMode ? "Weakness Review Complete" : (isDrillMode ? "Training Complete" : "Mission Complete")}
                </h2>
                <p className={cn("font-bold tracking-widest text-xs uppercase mb-8", isDrillMode || isWeaknessMode ? "text-indigo-500" : "text-amber-500")}>
                    {title} • {isDrillMode ? "Drill Mode" : `Attempt ${initialHistory.attempts}`}
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{calculateScore()}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {questions.length}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    <button onClick={() => { setShowCompletion(false); setReviewMode(true); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700">
                        Review Answers
                    </button>
                    {!isWeaknessMode && (
                        <button onClick={handleRetake} className={cn("w-full h-14 text-white rounded-2xl font-bold", isDrillMode ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-600 hover:bg-amber-500")}>
                            Retake Test
                        </button>
                    )}
                    <button onClick={onExit} className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        Back to Lobby
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pb-32">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-xl">
                <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onExit}
                            className="text-slate-400 hover:text-white p-2"
                        >
                            <ChevronRight className="w-6 h-6 rotate-180" />
                        </button>
                        <span className={cn("text-[10px] font-black tracking-widest uppercase block mb-0.5", isDrillMode || isWeaknessMode ? "text-indigo-500" : "text-amber-500")}>
                            {reviewMode ? 'REVIEW MODE' : (isDrillMode ? 'DRILL MODE' : title)}
                        </span>
                    </div>

                    <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-sm font-bold text-white">
                            {Object.keys(selectedAnswers).length} / {questions.length}
                        </span>
                    </div>

                    <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800", (reviewMode || isDrillMode) && "opacity-50")}>
                        <Timer className="w-4 h-4 text-slate-400" />
                        <span className="text-sm font-mono text-slate-200">{formatTime(elapsedTime)}</span>
                    </div>
                </div>
            </div>

            {/* Questions List */}
            <div className="max-w-3xl mx-auto px-4 md:px-4 py-4 md:py-8 space-y-4 md:space-y-6">
                {questions.map((q) => {
                    const isSelected = !!selectedAnswers[q.id];
                    const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                    const isRevealed = reviewMode || (isDrillMode && isSelected);

                    return (
                        <div key={q.id} id={`q-${q.id}`} className={cn(
                            "p-6 transition-all duration-300 bg-slate-900/40 border border-slate-800 rounded-3xl",
                            isRevealed
                                ? (isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20")
                                : "hover:border-slate-700"
                        )}>
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
                                    {/* Question Text or Audio Player */}
                                    {q.audio ? (
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                                                <button
                                                    onClick={() => handlePlayAudio(q.id, q.audio!)}
                                                    className={cn(
                                                        "w-12 h-12 rounded-full flex items-center justify-center transition-all",
                                                        currentlyPlaying === q.id
                                                            ? "bg-emerald-500 text-slate-900 animate-pulse"
                                                            : "bg-emerald-600/20 text-emerald-500 hover:bg-emerald-600/40"
                                                    )}
                                                >
                                                    {currentlyPlaying === q.id ? <Volume2 className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                                </button>
                                                <div>
                                                    <p className="text-sm font-black text-slate-300 uppercase tracking-widest">Listening Question</p>
                                                    <p className="text-xs text-slate-500">정답을 듣고 A, B, C 중 선택하세요.</p>
                                                </div>
                                            </div>
                                            {isRevealed && q.text && q.text !== "(Audio Question)" && (
                                                <p className="text-base font-medium text-slate-400 italic">
                                                    Script: {q.text}
                                                </p>
                                            )}
                                        </div>
                                    ) : (
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
                                    )}

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
                                                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/50"
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

                                                <div className="ml-auto flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700">
                                                    <Tag className="w-3 h-3 text-slate-500" />
                                                    <span className="text-[10px] text-slate-400 font-bold">
                                                        {getClassificationLabel(q.classification)}
                                                    </span>
                                                </div>

                                                {(isDrillMode || isWeaknessMode) && (
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

            {/* Submit Button */}
            {!reviewMode && (
                <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center pointer-events-none">
                    <button
                        onClick={handleFinish}
                        disabled={!isDrillMode && Object.keys(selectedAnswers).length < questions.length}
                        className={cn(
                            "pointer-events-auto shadow-2xl px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 transition-all active:scale-95",
                            isDrillMode
                                ? (Object.keys(selectedAnswers).length === questions.length ? "bg-indigo-500 text-white shadow-indigo-500/20" : "bg-slate-800 text-slate-500")
                                : (Object.keys(selectedAnswers).length > 0 ? "bg-amber-500 text-slate-900 shadow-amber-500/20" : "bg-slate-800 text-slate-500")
                        )}
                    >
                        <span>{isDrillMode ? (Object.keys(selectedAnswers).length === questions.length ? "Finish Training" : `${Object.keys(selectedAnswers).length} / ${questions.length}`) : "Submit Answers"}</span>
                        {(!isDrillMode || Object.keys(selectedAnswers).length === questions.length) && <ChevronRight className="w-5 h-5" />}
                    </button>
                </div>
            )}

            <audio
                ref={audioRef}
                onEnded={() => setCurrentlyPlaying(null)}
                className="hidden"
            />
        </div>
    );
}
