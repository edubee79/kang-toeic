"use client";

import React, { useState, useEffect, useRef } from "react";
// 기존 데이터 하드코딩 임포트 제거
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

interface Props {
    testId: string;
    onFinishExam: (answers: Record<string, string>, timeLogs: Record<string, number>) => void;
    initialAnswers?: Record<string, string>;
}

export default function HalfTest_RC_Set9({ testId, onFinishExam, initialAnswers = {} }: Props) {
    const isA = testId === '9a';
    const data = isA
        ? require("@/data/mock/half_set9_a")
        : require("@/data/mock/half_set9_b");

    const p5 = isA ? data.half9aPart5 : data.half9bPart5;
    const p6 = isA ? data.half9aPart6 : data.half9bPart6;
    const p7 = isA ? data.half9aPart7 : data.half9bPart7;
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

        // 시간 분석 체크포인트 (동적 계산)
        const p7sItems = p7.filter((s: any) => s.type !== 'Double' && s.type !== 'Triple');
        const p7sSpreadsCount = Math.ceil(p7sItems.length / 2);

        if (currentSpread === 1 && timeLogs.p5 === 0) currentPartKey = "p5";
        else if (currentSpread === 2 && timeLogs.p6 === 0) currentPartKey = "p6";
        // P7 Single 종료 시점 (동적: p6 종료 후 Single Spread 수만큼 지났을 때)
        else if (currentSpread === (2 + p7sSpreadsCount) && timeLogs.p7s === 0) currentPartKey = "p7s";

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

            const p7s = p7.filter((s: any) => s.type !== 'Double' && s.type !== 'Triple');
            const p7m = p7.filter((s: any) => s.type === 'Double' || s.type === 'Triple');
            const p7sSpreadsCount = Math.ceil(p7s.length / 2);
            const qIds: string[] = [];

            if (currentSpread === 0) {
                p5.forEach(q => qIds.push(q.id.toString()));
            } else if (currentSpread === 1) {
                p6.forEach(set => set.questions.forEach((q: any) => qIds.push(q.id.toString())));
            } else if (currentSpread >= 2 && currentSpread < 2 + p7sSpreadsCount) {
                const startIdx = (currentSpread - 2) * 2;
                [p7s[startIdx], p7s[startIdx + 1]].forEach(set => {
                    if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
                });
            } else {
                const mIdx = currentSpread - (2 + p7sSpreadsCount);
                const set = p7m[mIdx];
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
        const p7s = p7.filter((s: any) => s.type !== 'Double' && s.type !== 'Triple');
        const p7m = p7.filter((s: any) => s.type === 'Double' || s.type === 'Triple');
        const p7sSpreadsCount = Math.ceil(p7s.length / 2);

        if (currentSpread === 0) {
            p5.forEach(q => qIds.push(q.id.toString()));
        } else if (currentSpread === 1) {
            p6.forEach(set => set.questions.forEach((q: any) => qIds.push(q.id.toString())));
        } else if (currentSpread >= 2 && currentSpread < 2 + p7sSpreadsCount) {
            const startIdx = (currentSpread - 2) * 2;
            [p7s[startIdx], p7s[startIdx + 1]].forEach(set => {
                if (set) set.questions.forEach((q: any) => qIds.push(q.id.toString()));
            });
        } else {
            const mIdx = currentSpread - (2 + p7sSpreadsCount);
            const set = p7m[mIdx];
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
    const p7sCount = p7.filter((s: any) => s.type !== 'Double' && s.type !== 'Triple').length;
    const p7mCount = p7.filter((s: any) => s.type === 'Double' || s.type === 'Triple').length;
    const totalSpreads = 1 + 1 + Math.ceil(p7sCount / 2) + p7mCount; // P5(1) + P6(1) + P7S + P7M

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
                            const p7all = p7;
                            const allQIds: string[] = [];
                            p5.forEach(q => allQIds.push(q.id.toString()));
                            p6.forEach(set => set.questions.forEach((q: any) => allQIds.push(q.id.toString())));
                            p7all.forEach(set => set.questions.forEach((q: any) => allQIds.push(q.id.toString())));

                            const unanswered = allQIds.filter(id => !answers[id]);
                            if (unanswered.length > 0) {
                                alert(`미답변 문항이 ${unanswered.length}개 있습니다. 모든 문제를 풀어주세요.`);
                                return;
                            }

                            if (window.confirm("정말로 시험을 종료하고 제출하시겠습니까?")) {
                                handleInternalSubmit();
                            }
                        }}
                        className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-100 active:scale-95 hover:bg-emerald-700 transition-all z-40"
                    >
                        Final Submit
                    </button>
                </div>
            </header>

            <main ref={mainContainerRef} className="flex-1 overflow-hidden relative flex bg-slate-100/50">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>
                <div className="w-full h-full flex">{renderRCSpread(currentSpread, answers, handleAnswer, { p5, p6, p7 })}</div>
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

function renderRCSpread(spreadIdx: number, answers: any, onAnswer: any, data: any) {
    const { p5, p6, p7 } = data;
    // 0: Part 5 (13 Qs)
    if (spreadIdx === 0) {
        return (
            <>
                <div className="booklet-page">
                    <h2 className="text-2xl font-black text-slate-800 mb-4 uppercase italic">Reading Test</h2>
                    <div className="directions-box"><strong>Part 5:</strong> Select the best response.</div>
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-3">{p5.slice(0, 4).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-3">{p5.slice(4, 8).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page">
                    <div className="h-10"></div>
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-3">{p5.slice(8, 12).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-3">{p5.slice(12).map(q => renderP5Question(q, answers, onAnswer))}</div>
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
                    {renderP6FullSet(p6[0], answers, onAnswer)}
                </div>
                <div className="booklet-page">{renderP6FullSet(p6[1], answers, onAnswer)}</div>
            </>
        );
    }
    const p7s = p7.filter((s: any) => s.type !== 'Double' && s.type !== 'Triple');
    const p7m = p7.filter((s: any) => s.type === 'Double' || s.type === 'Triple');
    const p7sSpreadsCount = Math.ceil(p7s.length / 2);

    // 2 ~ : Part 7 Single
    if (spreadIdx >= 2 && spreadIdx < 2 + p7sSpreadsCount) {
        const startIdx = (spreadIdx - 2) * 2;
        return (
            <>
                <div className="booklet-page">
                    {spreadIdx === 2 && <div className="directions-box !py-2 !mb-3 text-[11px]"><strong>Part 7:</strong> Read texts and answer questions.</div>}
                    {renderP7FullSingleSet(p7s[startIdx], answers, onAnswer)}
                </div>
                <div className="booklet-page">
                    {p7s[startIdx + 1] ? renderP7FullSingleSet(p7s[startIdx + 1], answers, onAnswer) : (
                        <div className="h-full flex flex-col items-center justify-center opacity-20 italic">
                            <div className="text-4xl mb-2 font-black">END OF SINGLE</div>
                            <div className="text-xl">Next: Multi-Passages →</div>
                        </div>
                    )}
                </div>
            </>
        );
    }
    // Part 7 Multi
    if (spreadIdx >= 2 + p7sSpreadsCount) {
        const mIdx = spreadIdx - (2 + p7sSpreadsCount);
        if (!p7m[mIdx]) return null;
        return renderP7DoubleTripleUI(p7m[mIdx], answers, onAnswer);
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
