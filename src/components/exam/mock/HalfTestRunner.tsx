'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, ChevronLeft, ChevronRight, Volume2, AlertCircle, Monitor, CheckCircle2 } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

// 하프테스트 데이터 임포트
import * as halfA from '@/data/mock/half_set9_a';
import * as halfB from '@/data/mock/half_set9_b';

export default function HalfTestRunner() {
    const params = useParams();
    const router = useRouter();
    const testId = params?.testId as string;

    const isA = testId === '9a';
    const data = isA ? {
        title: "하프테스트 제1회 (A)",
        p1: halfA.half9aPart1, p2: halfA.half9aPart2, p3: halfA.half9aPart3, p4: halfA.half9aPart4,
        p5: halfA.half9aPart5, p6: halfA.half9aPart6, p7s: halfA.half9aPart7Single, p7m: halfA.half9aPart7Multi,
        audio: "/audio/mock/test1.mp3" // 실제 경로 확인 필요
    } : {
        title: "하프테스트 제1회 (B)",
        p1: halfB.half9bPart1, p2: halfB.half9bPart2, p3: halfB.half9bPart3, p4: halfB.half9bPart4,
        p5: halfB.half9bPart5, p6: halfB.half9bPart6, p7s: halfB.half9bPart7Single, p7m: halfB.half9bPart7Multi,
        audio: "/audio/mock/test1.mp3"
    };

    const [status, setStatus] = useState<'loading' | 'lc' | 'rc' | 'completed'>('loading');
    const [currentPart, setCurrentPart] = useState(1);
    const [currentPage, setCurrentPage] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [timeLeft, setTimeLeft] = useState(35 * 60);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);

    const [timeLogs, setTimeLogs] = useState<Record<string, number>>({ p5: 0, p6: 0, p7s: 0, p7m: 0 });

    useEffect(() => {
        const initAttempt = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) { router.push('/mock-test'); return; }
            const user = JSON.parse(userStr);
            try {
                const docRef = await addDoc(collection(db, 'MockTestAttempts'), {
                    userId: user.userId || user.uid,
                    studentName: user.userName || user.name || "Unknown",
                    testId: `half_${testId}`,
                    testTitle: data.title,
                    status: 'in_progress',
                    type: 'half',
                    date: new Date().toISOString(),
                    timestamp: serverTimestamp()
                });
                setAttemptId(docRef.id);
                setStatus('lc');
            } catch (e) { console.error(e); }
        };
        initAttempt();
    }, []);

    const [attemptId, setAttemptId] = useState<string | null>(null);

    useEffect(() => {
        if (status !== 'rc') return;
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) { clearInterval(timer); handleFinishExam(); return 0; }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [status]);

    const handleAnswer = (qId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [qId]: value }));
    };

    // 통합 내비게이션: 다음 페이지 혹은 다음 파트
    const handleNext = () => {
        const questionsInPart = getPartTotalItems(currentPart, data);
        const isLastPageOfPart = currentPage >= questionsInPart - 1;

        if (!isLastPageOfPart) {
            setCurrentPage(p => p + 1);
            if (leftPanelRef.current) leftPanelRef.current.scrollTop = 0;
        } else {
            if (currentPart < 7) {
                // 파트 전환 전 시간 기록 (RC)
                if (status === 'rc') {
                    const elapsed = (35 * 60) - timeLeft;
                    const prevTotal = timeLogs.p5 + timeLogs.p6 + timeLogs.p7s;
                    const logKey = currentPart === 5 ? 'p5' : currentPart === 6 ? 'p6' : 'p7s';
                    setTimeLogs(prev => ({ ...prev, [logKey]: elapsed - prevTotal }));
                }
                if (currentPart === 4) setStatus('rc');
                setCurrentPart(prev => prev + 1);
                setCurrentPage(0);
                if (leftPanelRef.current) leftPanelRef.current.scrollTop = 0;
            } else {
                handleFinishExam();
            }
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) setCurrentPage(p => p - 1);
        else if (currentPart > 1) {
            const prevPart = currentPart - 1;
            setCurrentPart(prevPart);
            setCurrentPage(getPartTotalItems(prevPart, data) - 1);
        }
    };

    const handleFinishExam = async () => {
        const finalElapsed = (35 * 60) - timeLeft;
        const prevTotal = timeLogs.p5 + timeLogs.p6 + timeLogs.p7s;
        if (attemptId) {
            await updateDoc(doc(db, 'MockTestAttempts', attemptId), {
                status: 'completed',
                answers,
                timeLogs: { ...timeLogs, p7m: finalElapsed - prevTotal },
                completedAt: serverTimestamp()
            });
        }
        router.push(`/mock-test/full/${testId.startsWith('9') ? '9' : '10'}/result?half=${testId}`);
    };

    if (status === 'loading') return <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center font-bold">Loading Test Data...</div>;

    const currentQuestions = getCurrentQuestions(currentPart, currentPage, data);

    return (
        <div className="fixed inset-0 z-[200] flex flex-col h-screen bg-slate-100 overflow-hidden font-sans">
            <header className="h-16 border-b bg-slate-900 text-white flex items-center justify-between px-6 shrink-0 z-50">
                <div className="flex items-center gap-4">
                    <span className="bg-rose-600 text-[10px] font-black px-2 py-0.5 rounded italic">HALF TEST</span>
                    <h1 className="font-bold text-sm tracking-tight hidden md:block">{data.title}</h1>
                    <div className="h-4 w-px bg-slate-700 mx-2 hidden md:block" />
                    <span className="text-rose-400 font-black">PART {currentPart}</span>
                </div>

                <div className="flex items-center gap-6">
                    <button onClick={handlePrev} disabled={currentPart === 1 && currentPage === 0} className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 disabled:opacity-10 transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex flex-col items-center min-w-[60px]">
                        <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest leading-none mb-1">Page</span>
                        <span className="font-mono font-black text-xl">{currentPage + 1}</span>
                    </div>

                    <button onClick={handleNext} className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center hover:bg-rose-500 shadow-lg shadow-rose-900/20 active:scale-90 transition-all">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    {status === 'rc' ? (
                        <div className={`flex items-center gap-2 font-mono text-2xl font-black ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-slate-300'}`}>
                            <Clock className="w-5 h-5 opacity-50" />
                            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                        </div>
                    ) : (
                        <div className="text-xs font-black text-rose-400 uppercase tracking-widest animate-pulse border-2 border-rose-900/50 px-3 py-1 rounded-full">Listening Mode</div>
                    )}
                    <Button onClick={handleFinishExam} size="sm" variant="outline" className="text-[10px] font-black border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">EXIT</Button>
                </div>
            </header>

            <main className="flex-1 flex overflow-hidden">
                <div ref={leftPanelRef} className="w-1/2 bg-white border-r overflow-y-auto">
                    {renderLeftContent(currentPart, currentPage, data)}
                </div>
                <div ref={rightPanelRef} className="w-1/2 bg-slate-50 overflow-y-auto">
                    <div className="p-10 max-w-2xl mx-auto space-y-8 pb-32">
                        {currentQuestions.length > 0 ? (
                            currentQuestions.map((q: any) => (
                                <QuestionCard key={q.id} q={q} currentAnswer={answers[q.id]} onAnswer={handleAnswer} />
                            ))
                        ) : (
                            <div className="py-20 text-center text-slate-300 font-bold italic">
                                Questions loading or end of part...
                            </div>
                        )}

                        <div className="pt-10 flex justify-center">
                            <Button onClick={handleNext} className="bg-slate-900 text-white px-10 h-14 rounded-2xl font-black italic tracking-widest uppercase hover:bg-rose-600 transition-all">
                                {currentPage >= getPartTotalItems(currentPart, data) - 1 ? "Next Part →" : "Next Page →"}
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <audio ref={audioRef} src={data.audio} onPlay={() => setIsPlaying(true)} onEnded={() => handleNext()} />
        </div>
    );
}

