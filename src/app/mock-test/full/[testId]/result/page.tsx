'use client';

import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Home, BarChart3, RotateCcw, Award } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getCorrectAnswersForTest9, calculateScaledScore } from '@/lib/mock/scoring';

export default function MockTestResult() {
    const router = useRouter();
    const params = useParams();
    const testId = Number(params?.testId);

    const [attempt, setAttempt] = useState<any>(null);
    const [stats, setStats] = useState<{
        lcRaw: number;
        rcRaw: number;
        lcScaled: number;
        rcScaled: number;
        total: number;
    } | null>(null);

    useEffect(() => {
        const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
        const key = `full-${testId}`;
        const data = savedAttempts[key];

        if (data && data.answers) {
            setAttempt(data);

            // Calculate Scores for Test 9
            if (testId === 9) {
                const correctAnswers = getCorrectAnswersForTest9();
                let lcCorrect = 0;
                let rcCorrect = 0;

                Object.entries(correctAnswers).forEach(([qId, correct]) => {
                    const userAns = data.answers[qId];
                    if (userAns === correct) {
                        const qNum = parseInt(qId.replace(/[^0-9]/g, ''));
                        if (qNum <= 100) lcCorrect++;
                        else rcCorrect++;
                    }
                });

                const lcScaled = calculateScaledScore(lcCorrect, 'LC');
                const rcScaled = calculateScaledScore(rcCorrect, 'RC');

                setStats({
                    lcRaw: lcCorrect,
                    rcRaw: rcCorrect,
                    lcScaled,
                    rcScaled,
                    total: lcScaled + rcScaled
                });
            }
        } else {
            router.push('/mock-test');
        }
    }, [testId, router]);

    if (!attempt || !stats) return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <div className="animate-pulse text-slate-400 font-bold">Calculating your scores...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
            <Card className="max-w-3xl w-full bg-white shadow-2xl border-none rounded-3xl overflow-hidden">
                {/* Header Decoration */}
                <div className="h-3 bg-indigo-600 w-full"></div>

                <CardHeader className="text-center pt-10 pb-6">
                    <div className="mx-auto w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Award className="w-10 h-10 text-indigo-600" />
                    </div>
                    <CardTitle className="text-3xl font-black text-slate-900 tracking-tight">
                        실전 모의고사 성적표
                    </CardTitle>
                    <p className="text-slate-500 font-medium mt-1">제1회 실전 모의고사 (ETS 10회 기반)</p>
                </CardHeader>

                <CardContent className="px-8 pb-12 space-y-10">
                    {/* Main Score Display */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ScoreBox label="Listening" raw={stats.lcRaw} scaled={stats.lcScaled} color="blue" />
                        <ScoreBox label="Reading" raw={stats.rcRaw} scaled={stats.rcScaled} color="emerald" />
                        <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col items-center justify-center shadow-xl transform scale-105">
                            <span className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Total Score</span>
                            <span className="text-6xl font-black tracking-tighter">{stats.total}</span>
                            <span className="text-[10px] opacity-40 mt-3">Max Score: 990</span>
                        </div>
                    </div>

                    {/* Progress Breakdown */}
                    <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex justify-between items-end mb-2">
                            <h3 className="font-black text-slate-800 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-indigo-600" />
                                정답률 상세
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400">RAW SCORE BREAKDOWN</span>
                        </div>

                        <ProgressBar label="LC (Listening)" current={stats.lcRaw} total={100} color="bg-blue-500" />
                        <ProgressBar label="RC (Reading)" current={stats.rcRaw} total={100} color="bg-emerald-500" />
                    </div>

                    {/* Footer Info */}
                    <div className="text-center space-y-6 pt-4">
                        <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-400 bg-slate-100 py-2 px-4 rounded-full w-fit mx-auto">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            제출 시간: {new Date(attempt.date).toLocaleString()}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={() => router.push('/mock-test')}
                                variant="outline"
                                className="flex-1 h-14 border-2 border-slate-200 rounded-2xl font-black text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all"
                            >
                                <Home className="w-5 h-5 mr-2" />
                                홈으로 돌아가기
                            </Button>
                            <Button
                                onClick={() => router.push(`/mock-test/full/${testId}`)}
                                className="flex-1 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black text-white shadow-lg shadow-indigo-100 transition-all active:scale-95"
                            >
                                <RotateCcw className="w-5 h-5 mr-2" />
                                다시 응시하기
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function ScoreBox({ label, raw, scaled, color }: { label: string, raw: number, scaled: number, color: 'blue' | 'emerald' }) {
    const bgColor = color === 'blue' ? 'bg-blue-50' : 'bg-emerald-50';
    const textColor = color === 'blue' ? 'text-blue-600' : 'text-emerald-600';
    const borderColor = color === 'blue' ? 'border-blue-100' : 'border-emerald-100';

    return (
        <div className={`${bgColor} ${borderColor} border p-6 rounded-3xl flex flex-col items-center`}>
            <span className={`text-[10px] font-black uppercase tracking-widest ${textColor} opacity-80 mb-1`}>{label}</span>
            <span className="text-4xl font-black text-slate-900 tracking-tighter">{scaled}</span>
            <div className="mt-3 flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-inherit shadow-sm">
                <span className="text-[10px] font-black text-slate-400 uppercase">Correct:</span>
                <span className={`text-[11px] font-black ${textColor}`}>{raw}/100</span>
            </div>
        </div>
    );
}

function ProgressBar({ label, current, total, color }: { label: string, current: number, total: number, color: string }) {
    const percentage = (current / total) * 100;
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-black text-slate-600 px-1">
                <span>{label}</span>
                <span>{current} / {total}</span>
            </div>
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-200 p-[2px]">
                <div
                    className={`h-full ${color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
