
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { Loader2, AlertCircle, BarChart2, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

export default function WeaknessDashboardPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState<WeaknessReport | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const fetchWeakness = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                router.push('/');
                return;
            }
            const user = JSON.parse(userStr);
            const data = await WeaknessService.analyzeUserWeakness(user.userId || user.uid);
            setReport(data);
            setLoading(false);
        };
        fetchWeakness();
    }, [router]);

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-slate-950">
                <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
            </div>
        );
    }

    if (!report || report.weakestTags.length === 0) {
        return (
            <div className="flex h-screen flex-col items-center justify-center bg-slate-950 p-6 text-center">
                <div className="mb-4 rounded-full bg-slate-900 p-4">
                    <Target className="h-12 w-12 text-slate-500" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">데이터가 충분하지 않습니다</h2>
                <p className="text-slate-400 mb-6">문제를 더 풀면 약점을 분석해드릴게요!</p>
                <LinkButton href="/student/dashboard" text="문제 풀러 가기" />
            </div>
        );
    }

    const chartData = report.weakestTags.map(tag => ({
        name: tag.label,
        value: tag.incorrect,
        fullTag: tag
    }));

    return (
        <div className="min-h-screen bg-slate-950 p-4 lg:p-8 font-sans">
            <div className="mx-auto max-w-6xl space-y-8">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                            <BarChart2 className="w-8 h-8 text-indigo-500" />
                            약점 분석 리포트
                        </h1>
                        <p className="text-slate-400 mt-1">최근 학습 데이터를 기반으로 분석된 취약점입니다.</p>
                    </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard
                        title="전체 정답률"
                        value={`${report.totalAccuracy}%`}
                        icon={<TrendingUp className="w-5 h-5 text-emerald-500" />}
                        subtext="Part 1-7 통합"
                    />
                    <MetricCard
                        title="최대 약점 유형"
                        value={report.weakestTags[0]?.label || '-'}
                        icon={<AlertCircle className="w-5 h-5 text-rose-500" />}
                        subtext={`오답 ${report.weakestTags[0]?.incorrect}회 발생`}
                        highlight
                    />
                    <MetricCard
                        title="분석된 문제 수"
                        value={Object.values(report.partBreakdown).reduce((a, b) => a + b, 0) > 0 ? `${Object.values(report.partBreakdown).reduce((a, b) => a + b, 0)}개` : "학습 중"}
                        icon={<Target className="w-5 h-5 text-amber-500" />}
                        subtext="지속적인 업데이트 중"
                    />
                </div>

                {/* Main Analysis Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left: Weakness Chart */}
                    <Card className="lg:col-span-2 border-slate-800 bg-slate-900/50 backdrop-blur">
                        <CardHeader>
                            <CardTitle className="text-white">유형별 오답 빈도 (Top 5)</CardTitle>
                            <CardDescription className="text-slate-400">가장 많이 틀린 문제 유형을 우선적으로 보완해야 합니다.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData.slice(0, 5)} layout="vertical" margin={{ left: 40, right: 30, top: 20, bottom: 20 }}>
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                        <Tooltip
                                            cursor={{ fill: '#334155', opacity: 0.2 }}
                                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
                                        />
                                        <Bar dataKey="value" barSize={30} radius={[0, 4, 4, 0]}>
                                            {chartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 0 ? '#f43f5e' : '#6366f1'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right: Action Items */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white mb-4">추천 학습 (AI 맞춤)</h3>
                        {report.weakestTags.slice(0, 3).map((tag, idx) => (
                            <Card key={tag.tag} className="border-slate-800 bg-slate-900 hover:border-indigo-500/50 transition-colors group">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Priority {idx + 1}</span>
                                            <h4 className="text-lg font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{tag.label}</h4>
                                        </div>
                                        <div className="bg-rose-500/10 text-rose-500 text-xs font-bold px-2 py-1 rounded">
                                            -{tag.incorrect} 문제
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                                        onClick={() => router.push(`/weakness/review?tag=${tag.tag}&part=${tag.part.replace(' ', '')}`)}
                                    >
                                        AI 집중 공략하기
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Part Breakdown Stats */}
                <Card className="border-slate-800 bg-slate-900/50">
                    <CardHeader>
                        <CardTitle className="text-white">파트별 정답률</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Object.entries(report.partBreakdown).map(([part, acc]) => (
                                <div key={part} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-300 font-bold">{part}</span>
                                        <span className={acc >= 80 ? "text-emerald-400" : acc >= 60 ? "text-amber-400" : "text-rose-400"}>{acc}%</span>
                                    </div>
                                    <Progress value={acc} className="h-2 bg-slate-800" indicatorClassName={acc >= 80 ? "bg-emerald-500" : acc >= 60 ? "bg-amber-500" : "bg-rose-500"} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

function MetricCard({ title, value, icon, subtext, highlight = false }: any) {
    return (
        <Card className={`border-slate-800 bg-slate-900/50 ${highlight ? 'border-indigo-500/30 bg-indigo-500/5' : ''}`}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 font-medium text-sm">{title}</span>
                    <div className="p-2 rounded-lg bg-slate-800">{icon}</div>
                </div>
                <div className="text-3xl font-black text-white mb-1">{value}</div>
                {subtext && <div className="text-xs text-slate-500">{subtext}</div>}
            </CardContent>
        </Card>
    );
}

function LinkButton({ href, text }: { href: string, text: string }) {
    const router = useRouter();
    return (
        <Button onClick={() => router.push(href)} className="bg-indigo-600 hover:bg-indigo-500">
            {text}
        </Button>
    )
}
