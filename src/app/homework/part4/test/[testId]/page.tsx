"use client";

import React, { useState, useRef, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { part4Data, Part4Set, Part4Question } from '@/data/part4';
import { cn, normalizeOptions } from "@/lib/utils";
import { Headphones, PlayCircle, Activity, Trophy, RotateCcw, ChevronRight } from "lucide-react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TouchDictionary } from '@/components/common/TouchDictionary';
import { PerformanceSyncService } from '@/services/performanceSyncService';


export default function Part4TestRunnerPage() {
    const params = useParams();
    const router = useRouter();
    const testId = Number(params.testId);

    // Derived Skimming Mode
    const isGuidedSkimming = testId >= 1 && testId <= 3;
    const isOptionalSkimming = testId >= 4 && testId <= 10;

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
    const [audioIndex, setAudioIndex] = useState(0); // Tracks which audio is currently playing
    const [isAudioTransitioning, setIsAudioTransitioning] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [reviewSets, setReviewSets] = useState<any[]>([]);
    const [revealedQuestions, setRevealedQuestions] = useState<Set<string>>(new Set());
    const [wrongQueue, setWrongQueue] = useState<any[]>([]);

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });
    const [isMounted, setIsMounted] = useState(false);

    // Additional State for Skimming
    const [skimmingEnabled, setSkimmingEnabled] = useState(true); // Default true for Real Mode
    const [skimmingState, setSkimmingState] = useState<'idle' | 'active' | 'done'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);
    const [showStartModal, setShowStartModal] = useState(isOptionalSkimming); // Show modal for 4-10
    const [isAudioBlocked, setIsAudioBlocked] = useState(false);

    // Refs for Audio
    const audioRef = useRef<HTMLAudioElement>(null);
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Data
    const [testSets, setTestSets] = useState<Part4Set[]>([]);
    const [isReady, setIsReady] = useState(false);

    // Derive current set
    const activeSets = reviewMode ? reviewSets : testSets;
    const currentSet = activeSets[currentIndex];
    const audioSet = activeSets[audioIndex];

    // Initial Load & Drill Filter
    useEffect(() => {
        setIsMounted(true);
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        const tag = urlParams.get('tag');
        const context = urlParams.get('context');

        if (mode === 'drill') {
            let drilledSets: Part4Set[] = [];

            if (context) {
                // Context-based drill: filter by conversation situation
                drilledSets = part4Data.filter(s => s.contextType === context);

                if (drilledSets.length > 0) {
                    setTestSets(drilledSets.slice(0, 5)); // Limit to 5 sets (15 questions)
                    setIsReady(true);
                    return;
                } else {
                    console.log(`No drill sets found for context: ${context}`);
                }
            } else if (tag) {
                // Classification-based drill: filter by question type (for INFERENCE/GRAPHIC)
                drilledSets = part4Data.filter(s => {
                    return s.questions.some(q => q.classification === tag);
                });

                if (drilledSets.length > 0) {
                    setTestSets(drilledSets.slice(0, 5)); // Limit to 5 sets (15 questions)
                    setIsReady(true);
                    return;
                } else {
                    console.log(`No drill sets found for classification: ${tag}`);
                }
            }
        }

        const found = part4Data.filter(s => s.testId === Number(testId));
        setTestSets(found);

        // Progress restoration logic
        if (!mode) {
            const userStr = localStorage.getItem('toeic_user');
            const user = userStr ? JSON.parse(userStr) : null;
            const userId = user?.id || 'guest';

            const savedProgress = localStorage.getItem(`part4_progress_${userId}_test_${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.currentIndex !== undefined) {
                        setCurrentIndex(parsed.currentIndex);
                        setAudioIndex(parsed.currentIndex);
                    }
                    if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        setTimeout(() => setIsReady(true), 0);
    }, [testId, router]);

    // 3. Save Progress to LocalStorage
    useEffect(() => {
        if (reviewMode || showCompletion) return;

        if (Object.keys(selectedAnswers).length > 0) {
            const userStr = localStorage.getItem('toeic_user');
            const user = userStr ? JSON.parse(userStr) : null;
            const userId = user?.id || 'guest';

            localStorage.setItem(`part4_progress_${userId}_test_${testId}`, JSON.stringify({
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

    // Effect: Reset Skimming on initial load (Real Mode: always 20s if skimmingEnabled)
    useEffect(() => {
        if (!isReady) return;

        if (!reviewMode && !showCompletion && !showStartModal) {
            if (skimmingState === 'idle') {
                setSkimmingState('active');
                setTimeLeft(20);
            }
        }
    }, [isReady, reviewMode, showCompletion, showStartModal, skimmingState]);

    // Audio Play Control
    useEffect(() => {
        if (!isReady) return;

        if (skimmingState === 'done' && audioRef.current && !showCompletion && !showStartModal && !isAudioTransitioning) {
            if (audioRef.current.src !== audioSet?.audio) {
                audioRef.current.load();
            }
            audioRef.current.play()
                .then(() => setIsAudioBlocked(false))
                .catch(e => {
                    if (e.name === 'NotAllowedError') {
                        setIsAudioBlocked(true);
                    }
                    console.log("Auto-play blocked", e);
                });
        } else if (audioRef.current) {
            if (skimmingState === 'active' || isAudioTransitioning) {
                audioRef.current.pause();
                if (skimmingState === 'active') audioRef.current.currentTime = 0;
            }
        }
    }, [isReady, skimmingState, reviewMode, audioIndex, audioSet, showCompletion, showStartModal, isAudioTransitioning]);

    // Audio End Handler
    const handleAudioEnded = () => {
        // In review mode, don't auto-advance - user controls navigation
        if (reviewMode) {
            return;
        }

        if (audioIndex < activeSets.length - 1) {
            setIsAudioTransitioning(true);
            setTimeout(() => {
                setAudioIndex(prev => prev + 1);
                setIsAudioTransitioning(false);
            }, 2000); // 2s gap
        } else {
            // Real Mode: Check if all questions answered.
            const allAnswered = testSets.every(set => set.questions.every(q => selectedAnswers[q.id]));
            if (allAnswered) {
                finishTest();
            }
        }
    };


    // Smarter Highlighting Helper (Part 4 - Indigo Theme)
    const getHighlightedText = (text: string) => {

        return text.replace(/\b(\w+)\b/g, (match) => {
            const lower = match.toLowerCase();
            // Always highlight Wh-words
            if (/^(who|where|when|what|why|how|which)$/i.test(match)) {
                return `<span class="text-indigo-400 font-extrabold border-b-2 border-indigo-500/50 pb-0.5">${match}</span>`;
            }
            if (stopWords.has(lower)) {
                return match;
            }
            if (lower.length <= 2) return match;

            return `<span class="text-indigo-300 font-bold">${match}</span>`;
        });
    };


    if (!isMounted) return null;

    if (!testSets.length) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
                <h1 className="text-2xl font-bold">Test Not Found</h1>
                <p className="text-slate-400 mt-2">Could not find any questions for Test {testId}.</p>
                <Link href="/homework/part4" className="mt-6 text-indigo-500 hover:text-indigo-400 font-bold hover:underline">Return to Lobby</Link>
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
                                setSkimmingState('active');
                                setTimeLeft(20);
                                setShowStartModal(false);
                            }}
                            className="w-full h-20 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold flex flex-col items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
                        >
                            <span className="text-lg">⏱️ Apply Skimming Time</span>
                            <span className="text-xs text-indigo-200 uppercase tracking-wider">20s Preview per Set</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (revealedQuestions.has(questionId)) return;

        const newAnswers = {
            ...selectedAnswers,
            [questionId]: optionLabel
        };
        setSelectedAnswers(newAnswers);

        if (reviewMode) {
            const nextRevealed = new Set(revealedQuestions);
            nextRevealed.add(questionId);
            setRevealedQuestions(nextRevealed);
            scrollToNext(questionId);
            return;
        }

        // Test Mode Logic
        scrollToNext(questionId);

        // Check if CURRENT SET is complete
        const currentSetQuestions = currentSet.questions;
        const currentSetComplete = currentSetQuestions.every((q: Part4Question) => newAnswers[q.id]);

        if (currentSetComplete) {
            if (currentIndex < activeSets.length - 1) {
                // Wait a tiny bit for satisfaction then auto-transition UI
                setTimeout(() => {
                    setCurrentIndex(prev => prev + 1);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                }, 400);
            } else {
                // Last set answered.
                if (audioRef.current?.ended && audioIndex === activeSets.length - 1) {
                    finishTest();
                }
            }
        }
    };

    const scrollToNext = (currentId: string) => {
        const questions = activeSets[currentIndex].questions;
        const currentIndexInSet = questions.findIndex((q: Part4Question) => q.id === currentId);

        if (currentIndexInSet !== -1 && currentIndexInSet < questions.length - 1) {
            const nextId = questions[currentIndexInSet + 1].id;
            // Short delay to allow state update/animation if needed
            setTimeout(() => {
                const nextEl = questionRefs.current[nextId];
                if (nextEl) {
                    const yOffset = -160; // Increased offset to clear sticky header
                    const y = nextEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const isSetComplete = currentSet?.questions.every((q: Part4Question) => selectedAnswers[q.id]);

    const handleNext = () => {
        if (!reviewMode) return; // Disabled in test mode

        if (currentIndex < activeSets.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setAudioIndex(prev => prev + 1); // Stay in sync during review
            window.scrollTo({ top: 0, behavior: 'instant' });
        } else {
            if (reviewMode) {
                setShowCompletion(true);
                setReviewMode(false);
            }
        }
    };


    const handleRestart = () => {
        if (confirm("Are you sure you want to restart? Current progress will be lost.")) {
            localStorage.removeItem(`part4_progress_test_${testId}`);
            setCurrentIndex(0);
            setSelectedAnswers({});
            window.scrollTo(0, 0);
        }
    };

    const finishTest = async () => {
        const score = calculateScore();

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        setShowCompletion(true);

        const wrongOnes: Part4Question[] = [];
        const incorrectQuestions: any[] = [];
        testSets.forEach((set: Part4Set) => {
            set.questions.forEach((q: Part4Question) => {
                if (selectedAnswers[q.id] !== q.correctAnswer) {
                    wrongOnes.push(q);
                    incorrectQuestions.push({
                        id: `P4_T${testId}_${q.id.replace('q', '')}`,
                        classification: q.questionType || 'Unknown',
                        contextType: set.contextType || 'Unknown'
                    });
                }
            });
        });
        setWrongQueue(wrongOnes);

        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.username || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    className: user.userClass || user.className || "Unknown",
                    type: 'part4_test',
                    detail: `Test ${testId}`,
                    unit: `LC_Part4_Test${testId}`,
                    score: score,
                    total: testSets.reduce((acc, set: Part4Set) => acc + set.questions.length, 0),
                    wrongCount: incorrectQuestions.length,
                    incorrectQuestions: incorrectQuestions,
                    timestamp: serverTimestamp()
                });
                // ✅ NEW: Sync Performance Summary after submission
                await PerformanceSyncService.syncUserSummary(user.userId || user.uid);
                console.log("Score saved to Firebase");
            } catch (e) {
                console.error("Save error:", e);
            }
        }

        localStorage.setItem(`part4_history_test_${testId}`, JSON.stringify(newHistory));

        console.log(`Sending Part 4 score (Attempt ${history.attempts})...`, { score, answers: selectedAnswers });
        localStorage.removeItem(`part4_progress_test_${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        const newHistory = { attempts: nextAttempt, lastScore: undefined };
        setHistory(newHistory);
        localStorage.setItem(`part4_history_test_${testId}`, JSON.stringify(newHistory));

        setShowCompletion(false);
        setCurrentIndex(0);
        setSelectedAnswers({});
        localStorage.removeItem(`part4_progress_test_${testId}`);
    };

    const calculateScore = () => {
        let score = 0;
        testSets.forEach((set: Part4Set) => {
            set.questions.forEach((q: Part4Question) => {
                if (selectedAnswers[q.id] === q.correctAnswer) {
                    score++;
                }
            });
        });
        return score;
    };

    if (showCompletion) {
        const totalQuestions = testSets.reduce((acc, set: Part4Set) => acc + set.questions.length, 0);

        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 bg-indigo-500/10 text-indigo-500 rounded-3xl flex items-center justify-center text-5xl mb-8 ring-1 ring-indigo-500/50 shadow-2xl shadow-indigo-500/20">
                    🏆
                </div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight uppercase italic font-serif">Mission Complete</h1>
                <p className="text-indigo-500 font-bold tracking-widest text-sm uppercase mb-6">
                    Part 4 Attempt #{history.attempts} Finished
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl mb-10 w-full max-w-sm">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{history.lastScore || 0}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {totalQuestions}</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-2">Correct Answers</p>
                </div>

                {wrongQueue.length > 0 && (
                    <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl mb-8 w-full max-w-sm text-left">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Wrong Questions</p>
                        <div className="flex flex-wrap gap-2">
                            {wrongQueue.map((q: Part4Question) => (
                                <div key={q.id} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                                    <span className="text-[10px] font-black text-rose-500">Q{q.id.replace('q', '')}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-3 w-full max-w-xs">
                    <button
                        onClick={handleRetake}
                        className="h-14 bg-indigo-600/20 text-indigo-400 border border-indigo-500/50 rounded-2xl font-bold hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <span>Retake Test (Attempt {history.attempts + 1})</span>
                    </button>
                    <button
                        onClick={() => {
                            const filteredSets = testSets
                                .map((set: Part4Set) => ({
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
                            setAudioIndex(0);  // Reset audio to match first wrong question set
                            setSkimmingState('done');  // Skip skimming in review mode
                        }}
                        className="h-14 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-colors"
                    >
                        Review Incorrect Answers
                    </button>
                    <button
                        onClick={() => {
                            const urlParams = new URLSearchParams(window.location.search);
                            const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                            router.push(isAi ? '/weakness/dashboard' : '/homework/part4');
                        }}
                        className="h-14 flex items-center justify-center w-full text-slate-500 hover:text-white transition-colors text-sm font-bold"
                    >
                        Back to Lobby
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-950 pb-32 font-sans selection:bg-indigo-500/30">
            {isAudioBlocked && (
                <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-500">
                    <div className="max-w-xs w-full bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6">
                        <div className="w-20 h-20 bg-indigo-500/10 text-indigo-500 rounded-full flex items-center justify-center mx-auto ring-4 ring-indigo-500/5">
                            <Headphones className="w-10 h-10 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white tracking-tight">오디오 재생 준비</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">학습 시작을 위해 오디오 재생 버튼을 눌러주세요.</p>
                        </div>
                        <button
                            onClick={() => {
                                setIsAudioBlocked(false);
                                if (audioRef.current) {
                                    audioRef.current.play().catch(console.error);
                                }
                            }}
                            className="w-full h-16 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-black rounded-2xl shadow-xl shadow-indigo-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                            <PlayCircle className="w-6 h-6" /> 오디오 시작하기
                        </button>
                    </div>
                </div>
            )}
            {/* Non-obstructive Skimming Timer */}
            {skimmingState === 'active' && (
                <div className="fixed top-24 right-4 z-50 animate-in fade-in slide-in-from-right duration-500">
                    <div className="bg-indigo-600 text-white px-6 py-3 rounded-2xl font-black text-xl shadow-2xl flex flex-col items-center ring-4 ring-indigo-500/20">
                        <span className="text-[10px] uppercase font-bold text-indigo-100 opacity-80 tracking-widest mb-1">Skimming</span>
                        <span>{timeLeft}s</span>
                    </div>
                </div>
            )}

            <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <button
                        onClick={() => {
                            const urlParams = new URLSearchParams(window.location.search);
                            const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                            router.push(isAi ? '/weakness/dashboard' : '/homework/part4');
                        }}
                        className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                        ✕ Exit
                    </button>

                    <div className="flex-1 text-center">
                        <span className="text-[10px] font-black tracking-widest text-indigo-500 uppercase block mb-0.5">
                            {!reviewMode && (
                                <button
                                    onClick={() => {
                                        // Save Progress & Exit
                                        if (Object.keys(selectedAnswers).length > 0) {
                                            localStorage.setItem(`part4_progress_test_${testId}`, JSON.stringify({
                                                currentIndex,
                                                selectedAnswers
                                            }));
                                        }
                                        const urlParams = new URLSearchParams(window.location.search);
                                        const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                                        router.push(isAi ? '/weakness/dashboard' : '/homework/part4');
                                    }}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 mb-1 rounded bg-indigo-900/30 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-900/50 transition-colors cursor-pointer active:scale-95"
                                >
                                    <span className="text-[9px]">SAVE & EXIT</span>
                                </button>
                            )}
                            <span className="block">{reviewMode ? 'REVIEW MODE' : `PART 4 • ATTEMPT ${history.attempts}`}</span>
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

                <div className="bg-slate-900/50 border-b border-white/5 px-4 py-3">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-800 rounded-full p-1 ring-1 ring-white/10 relative">
                            {/* Overlay on Audio player during skimming */}
                            {skimmingState === 'active' && (
                                <div className="absolute inset-0 z-10 bg-slate-900/60 rounded-full flex items-center justify-center backdrop-blur-[1px]">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wait for Skimming...</span>
                                </div>
                            )}
                            {isAudioTransitioning && (
                                <div className="absolute inset-0 z-10 bg-indigo-900/60 rounded-full flex items-center justify-center backdrop-blur-[1px] animate-pulse">
                                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Next audio starting in 2s...</span>
                                </div>
                            )}
                            <audio
                                ref={audioRef}
                                src={audioSet?.audio}
                                className="w-full h-8 opacity-90 invert-[.9]"
                                key={`${audioIndex}-${audioSet?.audio}`}
                                onEnded={handleAudioEnded}
                            >
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cn("max-w-3xl mx-auto px-4 md:px-4 py-4 md:py-6 space-y-4 md:space-y-8 transition-all duration-500")}>
                <div className="text-center space-y-1 my-4 px-4">
                    <h1 className="text-xl font-black text-white tracking-tight italic uppercase">Short Talks {currentSet.questionRange}</h1>
                    <p className="text-slate-500 text-xs font-black uppercase tracking-widest opacity-60">Listen and choose the best answer</p>
                </div>

                {currentSet.image && (
                    <div className="flex justify-center mb-6 px-4">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative border border-slate-700 p-1 rounded-lg shadow-2xl bg-slate-900">
                                <img
                                    src={currentSet.image}
                                    alt="Graphic for questions"
                                    className="max-h-64 object-contain rounded opacity-95 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-2 md:space-y-10">
                    {activeSets[currentIndex].questions.map((q: Part4Question, index: number) => {
                        return (
                            <div
                                key={q.id}
                                ref={(el) => { questionRefs.current[q.id] = el; }}
                                style={{ animationDelay: `${index * 100}ms` }}
                                className={cn(
                                    "animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-backwards",
                                    "transition-all duration-300 p-6 bg-slate-900/40 border border-slate-800 rounded-3xl",
                                    (skimmingState === 'active' && isGuidedSkimming) ? "ring-1 ring-indigo-500/30" : ""
                                )}
                            >
                                <div className="flex gap-4">
                                    <div className={cn(
                                        "flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs border transition-colors",
                                        "bg-slate-800 text-slate-500 border-slate-700"
                                    )}>
                                        {q.id.includes('-q') ? q.id.split('-q')[1] : q.id.replace('q', '')}
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className={cn(
                                            "text-base font-bold leading-snug transition-colors text-slate-100"
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
                                            {normalizeOptions(q.options).map((opt: any) => {
                                                const isSelected = selectedAnswers[q.id] === opt.label;
                                                const isCorrect = revealedQuestions.has(q.id) && opt.label === q.correctAnswer;
                                                const isIncorrect = revealedQuestions.has(q.id) && isSelected && opt.label !== q.correctAnswer;

                                                return (
                                                    <button
                                                        key={opt.label}
                                                        onClick={() => handleSelect(q.id, opt.label)}
                                                        disabled={(!reviewMode && skimmingState === 'active') || revealedQuestions.has(q.id)}
                                                        className={cn(
                                                            "text-left px-5 py-4 rounded-2xl transition-all duration-200 border relative overflow-hidden group flex items-center gap-4",
                                                            isSelected && !revealedQuestions.has(q.id)
                                                                ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)]'
                                                                : revealedQuestions.has(q.id) && opt.label === q.correctAnswer
                                                                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                                    : revealedQuestions.has(q.id) && isSelected && opt.label !== q.correctAnswer
                                                                        ? 'border-rose-500 bg-rose-500/10 text-rose-400'
                                                                        : 'border-slate-800 bg-slate-900/40 text-slate-500 hover:bg-slate-800 hover:text-slate-200 hover:border-slate-700',
                                                            revealedQuestions.has(q.id) ? 'cursor-default' : '',
                                                            skimmingState === 'active' && "cursor-wait"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0 border transition-all duration-200",
                                                            isSelected && !revealedQuestions.has(q.id)
                                                                ? "bg-indigo-600 text-white border-indigo-500"
                                                                : revealedQuestions.has(q.id) && opt.label === q.correctAnswer
                                                                    ? "bg-emerald-500 text-white border-emerald-500"
                                                                    : revealedQuestions.has(q.id) && isSelected && opt.label !== q.correctAnswer
                                                                        ? "bg-rose-500 text-white border-rose-500"
                                                                        : "bg-slate-950 text-slate-600 border-slate-800 group-hover:border-slate-600 group-hover:text-slate-400"
                                                        )}>
                                                            {opt.label}
                                                        </div>
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
                                            <div className="mt-6 p-5 bg-slate-900/60 border border-slate-800 rounded-3xl text-sm italic text-slate-400 leading-relaxed font-serif text-left">
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

                {/* Navigation Buttons */}
                {reviewMode ? (
                    <div className="pt-10 pb-20 flex justify-center px-4">
                        {currentIndex < activeSets.length - 1 ? (
                            <button
                                onClick={() => {
                                    const allRevealed = currentSet.questions.every(q => revealedQuestions.has(q.id));
                                    if (allRevealed) {
                                        setCurrentIndex(prev => prev + 1);
                                        setAudioIndex(prev => prev + 1);  // Sync audio with UI
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                                disabled={!currentSet.questions.every(q => revealedQuestions.has(q.id))}
                                className={cn(
                                    "w-full max-w-md h-16 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-2",
                                    currentSet.questions.every(q => revealedQuestions.has(q.id))
                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20 active:scale-95 cursor-pointer"
                                        : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                                )}
                            >
                                <ChevronRight className="w-6 h-6" />
                                <span>다음 틀린 문제 세트로</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    const urlParams = new URLSearchParams(window.location.search);
                                    const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                                    router.push(isAi ? '/weakness/dashboard' : '/homework/part4');
                                }}
                                disabled={!currentSet.questions.every(q => revealedQuestions.has(q.id))}
                                className={cn(
                                    "w-full max-w-md h-16 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-2",
                                    currentSet.questions.every(q => revealedQuestions.has(q.id))
                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20 active:scale-95 cursor-pointer"
                                        : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                                )}
                            >
                                <Trophy className="w-6 h-6" />
                                <span>복습 완료</span>
                            </button>
                        )}
                    </div>
                ) : (
                    currentIndex === activeSets.length - 1 && (
                        <div className="pt-10 pb-20 flex justify-center px-4">
                            <button
                                onClick={finishTest}
                                disabled={!isSetComplete}
                                className={cn(
                                    "w-full max-w-md h-16 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-2",
                                    isSetComplete
                                        ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20 active:scale-95 cursor-pointer"
                                        : "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
                                )}
                            >
                                {isSetComplete ? (
                                    <>
                                        <Trophy className="w-6 h-6" />
                                        <span>Finish and Check Results</span>
                                    </>
                                ) : (
                                    "Complete all questions to finish"
                                )}
                            </button>
                        </div>
                    )
                )}
            </div>

        </div>
    );
}
