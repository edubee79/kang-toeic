"use client";

import React, { useState, useEffect, useRef } from 'react';
import { fullPracticeTest, PracticeSet } from '@/data/rc_part7_practice';
import { test2PracticeSet } from '@/data/rc_part7_test2';
import { test3PracticeSet } from '@/data/rc_part7_test3';
import { test4PracticeSet } from '@/data/rc_part7_test4';
import { test5PracticeSet } from '@/data/rc_part7_test5';
import { rcPart7Test6 } from '@/data/rc_part7_test6';
import { rcPart7Test7 } from '@/data/rc_part7_test7';
import { rcPart7Test8 } from '@/data/rc_part7_test8';
import { rcPart7Test9 } from '@/data/rc_part7_test9';
import { rcPart7Test10 } from '@/data/rc_part7_test10';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ArrowLeft, Timer, Trophy, BookOpen, CheckCircle2, RotateCcw, AlertCircle, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Map of available test data
const testDataMap: Record<number, PracticeSet[]> = {
    1: fullPracticeTest,
    2: test2PracticeSet,
    3: test3PracticeSet,
    4: test4PracticeSet,
    5: test5PracticeSet,
    6: rcPart7Test6,
    7: rcPart7Test7,
    8: rcPart7Test8,
    9: rcPart7Test9,
    10: rcPart7Test10,
};

