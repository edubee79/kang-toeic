'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, HelpCircle, AlertCircle, Monitor, PlayCircle, Lock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

interface TestAttempt {
    status: 'completed' | 'started' | 'none';
    score?: number;
    date?: string;
}

export default function MockTestLobby() {
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
                        dbAttempts[`full-${data.testId}`] = {
                            status: data.status === 'in_progress' ? 'started' : 'completed',
                            date: data.date
                        };
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

    const handleStartTest = (testType: 'level' | 'full', testId: string) => {
        if (isMobile) {
            alert("This test is only available on PC screens.");
            return;
        }

        const maxMock = access?.maxSets?.mockTest || 10;
        const realTestIndex = testId === '9' ? 1 : (testId === '10' ? 2 : parseInt(testId));

        if (realTestIndex > maxMock) {
            alert(`현재 ${maxMock}회차까지만 오픈되어 있습니다.`);
            return;
        }

        router.push(`/mock-test/${testType}/${testId}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-8">
                <Monitor size={64} className="text-gray-300 mb-6" />
                <h1 className="text-2xl font-bold text-gray-800 mb-2">PC 전용 기능입니다</h1>
                <p className="text-gray-600 max-w-md">
                    TOEIC 모의테스트는 실제 시험과 유사한 환경을 제공하기 위해 넓은 화면(1024px 이상)에서만 응시 가능합니다.
                </p>
            </div>
        );
    }

    const maxMock = access?.maxSets?.mockTest || 10;

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-32">
            <div className="max-w-7xl mx-auto px-6 py-12 md:px-8">
                <header className="mb-16 relative">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left duration-500">
                        <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                            Beta Phase
                        </span>
                        <div className="h-px w-12 bg-slate-800"></div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-6 animate-in fade-in slide-in-from-left duration-700">
                        TOEIC <span className="text-indigo-500">MOCK TEST</span>
                    </h1>

                    <p className="text-slate-400 text-lg max-w-2xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000">
                        실제 시험과 동일한 시간 제한과 문제 구성으로 실력을 점검해보세요.<br />
                        <span className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-sm font-bold">
                            <AlertCircle className="w-4 h-4" />
                            모의테스트는 1회만 응시 가능하며, 종료 시 재응시가 불가능합니다. | 현재 {maxMock}회차 오픈
                        </span>
                    </p>
                </header>

                <div className="grid gap-12">
                    {/* Full Mock Test Section */}
                    <section className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-indigo-500/10 rounded-lg">
                                <BookOpen className="w-6 h-6 text-indigo-500" />
                            </div>
                            <h2 className="text-2xl font-black text-white italic uppercase tracking-tight">Full Mock Exam</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { id: '9', title: '제1회 실전 모의고사', description: '실전 감각 극대화' },
                                { id: '10', title: '제2회 실전 모의고사', description: '고득점 완성 최종 점검' }
                            ].map((test, index) => {
                                const status = attempts[`full-${test.id}`]?.status || 'none';
                                const isCompleted = status === 'completed';
                                const isStarted = status === 'started';
                                const realTestIndex = test.id === '9' ? 1 : 2;
                                const isLocked = realTestIndex > maxMock;

                                return (
                                    <div
                                        key={test.id}
                                        style={{ animationDelay: `${index * 150}ms` }}
                                        className="group relative animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
                                    >
                                        <Card className={cn(
                                            "relative overflow-hidden transition-all duration-500 backdrop-blur-sm group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
                                            isLocked
                                                ? "bg-slate-900/40 border-slate-800 opacity-40 grayscale cursor-not-allowed"
                                                : "bg-slate-900/40 border-slate-800 hover:border-indigo-500/40 group-hover:-translate-y-1"
                                        )}>
                                            {/* Glow Effect */}
                                            {!isLocked && (
                                                <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-600/5 rounded-full blur-3xl group-hover:bg-indigo-600/10 transition-all duration-700"></div>
                                            )}

                                            {isLocked && (
                                                <div className="absolute top-4 right-4 bg-slate-800/50 text-slate-500 border border-slate-700/50 text-[10px] px-3 py-1 font-black rounded-lg uppercase tracking-widest z-20 flex items-center gap-2">
                                                    <Lock className="w-3 h-3" />
                                                    Locked
                                                </div>
                                            )}

                                            {isStarted && !isCompleted && !isLocked && (
                                                <div className="absolute top-4 right-4 bg-amber-500/20 text-amber-500 border border-amber-500/30 text-[10px] px-3 py-1 font-black rounded-lg uppercase tracking-widest z-20">
                                                    In Progress
                                                </div>
                                            )}
                                            {isCompleted && !isLocked && (
                                                <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 text-[10px] px-3 py-1 font-black rounded-lg uppercase tracking-widest z-20">
                                                    Completed
                                                </div>
                                            )}

                                            <CardHeader className="pt-8 px-8 flex flex-row items-start justify-between space-y-0">
                                                <div>
                                                    <CardTitle className={cn(
                                                        "text-2xl md:text-3xl font-black mb-2 italic tracking-tight transition-colors",
                                                        isLocked ? "text-slate-600" : "text-white group-hover:text-indigo-400"
                                                    )}>
                                                        {test.title}
                                                    </CardTitle>
                                                    <p className="text-slate-500 text-sm font-medium">{test.description}</p>
                                                </div>
                                            </CardHeader>

                                            <CardContent className="p-8 pt-4 space-y-8">
                                                <div className="flex gap-8">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                                                            <HelpCircle className="w-4 h-4 text-slate-400" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Questions</p>
                                                            <p className="text-sm font-bold text-slate-300">200문항</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center">
                                                            <Clock className="w-4 h-4 text-slate-400" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Duration</p>
                                                            <p className="text-sm font-bold text-slate-300">120분</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="pt-2">
                                                    {isLocked ? (
                                                        <Button disabled className="w-full h-14 bg-slate-800/50 text-slate-600 border border-slate-700/50 rounded-2xl font-black italic tracking-widest uppercase">
                                                            <Lock className="w-5 h-5 mr-3" />
                                                            Locked (Range Exceeded)
                                                        </Button>
                                                    ) : isCompleted ? (
                                                        <div className="flex flex-col gap-2">
                                                            <Button
                                                                onClick={() => router.push(`/mock-test/full/${test.id}/result`)}
                                                                className="w-full h-14 bg-emerald-600/10 hover:bg-emerald-600 text-emerald-500 hover:text-white border border-emerald-600/30 rounded-2xl font-black italic tracking-widest uppercase transition-all"
                                                            >
                                                                View Results
                                                            </Button>
                                                            <p className="text-[10px] text-center text-slate-500 font-bold">이미 응시 완료한 시험입니다.</p>
                                                        </div>
                                                    ) : isStarted ? (
                                                        <div className="flex flex-col gap-2">
                                                            <Button disabled className="w-full h-14 bg-amber-500/10 text-amber-500 border border-amber-500/30 rounded-2xl font-black italic tracking-widest uppercase">
                                                                <Lock className="w-5 h-5 mr-3" />
                                                                Attempted (Locked)
                                                            </Button>
                                                            <p className="text-[10px] text-center text-amber-500 font-bold">이미 시작한 기록이 있습니다. 재응시 불가.</p>
                                                        </div>
                                                    ) : (
                                                        <Button
                                                            onClick={() => handleStartTest('full', test.id)}
                                                            className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-white border-2 border-indigo-500/50 rounded-2xl font-black italic tracking-widest uppercase shadow-[0_10px_30px_rgba(79,70,229,0.3)] active:scale-[0.98] transition-all group-hover:scale-[1.01]"
                                                        >
                                                            <PlayCircle className="w-5 h-5 mr-3" />
                                                            Start Exam
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
