'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Clock, BookOpen } from "lucide-react";
import { cn } from '@/lib/utils';

interface Question {
    id: string;
    question: string;
    options: { a: string; b: string; c: string; d: string };
    correctAnswer: string;
    explanation?: string;
    classification?: string;
}

interface UserAnswer {
    questionId: string;
    userAnswer: string;
    isCorrect: boolean;
}

export default function Part5CustomPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const assignmentId = searchParams.get('assignmentId');

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [startTime] = useState(Date.now());
    const [assignment, setAssignment] = useState<any>(null);

    useEffect(() => {
        const loadAssignment = async () => {
            if (!assignmentId) {
                alert('Assignment ID가 없습니다.');
                router.back();
                return;
            }

            try {
                // TEST MODE: For development testing
                if (assignmentId === 'test') {
                    const { part5Data } = await import('@/data/part5');

                    // part5Data is an object with unit keys, get all questions
                    const allQuestions: any[] = [];
                    Object.values(part5Data).forEach((unitQuestions: any) => {
                        allQuestions.push(...unitQuestions);
                    });

                    // Get first 10 questions for testing
                    const testQuestions = allQuestions.slice(0, 10).map((q, idx) => ({
                        id: `test_${idx}`,
                        question: q.question,
                        options: q.options,
                        correctAnswer: q.answer,
                        explanation: q.explanation,
                        classification: q.type
                    }));

                    setAssignment({
                        type: 'type_review',
                        title: '테스트 유형별 복습',
                        questionIds: testQuestions.map(q => q.id)
                    });
                    setQuestions(testQuestions);
                    setLoading(false);
                    return;
                }

                // PRODUCTION MODE: Load from Firestore
                const assignmentDoc = await getDoc(doc(db, 'Assignments', assignmentId));

                if (!assignmentDoc.exists()) {
                    alert('숙제를 찾을 수 없습니다.');
                    router.back();
                    return;
                }

                const assignmentData = assignmentDoc.data();
                setAssignment(assignmentData);

                // Load questions from part5Data
                const { part5Data } = await import('@/data/part5');

                // Filter questions by questionIds
                const filteredQuestions = part5Data.filter((q: any) =>
                    assignmentData.questionIds?.includes(q.id)
                );

                if (filteredQuestions.length === 0) {
                    alert('문제를 찾을 수 없습니다.');
                    router.back();
                    return;
                }

                setQuestions(filteredQuestions);
                setLoading(false);
            } catch (error) {
                console.error('Error loading assignment:', error);
                alert('숙제를 불러오는 중 오류가 발생했습니다.');
                router.back();
            }
        };

        loadAssignment();
    }, [assignmentId, router]);

    // Load saved progress
    useEffect(() => {
        if (!assignmentId) return;

        const savedProgress = localStorage.getItem(`custom_assignment_${assignmentId}`);
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                if (parsed.userAnswers) setUserAnswers(parsed.userAnswers);
                if (parsed.currentIndex !== undefined) setCurrentIndex(parsed.currentIndex);
            } catch (e) {
                console.error('Failed to load progress', e);
            }
        }
    }, [assignmentId]);

    const saveProgress = () => {
        if (!assignmentId) return;

        localStorage.setItem(`custom_assignment_${assignmentId}`, JSON.stringify({
            userAnswers,
            currentIndex
        }));
    };

    const handleAnswer = (answer: string) => {
        const currentQ = questions[currentIndex];
        const isCorrect = answer === currentQ.correctAnswer;

        const newAnswer: UserAnswer = {
            questionId: currentQ.id,
            userAnswer: answer,
            isCorrect
        };

        setUserAnswers([...userAnswers, newAnswer]);

        // Move to next question or show results
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            finishQuiz([...userAnswers, newAnswer]);
        }
    };

    const finishQuiz = async (finalAnswers: UserAnswer[]) => {
        setShowResults(true);

        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const score = finalAnswers.filter(a => a.isCorrect).length;

        // Clear saved progress
        if (assignmentId) {
            localStorage.removeItem(`custom_assignment_${assignmentId}`);
        }

        // Save results to Firestore
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);

            // Build incorrectQuestions array with classification
            const incorrectQuestions = finalAnswers
                .filter(a => !a.isCorrect)
                .map(a => {
                    const q = questions.find(qu => qu.id === a.questionId);
                    return {
                        questionId: a.questionId,
                        userAnswer: a.userAnswer,
                        correctAnswer: q?.correct,
                        classification: q?.classification || 'Unknown'
                    };
                });

            try {
                await addDoc(collection(db, 'Manager_Results'), {
                    type: 'part5',  // Fixed: use 'part5' not 'part5_custom'
                    mode: 'type_review',  // Add mode to distinguish from regular tests
                    assignmentId,
                    studentId: user.userId || user.uid,
                    studentName: user.userName || user.name,
                    studentClass: user.userClass || 'Unknown',
                    score,
                    total: questions.length,
                    elapsedTime,
                    answers: finalAnswers,
                    incorrectQuestions,  // Add for weakness analysis
                    timestamp: serverTimestamp()
                });
            } catch (error) {
                console.error('Error saving results:', error);
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    // Results Screen
    if (showResults) {
        const score = userAnswers.filter(a => a.isCorrect).length;
        const percentage = Math.round((score / questions.length) * 100);
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;

        return (
            <div className="min-h-screen bg-slate-950 py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <Button
                        onClick={() => router.push('/weakness/dashboard')}
                        variant="ghost"
                        className="mb-8 text-slate-400 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        약점 분석으로 돌아가기
                    </Button>

                    {/* Score Card */}
                    <Card className="bg-slate-900 border-indigo-500/30 p-8 mb-8">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                                <Trophy className="w-12 h-12 text-indigo-400" />
                            </div>
                            <h2 className="text-3xl font-black text-white mb-2">완료!</h2>
                            <p className="text-5xl font-black text-indigo-400 mb-4">{score} / {questions.length}</p>
                            <p className="text-slate-400 text-lg mb-4">정답률: {percentage}%</p>
                            <div className="flex items-center justify-center gap-2 text-slate-500">
                                <Clock className="w-4 h-4" />
                                <span>소요 시간: {minutes}분 {seconds}초</span>
                            </div>
                        </div>
                    </Card>

                    {/* Wrong Answers */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                            <BookOpen className="w-5 h-5 text-rose-400" />
                            오답 노트
                        </h3>

                        {userAnswers.filter(a => !a.isCorrect).length === 0 ? (
                            <Card className="bg-emerald-500/10 border-emerald-500/30 p-8 text-center">
                                <p className="text-emerald-400 font-bold text-lg">완벽합니다! 모든 문제를 맞혔습니다! 🎉</p>
                            </Card>
                        ) : (
                            userAnswers.map((answer, idx) => {
                                if (answer.isCorrect) return null;

                                const question = questions.find(q => q.id === answer.questionId);
                                if (!question) return null;

                                return (
                                    <Card key={idx} className="bg-slate-900 border-slate-800 p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-xs font-bold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
                                                문제 {idx + 1}
                                            </span>
                                            <span className="text-xs text-slate-500">
                                                정답: {question.correctAnswer.toUpperCase()}
                                            </span>
                                        </div>

                                        <p className="text-white font-medium mb-4 leading-relaxed">
                                            {question.question}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            {Object.entries(question.options).map(([key, value]) => {
                                                const isCorrect = key === question.correctAnswer;
                                                const isUserChoice = key === answer.userAnswer;

                                                return (
                                                    <div
                                                        key={key}
                                                        className={cn(
                                                            "p-3 rounded-lg border flex items-center gap-3",
                                                            isCorrect && "bg-emerald-500/10 border-emerald-500/50 text-emerald-400",
                                                            isUserChoice && !isCorrect && "bg-rose-500/10 border-rose-500/50 text-rose-400",
                                                            !isCorrect && !isUserChoice && "bg-slate-800/50 border-slate-700 text-slate-400"
                                                        )}
                                                    >
                                                        <span className="font-bold text-xs uppercase">({key})</span>
                                                        <span className="text-sm">{value}</span>
                                                        {isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                                                        {isUserChoice && !isCorrect && <XCircle className="w-4 h-4 ml-auto" />}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {question.explanation && (
                                            <div className="bg-indigo-500/10 border-l-4 border-indigo-500 p-4 rounded">
                                                <p className="text-xs font-bold text-indigo-400 mb-2">해설</p>
                                                <p className="text-sm text-slate-300 leading-relaxed">
                                                    {question.explanation}
                                                </p>
                                            </div>
                                        )}
                                    </Card>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Quiz Screen
    const currentQ = questions[currentIndex];
    const progress = ((currentIndex + 1) / questions.length) * 100;

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800 sticky top-0 z-10">
                <div className="max-w-3xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <Button
                            onClick={() => router.back()}
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white"
                        >
                            ✕ Exit
                        </Button>
                        <div className="text-center flex-1">
                            <button
                                onClick={() => {
                                    if (currentIndex > 0) {
                                        saveProgress();
                                    }
                                    router.push('/weakness/dashboard');
                                }}
                                className="inline-flex items-center gap-1 px-2 py-0.5 mb-1 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors cursor-pointer active:scale-95"
                            >
                                <span className="text-[9px] font-black uppercase tracking-widest">SAVE & EXIT</span>
                            </button>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                                유형별 복습
                            </p>
                            <p className="text-sm font-bold text-white">
                                {currentIndex + 1} / {questions.length}
                            </p>
                        </div>
                        <div className="w-20" />
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-indigo-500 h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Question */}
            <div className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-6xl font-black text-indigo-500/20">
                            {String(currentIndex + 1).padStart(2, '0')}
                        </span>
                    </div>
                    <p className="text-xl font-medium text-white leading-relaxed">
                        {currentQ.question}
                    </p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                    {Object.entries(currentQ.options).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => handleAnswer(key)}
                            className="w-full p-5 bg-slate-900 border-2 border-slate-800 rounded-xl text-left hover:border-indigo-500/50 hover:bg-slate-800 transition-all group"
                        >
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-indigo-400 group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all uppercase">
                                    {key}
                                </span>
                                <span className="text-white font-medium">{value}</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
