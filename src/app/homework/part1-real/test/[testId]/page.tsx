'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Play, Pause, ChevronRight, CheckCircle2, AlertCircle, RotateCcw, Timer, Trophy, BookOpen } from "lucide-react";
import { part1RealTests, Part1Question } from '@/data/toeic/listening/part1/tests';
import { cn } from "@/lib/utils";

export default function Part1TestRunner() {
    const params = useParams();
    const router = useRouter();
    const testId = parseInt(params.testId as string);

    const [testSet, setTestSet] = useState<any>(null);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    // New State for Part 6 parity
    const [elapsedTime, setElapsedTime] = useState(0);
    const [reviewMode, setReviewMode] = useState(false);

    // Audio
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const found = part1RealTests.find(t => t.testId === testId);
        if (found) {
            setTestSet(found);
        } else {
            alert("Test not found");
            router.push('/homework/part1-real');
        }
    }, [testId, router]);

    // Load Progress on Mount
    useEffect(() => {
        const savedProgress = localStorage.getItem(`part1_progress_vol_${testId}`);
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                if (parsed.currentQIndex !== undefined) setCurrentQIndex(parsed.currentQIndex);
                if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
            } catch (e) {
                console.error("Failed to load progress", e);
            }
        }
    }, [testId]);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isFinished && !reviewMode && testSet) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isFinished, reviewMode, testSet]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleRetake = () => {
        setIsFinished(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setCurrentQIndex(0);
        setScore(0);
    };

    // Audio & Auto-play Logic
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const playAudio = () => {
        if (!testSet?.questions[currentQIndex]?.audio) return;

        // Stop any existing audio
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(testSet.questions[currentQIndex].audio);
        audioRef.current = audio;

        audio.play()
            .then(() => setIsPlaying(true))
            .catch(e => console.error("Audio play failed", e));

        audio.onended = () => setIsPlaying(false);
    };

    // Auto-play effect
    useEffect(() => {
        if (reviewMode || isFinished) return;

        // Clear existing timeouts and stop audio
        if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }

        // Determine delay: 3s for first question (initial load), 1s for others
        const delay = currentQIndex === 0 ? 3000 : 1000;

        autoPlayRef.current = setTimeout(() => {
            playAudio();
        }, delay);

        return () => {
            if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [currentQIndex, testSet, reviewMode, isFinished]);

    // Manual Play Handler
    const handlePlay = () => {
        if (!audioRef.current) {
            playAudio();
            return;
        }

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => console.error(e));
            setIsPlaying(true);
        }
    };

    const handleSelect = (option: string) => {
        if (isFinished || reviewMode) return;
        const q = testSet.questions[currentQIndex];
        setSelectedAnswers(prev => ({ ...prev, [q.id]: option }));
    };

    const handleNext = () => {
        if (currentQIndex < testSet.questions.length - 1) {
            setCurrentQIndex(prev => prev + 1);
        } else {
            finishTest();
        }
    };

    const handlePrev = () => {
        if (currentQIndex > 0) {
            setCurrentQIndex(prev => prev - 1);
        }
    };

    const finishTest = async () => {
        let correct = 0;
        testSet.questions.forEach((q: Part1Question) => {
            if (selectedAnswers[q.id] === q.correctAnswer) correct++;
        });

        // Score as Percentage
        const finalPercentage = Math.round((correct / testSet.questions.length) * 100);
        setScore(finalPercentage);
        setIsFinished(true);

        // Save Result
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                await addDoc(collection(db, "Manager_Results"), {
                    studentId: user.userId || "guest",
                    studentName: user.userName || "Guest",
                    type: 'part1_test',
                    unit: `Part1 Real Vol.${testId}`,
                    detail: `Vol.${testId}`,
                    score: finalPercentage, // Save as percentage
                    totalQuestions: testSet.questions.length, // Save raw total for reference
                    correctCount: correct,
                    timestamp: serverTimestamp()
                });
            } catch (e) {
                console.error("Save failed", e);
            }
        }
    };

    if (!testSet) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>;

    if (isFinished) {
        const correctCount = Math.round((score / 100) * testSet.questions.length);

        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 ring-1 shadow-2xl bg-amber-500/10 text-amber-500 ring-amber-500/50">
                    <Trophy className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    학습 완료
                </h2>
                <p className="font-bold tracking-widest text-xs uppercase mb-8 text-amber-500">
                    Part 1 • Test {testId} • Real Mode
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{correctCount}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {testSet.questions.length}</span>
                    </div>
                    <div className="text-slate-500 font-bold flex items-center justify-center gap-2 mt-4 grayscale opacity-70">
                        <Timer className="w-4 h-4" />
                        <span>소요 시간: {formatTime(elapsedTime)}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    <button onClick={() => { setIsFinished(false); setReviewMode(true); setCurrentQIndex(0); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                        틀린문제 확인
                    </button>
                    <button onClick={handleRetake} className="w-full h-14 text-white rounded-2xl font-bold active:scale-95 transition-all bg-amber-600 hover:bg-amber-500">
                        다시 풀기
                    </button>
                    <Link href="/homework/part1-real" className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    const currentQ = testSet.questions[currentQIndex];

    // Load Progress on Mount


    // Save Progress automatically on state change (optional, but requested behavior is 'Save & Exit')
    // We will stick to explicit Save & Exit for stability, or auto-save?
    // User asked "save and exit button". Let's do explicit save there.

    // ... (existing code)

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            {/* Header */}
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50 backdrop-blur">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-slate-400">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Exit
                    </Button>
                    {!reviewMode && !isFinished && (
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-indigo-500/30 text-indigo-400 hover:bg-indigo-950 hover:text-white"
                            onClick={() => {
                                // Save & Exit
                                if (Object.keys(selectedAnswers).length > 0) {
                                    localStorage.setItem(`part1_progress_vol_${testId}`, JSON.stringify({
                                        selectedAnswers,
                                        currentQIndex,
                                        elapsedTime
                                    }));
                                }
                                router.push('/homework/part1-real');
                            }}
                        >
                            Save & Exit
                        </Button>
                    )}
                </div>
                <span className="text-white font-bold hidden md:block">Part 1 Real Test</span>
                <div className="w-20"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full p-4 md:p-8 gap-8">
                {/* Left: Image & Audio */}
                <div className="flex-1 space-y-6 flex flex-col justify-center">
                    <div className="aspect-[4/3] bg-black rounded-3xl border border-slate-700 flex items-center justify-center relative overflow-hidden group">
                        {/* Actual Image */}
                        <img
                            src={currentQ.image}
                            alt={`Question ${currentQIndex + 1}`}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    {/* Audio Player (Desktop) */}
                    <div className="hidden md:flex bg-slate-900 rounded-2xl p-4 border border-slate-800 items-center gap-4">
                        <Button
                            onClick={handlePlay}
                            className={cn(
                                "w-12 h-12 rounded-full flex-shrink-0",
                                "bg-indigo-600 hover:bg-indigo-500 text-white"
                            )}
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                        </Button>
                        <div className="flex-1">
                            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className={cn("h-full bg-indigo-500 transition-all duration-1000", isPlaying ? "w-full animate-progress" : "w-0")}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Question & Options */}
                <div className="flex-1 flex flex-col justify-center space-y-8">
                    {/* Right: Question & Options (Desktop/Mobile split) */}
                    <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-8">

                        {/* Header Text (Hidden on Mobile to save space) */}
                        <div className="hidden md:block">
                            <span className="text-indigo-500 font-black text-xs uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">Question {currentQIndex + 1}</span>
                            <h2 className="text-2xl font-bold text-white mt-4 mb-2">Select the best description</h2>
                            <p className="text-slate-400 text-sm">Listen to the four statements.</p>
                        </div>

                        {/* Mobile: Compact Header */}
                        <div className="md:hidden flex items-center justify-between mb-2">
                            <span className="text-indigo-500 font-black text-xs uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded">Q {currentQIndex + 1}</span>
                            <div className="text-xs text-slate-500 flex items-center gap-1">
                                {isPlaying ? <span className="text-emerald-500 font-bold animate-pulse">Playing...</span> : <span>Wait 3s auto-start</span>}
                            </div>
                        </div>

                        {/* Options Area */}
                        <div className="space-y-3">
                            {/* 1. Mobile Compact Row (A B C D) - Circular Buttons */}
                            <div className="flex justify-center gap-4 md:hidden py-4">
                                {['A', 'B', 'C', 'D'].map((opt) => {
                                    const isSelected = selectedAnswers[currentQ.id] === opt;
                                    const isCorrect = currentQ.correctAnswer === opt;

                                    let bgClass = "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700";
                                    if (reviewMode) {
                                        if (isCorrect) bgClass = "bg-emerald-500 text-slate-900 border-emerald-500";
                                        else if (isSelected) bgClass = "bg-rose-500 text-white border-rose-500";
                                    } else {
                                        if (isSelected) bgClass = "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/50 scale-110 ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900";
                                    }

                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => handleSelect(opt)}
                                            className={cn(
                                                "w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl font-black transition-all active:scale-95 shadow-lg",
                                                bgClass
                                            )}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* 2. Desktop Vertical List (Full Detail) */}
                            <div className="hidden md:block space-y-3">
                                {['A', 'B', 'C', 'D'].map((opt) => {
                                    const isSelected = selectedAnswers[currentQ.id] === opt;
                                    const isCorrect = currentQ.correctAnswer === opt;

                                    let buttonClass = "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700 hover:text-white";
                                    let iconClass = "bg-slate-800 border-slate-600 text-slate-500 group-hover:border-slate-500 group-hover:text-slate-400";

                                    if (reviewMode) {
                                        if (isCorrect) {
                                            buttonClass = "bg-emerald-900/20 border-emerald-500 text-emerald-400";
                                            iconClass = "bg-emerald-500 border-emerald-500 text-slate-900";
                                        } else if (isSelected && !isCorrect) {
                                            buttonClass = "bg-rose-900/20 border-rose-500 text-rose-400";
                                            iconClass = "bg-rose-500 border-rose-500 text-white";
                                        }
                                    } else {
                                        if (isSelected) {
                                            buttonClass = "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20 scale-[1.02]";
                                            iconClass = "bg-white text-indigo-600 border-white";
                                        }
                                    }

                                    return (
                                        <button
                                            key={opt}
                                            onClick={() => handleSelect(opt)}
                                            className={cn(
                                                "w-full p-6 rounded-2xl border text-left flex items-start gap-4 transition-all duration-200 group",
                                                buttonClass
                                            )}
                                        >
                                            <span className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border flex-shrink-0 mt-0.5",
                                                iconClass
                                            )}>
                                                {opt}
                                            </span>
                                            <div className="flex-1">
                                                <span className="font-bold text-lg block mb-1">Option {opt}</span>
                                                {reviewMode && currentQ.script && (
                                                    <div className="text-sm opacity-90">
                                                        <p className="font-medium text-white/90">{currentQ.script[opt as keyof typeof currentQ.script]}</p>
                                                        <p className="text-xs mt-1 opacity-70">{(currentQ.script as any)[`translation_${opt}`]}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex justify-between pt-4 md:pt-8 border-t border-slate-800/50">
                            <Button
                                variant="ghost"
                                disabled={currentQIndex === 0}
                                onClick={handlePrev}
                                className="text-slate-500 hover:text-white"
                            >
                                Previous
                            </Button>
                            <Button
                                onClick={handleNext}
                                disabled={!selectedAnswers[currentQ.id]}
                                className="bg-white text-slate-900 hover:bg-slate-200 font-bold px-8"
                            >
                                {currentQIndex === testSet.questions.length - 1 ? "Finish Test" : "Next"}
                                <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
