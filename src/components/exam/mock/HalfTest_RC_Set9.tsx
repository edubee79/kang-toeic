"use client";

import React, { useState, useEffect, useRef } from "react";
import { half9aPart5, half9aPart6, half9aPart7 } from "@/data/mock/half_set9_a";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface Props {
    onFinishExam: (answers: Record<string, string>, timeLogs: Record<string, number>) => void;
    initialAnswers?: Record<string, string>;
}

/**
 * 하프테스트 RC 엔진 (50문항 고착 버전)
 * 1단계씩 정밀 확인하며 진행: P5(13), P6(8), P7S(14), P7M(15) = 50Qs
 */
export default function HalfTest_RC_Set9({ onFinishExam, initialAnswers = {} }: Props) {
    const [currentSpread, setCurrentSpread] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
    const [timeLeft, setTimeLeft] = useState(35 * 60);
    const [timeLogs, setTimeLogs] = useState<Record<string, number>>({ p5: 0, p6: 0, p7s: 0 });
    const lastCheckTimeRef = useRef<number>(35 * 60);
    const mainContainerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mainContainerRef.current) mainContainerRef.current.scrollTop = 0;
        const elapsedSinceLast = lastCheckTimeRef.current - timeLeft;
        let currentPartKey = "";

        // 시간 분석 체크포인트 (A형 기준)
        if (currentSpread === 1 && timeLogs.p5 === 0) currentPartKey = "p5";
        else if (currentSpread === 2 && timeLogs.p6 === 0) currentPartKey = "p6";
        else if (currentSpread === 5 && timeLogs.p7s === 0) currentPartKey = "p7s"; // P7 Single 종료 시점

        if (currentPartKey) {
            setTimeLogs(prev => ({ ...prev, [currentPartKey]: elapsedSinceLast }));
            lastCheckTimeRef.current = timeLeft;
        }
    }, [currentSpread]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    handleInternalSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [answers]);

    const handleInternalSubmit = () => {
        const finalTime = lastCheckTimeRef.current - timeLeft;
        const finalLogs = { ...timeLogs, p7m: finalTime };
        onFinishExam(answers, finalLogs);
    };

    const lastAdvancedSpreadRef = useRef<number>(-1);

    const handleAnswer = (qId: string, value: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: value };

            // 현재 페이지 문항 추출
            const qIds: string[] = [];
            if (currentSpread === 0) {
                half9aPart5.forEach(q => qIds.push(q.id.toString()));
            } else if (currentSpread === 1) {
                half9aPart6.forEach(set => set.questions.forEach((q: any) => qIds.push(q.id.toString())));
            } else if (currentSpread >= 2 && currentSpread <= 4) {
                const startIdx = (currentSpread - 2) * 2;
                [half9aPart7[startIdx], half9aPart7[startIdx + 1]].forEach(set => {
                    if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
                });
            } else {
                const set = half9aPart7[currentSpread + 1];
                if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
            }

            // 모든 문항 마킹 완료 시 자동 이동
            const isComplete = qIds.length > 0 && qIds.every(id => newAnswers[id]);
            if (isComplete && currentSpread < totalSpreads - 1 && lastAdvancedSpreadRef.current !== currentSpread) {
                lastAdvancedSpreadRef.current = currentSpread;
                setTimeout(() => {
                    setCurrentSpread(s => s + 1);
                }, 600);
            }

            return newAnswers;
        });
    };

    // 현재 페이지의 모든 문항이 마킹되었는지 확인
    const nextSpread = () => {
        const qIds: string[] = [];
        if (currentSpread === 0) {
            half9aPart5.forEach(q => qIds.push(q.id.toString()));
        } else if (currentSpread === 1) {
            half9aPart6.forEach(set => set.questions.forEach((q: any) => qIds.push(q.id.toString())));
        } else if (currentSpread >= 2 && currentSpread <= 4) {
            const startIdx = (currentSpread - 2) * 2;
            [half9aPart7[startIdx], half9aPart7[startIdx + 1]].forEach(set => {
                if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
            });
        } else {
            const set = half9aPart7[currentSpread + 1];
            if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
        }

        const unanswered = qIds.filter(id => !answers[id]);
        if (unanswered.length > 0) {
            alert(`남은 문항이 있습니다. (${unanswered.length}문항)\n모든 문제를 풀어야 다음으로 넘어갈 수 있습니다.`);
            return;
        }

        if (currentSpread < totalSpreads - 1) {
            setCurrentSpread(s => s + 1);
        } else {
            console.log("[DEBUG] Final Page Navigation Triggered - Force Submitting");
            handleInternalSubmit();
        }
    }
    const prevSpread = () => setCurrentSpread(s => s - 1);
    const totalSpreads = 8; // P5(1), P6(1), P7S(3), P7D(1), P7T(2) = 8

    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen bg-white overflow-hidden text-slate-900 select-none">
            <header className="h-14 border-b bg-white flex items-center justify-between px-6 shrink-0 z-30 shadow-sm font-sans">
                <div className="flex items-center gap-6">
                    <span className="font-black italic text-xl tracking-tighter">KANG'S <span className="text-indigo-600">TOEIC</span></span>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <span className="font-bold text-slate-500 uppercase text-[10px] tracking-widest text-rose-600 italic">Half Test RC (Check View)</span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10">
                    <button onClick={prevSpread} disabled={currentSpread === 0} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm"><ChevronLeft className="w-5 h-5" /></button>
                    <div className="flex flex-col items-center min-w-[80px]">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5 opacity-50">Spread</span>
                        <span className="font-mono text-xl font-black leading-none">{currentSpread + 1} / {totalSpreads}</span>
                    </div>
                    <button onClick={nextSpread} className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm"><ChevronRight className="w-5 h-5" /></button>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-slate-800 text-slate-800">
                        <Clock className="w-4 h-4" />
                        <span className="font-mono text-xl font-black">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
                    </div>
                    <button
                        onClick={() => {
                            console.log("RC Final Submit Triggered");
                            handleInternalSubmit();
                        }}
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-100 active:scale-95 hover:bg-emerald-700 transition-all z-40"
                    >
                        Final Submit
                    </button>
                </div>
            </header>

            <main ref={mainContainerRef} className="flex-1 overflow-hidden relative flex bg-slate-100/50">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>
                <div className="w-full h-full flex">{renderRCSpread(currentSpread, answers, handleAnswer)}</div>
            </main>

            <style jsx global>{`
                .booklet-page { width: 50%; padding: 30px 50px; background: white; height: 100%; overflow-y: auto; box-shadow: 0 0 40px rgba(0,0,0,0.02); }
                .directions-box { background: #f8fafc; border: 2px solid #e2e8f0; padding: 14px; border-radius: 8px; margin-bottom: 20px; font-size: 12px; }
                .column-divider-RC { width: 1.5px; background: #475569; opacity: 0.15; margin: 0 20px; }
                .passage-box { background: #fff; border: 1.5px solid #cbd5e1; padding: 18px; border-radius: 8px; margin-bottom: 20px; font-family: serif; font-size: 15px; line-height: 1.6; color: #020617; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); }
                .option-row { display: flex; align-items: center; gap: 8px; padding: 1px 8px; border-radius: 6px; cursor: pointer; transition: all 0.1s; }
                .option-row:hover { background: #f1f5f9; }
                .option-mark { width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid #64748b; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; color: #475569; flex-shrink: 0; }
                .option-mark.active { background: #4f46e5; border-color: #4f46e5; color: white; }
                .q-block { margin-bottom: 22px; }
                .q-meta { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
                .q-id-badge { background: #f1f5f9; color: #64748b; font-weight: 900; font-size: 11px; padding: 1px 6px; border-radius: 4px; border: 1px solid #e2e8f0; }
                .passage-label { display: inline-block; background: #334155; color: white; font-size: 10px; font-weight: 900; padding: 2px 7px; border-radius: 4px; margin-bottom: 7px; text-transform: uppercase; }
            `}</style>
        </div>
    );
}

