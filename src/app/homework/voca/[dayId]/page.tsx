'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Loader2, BookOpen, BrainCircuit, CheckCircle, ChevronLeft, Volume2, Trophy } from "lucide-react";
import { vocaData, VocaWord } from '@/data/voca';
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export default function VocaDetail() {
    const params = useParams();
    const router = useRouter();
    const dayId = parseInt(params.dayId as string);

    // Data
    const [words, setWords] = useState<VocaWord[]>([]);
    const [loading, setLoading] = useState(true);

    // Mode
    const [mode, setMode] = useState<'study' | 'test'>('study');

    // Test Logic
    const [testQuestions, setTestQuestions] = useState<VocaWord[]>([]);
    const [currentQIdx, setCurrentQIdx] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const [testOptions, setTestOptions] = useState<string[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if (!dayId) return;
        const data = vocaData[dayId] || vocaData[1]; // Fallback to day 1 if no data
        setWords(data);
        setLoading(false);
    }, [dayId]);

    // Start Test Logic
    const startTest = () => {
        // Pick 10 random words
        const shuffled = [...words].sort(() => 0.5 - Math.random()).slice(0, 10);
        setTestQuestions(shuffled);
        setCurrentQIdx(0);
        setScore(0);
        setIsTestFinished(false);
        setMode('test');
        generateOptions(shuffled[0]);
    };

    const generateOptions = (currentWord: VocaWord) => {
        // Correct answer + 3 random wrong answers from the same day list
        const wrongOptions = words
            .filter(w => w.id !== currentWord.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.ko);

        const options = [...wrongOptions, currentWord.ko].sort(() => 0.5 - Math.random());
        setTestOptions(options);
    };

    const handleAnswer = (choice: string) => {
        if (isProcessing) return;
        setIsProcessing(true);
        setSelectedOption(choice);

        const currentWord = testQuestions[currentQIdx];
        const isCorrect = choice === currentWord.ko;

        if (isCorrect) setScore(prev => prev + 1);

        setTimeout(() => {
            if (currentQIdx < testQuestions.length - 1) {
                const nextIdx = currentQIdx + 1;
                setCurrentQIdx(nextIdx);
                generateOptions(testQuestions[nextIdx]);
                setSelectedOption(null);
            } else {
                finishTest(score + (isCorrect ? 1 : 0));
            }
            setIsProcessing(false);
        }, 800);
    };

    const finishTest = async (finalScore: number) => {
        setIsTestFinished(true);

        // Pass if >= 8
        if (finalScore >= 8) {
            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const passedDays = user.passedVocaDays || [];

                if (!passedDays.includes(dayId)) {
                    passedDays.push(dayId);
                    user.passedVocaDays = passedDays;
                    localStorage.setItem('toeic_user', JSON.stringify(user));

                    // Log to Firebase
                    try {
                        await addDoc(collection(db, "Manager_Results"), {
                            student: user.userName,
                            studentId: user.userId,
                            unit: `Voca_Day${dayId}`,
                            score: finalScore,
                            total: 10,
                            timestamp: serverTimestamp()
                        });
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        }
    };

    const speak = (text: string) => {
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        window.speechSynthesis.speak(utter);
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="max-w-md mx-auto min-h-screen pb-20 pt-6 px-6">
            <div className="flex items-center gap-4 mb-8">
                <Button variant="ghost" className="px-0" onClick={() => router.push('/homework/voca')}>
                    <ChevronLeft className="w-6 h-6 text-slate-400" />
                </Button>
                <div>
                    <h2 className="text-2xl font-black italic tracking-tighter text-amber-500">DAY {dayId}</h2>
                    <p className="text-xs text-slate-500 font-bold uppercase">Word Mastery</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex bg-slate-800 p-1 rounded-2xl mb-8">
                <button
                    onClick={() => setMode('study')}
                    className={cn("flex-1 py-3 rounded-xl font-black text-sm transition-all", mode === 'study' ? "bg-amber-500 text-slate-900" : "text-slate-500")}
                >
                    <BookOpen className="inline w-4 h-4 mr-2" /> STUDY
                </button>
                <button
                    onClick={() => setMode('test')} // Or startTest? usually direct switch
                    className={cn("flex-1 py-3 rounded-xl font-black text-sm transition-all", mode === 'test' ? "bg-amber-500 text-slate-900" : "text-slate-500")}
                >
                    <BrainCircuit className="inline w-4 h-4 mr-2" /> TEST
                </button>
            </div>

            {mode === 'study' ? (
                <div className="space-y-4">
                    {/* Start Test Prompt if not studied */}
                    <div className="bg-amber-500/10 p-4 rounded-2xl border border-amber-500/20 mb-6 flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-500">다 외웠다면?</span>
                        <Button onClick={startTest} size="sm" className="bg-amber-500 text-slate-900 hover:bg-amber-400 font-black rounded-xl">TEST START</Button>
                    </div>

                    {words.map((word) => (
                        <Card key={word.id} className="bg-slate-800/50 border-slate-700/50 p-5 rounded-3xl hover:bg-slate-800 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-black text-white">{word.en}</h3>
                                <button onClick={() => speak(word.en)} className="text-slate-500 hover:text-amber-500">
                                    <Volume2 className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-slate-400 font-bold mb-3">{word.ko}</p>
                            <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                                <p className="text-slate-300 text-xs italic mb-1">"{word.exampleEn}"</p>
                                <p className="text-slate-500 text-[10px]">{word.exampleKo}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            ) : (
                // Test Mode
                !isTestFinished ? (
                    testQuestions.length === 0 ? (
                        <div className="text-center py-20">
                            <BrainCircuit className="w-16 h-16 text-slate-700 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-white mb-2">단어 테스트</h3>
                            <p className="text-slate-400 text-sm mb-8">총 10문제 중 8문제 이상 맞춰야 합니다.</p>
                            <Button onClick={startTest} className="w-full h-14 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-2xl font-black text-lg">
                                테스트 시작
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                                <span>Question {currentQIdx + 1} / 10</span>
                                <span>Score: {score}</span>
                            </div>

                            <div className="bg-white rounded-[2.5rem] p-10 text-center min-h-[200px] flex flex-col items-center justify-center shadow-2xl">
                                <h3 className="text-3xl font-black text-slate-900 mb-2">{testQuestions[currentQIdx].en}</h3>
                                <button onClick={() => speak(testQuestions[currentQIdx].en)} className="text-slate-400 hover:text-amber-500 transition-colors">
                                    <Volume2 className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="space-y-3">
                                {testOptions.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={isProcessing}
                                        className={cn(
                                            "w-full py-5 rounded-2xl font-bold text-lg transition-all",
                                            selectedOption === opt
                                                ? (opt === testQuestions[currentQIdx].ko ? "bg-green-500 text-white" : "bg-rose-500 text-white")
                                                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                                        )}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )
                ) : (
                    // Result Screen
                    <div className="text-center py-20">
                        {score >= 8 ? (
                            <>
                                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-500 shadow-xl">
                                    <Trophy className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-2">TEST PASSED!</h2>
                                <p className="text-emerald-400 font-bold text-lg mb-8">Score: {score} / 10</p>
                            </>
                        ) : (
                            <>
                                <div className="w-24 h-24 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500 shadow-xl">
                                    <BrainCircuit className="w-10 h-10" />
                                </div>
                                <h2 className="text-3xl font-black text-white mb-2">TRY AGAIN</h2>
                                <p className="text-rose-400 font-bold text-lg mb-8">Score: {score} / 10</p>
                            </>
                        )}

                        <div className="space-y-4">
                            {score < 8 && (
                                <Button onClick={startTest} className="w-full h-14 bg-amber-500 text-slate-900 rounded-2xl font-black text-lg">
                                    다시 도전하기
                                </Button>
                            )}
                            <Button onClick={() => router.push('/homework/voca')} variant="outline" className="w-full h-14 bg-slate-800 border-slate-700 text-slate-300 rounded-2xl font-black text-lg">
                                목록으로
                            </Button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
