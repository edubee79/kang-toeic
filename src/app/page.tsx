'use client';
// Winter Camp Deployment Check

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Mic2, Headphones, BookOpen, PenSquare, ArrowRight, Shield, Lock, Target, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from "@/lib/utils";

import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { isAdmin } from '@/lib/adminAuth';

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [featureAccess, setFeatureAccess] = useState<FeatureAccess | null>(null);
    const [stats, setStats] = useState({
        shadowing: 0,
        lc2: 0,
        grammar: 0,
        voca: 0
    });
    const router = useRouter();
    const isPending = user?.status === 'pending';

    useEffect(() => {
        setIsMounted(true);
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        const initData = async () => {
            if (parsedUser.userId) {
                await fetchStats(parsedUser.userId);
            }
            const access = await getFeatureAccess();
            setFeatureAccess(access);
            setLoading(false);
        };

        initData();
    }, [router]);

    const fetchStats = async (userId: string) => {
        if (!userId) return;

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
        }
    };

    if (!isMounted || loading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;
    }

    const renderPracticeCard = (id: keyof FeatureAccess, href: string, title: string, subtitle: string, color: string) => {
        const isLocked = featureAccess && !featureAccess[id];

        const cardContent = (
            <Card className={cn(
                "group h-full bg-slate-800 border-slate-700 transition-all cursor-pointer overflow-hidden relative p-6",
                isLocked ? "opacity-50 grayscale cursor-not-allowed" : `hover:border-${color}-500/50 hover:bg-slate-800/80`
            )}>
                <div className={cn(
                    "absolute right-0 top-0 w-24 h-24 rounded-full blur-2xl transition-all",
                    `bg-${color}-500/10 group-hover:bg-${color}-500/20`
                )}></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-1">
                        <p className={cn("font-bold text-xs uppercase tracking-widest", `text-${color}-400`)}>{id.replace('_', ' ').toUpperCase()}</p>
                        {isLocked && <Lock className="w-4 h-4 text-slate-500" />}
                    </div>
                    <h4 className="text-xl font-black text-white mb-4">{title}</h4>
                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                        <span>{subtitle}</span>
                        {!isLocked && <ArrowRight className={cn("w-5 h-5 transition-colors", `text-slate-600 group-hover:text-${color}-400`)} />}
                        {isLocked && <span className="bg-slate-900/50 px-2 py-0.5 rounded text-[10px] text-slate-600 border border-slate-700 italic">Locked by Admin</span>}
                    </div>
                </div>
            </Card>
        );

        if (isLocked) {
            return <div key={id}>{cardContent}</div>;
        }

        return (
            <Link href={href} key={id}>
                {cardContent}
            </Link>
        );
    };


    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter leading-tight">
                        깡쌤토익<br />
                        <span className="text-indigo-500 italic">ONLINE CLASS</span>
                    </h2>
                    <p className="text-slate-400 font-medium text-xs mt-2">실시간 학습 데이터가 동기화됩니다.</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-slate-300">{user?.name || user?.username} 학생</p>
                    <p className="text-xs text-slate-500">{user?.className || user?.userClass || '배정 전'}반 {isPending && <span className="text-amber-500">(승인 대기중)</span>}</p>
                </div>
            </div>

            {isPending && (
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 text-center">
                    <Shield className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                    <h3 className="text-xl font-black text-amber-500 mb-2">가입 승인 대기 중입니다</h3>
                    <p className="text-slate-400 text-sm">
                        관리자 승인이 완료되면 모든 학습 기능을 이용하실 수 있습니다.<br />
                        승인이 지연되면 담당 선생님께 문의해주세요.
                    </p>
                    <div className="mt-4">
                        <Link href="/admin">
                            <Button variant="outline" className="text-xs border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                                관리자 페이지 바로가기 (관리자인 경우)
                            </Button>
                        </Link>
                    </div>
                </div>
            )
            }

            {/* My Study Room Entry Banner */}
            <div className="mb-12">
                <Link href="/student/dashboard">
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-900 border border-indigo-500/20 p-8 cursor-pointer hover:border-indigo-500/50 transition-all">
                        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/15 transition-all"></div>
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold">Students Only</span>
                                    <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold animate-pulse">오늘의 과제 2개</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-2 italic">MY STUDY ROOM</h2>
                                <p className="text-slate-400">나의 목표 달성도, 취약점 분석, 그리고 오늘의 과제를 확인하세요.</p>
                            </div>
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/50 group-hover:scale-105 transition-all">
                                입장하기 <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                    </div>
                </Link>
            </div>

            <h3 className="text-xl font-black text-slate-500 mb-4 border-b border-slate-800 pb-2">기초 학습 & 과제</h3>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 ${isPending ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                <Link href="/homework/voca">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6 h-full">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">Vocabulary</p>
                                <h4 className="text-2xl font-black text-white italic">보카 (단어장)</h4>
                            </div>
                            <div className="flex justify-end mt-4">
                                <ArrowRight className="text-slate-600 group-hover:text-emerald-400 w-6 h-6 transition-colors" />
                            </div>
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/part5">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6 h-full">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Part 5 수업 숙제</p>
                                <h4 className="text-2xl font-black text-white italic">문법 미션 (Grammar)</h4>
                            </div>
                            <div className="flex justify-end mt-4">
                                <ArrowRight className="text-slate-600 group-hover:text-blue-400 w-6 h-6 transition-colors" />
                            </div>
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/part1">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6 h-full">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <p className="text-violet-400 font-bold text-xs uppercase tracking-widest mb-1">Dictation</p>
                                <h4 className="text-2xl font-black text-white italic">쉐도잉 연습법</h4>
                            </div>
                            <div className="flex justify-end mt-4">
                                <ArrowRight className="text-slate-600 group-hover:text-violet-400 w-6 h-6 transition-colors" />
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>

            <h3 className="text-xl font-black text-slate-500 mt-8 mb-4 border-b border-slate-800 pb-2">파트별 실전 훈련</h3>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${isPending ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                {renderPracticeCard('part1', '/homework/part1-real', '사진 묘사 (실전)', 'Part 1 Real Test', 'indigo')}
                {renderPracticeCard('part2', '/homework/part2', '질의 응답 (청취)', 'Part 2 Listening', 'rose')}
                {renderPracticeCard('part3', '/homework/part3', '짧은 대화 (실전)', 'Part 3 Practical', 'emerald')}
                {renderPracticeCard('part4', '/homework/part4', '설명문 (실전)', 'Part 4 Practical', 'amber')}
                {renderPracticeCard('part5', '/homework/part5-real', '단문 빈칸 (실전)', 'Part 5 Practical', 'violet')}
                {renderPracticeCard('part6', '/homework/part6', '장문 빈칸 (실전)', 'Part 6 Practical', 'cyan')}
                {renderPracticeCard('part7', '/homework/part7', '독해 - 단일지문', 'Part 7 Single', 'orange')}
                {renderPracticeCard('part7_double', '/homework/part7-double', '독해 - 이중지문', 'Part 7 Double/Triple', 'pink')}
            </div>
        </div >
    );
}
