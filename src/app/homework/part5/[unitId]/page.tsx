'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Loader2, X, Trophy, BookOpen, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
    question_no: number;
    question: string;
    options: { [key: string]: string };
    answer: string;
    explanation?: string;
    type?: string;
}

interface Log {
    question_no: number;
    question_text: string;
    options: { [key: string]: string };
    is_correct: boolean;
    user_choice: string;
    correct_answer: string;
    explanation: string;
    question_type?: string;
}

export default function Part5Quiz() {
    const params = useParams();
    const router = useRouter();
    const unitId = params.unitId as string;

    // State
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logs, setLogs] = useState<Log[]>([]);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Data Import

    // Fetch Questions (Firestore -> Local Fallback)
    useEffect(() => {
        const fetchQuestions = async () => {
            if (!unitId) return;
            try {
                // 1. Try Firestore First
                const docRef = doc(db, "Review_Questions", unitId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.inter && Array.isArray(data.inter)) {
                        setQuestions(data.inter);
                        setLoading(false);
                        return;
                    }
                }

                // 2. Fallback to Local Data if Firestore fails or empty
                console.log("Firestore data found (or empty), checking local fallback...");
                const { part5Data } = await import('@/data/part5');
                const localData = part5Data[unitId];

                if (localData && localData.length > 0) {
                    // console.log("Using Local Fallback Data for", unitId);
                    setQuestions(localData);
                } else {
                    alert("해당 유닛의 문제가 없습니다.");
                    router.back();
                }
            } catch (error) {
                console.error("Error fetching questions, trying fallback:", error);
                // Fallback on error too
                try {
                    const { part5Data } = await import('@/data/part5');
                    const localData = part5Data[unitId];
                    if (localData) setQuestions(localData);
                    else {
                        alert("문제를 불러오는 중 오류가 발생했습니다.");
                        router.back();
                    }
                } catch (e) {
                    alert("데이터를 로드할 수 없습니다.");
                    router.back();
                }
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [unitId, router]);

    const handleAnswer = async (selected: string) => {
        const currentQ = questions[currentIndex];
        const isCorrect = selected === currentQ.answer;

        if (isCorrect) setScore(prev => prev + 1);

        const newLog: Log = {
            question_no: currentQ.question_no || (currentIndex + 1),
            question_text: currentQ.question,
            options: currentQ.options,
            is_correct: isCorrect,
            user_choice: selected,
            correct_answer: currentQ.answer,
            explanation: currentQ.explanation || "해설이 없습니다.",
            question_type: currentQ.type
        };

        const newLogs = [...logs, newLog];
        setLogs(newLogs);

        // Next Question or Finish
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            await finishQuiz(newLogs, isCorrect ? score + 1 : score);
        }
    };

    const finishQuiz = async (finalLogs: Log[], finalScore: number) => {
        setIsFinished(true);
        setSubmitting(true);

        const userStr = localStorage.getItem('toeic_user');
        let studentName = "Unknown", studentId = "Unknown", studentClass = "Unknown";
        if (userStr) {
            const user = JSON.parse(userStr);
            studentName = user.userName;
            studentId = user.userId;
            studentClass = user.userClass;
        }

        try {
            await addDoc(collection(db, "Manager_Results"), {
                unit: unitId,
                student: studentName,
                studentId: studentId,
                studentClass: studentClass,
                score: finalScore,
                total: questions.length,
                details: finalLogs,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error("Error saving results:", error);
            alert("결과 저장 중 오류가 발생했지만, 학습 기록은 남았습니다.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center text-slate-500 gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
            <p className="font-bold text-sm tracking-widest animate-pulse">LOADING UNIT DATA...</p>
        </div>;
    }

    // Result Screen
    if (isFinished) {
        return (
            <div className="max-w-xl mx-auto pb-20 pt-10 px-6">
                <div className="text-center mb-12">
                    <div className="w-24 h-24 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-500 shadow-2xl shadow-indigo-500/10">
                        <Trophy className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black mb-2 tracking-tighter uppercase text-white">Mission Complete</h2>
                    <p className="text-slate-400 font-bold italic text-xl">SCORE: <span className="text-indigo-400">{score}</span> / {questions.length}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-12">
                    <Button onClick={() => router.push('/homework/part5')} className="h-14 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-black text-lg">
                        LOBBY
                    </Button>
                    <Button onClick={() => window.location.reload()} variant="outline" className="h-14 bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 rounded-2xl font-black text-lg">
                        RETRY
                    </Button>
                </div>

                <div className="space-y-6">
                    <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-6 border-b border-indigo-500/20 pb-4">
                        <BookOpen className="w-4 h-4" /> Incorrect Notes
                    </h3>

                    {logs.filter(l => !l.is_correct).length === 0 ? (
                        <div className="p-10 text-center bg-indigo-500/5 rounded-3xl border border-indigo-500/20 text-indigo-400 font-black">
                            ALL CORRECT! PERFECT! 🎉
                        </div>
                    ) : (
                        logs.filter(l => !l.is_correct).map((log, idx) => (
                            <div key={idx} className="bg-slate-800/40 rounded-3xl p-6 border border-slate-700/50 shadow-xl overflow-hidden">
                                <div className="mb-4 flex justify-between items-center">
                                    <span className="text-[10px] font-black text-rose-500 bg-rose-500/10 px-2 py-1 rounded-md uppercase tracking-widest">Question {log.question_no}</span>
                                    <span className="text-[10px] font-black text-slate-500 italic">Correct: {log.correct_answer.toUpperCase()}</span>
                                </div>
                                <p className="text-sm font-bold text-slate-100 mb-6 leading-relaxed">{log.question_text}</p>

                                <div className="space-y-2 mb-6">
                                    {['a', 'b', 'c', 'd'].map(key => {
                                        const isCorrect = key === log.correct_answer;
                                        const isUserChoice = key === log.user_choice;
                                        return (
                                            <div key={key} className={cn(
                                                "flex items-center gap-3 p-3 rounded-xl border mb-1.5 last:mb-0 transition-colors",
                                                isCorrect ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 font-bold" :
                                                    (isUserChoice ? "bg-rose-500/10 border-rose-500/40 text-rose-400" : "bg-slate-900/30 border-slate-800 text-slate-500")
                                            )}>
                                                <span className="text-[10px] font-black uppercase">({key})</span>
                                                <span className="text-xs">{log.options[key]}</span>
                                                {isCorrect && <CheckCircle2 className="w-3 h-3 ml-auto opacity-50" />}
                                                {isUserChoice && !isCorrect && <X className="w-3 h-3 ml-auto opacity-50" />}
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="bg-indigo-500/5 rounded-2xl p-5 border-l-4 border-indigo-500">
                                    <h4 className="text-[10px] font-black text-indigo-400 uppercase mb-2 tracking-tighter flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" /> Explanation
                                    </h4>
                                    <p className="text-[13px] text-slate-300 leading-relaxed whitespace-pre-wrap">{log.explanation}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }

    // Quiz Screen
    const currentQ = questions[currentIndex];
    const progress = ((currentIndex) / questions.length) * 100;

    return (
        <div className="w-full max-w-2xl mx-auto min-h-[80vh] flex flex-col pt-4 pb-20 px-0 md:px-4">
            <div className="w-full bg-slate-800 h-1.5 rounded-full mb-8 overflow-hidden">
                <div
                    className="bg-indigo-500 h-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="flex-1 px-4 md:px-0">
                <div className="mb-8 pl-1 relative">
                    <span className="absolute -left-4 -top-6 text-[8rem] font-black text-slate-800/20 italic -z-10 leading-none select-none">
                        {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-indigo-500 font-black text-5xl italic tracking-tighter leading-none">
                        {String(currentIndex + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg font-bold mt-6 leading-relaxed text-slate-200 min-h-[100px]">
                        {currentQ.question}
                    </p>
                </div>

                <div className="grid gap-3">
                    {['a', 'b', 'c', 'd'].map(key => (
                        <button
                            key={key}
                            onClick={() => handleAnswer(key)}
                            className="w-full p-5 bg-slate-800 border border-slate-700 rounded-2xl text-left font-bold hover:bg-slate-700 active:scale-[0.98] transition-all flex items-center group shadow-lg"
                        >
                            <span className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mr-4 text-xs text-indigo-400 font-black border border-slate-700 group-hover:border-indigo-500 shrink-0 transition-colors uppercase">
                                {key}
                            </span>
                            <span className="text-slate-200 text-sm">{currentQ.options[key]}</span>
                            <ChevronRight className="ml-auto w-4 h-4 text-slate-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {(function () {
                        const UNIT_TITLES: Record<string, string> = {
                            "Unit_00_Structure": "문장 구조와 5형식",
                            "Unit_01_Noun": "명사 (Noun)",
                            "Unit_02_Pronoun": "대명사 (Pronoun)",
                            "Unit_03_Adjective": "형용사 (Adjective)",
                            "Unit_04_Adverb": "부사 (Adverb)",
                            "Unit_05_Preposition": "전치사 (Preposition)",
                            "Unit_06_Verb": "동사의 시제와 태",
                            "Unit_07_To_Infinitive": "To 부정사",
                            "Unit_08_Gerund": "동명사 (Gerund)",
                            "Unit_09_Participle": "분사 (Participle)",
                            "Unit_10_Adverb_Conjunctions": "부사절 접속사",
                            "Unit_11_Relative_Clauses": "관계대명사",
                            "Unit_12_Noun_Clauses": "명사절 접속사"
                        };
                        return UNIT_TITLES[unitId] || unitId.replace(/_/g, ' ');
                    })()}
                </p>
            </div>
        </div>
    );
}
