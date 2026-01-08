'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, Play, Mic, Trophy, ChevronLeft, Volume2 } from "lucide-react";
import { shadowingData } from '@/data/shadowing';
import { cn } from "@/lib/utils";

// Add global type for Web Speech API
declare global {
    interface Window {
        webkitSpeechRecognition: any;
        SpeechRecognition: any;
    }
}

export default function ShadowingPractice() {
    const params = useParams();
    const router = useRouter();
    const setId = parseInt(params.setId as string);
    const day = 1; // Currently fixed to Day 1 data

    // Data
    const [sentences, setSentences] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // UI States
    const [isBlur, setIsBlur] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [attemptCount, setAttemptCount] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    // Refs
    const synth = useRef<SpeechSynthesis | null>(null);
    const recognition = useRef<any>(null);

    useEffect(() => {
        if (!setId) return;

        // Extract 20 sentences for the set
        const dayData = shadowingData[day] || [];
        const startIdx = (setId - 1) * 20;
        const endIdx = startIdx + 20;
        const setSentences = dayData.slice(startIdx, endIdx);

        if (setSentences.length === 0) {
            alert("해당 세트 데이터가 없습니다.");
            router.push('/homework/shadowing-part1');
            return;
        }

        setSentences(setSentences);
        setLoading(false);

        // Init Speech API
        if (typeof window !== 'undefined') {
            synth.current = window.speechSynthesis;
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognition.current = new SpeechRecognition();
                recognition.current.lang = 'en-US';
                recognition.current.interimResults = false;
                recognition.current.onresult = (event: any) => handleResult(event.results[0][0].transcript);
                recognition.current.onend = () => setIsListening(false);
                recognition.current.onerror = () => setIsListening(false);
            }
        }
    }, [setId, router]);

    const playAudio = () => {
        if (!synth.current) return;

        setIsPlaying(true);
        synth.current.cancel();

        const currentSentence = sentences[currentIndex];
        const utter = new SpeechSynthesisUtterance(currentSentence.en);
        utter.lang = 'en-US';
        utter.rate = 0.8; // Slow down slightly for practice

        utter.onend = () => {
            setIsPlaying(false);
            setIsBlur(false); // Reveal sentence after playing
        };

        synth.current.speak(utter);
    };

    const startListening = () => {
        if (!recognition.current) {
            alert("이 브라우저는 음성 인식을 지원하지 않습니다. 크롬을 사용해주세요.");
            return;
        }
        setIsListening(true);
        recognition.current.start();
    };

    const handleResult = (speech: string) => {
        const currentSentence = sentences[currentIndex];
        setTranscript(speech);

        // Normalize
        const target = currentSentence.en.toLowerCase().replace(/[.,!?]/g, "").trim();
        const input = speech.toLowerCase().replace(/[.,!?]/g, "").trim();

        // Simple match logic (allow partial match or if input includes target)
        // Or if input length is decent and has key words (matching legacy logic which was loose)
        // Legacy: if (result.includes(target) || result.split(' ').length > 3)

        if (input.includes(target) || (input.length > target.length * 0.5 && input.split(' ').length >= 3)) {
            setFeedback("Excellent!");
            setTimeout(() => nextSentence(), 1000);
        } else {
            setAttemptCount(prev => prev + 1);
            if (attemptCount + 1 >= 5) {
                setFeedback("5회 실패. 다음 문장으로 넘어갑니다.");
                setTimeout(() => nextSentence(), 1500);
            } else {
                setFeedback("다시 들어보세요! (Try Again)");
                setTimeout(() => {
                    setFeedback("");
                    playAudio(); // Auto replay
                }, 1500);
            }
        }
    };

    const nextSentence = () => {
        if (currentIndex < sentences.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setAttemptCount(0);
            setTranscript("");
            setFeedback("");
            setIsBlur(true); // Blur again for next sentence
        } else {
            finishSession();
        }
    };

    const finishSession = async () => {
        setIsFinished(true);
        const userStr = localStorage.getItem('toeic_user');
        if (!userStr) return;
        const user = JSON.parse(userStr);
        const unitName = `Shadowing_Unit01_Set${setId}`;

        try {
            await addDoc(collection(db, "Manager_Results"), {
                student: user.userName,
                studentId: user.userId,
                unit: unitName,
                score: 20, // Full completion
                total: 20,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    if (isFinished) {
        return (
            <div className="max-w-md mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
                <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-500 shadow-2xl">
                    <Trophy className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase text-white">Shadowing Complete!</h2>
                <p className="text-slate-400 font-bold mb-10">Set {setId} / 20 Sentences</p>

                <div className="grid grid-cols-2 gap-4 w-full">
                    <Button onClick={() => router.push('/homework/shadowing-part1')} className="h-14 bg-indigo-600 rounded-2xl font-black">
                        Lobby
                    </Button>
                    {setId < 5 && (
                        <Button onClick={() => window.location.href = `/homework/shadowing-part1/${setId + 1}`} variant="outline" className="h-14 rounded-2xl font-black bg-slate-800 border-none text-white hover:bg-slate-700">
                            Next Set
                        </Button>
                    )}
                </div>
            </div>
        );
    }

    const currentData = sentences[currentIndex];

    return (
        <div className="max-w-md mx-auto min-h-screen pb-20 pt-6 px-6">
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-black italic">Listen & Repeat</h2>
                    <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mt-1">Set {setId} / Sentence {currentIndex + 1}</p>
                </div>
                <div className="text-right">
                    <span className="text-indigo-400 font-black text-2xl">{currentIndex + 1}</span>
                    <span className="text-slate-600 font-bold"> / {sentences.length}</span>
                </div>
            </div>

            {/* Sentence Card */}
            <div className="bg-white rounded-[2.5rem] p-8 min-h-[280px] flex items-center justify-center relative overflow-hidden shadow-2xl mb-8">
                <div className={cn("transition-all duration-700 text-center", isBlur ? "blur-sm opacity-50" : "blur-0 opacity-100")}>
                    <p className="text-slate-900 font-black text-2xl leading-tight italic tracking-tight mb-4 ">{currentData.en}</p>
                    <p className="text-slate-500 font-bold text-sm">{currentData.ko}</p>
                </div>

                {/* Play Overlay */}
                {isBlur && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <button
                            onClick={playAudio}
                            disabled={isPlaying}
                            className="w-20 h-20 bg-indigo-600 hover:bg-indigo-500 rounded-full shadow-2xl shadow-indigo-500/30 flex items-center justify-center text-white transition-transform active:scale-95 disabled:opacity-80 disabled:scale-100"
                        >
                            {isPlaying ? <Volume2 className="w-8 h-8 animate-pulse" /> : <Play className="w-8 h-8 ml-1" />}
                        </button>
                        <p className="absolute bottom-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tap to Listen</p>
                    </div>
                )}
            </div>

            {/* Interaction Area */}
            <div className="space-y-4">
                <div className="min-h-[20px] text-center">
                    {attemptCount > 0 && <p className="text-rose-500 font-black text-xs uppercase tracking-widest">Attempt {attemptCount} / 5</p>}
                    {feedback && <p className="text-indigo-400 font-bold text-sm animate-bounce">{feedback}</p>}
                </div>

                <Button
                    onClick={startListening}
                    disabled={isBlur || isListening || isPlaying}
                    className={cn(
                        "w-full h-24 rounded-[2rem] text-xl font-black transition-all shadow-lg flex flex-col gap-2",
                        isListening ? "bg-rose-500 hover:bg-rose-600 text-white scale-95 ring-4 ring-rose-500/30" :
                            (isBlur ? "bg-slate-800 text-slate-600" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30")
                    )}
                >
                    <Mic className={cn("w-6 h-6", isListening && "animate-pulse")} />
                    <span className="text-sm uppercase tracking-widest opacity-80 font-bold">
                        {isBlur ? "Listen First" : (isListening ? "Listening..." : "Tap & Speak")}
                    </span>
                </Button>

                <div className="min-h-[40px] text-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                    <p className="text-slate-300 italic font-medium text-sm">
                        {transcript || "..."}
                    </p>
                </div>
            </div>
        </div>
    );
}