function Part7PracticePageContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const testId = Number(searchParams.get('test')) || 1;
    const [isMobile, setIsMobile] = useState(false);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);

    // Load Current Data Set based on test parameter
    const testData = testDataMap[testId] || fullPracticeTest;
    const data: PracticeSet | undefined = testData[currentSetIndex];
    const isFirstSet = currentSetIndex === 0;
    const isLastSet = currentSetIndex === testData.length - 1;

    // Safety check: if data is undefined, show loading
    if (!data) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
            </div>
        );
    }

    // Load saved progress from localStorage
    useEffect(() => {
        const savedProgress = localStorage.getItem(`part7_practice_test${testId}`);
        if (savedProgress) {
            try {
                const { answers: savedAnswers, setIndex, timestamp } = JSON.parse(savedProgress);
                // Only restore if saved within last 24 hours
                if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
                    setAnswers(savedAnswers || {});
                    // Ensure setIndex is within valid range
                    const validSetIndex = Math.min(Math.max(0, setIndex || 0), testData.length - 1);
                    setCurrentSetIndex(validSetIndex);
                }
            } catch (e) {
                console.error('Failed to load progress:', e);
            }
        }
    }, [testId, testData.length]);

    // Refs for scrolling to top on set change
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightTopRef = useRef<HTMLDivElement>(null);
    const rightBottomRef = useRef<HTMLDivElement>(null);

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
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning) {
            interval = setInterval(() => setElapsedTime(prev => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning]);

    // Save progress to localStorage whenever answers or setIndex changes
    useEffect(() => {
        if (Object.keys(answers).length > 0 || currentSetIndex > 0) {
            localStorage.setItem(`part7_practice_test${testId}`, JSON.stringify({
                answers,
                setIndex: currentSetIndex,
                timestamp: Date.now()
            }));
        }
    }, [answers, currentSetIndex, testId]);

    // Scroll to top when set changes
    useEffect(() => {
        leftPanelRef.current?.scrollTo(0, 0);
        rightTopRef.current?.scrollTo(0, 0);
        rightBottomRef.current?.scrollTo(0, 0);
    }, [currentSetIndex]);

    // Save progress to localStorage
    const saveProgress = (currentAnswers: Record<string, string>, setIndex: number) => {
        localStorage.setItem(`part7_practice_test${testId}`, JSON.stringify({
            answers: currentAnswers,
            setIndex,
            timestamp: Date.now()
        }));
    };

    const handleAnswerChange = (qId: string, optionIdx: number, optionLabel: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: optionLabel };

            // Save progress
            saveProgress(newAnswers, currentSetIndex);

            // Find current question index
            const currentQuestionIndex = data.questions.findIndex(q => q.id === qId);

            // Auto-scroll to next question if not the last question in the set
            if (currentQuestionIndex < data.questions.length - 1) {
                setTimeout(() => {
                    const nextQuestionId = data.questions[currentQuestionIndex + 1].id;
                    const nextQuestionElement = document.getElementById(`question-${nextQuestionId}`);
                    if (nextQuestionElement) {
                        nextQuestionElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                        });
                    }
                }, 300);
            }

            // Check if all questions in the current set are answered
            const allAnswered = data.questions.every(q => newAnswers[q.id]);

            // Auto-advance to next set if current set is complete (but not last set)
            if (allAnswered && !isLastSet) {
                setTimeout(() => {
                    handleNext();
                }, 500);
            }

            return newAnswers;
        });
    };

    // Check if all questions across all sets are answered
    const isAllQuestionsAnswered = () => {
        const allQuestions = testData.flatMap(set => set.questions);
        return allQuestions.every(q => answers[q.id]);
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const calculateScore = () => {
        const allQuestions = testData.flatMap(set => set.questions);
        return allQuestions.filter(q => answers[q.id] === q.answer).length;
    };

    const finishPractice = async () => {
        setIsTimerRunning(false);
        const score = calculateScore();
        const allQuestions = testData.flatMap(set => set.questions);
        setShowCompletion(true);

        // Save to Firebase
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            try {
                // Identify Incorrect Questions
                const incorrects: { id: string, classification: string }[] = [];
                allQuestions.forEach(q => {
                    if (answers[q.id] !== q.answer) {
                        incorrects.push({
                            id: q.id.toString(),
                            classification: "Double/Triple" // detailed classification not available in current interface types?
                        });
                    }
                });

                await addDoc(collection(db, "Manager_Results"), {
                    student: user.userName || user.username || user.name || "Unknown",
                    studentId: user.userId || user.uid || "Guest",
                    className: user.userClass || user.className || "Unknown",
                    unit: `RC_Part7_Double_Test${testId}`,
                    score: score,
                    total: allQuestions.length,
                    wrongCount: allQuestions.length - score,
                    incorrectQuestions: incorrects,
                    timestamp: serverTimestamp(),
                    timeSpent: elapsedTime,
                    mode: 'practice',
                    type: 'part7_double_test',
                    detail: `Test ${testId} (Double/Triple)`
                });
            } catch (e) { console.error(e); }
        }

        // Clear saved progress
        localStorage.removeItem(`part7_practice_test${testId}`);
    };

    const handleRetry = () => {
        setAnswers({});
        setCurrentSetIndex(0);
        setElapsedTime(0);
        setIsTimerRunning(true);
        setShowCompletion(false);
        setReviewMode(false);
        setActiveQuestionId(null);
        localStorage.removeItem(`part7_practice_test${testId}`);
    };

    const handlePrev = () => {
        if (!isFirstSet) {
            const newIndex = currentSetIndex - 1;
            setCurrentSetIndex(newIndex);
            saveProgress(answers, newIndex);
        }
    };

    const handleNext = () => {
        if (!isLastSet) {
            const newIndex = currentSetIndex + 1;
            setCurrentSetIndex(newIndex);
            saveProgress(answers, newIndex);
        }
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

    // Results Page (Matched to Part 6 style)
    if (showCompletion) {
        const totalQuestions = testData.flatMap(set => set.questions).length;
        const score = calculateScore();

        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 rounded-3xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/50 flex items-center justify-center text-5xl mb-6 shadow-2xl">
                    <Trophy className="w-12 h-12" />
                </div>

                <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">
                    학습 완료
                </h2>
                <p className="font-bold tracking-widest text-xs uppercase mb-8 text-amber-500">
                    Part 7 • Test {testId} • Double/Triple Passages
                </p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8">
                    <div className="flex items-end justify-center gap-2 mb-2">
                        <span className="text-6xl font-black text-white leading-none">{score}</span>
                        <span className="text-2xl font-bold text-slate-600 mb-1">/ {totalQuestions}</span>
                    </div>
                    <div className="text-slate-500 font-bold flex items-center justify-center gap-2 mt-4 grayscale opacity-70">
                        <Timer className="w-4 h-4" />
                        <span>소요 시간: {formatTime(elapsedTime)}</span>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-xs">
                    <button
                        onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentSetIndex(0); }}
                        className="w-full h-14 bg-slate-800 text-white rounded-2xl font-bold border border-slate-700 hover:bg-slate-700 transition-colors"
                    >
                        틀린문제 확인
                    </button>
                    <button
                        onClick={handleRetry}
                        className="w-full h-14 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold active:scale-95 transition-all"
                    >
                        다시 풀기
                    </button>
                    <Link href="/homework/part7-double" className="block w-full py-4 text-slate-500 hover:text-white text-sm font-bold">
                        목록으로 돌아가기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col h-screen overflow-hidden font-sans">
            {/* Minimal Header */}
            <header className="h-14 bg-white border-b border-gray-200 flex items-center px-6 justify-between shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/student/dashboard" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 text-sm font-medium">
                        <ArrowLeft size={18} />
                        나가기
                    </Link>
                    <div className="h-4 w-px bg-gray-300 mx-2"></div>
                    <h1 className="text-lg font-bold text-gray-800">Part 7 Practice</h1>
                    {data && (
                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${data.type === 'Double' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                            {data.type} Passage
                        </span>
                    )}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
                    {/* Timer and Finish Button */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-gray-700">
                            <Timer className="w-4 h-4" />
                            <span className="font-mono text-sm">{formatTime(elapsedTime)}</span>
                        </div>

                        {isAllQuestionsAnswered() && (
                            <button
                                onClick={finishPractice}
                                className="px-4 py-1.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
                            >
                                ✓ Finish
                            </button>
                        )}
                    </div>

                    <button
                        onClick={handlePrev}
                        disabled={isFirstSet}
                        className={`flex items-center px-3 py-1.5 rounded text-sm font-medium transition ${isFirstSet
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                    >
                        <ChevronLeft size={16} className="mr-1" />
                        Prev Set
                    </button>
                    <span className="text-sm font-medium text-gray-400 w-16 text-center">
                        {currentSetIndex + 1} / {testData.length}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={isLastSet}
                        className={`flex items-center px-3 py-1.5 rounded text-sm font-medium transition ${isLastSet
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                    >
                        Next Set
                        <ChevronRight size={16} className="ml-1" />
                    </button>
                </div>

            </header>

            {/* Split Layout */}
            <main className="flex-1 flex overflow-hidden">
                {/* Left Panel: Passages 1 & 2 (60%) */}
                <div ref={leftPanelRef} className="w-[60%] bg-gray-50 h-full overflow-y-auto border-r border-gray-300 shadow-inner scroll-smooth">
                    <div className="space-y-8 pb-20 p-6">
                        {data.passages.slice(0, 2).map((passage, idx) => (
                            <div key={`passage-${currentSetIndex}-${idx}-${passage.id || idx}`} className="bg-white border border-gray-200 shadow-sm p-8 relative">
                                {/* Passage Label */}
                                <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                    Passage {idx + 1}
                                </div>
                                <div className="mt-4">
                                    {/* Type Header */}
                                    <div className="border-b-2 border-gray-800 pb-2 mb-6 flex justify-between items-end">
                                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
                                            {passage.type}
                                        </h3>
                                        {passage.title && (
                                            <span className="text-gray-600 font-serif italic text-lg">
                                                {passage.title}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content (Rendered with Markdown) */}
                                    {/* Content (Rendered with Markdown) */}
                                    <div className={`text-gray-800 leading-relaxed font-serif text-[17px] prose prose-sm max-w-none prose-neutral prose-p:whitespace-pre-wrap prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2 ${['ARTICLE', 'NEWSLETTER', 'REPORT'].includes(passage.type) ? 'md:columns-2 md:gap-10 md:[column-rule:1px_solid_#d1d5db]' : ''}`}>
                                        <ReactMarkdown
                                            remarkPlugins={[remarkGfm]}
                                            components={{
                                                p: ({ node, ...props }) => <p className="mb-4 whitespace-pre-wrap" {...props} />
                                            }}
                                        >
                                            {passage.content}
                                        </ReactMarkdown>
                                    </div>
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
                            <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                Passage 3
                            </div>
                            <div className="mt-4">
                                <div className="border-b-2 border-gray-800 pb-1 mb-3 flex justify-between items-end">
                                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                                        {data.passages[2].type}
                                    </h3>
                                    {data.passages[2].title && (
                                        <span className="text-gray-600 font-serif italic text-base">
                                            {data.passages[2].title}
                                        </span>
                                    )}
                                </div>
                                <div className={`text-gray-800 leading-relaxed font-serif text-[16px] prose prose-sm max-w-none prose-neutral prose-p:whitespace-pre-wrap prose-table:border-collapse prose-table:border prose-table:border-gray-300 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2 ${['ARTICLE', 'NEWSLETTER', 'REPORT'].includes(data.passages[2].type) ? 'md:columns-2 md:gap-10 md:[column-rule:1px_solid_#d1d5db]' : ''}`}>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        components={{
                                            p: ({ node, ...props }) => <p className="mb-4 whitespace-pre-wrap" {...props} />
                                        }}
                                    >
                                        {data.passages[2].content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Right: Questions */}
                    <div ref={rightBottomRef} className={`${data.passages[2] ? 'h-[50%]' : 'h-full'} bg-white overflow-y-auto scroll-smooth`}>
                        <div className="pb-20 p-4">
                            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-gray-100 pb-2">
                                Questions {data.questions[0].id}-{data.questions[data.questions.length - 1].id}
                            </h2>

                            <div className="space-y-4">
                                {data.questions
                                    .filter(q => !reviewMode || answers[q.id] !== q.answer)
                                    .map((q, idx) => {
                                        const qNum = q.id;
                                        const myAnswer = answers[qNum];
                                        const isRevealed = reviewMode;
                                        const isCorrect = myAnswer === q.answer;
                                        const isActive = activeQuestionId === qNum;

                                        return (
                                            <div
                                                key={q.id}
                                                id={`question-${qNum}`}
                                                className={cn(
                                                    "transition p-3 rounded-xl border mb-4",
                                                    isActive ? "border-indigo-500 bg-indigo-50/30" : "border-gray-200",
                                                    isRevealed && isCorrect && "border-emerald-500/30 bg-emerald-50/30",
                                                    isRevealed && !isCorrect && "border-rose-500/30 bg-rose-50/30"
                                                )}
                                                onClick={() => setActiveQuestionId(qNum)}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <div className="flex gap-2">
                                                        <span className="font-bold text-indigo-600 text-[16px]">{qNum}.</span>
                                                        <p className="font-bold text-gray-900 text-[16px] leading-tight pt-0.5">
                                                            {q.text}
                                                        </p>
                                                    </div>
                                                    {isRevealed && !isCorrect && (
                                                        <span className="text-[10px] font-black text-rose-500 px-1.5 py-0.5 bg-rose-500/10 rounded uppercase">Incorrect</span>
                                                    )}
                                                </div>

                                                <div className="space-y-1 pl-4 mb-4">
                                                    {q.options.map((option, optIdx) => {
                                                        const labelChar = String.fromCharCode(65 + optIdx);
                                                        const isSelected = myAnswer === labelChar;

                                                        return (
                                                            <label
                                                                key={optIdx}
                                                                className={cn(
                                                                    "flex items-start gap-2 py-1 px-2 rounded border cursor-pointer transition text-[15px]",
                                                                    isSelected ? "border-indigo-500 bg-indigo-50 text-indigo-900 font-semibold" : "border-transparent bg-gray-50 hover:bg-gray-100 text-gray-700",
                                                                    isRevealed && labelChar === q.answer && "ring-1 ring-emerald-500 border-emerald-500 bg-emerald-50 text-emerald-700",
                                                                    isRevealed && isSelected && !isCorrect && "bg-rose-500 border-rose-500 text-white"
                                                                )}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name={`question-${qNum}`}
                                                                    className="hidden"
                                                                    onChange={() => !isRevealed && handleAnswerChange(qNum, optIdx, labelChar)}
                                                                    disabled={isRevealed}
                                                                />
                                                                <span className="leading-snug">{option}</span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>

                                                {isRevealed && (
                                                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm space-y-2 animate-in fade-in">
                                                        <div className="flex items-center gap-2 text-emerald-600">
                                                            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Answer:</span>
                                                            <span className="font-black">{q.answer}</span>
                                                        </div>
                                                        <div className="text-gray-700 text-sm leading-relaxed p-3 bg-gray-50 rounded border border-gray-200">
                                                            <span className="text-amber-600 font-black mr-2 uppercase text-[11px]">Explanation:</span>
                                                            {q.explanation || "해설 데이터를 준비 중입니다."}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function Part7PracticePage() {
    return (
        <React.Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center text-gray-500">Loading...</div>}>
            <Part7PracticePageContent />
        </React.Suspense>
    );
}
