'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, HelpCircle, AlertCircle, Monitor, PlayCircle, Lock, BookOpen, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface TestAttempt {
    status: 'completed' | 'started' | 'none';
    score?: number;
    date?: string;
}

export default function LevelTestLobby() {
    const router = useRouter();
    const [attempts, setAttempts] = useState<Record<string, TestAttempt>>({});
    const [isMobile, setIsMobile] = useState(false);
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                // Check screen size
                const checkScreen = () => {
                    setIsMobile(window.innerWidth < 1024);
                };
                checkScreen();
                const resizeListener = () => checkScreen();
                window.addEventListener('resize', resizeListener);

                // 1. Fetch Access Control First
                const accessData = await getFeatureAccess();
                setAccess(accessData);

                // 2. Fetch DB Attempts
                const userStr = localStorage.getItem('toeic_user');
                if (userStr) {
                    const user = JSON.parse(userStr);
                    const userId = user.userId || user.uid;

                    const attemptsRef = collection(db, "MockTestAttempts");
                    const q = query(attemptsRef, where("userId", "==", userId));
                    const snapshot = await getDocs(q);

                    const dbAttempts: Record<string, TestAttempt> = {};
                    snapshot.forEach(doc => {
                        const data = doc.data();
                        if (data.type === 'half') {
                            dbAttempts[`half-${data.testId}`] = {
                                status: data.status === 'in_progress' ? 'started' : 'completed',
                                date: data.date
                            };
                        }
                    });
                    setAttempts(dbAttempts);
                }
            } catch (error) {
                console.error("Initialization error:", error);
            } finally {
                setLoading(false);
            }
        };
        init();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
                <div className="text-indigo-400 font-bold animate-pulse">심층 레벨 분석 엔진 로딩 중...</div>
            </div>
        );
    }

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8 bg-[#0B0F1A]">
                <Monitor size={64} className="text-slate-700 mb-6" />
                <h1 className="text-2xl font-bold text-white mb-2">PC 전용 기능입니다</h1>
                <p className="text-slate-400 max-w-md">
                    TOEIC 레벨테스트는 실제 시험과 동일한 북클릿 UI를 제공하기 위해<br />넓은 화면(1024px 이상)에서만 응시 가능합니다.
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0B0F1A] text-slate-200 pb-32 overflow-x-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <header className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-900/20">
                            Diagnostic System
                        </span>
                        <div className="h-px w-12 bg-slate-800"></div>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-8">
                        TOEIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">LEVEL TEST</span>
                    </h1>

                    <div className="flex flex-col gap-6">
                        <p className="text-slate-400 text-xl max-w-3xl leading-relaxed font-medium">
                            단 35분, 100문항으로 당신의 현재 토이 점수대를 정밀 분석합니다.<br />
                            강쌤토익만의 <span className="text-white font-bold">시간 관리 분석 엔진</span>이 파트별 속도와 취약점을 진단해드립니다.
                        </p>

                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-2xl w-fit">
                            <AlertCircle className="w-5 h-5 text-rose-500" />
                            <span className="text-slate-300 text-sm font-bold">
                                레벨테스트는 <span className="text-rose-400">회당 1회</span>만 응시 가능합니다. 집중할 수 있는 환경에서 시작해주세요.
                            </span>
                        </div>
                    </div>
                </header>

                <div className="grid md:grid-cols-2 gap-10">
                    {[
                        { id: '9a', title: 'LEVEL TEST SET A', subTitle: '기초 문법 & 단일지문 강화형', description: '9회차 핵심 문항 기반의 밸런스드 세트', color: 'indigo' },
                        { id: '9b', title: 'LEVEL TEST SET B', subTitle: '연계 지문 & 시간 관리 훈련형', description: '고난도 지문 중심의 실전 압박 세트', color: 'rose' }
                    ].map((test, index) => {
                        const status = attempts[`half-${test.id}`]?.status || 'none';
                        const isCompleted = status === 'completed';
                        const isStarted = status === 'started';

                        return (
                            <div key={test.id} className="group relative">
                                <Card className={cn(
                                    "bg-slate-900/40 border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden backdrop-blur-xl relative",
                                    isCompleted && "border-emerald-500/30"
                                )}>
                                    <div className={cn(
                                        "absolute top-0 left-0 w-1 h-full transition-all duration-500",
                                        test.color === 'indigo' ? "bg-indigo-600 group-hover:h-full group-hover:w-2" : "bg-rose-600 group-hover:h-full group-hover:w-2"
                                    )}></div>

                                    {isCompleted && (
                                        <div className="absolute top-6 right-8 bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 text-[10px] px-3 py-1 font-black rounded-lg uppercase tracking-widest z-20">
                                            Analysed
                                        </div>
                                    )}

                                    <CardHeader className="pt-10 px-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Badge variant="outline" className="text-[10px] font-black border-slate-700 text-slate-500 uppercase tracking-tighter">Diagnostic Set</Badge>
                                        </div>
                                        <CardTitle className="text-3xl font-black text-white italic tracking-tight tracking-tighter mb-1 uppercase">
                                            {test.title}
                                        </CardTitle>
                                        <p className={cn("text-xs font-black uppercase tracking-widest mb-4", test.color === 'indigo' ? "text-indigo-400" : "text-rose-400")}>
                                            {test.subTitle}
                                        </p>
                                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{test.description}</p>
                                    </CardHeader>

                                    <CardContent className="p-10 pt-4 space-y-10">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800/50">
                                                <HelpCircle className="w-5 h-5 text-slate-400 mb-2" />
                                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Questions</p>
                                                <p className="text-lg font-black text-white">100문항</p>
                                            </div>
                                            <div className="p-4 bg-slate-800/30 rounded-2xl border border-slate-800/50">
                                                <Clock className="w-5 h-5 text-slate-400 mb-2" />
                                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Time Limit</p>
                                                <p className="text-lg font-black text-white">35분 (RC)</p>
                                            </div>
                                        </div>

                                        <Button
                                            onClick={() => router.push(`/mock-test/half/${test.id}`)}
                                            className={cn(
                                                "w-full h-16 rounded-2xl font-black italic tracking-[0.15em] uppercase transition-all shadow-xl active:scale-[0.98] text-base",
                                                isCompleted
                                                    ? "bg-emerald-600/10 text-emerald-500 border border-emerald-600/30 hover:bg-emerald-600 hover:text-white"
                                                    : test.color === 'indigo'
                                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                                                        : "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/20"
                                            )}
                                        >
                                            {isCompleted ? (
                                                <span className="flex items-center gap-2">View Analysis Report <Target className="w-5 h-5" /></span>
                                            ) : isStarted ? (
                                                "Test in Progress"
                                            ) : (
                                                <span className="flex items-center gap-2">Start Diagnostic <PlayCircle className="w-5 h-5" /></span>
                                            )}
                                        </Button>

                                        {!isCompleted && !isStarted && (
                                            <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                                * This test cannot be retaken once started
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                <footer className="mt-20 p-8 border border-slate-800 bg-slate-900/20 rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/20 text-indigo-400 font-black italic text-xl shadow-inner">K</div>
                        <div>
                            <p className="text-white font-black italic tracking-tighter">KANGS REVOLUTION ENGINE 2.0</p>
                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Powered by Advanced Diagnostic Algorithms</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-slate-400 text-sm font-bold">도움이 필요하신가요?</p>
                        <p className="text-indigo-400 text-xs font-black italic underline decoration-indigo-400/30 cursor-pointer">상담 예약하기</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
