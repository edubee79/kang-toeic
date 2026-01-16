"use client";

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Trophy, ArrowRight, CheckCircle2, Timer, ChevronLeft } from 'lucide-react';
import { part5TestData } from '@/data/rc_part5_tests';

export default function Part5ModeSelectionPage() {
    const router = useRouter();
    const params = useParams();
    const testId = Number(params.testId);

    // Get Test Info
    const testSet = part5TestData.find(t => t.testId === testId);
    const title = testSet?.title || `Part 5 Real Test ${testId}`;

    const handleModeSelect = (mode: 'drill' | 'real') => {
        router.push(`/homework/part5-real/test/${testId}?mode=${mode}`);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col text-white">
            {/* Header */}
            <header className="bg-slate-950/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push('/homework/part5-real')}
                            className="text-slate-400 hover:text-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <h1 className="text-xl font-bold">{title}</h1>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col md:flex-row md:items-center md:justify-center p-0 md:p-6 pb-20 md:pb-6">
                <div className="max-w-4xl w-full grid md:grid-cols-2 gap-4 md:gap-8">

                    {/* Drill Mode Card */}
                    <Card
                        onClick={() => handleModeSelect('drill')}
                        className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 md:border border-none md:border-2 md:hover:border-indigo-500 bg-slate-900/50 md:rounded-3xl rounded-none"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <BookOpen className="w-24 h-24 md:w-32 md:h-32 text-indigo-500" />
                        </div>

                        <div className="p-5 md:p-8 flex flex-col h-full min-h-[200px] md:min-h-[320px]">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-indigo-500" />
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                                Training Mode
                                <span className="block text-sm md:text-lg font-medium text-slate-400 mt-1">훈련 모드</span>
                            </h2>

                            <div className="space-y-2 md:space-y-3 mt-4 mb-6 md:mb-8 text-sm md:text-base">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                                    <span>문제 풀이 즉시 정답 확인</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                                    <span>해석 및 해설 바로 보기 가능</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />
                                    <span>시간 제한 없는 여유로운 학습</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-10 md:h-12 rounded-xl group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all text-sm md:text-base">
                                    Start Training <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Real Mode Card */}
                    <Card
                        onClick={() => handleModeSelect('real')}
                        className="group relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 md:border border-none md:border-2 md:hover:border-rose-500 bg-slate-900/50 md:rounded-3xl rounded-none"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Trophy className="w-24 h-24 md:w-32 md:h-32 text-rose-500" />
                        </div>

                        <div className="p-5 md:p-8 flex flex-col h-full min-h-[200px] md:min-h-[320px]">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                                <Trophy className="w-6 h-6 md:w-8 md:h-8 text-rose-500" />
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors">
                                Real Practice
                                <span className="block text-sm md:text-lg font-medium text-slate-400 mt-1">실전 모드</span>
                            </h2>

                            <div className="space-y-2 md:space-y-3 mt-4 mb-6 md:mb-8 text-sm md:text-base">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Timer className="w-4 h-4 md:w-5 md:h-5 text-rose-500" />
                                    <span>실제 시험 환경 (타이머 작동)</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Timer className="w-4 h-4 md:w-5 md:h-5 text-rose-500" />
                                    <span>모든 문제 풀이 후 채점</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-400">
                                    <Timer className="w-4 h-4 md:w-5 md:h-5 text-rose-500" />
                                    <span>성적 기록 및 취약점 분석</span>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <Button className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold h-10 md:h-12 rounded-xl group-hover:shadow-lg group-hover:shadow-rose-500/30 transition-all text-sm md:text-base">
                                    Start Test <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </Card>

                </div>
            </main>
        </div>
    );
}
