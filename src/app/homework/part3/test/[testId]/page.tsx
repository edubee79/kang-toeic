"use client";

import React, { useState, useRef, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw } from "lucide-react";
import { part3Data, Part3Set, Part3Question } from '@/data/part3';
import { cn } from "@/lib/utils";
import { TouchDictionary } from '@/components/common/TouchDictionary';


export default function Part3TestRunnerPage() {
    const params = useParams();
    const router = useRouter();
    const testId = Number(params.testId);

    // Derived Skimming Mode
    const isGuidedSkimming = testId >= 1 && testId <= 3;
    const isOptionalSkimming = testId >= 4 && testId <= 10;

    // Filter sets for this Test ID
    const testSets = part3Data.filter(s => s.testId === testId);

    const stopWords = new Set([
        'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
        'to', 'of', 'in', 'for', 'with', 'on', 'at', 'by', 'from', 'up', 'down',
        'about', 'into', 'over', 'after', 'does', 'do', 'did', 'will', 'would',
        'can', 'could', 'should', 'have', 'has', 'had', 'it', 'its', 'they',
        'them', 'their', 'he', 'him', 'his', 'she', 'her', 'hers', 'you', 'your',
        'we', 'our', 'likely', 'most', 'best', 'probably'
    ]);

    // State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [wrongQueue, setWrongQueue] = useState<any[]>([]);
    const [reviewSets, setReviewSets] = useState<any[]>([]);
    const [revealedQuestions, setRevealedQuestions] = useState<Set<string>>(new Set());

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });

    // Additional State for Skimming
    const [skimmingEnabled, setSkimmingEnabled] = useState(isGuidedSkimming); // Default true for 1-3
    const [skimmingState, setSkimmingState] = useState<'idle' | 'active' | 'done'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);
    const [showStartModal, setShowStartModal] = useState(isOptionalSkimming); // Show modal for 4-10

    // Refs for Audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Derive current set
    const activeSets = reviewMode ? reviewSets : testSets;
    const currentSet = activeSets[currentIndex];

    // 1. Audio Cleanup on Unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    // 2. Load Progress & History from LocalStorage
    useEffect(() => {
        // Load Progress
        const savedProgress = localStorage.getItem(`part3_progress_test_${testId}`);
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
                if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
            } catch (e) {
                console.error("Failed to load progress", e);
            }
        }

        // Load History (Attempts)
        const savedHistory = localStorage.getItem(`part3_history_test_${testId}`);
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) {
                console.error("Failed to load history", e);
            }
        }
    }, [testId]);

    // 3. Save Progress to LocalStorage
    useEffect(() => {
        // Prevent saving if in review mode or completed
        if (reviewMode || showCompletion) return;

        if (Object.keys(selectedAnswers).length > 0) {
            localStorage.setItem(`part3_progress_test_${testId}`, JSON.stringify({
                currentIndex,
                selectedAnswers
            }));
        }
    }, [currentIndex, selectedAnswers, testId, reviewMode, showCompletion]);


    // Effect: Handle Skimming Countdown
    useEffect(() => {
        if (skimmingState !== 'active') return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setSkimmingState('done');
        }
    }, [skimmingState, timeLeft]);

    // Effect: Reset Skimming on New Set
    useEffect(() => {
        // When index changes (new set)
        if (skimmingEnabled && !reviewMode && !showCompletion) {
            setSkimmingState('active');
            setTimeLeft(20); // 20 seconds skimming time
        } else {
            setSkimmingState('done');
        }
    }, [currentIndex, skimmingEnabled, reviewMode, showCompletion]);

    // Audio Play Control
    useEffect(() => {
        if (skimmingState === 'done' && audioRef.current && !showCompletion && !showStartModal) {
            audioRef.current.play().catch(e => console.log("Auto-play blocked", e));
        }
    }, [skimmingState, reviewMode, currentSet, showCompletion, showStartModal]);

    // Smarter Highlighting Helper
    // Filter to keep Wh-words + Nouns/Verbs (long words) - Common Stopwords
    const getHighlightedText = (text: string) => {

        // Split by space but keep punctuation for reconstruction if needed, 
        // effectively we can just replace words in the string.
        // We use regex to identify words. 
        // Warning: This is a simple heuristic.

        return text.replace(/\b(\w+)\b/g, (match) => {
            const lower = match.toLowerCase();
            // Always highlight Wh-words
            if (/^(who|where|when|what|why|how|which)$/i.test(match)) {
                return `<span class="text-emerald-400 font-extrabold border-b-2 border-emerald-500/50 pb-0.5">${match}</span>`;
            }
            // Filter stopwords
            if (stopWords.has(lower)) {
                return match;
            }
            // Filter very short words (<= 2 chars) unless they are not stopwords (unlikely in English to be important noun/verb if 2 chars except 'go', 'do'.. 'do' is stopword. 'go' might be important? let's stick to length > 2 for safety)
            if (lower.length <= 2) return match;

            // Highlight others (Nouns, Verbs, Adjectives...)
            return `<span class="text-emerald-300 font-bold">${match}</span>`;
        });
    };


    if (!testSets.length) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
                <h1 className="text-2xl font-bold">Test Not Found</h1>
                <p className="text-slate-400 mt-2">Could not find any questions for Test {testId}.</p>
                <Link href="/homework/part3" className="mt-6 text-emerald-500 hover:text-emerald-400 font-bold hover:underline">Return to Lobby</Link>
            </div>
        )
    }

    // Modal for Tests 4-10
    if (showStartModal) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 z-50 fixed inset-0">
                <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-8 animate-in zoom-in duration-300">
                    <div className="text-center">
                        <h2 className="text-2xl font-black text-white mb-2">Select Mode</h2>
                        <p className="text-slate-400">Choose your preferred test style</p>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={() => { setSkimmingEnabled(false); setShowStartModal(false); }}
                            className="w-full h-20 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold border border-slate-700 flex flex-col items-center justify-center gap-1 transition-all active:scale-95"
                        >
                            <span className="text-lg">⚡ Immediate Start</span>
                            <span className="text-xs text-slate-500 uppercase tracking-wider">No waiting time</span>
                        </button>
                        <button
                            onClick={() => {
                                setSkimmingEnabled(true);
                                setSkimmingState('active'); // Manually set active to prevent audio race condition
                                setTimeLeft(20);
                                setShowStartModal(false);
                            }}
                            className="w-full h-20 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold flex flex-col items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                        >
                            <span className="text-lg">⏱️ Apply Skimming Time</span>
                            <span className="text-xs text-emerald-200 uppercase tracking-wider">20s Preview per Set</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) {
            if (revealedQuestions.has(questionId)) return;
            setSelectedAnswers(prev => ({
                ...prev,
                [questionId]: optionLabel
            }));
            const nextRevealed = new Set(revealedQuestions);
            nextRevealed.add(questionId);
            setRevealedQuestions(nextRevealed);

            // Auto scroll to next question in review mode
            scrollToNext(questionId);
            return;
        }

        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: optionLabel
        }));

        // Auto scroll to next question in test mode
        scrollToNext(questionId);
    };

    const scrollToNext = (currentId: string) => {
        const questions = activeSets[currentIndex].questions;
        const currentIndexInSet = questions.findIndex((q: Part3Question) => q.id === currentId);

        if (currentIndexInSet !== -1 && currentIndexInSet < questions.length - 1) {
            const nextId = questions[currentIndexInSet + 1].id;
            // Short delay to allow state update/animation if needed
            setTimeout(() => {
                const nextEl = questionRefs.current[nextId];
                if (nextEl) {
                    const yOffset = -120; // Leave some space at the top
                    const y = nextEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const isSetComplete = currentSet?.questions.every((q: Part3Question) => selectedAnswers[q.id]);

    const handleNext = () => {
        if (!isSetComplete && !reviewMode) return;

        if (currentIndex < activeSets.length - 1) {
            setCurrentIndex(prev => prev + 1);
            window.scrollTo(0, 0);
        } else {
            if (reviewMode) {
                setShowCompletion(true);
                setReviewMode(false);
            } else {
                finishTest();
            }
        }
    };

    const handleRestart = () => {
        if (confirm("Are you sure you want to restart? Current progress will be lost.")) {
            localStorage.removeItem(`part3_progress_test_${testId}`);
            setCurrentIndex(0);
            setSelectedAnswers({});
            window.scrollTo(0, 0);
        }
    };

    const finishTest = async () => {
        const score = calculateScore();
        setShowCompletion(true);

        const wrongOnes: any[] = [];
        testSets.forEach((set: Part3Set) => {
            set.questions.forEach((q: Part3Question) => {
                if (selectedAnswers[q.id] !== q.correctAnswer) {
                    wrongOnes.push(q);
                }
            });
        });
        setWrongQueue(wrongOnes);

        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    unit: `LC_Part3_Test${testId}`,
                    score: score,
                    total: testSets.reduce((acc, set: Part3Set) => acc + set.questions.length, 0),
                    wrongCount: wrongOnes.length,
                    timestamp: serverTimestamp()
                });
                console.log("Score saved to Firebase");
            } catch (e) {
                console.error("Save error:", e);
            }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part3_history_test_${testId}`, JSON.stringify(newHistory));
        localStorage.removeItem(`part3_progress_test_${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        const newHistory = { attempts: nextAttempt, lastScore: undefined };
        setHistory(newHistory);
        localStorage.setItem(`part3_history_test_${testId}`, JSON.stringify(newHistory));

        setShowCompletion(false);
        setCurrentIndex(0);
        setSelectedAnswers({});
        localStorage.removeItem(`part3_progress_test_${testId}`);
    };

    const calculateScore = () => {
        let score = 0;
        testSets.forEach((set: Part3Set) => {
            set.questions.forEach((q: Part3Question) => {
                if (selectedAnswers[q.id] === q.correctAnswer) {
                    score++;
                }
            });
        });
        return score;
    };

    if (showCompletion) {
        const totalQuestions = testSets.reduce((acc, set) => acc + set.questions.length, 0);

        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center text-5xl mb-6 mx-auto ring-1 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20">
                            <Trophy className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">MISSION COMPLETE</h2>
                        <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase">
                            ATTEMPT #{history.attempts} FINISHED
                        </p>
                    </div>

                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Score</p>
                                <p className="text-5xl font-black text-white leading-none">{history.lastScore || 0}</p>
                            </div>
                            <div className="w-px h-12 bg-slate-800"></div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total</p>
                                <p className="text-5xl font-black text-slate-700 leading-none">{totalQuestions}</p>
                            </div>
                        </div>

                        {wrongQueue.length > 0 && (
                            <div className="text-left">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Wrong Questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {wrongQueue.map((q: Part3Question) => (
                                        <div key={q.id} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                                            <span className="text-[10px] font-black text-rose-500">Q{q.id.replace('q', '')}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mt-8 pt-6 border-t border-slate-800">
                            <p className="text-sm font-bold text-emerald-400">
                                {wrongQueue.length === 0 ? "Perfect Score! Amazing work. 🎉" : "틀린 문제를 확인하고 복습하세요."}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                        <button
                            onClick={handleRetake}
                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-5 h-5" />
                            <span>Retake Test ({history.attempts + 1})</span>
                        </button>
                        <button
                            onClick={() => {
                                const filteredSets = testSets
                                    .map(set => ({
                                        ...set,
                                        questions: set.questions.filter(q => selectedAnswers[q.id] !== q.correctAnswer)
                                    }))
                                    .filter(set => set.questions.length > 0);

                                setReviewSets(filteredSets);
                                setRevealedQuestions(new Set());

                                // Reset selected answers for wrong ones so they can re-solve
                                const newAnswers = { ...selectedAnswers };
                                filteredSets.forEach(s => s.questions.forEach(q => delete newAnswers[q.id]));
                                setSelectedAnswers(newAnswers);

                                setShowCompletion(false);
                                setReviewMode(true);
                                setCurrentIndex(0);
                            }}
                            className="w-full h-14 bg-slate-800 text-white font-black rounded-2xl hover:bg-slate-700 transition-all border border-slate-700 active:scale-95"
                        >
                            Review Incorrect Answers
                        </button>
                        <Link
                            href="/homework/part3"
                            className="w-full h-14 flex items-center justify-center text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                        >
                            Back to Lobby
                        </Link>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-950 pb-32 font-sans selection:bg-emerald-500/30">
            {/* Non-obstructive Skimming Timer */}
            {skimmingState === 'active' && (
                <div className="fixed top-24 right-4 z-50 animate-in fade-in slide-in-from-right duration-500">
                    <div className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black text-xl shadow-2xl flex flex-col items-center ring-4 ring-emerald-500/20">
                        <span className="text-[10px] uppercase font-bold text-emerald-100 opacity-80 tracking-widest mb-1">Skimming</span>
                        <span>{timeLeft}s</span>
                    </div>
                </div>
            )}

            {/* Sticky Header with Audio */}
            <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <Link href="/homework/part3" className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors">
                        ✕ Exit
                    </Link>

                    <div className="flex-1 text-center">
                        <span className="text-[10px] font-black tracking-widest text-emerald-500 uppercase block mb-0.5">
                            {reviewMode ? 'REVIEW MODE' : `TEST ${testId} • ATTEMPT ${history.attempts}`}
                        </span>
                        <span className="text-sm font-bold text-white">
                            {reviewMode ? 'Reviewing' : 'Set'} {currentIndex + 1} <span className="text-slate-600 mx-1">/</span> {activeSets.length} <span className="text-slate-500 text-xs ml-1">({reviewMode ? 'Incorrect Only' : `Q${currentSet.questionRange}`})</span>
                        </span>
                    </div>

                    <div className="w-auto">
                        {!reviewMode && (
                            <button
                                onClick={handleRestart}
                                className="text-xs font-bold text-slate-500 hover:text-rose-500 transition-colors"
                            >
                                ↺ Restart
                            </button>
                        )}
                    </div>
                </div>

                {/* Audio Player Bar */}
                <div className="bg-slate-900/50 border-b border-white/5 px-4 md:px-4 py-3">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-800 rounded-full p-1 ring-1 ring-white/10 relative">
                            {/* Overlay on Audio player during skimming - Reduced opacity/intrusiveness */}
                            {skimmingState === 'active' && (
                                <div className="absolute inset-0 z-10 bg-slate-900/60 rounded-full flex items-center justify-center backdrop-blur-[1px]">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wait for Skimming...</span>
                                </div>
                            )}
                            <audio
                                ref={audioRef}
                                key={currentSet.audio}
                                controls
                                className="w-full h-8 opacity-90 invert-[.9]"
                                src={currentSet.audio}
                            >
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cn("max-w-3xl mx-auto px-4 md:px-4 py-4 md:py-6 space-y-4 md:space-y-8 transition-all duration-500")}>
                <div className="text-center space-y-1 my-4 px-4">
                    <h1 className="text-xl font-black text-white tracking-tight">Questions {currentSet.questionRange}</h1>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Listen and choose the best answer</p>
                </div>

                {/* 1. Graphic Support (Image Placeholder) */}
                {currentSet.image && (
                    <div className="flex justify-center mb-6 px-4">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative border border-slate-700 p-1 rounded-lg shadow-2xl bg-slate-900">
                                <img
                                    src={currentSet.image}
                                    alt="Graphic for questions"
                                    className="max-h-48 object-contain rounded opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Questions List */}
                <div className="space-y-2 md:space-y-8">
                    {activeSets[currentIndex].questions.map((q: Part3Question, index: number) => {
                        return (
                            <div
                                key={q.id}
                                ref={(el) => { questionRefs.current[q.id] = el; }}
                                className={cn(
                                    "p-6 transition-all duration-300 bg-slate-900/40 border border-slate-800 rounded-3xl",
                                )}
                            >
                                <div className="flex gap-3">
                                    <div className={cn(
                                        "flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] border transition-colors",
                                        "bg-slate-800 text-slate-400 border-slate-700"
                                    )}>
                                        {q.id.replace('q', '')}
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <div className={cn(
                                            "text-base font-bold leading-snug transition-colors text-slate-200"
                                        )}>
                                            {reviewMode ? (
                                                <TouchDictionary
                                                    text={q.text}
                                                    highlightKeywords={skimmingEnabled && isGuidedSkimming}
                                                    stopWords={stopWords}
                                                />
                                            ) : (
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: (skimmingEnabled && isGuidedSkimming) ? getHighlightedText(q.text) : q.text
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 gap-2.5">
                                            {q.options.map((opt: { label: string; text: string }) => {
                                                const isSelected = selectedAnswers[q.id] === opt.label;
                                                return (
                                                    <button
                                                        key={opt.label}
                                                        onClick={() => handleSelect(q.id, opt.label)}
                                                        disabled={(!reviewMode && skimmingState === 'active') || revealedQuestions.has(q.id)}
                                                        className={cn(
                                                            "text-left px-4 py-3 rounded-xl transition-all duration-200 border relative overflow-hidden group",
                                                            isSelected && !revealedQuestions.has(q.id)
                                                                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                                                                : revealedQuestions.has(q.id) && opt.label === q.correctAnswer
                                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                                    : revealedQuestions.has(q.id) && isSelected && opt.label !== q.correctAnswer
                                                                        ? 'border-rose-500 bg-rose-500/10 text-rose-400'
                                                                        : 'border-slate-800 bg-slate-900/40 text-slate-400 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-700',
                                                            revealedQuestions.has(q.id) ? 'cursor-default opacity-90' : '',
                                                            skimmingState === 'active' && "cursor-wait"
                                                        )}
                                                    >
                                                        <span className={`font-black mr-2 text-xs ${isSelected || (revealedQuestions.has(q.id) && opt.label === q.correctAnswer) ? 'text-emerald-500' : 'text-slate-600 group-hover:text-slate-400'}`}>{opt.label}</span>
                                                        <div className="flex-1 text-base font-bold tracking-tight">
                                                            {reviewMode ? (
                                                                <TouchDictionary
                                                                    text={opt.text}
                                                                    highlightKeywords={skimmingEnabled && isGuidedSkimming}
                                                                    stopWords={stopWords}
                                                                />
                                                            ) : (
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: (skimmingEnabled && isGuidedSkimming) ? getHighlightedText(opt.text) : opt.text
                                                                    }}
                                                                />
                                                            )}
                                                        </div>

                                                        {revealedQuestions.has(q.id) && opt.label === q.correctAnswer && (
                                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-emerald-500 uppercase tracking-tighter bg-emerald-500/10 px-2 py-0.5 rounded">Correct</span>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                        {revealedQuestions.has(q.id) && currentSet.script && (
                                            <div className="mt-6 p-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm italic text-slate-400 leading-relaxed text-left">
                                                {typeof currentSet.script === 'string'
                                                    ? <TouchDictionary text={currentSet.script} />
                                                    : currentSet.script.map((s: { speaker: string; text: string }, si: number) => (
                                                        <div key={si} className="mb-2">
                                                            <span className="font-bold text-slate-300 not-italic">{s.speaker}:</span> <TouchDictionary text={s.text} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-none">
                <div className="max-w-3xl mx-auto flex justify-end items-center pointer-events-auto">
                    <button
                        onClick={handleNext}
                        disabled={!isSetComplete && !reviewMode}
                        className={`
                            px-8 py-3.5 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-lg active:scale-95 flex items-center gap-2
                            ${(isSetComplete || reviewMode)
                                ? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:shadow-emerald-500/25 ring-1 ring-inset ring-white/10'
                                : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                            }
                        `}
                    >
                        {reviewMode
                            ? (currentIndex === activeSets.length - 1 ? <span>Finish Review 🏁</span> : <span>Next (Review) →</span>)
                            : (!isSetComplete
                                ? <span>Select All Answers</span>
                                : (currentIndex === testSets.length - 1 ? <span>Finish Test 🎉</span> : <span>Next Set <span className="opacity-50 ml-1">→</span></span>)
                            )
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}
