'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { doc, getDoc, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Clock, BookOpen, Volume2, Play } from "lucide-react";
import { cn } from '@/lib/utils';

interface Question {
    id: number;
    script: string;
    options: string[];
    correct: number;
    questionType?: string;
    testId: number;  // Added for audio path
}

interface UserAnswer {
    questionId: string;
    userAnswer: number;
    isCorrect: boolean;
}

export default function Part2CustomPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const assignmentId = searchParams.get('assignmentId');
    const audioRef = useRef<HTMLAudioElement>(null);

    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [startTime] = useState(Date.now());
    const [assignment, setAssignment] = useState<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        const loadAssignment = async () => {
            if (!assignmentId) {
                alert('Assignment ID가 없습니다.');
                router.back();
                return;
            }

            try {
                if (!assignmentId) {
                    alert('Assignment ID가 없습니다.');
                    router.back();
                    return;
                }

                // TEST MODE: For development
                if (assignmentId === 'test') {
                    const { part2Data } = await import('@/data/part2');

                    // Simulate "Indirect" type questions from all tests
                    const allQuestions: any[] = [];
                    for (const [testId, questions] of Object.entries(part2Data)) {
                        questions.forEach((q: any) => {
                            if (q.questionType === 'Indirect') {
                                allQuestions.push({
                                    ...q,
                                    testId: parseInt(testId)
                                });
                            }
                        });
                    }

                    setQuestions(allQuestions.slice(0, 10));
                    setAssignment({
                        type: 'type_review',
                        title: 'Part 2 유형별 복습 - Indirect'
                    });
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

                // Load questions from questionIds
                if (assignmentData.questionIds && assignmentData.questionIds.length > 0) {
                    const { part2Data } = await import('@/data/part2');
                    const loadedQuestions: any[] = [];

                    for (const uniqueId of assignmentData.questionIds) {
                        // Parse uniqueId: P2_T1_Q7 -> testId=1, questionId=7
                        const match = uniqueId.match(/P2_T(\d+)_Q(\d+)/);
                        if (match) {
                            const testId = parseInt(match[1]);
                            const questionId = parseInt(match[2]);

                            const testQuestions = part2Data[testId];
                            if (testQuestions) {
                                const question = testQuestions.find(q => q.id === questionId);
                                if (question) {
                                    loadedQuestions.push({
                                        ...question,
                                        testId
                                    });
                                }
                            }
                        }
                    }

                    setQuestions(loadedQuestions);
                }

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

    // Reset state when question changes
    useEffect(() => {
        if (questions.length > 0 && !showResults) {
            setSelectedAnswer(null);
            setShowResult(false);
            setIsPlaying(false);
        }
    }, [currentIndex, questions.length, showResults]);

    const saveProgress = () => {
        if (!assignmentId) return;

        localStorage.setItem(`custom_assignment_${assignmentId}`, JSON.stringify({
            userAnswers,
            currentIndex
        }));
    };

    const playAudio = () => {
        if (!audioRef.current) return;

        setIsPlaying(true);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const handleAnswer = (answer: number) => {
        if (showResult) return; // Already answered

        setSelectedAnswer(answer);
        setShowResult(true);
    };

    const handleNext = () => {
        const currentQ = questions[currentIndex];
        const isCorrect = selectedAnswer === currentQ.correct;  // Fixed: use 'correct'

        const newAnswer: UserAnswer = {
            questionId: currentQ.id,
            userAnswer: selectedAnswer!,
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
                        classification: q?.questionType || 'Unknown'  // Use questionType as classification
                    };
                });

            try {
                await addDoc(collection(db, 'Manager_Results'), {
                    type: 'part2',  // Fixed: use 'part2' not 'part2_custom'
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
                    <Button
                        onClick={() => router.push('/weakness/dashboard')}
                        variant="ghost"
                        className="mb-8 text-slate-400 hover:text-white"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        약점 분석으로 돌아가기
                    </Button>

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
                                                정답: {String.fromCharCode(65 + question.correct)}
                                            </span>
                                        </div>

                                        <p className="text-white font-medium mb-4 leading-relaxed italic">
                                            "{question.script}"
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            {question.options.map((option, optIdx) => {
                                                const isCorrect = optIdx === question.correct;
                                                const isUserChoice = optIdx === answer.userAnswer;

                                                return (
                                                    <div
                                                        key={optIdx}
                                                        className={cn(
                                                            "p-3 rounded-lg border flex items-center gap-3",
                                                            isCorrect && "bg-emerald-500/10 border-emerald-500/50 text-emerald-400",
                                                            isUserChoice && !isCorrect && "bg-rose-500/10 border-rose-500/50 text-rose-400",
                                                            !isCorrect && !isUserChoice && "bg-slate-800/50 border-slate-700 text-slate-400"
                                                        )}
                                                    >
                                                        <span className="font-bold text-xs">({String.fromCharCode(65 + optIdx)})</span>
                                                        <span className="text-sm">{option}</span>
                                                        {isCorrect && <CheckCircle2 className="w-4 h-4 ml-auto" />}
                                                        {isUserChoice && !isCorrect && <XCircle className="w-4 h-4 ml-auto" />}
                                                    </div>
                                                );
                                            })}
                                        </div>
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

    // Correct audio path format
    const tNum = String(currentQ.testId).padStart(2, '0');
    const qNum = String(currentQ.id).padStart(2, '0');
    const audioPath = `/audio/lc/part2/Test_${tNum}-${qNum}.mp3`;

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            {/* Audio Element */}
            <audio
                ref={audioRef}
                src={audioPath}
                onEnded={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

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
                                Part 2 유형별 복습
                            </p>
                            <p className="text-sm font-bold text-white">
                                {currentIndex + 1} / {questions.length}
                            </p>
                        </div>
                        <div className="w-20" />
                    </div>

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

                    {/* Audio Player */}
                    <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 mb-6">
                        <div className="flex flex-col items-center gap-4">
                            <button
                                onClick={playAudio}
                                disabled={isPlaying}
                                className={cn(
                                    "w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-lg",
                                    isPlaying
                                        ? "bg-emerald-500/20 text-emerald-500 scale-110 ring-4 ring-emerald-500/10"
                                        : "bg-emerald-600 hover:bg-emerald-500 text-white active:scale-95"
                                )}
                            >
                                {isPlaying ? (
                                    <Volume2 className="w-10 h-10 animate-bounce" />
                                ) : (
                                    <Play className="w-10 h-10 ml-1" />
                                )}
                            </button>
                            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">
                                {isPlaying ? "재생 중..." : "집중해서 들어주세요"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    {currentQ.options.map((option, idx) => {
                        const isSelected = selectedAnswer === idx;
                        const isCorrect = idx === currentQ.correct;  // Fixed: use 'correct' not 'correctAnswer'

                        let btnClass = "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700";

                        if (showResult) {
                            if (isCorrect) {
                                btnClass = "bg-emerald-600/20 border-emerald-500 text-emerald-400";
                            } else if (isSelected) {
                                btnClass = "bg-rose-600/20 border-rose-500 text-rose-400";
                            } else {
                                btnClass = "bg-slate-900 border-slate-800 text-slate-600 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleAnswer(idx)}
                                disabled={showResult}
                                className={cn(
                                    "w-full p-5 border-2 rounded-xl text-left transition-all group min-h-[80px] flex items-center justify-center",
                                    btnClass
                                )}
                            >
                                <div className="flex items-center gap-4 w-full">
                                    <span className={cn(
                                        "w-12 h-12 rounded-lg flex items-center justify-center text-lg font-black shrink-0",
                                        showResult
                                            ? "bg-slate-900 border border-slate-700"
                                            : "bg-slate-900 border-2 border-slate-600"
                                    )}>
                                        {String.fromCharCode(65 + idx)}
                                    </span>

                                    {/* Only show option text AFTER answering */}
                                    {showResult && (
                                        <>
                                            <span className="font-medium flex-1">{option}</span>
                                            {isCorrect && <CheckCircle2 className="w-5 h-5" />}
                                            {isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                                        </>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Next Button */}
                {showResult && (
                    <div className="mt-6">
                        <Button
                            onClick={handleNext}
                            className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-lg font-bold rounded-xl"
                        >
                            {currentIndex < questions.length - 1 ? '다음 문제' : '결과 보기'}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
