'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Mic, Trophy, ChevronLeft, Volume2, ArrowRight } from "lucide-react";
import { part2Data, Part2Question } from '@/data/part2';
import { cn } from "@/lib/utils";

// Add global type for Web Speech API
declare global {
    interface Window {
        webkitSpeechRecognition: any;
        SpeechRecognition: any;
    }
}

// Child Component that resets fully when index/step changes
function ShadowingStep({
    data,
    index,
    total,
    onNext,
    step, // 'question' | 'A' | 'B' | 'C'
    setStep
}: {
    data: Part2Question,
    index: number,
    total: number,
    onNext: (isSuccess: boolean) => void,
    step: 'question' | 'A' | 'B' | 'C',
    setStep: (s: 'question' | 'A' | 'B' | 'C') => void
}) {
    // Local state
    const [isBlur, setIsBlur] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [attemptCount, setAttemptCount] = useState(0);
    const [feedback, setFeedback] = useState("");

    const synth = useRef<SpeechSynthesis | null>(null);
    const recognition = useRef<any>(null);

    // Get current text based on step
    const getCurrentText = () => {
        switch (step) {
            case 'question': return data.script || ""; // Question text (assuming script field has it)
            case 'A': return `(A) ${data.options[0]}`;
            case 'B': return `(B) ${data.options[1]}`;
            case 'C': return `(C) ${data.options[2]}`;
            default: return "";
        }
    };

    // We don't have Korean translation in standard Part2Data structure usually for Q/Options individually 
    // unless enriched. For now, we will just show English.
    const currentText = getCurrentText();

    // Initial play effect
    useEffect(() => {
        if (typeof window !== 'undefined') {
            synth.current = window.speechSynthesis;
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognition.current = new SpeechRecognition();
                recognition.current.lang = 'en-US';
                recognition.current.interimResults = false;

                recognition.current.onresult = (event: any) => {
                    const speech = event.results[0][0].transcript;
                    handleResult(speech);
                };

                recognition.current.onend = () => {
                    setIsListening(false);
                };

                recognition.current.onerror = (event: any) => {
                    setIsListening(false);
                    if (event.error === 'no-speech') {
                        setFeedback("No speech detected.");
                    }
                };
            }

            // Auto play
            setTimeout(() => playAudio(), 500);
        }

        return () => {
            if (synth.current) synth.current.cancel();
            if (recognition.current) recognition.current.stop();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [step, data.id]);

    // Reset state when step changes
    useEffect(() => {
        setIsBlur(true);
        setTranscript("");
        setAttemptCount(0);
        setFeedback("");
    }, [step, data.id]);

    const playAudio = () => {
        if (!synth.current) return;
        synth.current.cancel();
        setIsPlaying(true);

        const utter = new SpeechSynthesisUtterance(currentText.replace(/^\([ABC]\)\s*/, "")); // Remove (A) for TTS
        utter.lang = 'en-US';
        utter.rate = 0.85; // Slightly faster for Part 2

        utter.onend = () => {
            setIsPlaying(false);
            // Critical Change: Do NOT unblur here. Keep it hidden until user speaks or fails.
            // setIsBlur(false); 
        };

        synth.current.speak(utter);
    };

    const startListening = () => {
        if (!recognition.current) {
            alert("Chrome browser required for speech recognition.");
            return;
        }
        setIsListening(true);
        setTranscript("");
        setFeedback("Listening...");
        try {
            recognition.current.start();
        } catch (e) {
            console.error(e);
            setIsListening(false);
        }
    };

    const handleResult = (speech: string) => {
        setTranscript(speech);

        const target = currentText.replace(/^\([ABC]\)\s*/, "").toLowerCase().replace(/[.,!?]/g, "").trim();
        const input = speech.toLowerCase().replace(/[.,!?]/g, "").trim();

        // Check match
        const isExactMatch = target === input;

        const targetWords = target.split(' ');
        const inputWords = input.split(' ');
        const matchCount = inputWords.filter(w => targetWords.includes(w)).length;
        const isFlexibleMatch = matchCount >= Math.ceil(targetWords.length * 0.7); // 70% threshold

        const isPass = isExactMatch || isFlexibleMatch;

        if (isPass) {
            setFeedback("Excellent! 🎉");
            setIsBlur(false); // Reveal on success
            setTimeout(() => {
                advanceStep();
            }, 1000);
        } else {
            const nextAttempt = attemptCount + 1;
            setAttemptCount(nextAttempt);

            // Reveal text on failure so they can practice
            setIsBlur(false);

            if (nextAttempt >= 3) {
                setFeedback("Let's move on ⏭️");
                setTimeout(() => advanceStep(), 1500);
            } else {
                setFeedback("Try Again! (Script Revealed)");
                setTimeout(() => {
                    setFeedback("");
                    // Do NOT auto replay here if we want them to read it first? 
                    // Or auto replay so they can match sound to text? User didn't specify, but auto replay is helpful.
                    playAudio();
                }, 1500);
            }
        }
    };

    const advanceStep = () => {
        if (step === 'question') setStep('A');
        else if (step === 'A') setStep('B');
        else if (step === 'B') setStep('C');
        else if (step === 'C') onNext(true); // Finish this question
    };

    const getStepLabel = () => {
        if (step === 'question') return "Question";
        return `Option ${step}`;
    };

    return (
        <div className="max-w-3xl mx-auto min-h-screen pb-20 pt-2 md:pt-6 px-4 md:px-6">
            <div className="flex justify-between items-end mb-4 md:mb-6 px-4 md:px-0">
                <div>
                    <h2 className="text-xl md:text-2xl font-black italic flex items-center gap-2 text-white">
                        Shadowing
                        <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full not-italic">Part 2</span>
                    </h2>
                    <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mt-1">
                        Question {data.id} - {getStepLabel()}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-indigo-400 font-black text-xl md:text-2xl">{index + 1}</span>
                    <span className="text-slate-600 font-bold"> / {total}</span>
                </div>
            </div>

            {/* Progress Indicators for Steps */}
            <div className="flex gap-2 mb-6 justify-center">
                {['question', 'A', 'B', 'C'].map((s) => (
                    <div key={s} className={cn(
                        "h-1.5 rounded-full transition-all",
                        s === step ? "w-8 bg-indigo-500" :
                            (['question', 'A', 'B', 'C'].indexOf(s) < ['question', 'A', 'B', 'C'].indexOf(step) ? "w-2 bg-indigo-500/50" : "w-2 bg-slate-800")
                    )} />
                ))}
            </div>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 min-h-[200px] flex items-center justify-center relative overflow-hidden shadow-2xl mb-8">
                <div className={cn("transition-all duration-700 text-center", isBlur ? "blur-md opacity-30" : "blur-0 opacity-100")}>
                    <p className="text-slate-900 font-black text-xl leading-relaxed italic tracking-tight">{currentText}</p>
                </div>

                {isBlur && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button
                            onClick={playAudio}
                            disabled={isPlaying}
                            className="w-20 h-20 bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-2xl shadow-indigo-500/30 flex items-center justify-center text-white transition-transform active:scale-95 disabled:opacity-80 disabled:scale-100"
                        >
                            {isPlaying ? <Volume2 className="w-8 h-8 animate-pulse" /> : <Play className="w-8 h-8 ml-1" />}
                        </button>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <div className="min-h-[20px] text-center">
                    {attemptCount > 0 && <p className="text-rose-500 font-black text-xs uppercase tracking-widest">Attempt {attemptCount} / 3</p>}
                    {feedback && (
                        <p className={cn(
                            "font-bold text-lg animate-bounce",
                            feedback.includes("Excellent") ? "text-emerald-500" : "text-indigo-400"
                        )}>
                            {feedback}
                        </p>
                    )}
                </div>

                <div className="flex gap-3">
                    <Button
                        onClick={startListening}
                        disabled={isListening || isPlaying}
                        className={cn(
                            "flex-1 h-24 rounded-[2rem] text-xl font-black transition-all shadow-lg flex flex-col gap-2",
                            isListening ? "bg-rose-500 hover:bg-rose-600 text-white scale-95 ring-4 ring-rose-500/30" :
                                (isPlaying ? "bg-slate-800 text-slate-600" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30")
                        )}
                    >
                        <Mic className={cn("w-6 h-6", isListening && "animate-pulse")} />
                        <span className="text-sm uppercase tracking-widest opacity-80 font-bold">
                            {isPlaying ? "Listen First" : (isListening ? "Listening..." : "Tap & Speak")}
                        </span>
                    </Button>
                    {!isBlur && (
                        <Button
                            onClick={advanceStep}
                            className="w-20 h-24 rounded-[2rem] bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-indigo-500 border-none transition-colors flex flex-col gap-2 items-center justify-center group"
                        >
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Next</span>
                        </Button>
                    )}
                </div>

                <div className="min-h-[40px] text-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <p className="text-slate-300 italic font-medium text-sm">
                        {transcript || "..."}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Part2ShadowingPage() {
    const params = useParams();
    const router = useRouter();
    const testId = parseInt(params.testId as string);

    const [questions, setQuestions] = useState<Part2Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [step, setStep] = useState<'question' | 'A' | 'B' | 'C'>('question');
    const [loading, setLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (!testId) return;
        const data = part2Data[testId];
        if (!data) {
            alert("No data found.");
            router.push('/homework/part2');
            return;
        }
        setQuestions(data);
        setLoading(false);
    }, [testId, router]);

    const handleNext = (isSuccess: boolean) => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setStep('question');
        } else {
            setIsFinished(true);
            saveResult();
        }
    };

    const saveResult = async () => {
        const userStr = localStorage.getItem('toeic_user');
        if (!userStr) return;
        const user = JSON.parse(userStr);
        try {
            await addDoc(collection(db, "Manager_Results"), {
                student: user.userName || user.name || "Unknown",
                studentId: user.userId || user.uid || "Guest",
                unit: `Shadowing_LC_Part2_test${testId}`,
                score: questions.length, // Just completion count for now
                total: questions.length,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div className="flex h-screen items-center justify-center bg-slate-950"><Loader2 className="animate-spin text-emerald-500" /></div>;

    if (isFinished) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6">
                <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-500 shadow-2xl">
                    <Trophy className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase text-white">Shadowing Complete!</h2>
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-8">
                    <Button onClick={() => router.push('/homework/part2')} className="h-14 bg-indigo-600 rounded-2xl font-black">
                        Lobby
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <ShadowingStep
                key={`${currentIndex}-${step}`} // Remount on change to reset state
                data={questions[currentIndex]}
                index={currentIndex}
                total={questions.length}
                onNext={handleNext}
                step={step}
                setStep={setStep}
            />
        </div>
    );
}
