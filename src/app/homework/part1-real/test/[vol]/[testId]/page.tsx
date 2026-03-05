'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Play, Pause, ChevronRight, CheckCircle2, AlertCircle, RotateCcw, Timer, Trophy, BookOpen, AlertTriangle } from "lucide-react";
import { part1RealTests, Part1Question } from '@/data/toeic/listening/part1/tests';
import { cn } from "@/lib/utils";
import { PerformanceSyncService } from '@/services/performanceSyncService';

export default function Part1TestRunner() {
    const params = useParams();
    const router = useRouter();
    const vol = parseInt(params.vol as string);
    const testId = parseInt(params.testId as string);

    const [testSet, setTestSet] = useState<any>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [reviewedAnswers, setReviewedAnswers] = useState<Record<string, string>>({});
    const [showTranslation, setShowTranslation] = useState(false);
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/homework/part1-real';

    // Timer & Mode
    const [elapsedTime, setElapsedTime] = useState(0);
    const [reviewMode, setReviewMode] = useState(false);
    const [showOnlyWrong, setShowOnlyWrong] = useState(false);
    const [displayIndex, setDisplayIndex] = useState(0);

    const retryMode = searchParams.get('mode') === 'retry';
    const resultId = searchParams.get('resultId');
    const [incorrectIds, setIncorrectIds] = useState<string[]>([]);
    const [isLoadingRetry, setIsLoadingRetry] = useState(false);
    const [isPerfectScore, setIsPerfectScore] = useState(false);

    // Filtered questions for review mode or retry mode
    const displayQuestions = useMemo(() => {
        if (!testSet?.questions) return [];

        // Priority 1: Retry mode based on external result ID
        if (retryMode && incorrectIds.length > 0) {
            return testSet.questions.filter((q: any) => incorrectIds.includes(q.id));
        }

        // Priority 2: Manual review mode (Show Only Wrong)
        if (reviewMode && showOnlyWrong) {
            return testSet.questions.filter((q: any) => selectedAnswers[q.id] !== q.correctAnswer);
        }

        return testSet.questions;
    }, [testSet, retryMode, incorrectIds, reviewMode, showOnlyWrong, selectedAnswers]);

    const currentQ = displayQuestions?.[displayIndex];

    const handleNext = () => {
        if (displayIndex < (displayQuestions?.length || 0) - 1) {
            setDisplayIndex(prev => prev + 1);
        } else if (reviewMode) {
            // End of review mode: go back to result screen
            setIsFinished(true);
            setReviewMode(false);
            setShowOnlyWrong(false);
        } else {
            // End of normal test: finish and save
            finishTest();
        }
    };

    const handlePrev = () => {
        if (displayIndex > 0) {
            setDisplayIndex(prev => prev - 1);
        }
    };

    // Audio
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Find test set by BOTH vol and testId
        const found = part1RealTests.find(t => t.vol === vol && t.testId === testId);
        if (found) {
            setTestSet(found.questions);
        } else {
            alert("Test not found");
            router.push('/homework/part1-real');
        }
    }, [vol, testId, router]);

    // Fetch incorrect IDs if in retry mode
    useEffect(() => {
        const fetchRetryData = async () => {
            if (retryMode && resultId) {
                setIsLoadingRetry(true);
                try {
                    const docRef = doc(db, "Manager_Results", resultId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        if (data.incorrectQuestions && data.incorrectQuestions.length > 0) {
                            const ids = data.incorrectQuestions.map((q: any) => q.id);
                            setIncorrectIds(ids);
                            // Set review mode automatically when retrying from history
                            setReviewMode(true);
                            setShowOnlyWrong(true);
                        } else {
                            // If they have no incorrect questions, they got a perfect score.
                            setIsPerfectScore(true);
                        }
                    }
                } catch (e) {
                    console.error("Retry data fetch failed", e);
                } finally {
                    setIsLoadingRetry(false);
                }
            }
        };
        fetchRetryData();
    }, [retryMode, resultId]);

    // Load Progress
    useEffect(() => {
        const savedProgress = localStorage.getItem(`part1_progress_v${vol}_t${testId}`);
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                if (parsed.selectedAnswers) setSelectedAnswers(parsed.selectedAnswers);
                if (parsed.currentQIndex !== undefined) setDisplayIndex(parsed.currentQIndex);
                if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
            } catch (e) {
                console.error("Failed to load progress", e);
            }
        }
        setTimeout(() => setIsReady(true), 0);
    }, [vol, testId]);

    // Timer
    useEffect(() => {
        if (!isReady) return;
        let interval: NodeJS.Timeout;
        if (!isFinished && !reviewMode && testSet) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isFinished, reviewMode, testSet, isReady]);

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
        setDisplayIndex(0);
        setScore(0);
    };

    const playAudio = () => {
        if (!currentQ?.audio) return;
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        const audio = new Audio(currentQ.audio);
        audioRef.current = audio;
        audio.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
        audio.onended = () => setIsPlaying(false);
    };

    useEffect(() => {
        if (!isReady || reviewMode || isFinished) return;
        const delay = displayIndex === 0 ? 3000 : 1000;
        const timer = setTimeout(() => playAudio(), delay);
        return () => {
            clearTimeout(timer);
            if (audioRef.current) audioRef.current.pause();
        };
    }, [displayIndex, testSet, reviewMode, isFinished, isReady]);

    const handlePlay = () => {
        if (!audioRef.current) { playAudio(); return; }
        if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
        else { audioRef.current.play(); setIsPlaying(true); }
    };

    const handleSelect = (option: string) => {
        if (isFinished || !currentQ) return;

        if (reviewMode) {
            const wasCorrect = selectedAnswers[currentQ.id] === currentQ.correctAnswer;
            if (wasCorrect || !!reviewedAnswers[currentQ.id]) return;
            setReviewedAnswers(prev => ({ ...prev, [currentQ.id]: option }));
            return;
        }

        const alreadySelected = !!selectedAnswers[currentQ.id];
        const newAnswers = { ...selectedAnswers, [currentQ.id]: option };
        setSelectedAnswers(newAnswers);

        // Auto-next after selecting an answer for the first time
        if (!alreadySelected) {
            setTimeout(() => {
                if (displayIndex < (displayQuestions?.length || 0) - 1) {
                    setDisplayIndex(prev => prev + 1);
                } else if (!reviewMode) {
                    finishTest(newAnswers);
                }
            }, 500); // 0.5s delay for visual feedback
        }
    };

    const finishTest = async (finalAnswers?: Record<string, string>) => {
        const answersToUse = finalAnswers || selectedAnswers;
        let correct = 0;
        testSet.questions.forEach((q: any) => {
            if (answersToUse[q.id] === q.correctAnswer) correct++;
        });

        const finalPercentage = Math.round((correct / testSet.questions.length) * 100);
        setScore(finalPercentage);
        setIsFinished(true);

        const userStr = localStorage.getItem('toeic_user');
        if (userStr && !retryMode) { // Only save new result if NOT in retry mode
            const user = JSON.parse(userStr);
            try {
                const incorrects: any[] = [];
                testSet.questions.forEach((q: any) => {
                    if (answersToUse[q.id] !== q.correctAnswer) {
                        incorrects.push({
                            id: q.id,
                            classification: q.classification || q.questionType || 'Unknown'
                        });
                    }
                });

                await addDoc(collection(db, "Manager_Results"), {
                    studentId: user.userId || user.uid || "guest",
                    studentName: user.userName || user.name || "Guest",
                    type: 'part1_test',
                    unit: `Part1 Real Test Vol${vol} ${testId}`,
                    detail: `Vol ${vol} Test ${testId}`,
                    score: correct,
                    total: testSet.questions.length,
                    wrongCount: testSet.questions.length - correct,
                    incorrectQuestions: incorrects,
                    vol: vol,
                    testId: testId,
                    timestamp: serverTimestamp()
                });
                await PerformanceSyncService.syncUserSummary(user.userId || user.uid || "guest");
            } catch (e) {
                console.error("Save failed", e);
            }
        }
    };

    if (!testSet || isLoadingRetry) return <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-slate-500 font-black italic uppercase tracking-widest text-xs">오답 데이터를 매칭하는 중...</p>
        </div>
    </div>;

    if (isPerfectScore) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">Perfect Score</h2>
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-8">틀린 문제가 없습니다! 완벽합니다.</p>

                <p className="text-slate-400 font-bold text-sm mb-6 bg-slate-900 border border-slate-800 py-3 px-6 rounded-2xl w-full max-w-sm">
                    맞힌 문제라도 지문과 음원을 다시 들으며<br />가볍게 1회독 복습하시겠습니까?
                </p>

                <div className="space-y-4 w-full max-w-xs">
                    <button
                        onClick={() => {
                            setIsPerfectScore(false);
                            setReviewMode(true);
                            setShowOnlyWrong(false);
                        }}
                        className="w-full h-14 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-500 hover:scale-[1.02] transition-all"
                    >
                        예 (전체 문제 복습)
                    </button>
                    <button
                        onClick={() => router.push(fromPath)}
                        className="w-full h-14 bg-slate-800 text-slate-300 rounded-2xl font-bold hover:bg-slate-700 hover:text-white transition-all"
                    >
                        아니고 (목록으로 복귀)
                    </button>
                </div>
            </div>
        );
    }

    if (isFinished) {
        if (reviewMode) {
            return (
                <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2 uppercase">학습 완료</h2>
                    <p className="text-slate-400 font-medium mb-8">오답 문제 복습을 모두 완료했습니다!</p>
                    <div className="space-y-3 w-full max-w-xs">
                        <button onClick={() => router.push(fromPath)} className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20">목록으로 돌아가기</button>
                    </div>
                </div>
            );
        }

        const correctCount = testSet.questions.filter((q: any) => selectedAnswers[q.id] === q.correctAnswer).length;
        const totalCount = testSet.questions.length;

        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <Trophy className="w-16 h-16 text-amber-500 mb-6" />
                <h2 className="text-3xl font-black text-white mb-2 uppercase">학습 완료</h2>
                <p className="text-amber-500 font-bold mb-8">Vol {vol} Test {testId} • Real Mode</p>
                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2">
                        <span className="text-6xl font-black text-white">{correctCount}</span>
                        <span className="text-2xl font-bold text-slate-600">/ {totalCount}</span>
                    </div>
                </div>
                <div className="space-y-3 w-full max-w-xs">
                    <button onClick={() => { setIsFinished(false); setReviewMode(true); setDisplayIndex(0); setShowOnlyWrong(true); }} className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700">틀린문제 확인</button>
                    <button onClick={handleRetake} className="w-full h-14 bg-amber-600 text-white rounded-2xl font-bold hover:bg-amber-500">다시 풀기</button>
                    <button onClick={() => router.push(fromPath)} className="w-full py-4 text-slate-500 font-bold">목록으로 돌아가기</button>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50">
                <Button variant="ghost" size="sm" onClick={() => setShowExitConfirm(true)} className="text-slate-400">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Exit
                </Button>
                <div className="flex items-center gap-4">
                    <span className="text-white font-bold tracking-tight">Part 1 - Vol {vol} Test {testId}</span>
                </div>
                <div className="flex items-center gap-3">
                    {reviewMode && (
                        <button
                            onClick={() => setShowTranslation(!showTranslation)}
                            className={cn(
                                "px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all border uppercase",
                                showTranslation
                                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                    : "bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300"
                            )}
                        >
                            {showTranslation ? 'Translation ON' : 'Translation OFF'}
                        </button>
                    )}
                    <Button variant="outline" size="sm" onClick={() => {
                        localStorage.setItem(`part1_progress_v${vol}_t${testId}`, JSON.stringify({ selectedAnswers, currentQIndex: displayIndex, elapsedTime }));
                        router.push(fromPath);
                    }} className="text-indigo-400 border-indigo-500/30 font-bold bg-indigo-500/10 hover:bg-indigo-500/20">💾 Save</Button>
                </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row max-w-6xl mx-auto w-full p-4 md:p-8 gap-8">
                <div className="flex-1 flex flex-col justify-center">
                    <div className="aspect-[4/3] bg-black rounded-3xl overflow-hidden border border-slate-700 relative">
                        {currentQ && <img src={currentQ.image} alt="Question Image" className="w-full h-full object-contain" />}
                        {reviewMode && currentQ && (
                            <div className={cn(
                                "absolute top-4 left-4 px-4 py-2 rounded-xl border font-black text-sm shadow-2xl backdrop-blur-md z-20",
                                (selectedAnswers[currentQ.id] === currentQ.correctAnswer || reviewedAnswers[currentQ.id] === currentQ.correctAnswer)
                                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                                    : (reviewedAnswers[currentQ.id] && reviewedAnswers[currentQ.id] !== currentQ.correctAnswer)
                                        ? "bg-rose-500/20 border-rose-500 text-rose-400"
                                        : "bg-slate-800 border-slate-700 text-slate-400"
                            )}>
                                {(selectedAnswers[currentQ.id] === currentQ.correctAnswer || reviewedAnswers[currentQ.id] === currentQ.correctAnswer)
                                    ? "CORRECT"
                                    : (reviewedAnswers[currentQ.id] && reviewedAnswers[currentQ.id] !== currentQ.correctAnswer)
                                        ? "WRONG"
                                        : "RETRY"}
                            </div>
                        )}
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-xl text-white font-black text-xs border border-white/10">
                            Q {displayIndex + 1} / {displayQuestions?.length || 0}
                        </div>
                    </div>
                    <div className="mt-6 flex items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
                        <Button onClick={playAudio} className="w-12 h-12 rounded-full bg-indigo-600 text-white">
                            {isPlaying ? <Pause /> : <Play />}
                        </Button>
                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                            <div className={cn("h-full bg-indigo-500 transition-all", isPlaying ? "w-full animate-progress" : "w-0")}></div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col justify-center space-y-8">
                    <div className="grid grid-cols-4 md:grid-cols-1 gap-3">
                        {['A', 'B', 'C', 'D'].map((opt) => {
                            if (!currentQ) return null;
                            const isCorrectInitial = selectedAnswers[currentQ.id] === currentQ.correctAnswer;
                            const isSelected = selectedAnswers[currentQ.id] === opt;
                            const isCorrect = currentQ.correctAnswer === opt;
                            const reviewAns = reviewedAnswers[currentQ.id];

                            return (
                                <button key={opt} onClick={() => handleSelect(opt)} className={cn(
                                    "p-5 rounded-2xl border flex items-center gap-4 transition-all text-left group",
                                    reviewMode
                                        ? (isCorrect && (isCorrectInitial || !!reviewAns) ? "border-emerald-500 bg-emerald-950/40" : (reviewAns === opt ? "border-rose-500 bg-rose-950/40" : "border-slate-800 bg-slate-900/50"))
                                        : (isSelected ? "border-indigo-500 bg-indigo-600 text-white shadow-xl shadow-indigo-500/20 scale-[1.02]" : "border-slate-800 bg-slate-900/50 text-slate-400 hover:border-slate-700")
                                )}>
                                    <span className={cn(
                                        "w-10 h-10 rounded-full border flex items-center justify-center font-black transition-colors shrink-0",
                                        isSelected || (reviewMode && reviewAns === opt) ? "border-white bg-white text-indigo-600" : "border-slate-700"
                                    )}>{opt}</span>
                                    <div className="hidden md:block flex-1">
                                        {reviewMode && currentQ.script && (isCorrectInitial || !!reviewAns) && (
                                            <div className="mt-1 animate-in slide-in-from-left-2 fade-in duration-300">
                                                <p className={cn(
                                                    "text-sm font-medium",
                                                    isCorrect ? "text-emerald-400" : (reviewAns === opt ? "text-rose-400" : "text-slate-200")
                                                )}>{currentQ.script[opt]}</p>
                                                {showTranslation && currentQ.script[`translation_${opt}`] && (
                                                    <p className="text-xs text-indigo-300/60 mt-0.5">{currentQ.script[`translation_${opt}`]}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                    {reviewMode && currentQ?.script?.translation && (selectedAnswers[currentQ.id] === currentQ.correctAnswer || !!reviewedAnswers[currentQ.id]) && (
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl animate-in slide-in-from-bottom-2 duration-300">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Analysis & Script</p>
                            <p className="text-xs text-slate-400 italic leading-relaxed">{currentQ.script.translation}</p>
                        </div>
                    )}
                    <div className="flex justify-between mt-auto gap-4">
                        <Button variant="ghost" disabled={displayIndex === 0} onClick={handlePrev} className="text-slate-500 hover:text-white">Prev</Button>
                        <Button onClick={handleNext} disabled={!reviewMode && (!currentQ || !selectedAnswers[currentQ.id])} className="flex-1 bg-white text-slate-900 font-bold h-12 rounded-xl shadow-lg ring-offset-2 ring-offset-slate-950 transition-all active:scale-95">
                            {reviewMode
                                ? (displayIndex === (displayQuestions?.length || 0) - 1 ? "Finish Review 🏁" : <span>Next Wrong Question →</span>)
                                : (displayIndex === testSet.questions.length - 1 ? "Finish Test 🎉" : "Next Question")}
                        </Button>
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
