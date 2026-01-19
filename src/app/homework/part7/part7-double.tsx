"use client";

import React, { useState, useEffect, useRef } from 'react';
import { fullPracticeTest, PracticeSet } from '@/data/rc_part7_practice';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

export default function Part7PracticePage() {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResults, setShowResults] = useState(false);

    // Refs for scrolling to top on set change
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightTopRef = useRef<HTMLDivElement>(null);
    const rightBottomRef = useRef<HTMLDivElement>(null);

    // Load Current Data Set
    const data: PracticeSet = fullPracticeTest[currentSetIndex];
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
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Scroll to top when set changes
    useEffect(() => {
        leftPanelRef.current?.scrollTo(0, 0);
        rightTopRef.current?.scrollTo(0, 0);
        rightBottomRef.current?.scrollTo(0, 0);
    }, [currentSetIndex]);

    const handleAnswerChange = (qId: string, optionIdx: number, optionLabel: string) => {
        setAnswers(prev => {
            const newAnswers = { ...prev, [qId]: optionLabel };

            // Check if all questions in the current set are answered
            const allAnswered = data.questions.every(q => newAnswers[q.id]);

            if (allAnswered && !isLastSet) {
                setTimeout(() => {
                    handleNext();
                }, 500);
            }

            return newAnswers;
        });
    };

    const toggleResults = () => {
        setShowResults(!showResults);
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
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${data.type === 'Double' ? 'bg-green-100 text-green-700 border-green-200' : 'bg-blue-100 text-blue-700 border-blue-200'}`}>
                        {data.type} Passage
                    </span>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2">
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
                        {currentSetIndex + 1} / {fullPracticeTest.length}
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

                {/* Empty div to maintain spacing if needed, or just remove the button */}
                <div className="w-10"></div>
            </header>

            {/* Split Layout */}
            <main className="flex-1 flex overflow-hidden">
                {/* Left Panel: Passages 1 & 2 (60%) */}
                <div ref={leftPanelRef} className="w-[60%] bg-gray-50 h-full overflow-y-auto border-r border-gray-300 shadow-inner scroll-smooth">
                    <div className="space-y-8 pb-20 p-6">
                        {data.passages.slice(0, 2).map((passage, idx) => (
                            <div key={passage.id} className="bg-white border border-gray-200 shadow-sm p-8 relative">
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

                                    {/* Content (Preserving newlines) */}
                                    <div className="text-gray-800 leading-relaxed font-serif text-[17px] whitespace-pre-line">
                                        {passage.content}
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
                                <div className="text-gray-800 leading-relaxed font-serif text-[16px] whitespace-pre-line">
                                    {data.passages[2].content}
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

                            <div className="space-y-4"> {/* Reduced spacing between questions */}
                                {data.questions.map((q, idx) => {
                                    const qNum = q.id;
                                    const myAnswer = answers[qNum];
                                    const correctLabel = q.answer;
                                    const isCorrect = showResults && myAnswer === correctLabel;
                                    const isWrong = showResults && myAnswer && myAnswer !== correctLabel;

                                    return (
                                        <div key={q.id} className={`transition p-2 rounded-lg ${showResults && isCorrect ? 'bg-green-50' : ''} ${showResults && isWrong ? 'bg-red-50' : ''}`}>
                                            <div className="flex gap-2 mb-1">
                                                <span className="font-bold text-blue-900 text-[16px]">{qNum}.</span>
                                                <p className="font-bold text-gray-900 text-[16px] leading-tight pt-0.5">
                                                    {q.text}
                                                </p>
                                            </div>

                                            <div className="space-y-0 pl-4">
                                                {q.options.map((option, optIdx) => {
                                                    const labelChar = String.fromCharCode(65 + optIdx);
                                                    const isSelected = myAnswer === labelChar;

                                                    let optionClass = "border-transparent bg-gray-50 hover:bg-gray-100 text-gray-700";
                                                    if (isSelected) optionClass = "border-blue-500 bg-blue-50 text-blue-900 font-semibold";

                                                    if (showResults) {
                                                        if (labelChar === correctLabel) optionClass = "border-green-500 bg-green-100 text-green-900 font-bold";
                                                        else if (isSelected && labelChar !== correctLabel) optionClass = "border-red-500 bg-red-100 text-red-900 line-through";
                                                        else optionClass = "border-transparent opacity-50";
                                                    }

                                                    return (
                                                        <label
                                                            key={optIdx}
                                                            className={`flex items-start gap-2 py-0.5 px-1 rounded border cursor-pointer transition ${optionClass}`}
                                                        >
                                                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 mt-1 ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-400 bg-white'
                                                                }`}>
                                                                {isSelected && <div className="w-1 h-1 bg-white rounded-full"></div>}
                                                            </div>
                                                            <input
                                                                type="radio"
                                                                name={`question-${qNum}`}
                                                                className="hidden"
                                                                onChange={() => !showResults && handleAnswerChange(qNum, optIdx, labelChar)}
                                                                disabled={showResults}
                                                            />
                                                            <span className="text-[15px] font-medium text-gray-900 leading-snug">{option}</span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
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