function QuestionCard({ q, currentAnswer, onAnswer }: any) {
    const qNum = String(q.id).includes('_') ? q.id.split('_')[1] : String(q.id).replace('q', '');

    return (
        <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-all rounded-3xl group">
            <div className="flex gap-4 mb-6">
                <span className="w-10 h-10 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black shrink-0 shadow-lg group-hover:bg-rose-600 transition-colors">
                    {qNum}
                </span>
                <p className="font-bold text-slate-800 leading-snug pt-2 text-lg">{q.text || "Select the best answer."}</p>
            </div>
            {q.image && (
                <div className="mb-8 rounded-2xl overflow-hidden border border-slate-100 bg-slate-100">
                    <img src={q.image} alt="Question" className="w-full h-auto object-contain max-h-[450px]" />
                </div>
            )}
            <div className="grid grid-cols-1 gap-3 ml-14">
                {q.options.map((opt: any) => {
                    const label = typeof opt === 'string' ? (opt.match(/\(([ABCD])\)/)?.[1] || opt.charAt(1)) : opt.label;
                    const text = typeof opt === 'string' ? opt.replace(/\([ABCD]\)\s*/, '') : opt.text;
                    const isSelected = currentAnswer === label;
                    return (
                        <label key={label} className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${isSelected ? 'border-rose-600 bg-rose-50 shadow-inner' : 'border-transparent hover:bg-slate-100'}`}>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-black text-sm ${isSelected ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300 text-slate-300 bg-white'}`}>
                                {label}
                            </div>
                            <span className={`font-bold text-base ${isSelected ? 'text-rose-900' : 'text-slate-600'}`}>{text}</span>
                            <input type="radio" value={label} checked={isSelected} onChange={() => onAnswer(String(q.id), label)} className="hidden" />
                        </label>
                    );
                })}
            </div>
        </Card>
    );
}

