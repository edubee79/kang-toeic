"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { cn, normalizeOptions } from "@/lib/utils";
import {
    ChevronLeft, Timer, CheckCircle2, XCircle, RotateCcw,
    Trophy, ChevronRight, AlertCircle, BookOpen, Tag,
    Sparkles, MessageSquare, Loader2, Lightbulb
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from "@/components/ui/button";
import { getToeicTagLabel } from '@/utils/toeic-tag-utils';

export default function AiDrillPlayerPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [revealMap, setRevealMap] = useState<Record<string, boolean>>({});
    const [showComparison, setShowComparison] = useState(false);

    // Refs for scrolling
    const questionRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useEffect(() => {
        const fetchQuestions = async () => {
            if (!tag) {
                setLoading(false);
                return;
            }

            try {
                const q = query(
                    collection(db, 'ai_weakness_questions'),
                    where('classification', '==', tag),
                    limit(20)
                );
                const snap = await getDocs(q);
                const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(list);
            } catch (error) {
                console.error("Error fetching drill questions:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [tag]);

    const handleSelect = (qId: string, option: string) => {
        if (revealMap[qId]) return; // Block changing after reveal
        setSelectedAnswers(prev => ({ ...prev, [qId]: option }));
        setRevealMap(prev => ({ ...prev, [qId]: true }));

        // Auto scroll to next
        const currentIndex = questions.findIndex(q => q.id === qId);
        if (currentIndex < questions.length - 1) {
            setTimeout(() => {
                const nextQ = questions[currentIndex + 1];
                const el = questionRefs.current[nextQ.id];
                if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset - 100;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 800);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
                <Loader2 className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
                <p className="text-slate-400 font-bold">AI가 맞춤 문제를 조립하고 있습니다...</p>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-6 text-center">
                <AlertCircle className="w-16 h-16 text-slate-700 mb-4" />
                <h2 className="text-xl font-bold mb-2">분석된 문제가 없습니다.</h2>
                <p className="text-slate-500 mb-6">다른 태그를 시도하거나 학습을 더 진행해 주세요.</p>
                <Button onClick={() => router.back()}>뒤로 가기</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col text-white pb-20">
            {/* Header */}
            <header className="bg-slate-900/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-slate-400 hover:text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <div>
                            <h1 className="text-sm font-black text-white/90 uppercase tracking-tight">AI 집중 모드</h1>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <Sparkles className="w-3 h-3 text-indigo-400" />
                                <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{getToeicTagLabel(tag || '')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-3xl mx-auto w-full p-4 space-y-8">
                {questions.map((q, idx) => {
                    const isRevealed = revealMap[q.id];
                    const selected = selectedAnswers[q.id];
                    const isCorrect = selected === q.correctAnswer;
                    const options = normalizeOptions(q.options || []);

                    return (
                        <div
                            key={q.id}
                            ref={el => questionRefs.current[q.id] = el}
                            className={cn(
                                "relative bg-slate-900/40 rounded-3xl border border-white/5 p-6 transition-all duration-500",
                                isRevealed && (isCorrect ? "border-emerald-500/30 bg-emerald-500/5" : "border-rose-500/30 bg-rose-500/5")
                            )}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-[10px] font-black text-slate-400 uppercase">Q.{idx + 1}</span>
                                {isRevealed && (
                                    isCorrect ?
                                        <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-black uppercase"><CheckCircle2 className="w-3 h-3" /> Correct</span> :
                                        <span className="flex items-center gap-1 text-rose-400 text-[10px] font-black uppercase"><XCircle className="w-3 h-3" /> Incorrect</span>
                                )}
                            </div>

                            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 text-slate-100">
                                {q.text}
                            </p>

                            <div className="grid grid-cols-1 gap-3">
                                {options.map((opt: any) => (
                                    <button
                                        key={opt.label}
                                        onClick={() => handleSelect(q.id, opt.label)}
                                        disabled={isRevealed}
                                        className={cn(
                                            "flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 text-left",
                                            !isRevealed
                                                ? "bg-slate-800/50 border-white/5 hover:border-indigo-500/50 hover:bg-slate-800"
                                                : opt.label === q.correctAnswer
                                                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-100"
                                                    : selected === opt.label
                                                        ? "bg-rose-500/20 border-rose-500/50 text-rose-100"
                                                        : "bg-slate-900/50 border-white/5 opacity-40"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={cn(
                                                "w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm border",
                                                !isRevealed
                                                    ? "bg-slate-900 border-white/10 text-slate-400"
                                                    : opt.label === q.correctAnswer
                                                        ? "bg-emerald-500 text-white border-emerald-400"
                                                        : selected === opt.label
                                                            ? "bg-rose-500 text-white border-rose-400"
                                                            : "bg-slate-800 border-white/5 text-slate-600"
                                            )}>
                                                {opt.label}
                                            </span>
                                            <span className="font-medium">{opt.text}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Explanation Section */}
                            {isRevealed && (
                                <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Lightbulb className="w-4 h-4 text-indigo-400" />
                                            <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">강쌤의 한마디</span>
                                        </div>
                                        <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed">
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {q.explanation}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </main>

            {/* Bottom Progress Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-slate-900/50 backdrop-blur-xl border-t border-white/5 p-4 z-50">
                <div className="max-w-3xl mx-auto flex items-center gap-4">
                    <div className="flex-1 bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                            className="bg-indigo-500 h-full transition-all duration-500"
                            style={{ width: `${(Object.keys(revealMap).length / questions.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-xs font-black text-slate-500 uppercase">
                        {Object.keys(revealMap).length} / {questions.length}
                    </span>
                    {Object.keys(revealMap).length === questions.length && (
                        <Button
                            onClick={() => {
                                const returnTo = searchParams.get('returnTo');
                                router.push(returnTo || '/homework/part5-real');
                            }}
                            className="bg-emerald-600 hover:bg-emerald-500 text-xs py-1 h-8 px-4 font-black"
                        >
                            FINISH
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
