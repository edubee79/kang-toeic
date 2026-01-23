"use client";

import React, { useState, useEffect, useRef } from "react";
import { test9Part5, test9Part6, test9Part7Single, test9Part7Multi } from "@/data/mock/set9_data";
import { ChevronLeft, ChevronRight, Clock, Info, CheckCircle2 } from "lucide-react";

interface Props {
    onFinishExam: (answers: Record<string, string>) => void;
    initialAnswers?: Record<string, string>;
}

export default function MockTest_RC_Set9({ onFinishExam, initialAnswers = {} }: Props) {
    const [currentSpread, setCurrentSpread] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
    const [timeLeft, setTimeLeft] = useState(75 * 60); // 75 minutes
    const lastAdvancedSpreadRef = useRef<number>(-1);
    const mainContainerRef = React.useRef<HTMLDivElement>(null);

    // Scroll to top when spread changes
    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollTop = 0;
        }
    }, [currentSpread]);

    // Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    alert("시험 시간이 종료되었습니다. 자동으로 제출합니다.");
                    onFinishExam(answers);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [answers, onFinishExam]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    const handleAnswer = (qId: string, value: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: value };

            // Check if current spread is complete
            const currentQuestions = getRCSpreadQuestions(currentSpread);
            const isComplete = currentQuestions.every(id => newAnswers[id]);

            if (isComplete && currentSpread < totalSpreads - 1 && lastAdvancedSpreadRef.current !== currentSpread) {
                lastAdvancedSpreadRef.current = currentSpread;
                // Auto advance with a small delay for better UX
                setTimeout(() => {
                    setCurrentSpread(s => s + 1);
                }, 600);
            }

            return newAnswers;
        });
    };

    const nextSpread = () => {
        const currentQuestions = getRCSpreadQuestions(currentSpread);
        const unanswered = currentQuestions.filter(qId => !answers[qId]);

        if (unanswered.length > 0) {
            alert(`현재 페이지의 모든 문제를 풀어주세요. (남은 문제: ${unanswered.length}개)`);
            return;
        }
        setCurrentSpread(s => s + 1);
    }

    const getRCSpreadQuestions = (idx: number): string[] => {
        const qIds: string[] = [];
        if (idx === 0) {
            test9Part5.slice(0, 20).forEach(q => qIds.push(String(q.id)));
        } else if (idx === 1) {
            test9Part5.slice(20, 30).forEach(q => qIds.push(String(q.id)));
            test9Part6[0].questions.forEach((q: any) => qIds.push(String(q.id)));
        } else if (idx === 2) {
            test9Part6[1].questions.forEach((q: any) => qIds.push(String(q.id)));
            test9Part6[2].questions.forEach((q: any) => qIds.push(String(q.id)));
        } else if (idx === 3) {
            test9Part6[3].questions.forEach((q: any) => qIds.push(String(q.id)));
            test9Part7Single[0].questions.forEach((q: any) => qIds.push(String(q.id)));
        } else {
            // Dynamic logic for later spreads
            const singleCount = test9Part7Single.length;
            const singleSpreads = Math.ceil((singleCount - 1) / 2) + 4;

            if (idx < singleSpreads) {
                const singleOffset = (idx - 4) * 2 + 1;
                test9Part7Single[singleOffset]?.questions.forEach((q: any) => qIds.push(String(q.id)));
                test9Part7Single[singleOffset + 1]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            } else {
                const multiIdx = idx - singleSpreads;
                test9Part7Multi[multiIdx]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            }
        }
        return qIds;
    };
    const prevSpread = () => setCurrentSpread(s => s - 1);

    const totalSpreads = 14;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen bg-white overflow-hidden text-slate-900 select-none">
            {/* Header */}
            <header className="h-14 border-b bg-white flex items-center justify-between px-6 shrink-0 z-30">
                <div className="flex items-center gap-6">
                    <span className="font-black italic text-xl tracking-tighter">KANG'S <span className="text-indigo-600">TOEIC</span></span>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-widest">제1회 실전 모의고사: Reading Section</span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
                    <button onClick={prevSpread} disabled={currentSpread === 0} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 transition-all">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Spread</span>
                        <span className="font-mono text-lg font-bold leading-none">{currentSpread + 1} / {totalSpreads}</span>
                    </div>
                    <button onClick={nextSpread} disabled={currentSpread === totalSpreads - 1} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full border-2 ${timeLeft < 300 ? 'border-rose-500 text-rose-600 animate-pulse' : 'border-slate-800 text-slate-800'}`}>
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-lg font-black">{formatTime(timeLeft)}</span>
                    </div>
                    <button onClick={() => confirm("시험을 종료하고 제출하시겠습니까?") && onFinishExam(answers)} className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-95">
                        Submit
                    </button>
                </div>
            </header>

            <main ref={mainContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative flex bg-slate-100/50">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>
                <div className="w-full h-fit min-h-full flex">
                    {renderRCSpread(currentSpread, answers, handleAnswer)}
                </div>
            </main>

            <style jsx global>{`
                .booklet-page {
                    width: 50%;
                    padding: 40px 60px;
                    background: white;
                    min-height: 100%;
                    box-shadow: 0 0 40px rgba(0,0,0,0.02);
                }
                .directions-box {
                    background: #f8fafc;
                    border: 2px solid #e2e8f0;
                    padding: 16px;
                    border-radius: 8px;
                    margin-bottom: 24px;
                    font-size: 13px;
                }
                .column-divider-RC {
                    width: 1.5px;
                    background: #475569;
                    opacity: 0.15;
                    margin: 0 24px;
                }
                .passage-box {
                    background: #fff;
                    border: 1.5px solid #cbd5e1;
                    padding: 24px;
                    border-radius: 8px;
                    margin-bottom: 24px;
                    font-family: serif;
                    font-size: 15px;
                    line-height: 1.6;
                    color: #020617;
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
                }
                .option-row {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 2px 8px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.1s;
                }
                .option-row:hover { background: #f1f5f9; }
                .option-mark {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 1.5px solid #64748b;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    font-weight: 900;
                    color: #475569;
                    flex-shrink: 0;
                }
                .option-mark.active {
                    background: #4f46e5;
                    border-color: #4f46e5;
                    color: white;
                }
                .q-block {
                    margin-bottom: 24px;
                }
                .q-meta {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 8px;
                }
                .q-id-badge {
                    background: #f1f5f9;
                    color: #64748b;
                    font-weight: 900;
                    font-size: 11px;
                    padding: 2px 8px;
                    border-radius: 4px;
                    border: 1px solid #e2e8f0;
                }
                .passage-label {
                    display: inline-block;
                    background: #334155;
                    color: white;
                    font-size: 10px;
                    font-weight: 900;
                    padding: 2px 8px;
                    border-radius: 4px;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                }
            `}</style>
        </div>
    );
}

function renderRCSpread(spreadIdx: number, answers: any, onAnswer: any) {
    if (spreadIdx === 0) {
        return (
            <>
                <div className="booklet-page">
                    <h2 className="text-3xl font-black text-slate-800 mb-6 uppercase tracking-tighter italic">Reading Test</h2>
                    <div className="directions-box">
                        <span className="font-black text-indigo-600 block mb-1 uppercase">Part 5</span>
                        <strong>Directions:</strong> A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence.
                    </div>
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-4">{test9Part5.slice(0, 5).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{test9Part5.slice(5, 10).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page pt-[120px]">
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-4">{test9Part5.slice(10, 15).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{test9Part5.slice(15, 20).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
            </>
        );
    }

    if (spreadIdx === 1) {
        return (
            <>
                <div className="booklet-page">
                    <div className="flex h-fit mt-12">
                        <div className="flex-1 space-y-4">{test9Part5.slice(20, 25).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{test9Part5.slice(25, 30).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page">
                    <div className="directions-box !py-2 !mb-4 text-[11px]">
                        <span className="font-black text-indigo-600 mr-2 uppercase">Part 6</span>
                        <strong>Directions:</strong> Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each empty space are shown below the text.
                    </div>
                    {renderP6Set(test9Part6[0], answers, onAnswer)}
                </div>
            </>
        );
    }

    if (spreadIdx === 2) {
        return (
            <>
                <div className="booklet-page">{renderP6Set(test9Part6[1], answers, onAnswer)}</div>
                <div className="booklet-page">{renderP6Set(test9Part6[2], answers, onAnswer)}</div>
            </>
        );
    }

    if (spreadIdx === 3) {
        return (
            <>
                <div className="booklet-page">{renderP6Set(test9Part6[3], answers, onAnswer)}</div>
                <div className="booklet-page">
                    <div className="directions-box !py-2 !mb-4 text-[11px]">
                        <span className="font-black text-indigo-600 mr-2 uppercase">Part 7</span>
                        <strong>Directions:</strong> In this part you will read a selection of texts. Select the best answer for each question.
                    </div>
                    {renderP7SingleSet(test9Part7Single[0], answers, onAnswer)}
                </div>
            </>
        );
    }

    // Dynamic Single Sets (Idx 1 to last)
    // p7SingleIdx 1 starts at spread 4.L
    const singleOffset = (spreadIdx - 4) * 2 + 1;
    if (singleOffset < test9Part7Single.length) {
        return (
            <>
                <div className="booklet-page">{renderP7SingleSet(test9Part7Single[singleOffset], answers, onAnswer)}</div>
                <div className="booklet-page">{test9Part7Single[singleOffset + 1] && renderP7SingleSet(test9Part7Single[singleOffset + 1], answers, onAnswer)}</div>
            </>
        );
    }

    // Multi Sets starts after all single sets are rendered
    // Calculate Multi start spread
    const singleCount = test9Part7Single.length; // usually 10-12
    const singleSpreads = Math.ceil((singleCount - 1) / 2) + 4;

    const multiIdx = spreadIdx - singleSpreads;
    if (multiIdx >= 0 && multiIdx < test9Part7Multi.length) {
        return renderP7MultiSpread(test9Part7Multi[multiIdx], answers, onAnswer);
    }

    return null;
}

function renderP5Question(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="q-block">
            <div className="q-meta">
                <span className="q-id-badge">{q.id}</span>
            </div>
            <p className="text-[13px] font-black leading-relaxed text-black mb-2">{q.text}</p>
            <div className="space-y-0.5">
                {q.options.map((opt: any) => {
                    let label = "";
                    let text = "";

                    if (typeof opt === 'string') {
                        const labelMatch = opt.match(/\(([ABCD])\)/);
                        label = labelMatch ? labelMatch[1] : "";
                        text = opt.replace(`(${label})`, "").trim();
                    } else {
                        label = opt.label;
                        text = opt.text;
                    }

                    const isSelected = answers[q.id] === label;
                    return (
                        <div key={label} onClick={() => onAnswer(q.id, label)} className="option-row">
                            <div className={`option-mark ${isSelected ? 'active' : ''}`}>{label}</div>
                            <span className={`text-[13px] ${isSelected ? 'font-black text-indigo-700' : 'font-bold text-slate-800'}`}>{text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function renderP6Set(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    return (
        <div className="flex flex-col h-full">
            <div className="passage-box whitespace-pre-wrap">{set.content}</div>
            <div className="flex-1 flex gap-0 mt-4 h-fit">
                <div className="flex-1 space-y-6">
                    {set.questions.slice(0, 2).map((q: any) => renderP5Question(q, answers, onAnswer))}
                </div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-6">
                    {set.questions.slice(2).map((q: any) => renderP5Question(q, answers, onAnswer))}
                </div>
            </div>
        </div>
    );
}

function renderP7SingleSet(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const qCount = set.questions.length;
    const mid = Math.ceil(qCount / 2);

    return (
        <div className="flex flex-col h-full">
            <div className="passage-box">
                {set.passages.map((p: any) => (
                    <div key={p.id} className="mb-4">
                        <span className="passage-label">{p.type || 'Text'}</span>
                        {p.title && <h3 className="font-black text-sm border-b mb-2 uppercase">{p.title}</h3>}
                        <div className="whitespace-pre-wrap text-sm font-bold text-slate-900">{p.content}</div>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex gap-1 mt-2">
                <div className="flex-1 space-y-6">
                    {set.questions.slice(0, mid).map((q: any) => renderP7Question(q, answers, onAnswer))}
                </div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-6">
                    {set.questions.slice(mid).map((q: any) => renderP7Question(q, answers, onAnswer))}
                </div>
            </div>
        </div>
    );
}

function renderP7MultiSpread(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const passages = set.passages;
    const questions = set.questions;

    // Layout: 
    // Double: L (P1, P2), R (Q)
    // Triple: L (P1, P2), R (P3, Q)

    if (set.type === 'Double' || passages.length === 2) {
        return (
            <>
                <div className="booklet-page">
                    <div className="space-y-8">
                        {passages.map((p: any) => (
                            <div key={p.id} className="passage-box !mb-0">
                                <span className="passage-label">{p.type}</span>
                                {p.title && <h3 className="font-black text-sm border-b mb-2 uppercase">{p.title}</h3>}
                                <div className="whitespace-pre-wrap text-[14px] font-bold text-slate-900">{p.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="booklet-page">
                    <div className="flex-1 space-y-6">
                        {questions.map((q: any) => renderP7Question(q, answers, onAnswer))}
                    </div>
                </div>
            </>
        );
    }

    // Triple
    return (
        <>
            <div className="booklet-page">
                <div className="space-y-6">
                    {passages.slice(0, 2).map((p: any) => (
                        <div key={p.id} className="passage-box !mb-0">
                            <span className="passage-label">{p.type}</span>
                            {p.title && <h3 className="font-black text-sm border-b mb-2 uppercase">{p.title}</h3>}
                            <div className="whitespace-pre-wrap text-[13px] font-bold text-slate-900">{p.content}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="booklet-page">
                <div className="passage-box !mb-6 !p-4">
                    <span className="passage-label">{passages[2].type}</span>
                    {passages[2].title && <h3 className="font-black text-xs border-b mb-1 uppercase">{passages[2].title}</h3>}
                    <div className="whitespace-pre-wrap text-[13px] font-bold text-slate-1000 text-black">{passages[2].content}</div>
                </div>
                <div className="space-y-6">
                    {questions.map((q: any) => renderP7Question(q, answers, onAnswer))}
                </div>
            </div>
        </>
    );
}

function renderP7Question(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="q-block border-b border-slate-50 pb-4">
            <div className="flex items-start gap-2 mb-2">
                <span className="q-id-badge shrink-0">{q.id}</span>
                <p className="text-[13px] font-black leading-snug text-black">{q.text}</p>
            </div>
            <div className="space-y-0.5 pl-8">
                {q.options.map((opt: any) => {
                    let label = "";
                    let text = "";

                    if (typeof opt === 'string') {
                        const match = opt.match(/\(([ABCD])\)\s*(.*)/);
                        label = match ? match[1] : "";
                        text = match ? match[2] : opt;
                    } else {
                        label = opt.label;
                        text = opt.text;
                    }

                    const isSelected = answers[q.id] === label;
                    return (
                        <div key={label} onClick={() => onAnswer(q.id, label)} className="option-row !items-start">
                            <div className={`option-mark !mt-0.5 ${isSelected ? 'active' : ''}`}>{label}</div>
                            <span className={`text-[13px] leading-tight ${isSelected ? 'font-black text-indigo-700' : 'font-bold text-slate-800'}`}>{text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
