'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, AlertCircle, PlayCircle, Lock, BookOpen, Target, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface TestAttempt {
    status: 'completed' | 'started' | 'none';
    score?: number;
    date?: string;
}

export default function LevelTestLobby() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=PROBLEM';
    const [attempts, setAttempts] = useState<Record<string, TestAttempt>>({});
    const [isMobile, setIsMobile] = useState(false);
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {
            try {
                const checkScreen = () => {
                    setIsMobile(window.innerWidth < 1024);
                };
                checkScreen();
                window.addEventListener('resize', checkScreen);

                const accessData = await getFeatureAccess();
                setAccess(accessData);

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
        return () => window.removeEventListener('resize', () => { });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B0F1A] flex items-center justify-center">
                <div className="text-indigo-400 font-bold animate-pulse">심층 레벨 분석 엔진 로딩 중...</div>
            </div>
        );
    }

    const maxMock = 10; // Default or from access

    return (
        <div className="min-h-screen bg-[#0B0F1A] text-slate-200 pb-20 overflow-x-hidden relative">
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-rose-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-2 md:px-8 py-6 md:py-20 relative z-10">
                <header className="mb-8 md:mb-20 px-2">
                    <div className="flex justify-between items-center mb-6">
                        <Link
                            href={fromPath}
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="font-bold text-xs">Back</span>
                        </Link>
                        <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                            Diagnostic System
                        </span>
                    </div>

                    <h1 className="text-2xl md:text-6xl font-black italic tracking-tighter text-white mb-2 uppercase">
                        TOEIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-rose-400">LEVEL TEST</span>
                    </h1>

                    <div className="px-3 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-xl max-w-3xl">
                        <p className="text-slate-400 text-[10px] md:text-xl font-medium leading-tight">
                            단 35분, 100문항 정밀 분석 | <span className="text-rose-400">PC 응시 전용</span>
                        </p>
                    </div>
                </header>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-10 px-1">
                    {[
                        { id: '9a', title: 'LEVEL TEST A', subTitle: '기초 문법 & 단일지문', color: 'indigo' },
                        { id: '9b', title: 'LEVEL TEST B', subTitle: '연계 지문 & 시간 관리', color: 'rose' }
                    ].map((test) => {
                        const status = attempts[`half-${test.id}`]?.status || 'none';
                        const isCompleted = status === 'completed';

                        return (
                            <div key={test.id} className="group relative">
                                <Card className={cn(
                                    "bg-slate-900/40 border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden backdrop-blur-xl relative h-full rounded-2xl md:rounded-3xl",
                                    isCompleted && "border-emerald-500/30"
                                )}>
                                    <CardContent className="p-3 md:p-8 flex flex-col justify-between h-full gap-3 md:gap-6">
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-start">
                                                <Badge variant="outline" className={cn(
                                                    "text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0 md:py-1",
                                                    isCompleted ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                                                )}>
                                                    Diagnostic • 100Q
                                                </Badge>
                                            </div>
                                            <h3 className="text-sm md:text-3xl font-black text-white italic tracking-tight leading-tight uppercase">
                                                {test.title}
                                            </h3>
                                            <p className="text-[8px] md:text-xs font-bold text-slate-500 leading-tight uppercase">
                                                {test.subTitle}
                                            </p>
                                        </div>

                                        <Button
                                            onClick={() => router.push(`/level-test/${test.id}?from=${encodeURIComponent(`/level-test?from=${encodeURIComponent(fromPath)}`)}`)}
                                            disabled={isCompleted || isMobile}
                                            className={cn(
                                                "w-full h-8 md:h-16 rounded-xl md:rounded-2xl font-black text-[10px] md:text-lg flex items-center justify-center transition-all",
                                                isCompleted
                                                    ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 cursor-not-allowed"
                                                    : isMobile
                                                        ? "bg-slate-800 text-slate-500 cursor-default"
                                                        : test.color === 'indigo' ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-rose-600 hover:bg-rose-500 text-white"
                                            )}
                                        >
                                            {isMobile ? (
                                                <span>PC ONLY</span>
                                            ) : isCompleted ? (
                                                "COMPLETED"
                                            ) : (
                                                <>
                                                    <PlayCircle className="w-4 h-4 md:w-6 md:h-6 mr-2" />
                                                    START
                                                </>
                                            )}
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                <footer className="mt-12 md:mt-20 p-4 md:p-8 border border-slate-800 bg-slate-900/20 rounded-2xl md:rounded-3xl flex items-center justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-2xl bg-indigo-600/20 flex items-center justify-center border border-indigo-500/20 text-indigo-400 font-black italic text-sm md:text-xl shadow-inner">K</div>
                        <div>
                            <p className="text-white font-black italic tracking-tighter text-[10px] md:text-base">KANGS REVOLUTION</p>
                            <p className="text-slate-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Diagnostic Algorithm</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
