'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, ArrowRight, BookOpen, AlertCircle, Volume2 } from 'lucide-react';
import { part2Data } from '@/data/part2';
import { TAG_ALIASES } from '../../../data/toeic/reading/part5/classification';
import { doc, getDoc, setDoc, deleteDoc, collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface ReviewQuestion {
    text: string;
    options: { label: string; text: string }[];
    correctAnswer: string;
    explanation: string;
    translation: string;
    tags: string[];
    isAudio?: boolean; // For Part 2
    passageContext?: string;
    passageTranslation?: string;
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
    const [isMounted, setIsMounted] = useState(false);

    // State for Persistence
    const [userId, setUserId] = useState<string | null>(null);

    // Initial Load & Resume Logic
    useEffect(() => {
        setIsMounted(true);
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUserId(parsedUser.userId);

        if (!tag) return;

        const loadSession = async () => {
            try {
                // 1. Check for saved session
                const sessionRef = doc(db, 'users', parsedUser.userId, 'weakness_sessions_v3', tag);
                const sessionSnap = await getDoc(sessionRef);

                if (sessionSnap.exists()) {
                    const data = sessionSnap.data();
                    if (confirm('이전 학습 기록이 있습니다. 이어서 하시겠습니까?')) {
                        setQuestions(data.questions);
                        setCurrentIndex(data.currentIndex);
                        setScore(data.score);
                        return; // Resume complete
                    } else {
                        await deleteDoc(sessionRef);
                    }
                }

                // 2. New Session
                let targetQuestions: ReviewQuestion[] = [];

                if (part === 'Part 2') {
                    const allP2 = Object.values(part2Data).flat();
                    targetQuestions = allP2
                        .filter(q => q.questionType === tag)
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 5)
                        .map(q => ({
                            text: "🔊 Listen to the question",
                            options: q.options.map((t: string, i: number) => ({ label: ['A', 'B', 'C'][i], text: t })),
                            correctAnswer: ['A', 'B', 'C'][q.correct],
                            explanation: `Script: "${q.script}"`,
                            translation: "No translation available.",
                            tags: [q.questionType || 'Unknown'],
                            isAudio: true
                        }));
                } else {
                    // Fetch from Firestore for RC (Part 5, 6, 7)
                    const standardTag = tag ? (TAG_ALIASES[tag] || tag).toUpperCase() : '';

                    // Query Firestore for questions containing the tag
                    const qConstraints = [
                        where('tags', 'array-contains', standardTag || tag)
                    ];

                    // Fetching up to 50 candidates to select 10
                    // Note: array-contains limits us to one such filter usually.
                    const q = query(collection(db, 'ai_weakness_questions'), ...qConstraints, limit(50));
                    const querySnapshot = await getDocs(q);

                    let fetchedData = querySnapshot.docs.map(d => d.data() as ReviewQuestion);

                    if (fetchedData.length === 0 && standardTag !== tag) {
                        // Fallback try with raw tag if standard failed
                        const q2 = query(collection(db, 'ai_weakness_questions'), where('tags', 'array-contains', tag), limit(50));
                        const snap2 = await getDocs(q2);
                        fetchedData = snap2.docs.map(d => d.data() as ReviewQuestion);
                    }

                    targetQuestions = fetchedData;

                    // Randomize and slice
                    targetQuestions = targetQuestions
                        .sort(() => Math.random() - 0.5)
                        .slice(0, 10);
                }

                setQuestions(targetQuestions);
                setCurrentIndex(0);
                setScore(0);
                setSelectedOption(null);
                setIsSubmitted(false);

            } catch (error) {
                console.error("Error loading session:", error);
            }
        };

        loadSession();

    }, [tag, part, router]);


    if (!isMounted) return null;
    if (!tag) return <div className="p-8 text-white text-center">Invalid Request</div>;

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

    const handleSaveAndExit = async () => {
        if (!userId || !tag) return;

        try {
            await setDoc(doc(db, 'users', userId, 'weakness_sessions_v3', tag), {
                questions,
                currentIndex,
                score,
                part,
                lastUpdated: new Date()
            });
            alert('학습 상태가 저장되었습니다.');
            router.push('/weakness/dashboard');
        } catch (e) {
            console.error("Save failed:", e);
            alert("저장에 실패했습니다.");
        }
    };

    const handleComplete = async () => {
        if (userId && tag) {
            // Clear any saved session
            await deleteDoc(doc(db, 'users', userId, 'weakness_sessions_v3', tag));
        }
        alert(`완료! 점수: ${score + (selectedOption === currentQ.correctAnswer ? 0 : 0)} / ${questions.length}`);
        router.push('/weakness/dashboard');
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
                    <div className="flex items-center gap-4">
                        <div className="text-slate-500 font-mono text-sm">
                            {currentIndex + 1} / {questions.length}
                        </div>
                        <Button
                            onClick={handleSaveAndExit}
                            variant="ghost"
                            className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                            <XCircle className="w-5 h-5 mr-2" /> 나가기 (저장)
                        </Button>
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
                        {/* Passage Context if provided (Part 6, 7) */}
                        {currentQ.passageContext && (
                            <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-200 text-sm italic text-slate-700 whitespace-pre-wrap select-none max-h-[300px] overflow-y-auto">
                                <div className="font-bold text-slate-400 mb-2 uppercase tracking-widest text-[10px]">Passage Context</div>
                                {currentQ.passageContext}
                            </div>
                        )}

                        {currentQ.isAudio ? (
                            <div className="flex items-center gap-4 bg-slate-100 p-6 rounded-xl text-slate-600">
                                <Volume2 className="w-8 h-8 text-indigo-500" />
                                <span>Audio playback is simulated for this drill.</span>
                            </div>
                        ) : (
                            // Text with Blank logic (Part 5, 6)
                            <div className="text-base md:text-lg font-medium leading-normal text-slate-900 mb-4 bg-slate-50 p-4 rounded-lg border border-slate-200">
                                {currentQ.text.split(/(\[?\d+\]?|_______)/).map((part: string, i: number, arr: string[]) => {
                                    const isMarker = part.match(/\[?\d+\]?/) || part === '_______';
                                    if (isMarker) {
                                        return (
                                            <span key={i} className="inline-block min-w-[2.5rem] border-b-2 border-slate-400 mx-1 align-baseline text-center">
                                                {isSubmitted && (
                                                    <span className={`block font-bold text-sm ${currentQ.correctAnswer === selectedOption ? 'text-emerald-600' : 'text-rose-600'}`}>
                                                        {selectedOption === currentQ.correctAnswer ? currentQ.correctAnswer : selectedOption}
                                                    </span>
                                                )}
                                            </span>
                                        );
                                    }
                                    return <React.Fragment key={i}>{part}</React.Fragment>;
                                })}
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-2">
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
                                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-center gap-3 ${containerClass}`}
                                    >
                                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border ${isSubmitted && isCorrect ? "bg-emerald-500 border-emerald-500 text-white" :
                                            isSelected ? "bg-indigo-500 border-indigo-500 text-white" :
                                                "bg-white border-slate-300 text-slate-500"
                                            }`}>
                                            {opt.label}
                                        </span>
                                        <span className="font-medium text-sm md:text-base">{opt.text}</span>

                                        {isSubmitted && isCorrect && <CheckCircle2 className="ml-auto w-4 h-4 text-emerald-500" />}
                                        {isSubmitted && isSelected && !isCorrect && <XCircle className="ml-auto w-4 h-4 text-rose-500" />}
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
