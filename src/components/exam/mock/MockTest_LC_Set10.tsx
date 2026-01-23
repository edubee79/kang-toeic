"use client";

import React, { useState, useEffect, useRef } from "react";
import { test10Part1, test10Part2, test10Part3, test10Part4, test10FullLCAudio } from "@/data/mock/set10_data";
import { ChevronLeft, ChevronRight, Clock, Volume2, Monitor } from "lucide-react";
import Image from "next/image";

interface Props {
    onFinishLC: (answers: Record<string, string>) => void;
}

export default function MockTest_LC_Set10({ onFinishLC }: Props) {
    const [currentSpread, setCurrentSpread] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const lastAdvancedSpreadRef = useRef<number>(-1);
    const mainContainerRef = useRef<HTMLDivElement>(null);

    // Scroll to top when spread changes
    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollTop = 0;
        }
    }, [currentSpread]);

    // Answer handler
    const handleAnswer = (qId: string, value: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: value };

            // Check if current spread is complete
            const currentQuestions = getSpreadQuestions(currentSpread);
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

    // Audio Control (Starting once at the beginning) - User requested no pausing
    const startExam = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 5; // Skip intro (YBM etc.)
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    // Pagination
    const totalSpreads = 6; // Spread 0 to 5

    const nextSpread = () => {
        // Validation: Check if all questions on current spread are answered
        const currentQuestions = getSpreadQuestions(currentSpread);
        const unanswered = currentQuestions.filter(qId => !answers[qId]);

        if (unanswered.length > 0) {
            alert(`현재 페이지의 모든 문제를 풀어주세요. (남은 문제: ${unanswered.length}개)`);
            return;
        }

        if (currentSpread < totalSpreads - 1) setCurrentSpread(s => s + 1);
        else {
            if (confirm("Listening 파트를 종료하고 Reading 파트로 넘어가시겠습니까?")) {
                onFinishLC(answers);
            }
        }
    };

    const getSpreadQuestions = (idx: number): string[] => {
        const qIds: string[] = [];
        if (idx === 0) [1, 2].forEach(n => qIds.push(`p1_${n}`));
        if (idx === 1) [3, 4, 5, 6].forEach(n => qIds.push(`p1_${n}`));
        if (idx === 2) {
            test10Part2.forEach(q => qIds.push(`p2_${q.id}`));
            test10Part3.slice(0, 4).forEach(set => set.questions.forEach((q: any) => qIds.push(q.id)));
        }
        if (idx === 3) {
            test10Part3.slice(4, 11).forEach(set => set.questions.forEach((q: any) => qIds.push(q.id)));
        }
        if (idx === 4) {
            test10Part3.slice(11, 13).forEach(set => set.questions.forEach((q: any) => qIds.push(q.id)));
            test10Part4.slice(0, 4).forEach(set => set.questions.forEach((q: any) => qIds.push(q.id)));
        }
        if (idx === 5) {
            test10Part4.slice(4, 10).forEach(set => set.questions.forEach((q: any) => qIds.push(q.id)));
        }
        return qIds;
    };

    const prevSpread = () => {
        if (currentSpread > 0) setCurrentSpread(s => s - 1);
    };

    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen bg-white overflow-hidden text-slate-900 select-none">
            {/* Audio Element */}
            <audio ref={audioRef} src={test10FullLCAudio} onEnded={() => onFinishLC(answers)} />

            {/* Header */}
            <header className="h-14 border-b bg-white flex items-center justify-between px-6 shrink-0 z-30">
                <div className="flex items-center gap-6">
                    <span className="font-black italic text-xl tracking-tighter">KANG'S <span className="text-indigo-600">TOEIC</span></span>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-widest">제2회 실전 모의고사: Listening Section</span>
                </div>

                {/* Central Navigator */}
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
                    <button onClick={prevSpread} disabled={currentSpread === 0} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 transition-all">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Spread</span>
                        <span className="font-mono text-lg font-bold leading-none">{currentSpread + 1} / {totalSpreads}</span>
                    </div>
                    <button onClick={nextSpread} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {!isPlaying && (
                        <button onClick={startExam} className="bg-indigo-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 animate-pulse active:scale-95 transition-all">
                            Start Listening
                        </button>
                    )}
                    {isPlaying && (
                        <div className="flex items-center gap-2 text-indigo-600 animate-pulse">
                            <Volume2 className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Exam in Progress</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Test Area (Booklet View) */}
            <main ref={mainContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative flex bg-slate-100/50">
                {/* Vertical Central Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>

                <div className="w-full h-fit min-h-full flex">
                    {renderSpread(currentSpread, answers, handleAnswer)}
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
                    padding: 24px;
                    border-radius: 12px;
                    margin-bottom: 30px;
                    font-size: 14px;
                    line-height: 1.6;
                }
                .directions-title {
                    font-weight: 900;
                    font-size: 18px;
                    margin-bottom: 8px;
                    color: #1e293b;
                    letter-spacing: -0.025em;
                }
                .part-title {
                    font-weight: 900;
                    font-size: 24px;
                    margin-bottom: 16px;
                    color: #4f46e5;
                }
                .column-divider {
                    width: 1px;
                    background: #f1f5f9;
                    margin: 0 24px;
                }
                .q-item {
                    margin-bottom: 14px;
                    padding-bottom: 4px;
                }
                .q-num {
                    font-weight: 900;
                    margin-right: 8px;
                    color: #4f46e5;
                    font-size: 15px;
                }
                .q-text {
                    font-weight: 700;
                    font-size: 14px;
                    color: #1e293b;
                    margin-bottom: 8px;
                    line-height: 1.4;
                }
                .option-circle {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 2px solid #94a3b8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 900;
                    color: #475569;
                    cursor: pointer;
                    transition: all 0.2s;
                    background: white;
                    border: 2px solid #94a3b8;
                }
                .option-circle.selected {
                    background: #4f46e5;
                    border-color: #4f46e5;
                    color: white;
                    box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3);
                }
                .option-circle:hover:not(.selected) {
                    border-color: #4f46e5;
                    color: #4f46e5;
                }
                .p1-photo-container {
                    width: 100%;
                    aspect-ratio: 16/10;
                    background: #f1f5f9;
                    border: 2px solid #e2e8f0;
                    border-radius: 8px;
                    margin-bottom: 12px;
                    position: relative;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
}

function renderSpread(spreadIdx: number, answers: any, onAnswer: any) {
    switch (spreadIdx) {
        case 0: // P1 Directions | P1 Q1-2
            return (
                <>
                    <div className="booklet-page">
                        <h2 className="part-title">LISTENING TEST</h2>
                        <div className="directions-box">
                            In the Listening test, you will be asked to demonstrate how well you understand spoken English. The entire Listening test will last approximately 45 minutes. There are four parts, and directions are given for each part. You must mark your answers on the separate answer sheet. Do not write your answers in your test book.
                            <div className="h-8"></div>
                            <div className="directions-title">PART 1</div>
                            <strong>Directions:</strong> For each question in this part, you will hear four statements about a picture in your test book. When you hear the statements, you must select the one statement that best describes what you see in the picture. Then find the number of the question on your answer sheet and mark your answer. The statements will not be printed in your test book and will be spoken only one time.
                        </div>
                        <div className="mt-8 text-center bg-indigo-50 p-6 rounded-xl border-2 border-dashed border-indigo-200">
                            <Monitor className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
                            <p className="text-sm font-bold text-indigo-700">본 시험은 PC 환경에 최적화되어 있습니다.</p>
                            <p className="text-xs text-indigo-500 mt-1 italic">실제 시험지 레이아웃을 동일하게 재현했습니다.</p>
                        </div>
                    </div>
                    <div className="booklet-page">
                        <div className="flex flex-col gap-10">
                            {[1, 2].map(num => renderP1Question(num, answers, onAnswer))}
                        </div>
                    </div>
                </>
            );
        case 1: // P1 Q3-4 | P1 Q5-6
            return (
                <>
                    <div className="booklet-page">
                        <div className="flex flex-col gap-10">
                            {[3, 4].map(num => renderP1Question(num, answers, onAnswer))}
                        </div>
                    </div>
                    <div className="booklet-page">
                        <div className="flex flex-col gap-10">
                            {[5, 6].map(num => renderP1Question(num, answers, onAnswer))}
                        </div>
                    </div>
                </>
            );
        case 2: // P2 (25 Qs) | P3 Sets 1-4
            return (
                <>
                    <div className="booklet-page flex flex-col">
                        <div className="directions-box !py-3 !mb-5 text-[12px]">
                            <span className="font-black text-indigo-600 mr-2">PART 2</span>
                            <strong>Directions:</strong> You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.
                        </div>
                        <div className="flex-1 flex gap-0">
                            <div className="flex-1 space-y-2">
                                {test10Part2.slice(0, 13).map(q => renderP2Row(q, answers, onAnswer))}
                            </div>
                            <div className="column-divider"></div>
                            <div className="flex-1 space-y-2">
                                {test10Part2.slice(13).map(q => renderP2Row(q, answers, onAnswer))}
                            </div>
                        </div>
                    </div>
                    <div className="booklet-page flex flex-col">
                        <div className="directions-box !py-3 !mb-5 text-[12px]">
                            <span className="font-black text-indigo-600 mr-2">PART 3</span>
                            <strong>Directions:</strong> You will hear some conversations between two or more people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question.
                        </div>
                        {renderP34Page(test10Part3.slice(0, 4), answers, onAnswer)}
                    </div>
                </>
            );
        case 3: // P3 Sets 5-8 | P3 Sets 9-12
            return (
                <>
                    <div className="booklet-page">
                        {renderP34Page(test10Part3.slice(4, 8), answers, onAnswer)}
                    </div>
                    <div className="booklet-page">
                        <div className="flex h-full gap-8">
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part3.slice(8, 10).map(set => renderP34Set(set, answers, onAnswer))}
                            </div>
                            <div className="w-px bg-slate-100 my-4"></div>
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part3.slice(10, 11).map(set => renderP34Set(set, answers, onAnswer))}
                            </div>
                        </div>
                    </div>
                </>
            );
        case 4: // P3 Set 13 + P4 Sets 1-3 | P4 Sets 4-7
            return (
                <>
                    <div className="booklet-page">
                        <div className="flex h-full gap-8">
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part3.slice(11, 12).map(set => renderP34Set(set, answers, onAnswer))}
                            </div>
                            <div className="w-px bg-slate-100 my-4"></div>
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part3.slice(12, 13).map(set => renderP34Set(set, answers, onAnswer))}
                            </div>
                        </div>
                        <div className="border-t pt-4 mt-6">
                            <span className="font-black text-indigo-600 text-[12px] block mb-2 underline decoration-2 underline-offset-4">PART 4 STARTS HERE</span>
                        </div>
                    </div>
                    <div className="booklet-page">
                        {renderP34Page(test10Part4.slice(0, 4), answers, onAnswer)}
                    </div>
                </>
            );
        case 5: // P4 Sets 5-8 | P4 Sets 9-10
            return (
                <>
                    <div className="booklet-page">
                        {renderP34Page(test10Part4.slice(4, 8), answers, onAnswer)}
                    </div>
                    <div className="booklet-page">
                        <div className="flex h-full gap-8">
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part4.slice(8, 9).map(set => renderP34Set(set, answers, onAnswer))}
                            </div>
                            <div className="w-px bg-slate-100 my-4"></div>
                            <div className="flex-1 flex flex-col gap-6">
                                {test10Part4.slice(9, 10).map(set => renderP34Set(set, answers, onAnswer))}
                                <div className="mt-12 text-center opacity-10 select-none border-t pt-8">
                                    <span className="font-black text-4xl block mb-2 italic tracking-tighter text-slate-900">LISTENING END</span>
                                    <p className="font-bold text-sm uppercase tracking-widest text-slate-800">Please continue to Reading Section</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        default:
            return <div className="p-20">End of Listening Section</div>;
    }
}

function renderP34Page(sets: any[], answers: any, onAnswer: any) {
    return (
        <div className="flex h-full gap-8">
            <div className="flex-1 flex flex-col gap-6">
                {sets.slice(0, 2).map(set => renderP34Set(set, answers, onAnswer))}
            </div>
            <div className="w-px bg-slate-100 my-4"></div>
            <div className="flex-1 flex flex-col gap-6">
                {sets.slice(2, 4).map(set => renderP34Set(set, answers, onAnswer))}
            </div>
        </div>
    );
}

// Sub-renderers
function renderP1Question(num: number, answers: any, onAnswer: any) {
    const qData = test10Part1[num - 1];
    return (
        <div key={num} className="w-full">
            <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-2xl font-black text-slate-800 italic">0{num}.</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question {num}</span>
            </div>
            <div className="p1-photo-container !h-auto !aspect-auto">
                {qData?.image && <img src={qData.image} alt={`Q${num}`} className="w-full h-auto object-contain max-h-[400px]" />}
                <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
            </div>
            <div className="flex justify-center gap-12 mt-4">
                {['A', 'B', 'C', 'D'].map(opt => (
                    <div key={opt} onClick={() => onAnswer(`p1_${num}`, opt)} className={`option-circle ${answers[`p1_${num}`] === opt ? 'selected' : ''}`}>
                        {opt}
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderP2Row(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="flex items-center justify-between py-1.5 px-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0">
            <span className="q-num !m-0 !w-8">{q.id}.</span>
            <div className="flex gap-4">
                {['A', 'B', 'C'].map(opt => (
                    <div key={opt} onClick={() => onAnswer(`p2_${q.id}`, opt)} className={`option-circle !w-10 !h-10 !text-[16px] ${answers[`p2_${q.id}`] === opt ? 'selected' : ''}`}>
                        {opt}
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderP34Set(set: any, answers: any, onAnswer: any) {
    return (
        <div key={set.setId} className="flex flex-col gap-3">
            <div className="text-[10px] font-black text-slate-400 bg-slate-50 inline-block px-2 py-0.5 rounded border mb-1">
                Qs {set.questionRange}
            </div>
            {set.image && (
                <div className="w-full aspect-[4/3] bg-slate-100 rounded border flex items-center justify-center mb-2 overflow-hidden">
                    <img src={set.image} alt="Graphic" className="w-full h-full object-contain" />
                </div>
            )}
            <div className="space-y-4">
                {set.questions.map((q: any) => (
                    <div key={q.id} className="q-item">
                        <div className="q-text !mb-2 flex items-start gap-1">
                            <span className="text-indigo-600 shrink-0">{q.id.replace('q', '')}.</span>
                            <span>{q.text}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 pl-4">
                            {q.options.map((opt: any) => (
                                <div key={opt.label} onClick={() => onAnswer(q.id, opt.label)} className="flex items-center gap-3 cursor-pointer group py-0.5">
                                    <div className={`option-circle !w-8 !h-8 !text-[14px] shrink-0 ${answers[q.id] === opt.label ? 'selected' : ''}`}>
                                        {opt.label}
                                    </div>
                                    <span className={`text-[15px] leading-tight ${answers[q.id] === opt.label ? 'text-indigo-600 font-bold' : 'text-slate-800 group-hover:text-indigo-600'}`}>
                                        {opt.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
