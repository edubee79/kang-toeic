'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Volume2, RotateCcw, CheckCircle, XCircle, AlertTriangle, X, Triangle } from "lucide-react";
import { part2Data, Part2Question } from '@/data/part2';
import { cn } from "@/lib/utils";

export default function Part2Test() {
    const params = useParams();
    const router = useRouter();
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
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [playDelay, setPlayDelay] = useState(2000); // 2s initial delay
    const [progress, setProgress] = useState(0);
    const [useTTS, setUseTTS] = useState(false);
    const [optionStatus, setOptionStatus] = useState<Record<number, 'eliminated' | 'uncertain'>>({}); // Track X/Triangle status

    // Refs
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const synth = useRef<SpeechSynthesis | null>(null);
    const playbackId = useRef<number>(0); // CRITICAL: Unique ID for current playback session

    // Initialize
    useEffect(() => {
        if (!testId) return;
        const data = part2Data[testId];
        if (!data) {
            alert("해당 테스트 데이터가 없습니다.");
            router.push('/homework/part2');
            return;
        }
        setQuestions(data);
        setMainQueue(data);
        setLoading(false);

        if (typeof window !== 'undefined') {
            synth.current = window.speechSynthesis;
        }

        return () => {
            if (synth.current) synth.current.cancel();
            playbackId.current++; // Invalidate any running TTS on unmount
        };
    }, [testId, router]);

    // Current Question Data
    const currentQueue = isReviewMode ? wrongQueue : mainQueue;
    const currentQuestion = currentQueue[currentIndex];

    // Audio Playback Engine
    useEffect(() => {
        if (currentQuestion && !isReportMode) {
            // STOP EVERYTHING
            playbackId.current++; // Invalidate previous sessions
            if (synth.current) synth.current.cancel();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            // Reset state
            setSelectedAnswer(null);
            setShowResult(false);
            setIsPlaying(false);
            setProgress(0);
            setUseTTS(false);
            setOptionStatus({}); // Reset elimination/uncertain status

            // Auto play with dynamic delay
            const timer = setTimeout(() => handlePlay(), playDelay);
            return () => {
                clearTimeout(timer);
                playbackId.current++; // Cleanup
                if (synth.current) synth.current.cancel();
                if (audioRef.current) audioRef.current.pause();
            };
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion?.id, isReportMode, playDelay]);

    const handlePlay = () => {
        if (isPlaying) return; // Defensive

        if (useTTS) {
            handlePlayTTS();
        } else {
            playAudio();
        }
    };

    const playAudio = () => {
        if (!audioRef.current) return;

        // Start new session
        const myId = ++playbackId.current;

        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 1.0;

        const tNum = String(testId).padStart(2, '0');
        const qNum = String(currentQuestion.id).padStart(2, '0');
        audioRef.current.src = `/audio/lc/part2/Test_${tNum}-${qNum}.mp3`;

        audioRef.current.play()
            .then(() => {
                if (myId !== playbackId.current) {
                    audioRef.current?.pause(); // Stale request
                }
            })
            .catch(e => {
                if (myId !== playbackId.current) return;
                console.error("Audio error:", e);
                handleAudioError(myId);
            });
    };

    const handleAudioError = (originId: number) => {
        // Only switch if this error came from the CURRENT active session
        if (originId !== playbackId.current) return;

        console.log("Audio file not found, switching to TTS");
        setUseTTS(true);

        // Immediate switch
        setTimeout(() => {
            if (originId === playbackId.current) {
                handlePlayTTS();
            }
        }, 50);
    };

    // TTS Logic
    const loadVoices = (): Promise<SpeechSynthesisVoice[]> => {
        return new Promise((resolve) => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                resolve(voices);
                return;
            }
            window.speechSynthesis.onvoiceschanged = () => {
                const voices = window.speechSynthesis.getVoices();
                resolve(voices);
            };
        });
    };

    const speak = async (text: string, myId: number, rate: number = 0.9): Promise<void> => {
        if (!synth.current) return;

        // Ensure voices are loaded (only once effectively)
        const voices = await loadVoices();

        return new Promise((resolve) => {
            // Check session validity
            if (myId !== playbackId.current) {
                resolve();
                return;
            }

            const utter = new SpeechSynthesisUtterance(text);

            const preferredVoice = voices.find(v => v.name.includes("Google US English")) ||
                voices.find(v => v.name.includes("Microsoft Zira")) ||
                voices.find(v => v.name.includes("Samantha")) ||
                voices.find(v => v.lang === 'en-US');

            if (preferredVoice) utter.voice = preferredVoice;
            utter.lang = 'en-US';
            utter.rate = rate;

            utter.onend = () => resolve();
            utter.onerror = (e) => {
                // Even on error, resolve to unblock, but check ID
                resolve();
            };

            if (myId === playbackId.current) {
                synth.current?.speak(utter);
            } else {
                resolve();
            }
        });
    };

    const wait = (ms: number, myId: number) => new Promise<void>(resolve => {
        setTimeout(() => {
            if (myId === playbackId.current) resolve();
        }, ms);
    });

    const handlePlayTTS = async () => {
        if (!synth.current) return;

        // Start NEW session
        const myId = ++playbackId.current;

        // Stop currently playing
        synth.current.cancel();
        if (audioRef.current) audioRef.current.pause();

        setIsPlaying(true);

        if (!currentQuestion?.script) {
            setIsPlaying(false);
            return;
        }

        try {
            // Sequence
            console.log(`TTS Session ${myId} Started`);

            await speak(`Number ${currentQuestion.id}`, myId);
            await wait(500, myId); if (myId !== playbackId.current) return;

            await speak(currentQuestion.script, myId);
            await wait(2000, myId); if (myId !== playbackId.current) return;

            await speak("A", myId);
            // await wait(300, myId); 
            await speak(currentQuestion.options[0], myId);
            await wait(800, myId); if (myId !== playbackId.current) return;

            await speak("B", myId);
            // await wait(300, myId);
            await speak(currentQuestion.options[1], myId);
            await wait(800, myId); if (myId !== playbackId.current) return;

            await speak("C", myId);
            // await wait(300, myId);
            await speak(currentQuestion.options[2], myId);

        } catch (e) {
            console.error(e);
        } finally {
            if (myId === playbackId.current) {
                setIsPlaying(false);
                console.log(`TTS Session ${myId} Finished`);
            } else {
                console.log(`TTS Session ${myId} Aborted (Stale)`);
            }
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const duration = audioRef.current.duration || 1;
            setProgress((audioRef.current.currentTime / duration) * 100);
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);
    };

    // Toggle Elimination/Uncertain Status
    const toggleOptionStatus = (optIdx: number, status: 'eliminated' | 'uncertain') => {
        if (showResult) return; // Disable during result view
        setOptionStatus(prev => {
            const current = prev[optIdx];
            // Toggle off if same status clicked
            if (current === status) {
                const copy = { ...prev };
                delete copy[optIdx];
                return copy;
            }
            // Set new status (overwrites existing)
            return { ...prev, [optIdx]: status };
        });
    };

    // Answer Handling
    const handleAnswer = (choice: number) => {
        if (selectedAnswer !== null) return; // Prevent double click

        // Stop Audio/TTS immediately
        playbackId.current++; // Invalidate
        if (audioRef.current) audioRef.current.pause();
        if (synth.current) synth.current.cancel();

        setIsPlaying(false);

        setSelectedAnswer(choice);
        setShowResult(true);

        const isCorrect = choice === currentQuestion.correct;

        if (!isCorrect && !isReviewMode) {
            if (!wrongQueue.find(q => q.id === currentQuestion.id)) {
                setWrongQueue(prev => [...prev, currentQuestion]);
            }
        }

        setTimeout(() => {
            setPlayDelay(1000);

            if (isReviewMode) {
                if (currentIndex < currentQueue.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    finishAll();
                }
            } else {
                if (currentIndex < mainQueue.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    showReport();
                }
            }
        }, 1000);
    };

    const showReport = () => {
        setIsReportMode(true);
    };

    const startReview = () => {
        setIsReviewMode(true);
        setCurrentIndex(0);
        setPlayDelay(2000); // Reset to 2s for review start
        setIsReportMode(false);
    };

    const finishAll = async () => {
        const score = questions.length - wrongQueue.length;
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName,
                    studentId: user.userId,
                    unit: `LC_Part2_Test${testId}`,
                    score: score,
                    total: questions.length,
                    wrongCount: wrongQueue.length,
                    timestamp: serverTimestamp()
                });
                alert("학습 결과가 저장되었습니다.");
            } catch (e) {
                console.error("Save error:", e);
            }
        }
        router.push('/homework/part2');
    };

    if (loading) return <div className="flex h-screen items-center justify-center bg-slate-950"><Loader2 className="animate-spin text-emerald-500" /></div>;

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
                                            <span className="text-xs font-black text-rose-500">Q{q.id}</span>
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
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleAudioEnd}
                className="hidden"
            />

            <div className="py-4 md:p-6 flex justify-between items-end max-w-3xl mx-auto px-4 md:px-6">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className={cn("px-2 py-0.5 rounded text-[10px] font-black uppercase text-white", isReviewMode ? "bg-rose-500" : "bg-emerald-600")}>
                            {isReviewMode ? "Review Mode" : `Test ${testId}`}
                        </span>
                        {currentQuestion?.questionType === 'Indirect' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> Indirect Answer
                            </span>
                        )}
                    </div>
                    <h1 className="text-xl md:text-2xl font-black text-white italic tracking-tighter">
                        Question {currentQuestion.id}
                    </h1>
                </div>
                <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-slate-200">{currentIndex + 1}</span>
                    <span className="text-sm font-bold text-slate-600"> / {currentQueue.length}</span>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-4 md:space-y-6 pb-8">
                {/* Audio Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-10 text-center shadow-2xl border border-slate-700/50 relative overflow-hidden group">
                    {/* Progress Bar */}
                    {!useTTS && (
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-slate-800">
                            <div
                                className="h-full bg-emerald-500 transition-all duration-100 ease-linear"
                                style={{ width: `${progress}%` }}
                            />
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
                </div>

                {/* Options */}
                <div className="space-y-3 px-4 md:px-0">
                    {[0, 1, 2].map((optIdx) => {
                        const isSelected = selectedAnswer === optIdx;
                        const status = optionStatus[optIdx]; // 'eliminated' | 'uncertain'

                        let btnClass = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"; // Default

                        if (status === 'eliminated' && !showResult) {
                            btnClass = "bg-slate-900/50 border-slate-800 text-slate-600 opacity-60";
                        } else if (status === 'uncertain' && !showResult) {
                            btnClass = "bg-amber-950/20 border-amber-500/50 text-slate-200";
                        }

                        if (showResult) {
                            if (optIdx === currentQuestion.correct) {
                                btnClass = "bg-emerald-600/20 border-emerald-500 text-emerald-400"; // Correct
                            } else if (isSelected) {
                                btnClass = "bg-rose-600/20 border-rose-500 text-rose-400"; // Wrong selected
                            } else {
                                btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-50"; // Others
                            }
                        }

                        return (
                            <div key={optIdx} className="flex gap-3 relative group/item">
                                <button
                                    onClick={() => handleAnswer(optIdx)}
                                    disabled={showResult}
                                    className={cn(
                                        "w-full p-5 rounded-2xl border font-bold text-left transition-all relative overflow-hidden group min-h-[80px] md:min-h-[90px] flex items-center",
                                        btnClass
                                    )}
                                >
                                    <div className="flex items-center gap-4 z-10 relative w-full">
                                        <div className={cn(
                                            "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black transition-colors shrink-0",
                                            showResult && optIdx === currentQuestion.correct ? "bg-emerald-500 text-slate-900" : "bg-slate-900/50"
                                        )}>
                                            {String.fromCharCode(65 + optIdx)}
                                        </div>
                                        <div className="flex-1 text-sm font-medium">
                                            <span className={cn(
                                                "transition-opacity duration-300",
                                                showResult ? "opacity-100" : "opacity-0"
                                            )}>
                                                {currentQuestion.options[optIdx]}
                                            </span>
                                        </div>

                                        {/* Strikethrough Line for Eliminated */}
                                        {status === 'eliminated' && !showResult && (
                                            <div className="absolute inset-x-4 top-1/2 h-0.5 bg-slate-500/30 pointer-events-none" />
                                        )}

                                        {showResult && optIdx === currentQuestion.correct && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                        {showResult && isSelected && optIdx !== currentQuestion.correct && <XCircle className="w-5 h-5 text-rose-500" />}
                                    </div>
                                </button>

                                {/* Control Buttons (Right side) */}
                                {!showResult && (
                                    <div className="flex flex-col gap-2 justify-center shrink-0">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleOptionStatus(optIdx, 'eliminated'); }}
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center transition-all bg-slate-800 border border-slate-700 hover:scale-110 active:scale-95",
                                                status === 'eliminated' ? "bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-900/20" : "text-slate-500 hover:text-rose-400 hover:border-rose-500/30"
                                            )}
                                            title="Eliminate (X)"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleOptionStatus(optIdx, 'uncertain'); }}
                                            className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center transition-all bg-slate-800 border border-slate-700 hover:scale-110 active:scale-95",
                                                status === 'uncertain' ? "bg-amber-500 border-amber-500 text-slate-900 shadow-lg shadow-amber-900/20" : "text-slate-500 hover:text-amber-400 hover:border-amber-500/30"
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
                <p className="text-center text-slate-500 text-xs mt-8 pb-10">
                    * 듣기 평가입니다. 오디오를 먼저 듣고 정답을 선택하세요. {useTTS && "(AI 오디오 모드)"}
                </p>
            </div>
        </div>
    );
}
