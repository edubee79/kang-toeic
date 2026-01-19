
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle, Volume2 } from 'lucide-react';
import generatedData from '@/data/generated_questions.json';
import { part2Data } from '@/data/part2';

interface ReviewQuestion {
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    explanation: string;
    translation: string;
    tags: string[];
    isAudio?: boolean; // For Part 2
}

export default function WeaknessReviewPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const tag = searchParams.get('tag'); // e.g. P5_PREP
    const part = searchParams.get('part'); // e.g. Part 5 or Part 2

    const [questions, setQuestions] = useState<ReviewQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        if (!tag) return;

        let targetQuestions: ReviewQuestion[] = [];

        if (part === 'Part 2') {
            // Logic: Find Part 2 questions with matching questionType
            const allP2 = Object.values(part2Data).flat();

            targetQuestions = allP2
                .filter(q => q.questionType === tag)
                // Shuffle logic (simple random sort)
                .sort(() => Math.random() - 0.5)
                .slice(0, 5) // Limit to 5
                .map(q => ({
                    text: "🔊 Listen to the question",
                    options: q.options.map((t, i) => ({ label: ['A', 'B', 'C'][i], text: t })),
                    correctAnswer: ['A', 'B', 'C'][q.correct],
                    explanation: `Script: "${q.script}"`,
                    translation: "No translation available.",
                    tags: [q.questionType || 'Unknown'],
                    isAudio: true
                }));
        } else {
            // Logic: AI Questions (Part 5, 6, 7)
            targetQuestions = (generatedData as any[]).filter(q =>
                q.tags.includes(tag) || q.tags.includes(tag.toUpperCase())
            );
        }

        setQuestions(targetQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsSubmitted(false);

    }, [tag, part]);

    if (!tag) return <div className="p-8 text-white">Invalid Request</div>;

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <AlertCircle className="w-12 h-12 text-slate-500 mb-4" />
                <h2 className="text-xl font-bold mb-2">해당 유형의 문제가 부족합니다.</h2>
                <p className="text-slate-400 mb-6">
                    {part === 'Part 2'
                        ? '다른 회차에도 해당 유형 문제가 충분하지 않습니다.'
                        : `관리자에게 '${tag}' 유형 문제 생성을 요청하세요.`}
                </p>
                <Button onClick={() => router.back()} variant="outline">돌아가기</Button>
            </div>
        );
    }

    const currentQ = questions[currentIndex];
    const isLast = currentIndex === questions.length - 1;

    const handleOptionSelect = (label: string) => {
        if (isSubmitted) return;
        setSelectedOption(label);
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (selectedOption === currentQ.correctAnswer) {
            setScore(s => s + 1);
        }
    };

    const handleNext = () => {
        if (isLast) {
            alert(`완료! 점수: ${score + (selectedOption === currentQ.correctAnswer ? 0 : 0)} / ${questions.length}`);
            router.push('/weakness/dashboard');
        } else {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsSubmitted(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center p-4 lg:p-12 font-sans">
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <span className="text-indigo-400 font-bold text-xs uppercase tracking-widest">{part} • {part === 'Part 2' ? 'CROSS MINING' : 'AI CUSTOM DRILL'}</span>
                        <h1 className="text-2xl font-black text-white mt-1">집중 공략: {tag}</h1>
                    </div>
                    <div className="text-slate-500 font-mono text-sm">
                        {currentIndex + 1} / {questions.length}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-slate-800 rounded-full mb-8 overflow-hidden">
                    <div
                        className="h-full bg-indigo-500 transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    />
                </div>

                {/* Question Card */}
                <Card className="bg-white p-8 rounded-2xl shadow-xl border-none min-h-[400px] flex flex-col">
                    <div className="flex-1">
                        <div className="text-lg text-slate-900 font-medium leading-relaxed mb-8">
                            {/* Render Content */}
                            {currentQ.isAudio ? (
                                <div className="flex items-center gap-4 bg-slate-100 p-6 rounded-xl text-slate-600">
                                    <Volume2 className="w-8 h-8 text-indigo-500" />
                                    <span>Audio playback is simulated for this drill.</span>
                                </div>
                            ) : (
                                // Text with Blank logic (Part 5)
                                currentQ.text.split('_______').map((part: string, i: number, arr: string[]) => (
                                    <React.Fragment key={i}>
                                        {part}
                                        {i < arr.length - 1 && (
                                            <span className="inline-block min-w-[3rem] border-b-2 border-slate-300 mx-1 align-baseline">
                                                {isSubmitted && (
                                                    <span className={`block text-center font-bold ${currentQ.correctAnswer === selectedOption ? 'text-emerald-600' : 'text-rose-600'}`}>
                                                        {isSubmitted ? (selectedOption === currentQ.correctAnswer ? currentQ.correctAnswer : selectedOption) : ''}
                                                    </span>
                                                )}
                                            </span>
                                        )}
                                    </React.Fragment>
                                ))
                            )}
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {currentQ.options.map((opt: any) => {
                                const isSelected = selectedOption === opt.label;
                                const isCorrect = opt.label === currentQ.correctAnswer;

                                let containerClass = "border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700";
                                if (isSelected) containerClass = "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500";

                                if (isSubmitted) {
                                    if (isCorrect) containerClass = "border-emerald-500 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500";
                                    else if (isSelected) containerClass = "border-rose-500 bg-rose-50 text-rose-700 ring-1 ring-rose-500";
                                    else containerClass = "border-slate-200 opacity-50";
                                }

                                return (
                                    <button
                                        key={opt.label}
                                        onClick={() => handleOptionSelect(opt.label)}
                                        disabled={isSubmitted}
                                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-4 ${containerClass}`}
                                    >
                                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${isSubmitted && isCorrect ? "bg-emerald-500 border-emerald-500 text-white" :
                                                isSelected ? "bg-indigo-500 border-indigo-500 text-white" :
                                                    "bg-white border-slate-300 text-slate-500"
                                            }`}>
                                            {opt.label}
                                        </span>
                                        <span className="font-medium text-lg">{opt.text}</span>

                                        {isSubmitted && isCorrect && <CheckCircle2 className="ml-auto w-5 h-5 text-emerald-500" />}
                                        {isSubmitted && isSelected && !isCorrect && <XCircle className="ml-auto w-5 h-5 text-rose-500" />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Feedback / Next */}
                    <div className="mt-8 pt-6 border-t border-slate-100">
                        {!isSubmitted ? (
                            <Button
                                className="w-full h-12 text-lg font-bold bg-slate-900 text-white hover:bg-slate-800"
                                onClick={handleSubmit}
                                disabled={!selectedOption}
                            >
                                정답 확인
                            </Button>
                        ) : (
                            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="mb-4 bg-slate-50 p-4 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-indigo-500" />
                                        해설
                                    </h4>
                                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{currentQ.explanation}</p>
                                    <div className="mt-2 pt-2 border-t border-slate-200 text-xs text-slate-500">
                                        {currentQ.translation}
                                    </div>
                                </div>
                                <Button
                                    className="w-full h-12 text-lg font-bold bg-indigo-600 text-white hover:bg-indigo-500"
                                    onClick={handleNext}
                                >
                                    {isLast ? "결과 보기" : "다음 문제"} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}
