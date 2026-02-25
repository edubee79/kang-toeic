'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, CheckCircle2, XCircle, Volume2, Search, BookOpen, Clock, Activity, Target, Sparkles, Languages, Tag, Headphones, Zap, Play } from 'lucide-react';
import { TouchDictionary } from '@/components/common/TouchDictionary';
import { cn } from '@/lib/utils';

// Import all Mock Data
import * as Set9 from '@/data/mock/set9_data';
import * as Set10 from '@/data/mock/set10_data';

export default function QuickSolutionPage() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const testId = Number(params?.testId);
    const attemptId = searchParams.get('attemptId');
    const part = searchParams.get('part') || 'p5';

    const [attempt, setAttempt] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

    useEffect(() => {
        const fetchAttempt = async () => {
            if (!attemptId) return;
            try {
                const docRef = doc(db, 'MockTestAttempts', attemptId);
                const snap = await getDoc(docRef);
                if (snap.exists()) {
                    setAttempt(snap.data());
                }
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchAttempt();
    }, [attemptId]);

    if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500 font-black uppercase tracking-widest italic animate-pulse">Loading Solutions...</div>;

    if (!attempt) return <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500">Attempt data not found.</p>
        <Button onClick={() => router.back()}>Go Back</Button>
    </div>;

    // Data Mapping
    const getData = () => {
        if (testId === 9) {
            switch (part) {
                case 'p1': return { type: 'lc_single', items: Set9.test9Part1 };
                case 'p2': return { type: 'lc_single', items: Set9.test9Part2 };
                case 'p3': return { type: 'lc_multi', items: Set9.test9Part3 };
                case 'p4': return { type: 'lc_multi', items: Set9.test9Part4 };
                case 'p5': return { type: 'rc_single', items: Set9.test9Part5 };
                case 'p6': return { type: 'rc_multi', items: Set9.test9Part6 };
                case 'p7s': return { type: 'rc_multi', items: Set9.test9Part7Single };
                case 'p7m': return { type: 'rc_multi', items: Set9.test9Part7Multi };
            }
        } else {
            switch (part) {
                case 'p1': return { type: 'lc_single', items: Set10.test10Part1 };
                case 'p2': return { type: 'lc_single', items: Set10.test10Part2 };
                case 'p3': return { type: 'lc_multi', items: Set10.test10Part3 };
                case 'p4': return { type: 'lc_multi', items: Set10.test10Part4 };
                case 'p5': return { type: 'rc_single', items: Set10.test10Part5 };
                case 'p6': return { type: 'rc_multi', items: Set10.test10Part6 };
                case 'p7s': return { type: 'rc_multi', items: Set10.test10Part7Single };
                case 'p7m': return { type: 'rc_multi', items: Set10.test10Part7Multi };
            }
        }
        return { type: 'none', items: [] };
    };

    const { type, items } = getData();
    const partLabel = part.toUpperCase().replace('P', 'Part ');
    const userAnswers = attempt.answers || {};

    // ✅ Robust answer lookup for ID variations
    const getUserAnswer = (qid: string) => {
        if (userAnswers[qid]) return userAnswers[qid];
        const num = qid.split('-q')[1] || qid.replace(/[^\d]/g, '');
        const part = qid.split('-')[0];
        const variations = [
            `${part}-${testId}-q${num}`,
            `${part}-t${testId}-q${num}`,
            `${part}-q${num}`,
            num
        ];
        for (const v of variations) {
            if (userAnswers[v]) return userAnswers[v];
        }
        return undefined;
    };

    return (
        <div className="min-h-screen bg-[#0a0c10] text-slate-200">
            {/* Smooth Header */}
            <div className="sticky top-0 z-50 bg-[#0a0c10]/80 backdrop-blur-xl border-b border-white/5 px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => router.back()}
                        className="p-3 hover:bg-white/5 rounded-2xl text-slate-400 hover:text-white transition-all group"
                    >
                        <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest italic">{attempt.testTitle}</span>
                            <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{partLabel} Analysis</span>
                        </div>
                        <h1 className="text-2xl font-black italic tracking-tight uppercase leading-none">Quick <span className="text-indigo-400">Solution</span></h1>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-3 rounded-2xl border border-white/5">
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic leading-none mb-1.5">Score</p>
                        <p className="text-xl font-black italic tracking-tighter leading-none text-white">
                            {(Number(attempt.lcScore) || 0) + (Number(attempt.rcScore) || 0)}
                        </p>
                    </div>
                    <div className="w-px h-6 bg-white/10"></div>
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic leading-none mb-1.5">Date</p>
                        <p className="text-sm font-bold italic tracking-tight leading-none text-slate-400">
                            {new Date(attempt.date || Date.now()).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto p-6 md:p-10 space-y-12">

                {/* Intro Section */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
                    <div className="max-w-2xl space-y-4">
                        <div className="w-14 h-14 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center border border-indigo-500/10">
                            <Zap size={28} />
                        </div>
                        <h2 className="text-4xl font-black tracking-tighter uppercase italic text-white">{partLabel} <span className="text-indigo-400">강쌤의 정충 해설</span></h2>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">
                            모의고사에서 틀린 문제를 중심으로 강쌤의 핵심 포인트 해설과 전문 해석을 확인하세요.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-rose-500/10 border border-rose-500/20 px-8 py-5 rounded-[2rem] text-center shadow-2xl">
                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest italic mb-2">Incorrect</p>
                            <p className="text-3xl font-black italic leading-none text-rose-500">
                                {(() => {
                                    if (type === 'rc_single' || type === 'lc_single') {
                                        return items.filter((it: any) => getUserAnswer(it.id) !== it.correctAnswer).length;
                                    } else {
                                        return items.reduce((acc: number, it: any) => {
                                            return acc + it.questions.filter((q: any) => getUserAnswer(q.id) !== (q.correctAnswer || (q as any).answer)).length;
                                        }, 0);
                                    }
                                })()} Questions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Logic */}
                <div className="space-y-16">
                    {items.filter((item: any) => {
                        if (type === 'rc_single' || type === 'lc_single') {
                            return getUserAnswer(item.id) !== item.correctAnswer;
                        } else {
                            return item.questions.some((q: any) => getUserAnswer(q.id) !== (q.correctAnswer || (q as any).answer));
                        }
                    }).map((item: any, idx: number) => {
                        if (type === 'rc_single' || type === 'lc_single') {
                            return (
                                <SolutionCard
                                    key={item.id}
                                    item={item}
                                    userAnswer={getUserAnswer(item.id)}
                                    index={idx + 1}
                                    isLC={type === 'lc_single'}
                                />
                            );
                        } else {
                            // Multi-item sets (Part 3, 4, 6, 7)
                            return (
                                <SolutionSet
                                    key={idx}
                                    set={item}
                                    userAnswers={userAnswers}
                                    getUserAnswer={getUserAnswer}
                                    isLC={type === 'lc_multi'}
                                />
                            );
                        }
                    })}
                </div>
            </main>
        </div>
    );
}

function SolutionCard({ item, userAnswer, index, isLC }: any) {
    const isCorrect = userAnswer === item.correctAnswer;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Script rendering logic
    const renderScript = () => {
        if (!item.script) return null;

        // Array format (Part 3, 4)
        if (Array.isArray(item.script)) {
            return (
                <div className="space-y-3 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                    {item.script.map((s: any, i: number) => (
                        <div key={i} className="text-sm">
                            <span className="text-indigo-400 font-black mr-2 uppercase tracking-tighter text-[10px]">{s.speaker}:</span>
                            <span className="text-slate-300 leading-relaxed font-medium">{s.text}</span>
                        </div>
                    ))}
                </div>
            );
        }

        // Object format (Part 1 - options A, B, C, D)
        if (typeof item.script === 'object') {
            return (
                <div className="space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-white/5">
                    {['A', 'B', 'C', 'D'].map(label => (
                        <div key={label} className="text-sm space-y-1 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="flex items-start gap-3">
                                <span className={cn(
                                    "w-5 h-5 rounded flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5",
                                    label === item.correctAnswer ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-slate-500"
                                )}>
                                    {label}
                                </span>
                                <p className="text-slate-300 font-medium">{(item.script as any)[label]}</p>
                            </div>
                            {(item.script as any)[`translation_${label}`] && (
                                <p className="text-[11px] text-slate-500 italic ml-8">{(item.script as any)[`translation_${label}`]}</p>
                            )}
                        </div>
                    ))}
                </div>
            );
        }

        // Fallback or String
        return (
            <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 text-sm text-slate-300 leading-relaxed italic border-l-2 border-indigo-500/30">
                {String(item.script)}
            </div>
        );
    };

    // Extract cleaner question number
    const qNum = item.id.includes('-q') ? item.id.split('-q')[1] : (item.questionNo || index);

    return (
        <Card className="rounded-[2.5rem] border border-white/5 bg-slate-900/40 overflow-hidden group hover:border-white/10 transition-all">
            <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-10">
                    <div className="flex items-center gap-4">
                        <span className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center font-black text-indigo-400 text-2xl border border-white/5 italic shadow-inner">
                            {qNum}
                        </span>
                        {isLC && item.audio && (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={toggleAudio}
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg",
                                        isPlaying ? "bg-rose-500 text-white shadow-rose-500/20" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                                    )}
                                >
                                    {isPlaying ? <Activity size={20} className="animate-pulse" /> : <Play size={20} />}
                                </button>
                                <audio
                                    ref={audioRef}
                                    src={item.audio}
                                    onEnded={() => setIsPlaying(false)}
                                    className="hidden"
                                />
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{isPlaying ? "Listening Now" : "Play Question Audio"}</span>
                            </div>
                        )}
                    </div>
                    {(userAnswer !== undefined && userAnswer !== null) ? (
                        <div className={cn(
                            "px-5 py-2.5 rounded-full border flex items-center gap-2.5 font-black text-[10px] uppercase italic tracking-widest shadow-lg",
                            isCorrect ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-rose-500/10 border-rose-500/20 text-rose-400"
                        )}>
                            {isCorrect ? <CheckCircle2 size={14} className="animate-pulse" /> : <XCircle size={14} />}
                            {isCorrect ? "Analysis Pass" : `Incorrect Choice (${userAnswer})`}
                        </div>
                    ) : (
                        <div className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-white/5 text-slate-500 font-black text-[10px] uppercase italic tracking-widest">
                            No Response Found
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {item.image && (
                            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 p-2">
                                <img src={item.image} alt="Question" className="w-full h-auto rounded-[1.5rem]" />
                            </div>
                        )}
                        <div className="text-2xl font-black leading-tight tracking-tight text-white italic">
                            <TouchDictionary text={item.text || item.question || "Listen to the audio and select the best response."} />
                        </div>
                        {item.options && (
                            <div className="grid gap-3">
                                {(Array.isArray(item.options) ? item.options : Object.entries(item.options).map(([label, text]) => ({ label, text: `(${label}) ${text}` }))).map((opt: any, idx: number) => {
                                    const label = typeof opt === 'string'
                                        ? (opt.startsWith('(') ? opt.charAt(1) : opt)
                                        : opt.label;
                                    const isAns = label === item.correctAnswer;
                                    const isUser = label === userAnswer;

                                    return (
                                        <div key={`${label}-${idx}`} className={cn(
                                            "px-6 py-5 rounded-2xl border transition-all text-sm font-bold flex items-center gap-4",
                                            isAns ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 ring-1 ring-emerald-500/20" :
                                                isUser && !isAns ? "bg-rose-500/10 border-rose-500/30 text-rose-400" :
                                                    "bg-white/5 border-white/5 text-slate-400"
                                        )}>
                                            <span className={cn(
                                                "w-6 h-6 rounded-lg flex items-center justify-center font-black text-[10px] italic shadow-sm",
                                                isAns ? "bg-emerald-500 text-emerald-950" : "bg-white/10"
                                            )}>{label}</span>
                                            {typeof opt === 'string' ? opt : opt.text}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className="space-y-10 lg:bg-white/[0.03] lg:p-10 lg:rounded-[3rem] lg:border lg:border-white/5">
                        {/* Script Section */}
                        {item.script && (
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-indigo-400">
                                    <Headphones size={20} />
                                    <h5 className="text-[10px] font-black uppercase tracking-widest italic">Listening Context</h5>
                                </div>
                                {renderScript()}
                            </div>
                        )}

                        {/* Explanation Section */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-amber-500">
                                <Sparkles size={20} />
                                <h5 className="text-[10px] font-black uppercase tracking-widest italic">강쌤의 족집게 해설</h5>
                            </div>
                            <div className="bg-amber-500/5 p-8 rounded-[2rem] border border-amber-500/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/5 rounded-full blur-2xl"></div>
                                <p className="text-sm text-slate-200 leading-relaxed font-semibold relative z-10">
                                    {item.explanation || "이 문제의 핵심 포인트와 정답 근거를 지문에서 다시 파악해보세요. 기본 어휘와 문법 사항이 정답의 실마리입니다."}
                                </p>
                            </div>
                        </div>

                        {/* Translation Section */}
                        {(item.translation || item.translation_script) && (
                            <div className="space-y-4 pt-6 border-t border-white/5">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <Languages size={20} />
                                    <h5 className="text-[10px] font-black uppercase tracking-widest italic">Professional Translation</h5>
                                </div>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed italic border-l-2 border-white/10 pl-6">
                                    {item.translation || item.translation_script}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}

function SolutionSet({ set, userAnswers, isLC, getUserAnswer }: any) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4 px-4">
                <div className="h-0.5 flex-1 bg-white/5"></div>
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-indigo-400 border-indigo-400/20 px-4 py-1.5 uppercase italic font-black text-[10px]">
                        {set.questionRange || "Questions"}
                    </Badge>
                    {isLC && set.audio && (
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleAudio}
                                className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg",
                                    isPlaying ? "bg-rose-500 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white"
                                )}
                            >
                                {isPlaying ? <Activity size={16} className="animate-pulse" /> : <Play size={16} />}
                            </button>
                            <audio
                                ref={audioRef}
                                src={set.audio}
                                onEnded={() => setIsPlaying(false)}
                                className="hidden"
                            />
                        </div>
                    )}
                </div>
                <div className="h-0.5 flex-1 bg-white/5"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Passage Column */}
                <div className="lg:col-span-7 space-y-6">
                    {set.passages ? (
                        set.passages.map((p: any, pi: number) => (
                            <div key={pi} className="space-y-4">
                                <Card className="rounded-[2rem] bg-white text-slate-900 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
                                    {p.title && <h4 className="text-center font-black text-lg border-b pb-4 mb-6 uppercase tracking-tight">{p.title}</h4>}
                                    <div className="font-serif text-lg leading-relaxed whitespace-pre-wrap text-justify select-none">
                                        <TouchDictionary text={p.content} />
                                    </div>
                                </Card>
                                {p.translation && (
                                    <div className="bg-white/[0.03] p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-4">
                                        <div className="flex items-center gap-2 text-slate-500 mb-2">
                                            <Languages size={18} />
                                            <h5 className="text-[10px] font-black uppercase tracking-widest italic">Passage Translation</h5>
                                        </div>
                                        <div className="text-sm text-slate-400 leading-relaxed font-medium italic border-l-2 border-white/10 pl-6">
                                            {p.translation}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : null}

                    {/* LC Script Section */}
                    {set.script && (
                        <div className="space-y-6">
                            <div className="bg-indigo-500/5 p-8 md:p-10 rounded-[2.5rem] border border-indigo-500/10 space-y-4">
                                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                                    <Headphones size={18} />
                                    <h5 className="text-[10px] font-black uppercase tracking-widest italic">Full Audio Script</h5>
                                </div>
                                <div className="space-y-4">
                                    {Array.isArray(set.script) ? (
                                        set.script.map((s: any, i: number) => (
                                            <div key={i} className="text-sm leading-relaxed">
                                                <span className="text-indigo-400 font-black mr-2 uppercase tracking-tighter text-[10px]">{s.speaker}:</span>
                                                <span className="text-slate-300">{s.text}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-slate-300 italic whitespace-pre-wrap">{String(set.script)}</p>
                                    )}
                                </div>
                            </div>

                            {set.translation && (
                                <div className="bg-white/[0.03] p-8 md:p-10 rounded-[2.5rem] border border-white/5 space-y-4">
                                    <div className="flex items-center gap-2 text-slate-500 mb-2">
                                        <Languages size={18} />
                                        <h5 className="text-[10px] font-black uppercase tracking-widest italic">Professional Script Translation</h5>
                                    </div>
                                    <div className="text-sm text-slate-400 leading-relaxed font-medium italic border-l-2 border-white/10 pl-6 whitespace-pre-wrap">
                                        {set.translation}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Questions Column */}
                <div className="lg:col-span-5 space-y-6">
                    {set.questions.filter((q: any) => getUserAnswer(q.id) !== (q.correctAnswer || (q as any).answer)).map((q: any) => (
                        <SolutionCardSmall
                            key={q.id}
                            q={q}
                            userAnswer={getUserAnswer(q.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SolutionCardSmall({ q, userAnswer }: any) {
    const isCorrect = userAnswer === q.correctAnswer;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card className={cn(
            "rounded-3xl border transition-all overflow-hidden",
            isCorrect ? "bg-emerald-500/5 border-emerald-500/10" : "bg-rose-500/5 border-rose-500/10"
        )}>
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <span className="text-xs font-black text-slate-500 uppercase italic">Q{q.id.split('-q')[1] || q.id}</span>
                    <Badge className={cn(
                        "font-black text-[9px] uppercase italic",
                        isCorrect ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    )}>
                        {isCorrect ? "Matched" : `Point Loss (${userAnswer || 'X'})`}
                    </Badge>
                </div>
                <h5 className="font-bold text-slate-100 leading-tight">
                    <TouchDictionary text={q.text || q.question || ""} />
                </h5>

                <div className="grid gap-2">
                    {(Array.isArray(q.options) ? q.options : Object.entries(q.options).map(([label, text]) => ({ label, text: `(${label}) ${text}` }))).map((opt: any, idx: number) => {
                        const label = typeof opt === 'string'
                            ? (opt.startsWith('(') ? opt.charAt(1) : opt)
                            : opt.label;
                        const correctAns = q.correctAnswer || q.answer;
                        const isAns = label === correctAns;
                        const isUser = label === userAnswer;

                        return (
                            <div key={`${label}-${idx}`} className={cn(
                                "px-4 py-2 text-xs rounded-xl border flex items-center gap-2 transition-all",
                                isAns ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-bold" :
                                    isUser ? "bg-rose-500/10 border-rose-500/30 text-rose-400" :
                                        "bg-white/5 border-white/5 text-slate-500"
                            )}>
                                <span className={cn(
                                    "w-5 h-5 rounded flex items-center justify-center font-black text-[9px]",
                                    isAns ? "bg-emerald-500 text-emerald-950" : "bg-white/5"
                                )}>{label}</span>
                                <span className="flex-1">{typeof opt === 'string' ? (opt.includes(') ') ? opt.split(') ')[1] : opt) : opt.text}</span>
                            </div>
                        );
                    })}
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full py-3 text-[10px] font-black uppercase text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center gap-2 border-t border-white/5"
                >
                    <Search size={12} />
                    {isExpanded ? "Close Analysis" : "Show Analysis"}
                </button>

                {isExpanded && (
                    <div className="pt-6 space-y-6 animate-in fade-in slide-in-from-top-2 border-t border-white/5 mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-amber-500">
                                <Sparkles size={14} />
                                <p className="text-[10px] font-black uppercase tracking-widest italic">강쌤의 족집게 해설</p>
                            </div>
                            <div className="bg-amber-500/5 p-5 rounded-2xl border border-amber-500/10">
                                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                    {q.explanation || "이 문제의 핵심 포인트와 정답 근거를 지문에서 다시 파악해보세요. 기본 어휘와 문법 사항이 정답의 실마리입니다."}
                                </p>
                            </div>
                        </div>
                        {q.translation && (
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-500">
                                    <Languages size={14} />
                                    <p className="text-[10px] font-black uppercase tracking-widest italic">Translation</p>
                                </div>
                                <p className="text-[11px] text-slate-400 font-medium italic border-l-2 border-white/10 pl-4">
                                    {q.translation}
                                </p>
                            </div>
                        )}
                        <div className="flex items-center gap-2 bg-indigo-500/10 w-fit px-3 py-1.5 rounded-lg border border-indigo-500/20">
                            <Tag size={12} className="text-indigo-400" />
                            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">{q.classification || "General Question"}</span>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
}
