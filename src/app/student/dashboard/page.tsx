'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Mic2, Headphones, BookOpen, PenSquare, Target, TrendingUp, AlertTriangle, Zap, ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { getUserProfile, updateTargetScore } from '@/services/userService';
import { TargetSettingSection } from '@/components/dashboard/TargetSettingSection';

export default function StudentDashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        shadowing: 0,
        lc2: 0,
        grammar: 0,
        voca: 0
    });

    // Target Score State
    const [targetScore, setTargetScore] = useState<number>(850); // Default fallback
    const [isEditingScore, setIsEditingScore] = useState(false);
    const [newTargetScore, setNewTargetScore] = useState('');

    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        fetchStats(parsedUser.userId);
        fetchTargetScore(parsedUser.userId);
    }, [router]);

    const fetchTargetScore = async (userId: string) => {
        try {
            const profile = await getUserProfile(userId);
            if (profile && profile.targetScore) {
                setTargetScore(profile.targetScore);
            }
        } catch (error) {
            console.error("Failed to load target score", error);
        }
    };

    const handleSaveScore = async () => {
        if (!user || !newTargetScore) return;
        const score = parseInt(newTargetScore);
        if (isNaN(score)) return;

        try {
            await updateTargetScore(user.userId, score);
            setTargetScore(score);
            setIsEditingScore(false);
        } catch (error) {
            console.error("Failed to update score", error);
        }
    };

    const fetchStats = async (userId: string) => {
        try {
            const q = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", userId)
            );
            const querySnapshot = await getDocs(q);

            let maxShadowSet = 0;
            let lc2Count = 0;
            let grammarCount = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const unitName = data.unit || "";

                if (unitName.includes('Shadowing')) {
                    const match = unitName.match(/Set(\d+)/);
                    if (match && parseInt(match[1]) > maxShadowSet) maxShadowSet = parseInt(match[1]);
                }
                else if (unitName.includes('LCpart2') || unitName.includes('Part2')) {
                    lc2Count++;
                }
                else if (unitName.includes('Grammar') || unitName.includes('Unit')) {
                    grammarCount++;
                }
            });

            const userData = JSON.parse(localStorage.getItem('toeic_user') || '{}');
            const vocaCount = userData.passedVocaDays ? userData.passedVocaDays.length : 0;

            setStats({
                shadowing: maxShadowSet,
                lc2: lc2Count,
                grammar: grammarCount,
                voca: vocaCount
            });
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;
    }

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            메인으로
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">나의 학습방</h2>
                        <p className="text-slate-400 text-sm">개인 맞춤형 학습 성취도 분석 및 과제 관리</p>
                    </div>
                </div>

                {/* Class Info / Rank Badge */}
                {user && (
                    <div className="hidden md:flex items-center gap-4 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
                        <div className="text-right">
                            <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">My Class</p>
                            <p className="text-white font-bold">{user.className || "스파르타 750+ 목표반"}</p>
                        </div>
                        <div className="h-8 w-px bg-slate-700"></div>
                        <div className="text-left">
                            <div className="flex items-center gap-1.5">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                <span className="text-white font-bold">15등</span>
                                <span className="text-slate-500 text-xs">/ 120명</span>
                            </div>
                            <p className="text-xs text-emerald-500 font-medium">상위 12% 🔥</p>
                        </div>
                    </div>
                )}
            </div>

            {/* 1. Today's Homework (Admin Assigned) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-indigo-400 w-5 h-5" />
                    <h3 className="text-lg font-bold text-white">오늘의 과제 (To Do)</h3>
                    <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">New</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-slate-800 border-slate-700 p-4 flex justify-between items-center group cursor-pointer hover:border-indigo-500/50 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <PenSquare className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-slate-200 font-bold text-sm">Part 5 문법 - Unit 3 복습</p>
                                <p className="text-slate-500 text-xs">강사 배정 • 마감: 오늘까지</p>
                            </div>
                        </div>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500">시작하기</Button>
                    </Card>
                    <Card className="bg-slate-800 border-slate-700 p-4 flex justify-between items-center group cursor-pointer hover:border-emerald-500/50 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-slate-200 font-bold text-sm">Day 15 단어 암기</p>
                                <p className="text-slate-500 text-xs">매일 과제 • 진행률 0%</p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:text-white">이어하기</Button>
                    </Card>
                </div>
            </div>

            {/* 2. Score & Weakness (Detailed Target Setting Next to Achievement) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Detailed Target Setting */}
                {user && (
                    <TargetSettingSection
                        user={user}
                        currentStats={stats}
                        onUpdate={() => {
                            if (user) fetchTargetScore(user.userId);
                        }}
                    />
                )}

                {/* Score Overview (Simplified - just showing progress now, setting is moved) */}
                <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="text-indigo-400 w-5 h-5" />
                            <h3 className="text-lg font-bold text-white">나의 목표 달성도</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                <div className="text-3xl font-black text-white">{targetScore}<span className="text-base text-slate-500 ml-1">점</span></div>
                                <div className="mt-2 text-xs text-slate-500">목표까지 <span className="text-indigo-400 font-bold">+{Math.max(0, targetScore - 730)}점</span> 남았습니다.</div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1">AI PREDICTION</p>
                                <div className="text-3xl font-black text-indigo-400">730<span className="text-base text-indigo-500/50 ml-1">점</span></div>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">지난달 대비 +45점</span> 상승
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>진행률</span>
                                <span>85%</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full w-[85%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* 2.1 Weakness Analysis (Moved down to separate row for layout balance) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-3 bg-slate-900 border-rose-500/30 p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <AlertTriangle className="text-rose-400 w-5 h-5" />
                            <h3 className="text-lg font-bold text-white">AI 취약점 분석</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-rose-400 font-bold text-sm">가정법 (Subjunctive)</span>
                                    <span className="text-xs text-rose-300 bg-rose-500/20 px-1.5 py-0.5 rounded">정답률 42%</span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    가정법 과거완료 시제 매칭에서 잦은 실수가 감지되었습니다.
                                </p>
                            </div>
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-amber-400 font-bold text-sm">Part 5 풀이 속도</span>
                                    <span className="text-xs text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">평균 28초</span>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    목표 시간(20초)보다 느립니다. 어휘 유형 훈련이 필요합니다.
                                </p>
                            </div>
                        </div>
                        <Button variant="ghost" className="w-full mt-4 text-xs text-slate-400 hover:text-white hover:bg-slate-800 h-8">
                            <Zap className="w-3 h-3 mr-1" />
                            약점 보완 문제 풀러가기
                        </Button>
                    </div>
                </Card>
            </div>

            {/* 3. Overall Statistics (Moved from Main) */}
            <div>
                <h3 className="text-xl font-bold text-slate-400 mb-4">전체 학습 현황</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <ProgressCard
                        title="Part 1 쉐도잉"
                        value={`${(stats.shadowing / 5 * 100).toFixed(0)}%`}
                        subValue={`${stats.shadowing}/5 세트`}
                        current={stats.shadowing}
                        total={5}
                        color="indigo"
                        icon={Mic2}
                    />
                    <ProgressCard
                        title="Part 2 실전 테스트"
                        value={`${Math.min((stats.lc2 / 5 * 100), 100).toFixed(0)}%`}
                        subValue={`${stats.lc2}/5 회`}
                        current={stats.lc2}
                        total={5}
                        color="rose"
                        icon={Headphones}
                    />
                    <ProgressCard
                        title="문법 과제 (Grammar)"
                        value={`${Math.min((stats.grammar / 10 * 100), 100).toFixed(0)}%`}
                        subValue={`${stats.grammar}/10 Units`}
                        current={stats.grammar}
                        total={10}
                        color="blue"
                        icon={PenSquare}
                    />
                    <ProgressCard
                        title="단어 암기 (Voca)"
                        value={`${(stats.voca / 30 * 100).toFixed(0)}%`}
                        subValue={`${stats.voca}/30 Days`}
                        current={stats.voca}
                        total={30}
                        color="emerald"
                        icon={BookOpen}
                    />
                </div>
            </div>
        </div>
    );
}
