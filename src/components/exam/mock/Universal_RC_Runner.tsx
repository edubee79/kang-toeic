"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Info, CheckCircle2 } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { DocumentRenderer } from "@/components/exam/Part7Templates";

export interface MockTestDataStructure {
    p5: any[];
    p6: any[];
    p7s: any[];
    p7m: any[];
}

interface Props {
    data: MockTestDataStructure;
    onFinishExam: (answers: Record<string, string>, timeLogs: Record<string, number>) => void;
    onProgressUpdate?: (answers: Record<string, string>, currentPart: number, timeLogs: Record<string, number>, currentSpread: number) => void;
    testId?: number;
    initialAnswers?: Record<string, string>;
    initialSpread?: number;
    timeLeft: number;
}

export default function Universal_RC_Runner({ data, onFinishExam, onProgressUpdate, testId, initialAnswers = {}, initialSpread = 0, timeLeft }: Props) {
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/';
    const [currentSpread, setCurrentSpread] = useState(initialSpread);

    const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
    const answersRef = useRef<Record<string, string>>(initialAnswers);

    const [timeLogs, setTimeLogs] = useState<Record<string, number>>({ p5: 0, p6: 0, p7s: 0, p7m: 0 });
    const timeLogsRef = useRef<Record<string, number>>({ p5: 0, p6: 0, p7s: 0, p7m: 0 });

    const spreadEntryTimeRef = useRef<number>(Date.now());
    const lastAdvancedSpreadRef = useRef<number>(-1);
    const mainContainerRef = React.useRef<HTMLDivElement>(null);

    // Scroll to top when spread changes
    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.scrollTop = 0;
            // Reset all internal scrollable areas (booklet pages, question containers, etc.)
            const scrollables = mainContainerRef.current.querySelectorAll('.booklet-page, .overflow-y-auto');
            scrollables.forEach(el => {
                el.scrollTop = 0;
            });
        }
    }, [currentSpread]);

    // Track time spent on the current spread before changing it
    const logTimeSpent = () => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - spreadEntryTimeRef.current) / 1000);

        if (elapsedSeconds > 0) {
            const pNum = getCurrentPartNum();
            const copy = { ...timeLogsRef.current };

            if (pNum === 5) copy.p5 += elapsedSeconds;
            else if (pNum === 6) copy.p6 += elapsedSeconds;
            else {
                // Logic to split P7 Single (S) vs Multi (M)
                if (currentSpread <= 8) copy.p7s += elapsedSeconds;
                else copy.p7m += elapsedSeconds;
            }

            timeLogsRef.current = copy;
            setTimeLogs(copy);

            // Notify parent of updated time logs along with answers and spread
            if (onProgressUpdate) onProgressUpdate(answersRef.current, pNum, copy, currentSpread);
        }
        spreadEntryTimeRef.current = now;
    };

    // Replace internal timer with simple submission check
    useEffect(() => {
        if (timeLeft <= 0) {
            const now = Date.now();
            const elapsedSeconds = Math.floor((now - spreadEntryTimeRef.current) / 1000);
            const finalLogs = { ...timeLogsRef.current };

            if (elapsedSeconds > 0) {
                const pNum = getCurrentPartNum();
                if (pNum === 5) finalLogs.p5 += elapsedSeconds;
                else if (pNum === 6) finalLogs.p6 += elapsedSeconds;
                else {
                    if (currentSpread <= 8) finalLogs.p7s += elapsedSeconds;
                    else finalLogs.p7m += elapsedSeconds;
                }
            }
            onFinishExam(answersRef.current, finalLogs);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    };

    const handleAnswer = (qId: string, value: string) => {
        const newAnswers = { ...answersRef.current, [qId]: value };

        // Sync local ref and state
        answersRef.current = newAnswers;
        setAnswers(newAnswers);

        // 🚩 [SAFETY] Real-time Local Backup
        if (testId) {
            const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
            if (savedAttempts[`full-${testId}`]) {
                savedAttempts[`full-${testId}`].answers = {
                    ...(savedAttempts[`full-${testId}`].answers || {}),
                    ...newAnswers
                };
                localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));
            }
        }

        if (onProgressUpdate) onProgressUpdate(newAnswers, getCurrentPartNum(), timeLogsRef.current, currentSpread);

        // Check if current spread is complete
        const currentQuestions = getRCSpreadQuestions(currentSpread);
        const isComplete = currentQuestions.every(id => newAnswers[id]);

        if (isComplete && currentSpread < totalSpreads - 1 && lastAdvancedSpreadRef.current !== currentSpread) {
            lastAdvancedSpreadRef.current = currentSpread;
            // Auto advance with a small delay for better UX
            setTimeout(() => {
                logTimeSpent(); // 🚩 Log time spent on current page before auto-advancing
                setCurrentSpread(s => s + 1);
            }, 600);
        }
    };

    const getCurrentPartNum = () => {
        if (currentSpread <= 1) return 5;
        if (currentSpread <= 3) return 6;
        return 7;
    };

    const handleFinalSubmit = () => {
        if (!confirm("시험을 종료하고 제출하시겠습니까?")) return;

        const now = Date.now();
        const elapsedSeconds = Math.floor((now - spreadEntryTimeRef.current) / 1000);
        const finalLogs = { ...timeLogsRef.current };

        if (elapsedSeconds > 0) {
            const pNum = getCurrentPartNum();
            if (pNum === 5) finalLogs.p5 += elapsedSeconds;
            else if (pNum === 6) finalLogs.p6 += elapsedSeconds;
            else {
                if (currentSpread <= 8) finalLogs.p7s += elapsedSeconds;
                else finalLogs.p7m += elapsedSeconds;
            }
        }

        onFinishExam(answersRef.current, finalLogs);
    };

    const nextSpread = () => {
        /*
        const currentQuestions = getRCSpreadQuestions(currentSpread);
        const unanswered = currentQuestions.filter(qId => !answers[qId]);

        if (unanswered.length > 0) {
            alert(`현재 페이지의 모든 문제를 풀어주세요. (남은 문제: ${unanswered.length}개)`);
            return;
        }
        */
        logTimeSpent(); // 🚩 Log time BEFORE changing spread
        setCurrentSpread(s => s + 1);
    }

    const getRCSpreadQuestions = (idx: number): string[] => {
        const qIds: string[] = [];
        if (idx === 0) {
            data.p5.slice(0, 16).forEach(q => qIds.push(String(q.id)));
        } else if (idx === 1) {
            data.p5.slice(16, 30).forEach(q => qIds.push(String(q.id)));
        } else if (idx === 2) {
            data.p6[0]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            data.p6[1]?.questions.forEach((q: any) => qIds.push(String(q.id)));
        } else if (idx === 3) {
            data.p6[2]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            data.p6[3]?.questions.forEach((q: any) => qIds.push(String(q.id)));
        } else if (idx === 4) {
            data.p7s[0]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            data.p7s[1]?.questions.forEach((q: any) => qIds.push(String(q.id)));
        } else {
            // Dynamic Single Sets (Idx >= 5)
            const singleOffset = (idx - 5) * 2 + 2;
            if (singleOffset < data.p7s.length) {
                data.p7s[singleOffset]?.questions.forEach((q: any) => qIds.push(String(q.id)));
                data.p7s[singleOffset + 1]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            } else {
                // Multi Sets
                const singleCount = data.p7s.length;
                const singleSpreadsEndIdx = Math.ceil((singleCount - 2) / 2) + 4;
                const multiIdx = idx - singleSpreadsEndIdx - 1;
                data.p7m[multiIdx]?.questions.forEach((q: any) => qIds.push(String(q.id)));
            }
        }
        return qIds;
    };
    const prevSpread = () => {
        logTimeSpent(); // 🚩 Log time BEFORE changing spread
        setCurrentSpread(s => s - 1);
    };

    const totalSpreads = 5 + data.p7m.length + Math.ceil((data.p7s.length - 2) / 2);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen bg-white overflow-hidden text-slate-900 select-none">
            {/* Header */}
            <header className="h-14 border-b bg-white flex items-center justify-between px-6 shrink-0 z-30">
                <div className="flex items-center gap-6">
                    <Link href={fromPath} className="hover:opacity-80 transition-opacity">
                        <span className="font-black italic text-xl tracking-tighter">KANG'S <span className="text-indigo-600">TOEIC</span></span>
                    </Link>
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
                    <button onClick={handleFinalSubmit} className="bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-100 transition-all active:scale-95">
                        Submit
                    </button>
                </div>
            </header>

            <main ref={mainContainerRef} className="flex-1 overflow-hidden relative flex bg-slate-100/50">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>
                <div className="w-full h-full flex">
                    {renderRCSpread(currentSpread, answers, handleAnswer, data)}
                </div>
            </main>

            <style jsx global>{`
                .booklet-page {
                    width: 50%;
                    padding: 40px 60px;
                    background: white;
                    height: 100%;
                    overflow-y: auto;
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

const MarkdownTable = ({ content, tableData }: { content: string, tableData?: any }) => {
    // If structured table_data exists, render it
    if (tableData && tableData.headers && tableData.rows) {
        return (
            <div className="space-y-4">
                {content && content !== "Select the best answer." && (
                    <div className="whitespace-pre-wrap">{content}</div>
                )}
                <div className="overflow-x-auto my-4 border rounded-lg">
                    <table className="w-full text-left text-xs border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                {tableData.headers.map((h: string, i: number) => (
                                    <th key={i} className="px-4 py-2 font-black text-slate-700 border-r last:border-r-0 border-slate-200 uppercase tracking-tighter">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.rows.map((row: string[], i: number) => (
                                <tr key={i} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/50 transition-colors">
                                    {row.map((cell: string, j: number) => (
                                        <td key={j} className="px-4 py-2 border-r last:border-r-0 border-slate-100 text-slate-800 leading-normal">
                                            {cell.split('<br>').map((line, k) => (
                                                <div key={k}>{line}</div>
                                            ))}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    // Check if it's a table (contains | and ---)
    if (!content.includes('|') || !content.includes('---')) {
        return <div className="whitespace-pre-wrap">{content}</div>;
    }

    const lines = content.split('\n');
    const tableIndex = lines.findIndex(l => l.trim().startsWith('|'));

    if (tableIndex === -1) return <div className="whitespace-pre-wrap">{content}</div>;

    const beforeTable = lines.slice(0, tableIndex).join('\n');
    const tableLines = lines.slice(tableIndex).filter(l => l.trim().startsWith('|'));
    const afterTable = lines.slice(tableIndex + tableLines.length).join('\n');

    // Parse table
    const headerRow = tableLines[0].split('|').filter(c => c.trim() !== '').map(c => c.trim());
    const bodyRows = tableLines.slice(2).map(line =>
        line.split('|').filter((_, i) => i > 0 && i <= headerRow.length).map(c => c.trim())
    );

    return (
        <div className="space-y-4">
            {beforeTable && <div className="whitespace-pre-wrap">{beforeTable}</div>}
            <div className="overflow-x-auto my-4 border rounded-lg">
                <table className="w-full text-left text-xs border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            {headerRow.map((h, i) => (
                                <th key={i} className="px-4 py-2 font-black text-slate-700 border-r last:border-r-0 border-slate-200 uppercase tracking-tighter">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bodyRows.map((row, i) => (
                            <tr key={i} className="border-b last:border-b-0 border-slate-100 hover:bg-slate-50/50 transition-colors">
                                {row.map((cell, j) => (
                                    <td key={j} className="px-4 py-2 border-r last:border-r-0 border-slate-100 text-slate-800 leading-normal">
                                        {cell.split('<br>').map((line, k) => (
                                            <div key={k}>{line}</div>
                                        ))}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {afterTable && <div className="whitespace-pre-wrap">{afterTable}</div>}
        </div>
    );
};

export function renderRCSpread(spreadIdx: number, answers: any, onAnswer: any, data: MockTestDataStructure) {
    if (!data.p5 || !data.p6 || !data.p7s || !data.p7m) return null;

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
                        <div className="flex-1 space-y-4">{data.p5.slice(0, 4).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{data.p5.slice(4, 8).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page pt-[120px]">
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-4">{data.p5.slice(8, 12).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{data.p5.slice(12, 16).map(q => renderP5Question(q, answers, onAnswer))}</div>
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
                        <div className="flex-1 space-y-4">{data.p5.slice(16, 20).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{data.p5.slice(20, 24).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
                <div className="booklet-page pt-[120px]">
                    <div className="flex h-fit">
                        <div className="flex-1 space-y-4">{data.p5.slice(24, 27).map(q => renderP5Question(q, answers, onAnswer))}</div>
                        <div className="column-divider-RC"></div>
                        <div className="flex-1 space-y-4">{data.p5.slice(27, 30).map(q => renderP5Question(q, answers, onAnswer))}</div>
                    </div>
                </div>
            </>
        );
    }

    if (spreadIdx === 2) {
        return (
            <>
                <div className="booklet-page">
                    <div className="directions-box !py-2 !mb-4 text-[11px]">
                        <span className="font-black text-indigo-600 mr-2 uppercase">Part 6</span>
                        <strong>Directions:</strong> Read the texts that follow. A word, phrase, or sentence is missing in parts of each text. Four answer choices for each empty space are shown below the text.
                    </div>
                    {renderP6Set(data.p6[0], answers, onAnswer)}
                </div>
                <div className="booklet-page pt-[60px]">
                    {renderP6Set(data.p6[1], answers, onAnswer)}
                </div>
            </>
        );
    }

    if (spreadIdx === 3) {
        return (
            <>
                <div className="booklet-page">{renderP6Set(data.p6[2], answers, onAnswer)}</div>
                <div className="booklet-page">{renderP6Set(data.p6[3], answers, onAnswer)}</div>
            </>
        );
    }

    if (spreadIdx === 4) {
        return (
            <>
                <div className="booklet-page">
                    <div className="directions-box !py-2 !mb-4 text-[11px]">
                        <span className="font-black text-indigo-600 mr-2 uppercase">Part 7</span>
                        <strong>Directions:</strong> In this part you will read a selection of texts. Select the best answer for each question.
                    </div>
                    {renderP7SingleSet(data.p7s[0], answers, onAnswer)}
                </div>
                <div className="booklet-page pt-[60px]">
                    {data.p7s[1] && renderP7SingleSet(data.p7s[1], answers, onAnswer)}
                </div>
            </>
        );
    }

    // Dynamic Single Sets (Idx >= 5)
    const singleOffset = (spreadIdx - 5) * 2 + 2;
    if (singleOffset < data.p7s.length) {
        return (
            <>
                <div className="booklet-page">{renderP7SingleSet(data.p7s[singleOffset], answers, onAnswer)}</div>
                <div className="booklet-page">{data.p7s[singleOffset + 1] && renderP7SingleSet(data.p7s[singleOffset + 1], answers, onAnswer)}</div>
            </>
        );
    }

    // Multi Sets starts after all single sets are rendered
    const singleCount = data.p7s.length;
    const singleSpreadsEndIdx = Math.ceil((singleCount - 2) / 2) + 4;

    const multiIdx = spreadIdx - singleSpreadsEndIdx - 1;
    if (multiIdx >= 0 && multiIdx < data.p7m.length) {
        return renderP7MultiSpread(data.p7m[multiIdx], answers, onAnswer);
    }

    return null;
}

function renderP5Question(q: any, answers: any, onAnswer: any) {
    const displayNum = String(q.id).includes('-q') ? q.id.split('-q')[1] : String(q.id).replace(/[^\d]/g, '');

    // Check if boilerplate text in Part 6
    const isRedundantText = q.text === "Select the best answer." ||
        q.text === "Select the best sentence to complete the text.";

    if (isRedundantText) {
        return (
            <div key={q.id} className="q-block flex items-start gap-3">
                <span className="q-id-badge shrink-0 mt-0.5">{displayNum}</span>
                <div className="flex-1 space-y-0.5">
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

    return (
        <div key={q.id} className="q-block">
            <div className="flex items-start gap-2 mb-2">
                <span className="q-id-badge shrink-0">{displayNum}</span>
                <p className="text-[13px] font-black leading-relaxed text-black">{q.text}</p>
            </div>
            <div className={`space-y-0.5 pl-8`}>
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

const getPassageLabel = (p: any) => {
    const type = p.docType || p.type || p.contextType || 'Text';
    const mapping: Record<string, string> = {
        'notice': 'Notice', 'NOTICE': 'Notice',
        'article': 'Article', 'ARTICLE': 'Article',
        'advertisement': 'Advertisement', 'ADVERTISEMENT': 'Advertisement',
        'letter': 'Letter', 'LETTER': 'Letter',
        'email': 'Email', 'EMAIL': 'Email',
        'chat_message': 'Chat Message', 'CHAT_MESSAGE': 'Chat Message',
        'sign': 'Sign', 'SIGN': 'Sign',
        'memo': 'Memo', 'MEMO': 'Memo',
        'form': 'Form', 'FORM': 'Form',
        'schedule': 'Schedule', 'SCHEDULE': 'Schedule',
        'web_page': 'Web Page', 'WEB_PAGE': 'Web Page',
        'information': 'Information', 'INFORMATION': 'Information'
    };
    if (mapping[type]) return mapping[type];

    // Handle P1, P2... codes
    if (/^P\d+$/i.test(type)) {
        return 'Passage';
    }

    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
};

const getQuestionRangeText = (questions: any[], passages?: any[]) => {
    if (!questions || questions.length === 0) return "";
    const parseNum = (idStr: string) => String(idStr).includes('-q') ? String(idStr).split('-q')[1] : String(idStr).replace(/[^\d]/g, '');
    const startNum = parseNum(questions[0].id);
    const endNum = parseNum(questions[questions.length - 1].id);

    if (startNum === endNum) return `Question ${startNum} refers to the following.`;

    let typeStr = "information";
    if (passages && passages.length === 1) {
        typeStr = getPassageLabel(passages[0]).toLowerCase();
    } else if (passages && passages.length === 2) {
        typeStr = `${getPassageLabel(passages[0]).toLowerCase()} and ${getPassageLabel(passages[1]).toLowerCase()}`;
    } else if (passages && passages.length === 3) {
        typeStr = `${getPassageLabel(passages[0]).toLowerCase()}, ${getPassageLabel(passages[1]).toLowerCase()}, and ${getPassageLabel(passages[2]).toLowerCase()}`;
    }
    return `Questions ${startNum}-${endNum} refer to the following ${typeStr}.`;
};

function renderP6Set(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    return (
        <div className="flex flex-col h-full">
            <div className="passage-box"><MarkdownTable content={set.content} /></div>
            <div className="flex-1 flex gap-0 mt-4 h-fit">
                <div className="flex-1 space-y-6">
                    {set.questions.slice(0, 2).map((q: any) => (
                        <React.Fragment key={q.id}>{renderP5Question(q, answers, onAnswer)}</React.Fragment>
                    ))}
                </div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-6">
                    {set.questions.slice(2).map((q: any) => (
                        <React.Fragment key={q.id}>{renderP5Question(q, answers, onAnswer)}</React.Fragment>
                    ))}
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
                {set.passages.map((p: any, idx: number) => (
                    <div key={p.id} className="mb-4">
                        {(p.title || (idx === 0 ? getQuestionRangeText(set.questions, set.passages) : '')) && (
                            <h3 className="font-black text-[13px] border-b mb-2 pb-1 text-slate-700 uppercase">
                                {p.title || getQuestionRangeText(set.questions, set.passages)}
                            </h3>
                        )}
                        <span className="passage-label">{getPassageLabel(p)}</span>
                        <div className="mt-2 text-sm text-slate-900 border border-slate-200">
                            <DocumentRenderer doc={p} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex gap-1 mt-2">
                <div className="flex-1 space-y-6">
                    {set.questions.slice(0, mid).map((q: any) => (
                        <React.Fragment key={q.id}>{renderP7Question(q, answers, onAnswer)}</React.Fragment>
                    ))}
                </div>
                <div className="column-divider-RC"></div>
                <div className="flex-1 space-y-6">
                    {set.questions.slice(mid).map((q: any) => (
                        <React.Fragment key={q.id}>{renderP7Question(q, answers, onAnswer)}</React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

function renderP7MultiSpread(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const passages = set.passages;
    const questions = set.questions;

    if (set.setType === 'Triple' || passages.length === 3) {
        return (
            <>
                <div className="booklet-page">
                    <div className="space-y-6">
                        {passages.slice(0, 2).map((p: any, idx: number) => (
                            <div key={p.id} className="passage-box !mb-0">
                                {(p.title || (idx === 0 ? getQuestionRangeText(set.questions, set.passages) : '')) && (
                                    <h3 className="font-black text-[13px] border-b mb-2 pb-1 text-slate-700 uppercase">
                                        {p.title || getQuestionRangeText(set.questions, set.passages)}
                                    </h3>
                                )}
                                <span className="passage-label">{getPassageLabel(p)}</span>
                                <div className="mt-2 text-[13px] text-slate-900 border border-slate-200">
                                    <DocumentRenderer doc={p} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="booklet-page flex flex-col h-full !overflow-hidden">
                    <div className="passage-box !mb-0 !p-4 shrink-0 border-b-2 border-slate-100 shadow-md z-10 max-h-[45%] overflow-y-auto">
                        {passages[2].title && (
                            <h3 className="font-black text-[13px] border-b mb-2 pb-1 text-slate-700 uppercase">
                                {passages[2].title}
                            </h3>
                        )}
                        <span className="passage-label">{getPassageLabel(passages[2])}</span>
                        <div className="mt-2 text-[13px] text-black border border-slate-200">
                            <DocumentRenderer doc={passages[2]} />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50">
                        {questions.map((q: any) => (
                            <React.Fragment key={q.id}>{renderP7Question(q, answers, onAnswer)}</React.Fragment>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    // Double
    return (
        <>
            <div className="booklet-page">
                <div className="space-y-8">
                    {passages.map((p: any, idx: number) => (
                        <div key={p.id} className="passage-box !mb-0">
                            {(p.title || (idx === 0 ? getQuestionRangeText(set.questions, set.passages) : '')) && (
                                <h3 className="font-black text-[13px] border-b mb-2 pb-1 text-slate-700 uppercase">
                                    {p.title || getQuestionRangeText(set.questions, set.passages)}
                                </h3>
                            )}
                            <span className="passage-label">{getPassageLabel(p)}</span>
                            <div className="mt-2 text-[14px] text-slate-900 border border-slate-200">
                                <DocumentRenderer doc={p} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="booklet-page">
                <div className="flex-1 space-y-6">
                    {questions.map((q: any) => (
                        <React.Fragment key={q.id}>{renderP7Question(q, answers, onAnswer)}</React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

function renderP7Question(q: any, answers: any, onAnswer: any) {
    const displayNum = String(q.id).includes('-q') ? q.id.split('-q')[1] : String(q.id).replace(/[^\d]/g, '');
    return (
        <div key={q.id} className="q-block border-b border-slate-50 pb-4">
            <div className="flex items-start gap-2 mb-2">
                <span className="q-id-badge shrink-0">{displayNum}</span>
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
