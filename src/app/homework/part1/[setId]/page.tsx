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

// Child Component that resets fully when index changes
function SentenceCard({
    data,
    index,
    total,
    onNext,
    mode = 'shadowing'
}: {
    data: any,
    index: number,
    total: number,
    onNext: (isSuccess: boolean) => void,
    mode?: 'shadowing'
}) {
    // Local state for this specific sentence
    // When 'key' changes in parent, all this resets automatically
    const [isBlur, setIsBlur] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [attemptCount, setAttemptCount] = useState(0);
    const [feedback, setFeedback] = useState("");

    const synth = useRef<SpeechSynthesis | null>(null);
    const recognition = useRef<any>(null);

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
                    console.log("Recognition ended");
                };

                recognition.current.onerror = (event: any) => {
                    setIsListening(false);
                    console.error("Speech error:", event.error);
                    if (event.error === 'no-speech') {
                        setFeedback("음성이 감지되지 않았습니다.");
                    }
                };
            }

            // Auto play on mount (start of sentence)
            // Small timeout to allow render
            setTimeout(() => playAudio(), 500);
        }

        return () => {
            // Cleanup
            if (synth.current) synth.current.cancel();
            if (recognition.current) recognition.current.stop();
        }
    }, [data.en]); // Re-run only if sentence text changes (or mount)

    const playAudio = () => {
        if (!synth.current) return;
        synth.current.cancel();
        setIsPlaying(true);

        const utter = new SpeechSynthesisUtterance(data.en);
        utter.lang = 'en-US';
        utter.rate = 0.8;

        utter.onend = () => {
            setIsPlaying(false);
            // In shadowing logic, we usually hide text first, then reveal when they listen
            // or keep it hidden. Let's follow "Blur until played" or custom logic.
            // Requirement: Blur first, listen, then maybe reveal?
            // Actually user wants: Listen -> Speak -> If Correct -> Next
            setIsBlur(false);
        };

        synth.current.speak(utter);
    };

    const startListening = () => {
        if (!recognition.current) {
            alert("이 브라우저는 음성 인식을 지원하지 않습니다. 크롬을 사용해주세요.");
            return;
        }
        setIsListening(true);
        setTranscript("");
        setFeedback("듣고 있습니다...");
        try {
            recognition.current.start();
        } catch (e) {
            console.error(e);
            setIsListening(false);
        }
    };

    const handleResult = (speech: string) => {
        setTranscript(speech);

        const target = data.en.toLowerCase().replace(/[.,!?]/g, "").trim();
        const input = speech.toLowerCase().replace(/[.,!?]/g, "").trim();

        console.log("Target:", target);
        console.log("Input:", input);

        const isExactMatch = target === input;

        // 2. Check flexible match (key words)
        const targetWords = target.split(' ');
        const inputWords = input.split(' ');
        const matchCount = inputWords.filter(w => targetWords.includes(w)).length;
        // 75% match rate (User requested)
        const isFlexibleMatch = matchCount >= Math.ceil(targetWords.length * 0.75);

        // Pass condition
        // Also allow passing if length is decent and we tried a few times, OR if 75% match
        const isPass = isExactMatch || isFlexibleMatch;

        console.log("Pass:", isPass);

        if (isPass) {
            setFeedback("Excellent! 🎉");
            setIsBlur(false);
            // Wait slightly then next
            setTimeout(() => {
                onNext(true); // SUCCESS
            }, 1500);
        } else {
            const nextAttempt = attemptCount + 1;
            setAttemptCount(nextAttempt);

            if (nextAttempt >= 3) {
                setFeedback("3회 도전... 다음으로 넘어갑니다 ⏭️");
                setTimeout(() => onNext(false), 2000); // FAIL (Max attempts)
            } else {
                setFeedback("Try Again! 다시 들어보세요 👂");
                setTimeout(() => {
                    setFeedback("");
                    setTranscript("");
                    playAudio(); // Auto replay
                }, 1500);
            }
        }
    };

    return (
        <div className="max-w-3xl mx-auto min-h-screen pb-20 pt-2 md:pt-6 px-4 md:px-6">
            <div className="flex justify-between items-end mb-4 md:mb-6 px-4 md:px-0">
                <div>
                    <h2 className="text-xl md:text-2xl font-black italic flex items-center gap-2 text-white">
                        Listen & Repeat
                        <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full not-italic">v3.1</span>
                    </h2>
                    <p className="text-indigo-500 text-[10px] font-black uppercase tracking-widest mt-1">
                        Sentence {index + 1}
                    </p>
                </div>
                <div className="text-right">
                    <span className="text-indigo-400 font-black text-xl md:text-2xl">{index + 1}</span>
                    <span className="text-slate-500 font-bold"> / {total}</span>
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 min-h-[240px] md:min-h-[280px] flex items-center justify-center relative overflow-hidden shadow-2xl mb-6 md:mb-8">
                <div className={cn("transition-all duration-700 text-center", isBlur ? "blur-sm opacity-50" : "blur-0 opacity-100")}>
                    <p className="text-slate-900 font-black text-2xl leading-tight italic tracking-tight mb-4 ">{data.en}</p>
                    <p className="text-slate-500 font-bold text-sm">{data.ko}</p>
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
                        <p className="absolute bottom-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tap to Listen</p>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <div className="min-h-[20px] text-center">
                    {attemptCount > 0 && <p className="text-rose-500 font-black text-xs uppercase tracking-widest">Attempt {attemptCount} / 3</p>}
                    {feedback && (
                        <p className={cn(
                            "font-bold text-lg animate-bounce",
                            feedback.includes("Excellent") ? "text-emerald-500" :
                                feedback.includes("실패") ? "text-rose-500" : "text-indigo-400"
                        )}>
                            {feedback}
                        </p>
                    )}
                </div>

                <div className="flex gap-3">
                    <Button
                        onClick={startListening}
                        disabled={isBlur || isListening || isPlaying}
                        className={cn(
                            "flex-1 h-24 rounded-[2rem] text-xl font-black transition-all shadow-lg flex flex-col gap-2",
                            isListening ? "bg-rose-500 hover:bg-rose-600 text-white scale-95 ring-4 ring-rose-500/30" :
                                (isBlur ? "bg-slate-800 text-slate-600" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/30")
                        )}
                    >
                        <Mic className={cn("w-6 h-6", isListening && "animate-pulse")} />
                        <span className="text-sm uppercase tracking-widest opacity-80 font-bold">
                            {isBlur ? "Listen First" : (isListening ? "Listening..." : "Tap & Speak")}
                        </span>
                    </Button>
                    {!isBlur && (
                        <Button
                            onClick={() => onNext(false)} // SKIP (Fail)
                            className="w-20 h-24 rounded-[2rem] bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-indigo-500 border-none transition-colors flex flex-col gap-2 items-center justify-center group"
                        >
                            <ChevronLeft className="w-6 h-6 rotate-180 group-hover:translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Skip</span>
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

// Main Page Component

export default function ShadowingPractice() {
    const params = useParams();
    const router = useRouter();
    const setId = parseInt(params.setId as string);
    const day = 1;


    const [sentences, setSentences] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (!setId) return;
        // Extract 20 sentences for the set
        const dayData = shadowingData[day] || [];
        const startIdx = (setId - 1) * 20;
        const endIdx = startIdx + 20;
        const subset = dayData.slice(startIdx, endIdx);

        if (subset.length === 0) {
            alert("해당 세트 데이터가 없습니다.");
            router.push('/homework/part1');
            return;
        }
        setSentences(subset);
        setLoading(false);
    }, [setId, router]);

    const handleNext = (isSuccess: boolean) => {
        let newScore = correctCount;
        if (isSuccess) {
            setCorrectCount(prev => prev + 1);
            newScore = correctCount + 1;
        }

        if (currentIndex < sentences.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setIsFinished(true);
            saveResult(newScore);
        }
    };

    const saveResult = async (finalScore: number) => {
        const userStr = localStorage.getItem('toeic_user');
        if (!userStr) return;
        const user = JSON.parse(userStr);
        const unitName = `Shadowing_Unit01_Set${setId}`;
        try {
            await addDoc(collection(db, "Manager_Results"), {
                student: user.userName || user.name || "Unknown",
                studentId: user.userId || user.uid || "Guest",
                unit: unitName,
                score: finalScore,
                total: 20,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="min-h-screen bg-slate-950">
            {isFinished ? (
                <div className="max-w-md mx-auto min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
                    <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mb-6 text-indigo-500 shadow-2xl">
                        <Trophy className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase text-white">Shadowing Complete!</h2>
                    <p className="text-slate-400 font-bold mb-6">Set {setId} / 20 Sentences</p>
                    <div className="bg-slate-800/50 p-6 rounded-3xl w-full mb-10 border border-slate-700/50">
                        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">Your Score</p>
                        <div className="flex items-end justify-center gap-2">
                            <span className="text-5xl font-black text-white">{correctCount}</span>
                            <span className="text-xl font-bold text-slate-500 mb-2">/ 20</span>
                        </div>
                        <p className="text-slate-500 text-xs mt-2">
                            {correctCount >= 16 ? "Exceptional!" : correctCount >= 10 ? "Good job!" : "Keep practicing!"}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <Button onClick={() => router.push('/homework/part1')} className="h-14 bg-indigo-600 rounded-2xl font-black">
                            Lobby
                        </Button>
                        {setId < 5 && (
                            <Button onClick={() => window.location.href = `/homework/part1/${setId + 1}`} variant="outline" className="h-14 rounded-2xl font-black bg-slate-800 border-none text-white hover:bg-slate-700">
                                Next Set
                            </Button>
                        )}
                    </div>
                </div>
            ) : (
                <SentenceCard
                    key={currentIndex}
                    data={sentences[currentIndex]}
                    index={currentIndex}
                    total={sentences.length}
                    onNext={handleNext}
                />
            )}
        </div>
    );
}
