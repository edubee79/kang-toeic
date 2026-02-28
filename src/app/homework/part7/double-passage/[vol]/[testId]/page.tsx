'use client';

import React, { useState, useEffect, useRef } from 'react';
import { part7MultiTestData, PracticeSet } from '@/data/toeic/reading/part7/multi_tests';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowLeft, Timer } from 'lucide-react';
import { notFound, useParams, useRouter, useSearchParams } from 'next/navigation';
import { DocumentRenderer } from '@/components/exam/Part7Templates';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function Part7DoublePassagePage() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const vol = parseInt(params.vol as string);
    const testId = Number(params.testId);

    const fromPath = searchParams.get('from') || '/homework/part7-double';

    const testKey = `test${testId}` as keyof typeof part7MultiTestData;
    const fullPracticeTest = part7MultiTestData[testKey];

    if (!fullPracticeTest) {
        return notFound();
    }

    const [isMobile, setIsMobile] = useState(false);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [showExitConfirm, setShowExitConfirm] = useState(false);

    // Refs for scrolling to top on set change
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightTopRef = useRef<HTMLDivElement>(null);
    const rightBottomRef = useRef<HTMLDivElement>(null);

    // Handle 404
    if (!fullPracticeTest) {
        return notFound();
    }

    // Load Current Data Set
    const data: PracticeSet = fullPracticeTest[currentSetIndex];
    if (!data) return <div>Data Error</div>; // Fallback

    const isFirstSet = currentSetIndex === 0;
    const isLastSet = currentSetIndex === fullPracticeTest.length - 1;

    useEffect(() => {
        const checkDevice = () => {
            if (window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        // Load Progress
        const savedProgress = localStorage.getItem(`part7_multi_progress_v${vol}_t${testId}`);
        if (savedProgress) {
            try {
                const parsed = JSON.parse(savedProgress);
                if (parsed.answers) setAnswers(parsed.answers);
                if (parsed.elapsedTime) setElapsedTime(parsed.elapsedTime);
                if (parsed.currentSetIndex !== undefined) setCurrentSetIndex(parsed.currentSetIndex);
            } catch (e) {
                console.error("Failed to load progress", e);
            }
        }

        return () => window.removeEventListener('resize', checkDevice);
    }, [vol, testId]);

    // Save Progress
    useEffect(() => {
        if (showResults) return;
        if (Object.keys(answers).length > 0) {
            localStorage.setItem(`part7_multi_progress_v${vol}_t${testId}`, JSON.stringify({
                answers,
                elapsedTime,
                currentSetIndex
            }));
        }
    }, [answers, elapsedTime, currentSetIndex, vol, testId, showResults]);

    // Timer logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && !showResults) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, showResults]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    // Scroll to top when set changes
    useEffect(() => {
        leftPanelRef.current?.scrollTo(0, 0);
        rightTopRef.current?.scrollTo(0, 0);
        rightBottomRef.current?.scrollTo(0, 0);
    }, [currentSetIndex]);

    const handleAnswerChange = (qId: string, optionIdx: number, optionLabel: string) => {
        if (showResults) return;
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: optionLabel };
            return newAnswers;
        });
    };

    const toggleResults = async () => {
        setIsTimerRunning(false);
        const allQuestions = fullPracticeTest.flatMap(s => s.questions);
        const correctCount = allQuestions.filter(q => answers[q.id] === q.correctAnswer).length;

        // Save to Firebase (Real Mode only)
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                const incorrects: any[] = [];
                fullPracticeTest.forEach(set => {
                    const passageTypes = Array.from(new Set(set.passages.map(p => getStandardizedPassageType(p.type)))).join(' / ');
                    const contextType = set.contextType || passageTypes;

                    set.questions.forEach(q => {
                        if (answers[q.id] !== q.correctAnswer) {
                            incorrects.push({
                                id: q.id,
                                classification: q.classification || 'Unknown',
                                contextType: contextType
                            });
                        }
                    });
                });

                await addDoc(collection(db, "Manager_Results"), {
                    studentId: user.userId || user.uid || "Guest",
                    studentName: user.userName || user.name || "Unknown",
                    type: 'part7_multi',
                    detail: `Test ${testId}`,
                    unit: `RC_Part7_Vol${vol}_Multi_Test${testId}_real`,
                    score: correctCount,
                    total: allQuestions.length,
                    wrongCount: allQuestions.length - correctCount,
                    incorrectQuestions: incorrects,
                    vol: vol,
                    testId: testId,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime
                });
                await PerformanceSyncService.syncUserSummary(user.userId || user.uid);
            } catch (e) {
                console.error("Save error:", e);
            }
        }

        setShowResults(true);
    };

    const handlePrev = () => {
        if (!isFirstSet) setCurrentSetIndex(prev => prev - 1);
    };

    const handleNext = () => {
        if (!isLastSet) setCurrentSetIndex(prev => prev + 1);
    };

    if (isMobile) {
        return (
            <div className="fixed inset-0 z-[9999] bg-gray-900 text-white flex flex-col items-center justify-center p-6 text-center">
                <div className="text-4xl mb-4">🖥️</div>
                <h1 className="text-2xl font-bold mb-2">PC 전용 기능입니다</h1>
                <p className="text-gray-300">
                    이중/삼중 지문 연습은<br />
                    큰 화면(PC)에서만 이용 가능합니다.
                </p>
                <Link href="/" className="mt-8 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                    홈으로 돌아가기
                </Link>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[50] min-h-screen bg-gray-100 flex flex-col h-screen overflow-hidden font-sans">
            {/* Minimal Header */}
            <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 justify-between shrink-0 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowExitConfirm(true)}
                        className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium"
                    >
                        <ArrowLeft size={18} />
                        나가기
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <button
                        onClick={() => {
                            localStorage.setItem(`part7_multi_progress_v${vol}_t${testId}`, JSON.stringify({
                                answers,
                                elapsedTime,
                                currentSetIndex
                            }));
                            router.push(fromPath);
                        }}
                        className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded text-xs font-bold hover:bg-blue-100 transition-colors"
                    >
                        💾 저장하고 나가기
                    </button>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <h1 className="text-lg font-bold text-gray-800">Part 7 Practice (Vol {params.vol} Test {testId})</h1>
                    <span className={cn(
                        "px-2 py-0.5 text-xs font-semibold rounded-full border",
                        data.setType === 'Double' ? "bg-green-100 text-green-700 border-green-200" : "bg-blue-100 text-blue-700 border-blue-200"
                    )}>
                        {data.setType} Passage
                    </span>
                </div>

                {/* Middle Area: Empty */}
                <div className="flex-1"></div>

                {/* Navigation & Timer Area */}
                <div className="flex items-center gap-4">
                    {/* Timer Logic Moved Here */}
                    <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-md border border-gray-200">
                        <Timer size={14} className="text-gray-400" />
                        <span className="font-mono font-bold text-gray-700 text-sm leading-none">{formatTime(elapsedTime)}</span>
                    </div>

                    <div className="h-6 w-px bg-gray-200"></div>

                    <div className="flex items-center gap-1">
                        <button
                            onClick={handlePrev}
                            disabled={isFirstSet}
                            className={cn(
                                "p-1.5 rounded transition",
                                isFirstSet ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"
                            )}
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm font-black text-gray-600 min-w-[3rem] text-center">
                            {currentSetIndex + 1} / {fullPracticeTest.length}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={isLastSet}
                            className={cn(
                                "p-1.5 rounded transition",
                                isLastSet ? "text-gray-200 cursor-not-allowed" : "text-gray-500 hover:bg-gray-100"
                            )}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Split Layout */}
            <main className="flex-1 flex overflow-hidden">
                {/* Left Panel: Passages 1 & 2 (60%) */}
                <div ref={leftPanelRef} className="w-[60%] bg-gray-50 h-full overflow-y-auto border-r border-gray-300 shadow-inner scroll-smooth">
                    <div className="space-y-8 pb-20 p-6">
                        {data.passages.slice(0, 2).map((passage, idx) => (
                            <div key={passage.id} className="bg-white border border-gray-200 shadow-sm p-4 relative">
                                {/* Passage Label */}
                                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 flex gap-2">
                                    <span>Passage {idx + 1}</span>
                                    {passage.docType && (
                                        <>
                                            <span className="text-gray-500">|</span>
                                            <span className="text-yellow-400">{passage.docType}</span>
                                        </>
                                    )}
                                </div>
                                <div className="mt-8">
                                    <DocumentRenderer doc={passage} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel: Split into Top (Passage 3) and Bottom (Questions) */}
                <div className="w-[40%] flex flex-col h-full border-l border-gray-300">

                    {/* Top Right: Passage 3 (if exists) */}
                    {data.passages[2] && (
                        <div ref={rightTopRef} className="h-[50%] bg-gray-50 border-b border-gray-300 overflow-y-auto p-6 shadow-inner relative scroll-smooth">
                            <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10 flex gap-2">
                                <span>Passage 3</span>
                                {data.passages[2].docType && (
                                    <>
                                        <span className="text-gray-500">|</span>
                                        <span className="text-yellow-400">{data.passages[2].docType}</span>
                                    </>
                                )}
                            </div>
                            <div className="mt-8">
                                <DocumentRenderer doc={data.passages[2]} />
                            </div>
                        </div>
                    )}

                    {/* Bottom Right: Questions */}
                    <div ref={rightBottomRef} className={`${data.passages[2] ? 'h-[50%]' : 'h-full'} bg-white overflow-y-auto scroll-smooth`}>
                        <div className="pb-20 p-4">
                            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 border-b border-gray-100 pb-2">
                                Questions {data.questions[0].questionNo}–{data.questions[data.questions.length - 1].questionNo}
                            </h2>

                            <div className="space-y-3"> {/* Tightened spacing */}
                                {data.questions.map((q, idx) => {
                                    const qNum = String(q.questionNo); // Ensure string for consistency
                                    const myAnswer = answers[q.id]; // Use q.id for unique key
                                    const correctLabel = q.correctAnswer;
                                    const isCorrect = showResults && myAnswer === correctLabel;
                                    const isWrong = showResults && myAnswer && myAnswer !== correctLabel;

                                    // Handle options safely (Object or Array)
                                    const processedOptions = Array.isArray(q.options)
                                        ? q.options.map((text, idx) => ({ label: String.fromCharCode(65 + idx), text }))
                                        : Object.entries(q.options).sort((a, b) => a[0].localeCompare(b[0])).map(([label, text]) => ({ label, text: text as string }));

                                    return (
                                        <div key={q.id} className={cn(
                                            "transition p-4 rounded-xl border",
                                            showResults && isCorrect ? "bg-green-50 border-green-100" :
                                                showResults && isWrong ? "bg-red-50 border-red-100" : "border-transparent"
                                        )}>
                                            <div className="flex gap-2 mb-2">
                                                <span className="font-bold text-blue-900 text-[16px] shrink-0">{qNum}.</span>
                                                <p className="font-bold text-gray-900 text-[16px] leading-tight pt-0.5">
                                                    {q.text}
                                                </p>
                                            </div>

                                            <div className="space-y-1 pl-4">
                                                {processedOptions.map((opt, optIdx) => {
                                                    const isSelected = myAnswer === opt.label;
                                                    const isCorrectOpt = opt.label === correctLabel;

                                                    let optionClass = "border-transparent bg-gray-50 hover:bg-gray-100 text-gray-700";
                                                    if (isSelected) optionClass = "border-blue-500 bg-blue-50 text-blue-900 font-semibold";

                                                    if (showResults) {
                                                        if (isCorrectOpt) optionClass = "border-green-500 bg-green-100 text-green-900 font-bold";
                                                        else if (isSelected) optionClass = "border-red-500 bg-red-100 text-red-900 line-through";
                                                        else optionClass = "border-transparent opacity-50";
                                                    }

                                                    return (
                                                        <label
                                                            key={optIdx}
                                                            className={cn(
                                                                "flex items-start gap-3 py-1.5 px-2 rounded border cursor-pointer transition-all",
                                                                optionClass
                                                            )}
                                                        >
                                                            <input
                                                                type="radio"
                                                                name={`question-${q.id}`}
                                                                className="hidden"
                                                                onChange={() => !showResults && handleAnswerChange(q.id, optIdx, opt.label)}
                                                                disabled={showResults}
                                                            />
                                                            <span className={cn(
                                                                "w-6 h-6 flex items-center justify-center rounded-full border text-xs font-black shrink-0 mt-0.5 transition-colors",
                                                                isSelected ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-500",
                                                                showResults && isCorrectOpt ? "bg-green-600 border-green-600 text-white" :
                                                                    showResults && isSelected && !isCorrectOpt ? "bg-red-600 border-red-600 text-white" : ""
                                                            )}>
                                                                {opt.label}
                                                            </span>
                                                            <span className="text-[15px] font-medium leading-snug">{opt.text}</span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                            {showResults && (
                                                <div className="mt-4 pl-4 text-sm text-gray-600 border-t border-gray-100 pt-3">
                                                    <p className="mb-2"><span className="font-bold text-green-700">Answer: {correctLabel}</span></p>
                                                    <p className="leading-relaxed">{q.explanation || "해설이 등록되지 않았습니다."}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {!showResults && isLastSet && (
                                    <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center">
                                        <button
                                            onClick={toggleResults}
                                            className="px-10 py-3 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
                                        >
                                            <span className="text-lg">제출하기</span>
                                            <span className="text-sm opacity-60">|</span>
                                            <span className="text-sm">Submit</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="max-w-xs w-full bg-white border border-gray-200 p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6">
                        <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto ring-4 ring-rose-50">
                            <ArrowLeft className="w-10 h-10" />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-black text-gray-900 tracking-tight">학습을 중단할까요?</h2>
                            <p className="text-gray-500 text-sm font-medium leading-relaxed">
                                '저장하고 나가기'를 누르지 않으면<br />
                                현재까지의 진행 상황이 사라집니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => router.push(fromPath)}
                                className="w-full h-12 text-rose-500 hover:text-rose-600 hover:bg-rose-50 font-bold rounded-xl transition-colors"
                            >
                                저장 없이 그냥 나가기
                            </button>
                            <button
                                onClick={() => setShowExitConfirm(false)}
                                className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-2xl transition-all shadow-lg"
                            >
                                계속 학습하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
