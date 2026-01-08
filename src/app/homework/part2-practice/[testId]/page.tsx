'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Volume2, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { part2Data, Part2Question } from '@/data/part2';
import { cn } from "@/lib/utils";

export default function Part2Test() {
    const params = useParams();
    const router = useRouter();
    const testId = parseInt(params.testId as string);

    // Data
    const [questions, setQuestions] = useState<Part2Question[]>([]);
    const [currentIdx, setCurrentIdx] = useState(0);
    const [loading, setLoading] = useState(true);

    // Logic States
    const [mainQueue, setMainQueue] = useState<Part2Question[]>([]);
    const [wrongQueue, setWrongQueue] = useState<Part2Question[]>([]);
    const [isReviewMode, setIsReviewMode] = useState(false);
    const [isReportMode, setIsReportMode] = useState(false);

    // UI States
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);

    // Refs
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!testId) return;
        const data = part2Data[testId];
        if (!data) {
            alert("해당 테스트 데이터가 없습니다.");
            router.push('/homework/part2-practice');
            return;
        }
        setQuestions(data);
        setMainQueue(data);
        setLoading(false);
    }, [testId, router]);

    // Audio setup
    useEffect(() => {
        if (!loading && questions.length > 0) {
            const currentQ = isReviewMode ? wrongQueue[currentIdx] : mainQueue[currentIdx];
            if (!currentQ) return;

            const tNum = String(testId).padStart(2, '0');
            const qNum = String(currentQ.id).padStart(2, '0');
            // Path: /audio/Test_01-07.mp3
            const audioPath = `/audio/Test_${tNum}-${qNum}.mp3`;

            if (audioRef.current) {
                audioRef.current.src = audioPath;
                audioRef.current.load();
                setProgress(0);
                setIsPlaying(false);
                setSelectedOption(null);
            }
        }
    }, [loading, questions, currentIdx, isReviewMode, mainQueue, wrongQueue, testId]);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(e => alert("오디오 파일이 없습니다. (public/audio 폴더 확인 필요)"));
            setIsPlaying(true);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const duration = audioRef.current.duration || 1;
            setProgress((audioRef.current.currentTime / duration) * 100);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0); // Reset visualizer
    };

    const handleAnswer = (choice: number) => {
        if (isProcessing) return;
        setIsProcessing(true);
        setSelectedOption(choice);

        const currentQ = isReviewMode ? wrongQueue[currentIdx] : mainQueue[currentIdx];
        const isCorrect = choice === currentQ.correct;

        // Visual Feedback (Delay)
        setTimeout(() => {
            if (isCorrect) {
                if (isReviewMode) {
                    // Remove from wrong queue if review mode correct
                    // Actually, usually review mode iterates all wrong questions until correct? 
                    // Legacy logic: Just remove from queue and load next or finish.
                    const newWrong = [...wrongQueue];
                    newWrong.splice(currentIdx, 1);
                    setWrongQueue(newWrong);

                    if (newWrong.length === 0) {
                        finishAll();
                    } else {
                        // Adjust index if needed
                        if (currentIdx >= newWrong.length) {
                            setCurrentIdx(0);
                        }
                        // Trigger next load (useEffect will pick up new q)
                    }
                } else {
                    // Normal Mode
                    if (currentIdx < mainQueue.length - 1) {
                        setCurrentIdx(prev => prev + 1);
                    } else {
                        setIsReportMode(true);
                    }
                }
            } else {
                // Wrong
                if (!isReviewMode) {
                    // Add to wrong queue if not already there
                    if (!wrongQueue.some(q => q.id === currentQ.id)) {
                        setWrongQueue(prev => [...prev, currentQ]);
                    }
                }
                // Show Correct Answer text (Option B etc)
                // And auto replay after short delay? Legacy does replay.
                setTimeout(() => {
                    handlePlay();
                }, 1000);
            }
            setIsProcessing(false);
            // If correct, the useEffect will trigger reset of selection due to index/queue change
            // If incorrect, we stay on same question but re-enable buttons after delay
            if (isCorrect) setSelectedOption(null);
            else setSelectedOption(null); // Actually for incorrect we want to let them try again? 
            // Legacy: "setTimeout ... disabled = false". So yes, retry allowed.
        }, 800);
    };

    const startReview = () => {
        setIsReviewMode(true);
        setIsReportMode(false);
        setCurrentIdx(0);
        // useEffect will reload Q1 from wrongQueue
    };

    const finishAll = async () => {
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            const finalScore = mainQueue.length - (isReviewMode ? 0 : wrongQueue.length); // Calculation is tricky if we don't track initial wrongs. 
            // Legacy tracks exactly `wrongQueue` populated during main run.
            // But wait, if we are calling finishAll from Review Mode used up queue, wrongQueue is empty!
            // We need to store initial wrong count?
            // Legacy logic: `const finalScore = mainQueue.length - wrongQueue.length`. 
            // In legacy, `wrongQueue.splice` happens in review. So if review is perfect, score becomes full?
            // Actually legacy `finishAll` calculates `main - wrong`. 
            // If called from report overlay, `wrong` has items.
            // If called from review finish, `wrong` is empty.
            // This means if you review all, you get full score. Valid for training app.

            try {
                await setDoc(doc(db, "Manager_Results", `${user.userId}_Part2_${Date.now()}`), {
                    student: user.userName,
                    studentId: user.userId,
                    studentClass: user.userClass || "",
                    unit: `LC_Part2_Test${testId}`,
                    score: questions.length - wrongQueue.length, // Current wrong count
                    total: questions.length,
                    timestamp: serverTimestamp()
                });
                alert("학습 결과가 저장되었습니다.");
            } catch (e) {
                console.error(e);
            }
        }
        router.push('/homework/part2-practice');
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    if (isReportMode) {
        return (
            <div className="max-w-md mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center p-6 space-y-8">
                <div>
                    <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">MISSION COMPLETE</h2>
                    <p className="text-slate-400 font-bold">틀린 문제를 확인하고 복습하세요.</p>
                </div>

                <div className="bg-slate-800 rounded-[2.5rem] p-8 w-full border border-slate-700 shadow-xl">
                    <p className="text-emerald-400 font-black text-xs uppercase tracking-[0.2em] mb-4">Wrong Questions</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {wrongQueue.length === 0 ? (
                            <span className="text-emerald-400 font-black text-xl">Perfect Score! 🎉</span>
                        ) : (
                            wrongQueue.map(q => (
                                <span key={q.id} className="px-4 py-2 bg-rose-500/20 text-rose-500 rounded-xl border border-rose-500/30 text-sm font-bold">
                                    Q.{q.id}
                                </span>
                            ))
                        )}
                    </div>
                </div>

                <div className="space-y-4 w-full">
                    {wrongQueue.length > 0 && (
                        <Button onClick={startReview} className="w-full h-16 bg-emerald-600 hover:bg-emerald-500 rounded-2xl font-black text-lg">
                            <RotateCcw className="mr-2" /> 틀린 문제 재학습
                        </Button>
                    )}
                    <Button onClick={finishAll} variant="outline" className="w-full h-16 bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-300 rounded-2xl font-black text-lg">
                        학습 종료 (저장)
                    </Button>
                </div>
            </div>
        );
    }

    const currentQ = isReviewMode ? wrongQueue[currentIdx] : mainQueue[currentIdx];
    if (!currentQ) return null; // Should not happen

    return (
        <div className="max-w-md mx-auto min-h-screen pb-20 pt-6 px-6">
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                className="hidden"
            />

            <div className="flex justify-between items-center mb-8">
                <Button variant="ghost" className="text-slate-400 px-0" onClick={() => router.push('/homework/part2-practice')}>Cancel</Button>
                <span className="font-black text-emerald-400 text-lg uppercase tracking-widest italic animate-pulse">
                    {isReviewMode ? `REVIEW Q.${currentQ.id}` : `TEST ${testId} Q.${currentQ.id}`}
                </span>
                <div className="w-10"></div>
            </div>

            {/* Audio Visualizer Card */}
            <div className="bg-white rounded-[3rem] p-12 text-center shadow-2xl relative overflow-hidden mb-8 min-h-[200px] flex items-center justify-center">
                <div
                    className="absolute inset-x-0 bottom-0 h-2 bg-emerald-100 origin-left transition-transform duration-100 ease-linear"
                    style={{ transform: `scaleX(${progress / 100})` }}
                />
                <button
                    onClick={handlePlay}
                    disabled={isPlaying}
                    className="w-24 h-24 bg-emerald-600 hover:bg-emerald-500 rounded-full text-white shadow-2xl active:scale-95 transition-all flex items-center justify-center disabled:opacity-80 disabled:scale-100"
                >
                    {isPlaying ? <Volume2 className="w-10 h-10 animate-bounce" /> : <Play className="w-10 h-10 ml-2" />}
                </button>
                <p className="absolute bottom-6 w-full text-slate-400 font-black text-[10px] uppercase tracking-widest left-0 text-center">
                    {isPlaying ? "Playing..." : "Listen & Select"}
                </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
                {[0, 1, 2].map((optIdx) => {
                    const isSelected = selectedOption === optIdx;
                    // Logic for showing Answer text if wrong?
                    // Legacy shows: btn-label text changes to options[choice] text if Wrong.
                    // Initially shows (A), (B), (C).

                    // But if this button was clicked and is WRONG, show text.
                    // We don't have per-button state easily unless we track it or just use "selectedOption".
                    // If selectedOption == optIdx (and we are in processing), show state.

                    let content = `(${String.fromCharCode(65 + optIdx)})`;
                    if (isSelected && isProcessing) {
                        if (optIdx !== currentQ.correct) {
                            content = currentQ.options[optIdx]; // Show Script if wrong
                        }
                    }

                    return (
                        <button
                            key={optIdx}
                            onClick={() => handleAnswer(optIdx)}
                            disabled={isProcessing}
                            className={cn(
                                "w-full py-5 rounded-2xl font-bold text-left px-6 border transition-all duration-300",
                                isSelected && isProcessing
                                    ? (optIdx === currentQ.correct ? "bg-green-600 border-green-500 text-white" : "bg-rose-600 border-rose-500 text-white")
                                    : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750 active:scale-95"
                            )}
                        >
                            <span className="flex items-center justify-between">
                                <span>{content}</span>
                                {isSelected && isProcessing && (
                                    optIdx === currentQ.correct ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />
                                )}
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
    );
}
