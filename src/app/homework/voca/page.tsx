'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getUserTargetScore, getUserProgress, getDueReviews } from '@/services/vocabularyService';
import { ArrowLeft, BookOpen, Brain, CheckCircle, RefreshCw, ArrowRight, Target, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

export default function VocabularyDashboard() {
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [targetScore, setTargetScore] = useState<650 | 800 | 900 | null>(null);
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [progress, setProgress] = useState({
        totalWords: 0,
        unknown: 0,
        learning: 0,
        mastered: 0,
        progress: 0
    });
    const [dueReviewCount, setDueReviewCount] = useState(0);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        const init = async () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.push('/login');
                return;
            }

            const user = JSON.parse(userData);
            setUserId(user.userId);

            try {
                // Fetch Access Control
                const accessData = await getFeatureAccess();
                setAccess(accessData);

                // Extract target score from userClass (e.g., "800반" → 800)
                const classMatch = user.userClass?.match(/(\d+)반/);
                const score = classMatch ? parseInt(classMatch[1]) : 800; // Default to 800

                setTargetScore(score as 650 | 800 | 900);

                const progressData = await getUserProgress(user.userId, score as 650 | 800 | 900);
                setProgress(progressData);
            } catch (error) {
                console.error('Error loading vocabulary data:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router]);

    if (!isMounted || loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    // Handle global lock
    if (access && access.voca === false) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-rose-500/10 rounded-full flex items-center justify-center text-rose-500 mb-6">
                    <Lock className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-black text-white mb-2 italic tracking-tighter uppercase">Access Denied</h2>
                <p className="text-slate-400 text-sm font-medium">관리자의 요청에 의해 단어장 접근이 잠시 중단되었습니다.</p>
                <Button onClick={() => router.push('/')} className="mt-8 bg-slate-800 hover:bg-slate-700 text-white px-8">메인으로</Button>
            </div>
        );
    }

    const maxDay = access?.maxSets?.voca || 30; // Default to 30 if not set

    // Generate Day 1-30
    // Generate Day 1-15 (User requested to hide 16-30 for now)
    const days = Array.from({ length: 15 }, (_, i) => i + 1);

    const DAY_THEMES: Record<number, string> = {
        1: "인사/채용",
        2: "사무/업무",
        3: "의사소통",
        4: "고객서비스",
        5: "시설/장소",
        6: "재무/회계",
        7: "마케팅/광고",
        8: "계약/협상",
        9: "생산/제조",
        10: "물류/배송",
        11: "연구/개발",
        12: "경영/관리",
        13: "인사/복지",
        14: "법률/규정",
        15: "종합/숙어",
    };

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href="/"><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter text-indigo-500">
                            <span className="text-white">Word</span>
                            <span className="text-indigo-500"> Master</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">TOEIC 필수 어휘 1500개 완성</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">Goal: {targetScore}</p>
                    <p className="text-slate-600 font-black text-[9px] md:text-xs uppercase tracking-widest mt-1">Day {maxDay} Open</p>
                </div>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                {/* Progress Overview */}
                <Card className="bg-slate-900/60 border-indigo-500/20 p-4 md:p-6 mx-3 md:mx-0 mb-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-2 md:mb-4">
                            <h3 className="text-sm md:text-lg font-black text-slate-300 uppercase tracking-widest leading-none italic">Daily Progress</h3>
                            <span className="text-indigo-400 font-black text-lg md:text-xl italic">{progress.progress}%</span>
                        </div>

                        <div className="mb-4 md:mb-6">
                            <div className="w-full bg-slate-800/50 rounded-full h-1.5 md:h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full transition-all duration-500"
                                    style={{ width: `${progress.progress}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 md:gap-4 font-inter">
                            <div className="text-center py-2 md:py-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                                <div className="text-lg md:text-2xl font-black text-emerald-400 leading-none italic">{progress.unknown}</div>
                                <div className="text-[9px] md:text-xs text-slate-500 uppercase font-bold mt-1 tracking-widest">New</div>
                            </div>
                            <div className="text-center py-2 md:py-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                                <div className="text-lg md:text-2xl font-black text-blue-400 leading-none italic">{progress.learning}</div>
                                <div className="text-[9px] md:text-xs text-slate-500 uppercase font-bold mt-1 tracking-widest">Learn</div>
                            </div>
                            <div className="text-center py-2 md:py-3 bg-slate-800/40 rounded-xl border border-slate-700/30">
                                <div className="text-lg md:text-2xl font-black text-violet-400 leading-none italic">{progress.mastered}</div>
                                <div className="text-[9px] md:text-xs text-slate-500 uppercase font-bold mt-1 tracking-widest">Done</div>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0 mt-4 md:mt-8">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                        <Target className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase italic">Combat Lexicon</h2>
                        <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Vocabulary Training</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 px-3 md:px-0">
                    {days.map((day) => {
                        const isPassed = false;
                        const theme = DAY_THEMES[day] || "Loading";
                        const isLocked = day > maxDay;

                        return (
                            <Link
                                key={day}
                                href={isLocked ? "#" : `/homework/voca/${day}`}
                                onClick={(e) => {
                                    if (isLocked) {
                                        e.preventDefault();
                                        alert(`Day ${maxDay}번까지만 현재 오픈되어 있습니다.`);
                                    }
                                }}
                            >
                                <Card className={cn(
                                    "group relative p-2 md:p-3.5 rounded-xl md:rounded-2xl border transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-1 h-auto min-h-[64px] md:min-h-[110px]",
                                    isLocked
                                        ? 'bg-slate-900 border-slate-800 opacity-40 grayscale'
                                        : isPassed
                                            ? 'bg-indigo-500/10 border-indigo-500/30 hover:bg-indigo-500/20 shadow-lg shadow-indigo-500/10'
                                            : 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50'
                                )}>
                                    <div className="text-center relative z-10">
                                        <span className={cn(
                                            "font-black text-xl md:text-4xl italic tracking-tighter block leading-none",
                                            isLocked ? 'text-slate-600' : isPassed ? 'text-indigo-400' : 'text-slate-300 group-hover:text-white'
                                        )}>
                                            DAY {String(day).padStart(2, '0')}
                                        </span>
                                        {!isLocked && (
                                            <span className="text-[8px] md:text-xs text-slate-500 font-black uppercase block truncate max-w-[70px] md:max-w-none mt-1 tracking-tighter">
                                                {theme}
                                            </span>
                                        )}
                                    </div>
                                    {isLocked && (
                                        <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-slate-600">
                                            <Lock className="w-2.5 h-2.5" />
                                        </div>
                                    )}
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="bg-indigo-500/5 p-4 py-6 border-y border-indigo-500/10 text-center">
                <p className="text-[10px] md:text-xs text-indigo-400/70 font-black uppercase tracking-[0.2em] leading-tight">
                    DAY 클릭 → Sort → Learn → Test 순서로 학습
                </p>
            </div>
        </div>
    );
}
