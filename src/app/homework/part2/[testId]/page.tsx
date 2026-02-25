'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Volume2, RotateCcw, CheckCircle, XCircle, AlertTriangle, X, Triangle, ChevronLeft, ChevronRight } from "lucide-react";
import { part2Data, Part2Question } from '@/data/part2';
import { cn } from "@/lib/utils";
import { PerformanceSyncService } from '@/services/performanceSyncService';

export default function Part2Test() {
    const params = useParams();
    const router = useRouter();
    const testId = parseInt(params.testId as string);
    const [isLoadingMock, setIsLoadingMock] = useState(false);
    const [mockAnswers, setMockAnswers] = useState<Record<string, string>>({});

    // Data
    const [questions, setQuestions] = useState<Part2Question[]>([]);

    // Logic States
    const [mainQueue, setMainQueue] = useState<Part2Question[]>([]);
    const [wrongQueue, setWrongQueue] = useState<Part2Question[]>([]);

    // Mode States
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [reSolveMode, setReSolveMode] = useState(false);
    const [originalAnswers, setOriginalAnswers] = useState<Record<string, string>>({});
    const [isReportMode, setIsReportMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // UI States
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [playDelay, setPlayDelay] = useState(2000); // 2s initial delay
    const [progress, setProgress] = useState(0);
    const [useTTS, setUseTTS] = useState(false);
    const [optionStatus, setOptionStatus] = useState<Record<number, 'eliminated' | 'uncertain'>>({}); // Track X/Triangle status
    const [notification, setNotification] = useState<string | null>(null);
    const [isReady, setIsReady] = useState(false); // Flag for state restoration check
    const [isAudioBlocked, setIsAudioBlocked] = useState(false); // Handle browser auto-play block
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    // Refs
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const synth = useRef<SpeechSynthesis | null>(null);
    const playbackId = useRef<number>(0); // CRITICAL: Unique ID for current playback session

    // Initialize
    useEffect(() => {
        setIsMounted(true);
        if (!testId) return;

        // NEW: Check for Drill Mode and Tag
        const urlParams = new URLSearchParams(window.location.search);
        const mode = urlParams.get('mode');
        const tag = urlParams.get('tag');

        if (mode === 'drill' && tag) {
            console.log(`[Part2 Drill] mode=${mode}, tag=${tag}`);
            // Pool questions from ALL tests that match the tag
            const drilledQuestions: Part2Question[] = [];
            Object.values(part2Data).forEach(testSet => {
                testSet.forEach(q => {
                    if (q.questionType === tag) {
                        drilledQuestions.push(q);
                    }
                });
            });

            console.log(`[Part2 Drill] Found ${drilledQuestions.length} questions with questionType=${tag}`);
            console.log(`[Part2 Drill] First 3 questions:`, drilledQuestions.slice(0, 3).map(q => ({ id: q.id, type: q.questionType, script: q.script.substring(0, 30) })));

            if (drilledQuestions.length > 0) {
                setQuestions(drilledQuestions.slice(0, 15)); // Limit to 15 for a focused drill
                setMainQueue(drilledQuestions.slice(0, 15));
                setLoading(false);
                setTimeout(() => setIsReady(true), 0);
                return;
            } else {
                setNotification(`유형(${tag}) 관련 문제가 부족하여 일반 테스트를 진행합니다.`);
                setTimeout(() => setNotification(null), 3000);
            }
        }

        const data = part2Data[testId];
        if (!data) {
            alert("해당 테스트 데이터가 없습니다.");
            router.push('/homework/part2');
            return;
        }
        // NEW: Check for saved progress (only in normal mode)
        const saved = !mode ? localStorage.getItem(`part2_progress_test_${testId}`) : null;

        // ✅ NEW: Handle mock review mode
        const mockAttemptId = urlParams.get('mockAttemptId');
        if (mode === 'review' && mockAttemptId) {
            const fetchMockData = async () => {
                setIsLoadingMock(true);
                try {
                    const { doc, getDoc } = await import('firebase/firestore');
                    const docRef = doc(db, 'MockTestAttempts', mockAttemptId);
                    const snap = await getDoc(docRef);

                    if (snap.exists()) {
                        const mData = snap.data();
                        const mAnswers = mData.answers || {};
                        setMockAnswers(mAnswers);
                        setOriginalAnswers(mAnswers);

                        const testQuestions = part2Data[testId] || [];

                        // ✅ Standardize ID format for lookup (p2-tX-qY)
                        const getAnswer = (qid: string) => {
                            if (mAnswers[qid]) return mAnswers[qid];
                            const num = qid.split('-q')[1] || qid.replace(/[^\d]/g, '');
                            const variations = [
                                `p2-${testId}-q${num}`, `p2-t${testId}-q${num}`,
                                num
                            ];
                            for (const v of variations) {
                                if (mAnswers[v]) return mAnswers[v];
                            }
                            return undefined;
                        };

                        const wrongQs = testQuestions.filter(q => {
                            const userAns = getAnswer(q.id);
                            return userAns && userAns !== q.correctAnswer;
                        });

                        const queueToUse = wrongQs.length > 0 ? wrongQs : testQuestions;
                        setQuestions(queueToUse);
                        setMainQueue(queueToUse);
                        setWrongQueue(wrongQs);

                        if (mode === 'review') {
                            setIsReviewMode(true);
                            setReSolveMode(false);
                            setShowResult(true);
                        } else {
                            setReSolveMode(true);
                            setIsReviewMode(false);
                            setShowResult(false);
                        }
                    }
                } catch (err) {
                    console.error("Error fetching mock data:", err);
                } finally {
                    setIsLoadingMock(false);
                    setLoading(false);
                    setTimeout(() => setIsReady(true), 0);
                }
            };
            fetchMockData();
            return;
        }

        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (parsed.mainQueue && parsed.mainQueue.length > 0) {
                    setQuestions(parsed.mainQueue);
                    setMainQueue(parsed.mainQueue);
                } else {
                    setQuestions(data);
                    setMainQueue(data);
                }

                if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
                if (parsed.wrongQueue) setWrongQueue(parsed.wrongQueue);
            } catch (e) {
                console.error("Failed to restore LC progress", e);
                setQuestions(data);
                setMainQueue(data);
            }
        } else {
            setQuestions(data);
            setMainQueue(data);
        }
        setLoading(false);
        // Mark as ready AFTER progress restoration
        setTimeout(() => setIsReady(true), 0);

        if (typeof window !== 'undefined') {
            synth.current = window.speechSynthesis;
        }

        return () => {
            if (synth.current) synth.current.cancel();
            playbackId.current++; // Invalidate any running TTS on unmount
        };
    }, [testId, router]);

    // Current Question Data
    const currentQueue = (isReviewMode || reSolveMode)
        ? (wrongQueue.length > 0 ? wrongQueue : mainQueue)
        : mainQueue;
    const currentQuestion = currentQueue[currentIndex];

    // Audio Playback Engine
    useEffect(() => {
        if (currentQuestion && !isReportMode && isReady) {
            // STOP EVERYTHING
            playbackId.current++; // Invalidate previous sessions
            if (synth.current) synth.current.cancel();
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }

            // Reset state
            setSelectedAnswer(null);
            setShowResult(isReviewMode);
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
    }, [currentQuestion?.id, isReportMode, playDelay, isReady]);

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

        const tNum = String(currentQuestion.testId).padStart(2, '0');
        const qNum = String(currentQuestion.questionNo);
        audioRef.current.src = `/audio/ETS_TOEIC_3/Test_${tNum}/TEST ${tNum}_PART 2_${qNum}.mp3`;

        audioRef.current.play()
            .then(() => {
                setIsAudioBlocked(false);
                if (myId !== playbackId.current) {
                    audioRef.current?.pause(); // Stale request
                }
            })
            .catch(e => {
                if (myId !== playbackId.current) return;

                if (e.name === 'NotAllowedError') {
                    console.log("Audio play blocked by browser. User interaction required.");
                    setIsAudioBlocked(true);
                    setIsPlaying(false);
                    return;
                }

                // Ignore play interruption errors (expected when skipping/answering fast)
                if (e.name === 'AbortError' || e.message.includes('interrupted')) return;

                console.error("Audio error:", e);
                handleAudioError(myId);
            });
    };

    const handleAudioError = (originId: number) => {
        // Only switch if this error came from the CURRENT active session
        if (originId !== playbackId.current) return;

        console.log("Audio file not found, switching to TTS");
        if (!useTTS) {
            setNotification("오디오 파일이 없어 AI 음성으로 재생합니다.");
            setTimeout(() => setNotification(null), 3000);
        }
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

            await speak(`Number ${currentQuestion.questionNo}`, myId);
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

        const choiceLetter = String.fromCharCode(65 + choice); // 0 -> 'A', 1 -> 'B', 2 -> 'C'
        const isCorrect = choiceLetter === currentQuestion.correctAnswer;

        if (!isCorrect && !isReviewMode) {
            if (!wrongQueue.find(q => q.id === currentQuestion.id)) {
                setWrongQueue(prev => [...prev, currentQuestion]);
            }
        }

        setTimeout(() => {
            setPlayDelay(1000);

            if (isReviewMode || reSolveMode) {
                if (currentIndex < currentQueue.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    finishAll();
                }
            } else {
                if (currentIndex < mainQueue.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                } else {
                    finishAll(false); // Immediate save without navigation
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

    const finishAll = async (navigate = true) => {
        if (reSolveMode) {
            setIsReportMode(true);
            return;
        }
        const score = questions.length - wrongQueue.length;
        const userStr = localStorage.getItem('toeic_user');

        // Create detailed incorrect questions data with unique IDs (e.g., p2-t1-q7)
        const incorrectQuestions = wrongQueue.map(q => ({
            id: q.id, // Standardized unique ID
            classification: q.questionType || 'Unknown'
        }));

        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    type: 'part2_test',
                    detail: `Test ${testId}`,
                    unit: `LC_Part2_Test${testId}`,
                    score: score,
                    total: questions.length,
                    wrongCount: wrongQueue.length,
                    incorrectQuestions: incorrectQuestions, // Added for weakness analysis
                    timestamp: serverTimestamp()
                });

                // ✅ NEW: Sync Performance Summary after submission
                await PerformanceSyncService.syncUserSummary(user.userId || user.uid);
            } catch (e) {
                console.error("Save error:", e);
            }
        }
        localStorage.removeItem(`part2_progress_test_${testId}`);
        if (navigate) {
            const urlParams = new URLSearchParams(window.location.search);
            const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
            router.push(isAi ? '/student/analysis' : '/homework/part2');
        }
    };

    if (!isMounted || loading) return <div className="flex h-screen items-center justify-center bg-slate-950"><Loader2 className="animate-spin text-emerald-500" /></div>;

    if (isReportMode) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className={cn(
                    "w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mb-6 ring-1 shadow-2xl",
                    reSolveMode ? "bg-rose-500/10 text-rose-500 ring-rose-500/50 shadow-rose-500/20" : "bg-emerald-500/10 text-emerald-500 ring-emerald-500/50 shadow-emerald-500/20"
                )}>
                    {reSolveMode ? <RotateCcw className="w-12 h-12" /> : <CheckCircle className="w-12 h-12" />}
                </div>
                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    {reSolveMode ? "오답 다시 풀기 완료" : "학습 완료"}
                </h2>
                <p className={cn("font-bold tracking-widest text-xs uppercase mb-8", reSolveMode ? "text-rose-500" : "text-emerald-500")}>
                    Part 2 • Test {testId} • {reSolveMode ? "Mock Review Mode" : "Mission Complete"}
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{questions.length - wrongQueue.length}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {reSolveMode ? currentQueue.length : questions.length}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-3 w-full max-w-xs">
                    <Button
                        onClick={() => {
                            setIsReviewMode(true);
                            setReSolveMode(false);
                            setCurrentIndex(0);
                            setIsReportMode(false);
                            // Ensure results are always shown in review mode
                            setShowResult(true);
                        }}
                        className="w-full h-14 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all"
                    >
                        오답 확인 (답안/해설)
                    </Button>
                    <Button
                        onClick={() => {
                            setReSolveMode(true);
                            setIsReviewMode(false);
                            setCurrentIndex(0);
                            setSelectedAnswer(null);
                            setShowResult(false);
                            setIsReportMode(false);
                        }}
                        className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/20 transition-all active:scale-95"
                    >
                        오답 다시 풀기
                    </Button>
                    <Button
                        onClick={() => finishAll()}
                        variant="ghost"
                        className="w-full h-12 text-slate-500 hover:text-white text-sm font-bold"
                    >
                        학습 종료
                    </Button>
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

            {isAudioBlocked && (
                <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-500">
                    <div className="max-w-xs w-full bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6">
                        <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto ring-4 ring-emerald-500/5">
                            <Volume2 className="w-10 h-10 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white tracking-tight">오디오 재생 준비</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">학습 시작을 위해 아래 버튼을 눌러주세요.</p>
                        </div>
                        <Button
                            onClick={() => {
                                setIsAudioBlocked(false);
                                handlePlay();
                            }}
                            className="w-full h-16 bg-emerald-600 hover:bg-emerald-500 text-white text-lg font-black rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-all"
                        >
                            <Play className="mr-2 w-6 h-6 fill-current" /> 학습 시작하기
                        </Button>
                    </div>
                </div>
            )}

            <div className="py-4 md:p-6 flex justify-between items-end max-w-3xl mx-auto px-4 md:px-6 relative">
                {notification && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-slate-800 text-amber-500 px-4 py-2 rounded-full shadow-lg border border-amber-500/20 text-xs font-bold whitespace-nowrap z-50 animate-in fade-in slide-in-from-bottom-2">
                        <AlertTriangle className="w-3 h-3 inline mr-1.5" />
                        {notification}
                    </div>
                )}
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <button
                            onClick={() => setShowExitConfirm(true)}
                            className="bg-slate-800 p-1 rounded-md text-slate-400 hover:text-white mr-1"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <span className={cn("px-2 py-0.5 rounded text-[10px] font-black uppercase text-white", isReviewMode ? "bg-rose-500" : "bg-emerald-600")}>
                            {isReviewMode ? "오답 확인" : `Test ${testId}`}
                        </span>

                        {!isReviewMode && !isReportMode && (
                            <button
                                onClick={() => {
                                    // Save Progress & Exit
                                    if (currentIndex > 0 || Object.keys(wrongQueue).length > 0) {
                                        localStorage.setItem(`part2_progress_test_${testId}`, JSON.stringify({
                                            currentIndex,
                                            wrongQueue,
                                            // mainQueue might be shuffled? if so save it too. 
                                            // currently mainQueue is static from data, so just index is enough unless shuffle added later.
                                            // saving mainQueue is safer if we add shuffle.
                                            mainQueue
                                        }));
                                    }
                                    const urlParams = new URLSearchParams(window.location.search);
                                    const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                                    router.push(isAi ? '/student/analysis' : '/homework/part2');
                                }}
                                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 flex items-center gap-1 ml-1"
                            >
                                💾 저장하고 나가기
                            </button>
                        )}
                        {currentQuestion?.questionType === 'Indirect' && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> 우회적 답변
                            </span>
                        )}
                        <audio
                            ref={audioRef}
                            src={`/audio/ETS_TOEIC_3/Test_${String(testId).padStart(2, '0')}/TEST ${String(testId).padStart(2, '0')}_PART 2_${currentQuestion.questionNo}.mp3`}
                            key={`${currentIndex}-${currentQuestion?.id}`}
                        />
                    </div>
                    <h1 className="text-xl md:text-2xl font-black text-white italic tracking-tighter">
                        Question {currentQuestion.questionNo}
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
                        {isPlaying ? (useTTS ? "AI 음성 재생 중..." : "재생 중...") : "집중해서 들어주세요"}
                    </p>
                </div>

                {/* Options */}
                <div className="space-y-3 px-4 md:px-0">
                    {/* Review mode script display */}
                    {showResult && (
                        <div className="mb-6 p-6 bg-slate-900/80 border border-slate-800 rounded-3xl animate-in fade-in slide-in-from-top-4 duration-500">
                            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2 italic">Question Script</p>
                            <p className="text-white font-bold text-lg leading-relaxed italic">
                                "{currentQuestion.script}"
                            </p>
                        </div>
                    )}

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
                            const choiceLetter = String.fromCharCode(65 + optIdx);
                            if (choiceLetter === currentQuestion.correctAnswer) {
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
                                            showResult && String.fromCharCode(65 + optIdx) === currentQuestion.correctAnswer ? "bg-emerald-500 text-slate-900" : "bg-slate-900/50"
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

                                        {showResult && String.fromCharCode(65 + optIdx) === currentQuestion.correctAnswer && <CheckCircle className="w-5 h-5 text-emerald-500" />}
                                        {showResult && isSelected && String.fromCharCode(65 + optIdx) !== currentQuestion.correctAnswer && <XCircle className="w-5 h-5 text-rose-500" />}
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

                {/* Navigation for Review Mode */}
                {isReviewMode && (
                    <div className="flex gap-4 mt-8 px-4 md:px-0">
                        <Button
                            variant="outline"
                            onClick={() => {
                                playbackId.current++; // Stop current playback
                                if (audioRef.current) audioRef.current.pause();
                                setCurrentIndex(prev => Math.max(0, prev - 1));
                            }}
                            disabled={currentIndex === 0}
                            className="flex-1 h-14 rounded-2xl border-slate-700 bg-transparent text-slate-400 hover:text-white font-bold"
                        >
                            <ChevronLeft className="mr-2 w-5 h-5" /> 이전 문제
                        </Button>
                        <Button
                            onClick={() => {
                                playbackId.current++; // Stop current playback
                                if (audioRef.current) audioRef.current.pause();
                                if (currentIndex < currentQueue.length - 1) {
                                    setCurrentIndex(prev => prev + 1);
                                } else {
                                    setIsReportMode(true);
                                }
                            }}
                            className="flex-1 h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black shadow-xl shadow-indigo-600/20"
                        >
                            {currentIndex < currentQueue.length - 1 ? "다음 문제" : "리뷰 종료"} <ChevronRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                )}
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
                                onClick={() => {
                                    const urlParams = new URLSearchParams(window.location.search);
                                    const isAi = urlParams.get('mode') === 'drill' || urlParams.get('direct') === 'true';
                                    router.push(isAi ? '/weakness/dashboard' : '/homework/part2');
                                }}
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
