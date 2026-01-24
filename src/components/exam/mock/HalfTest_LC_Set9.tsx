"use client";

import React, { useState, useEffect, useRef } from "react";
// 기존 데이터 대신 하프 데이터를 임포트
import { half9aPart1, half9aPart2, half9aPart3, half9aPart4, half9aFullLCAudio } from "@/data/mock/half_set9_a";
import { ChevronLeft, ChevronRight, Volume2, Monitor } from "lucide-react";

interface Props {
    onFinishLC: (answers: Record<string, string>) => void;
}

/**
 * 기존 UI(MockTest_LC_Set9)를 100% 복제하고 데이터만 하프로 교체
 */
export default function HalfTest_LC_Set9({ onFinishLC }: Props) {
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
                setTimeout(() => {
                    setCurrentSpread(s => s + 1);
                }, 600);
            }

            return newAnswers;
        });
    };

    const startExam = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 5;
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const totalSpreads = 4; // 하프테스트에 맞춰 스프레드 수 조정

    const nextSpread = () => {
        const currentQuestions = getSpreadQuestions(currentSpread);
        const unanswered = currentQuestions.filter(qId => !answers[qId]);

        if (unanswered.length > 0) {
            console.log("Unanswered IDs for current spread:", unanswered);
            alert(`현재 페이지의 모든 문제를 풀어주세요. (남은 문제: ${unanswered.length}개)`);
            return;
        }

        if (currentSpread < totalSpreads - 1) {
            setCurrentSpread(s => s + 1);
        } else {
            if (window.confirm("Listening 파트를 종료하고 Reading 파트로 넘어가시겠습니까?")) {
                onFinishLC(answers);
            }
        }
    };

    const getSpreadQuestions = (idx: number): string[] => {
        const qIds: string[] = [];
        try {
            if (idx === 0) {
                half9aPart1.forEach(q => qIds.push(String(q.id)));
            } else if (idx === 1) {
                half9aPart2.forEach(q => qIds.push(String(q.id)));
                half9aPart3.slice(0, 2).forEach(set => set?.questions.forEach((q: any) => qIds.push(String(q.id))));
            } else if (idx === 2) {
                half9aPart3.slice(2).forEach(set => set?.questions.forEach((q: any) => qIds.push(String(q.id))));
            } else if (idx === 3) {
                half9aPart4.forEach(set => set?.questions.forEach((q: any) => qIds.push(String(q.id))));
            }
        } catch (e) {
            console.error("Error collecting question IDs:", e);
        }
        return qIds;
    };

    const prevSpread = () => {
        if (currentSpread > 0) setCurrentSpread(s => s - 1);
    };

    return (
        <div className="fixed inset-0 z-[100] flex flex-col h-screen bg-white overflow-hidden text-slate-900 select-none">
            <audio ref={audioRef} src={half9aFullLCAudio} onEnded={() => onFinishLC(answers)} />

            <header className="h-16 border-b bg-white flex items-center justify-between px-6 shrink-0 z-[110] shadow-sm">
                <div className="flex items-center gap-6">
                    <span className="font-black italic text-xl tracking-tighter">KANG'S <span className="text-indigo-600">TOEIC</span></span>
                    <div className="h-6 w-px bg-slate-200"></div>
                    <span className="font-bold text-slate-500 uppercase text-xs tracking-widest text-rose-600">하프테스트 A (Listening)</span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 z-[120]">
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSpread(); }}
                        disabled={currentSpread === 0}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 disabled:opacity-30 transition-all shadow-sm"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex flex-col items-center min-w-[60px]">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Spread</span>
                        <span className="font-mono text-xl font-bold leading-none">{currentSpread + 1} / {totalSpreads}</span>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSpread(); }}
                        className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm bg-white"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    {/* 마지막 페이지에서는 검증 없이 즉시 이동하는 버튼 제공 */}
                    {currentSpread === totalSpreads - 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                console.log("Manual Force Finish LC");
                                onFinishLC(answers);
                            }}
                            className="bg-rose-600 text-white px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:bg-rose-700 active:scale-95 transition-all z-[999] relative"
                        >
                            Start Reading Now →
                        </button>
                    )}
                    {!isPlaying && (
                        <button onClick={startExam} className="bg-indigo-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-indigo-100 animate-pulse active:scale-95 transition-all">
                            Start Listening
                        </button>
                    )}
                    {isPlaying && (
                        <div className="flex items-center gap-2 text-indigo-600 animate-pulse">
                            <Volume2 className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest leading-tight">Exam in Progress<br /><span className="text-[8px] opacity-40 italic lowercase tracking-tight">Audio sequence matched</span></span>
                        </div>
                    )}
                </div>
            </header>

            <main ref={mainContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden relative flex bg-slate-100/50">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200/50 z-10 pointer-events-none shadow-[0_0_15px_rgba(0,0,0,0.05)]"></div>
                <div className="w-full h-fit min-h-full flex">
                    {renderSpread(currentSpread, answers, handleAnswer)}
                </div>
            </main>

            <style jsx global>{`
                .booklet-page { width: 50%; padding: 40px 60px; background: white; min-height: 100%; box-shadow: 0 0 40px rgba(0,0,0,0.02); }
                .directions-box { background: #f8fafc; border: 2px solid #e2e8f0; padding: 24px; border-radius: 12px; margin-bottom: 30px; font-size: 14px; line-height: 1.6; }
                .directions-title { font-weight: 900; font-size: 18px; margin-bottom: 8px; color: #1e293b; letter-spacing: -0.025em; }
                .part-title { font-weight: 900; font-size: 24px; margin-bottom: 16px; color: #4f46e5; }
                .column-divider { width: 1px; background: #f1f5f9; margin: 0 24px; }
                .q-item { margin-bottom: 14px; padding-bottom: 4px; }
                .q-num { font-weight: 900; margin-right: 8px; color: #4f46e5; font-size: 15px; }
                .q-text { font-weight: 700; font-size: 14px; color: #1e293b; margin-bottom: 8px; line-height: 1.4; }
                .option-circle { width: 44px; height: 44px; border-radius: 50%; border: 2px solid #94a3b8; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 900; color: #475569; cursor: pointer; transition: all 0.2s; background: white; }
                .option-circle.selected { background: #4f46e5; border-color: #4f46e5; color: white; box-shadow: 0 4px 10px rgba(79, 70, 229, 0.3); }
                .p1-photo-container { width: 100%; aspect-ratio: 16/10; background: #f1f5f9; border: 2px solid #e2e8f0; border-radius: 8px; margin-bottom: 12px; position: relative; overflow: hidden; }
            `}</style>
        </div>
    );
}

