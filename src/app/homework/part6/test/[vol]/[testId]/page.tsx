'use client';

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { part6TestData, Part6Question } from '@/data/toeic/reading/part6/tests';
import { getToeicTagLabel } from '@/utils/toeic-tag-utils';
import { cn, normalizeOptions } from "@/lib/utils";
import { Timer, CheckCircle2, RotateCcw, Trophy, ChevronRight, BookOpen, Tag, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TouchDictionary } from '@/components/common/TouchDictionary';
import { getStandardizedPassageType } from '@/lib/toeic/rc-passage-types';
import { PerformanceSyncService } from '@/services/performanceSyncService';

function Part6TestRunnerContent() {
    const params = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Parse Parameters
    const vol = parseInt(params.vol as string);
    const testId = Number(params.testId);
    const mode = searchParams.get('mode') || 'real'; // 'real' or 'drill' or 'review'
    const fromPath = searchParams.get('from') || (mode === 'drill' ? '/student/analysis' : '/homework/part6');
    const isDrillMode = mode === 'drill';
    const retryMode = searchParams.get('mode') === 'retry';
    const resultId = searchParams.get('resultId');
    const [isLoadingMock, setIsLoadingMock] = useState(false);
    const [isLoadingRetry, setIsLoadingRetry] = useState(false);
    const [isPerfectScore, setIsPerfectScore] = useState(false);

    // Find Test Data
    const testSet = part6TestData.find(t => t.testId === testId && t.vol === vol);

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
    const [reSolveMode, setReSolveMode] = useState(false);
    const [originalAnswers, setOriginalAnswers] = useState<Record<string, string>>({});

    // Refs for scrolling
    const mainScrollRef = useRef<HTMLDivElement>(null);
    const questionContainerRef = useRef<HTMLDivElement>(null);
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        if (!testSet) return;

        // Load Progress (Real Mode only)
        if (!isDrillMode) {
            const savedProgress = localStorage.getItem(`part6_progress_v${vol}_t${testId}`);
            if (savedProgress) {
                try {
                    const parsed = JSON.parse(savedProgress);
                    if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                    if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                    if (parsed.currentPassageIndex !== undefined) setCurrentPassageIndex(parsed.currentPassageIndex);
                } catch (e) {
                    console.error("Failed to load progress", e);
                }
            }
        }

        const mockAttemptId = searchParams.get('mockAttemptId');
        if (mode === 'review' && mockAttemptId) {
            const fetchMockData = async () => {
                setIsLoadingMock(true);
                try {
                    const docRef = doc(db, 'MockTestAttempts', mockAttemptId);
                    const snap = await getDoc(docRef);
                    if (snap.exists()) {
                        const mData = snap.data();
                        const mAnswers = mData.answers || {};
                        setOriginalAnswers(mAnswers);
                        setReSolveMode(true);
                        setReviewMode(false);
                        setSelectedAnswers({});
                        setIsTimerRunning(true);
                        setElapsedTime(0);
                    }
                } catch (e) {
                    console.error("Mock review loading failed:", e);
                } finally {
                    setIsLoadingMock(false);
                }
            };
            fetchMockData();
        }

        // Case: Retry Mode from History (Non-mock)
        if (retryMode && resultId) {
            const fetchRetryData = async () => {
                setIsLoadingRetry(true);
                try {
                    const docRef = doc(db, "Manager_Results", resultId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const resData = docSnap.data();
                        if (resData.incorrectQuestions && resData.incorrectQuestions.length > 0) {
                            const ids = resData.incorrectQuestions.map((iq: any) => iq.id);
                            // Set originalAnswers to simulate re-solve mode but for these specific IDs
                            const dummyOriginal: Record<string, string> = {};
                            allQuestions.forEach(q => {
                                if (ids.includes(q.id)) dummyOriginal[q.id] = 'WRONG_PLACEHOLDER';
                                else dummyOriginal[q.id] = q.correctAnswer; // Effectively masks them
                            });
                            setOriginalAnswers(dummyOriginal);
                            setReSolveMode(true);
                        } else {
                            setIsPerfectScore(true);
                        }
                    }
                } catch (e) {
                    console.error("Retry loading failed:", e);
                } finally {
                    setIsLoadingRetry(false);
                }
            };
            fetchRetryData();
        }

        // Load History
        const savedHistory = localStorage.getItem(`part6_history_v${vol}_t${testId}`);
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) { console.error(e); }
        }
    }, [testId, vol, testSet, isDrillMode, mode, searchParams]);

    // Save Progress (Real Mode only)
    useEffect(() => {
        if (isDrillMode || reviewMode || showCompletion) return;
        if (Object.keys(selectedAnswers).length > 0) {
            localStorage.setItem(`part6_progress_v${vol}_t${testId}`, JSON.stringify({
                selectedAnswers,
                elapsedTime,
                currentPassageIndex
            }));
        }
    }, [selectedAnswers, elapsedTime, currentPassageIndex, testId, vol, reviewMode, showCompletion, isDrillMode]);

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

    if (!isMounted) return null;
    if (!testSet) return notFound();

    // Handlers
    const handleSelect = (questionId: string, optionLabel: string) => {
        if (reviewMode) return;
        if ((isDrillMode || reSolveMode) && selectedAnswers[questionId]) return;

        setSelectedAnswers(prev => {
            const newAnswers = { ...prev, [questionId]: optionLabel };

            const allAnswered = passage.questions.every(q => newAnswers[q.id]);
            if (allAnswered && currentPassageIndex < (testSet?.passages.length || 0) - 1) {
                setTimeout(() => {
                    setCurrentPassageIndex(idx => idx + 1);
                }, 600);
            } else {
                scrollToNext(questionId);
            }

            return newAnswers;
        });
        setActiveQuestionId(questionId);
    };

    const scrollToNext = (currentId: string) => {
        const questionsInPassage = passage.questions;
        const currentIndexInPassage = questionsInPassage.findIndex(q => q.id === currentId);

        if (currentIndexInPassage !== -1 && currentIndexInPassage < questionsInPassage.length - 1) {
            const nextId = questionsInPassage[currentIndexInPassage + 1].id;
            setTimeout(() => {
                const nextEl = questionRefs.current[nextId];
                if (nextEl) {
                    if (window.innerWidth < 1024) {
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
        const questionsToSolve = reSolveMode
            ? allQuestions.filter(q => originalAnswers[q.id] !== q.correctAnswer)
            : allQuestions;
        return questionsToSolve.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    };

    const finishTest = async () => {
        setIsTimerRunning(false);
        const score = getScore();
        setShowCompletion(true);

        if (reSolveMode) {
            const newHistory = { ...history, lastScore: score };
            setHistory(newHistory);
            localStorage.setItem(`part6_history_v${vol}_t${testId}`, JSON.stringify(newHistory));
            return;
        }

        // Save to Firebase
        if (retryMode) return;
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                const incorrects: { id: string, classification: string, contextType?: string }[] = [];
                testSet?.passages.forEach(passage => {
                    passage.questions.forEach(q => {
                        if (selectedAnswers[q.id] !== q.correctAnswer) {
                            incorrects.push({
                                id: q.id,
                                classification: q.classification || 'Unknown',
                                contextType: passage.contextType || passage.docType || getStandardizedPassageType(passage.type) || 'Unknown'
                            });
                        }
                    });
                });

                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.username || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    className: user.userClass || user.className || "Unknown",
                    unit: `RC_Part6_Vol${vol}_Test${testId}_${mode}`,
                    score: score,
                    total: allQuestions.length,
                    wrongCount: allQuestions.length - score,
                    incorrectQuestions: incorrects,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: mode,
                    type: 'part6_test',
                    detail: `Vol ${vol} Test ${testId}`,
                    vol: vol,
                    testId: testId
                });

                await PerformanceSyncService.syncUserSummary(user.userId || user.uid);
            } catch (e) { console.error(e); }
        }

        const newHistory = { ...history, lastScore: score };
        setHistory(newHistory);
        localStorage.setItem(`part6_history_v${vol}_t${testId}`, JSON.stringify(newHistory));
        if (!isDrillMode) localStorage.removeItem(`part6_progress_v${vol}_t${testId}`);
    };

    const handleRetake = () => {
        const nextAttempt = history.attempts + 1;
        setHistory({ attempts: nextAttempt, lastScore: undefined });
        localStorage.setItem(`part6_history_v${vol}_t${testId}`, JSON.stringify({ attempts: nextAttempt }));

        setShowCompletion(false);
        setReviewMode(false);
        setSelectedAnswers({});
        setElapsedTime(0);
        setIsTimerRunning(true);
        setCurrentPassageIndex(0);
        window.scrollTo(0, 0);
    };

    const renderContentWithMarkers = (content: string, questions: Part6Question[]) => {
        const parts = content.split(/(\[\d+\])/g);

        return parts.map((part, idx) => {
            const match = part.match(/\[(\d+)\]/);
            if (match) {
                const qId = match[1];
                const q = questions.find(q => q.id === qId);
                const isSelected = activeQuestionId === qId;
                const answer = selectedAnswers[qId];
                const isRevealed = reviewMode || (isDrillMode && !!answer);
                const isCorrect = answer === q?.correctAnswer;
                const markerText = isRevealed && answer ? q?.options.find(o => o.label === answer)?.text : `[${q?.questionNo || qId}]`;

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
        if (reviewMode) {
            return (
                <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">학습 완료</h2>
                    <p className="text-slate-400 font-medium mb-8">오답 문제 복습을 모두 완료했습니다!</p>
                    <div className="space-y-3 w-full max-w-xs">
                        <button onClick={() => router.push(fromPath)} className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20">목록으로 돌아가기</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className={cn(
                    "w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 ring-1 shadow-2xl",
                    isDrillMode ? "bg-indigo-500/10 text-indigo-500 ring-indigo-500/50" : "bg-amber-500/10 text-amber-500 ring-amber-500/50"
                )}>
                    {isDrillMode ? <BookOpen className="w-12 h-12" /> : <Trophy className="w-12 h-12" />}
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    {reSolveMode ? "오답 다시 풀기 완료" : (isDrillMode ? "훈련 완료" : "학습 완료")}
                </h2>
                <p className={cn("font-bold tracking-widest text-xs uppercase mb-8", isDrillMode ? "text-indigo-500" : (reSolveMode ? "text-rose-500" : "text-amber-500"))}>
                    Part 6 • Vol {vol} Test {testId} • {reSolveMode ? "Mock Review" : (isDrillMode ? "Drill Mode" : `시도 횟수: ${history.attempts}회`)}
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
                    {history.lastScore === allQuestions.length ? (
                        <div className="w-full h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl font-bold flex items-center justify-center gap-2 text-emerald-400">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>완벽합니다! 🎉</span>
                        </div>
                    ) : (
                        <button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentPassageIndex(0); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors">
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

    const filteredPassages = reSolveMode
        ? testSet.passages.filter((p: any) => p.questions.some((q: any) => originalAnswers[q.id] !== q.correctAnswer))
        : (reviewMode
            ? testSet.passages.filter(p => p.questions.some(q => selectedAnswers[q.id] !== q.correctAnswer))
            : testSet.passages);

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

    if (isLoadingMock || isLoadingRetry) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <Timer className="w-10 h-10 text-indigo-500 animate-spin mx-auto opacity-20" />
                    <p className="font-black text-slate-500 uppercase tracking-widest italic text-sm">
                        {isLoadingRetry ? "오답 데이터를 매칭하는 중..." : "모의고사 오답 데이터를 불러오는 중..."}
                    </p>
                </div>
            </div>
        )
    }

    if (isPerfectScore) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">Perfect Score</h2>
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-8">틀린 문제가 없습니다! 완벽합니다.</p>
                <p className="text-slate-400 font-bold text-sm mb-6 bg-slate-900 border border-slate-800 py-3 px-6 rounded-2xl w-full max-w-sm">
                    맞힌 문제라도 지문과 함께 가볍게<br />1회독 복습하시겠습니까?
                </p>
                <div className="space-y-4 w-full max-w-xs">
                    <button onClick={() => { setIsPerfectScore(false); setReviewMode(true); }} className="w-full h-14 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-500 hover:scale-[1.02] transition-all">예 (전체 문제 복습)</button>
                    <button onClick={() => router.push(fromPath)} className="w-full h-14 bg-slate-800 text-slate-300 rounded-2xl font-bold hover:bg-slate-700 hover:text-white transition-all">아니오 (목록으로 복귀)</button>
                </div>
            </div>
        );
    }

    if (!passage) {
        if (currentPassageIndex > 0) {
            setCurrentPassageIndex(0);
        }
        return null;
    }

    return (
        <div className="fixed inset-0 z-[100] h-screen bg-slate-950 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="h-10 lg:h-16 bg-slate-950/95 border-b border-white/5 flex items-center justify-between px-2 lg:px-6 shrink-0 z-20">
                <div className="flex items-center gap-1 lg:gap-4">
                    <button
                        onClick={() => setShowExitConfirm(true)}
                        className="text-slate-400 hover:text-white transition-colors p-1"
                    >
                        <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h2 className="text-white font-bold text-[13px] lg:text-lg">Part 6</h2>
                    <div className="text-slate-400 text-[11px] lg:text-sm hidden lg:block">Vol {vol} Test {testId}</div>
                </div>
                <div className="flex items-center gap-1 lg:gap-4">
                    {!reviewMode && !isDrillMode && (
                        <Button
                            variant="ghost"
                            className="h-8 lg:h-8 text-[10px] lg:text-xs px-2 lg:px-3 text-indigo-400 hover:text-white hover:bg-indigo-900/50 border border-indigo-500/30 font-bold"
                            onClick={() => {
                                localStorage.setItem(`part6_progress_v${vol}_t${testId}`, JSON.stringify({
                                    selectedAnswers,
                                    elapsedTime,
                                    currentPassageIndex
                                }));
                                router.push(fromPath);
                            }}
                        >
                            <span className="hidden lg:inline mr-1">💾</span> 저장하고 나가기
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
                            "max-h-[60%] lg:h-fit overflow-y-auto lg:overflow-visible p-0 lg:p-0 border-b border-slate-700 lg:border-none",
                            "lg:col-span-7 lg:sticky lg:top-0 space-y-0 lg:space-y-4 flex-shrink-0"
                        )}>
                            <div className="bg-white text-slate-900 rounded-none lg:rounded-xl p-2 lg:p-8 shadow-none lg:shadow-xl font-serif text-[15px] lg:text-lg leading-tight lg:leading-loose mx-auto w-full select-none min-h-full lg:min-h-[500px]">
                                {passage.guidance && (
                                    <div className="bg-slate-50 border-y lg:border-none border-slate-200 py-1 px-4 mb-4 text-[11px] lg:text-sm text-slate-500 font-sans italic text-center">
                                        {passage.guidance}
                                    </div>
                                )}
                                {passage.title && <h3 className="font-sans font-bold text-center border-b pb-1 lg:pb-4 mb-1 lg:mb-4 text-slate-800 text-[13px] lg:text-base">{passage.title}</h3>}
                                <div className="whitespace-pre-wrap space-y-2 lg:space-y-3 text-left">
                                    {renderContentWithMarkers(passage.content, passage.questions)}
                                </div>
                            </div>
                            {passage.translation && reviewMode && (
                                <div className="bg-slate-900/50 p-1 lg:p-4 rounded lg:rounded-xl text-slate-400 text-[10px] lg:text-sm mt-4">
                                    <p className="font-bold mb-0 lg:mb-1 text-slate-300 text-[10px] lg:text-sm">전문 해석:</p>
                                    <div className="whitespace-pre-wrap">
                                        {passage.vol === 3 && testId === 1 ? <TouchDictionary text={passage.translation} /> : passage.translation}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col flex-1 lg:h-auto lg:col-span-3 overflow-hidden lg:overflow-visible">
                            <div
                                ref={questionContainerRef}
                                className={cn(
                                    "flex-1 overflow-y-auto lg:overflow-visible bg-slate-900/50 lg:bg-transparent p-0 lg:p-0",
                                    "space-y-0.5 lg:space-y-3"
                                )}
                            >
                                <div className="space-y-0.5 lg:space-y-3 p-1 lg:p-0 pb-0">
                                    {passage.questions
                                        .filter(q => {
                                            if (reSolveMode) return originalAnswers[q.id] !== q.correctAnswer;
                                            if (reviewMode) return selectedAnswers[q.id] !== q.correctAnswer;
                                            return true;
                                        })
                                        .map((q) => {
                                            const isRevealed = reviewMode || ((isDrillMode || reSolveMode) && !!selectedAnswers[q.id]);
                                            const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                                            const isActive = activeQuestionId === q.id;

                                            return (
                                                <div
                                                    key={q.id}
                                                    id={`q-card-${q.id}`}
                                                    ref={(el) => { questionRefs.current[q.id] = el; }}
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
                                                                {q.questionNo || q.id}.
                                                            </span>
                                                        </div>
                                                        {isRevealed && !isCorrect && (
                                                            <span className="text-[10px] font-black text-rose-500 px-1.5 py-0.5 bg-rose-500/10 rounded uppercase">Incorrect</span>
                                                        )}
                                                    </div>

                                                    <div className="grid gap-0.5 lg:gap-1.5">
                                                        {normalizeOptions(q.options).map((opt) => (
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
                                                                        <span>{getToeicTagLabel(q.classification)}</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="text-slate-100 text-[10px] lg:text-sm leading-snug font-medium bg-slate-800/30 p-2 rounded border border-white/5">
                                                                <span className="text-amber-500 font-black mr-2 uppercase tracking-tighter text-[9px] lg:text-[11px]">Explanation:</span>
                                                                {vol === 3 && testId === 1 ? (
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
