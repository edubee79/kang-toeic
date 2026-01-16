'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Timer, AlertCircle, HelpCircle, Loader2 } from "lucide-react";
import type { Part5Question } from '@/types/toeic';
import { getPart5Questions } from '@/lib/toeic_api';

function Part5RunnerContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const mode = searchParams.get('mode') === 'training' ? 'training' : 'practice';

    const [questions, setQuestions] = useState<Part5Question[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); // { questionId: 'a' }
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Timer State (Seconds)
    const [timeElapsed, setTimeElapsed] = useState(0);

    // Practice Mode State
    const [showExplanation, setShowExplanation] = useState(false);

    useEffect(() => {
        const loadQuestions = async () => {
            setIsLoading(true);
            try {
                // Fetch 30 questions for a standard set
                const data = await getPart5Questions(30);
                setQuestions(data);
            } catch (error) {
                console.error("Failed to load questions", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadQuestions();
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (mode === 'training' && !isSubmitted && !isLoading) {
            interval = setInterval(() => {
                setTimeElapsed(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [mode, isSubmitted, isLoading]);

    // Helpers
    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-500">
                <Loader2 className="w-10 h-10 animate-spin mb-4 text-indigo-500" />
                <p>문제 데이터를 불러오는 중입니다...</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400">
                <AlertCircle className="w-10 h-10 mb-4 text-rose-500" />
                <p className="font-bold text-lg text-white">등록된 문제가 없습니다.</p>
                <p className="text-sm mt-2 mb-6">관리자 페이지에서 문제를 업로드해주세요.</p>
                <Button onClick={() => router.back()} variant="outline">돌아가기</Button>
            </div>
        );
    }

    const currentQ = questions[currentIndex];
    const isLastQuestion = currentIndex === questions.length - 1;
    const progress = ((currentIndex + 1) / questions.length) * 100;

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswer = (value: string) => {
        if (isSubmitted && mode === 'training') return; // Cannot change after submit in training
        setUserAnswers(prev => ({ ...prev, [currentQ.id!]: value }));
    };

    const handleNext = () => {
        setShowExplanation(false);
        if (!isLastQuestion) setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        setShowExplanation(false);
        if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
    };

    const handleSubmitTraining = () => {
        if (confirm('정말 제출하시겠습니까?')) {
            setIsSubmitted(true);
            // Here we would save to DB
        }
    };

    // Calculate Score
    const correctCount = questions.filter(q => userAnswers[q.id!] === q.answer).length;

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            {/* Header */}
            <header className="h-16 border-b border-slate-800 flex items-center justify-between px-4 md:px-8 bg-slate-900/50 backdrop-blur sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="w-5 h-5 text-slate-400" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-lg flex items-center gap-2">
                            TOEIC Part 5
                            <Badge variant={mode === 'training' ? 'destructive' : 'secondary'} className="text-xs">
                                {mode === 'training' ? 'TRAINING' : 'PRACTICE'}
                            </Badge>
                        </h1>
                    </div>
                </div>

                {mode === 'training' && (
                    <div className="flex items-center gap-2 font-mono text-xl font-bold text-indigo-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                        <Timer className="w-5 h-5" />
                        {formatTime(timeElapsed)}
                    </div>
                )}
            </header>

            {/* Progress Bar */}
            <div className="h-1 bg-slate-900 w-full">
                <div
                    className="h-full bg-indigo-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative">

                {/* Result View (Training Only - Post Submit) */}
                {isSubmitted && mode === 'training' ? (
                    <Card className="w-full max-w-2xl bg-slate-900 border-slate-800 animate-in zoom-in-50">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-black text-white mb-2">훈련 완료!</CardTitle>
                            <p className="text-slate-400">수고하셨습니다. 결과는 다음과 같습니다.</p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                                    <div className="text-slate-500 text-sm font-bold uppercase mb-1">Score</div>
                                    <div className="text-4xl font-black text-indigo-400">
                                        {correctCount} <span className="text-lg text-slate-600">/ {questions.length}</span>
                                    </div>
                                </div>
                                <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center">
                                    <div className="text-slate-500 text-sm font-bold uppercase mb-1">Time</div>
                                    <div className="text-4xl font-black text-emerald-400">
                                        {formatTime(timeElapsed)}
                                    </div>
                                </div>
                            </div>
                            <Button className="w-full h-12 text-lg font-bold" onClick={() => router.push('/part5')}>
                                나가기
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    // Quiz Card
                    <div className="w-full max-w-3xl space-y-6">
                        <Card className="bg-slate-900 border-slate-800 shadow-2xl">
                            <CardHeader>
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant="outline" className="text-slate-400 border-slate-700">
                                        Question {currentQ.questionNumber}
                                    </Badge>
                                    <div className="text-sm text-slate-500 font-mono">
                                        {currentIndex + 1} / {questions.length}
                                    </div>
                                </div>
                                <h2 className="text-xl md:text-2xl font-medium leading-relaxed text-slate-100">
                                    {currentQ.question.split('______').map((part, i, arr) => (
                                        <span key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <span className="inline-block min-w-[60px] border-b-2 border-indigo-500/50 mx-1 text-center text-indigo-400 font-bold px-2">
                                                    {userAnswers[currentQ.id!] ?
                                                        currentQ.options[['a', 'b', 'c', 'd'].indexOf(userAnswers[currentQ.id!])]
                                                        : '______'}
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </h2>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <RadioGroup
                                    value={userAnswers[currentQ.id!] || ''}
                                    onValueChange={handleAnswer}
                                    className="grid gap-3"
                                >
                                    {currentQ.options.map((opt, idx) => {
                                        const val = ['a', 'b', 'c', 'd'][idx];
                                        const isSelected = userAnswers[currentQ.id!] === val;

                                        // Practice Mode Feedback Logic
                                        let itemClass = "w-full border-slate-700 bg-slate-950 hover:bg-slate-800 hover:border-slate-600 transition-all";
                                        let icon = null;

                                        // If Practice Mode & Selected -> Show Right/Wrong immediately
                                        if (mode === 'practice' && isSelected) {
                                            const isCorrect = val === currentQ.answer;
                                            if (isCorrect) {
                                                itemClass = "w-full border-emerald-500/50 bg-emerald-500/10 text-emerald-300";
                                                icon = <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />;
                                            } else {
                                                itemClass = "w-full border-rose-500/50 bg-rose-500/10 text-rose-300";
                                                icon = <XCircle className="w-5 h-5 text-rose-500 ml-auto" />;
                                            }
                                        }
                                        // Training Mode: Just highlight selection
                                        else if (isSelected) {
                                            itemClass = "w-full border-indigo-500 bg-indigo-500/10 text-indigo-300";
                                        }

                                        return (
                                            <div key={idx}>
                                                <RadioGroupItem value={val} id={`opt-${idx}`} className="peer sr-only" />
                                                <Label
                                                    htmlFor={`opt-${idx}`}
                                                    className={`flex items-center p-4 rounded-lg cursor-pointer border-2 ${itemClass}`}
                                                >
                                                    <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold mr-3 peer-data-[state=checked]:bg-indigo-600 peer-data-[state=checked]:text-white">
                                                        {val.toUpperCase()}
                                                    </span>
                                                    <span className="text-lg">{opt}</span>
                                                    {icon}
                                                </Label>
                                            </div>
                                        );
                                    })}
                                </RadioGroup>

                                {/* Explanation (Practice Mode Only) */}
                                {mode === 'practice' && userAnswers[currentQ.id!] && (
                                    <div className="mt-6 pt-6 border-t border-slate-800 animate-in fade-in slide-in-from-top-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-slate-400 hover:text-white mb-2"
                                            onClick={() => setShowExplanation(!showExplanation)}
                                        >
                                            <HelpCircle className="w-4 h-4 mr-2" />
                                            {showExplanation ? '해설 숨기기' : '해설 보기'}
                                        </Button>

                                        {showExplanation && (
                                            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-slate-300 leading-relaxed">
                                                <div className="flex items-center gap-2 mb-2 text-indigo-400 font-bold text-sm">
                                                    <AlertCircle className="w-4 h-4" />
                                                    정답 해설 (정답: {currentQ.answer.toUpperCase()})
                                                </div>
                                                {currentQ.explanation}
                                                <div className="mt-3 flex gap-2">
                                                    {currentQ.tags?.map(tag => (
                                                        <Badge key={tag} variant="outline" className="text-[10px] text-slate-500 border-slate-700">
                                                            #{tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="flex justify-between border-t border-slate-800 pt-6">
                                <Button
                                    variant="ghost"
                                    onClick={handlePrev}
                                    disabled={currentIndex === 0}
                                    className="text-slate-400 hover:text-white"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" /> 이전
                                </Button>

                                {isLastQuestion ? (
                                    mode === 'training' ? (
                                        <Button onClick={handleSubmitTraining} className="bg-rose-600 hover:bg-rose-500 text-white font-bold px-8">
                                            제출 및 채점
                                        </Button>
                                    ) : (
                                        <Button onClick={() => router.push('/part5')} className="bg-slate-800 hover:bg-slate-700">
                                            연습 종료
                                        </Button>
                                    )
                                ) : (
                                    <Button onClick={handleNext} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8">
                                        다음 <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                )}
            </main>
        </div>
    );
}

export default function Part5RunnerPage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">Loading...</div>}>
            <Part5RunnerContent />
        </React.Suspense>
    );
}
