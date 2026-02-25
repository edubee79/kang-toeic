"use client";

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { part5TestData } from '@/data/toeic/reading/part5/tests';
import { getToeicTagLabel } from '@/utils/toeic-tag-utils';
import { cn, normalizeOptions } from "@/lib/utils";
import { Timer, CheckCircle2, RotateCcw, Trophy, ChevronRight, BookOpen, Tag, Sparkles, Loader2, Send, AlertTriangle } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PerformanceSyncService } from '@/services/performanceSyncService';
import { Button } from "@/components/ui/button";

function Part5TestRunnerContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Parse Parameters
    const vol = parseInt(params.vol as string);
    const testId = Number(params.testId);
    const mode = searchParams.get('mode') || 'real'; // 'real' or 'drill'
    const fromPath = searchParams.get('from') || (mode === 'drill' ? '/student/analysis' : '/homework/part5-real');
    const isDrillMode = mode === 'drill';

    // Find Test Data
    const testSet = part5TestData.find(t => t.testId === testId && t.vol === vol);

    // State
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({}); // { "101": "A" }
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    // Refs for scrolling
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // AI Tutor State
    const [userQueries, setUserQueries] = useState<Record<string, string>>({});
    const [aiResponses, setAiResponses] = useState<Record<string, string>>({});
    const [loadingAi, setLoadingAi] = useState<Record<string, boolean>>({});

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });
    const [isLoadingMock, setIsLoadingMock] = useState(false);

    // Handle Redo logic from Mock Test
    const [reSolveMode, setReSolveMode] = useState(false);
    const [originalAnswers, setOriginalAnswers] = useState<Record<string, string>>({});

    useEffect(() => {
        const fetchMockAnswers = async () => {
            const mockAttemptId = searchParams.get('mockAttemptId');
            const urlMode = searchParams.get('mode');

            if (urlMode === 'review' && mockAttemptId) {
                setIsLoadingMock(true);
                try {
                    const { doc, getDoc } = await import('firebase/firestore');
                    const docRef = doc(db, 'MockTestAttempts', mockAttemptId);
                    const snap = await getDoc(docRef);

                    if (snap.exists()) {
                        const data = snap.data();
                        if (data.answers) {
                            setOriginalAnswers(data.answers);
                        }
                        setReSolveMode(true);
                        setReviewMode(false);
                        setShowCompletion(false);
                        setIsTimerRunning(true);
                        setElapsedTime(0);
                        setSelectedAnswers({});
                    }
                } catch (e) {
                    console.error("Failed to fetch mock answers for review:", e);
                } finally {
                    setIsLoadingMock(false);
                }
            }
        };

        fetchMockAnswers();
    }, [searchParams]);

    useEffect(() => {
        if (!testSet) return;

        // Load Progress (Real Mode only)
        if (!isDrillMode) {
            const savedProgress = localStorage.getItem(`part5_progress_v${vol}_t${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.selectedAnswers) {
                        setSelectedAnswers(parsed.selectedAnswers);

                        // Scroll logic omitted for brevity/safety in quick migration, can assume user scrolls manually or restore later if critical
                    }
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        // Load History
        const savedHistory = localStorage.getItem(`part5_history_v${vol}_t${testId}`);
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) { console.error(e); }
        }
    }, [testId, vol, testSet, isDrillMode]);

    // Save Progress (Real Mode only)
    useEffect(() => {
        if (isDrillMode || reviewMode || showCompletion) return;
        if (Object.keys(selectedAnswers).length > 0) {
            localStorage.setItem(`part5_progress_v${vol}_t${testId}`, JSON.stringify({
                selectedAnswers,
                elapsedTime
            }));
        }
    }, [selectedAnswers, elapsedTime, testId, vol, reviewMode, showCompletion, isDrillMode]);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && !showCompletion && !reviewMode && !isLoadingMock) {
            interval = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, showCompletion, reviewMode, isLoadingMock]);


    if (isLoadingMock) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <Loader2 className="w-10 h-10 text-indigo-500 animate-spin mx-auto" />
                    <p className="font-black text-slate-500 uppercase tracking-widest italic text-sm">모의고사 오답 데이터를 불러오는 중...</p>
                </div>
            </div>
        )
    }

    if (!testSet) return notFound();

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;
        if ((isDrillMode || reSolveMode) && selectedAnswers[questionId]) return;

        setSelectedAnswers(prev => ({ ...prev, [questionId]: optionLabel }));
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
                    const yOffset = -100;
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
        const targetQuestions = reSolveMode
            ? testSet.questions.filter(q => originalAnswers[q.id] !== q.correctAnswer)
            : testSet.questions;

        targetQuestions.forEach(q => {
            if (selectedAnswers[q.id] === q.correctAnswer) score++;
        });
        return score;
    };

    const finishTest = async () => {
        setIsTimerRunning(false);
        const score = calculateScore();
        setShowCompletion(true);

        if (isDrillMode || reSolveMode) {
            const newHistory = { ...history, lastScore: score };
            setHistory(newHistory);
            localStorage.setItem(`part5_history_v${vol}_t${testId}`, JSON.stringify(newHistory));
            return;
        }

        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
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
                    unit: `RC_Part5_Vol${vol}_Test${testId}_${mode}`,
                    score: score,
                    total: testSet.questions.length,
                    wrongCount: testSet.questions.length - score,
                    incorrectQuestions: incorrects,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: mode,
                    type: 'part5_test',
                    detail: `Vol ${vol} Test ${testId}`,
                    vol: vol,
                    testId: testId
                });

                await PerformanceSyncService.syncUserSummary(user.userId || user.uid);
            } catch (e) { console.error(e); }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part5_history_v${vol}_t${testId}`, JSON.stringify(newHistory));
        if (!isDrillMode) localStorage.removeItem(`part5_progress_v${vol}_t${testId}`);
    };

    const askAiTutor = async (q: any) => {
        if (loadingAi[q.id]) return;

        setLoadingAi(prev => ({ ...prev, [q.id]: true }));
        try {
            const response = await fetch('/api/ai-tutor/part5', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    question: q.text,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    selectedAnswer: selectedAnswers[q.id],
                    explanation: q.explanation,
                    userQuery: userQueries[q.id]
                })
            });

            const data = await response.json();
            if (data.text) {
                setAiResponses(prev => ({ ...prev, [q.id]: data.text }));
            } else {
                setAiResponses(prev => ({ ...prev, [q.id]: `⚠️ AI 선생님 답변 실패: ${data.message}` }));
            }
        } catch (e) {
            console.error(e);
            setAiResponses(prev => ({ ...prev, [q.id]: "죄송합니다. 오류가 발생했습니다." }));
        } finally {
            setLoadingAi(prev => ({ ...prev, [q.id]: false }));
        }
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        setHistory({ attempts: nextAttempt, lastScore: undefined });
        localStorage.setItem(`part5_history_v${vol}_t${testId}`, JSON.stringify({ attempts: nextAttempt }));

        setShowCompletion(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setIsTimerRunning(true);
        window.scrollTo(0, 0);
    };

    if (showCompletion) {
        const redoCount = reSolveMode ? testSet.questions.filter(q => originalAnswers[q.id] !== q.correctAnswer).length : testSet.questions.length;
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className={cn(
                    "w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 ring-1 shadow-2xl",
                    isDrillMode ? "bg-indigo-500/10 text-indigo-500 ring-indigo-500/50" : (reSolveMode ? "bg-rose-500/10 text-rose-500 ring-rose-500/50" : "bg-amber-500/10 text-amber-500 ring-amber-500/50")
                )}>
                    {isDrillMode ? <BookOpen className="w-12 h-12" /> : (reSolveMode ? <RotateCcw className="w-12 h-12" /> : <Trophy className="w-12 h-12" />)}
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    {reSolveMode ? "오답 다시 풀기 완료" : (isDrillMode ? "훈련 완료" : "학습 완료")}
                </h2>
                <p className={cn("font-bold tracking-widest text-xs uppercase mb-8", isDrillMode ? "text-indigo-500" : (reSolveMode ? "text-rose-500" : "text-amber-500"))}>
                    Part 5 • Vol {vol} Test {testId} • {reSolveMode ? "Mock Review" : (isDrillMode ? "Drill Mode" : `시도 횟수: ${history.attempts}회`)}
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{history.lastScore}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {redoCount}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    {history.lastScore === testSet.questions.length ? (
                        <div className="w-full h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl font-bold flex items-center justify-center gap-2 text-emerald-400">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>완벽합니다! 🎉</span>
                        </div>
                    ) : (
                        <button onClick={() => { setShowCompletion(false); setReviewMode(true); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
                            틀린문제 확인
                        </button>
                    )}
                    <button onClick={handleRetake} className={cn("w-full h-14 text-white rounded-2xl font-bold active:scale-95 transition-all", isDrillMode ? "bg-indigo-600 hover:bg-indigo-500" : "bg-amber-600 hover:bg-amber-500")}>
                        다시 풀기
                    </button>
                    <button
                        onClick={() => router.push(fromPath)}
                        className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold"
                    >
                        목록으로 돌아가기
                    </button>
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
                            onClick={() => setShowExitConfirm(true)}
                            className="text-slate-400 hover:text-white"
                        >
                            <ChevronRight className="w-6 h-6 rotate-180" />
                        </Button>
                        <span className={cn("text-[10px] font-black tracking-widest uppercase block mb-0.5", isDrillMode ? "text-indigo-500" : "text-amber-500")}>
                            {reviewMode ? '오답 확인' : (isDrillMode ? '훈련 모드' : `VOL ${vol} TEST ${testId}`)}
                        </span>
                    </div>

                    <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-sm font-bold text-white">
                            {Object.keys(selectedAnswers).length} / {testSet.questions.length}
                        </span>
                    </div>

                    <div className={cn("flex items-center gap-2", (reviewMode || isDrillMode) && "opacity-50")}>
                        {!reviewMode && !isDrillMode && (
                            <button
                                onClick={() => {
                                    localStorage.setItem(`part5_progress_v${vol}_t${testId}`, JSON.stringify({
                                        selectedAnswers,
                                        elapsedTime
                                    }));
                                    router.push(fromPath);
                                }}
                                className="mr-2 px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/50 text-xs font-bold hover:bg-indigo-600 hover:text-white transition-all"
                            >
                                💾 저장하고 나가기
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
                {testSet.questions
                    .filter(q => {
                        if (reSolveMode) return originalAnswers[q.id] !== q.correctAnswer;
                        if (reviewMode) return selectedAnswers[q.id] !== q.correctAnswer;
                        return true;
                    })
                    .map((q, idx) => {
                        const isSelected = !!selectedAnswers[q.id];
                        const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                        const isRevealed = reviewMode || ((isDrillMode || reSolveMode) && isSelected);

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
                                        {q.questionNo || q.id}
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
                                                                ? normalizeOptions(q.options).find(o => o.label === selectedAnswers[q.id])?.text
                                                                : ""
                                                            }
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                                            {normalizeOptions(q.options).map((opt) => (
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
                                                            {getToeicTagLabel(q.classification)}
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

                                                {reviewMode && (
                                                    <div className="mt-4 pt-4 border-t border-white/5">
                                                        {!aiResponses[q.id] ? (
                                                            <div className="flex items-center gap-2">
                                                                <div className="relative flex-1">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="AI 선생님에게 질문하기 (예: (A)는 왜 안되나요?)"
                                                                        value={userQueries[q.id] || ''}
                                                                        onChange={(e) => setUserQueries(prev => ({ ...prev, [q.id]: e.target.value }))}
                                                                        onKeyDown={(e) => e.key === 'Enter' && askAiTutor(q)}
                                                                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50"
                                                                    />
                                                                </div>
                                                                <button
                                                                    onClick={() => askAiTutor(q)}
                                                                    disabled={loadingAi[q.id]}
                                                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all disabled:opacity-50"
                                                                >
                                                                    {loadingAi[q.id] ? (
                                                                        <Loader2 className="w-4 h-4 animate-spin" />
                                                                    ) : (
                                                                        <Send className="w-4 h-4" />
                                                                    )}
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div className="bg-slate-950/50 border border-indigo-500/20 rounded-2xl p-4 space-y-3 animate-in fade-in zoom-in-95">
                                                                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                                                    <div className="flex items-center gap-2">
                                                                        <Sparkles className="w-4 h-4 text-indigo-400" />
                                                                        <span className="text-xs font-black text-indigo-400 tracking-tighter uppercase">AI Tutor Explanation</span>
                                                                    </div>
                                                                    <button
                                                                        onClick={() => {
                                                                            setAiResponses(prev => {
                                                                                const next = { ...prev };
                                                                                delete next[q.id];
                                                                                return next;
                                                                            });
                                                                            setUserQueries(prev => ({ ...prev, [q.id]: '' }));
                                                                        }}
                                                                        className="text-[10px] text-slate-600 hover:text-slate-400 font-bold uppercase transition-colors"
                                                                    >
                                                                        다시 질문하기
                                                                    </button>
                                                                </div>
                                                                <div className="text-sm text-slate-300 leading-relaxed prose prose-sm prose-invert max-w-none prose-p:my-1">
                                                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                                        {aiResponses[q.id]}
                                                                    </ReactMarkdown>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            {
                !reviewMode && (
                    <div className="fixed bottom-6 left-0 right-0 px-6 flex justify-center pointer-events-none">
                        <button
                            onClick={finishTest}
                            disabled={!isDrillMode && Object.keys(selectedAnswers).length < testSet.questions.length}
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
            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="max-w-xs w-full bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6">
                        <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto ring-4 ring-rose-500/5">
                            <AlertTriangle className="w-10 h-10" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white tracking-tight">학습을 중단할까요?</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                '저장하고 나가기'를 누르지 않으면<br />
                                현재까지의 진행 상황이 사라집니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Button
                                onClick={() => router.push(fromPath)}
                                variant="ghost"
                                className="w-full h-12 text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 font-bold"
                            >
                                저장 없이 그냥 나가기
                            </Button>
                            <Button
                                onClick={() => setShowExitConfirm(false)}
                                className="w-full h-14 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all"
                            >
                                계속 학습하기
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
}

export default function Part5TestRunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part5TestRunnerContent />
        </React.Suspense>
    );
}
