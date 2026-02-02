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

    const maxMock = access?.maxSets?.mockTest || 10;


    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-20">
            <div className="max-w-5xl mx-auto px-2 md:px-8 py-6 md:py-12">
                <header className="mb-8 md:mb-16 relative px-2">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                            Beta Phase
                        </span>
                        <div className="h-px w-8 bg-slate-800"></div>
                        <p className="text-slate-500 font-bold text-[10px] md:text-sm">{maxMock}회차 오픈</p>
                    </div>

                    <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter text-white mb-2 uppercase">
                        TOEIC <span className="text-indigo-500">MOCK TEST</span>
                    </h1>

                    <div className="px-3 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-xl max-w-2xl">
                        <p className="text-slate-400 text-[10px] md:text-base leading-tight font-bold flex items-center gap-2">
                            <AlertCircle className="w-3 h-3 text-rose-500" />
                            PC 응시 전용 | 1회 응시 가능
                        </p>
                    </div>
                </header>


                {/* Full Mock Test Section */}
                <section className="">
                    <div className="flex items-center gap-3 mb-6 px-1">
                        <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                            <BookOpen className="w-4 h-4 md:w-6 md:h-6 text-indigo-500" />
                        </div>
                        <h2 className="text-base md:text-2xl font-black text-white italic uppercase tracking-tight">Full Mock Exam</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 px-1">
                        {[
                            { id: '9', title: '1회 실전 모의', description: '실전 감각' },
                            { id: '10', title: '2회 실전 모의', description: '최종 점검' }
                        ].map((test, index) => {
                            const status = attempts[`full-${test.id}`]?.status || 'none';
                            const isCompleted = status === 'completed';
                            const isStarted = status === 'started';
                            const realTestIndex = test.id === '9' ? 1 : 2;
                            const isLocked = realTestIndex > maxMock;

                            return (
                                <Card
                                    key={test.id}
                                    className={cn(
                                        "bg-slate-900 border transition-all duration-500 relative overflow-hidden h-full rounded-2xl md:rounded-[2rem]",
                                        isLocked ? "border-slate-800 opacity-50 grayscale" : "border-slate-800/50 hover:border-indigo-500/30"
                                    )}
                                >
                                    <CardContent className="p-3 md:p-8 flex flex-col justify-between h-full gap-3 md:gap-6">
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-start">
                                                <Badge variant="outline" className={cn(
                                                    "text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0 md:py-1",
                                                    isCompleted ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                                                )}>
                                                    Full • 200Q
                                                </Badge>
                                            </div>
                                            <h3 className="text-sm md:text-2xl font-black text-white italic tracking-tight leading-tight uppercase">
                                                {test.title}
                                            </h3>
                                        </div>

                                        <Button
                                            onClick={() => handleStartTest('full', test.id)}
                                            disabled={isCompleted || isLocked}
                                            className={cn(
                                                "w-full h-8 md:h-16 rounded-xl md:rounded-2xl font-black text-[10px] md:text-lg flex items-center justify-center gap-2 transition-all",
                                                isCompleted
                                                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                                    : isMobile
                                                        ? "bg-slate-800 text-slate-500 cursor-default"
                                                        : "bg-indigo-600 hover:bg-indigo-500 text-white"
                                            )}
                                        >
                                            {isMobile ? (
                                                <span className="text-[8px] md:text-xs">PC ONLY</span>
                                            ) : isCompleted ? (
                                                "COMPLETED"
                                            ) : (
                                                <>
                                                    <PlayCircle className="w-4 h-4 md:w-6 md:h-6" />
                                                    {isStarted ? "RESUME" : "START"}
                                                </>
                                            )}
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