function renderSpread(spreadIdx: number, answers: any, onAnswer: any) {
    switch (spreadIdx) {
        case 0: // P1 Directions + P1 (1,3,5)
            return (
                <>
                    <div className="booklet-page">
                        <h2 className="part-title">LISTENING TEST</h2>
                        <div className="directions-box">
                            <strong>PART 1 Directions:</strong> For each question in this part, select the one statement that best describes what you see in the picture.
                        </div>
                        {renderP1Question(1, answers, onAnswer)}
                    </div>
                    <div className="booklet-page">
                        <div className="flex flex-col gap-10">
                            {[3, 5].map(num => renderP1Question(num, answers, onAnswer))}
                        </div>
                    </div>
                </>
            );
        case 1: // P2 + P3(Part)
            return (
                <>
                    <div className="booklet-page flex flex-col">
                        <div className="directions-box !py-3 !mb-5 text-[12px]"><strong>PART 2 Directions:</strong> Select the best response.</div>
                        <div className="flex-1 flex gap-0">
                            <div className="flex-1 space-y-2">{half9aPart2.slice(0, 7).map(q => renderP2Row(q, answers, onAnswer))}</div>
                            <div className="column-divider"></div>
                            <div className="flex-1 space-y-2">{half9aPart2.slice(7).map(q => renderP2Row(q, answers, onAnswer))}</div>
                        </div>
                    </div>
                    <div className="booklet-page flex flex-col">
                        <div className="directions-box !py-3 !mb-5 text-[12px]"><strong>PART 3 Directions:</strong> Answer three questions about each conversation.</div>
                        {renderP34Page(half9aPart3.slice(0, 2), answers, onAnswer)}
                    </div>
                </>
            );
        case 2: // P3 나머지
            return (
                <>
                    <div className="booklet-page">{renderP34Page(half9aPart3.slice(2, 4), answers, onAnswer)}</div>
                    <div className="booklet-page">{renderP34Page(half9aPart3.slice(4), answers, onAnswer)}</div>
                </>
            );
        case 3: // P4
            return (
                <>
                    <div className="booklet-page">{renderP34Page(half9aPart4.slice(0, 2), answers, onAnswer)}</div>
                    <div className="booklet-page">{renderP34Page(half9aPart4.slice(2), answers, onAnswer)}</div>
                </>
            );
        default: return <div className="p-20">End</div>;
    }
}