function renderLeftContent(part: number, page: number, data: any) {
    if (part <= 2 || part === 5) {
        return (
            <div className="p-20 flex flex-col items-center justify-center h-full text-center bg-slate-50/50">
                <div className="max-w-md">
                    <div className="w-24 h-24 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-4xl font-black mx-auto mb-10 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform">
                        {part}
                    </div>
                    <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">Part {part}</h2>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 text-left space-y-4 ring-1 ring-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-rose-600" />
                        <p className="font-black text-rose-600 uppercase tracking-widest text-xs">Test Directions:</p>
                        <p className="text-slate-500 leading-relaxed font-bold text-lg">
                            {part === 1 && "Listen to four statements for each picture. Select the statement that best describes what you see."}
                            {part === 2 && "Listen to a question and three possible responses. Choose the best response."}
                            {part === 5 && "Complete the sentences by selecting the most appropriate word or phrase from the four options."}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Passages for Part 3, 4, 6, 7
    const sets = part === 3 ? data.p3 : part === 4 ? data.p4 : part === 6 ? data.p6 : part === 7 ? (page < data.p7s.length ? data.p7s : data.p7m) : [];
    const setIdx = part === 7 && page >= data.p7s.length ? (page - data.p7s.length) : page;
    const currentSet = sets[setIdx];

    if (!currentSet) return <div className="p-20 text-center font-bold text-slate-200 uppercase italic">지문을 불러오는 중...</div>;

    return (
        <div className="p-16 space-y-10 bg-white">
            <div className="flex items-center gap-4">
                <span className="bg-rose-600 text-white text-[10px] font-black px-3 py-1 rounded-full italic shadow-lg shadow-rose-200">PASSAGE DATA</span>
                <span className="text-slate-300 font-bold uppercase tracking-widest text-[10px]">Part {part} • Item {setIdx + 1}</span>
            </div>
            <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100 shadow-inner relative">
                <div className="font-serif text-xl leading-relaxed text-slate-800 whitespace-pre-wrap">
                    {part === 6 ? currentSet.content : (currentSet.passages ? currentSet.passages.map((p: any) => p.content).join('\n\n') : 'No content available')}
                </div>
            </div>
        </div>
    );
}

function getCurrentQuestions(part: number, page: number, data: any) {
    if (part === 1) return data.p1;
    if (part === 2) return data.p2;
    if (part === 3) return data.p3[page]?.questions || [];
    if (part === 4) return data.p4[page]?.questions || [];
    if (part === 5) return data.p5.slice(page * 10, (page + 1) * 10);
    if (part === 6) return data.p6[page]?.questions || [];
    if (part === 7) {
        const sets = page < data.p7s.length ? data.p7s : data.p7m;
        const setIdx = page < data.p7s.length ? page : (page - data.p7s.length);
        return sets[setIdx]?.questions || [];
    }
    return [];
}

function getPartTotalItems(part: number, data: any) {
    if (part === 1 || part === 2) return 1;
    if (part === 3) return data.p3.length;
    if (part === 4) return data.p4.length;
    if (part === 5) return Math.ceil(data.p5.length / 10);
    if (part === 6) return data.p6.length;
    if (part === 7) return data.p7s.length + data.p7m.length;
    return 1;
}
