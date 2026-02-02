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
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';

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
                "group h-full bg-slate-800/50 border-slate-700 transition-all cursor-pointer overflow-hidden relative p-3 md:p-6",
                isLocked ? "opacity-30 grayscale cursor-not-allowed" : `hover:border-${color}-500/50 hover:bg-slate-800/80`
            )}>
                <div className={cn(
                    "absolute right-0 top-0 w-12 h-12 md:w-24 md:h-24 rounded-full blur-xl transition-all",
                    `bg-${color}-500/5 group-hover:bg-${color}-500/20`
                )}></div>
                <div className="relative z-10 flex flex-col justify-between h-full gap-1">
                    <div className="flex justify-between items-start">
                        <p className={cn("font-black text-[9px] md:text-xs uppercase tracking-widest", `text-${color}-400`)}>{id.replace('_', ' ').toUpperCase()}</p>
                        {!isLocked && <ArrowRight className={cn("w-3.5 h-3.5 md:w-5 md:h-5 transition-colors shrink-0", `text-slate-600 group-hover:text-${color}-400`)} />}
                    </div>
                    <div>
                        <h4 className="text-[17px] md:text-2xl font-black text-white leading-tight italic">{title}</h4>
                        <p className="text-[10px] md:text-xs text-slate-500 font-bold mt-0.5 truncate">{subtitle}</p>
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
        <div className="space-y-4 md:space-y-8 px-0 md:px-0">
            {/* Force Push Notification Activation */}
            {user?.userId && <NotificationForceModal userId={user.userId} />}
            <div className="flex justify-between items-center gap-2 overflow-hidden px-2 py-1 bg-slate-800/20 rounded-lg">
                <div className="flex-1">
                    <p className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">
                        Student Status
                    </p>
                </div>
                <div className="text-right shrink-0">
                    <p className="text-[12px] md:text-lg font-black text-white italic">
                        {user?.userName || user?.name || user?.username} <span className="text-indigo-400 not-italic font-bold ml-1">{user?.className || user?.userClass || '배정 전'}반</span>
                    </p>
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
            <div className="mb-4 md:mb-10">
                <Link href="/student/dashboard">
                    <div className="group relative overflow-hidden rounded-xl md:rounded-3xl bg-gradient-to-r from-indigo-900/80 to-slate-900 border border-indigo-500/20 p-4 md:p-8 cursor-pointer hover:border-indigo-500/50 transition-all">
                        <div className="absolute right-0 top-0 w-32 h-32 md:w-96 md:h-96 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all"></div>
                        <div className="relative z-10 flex items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded-md bg-rose-500/30 text-rose-300 text-[10px] font-black animate-pulse">과제 2</span>
                                    <h2 className="text-[18px] md:text-4xl font-black text-white italic tracking-tighter uppercase">MY STUDY ROOM</h2>
                                </div>
                                <p className="text-slate-400 text-xs md:text-base leading-tight font-bold">나의 완성도 및 취약점 분석</p>
                            </div>
                            <Button className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-white h-10 md:h-auto px-4 md:px-8 rounded-lg md:rounded-xl text-xs md:text-lg font-black shadow-lg shadow-indigo-900/50 transition-all">
                                <span className="hidden md:inline">입장하기</span> <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-[11px] md:text-xl font-black text-slate-600 uppercase tracking-widest">기초 학습 & 과제</h3>
                <div className="h-px flex-1 bg-slate-800/50 ml-4"></div>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-6 ${isPending ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
                <Link href="/homework/voca">
                    <Card className="group bg-slate-800/50 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-3 md:p-6 h-full">
                        <div className="absolute right-0 top-0 w-12 h-12 md:w-24 md:h-24 bg-emerald-50/5 rounded-full blur-xl transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full gap-2">
                            <div className="flex justify-between items-start">
                                <p className="text-emerald-400 font-black text-[9px] md:text-xs uppercase tracking-widest">Voca</p>
                                <ArrowRight className="text-slate-600 group-hover:text-emerald-400 w-4 h-4 md:w-6 md:h-6 transition-colors" />
                            </div>
                            <h4 className="text-[18px] md:text-3xl font-black text-white italic leading-tight">보카 (단어장)</h4>
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/part5">
                    <Card className="group bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-3 md:p-6 h-full">
                        <div className="absolute right-0 top-0 w-12 h-12 md:w-24 md:h-24 bg-blue-50/5 rounded-full blur-xl transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full gap-2">
                            <div className="flex justify-between items-start">
                                <p className="text-blue-400 font-black text-[9px] md:text-xs uppercase tracking-widest">Grammar</p>
                                <ArrowRight className="text-slate-600 group-hover:text-blue-400 w-4 h-4 md:w-6 md:h-6 transition-colors" />
                            </div>
                            <h4 className="text-[18px] md:text-3xl font-black text-white italic leading-tight">문법 미션 (P5)</h4>
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/part1">
                    <Card className="group bg-slate-800/50 border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-3 md:p-6 h-full">
                        <div className="absolute right-0 top-0 w-12 h-12 md:w-24 md:h-24 bg-violet-50/5 rounded-full blur-xl transition-all"></div>
                        <div className="relative z-10 flex flex-col justify-between h-full gap-2">
                            <div className="flex justify-between items-start">
                                <p className="text-violet-400 font-black text-[9px] md:text-xs uppercase tracking-widest">shadowing</p>
                                <ArrowRight className="text-slate-600 group-hover:text-violet-400 w-4 h-4 md:w-6 md:h-6 transition-colors" />
                            </div>
                            <h4 className="text-[18px] md:text-3xl font-black text-white italic leading-tight">쉐도잉 연습법</h4>
                        </div>
                    </Card>
                </Link>
            </div>

            <div className="mb-2 flex items-center justify-between">
                <h3 className="text-[11px] md:text-xl font-black text-slate-600 uppercase tracking-widest">파트별 실전 훈련</h3>
                <div className="h-px flex-1 bg-slate-800/50 ml-4"></div>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 ${isPending ? 'opacity-50 pointer-events-none grayscale' : ''}`}>
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