function renderP1Question(num: number, answers: any, onAnswer: any) {
    // num과 q.id의 타입을 일치시켜 정확히 찾도록 수정
    const qData = half9aPart1.find(q => Number(q.id) === Number(num));

    return (
        <div key={num} className="w-full">
            <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-black text-slate-800 italic">{num < 10 ? `0${num}` : num}.</span>
            </div>
            <div className="p1-photo-container !h-auto !aspect-auto">
                {qData?.image ? (
                    <img
                        src={qData.image}
                        alt={`Question ${num}`}
                        className="w-full h-auto object-contain max-h-[450px]"
                    />
                ) : (
                    <div className="w-full aspect-[16/10] flex items-center justify-center text-slate-300 font-bold italic bg-slate-50">
                        Image Loading Error (ID: {num})
                    </div>
                )}
            </div>
            <div className="flex justify-center gap-8 mt-6">
                {['A', 'B', 'C', 'D'].map(opt => (
                    <div
                        key={opt}
                        onClick={() => onAnswer(`${num}`, opt)}
                        className={`option-circle ${answers[`${num}`] === opt ? 'selected' : ''}`}
                    >
                        {opt}
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderP2Row(q: any, answers: any, onAnswer: any) {
    return (
        <div key={q.id} className="flex items-center justify-between py-1.5 px-3 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50">
            <span className="q-num !m-0 !w-8">{q.id}.</span>
            <div className="flex gap-4">{['A', 'B', 'C'].map(opt => (
                <div key={opt} onClick={() => onAnswer(`${q.id}`, opt)} className={`option-circle !w-10 !h-10 !text-[16px] ${answers[`${q.id}`] === opt ? 'selected' : ''}`}>{opt}</div>
            ))}</div>
        </div>
    );
}

function renderP34Page(sets: any[], answers: any, onAnswer: any) {
    return (
        <div className="flex h-full gap-8">
            {sets.map(set => (
                <div key={set.setId} className="flex-1 flex flex-col gap-4">
                    <div className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded border w-fit">Qs {set.questionRange}</div>

                    {/* 시각 자료 이미지 렌더링 추가 */}
                    {set.image && (
                        <div className="w-full aspect-[4/3] bg-slate-50 rounded border-2 border-slate-100 flex items-center justify-center mb-2 overflow-hidden shadow-sm">
                            <img src={set.image} alt="Graphic" className="w-full h-full object-contain px-2" />
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
                                            <div className={`option-circle !w-8 !h-8 !text-[13px] shrink-0 ${answers[q.id] === opt.label ? 'selected' : ''}`}>{opt.label}</div>
                                            <span className={`text-[14px] leading-tight ${answers[q.id] === opt.label ? 'text-indigo-600 font-bold' : 'text-slate-800'}`}>{opt.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
