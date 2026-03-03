'use client';

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, HelpCircle, AlertCircle, Monitor, PlayCircle, Lock, BookOpen, Volume2, ArrowLeft, Target } from "lucide-react";
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
                const resizeListener = () => checkScreen();
                window.addEventListener('resize', resizeListener);

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
                            const key = `half-${data.testId}`;
                            const newStatus = data.status === 'completed' ? 'completed' :
                                data.status === 'in_progress' ? 'started' : 'none';

                            if (!dbAttempts[key] || newStatus === 'completed') {
                                dbAttempts[key] = {
                                    status: newStatus,
                                    date: data.date
                                };
                            }
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

    const handleStartTest = (testId: string) => {
        if (isMobile) {
            alert("This test is only available on PC screens.");
            return;
        }
        router.push(`/mock-test/half/${testId}?from=${encodeURIComponent(`/level-test?from=${encodeURIComponent(fromPath)}`)}`);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 pb-32">
            <div className="max-w-5xl mx-auto px-2 md:px-8 py-6 md:py-12">
                <header className="mb-8 md:mb-16 relative px-2">
                    <div className="flex items-center gap-4 mb-6">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.push(fromPath)}
                            className="bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-white rounded-full h-8 w-8 md:h-10 md:w-10"
                        >
                            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                        <div className="flex items-center gap-3">
                            <span className="bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider">
                                Diagnostic System
                            </span>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-5xl font-black italic tracking-tighter text-white mb-2 uppercase">
                        TOEIC <span className="text-indigo-500">HALF TEST</span>
                    </h1>

                    <div className="px-3 py-2 bg-indigo-500/5 border border-indigo-500/10 rounded-xl max-w-2xl">
                        <p className="text-slate-400 text-[10px] md:text-base leading-tight font-bold flex items-center gap-2">
                            <AlertCircle className="w-3 h-3 text-rose-500" />
                            PC 응시 전용 | 100문항 정밀 진단
                        </p>
                    </div>

                    {/* Exam Guidelines Section (Matching Mock Test) */}
                    <div className="mt-8 max-w-4xl">
                        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row gap-8 items-start justify-between">
                            <div className="flex-1">
                                <h3 className="text-indigo-400 font-black text-xs md:text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <Monitor className="w-4 h-4" /> Diagnostic Guidelines
                                </h3>
                                <ul className="space-y-3 text-[10px] md:text-[13px] text-slate-400 font-bold leading-relaxed">
                                    <li className="flex gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <span>하프테스트는 실제 시험의 절반인 100문항으로 구성되어 있으며, 35분간 진행됩니다.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <span>모든 파트가 포함되어 있어 현재 자신의 강점과 약점을 파악하기에 최적화된 테스트입니다.</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <span>시험 종료 후 즉시 AI 분석 레포트가 생성되어 예상 점수와 파트별 성취도를 확인할 수 있습니다.</span>
                                    </li>
                                    <li className="flex gap-2 text-rose-400/80">
                                        <span className="text-rose-500">•</span>
                                        <span>응시 중 페이지를 벗어날 경우 기록이 유실될 수 있으니 주의하여 주시기 바랍니다.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="shrink-0 flex flex-col items-center md:items-end gap-4">
                                <div className="text-center md:text-right space-y-2">
                                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest px-1">Audio Check</p>
                                    <button
                                        onClick={() => {
                                            window.speechSynthesis.cancel();
                                            const msg = "지금부터 레벨 평가 리스닝 테스트를 시작합니다. 음량을 조절해 주세요.";
                                            const utterance = new SpeechSynthesisUtterance(msg);
                                            utterance.lang = 'ko-KR';
                                            utterance.rate = 0.85;
                                            const voices = window.speechSynthesis.getVoices();
                                            const bestVoice = voices.find(v => v.lang.includes('ko') && v.name.includes('Google'))
                                                || voices.find(v => v.lang.includes('ko'));
                                            if (bestVoice) utterance.voice = bestVoice;
                                            window.speechSynthesis.speak(utterance);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-xl text-[12px] font-bold transition-all border border-indigo-500/20 shadow-lg shadow-indigo-500/5"
                                    >
                                        <Volume2 className="w-4 h-4" /> 오디오 테스트
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className="flex items-center gap-3 mb-6 px-1">
                        <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                            <Target className="w-4 h-4 md:w-6 md:h-6 text-indigo-500" />
                        </div>
                        <h2 className="text-base md:text-2xl font-black text-white italic uppercase tracking-tight">Diagnostic Half Test</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 px-1">
                        {[
                            { id: '9a', title: '하프테스트 1회', subTitle: '기초 문법 & 단일지문', color: 'indigo' },
                            { id: '9b', title: '하프테스트 2회', subTitle: '연계 지문 & 시간 관리', color: 'rose' }
                        ].map((test) => {
                            const status = attempts[`half-${test.id}`]?.status || 'none';
                            const isCompleted = status === 'completed';
                            const isStarted = status === 'started';

                            return (
                                <Card
                                    key={test.id}
                                    className={cn(
                                        "bg-slate-900 border transition-all duration-500 relative overflow-hidden h-full rounded-2xl md:rounded-[2rem]",
                                        "border-slate-800/50 hover:border-indigo-500/30",
                                        isCompleted && "border-emerald-500/30"
                                    )}
                                >
                                    <CardContent className="p-3 md:p-8 flex flex-col justify-between h-full gap-3 md:gap-6">
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-start">
                                                <Badge variant="outline" className={cn(
                                                    "text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0 md:py-1",
                                                    isCompleted ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                                                )}>
                                                    Half • 100Q
                                                </Badge>
                                            </div>
                                            <h3 className="text-sm md:text-2xl font-black text-white italic tracking-tight leading-tight uppercase">
                                                {test.title}
                                            </h3>
                                            <p className="text-[8px] md:text-xs font-bold text-slate-500 leading-tight uppercase">
                                                {test.subTitle}
                                            </p>
                                        </div>

                                        <Button
                                            onClick={() => handleStartTest(test.id)}
                                            disabled={isCompleted || isMobile}
                                            className={cn(
                                                "w-full h-8 md:h-16 rounded-xl md:rounded-2xl font-black text-[10px] md:text-lg flex items-center justify-center gap-2 transition-all",
                                                isCompleted
                                                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                                                    : isMobile
                                                        ? "bg-slate-800 text-slate-500 cursor-default"
                                                        : test.color === 'indigo' ? "bg-indigo-600 hover:bg-indigo-500 text-white" : "bg-rose-600 hover:bg-rose-500 text-white"
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
