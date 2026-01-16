"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, RefreshCcw, Volume2, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Part1Question {
    id: string;
    image: string;
    audioRange?: { start: number; end: number };
    correctAnswer: string;
    scripts: { option: string; text: string; translation: string }[];
}

interface ExamData {
    setId: string;
    title: string;
    audioBase: string; // Full audio file path
    questions: Part1Question[];
}

export function Part1ExamPlayer({ setId = "1" }: { setId?: string }) {
    const [data, setData] = useState<ExamData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showScript, setShowScript] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Fetch Data
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await fetch(`/api/exam/part1?set=${setId}`);
                if (!res.ok) throw new Error("데이터를 찾을 수 없습니다.");
                const json = await res.json();
                if (json.error) throw new Error(json.error);
                setData(json);
                setCurrentIndex(0);
                resetState();
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [setId]);

    // Reset state for new question
    const resetState = () => {
        setSelectedOption(null);
        setIsCorrect(null);
        setShowScript(false);
    };

    const currentQuestion = data?.questions[currentIndex];

    // Auto-play audio when question changes (if audioBase exists)
    useEffect(() => {
        if (!currentQuestion || !data?.audioBase || !audioRef.current) return;

        const audio = audioRef.current;
        // Simple implementation: Just play. 
        // Advanced: Use currentTime and pause() for ranges. 
        // For now, let's assume the user controls playback or we implement range logic later.

        if (currentQuestion.audioRange) {
            audio.currentTime = currentQuestion.audioRange.start;
            audio.play().catch(() => { }); // catch autoplay policy errors

            const stopTime = currentQuestion.audioRange.end;
            const timeUpdateHandler = () => {
                if (audio.currentTime >= stopTime) {
                    audio.pause();
                    audio.removeEventListener('timeupdate', timeUpdateHandler);
                }
            };
            audio.addEventListener('timeupdate', timeUpdateHandler);
            return () => audio.removeEventListener('timeupdate', timeUpdateHandler);
        } else {
            // If no range, maybe play from start? or do nothing.
            audio.currentTime = 0;
            audio.play().catch(() => { });
        }

    }, [currentIndex, currentQuestion, data]);


    const handleAnswer = (option: string) => {
        if (selectedOption) return; // Prevent multiple clicks

        setSelectedOption(option);
        const correct = option === currentQuestion?.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            // Correct!
            const audio = new Audio('/sounds/correct.mp3'); // Sound effect (mock)
            // audio.play().catch(()=>{});

            // Auto advance after 1.5s
            setTimeout(() => {
                nextQuestion();
            }, 1500);
        } else {
            // Wrong! Show Script
            setShowScript(true);
        }
    };

    const nextQuestion = () => {
        if (!data) return;
        if (currentIndex < data.questions.length - 1) {
            setCurrentIndex(prev => prev + 1);
            resetState();
        } else {
            alert("모든 문제를 완료했습니다!");
        }
    };

    if (loading) return <div className="p-12 text-center text-slate-500 animate-pulse">데이터 로딩 중...</div>;
    if (error) return (
        <Card className="p-8 text-center border-red-200 bg-red-50">
            <h3 className="text-xl font-bold text-red-600 mb-2">데이터 준비 중</h3>
            <p className="text-slate-600 mb-4">{error}</p>
            <p className="text-sm text-slate-400">파일 경로를 확인해주세요: resources/questions/part1/set{setId}.json</p>
            <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">다시 시도</Button>
        </Card>
    );

    if (!data || !currentQuestion) return null;

    return (
        <div className="max-w-6xl mx-auto p-4 flex gap-6 h-[80vh]">
            {/* Left: Image Viewer */}
            <div className="flex-1 bg-black rounded-3xl overflow-hidden relative flex items-center justify-center shadow-2xl">
                <div className="relative w-full h-full">
                    {/* Use standard img tag for easier local file debug or Next Image with unoptimized if needed */}
                    <img
                        src={currentQuestion.image}
                        alt="Question"
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>

            {/* Right: Controller & OMR */}
            <div className="w-[400px] flex flex-col gap-4">
                {/* Header */}
                <Card className="border-none shadow-lg bg-white/80 backdrop-blur">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-black italic text-slate-800">Q{currentIndex + 1}</h2>
                            <span className="text-sm font-bold text-slate-400">{currentIndex + 1} / {data.questions.length}</span>
                        </div>
                        <Progress value={((currentIndex + 1) / data.questions.length) * 100} className="h-2" />
                    </CardContent>
                </Card>

                {/* Audio Player (Hidden visual, mainly for logic, or simple controls) */}
                <Card className="border-none shadow-lg bg-slate-900 text-white">
                    <CardContent className="p-4 flex items-center justify-between">
                        <Button variant="ghost" className="text-white hover:bg-slate-700" onClick={() => {
                            if (audioRef.current) {
                                audioRef.current.currentTime = currentQuestion.audioRange?.start || 0;
                                audioRef.current.play();
                            }
                        }}>
                            <Volume2 className="mr-2 h-5 w-5" /> Replay
                        </Button>
                        <audio
                            ref={audioRef}
                            src={data.audioBase}
                            controls={false} // Custom controls
                            className="hidden"
                        />
                    </CardContent>
                </Card>

                {/* OMR Buttons */}
                <Card className="flex-1 border-none shadow-lg overflow-y-auto">
                    <CardContent className="p-6 flex flex-col gap-3 justify-center h-full">
                        {['A', 'B', 'C', 'D'].map((option) => (
                            <Button
                                key={option}
                                onClick={() => handleAnswer(option)}
                                disabled={!!selectedOption}
                                className={cn(
                                    "h-16 text-xl font-bold rounded-2xl transition-all duration-200 shadow-md hover:scale-[1.02]",
                                    selectedOption === option
                                        ? (isCorrect ? "bg-green-500 hover:bg-green-600 ring-4 ring-green-200" : "bg-red-500 hover:bg-red-600 ring-4 ring-red-200")
                                        : "bg-white text-slate-700 hover:bg-indigo-50 border-2 border-slate-100"
                                )}
                            >
                                <span className="mr-4 text-slate-300">({option})</span>
                                {selectedOption === option && isCorrect && <CheckCircle className="ml-auto text-white" />}
                                {selectedOption === option && !isCorrect && <XCircle className="ml-auto text-white" />}
                            </Button>
                        ))}
                    </CardContent>
                </Card>

                {/* Feedback / Script (Shows on Wrong Answer) */}
                {showScript && (
                    <Card className="border-red-100 bg-red-50 shadow-inner animate-in fade-in slide-in-from-bottom-2">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-red-600">❌ Incorrect</span>
                                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">Answer: {currentQuestion.correctAnswer}</span>
                            </div>
                            {currentQuestion.scripts.map((script, idx) => (
                                <div key={idx} className={cn("text-sm p-2 rounded", script.option === currentQuestion.correctAnswer && "bg-green-100/50")}>
                                    <span className="font-bold mr-2 text-slate-500">{script.option}</span>
                                    <span className="text-slate-800">{script.text}</span>
                                    <div className="text-xs text-slate-500 pl-6">{script.translation}</div>
                                </div>
                            ))}
                            <Button onClick={nextQuestion} className="w-full mt-2 bg-slate-900 text-white">Next Question <ChevronRight className="ml-1 w-4 h-4" /></Button>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}
