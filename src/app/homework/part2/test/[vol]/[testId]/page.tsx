'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Volume2, RotateCcw, CheckCircle, XCircle, AlertTriangle, X, Triangle } from "lucide-react";
import { part2RealTests, Part2Question } from '@/data/toeic/listening/part2/tests';
import { cn } from "@/lib/utils";
import { PerformanceSyncService } from '@/services/performanceSyncService';

export default function Part2Test() {
    const params = useParams();
    const router = useRouter();
    const vol = parseInt(params.vol as string);
    const testId = parseInt(params.testId as string);

    // Data
    const [questions, setQuestions] = useState<Part2Question[]>([]);

    // Logic States
    const [mainQueue, setMainQueue] = useState<Part2Question[]>([]);
    const [wrongQueue, setWrongQueue] = useState<Part2Question[]>([]);

    // Mode States
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [isReportMode, setIsReportMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // UI States
    const [loading, setLoading] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [playDelay, setPlayDelay] = useState(2000);
    const [progress, setProgress] = useState(0);
    const [useTTS, setUseTTS] = useState(false);
    const [optionStatus, setOptionStatus] = useState<Record<string, 'eliminated' | 'uncertain'>>({});
    const [isReady, setIsReady] = useState(false);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [reviewedAnswers, setReviewedAnswers] = useState<Record<string, string>>({});
    const [showTranslation, setShowTranslation] = useState(false);
    const [isLoadingRetry, setIsLoadingRetry] = useState(false);
    const [isPerfectScore, setIsPerfectScore] = useState(false);
    const searchParams = useSearchParams();
    const retryMode = searchParams.get('mode') === 'retry';
    const resultId = searchParams.get('resultId');
    const fromPath = searchParams.get('from') || '/homework/part2';

    // Refs
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const synth = useRef<SpeechSynthesis | null>(null);
    const playbackId = useRef<number>(0);

    // Initialize
    useEffect(() => {
        if (!testId || !vol) return;

        const found = part2RealTests.find(t => t.vol === vol && t.testId === testId);
        if (!found) {
            alert("해당 테스트 데이터가 없습니다.");
            router.push('/homework/part2');
            return;
        }

        const data = found.questions.questions;
        setQuestions(data);

        const fetchRetryAndLoad = async () => {
            // Case 1: Retry Mode from History
            if (retryMode && resultId) {
                setIsLoadingRetry(true);
                try {
                    const docRef = doc(db, "Manager_Results", resultId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const resData = docSnap.data();
                        if (resData.incorrectQuestions && resData.incorrectQuestions.length > 0) {
                            const ids = resData.incorrectQuestions.map((iq: any) => iq.id);
                            const filtered = data.filter(q => ids.includes(q.id));
                            setMainQueue(data); // Keep full set for reference if needed
                            setWrongQueue(filtered);
                            setIsReviewMode(true); // Direct to review/retry mode
                        } else {
                            setMainQueue(data);
                            setIsPerfectScore(true);
                        }
                    }
                } catch (e) {
                    console.error("Retry fetch failed", e);
                } finally {
                    setIsLoadingRetry(false);
                }
            }
            // Case 2: Standard Load / Local Progress
            else {
                const saved = localStorage.getItem(`part2_progress_v${vol}_t${testId}`);
                if (saved) {
                    try {
                        const parsed = JSON.parse(saved);
                        if (parsed.mainQueue && parsed.mainQueue.length > 0) setMainQueue(parsed.mainQueue);
                        else setMainQueue(data);
                        if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
                        if (parsed.wrongQueue) setWrongQueue(parsed.wrongQueue);
                    } catch (e) {
                        setMainQueue(data);
                    }
                } else {
                    setMainQueue(data);
                }
            }
        };

        fetchRetryAndLoad();
        setLoading(false);
        setTimeout(() => setIsReady(true), 0);

        if (typeof window !== 'undefined') {
            synth.current = window.speechSynthesis;
        }

        return () => {
            if (synth.current) synth.current.cancel();
            playbackId.current++;
        };
    }, [testId, vol, router]);

    // Current Question Data
    const currentQueue = isReviewMode ? wrongQueue : mainQueue;
    const currentQuestion = currentQueue[currentIndex];

    // Audio Playback Engine
    useEffect(() => {
        if (currentQuestion && !isReportMode && isReady) {
            playbackId.current++;
            if (synth.current) synth.current.cancel();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            setSelectedAnswer(null);
            setShowResult(false);
            setIsPlaying(false);
            setProgress(0);
            setUseTTS(false);
            setOptionStatus({});

            const timer = setTimeout(() => handlePlay(), playDelay);
            return () => {
                clearTimeout(timer);
                playbackId.current++;
                if (synth.current) synth.current.cancel();
                if (audioRef.current) audioRef.current.pause();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion?.id, isReportMode, playDelay, isReady]);

    const handlePlay = () => {
        if (isPlaying) return;
        if (useTTS) {
            handlePlayTTS();
        } else {
            playAudio();
        }
    };

    const playAudio = () => {
        if (!audioRef.current) return;
        const myId = ++playbackId.current;
        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1.0;

        const tNum = String(testId).padStart(2, '0');
        const qNumRaw = currentQuestion.id.split('-q')[1] || currentQuestion.id.match(/\d+$/)?.[0] || '1';
        const qNum = String(qNumRaw).padStart(2, '0');
        if (vol === 3) {
            audioRef.current.src = `/audio/ETS_TOEIC_3/Test_${tNum}/TEST ${tNum}_PART 2_${qNumRaw}.mp3`;
        } else {
            audioRef.current.src = `/audio/ETS_TOEIC_4/Test_${tNum}/Test_${tNum}-${qNum}.mp3`;
        }

        audioRef.current.play()
            .then(() => {
                if (myId !== playbackId.current) audioRef.current?.pause();
            })
            .catch(() => {
                if (myId !== playbackId.current) return;
                handleAudioError(myId);
            });
    };

    const handleAudioError = (originId: number) => {
        if (originId !== playbackId.current) return;
        setUseTTS(true);
        setTimeout(() => {
            if (originId === playbackId.current) handlePlayTTS();
        }, 50);
    };

    const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
        return new Promise((resolve) => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) { resolve(voices); return; }
            window.speechSynthesis.onvoiceschanged = () => resolve(window.speechSynthesis.getVoices());
        });
    };

    const speak = async (text: string, myId: number, rate: number = 0.9): Promise<void> => {
        if (!synth.current) return;
        const voices = await loadVoices();
        return new Promise((resolve) => {
            if (myId !== playbackId.current) { resolve(); return; }
            const utter = new SpeechSynthesisUtterance(text);
            const preferredVoice =
                voices.find(v => v.name.includes("Google US English")) ||
                voices.find(v => v.name.includes("Microsoft Zira")) ||
                voices.find(v => v.name.includes("Samantha")) ||
                voices.find(v => v.lang === 'en-US');
            if (preferredVoice) utter.voice = preferredVoice;
            utter.lang = 'en-US';
            utter.rate = rate;
            utter.onend = () => resolve();
            utter.onerror = () => resolve();
            if (myId === playbackId.current) {
                synth.current!.speak(utter);
            } else {
                resolve();
            }
        });
    };

    const wait = (ms: number, myId: number) => new Promise<void>(resolve => {
        setTimeout(() => { if (myId === playbackId.current) resolve(); }, ms);
    });

    const handlePlayTTS = async () => {
        if (!synth.current) return;
        const myId = ++playbackId.current;
        synth.current.cancel();
        if (audioRef.current) audioRef.current.pause();
        setIsPlaying(true);

        const qNo = currentQuestion.id.split('-q')[1] || currentQuestion.id.match(/\d+$/)?.[0] || '';

        try {
            await speak(`Number ${qNo}`, myId);
            await wait(500, myId); if (myId !== playbackId.current) return;
            await speak(currentQuestion.text, myId);
            await wait(2000, myId); if (myId !== playbackId.current) return;
            await speak("A", myId); await speak(currentQuestion.options.A, myId);
            await wait(800, myId); if (myId !== playbackId.current) return;
            await speak("B", myId); await speak(currentQuestion.options.B, myId);
            await wait(800, myId); if (myId !== playbackId.current) return;
            await speak("C", myId); await speak(currentQuestion.options.C, myId);
        } catch (e) {
            console.error(e);
        } finally {
            if (myId === playbackId.current) setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const duration = audioRef.current.duration || 1;
            setProgress((audioRef.current.currentTime / duration) * 100);
        }
    };

    const handleAudioEnd = () => setIsPlaying(false);

    const toggleOptionStatus = (key: 'A' | 'B' | 'C', status: 'eliminated' | 'uncertain') => {
        if (showResult) return;
        setOptionStatus(prev => {
            if (prev[key] === status) {
                const copy = { ...prev };
                delete copy[key];
                return copy;
            }
            return { ...prev, [key]: status };
        });
    };

    const handleAnswer = (key: 'A' | 'B' | 'C') => {
        if (selectedAnswer !== null) return;
        playbackId.current++;
        if (audioRef.current) audioRef.current.pause();
        if (synth.current) synth.current.cancel();
        setIsPlaying(false);

        if (isReviewMode) {
            setReviewedAnswers(prev => ({ ...prev, [currentQuestion.id]: key }));
            return;
        }

        setSelectedAnswer(key);
        setShowResult(true);

        const isCorrect = key === currentQuestion.correctAnswer;
        if (!isCorrect && !isReviewMode) {
            if (!wrongQueue.find(q => q.id === currentQuestion.id)) {
                setWrongQueue(prev => [...prev, currentQuestion]);
            }
        }

        setTimeout(() => {
            setPlayDelay(1000);
            if (currentIndex < mainQueue.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                // Determine the most accurate wrong queue for saving
                let finalWrongQueue = wrongQueue;
                if (!isCorrect && !isReviewMode && !wrongQueue.find(q => q.id === currentQuestion.id)) {
                    finalWrongQueue = [...wrongQueue, currentQuestion];
                }
                showReportScreen(finalWrongQueue);
            }
        }, 1000);
    };

    const showReportScreen = (finalWrongQueue?: Part2Question[]) => {
        setIsReportMode(true);
        // CRITICAL: Save immediately when reaching report screen for LC Part 2
        // This ensures data is saved even if user skips review or closes browser
        saveManagerResult(finalWrongQueue || wrongQueue);
    };

    const saveManagerResult = async (currentWrongQueue: Part2Question[]) => {
        // Prevent double saving
        const saveKey = `p2_saved_v${vol}_t${testId}`;
        if (sessionStorage.getItem(saveKey) || retryMode) return;

        const score = questions.length - currentWrongQueue.length;
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            const userId = user.userId || user.uid;
            try {
                const incorrects = currentWrongQueue.map(q => ({
                    id: q.id,
                    classification: q.questionType || 'Unknown'
                }));

                await addDoc(collection(db, "Manager_Results"), {
                    studentId: userId,
                    studentName: user.userName || user.name || "Unknown",
                    type: 'part2_test',
                    unit: `Part2 Real Test Vol${vol} ${testId}`,
                    detail: `Vol ${vol} Test ${testId}`,
                    score: score,
                    total: questions.length,
                    wrongCount: currentWrongQueue.length,
                    incorrectQuestions: incorrects,
                    vol: vol,
                    testId: testId,
                    timestamp: serverTimestamp()
                });
                await PerformanceSyncService.syncUserSummary(userId);
                sessionStorage.setItem(saveKey, 'true');
            } catch (e) {
                console.error("Save error:", e);
            }
        }
    };

    const startReview = () => {
        setIsReviewMode(true);
        setCurrentIndex(0);
        setPlayDelay(2000);
        setIsReportMode(false);
    };

    const finishAll = async () => {
        // Final guard/cleanup
        localStorage.removeItem(`part2_progress_v${vol}_t${testId}`);
        sessionStorage.removeItem(`p2_saved_v${vol}_t${testId}`);
        router.push(fromPath);
    };

    if (loading || isLoadingRetry) return (
        <div className="flex h-screen items-center justify-center bg-slate-950">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-emerald-500 w-10 h-10" />
                <p className="text-slate-500 font-black italic uppercase tracking-widest text-xs">오답 데이터를 매칭하는 중...</p>
            </div>
        </div>
    );

    if (isPerfectScore) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <CheckCircle className="w-12 h-12" />
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
                            setCurrentIndex(0);
                            setWrongQueue(mainQueue);
                            setIsReviewMode(true);
                        }}
                        className="w-full h-14 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-500 hover:scale-[1.02] transition-all"
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

    if (isReportMode) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div>
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">MISSION COMPLETE</h2>
                        <p className="text-slate-400 font-medium">
                            {wrongQueue.length === 0 ? "Perfect Score! 🎉" : "틀린 문제를 확인하고 복습하세요."}
                        </p>
                    </div>
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-500 uppercase">Score</p>
                                <p className="text-4xl font-black text-white">{questions.length - wrongQueue.length}</p>
                            </div>
                            <div className="w-px h-12 bg-slate-700"></div>
                            <div className="text-center">
                                <p className="text-sm font-bold text-slate-500 uppercase">Wrong</p>
                                <p className="text-4xl font-black text-rose-500">{wrongQueue.length}</p>
                            </div>
                        </div>
                        {wrongQueue.length > 0 && (
                            <div className="text-left">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-3">Wrong Questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {wrongQueue.map(q => (
                                        <div key={q.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                                            <span className="text-xs font-black text-rose-500">
                                                Q{q.id.split('-q')[1] || q.id}
                                            </span>
                                            {q.questionType === 'Indirect' && (
                                                <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-1 rounded">Indirect</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="space-y-3">
                        {wrongQueue.length > 0 && (
                            <Button onClick={startReview} className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-lg font-bold rounded-2xl shadow-lg shadow-emerald-500/20">
                                <RotateCcw className="mr-2 w-5 h-5" /> 틀린 문제 재학습
                            </Button>
                        )}
                        <Button onClick={finishAll} variant="outline" className="w-full h-14 border-slate-700 bg-transparent text-slate-400 hover:bg-slate-800 hover:text-white text-lg font-bold rounded-2xl">
                            <CheckCircle className="mr-2 w-5 h-5" /> 학습 종료
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    if (!currentQuestion) return null;

    return (
        <div className="min-h-screen bg-slate-950 pb-20">
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleAudioEnd} className="hidden" />

            <div className="py-4 md:p-6 flex justify-between items-end max-w-3xl mx-auto px-4 md:px-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <button
                            onClick={() => setShowExitConfirm(true)}
                            className="bg-slate-800 p-1 rounded-md text-slate-400 hover:text-white mr-1"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <span className={cn("px-2 py-0.5 rounded text-[10px] font-black uppercase text-white", isReviewMode ? "bg-rose-500" : "bg-emerald-600")}>
                            {isReviewMode ? "Review Mode" : `Vol ${vol} · Test ${testId}`}
                        </span>
                        {isReviewMode && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                                <RotateCcw className="w-3 h-3" /> Retry Wrong Questions
                            </span>
                        )}
                        <div className="flex items-center gap-3 ml-2">
                            {isReviewMode && (
                                <button
                                    onClick={() => setShowTranslation(!showTranslation)}
                                    className={cn(
                                        "px-2.5 py-1 rounded-lg text-[10px] font-black tracking-widest transition-all border uppercase",
                                        showTranslation
                                            ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                            : "bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300"
                                    )}
                                >
                                    {showTranslation ? 'Trans ON' : 'Trans OFF'}
                                </button>
                            )}
                            <button
                                onClick={() => {
                                    if (currentIndex > 0 || wrongQueue.length > 0) {
                                        localStorage.setItem(`part2_progress_v${vol}_t${testId}`, JSON.stringify({
                                            currentIndex,
                                            wrongQueue,
                                            mainQueue
                                        }));
                                    }
                                    router.push(fromPath);
                                }}
                                className="px-2 py-1 rounded text-[10px] font-bold uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 flex items-center gap-1"
                            >
                                💾 Save
                            </button>
                        </div>
                    </div>
                    <h1 className="text-xl md:text-2xl font-black text-white italic tracking-tighter">
                        Question {currentQuestion.id.split('-q')[1] || currentQuestion.id}
                    </h1>
                </div>
                <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-slate-200">{currentIndex + 1}</span>
                    <span className="text-sm font-bold text-slate-600"> / {currentQueue.length}</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-4 md:space-y-6 pb-8">
                {/* Audio Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-10 text-center shadow-2xl border border-slate-700/50 relative overflow-hidden">
                    {!useTTS && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-800">
                            <div className="h-full bg-emerald-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                        </div>
                    )}
                    {useTTS && isPlaying && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-amber-500/50 animate-pulse" />
                    )}
                    <button
                        onClick={handlePlay}
                        disabled={isPlaying}
                        className={cn(
                            "w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto transition-all shadow-xl z-10 relative",
                            isPlaying ? "bg-emerald-500/20 text-emerald-500 scale-110 ring-4 ring-emerald-500/10" : "bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-105 active:scale-95",
                            useTTS && "bg-amber-600 hover:bg-amber-500"
                        )}
                    >
                        {isPlaying ? <Volume2 className="w-8 h-8 md:w-10 md:h-10 animate-bounce" /> : <Play className="w-8 h-8 md:w-10 md:h-10 ml-1" />}
                    </button>
                    <p className="mt-6 text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                        {isPlaying ? (useTTS ? "AI Speaking..." : "Listening...") : "Listen Carefully"}
                    </p>
                    {isReviewMode && (showTranslation || !!reviewedAnswers[currentQuestion.id]) && (
                        <div className="mt-6 pt-6 border-t border-slate-700/50 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Question Script</p>
                            <p className="text-sm text-slate-200 font-medium italic">"{currentQuestion.text}"</p>
                            {showTranslation && currentQuestion.translation && (
                                <p className="text-xs text-slate-500 mt-2">({currentQuestion.translation})</p>
                            )}
                        </div>
                    )}
                </div>

                {/* Options */}
                <div className="space-y-3 px-4 md:px-0">
                    {(['A', 'B', 'C'] as const).map((key) => {
                        const reviewAns = reviewedAnswers[currentQuestion.id];
                        const isCorrect = currentQuestion.correctAnswer === key;
                        const status = optionStatus[key];

                        let btnClass = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700";
                        if (status === 'eliminated' && !showResult && !reviewAns) {
                            btnClass = "bg-slate-900/50 border-slate-800 text-slate-600 opacity-60";
                        } else if (status === 'uncertain' && !showResult && !reviewAns) {
                            btnClass = "bg-amber-950/20 border-amber-500/50 text-slate-200";
                        }

                        if (showResult || reviewAns) {
                            if (isCorrect) btnClass = "bg-emerald-600/20 border-emerald-500 text-emerald-400";
                            else if ((selectedAnswer === key) || (reviewAns === key)) btnClass = "bg-rose-600/20 border-rose-500 text-rose-400";
                            else btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-50";
                        }

                        return (
                            <div key={key} className="flex gap-3 relative">
                                <button
                                    onClick={() => handleAnswer(key)}
                                    disabled={showResult || !!reviewAns}
                                    className={cn(
                                        "w-full p-5 rounded-2xl border font-bold text-left transition-all relative overflow-hidden min-h-[80px] md:min-h-[90px] flex items-center",
                                        btnClass
                                    )}
                                >
                                    <div className="flex items-center gap-4 z-10 relative w-full">
                                        <div className={cn(
                                            "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors shrink-0",
                                            (showResult || reviewAns) && isCorrect ? "bg-emerald-500 text-slate-900" : "bg-slate-900/50"
                                        )}>
                                            {key}
                                        </div>
                                        <div className="flex-1">
                                            <p className={cn("text-sm font-medium transition-opacity duration-300", (showResult || reviewAns) ? "opacity-100" : "opacity-0")}>
                                                {currentQuestion.options[key]}
                                            </p>
                                            {(showResult || reviewAns) && showTranslation && (currentQuestion as any)[`translation_${key}`] && (
                                                <p className="text-[11px] text-slate-500 mt-1 italic animate-in fade-in duration-300">
                                                    {(currentQuestion as any)[`translation_${key}`]}
                                                </p>
                                            )}
                                        </div>
                                        {status === 'eliminated' && !showResult && !reviewAns && (
                                            <div className="absolute inset-x-4 top-1/2 h-0.5 bg-slate-500/30 pointer-events-none" />
                                        )}
                                        {(showResult || reviewAns) && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                        {((showResult && selectedAnswer === key) || (reviewAns && reviewAns === key)) && !isCorrect && <XCircle className="w-5 h-5 text-rose-500" />}
                                    </div>
                                </button>
                                {!showResult && !reviewAns && (
                                    <div className="flex flex-col gap-2 justify-center shrink-0">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleOptionStatus(key, 'eliminated'); }}
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center transition-all bg-slate-800 border border-slate-700 hover:scale-110 active:scale-95",
                                                status === 'eliminated' ? "bg-rose-500 border-rose-500 text-white shadow-lg" : "text-slate-500 hover:text-rose-400 hover:border-rose-500/30"
                                            )}
                                            title="Eliminate (X)"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleOptionStatus(key, 'uncertain'); }}
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center transition-all bg-slate-800 border border-slate-700 hover:scale-110 active:scale-95",
                                                status === 'uncertain' ? "bg-amber-500 border-amber-500 text-slate-900 shadow-lg" : "text-slate-500 hover:text-amber-400 hover:border-amber-500/30"
                                            )}
                                            title="Uncertain (Triangle)"
                                        >
                                            <Triangle className={cn("w-3.5 h-3.5", status === 'uncertain' && "fill-current")} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                {isReviewMode && (
                    <div className="flex justify-end gap-3 px-4 md:px-0 mt-6">
                        <Button
                            onClick={() => {
                                if (currentIndex < currentQueue.length - 1) {
                                    setCurrentIndex(prev => prev + 1);
                                } else {
                                    finishAll();
                                }
                            }}
                            disabled={!reviewedAnswers[currentQuestion.id]}
                            className={cn(
                                "px-8 h-14 rounded-2xl font-black text-sm tracking-widest transition-all",
                                reviewedAnswers[currentQuestion.id]
                                    ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl"
                                    : "bg-slate-900 text-slate-600 border border-slate-800 pointer-events-none"
                            )}
                        >
                            {currentIndex === currentQueue.length - 1 ? "Finish Review 🏁" : "Next Review Question →"}
                        </Button>
                    </div>
                )}
                <p className="text-center text-slate-500 text-xs mt-8 pb-10">
                    * 듣기 평가입니다. 오디오를 먼저 듣고 정답을 선택하세요. {useTTS && "(AI 오디오 모드)"}
                </p>
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