function renderRCSpread(spreadIdx: number, answers: any, onAnswer: any) {
    // 0: Part 5 (13 Qs)
    if (spreadIdx === 0) {
        return (
            <>
                <div className="booklet-page">
                    <h2 className="text-2xl font-black text-slate-800 mb-4 uppercase italic">Reading Test</h2>
                    <div className="directions-box"><strong>Part 5:</strong> Select the best response.</div>
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-3">{half9aPart5.slice(0, 4).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-3">{half9aPart5.slice(4, 7).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page">
                    <div className="h-10"></div>
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-3">{half9aPart5.slice(7, 10).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-3">{half9aPart5.slice(10, 13).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                    <div className="mt-20 border-t border-dashed border-slate-200 pt-10 text-center opacity-20 font-black italic tracking-widest uppercase">End of Part 5</div>
                </div>
            </>
        );
    }
    // 1: Part 6 (2 Sets)
    if (spreadIdx === 1) {
        return (
            <>
                <div className="booklet-page">
                    <div className="directions-box !py-2 !mb-3 text-[11px]"><strong>Part 6:</strong> Select the best answer.</div>
                    {renderP6FullSet(half9aPart6[0], answers, onAnswer)}
                </div>
                <div className="booklet-page">{renderP6FullSet(half9aPart6[1], answers, onAnswer)}</div>
            </>
        );
    }
    // 2, 3, 4: Part 7 Single (Sets 1-6)
    if (spreadIdx >= 2 && spreadIdx <= 4) {
        const startIdx = (spreadIdx - 2) * 2;
        return (
            <>
                <div className="booklet-page">
                    {spreadIdx === 2 && <div className="directions-box !py-2 !mb-3 text-[11px]"><strong>Part 7:</strong> Read texts and answer questions.</div>}
                    {renderP7FullSingleSet(half9aPart7[startIdx], answers, onAnswer)}
                </div>
                <div className="booklet-page">{renderP7FullSingleSet(half9aPart7[startIdx + 1], answers, onAnswer)}</div>
            </>
        );
    }
    // 5: Double Passage (Question 176~)
    if (spreadIdx === 5) {
        return renderP7DoubleTripleUI(half9aPart7[6], answers, onAnswer);
    }
    // 6: Triple Passage 1 (Question 186~)
    if (spreadIdx === 6) {
        return renderP7DoubleTripleUI(half9aPart7[7], answers, onAnswer);
    }
    // 7: Triple Passage 2 (Question 191~)
    if (spreadIdx === 7) {
        return renderP7DoubleTripleUI(half9aPart7[8], answers, onAnswer);
    }

    return null;
}

function renderP6FullSet(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    return (
        <div className="flex flex-col h-full">
            <div className="passage-box whitespace-pre-wrap text-[13px] leading-relaxed">{set.content}</div>
            <div className="flex gap-0 mt-2">
                <div className="flex-1 space-y-4">{set.questions.slice(0, 2).map((q: any) => renderP5Question(q, answers, onAnswer))}</div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-4">{set.questions.slice(2, 4).map((q: any) => renderP5Question(q, answers, onAnswer))}</div>
            </div>
        </div>
    );
}

function renderP7FullSingleSet(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const mid = Math.ceil(set.questions.length / 2);
    return (
        <div className="flex flex-col h-full">
            <div className="passage-box">
                {set.passages.map((p: any) => (
                    <div key={p.id} className="mb-2"><span className="passage-label">{p.type}</span><div className="whitespace-pre-wrap font-bold text-slate-800 text-[13px] leading-relaxed">{p.content}</div></div>
                ))}
            </div>
            <div className="flex gap-0 mt-2">
                <div className="flex-1 space-y-4">{set.questions.slice(0, mid).map((q: any) => renderP7Question(q, answers, onAnswer))}</div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-4">{set.questions.slice(mid).map((q: any) => renderP7Question(q, answers, onAnswer))}</div>
            </div>
        </div>
    );
}

function renderP7DoubleTripleUI(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const { passages, questions } = set;

    if (passages.length === 3) { // Triple Special UI
        return (
            <>
                <div className="booklet-page">
                    <div className="space-y-4">{passages.slice(0, 2).map((p: any) => (
                        <div key={p.id} className="passage-box !mb-0"><span className="passage-label">{p.type}</span><div className="whitespace-pre-wrap text-[12px] font-bold text-slate-900">{p.content}</div></div>
                    ))}</div>
                </div>
                <div className="booklet-page flex flex-col h-full !overflow-hidden">
                    <div className="passage-box !mb-0 !p-4 shrink-0 border-b-2 border-slate-100 shadow-md max-h-[40%] overflow-y-auto">
                        <span className="passage-label">{passages[2].type}</span><div className="whitespace-pre-wrap text-[12px] font-bold text-black">{passages[2].content}</div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
                        <div className="grid grid-cols-2 gap-x-8">{questions.map((q: any) => renderP7Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
            </>
        );
    }
    // Double Passage UI
    return (
        <>
            <div className="booklet-page">
                <div className="space-y-4">{passages.map((p: any) => (
                    <div key={p.id} className="passage-box"><span className="passage-label">{p.type}</span><div className="whitespace-pre-wrap text-[13px] font-bold text-slate-900">{p.content}</div></div>
                ))}</div>
            </div>
            <div className="booklet-page">
                <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 border-b pb-1">Questions {questions[0].id}-{questions[questions.length - 1].id}</h3>
                <div className="flex h-fit mt-4">
                    <div className="flex-1 space-y-6">{questions.slice(0, 3).map((q: any) => renderP7Question(q, answers, onAnswer))}</div>
                    <div className="column-divider-RC"></div>
                    <div className="flex-1 space-y-6">{questions.slice(3).map((q: any) => renderP7Question(q, answers, onAnswer))}</div>
                </div>
            </div>
        </>
    );
}

function renderP5Question(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="q-block">
            <div className="q-meta"><span className="q-id-badge">{q.id}</span></div>
            <p className="text-[16px] font-bold text-black mb-1.5 leading-relaxed">{q.text}</p>
            <div className="space-y-0.5 text-slate-800">
                {q.options.map((opt: any) => {
                    const label = typeof opt === 'string' ? opt.match(/\(([ABCD])\)/)?.[1] : opt.label;
                    const text = typeof opt === 'string' ? opt.replace(/\([ABCD]\)\s*/, '') : opt.text;
                    const isSelected = answers[q.id] === label;
                    return (
                        <div key={label} onClick={() => onAnswer(q.id, label)} className={`option-row !py-1 ${isSelected ? 'bg-indigo-50' : ''}`}>
                            <div className={`option-mark ${isSelected ? 'active' : ''}`}>{label}</div>
                            <span className={`text-[14px] ${isSelected ? 'font-black text-indigo-700' : 'font-bold'}`}>{text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function renderP7Question(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="q-block border-b border-slate-50 pb-3">
            <div className="flex items-start gap-2 mb-1.5"><span className="q-id-badge shrink-0">{q.id}</span><p className="text-[16px] font-bold text-black leading-snug">{q.text}</p></div>
            <div className="space-y-0.5 pl-8 text-slate-800">
                {q.options.map((opt: any) => {
                    let label = "", text = "";
                    if (typeof opt === 'string') {
                        const match = opt.match(/\(([ABCD])\)\s*(.*)/);
                        label = match ? match[1] : ""; text = match ? match[2] : opt;
                    } else { label = opt.label; text = opt.text; }
                    const isSelected = answers[q.id] === label;
                    return (
                        <div key={label} onClick={() => onAnswer(q.id, label)} className={`option-row !items-start !py-1 ${isSelected ? 'bg-indigo-50' : ''}`}>
                            <div className={`option-mark !mt-0.5 ${isSelected ? 'active' : ''}`}>{label}</div>
                            <span className={`text-[14px] leading-tight ${isSelected ? 'font-black text-indigo-700' : 'font-bold'}`}>{text}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
