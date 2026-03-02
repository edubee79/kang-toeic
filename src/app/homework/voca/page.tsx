'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getUserTargetScore, getUserProgress, getDueReviews } from '@/services/vocabularyService';
import { ArrowLeft, BookOpen, Brain, CheckCircle, RefreshCw, ArrowRight, Target, Lock, HelpCircle, Shield, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { ApprovalGatedAction } from '@/components/auth/ApprovalGatedSection';

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
    const [showGuide, setShowGuide] = useState(true);
    const router = useRouter();
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=VOCAB';

    const [completions, setCompletions] = useState<Record<string, any>>({});

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

                // Fetch Progress and Completions
                const [progressData, completionData] = await Promise.all([
                    getUserProgress(user.userId, score as 650 | 800 | 900),
                    import('@/services/completionService').then(m =>
                        m.getMultipleTestCompletions(user.userId, Array.from({ length: 20 }, (_, i) => `Voca_Day${i + 1}`))
                    )
                ]);

                setProgress(progressData);
                setCompletions(completionData);
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

    // Generate Day 1-20
    const days = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-32 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter text-indigo-500">
                            <span className="text-white">Word</span>
                            <span className="text-indigo-500"> Master</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">TOEIC 필수 어휘 완성</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">Goal: 1000</p>
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

                {/* Strategic Study Guide */}
                <Card className="bg-slate-900 border-2 border-indigo-500/20 p-4 md:p-6 mx-3 md:mx-0 mb-8 relative overflow-hidden group">
                    <div className="absolute right-0 top-0 p-2 md:p-4 text-indigo-500/10 group-hover:text-indigo-500/20 transition-colors">
                        <Shield className="w-16 h-16 md:w-24 md:h-24" />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                                    <HelpCircle className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <h3 className="text-sm md:text-xl font-black text-white italic tracking-tight uppercase">Word Master 전략적 학습 가이드</h3>
                            </div>
                            <button
                                onClick={() => setShowGuide(!showGuide)}
                                className="text-[10px] md:text-xs font-black text-slate-500 hover:text-white transition-colors border border-slate-700 px-2 py-1 rounded"
                            >
                                {showGuide ? '접기' : '길게 보기'}
                            </button>
                        </div>

                        {showGuide && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-in fade-in slide-in-from-top-2 duration-500">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-indigo-500 text-white font-black px-1.5 py-0.5 rounded leading-none">01</span>
                                        <span className="text-xs md:text-sm font-black text-slate-300 uppercase italic">SORT (분류)</span>
                                    </div>
                                    <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed">아는 단어는 과감히 넘기고, 모르는 단어만 골라내 학습 효율을 극대화하세요.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-indigo-500 text-white font-black px-1.5 py-0.5 rounded leading-none">02</span>
                                        <span className="text-xs md:text-sm font-black text-slate-300 uppercase italic">LEARN (학습)</span>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-start gap-1.5">
                                            <span className="text-[9px] bg-emerald-500/20 text-emerald-400 font-black px-1 rounded mt-0.5">Basic</span>
                                            <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">핵심 뜻과 예문에 집중</p>
                                        </div>
                                        <div className="flex items-start gap-1.5">
                                            <span className="text-[9px] bg-amber-500/20 text-amber-400 font-black px-1 rounded mt-0.5">Advanced</span>
                                            <p className="text-[10px] md:text-[11px] text-slate-400 font-medium">콜로케이션과 문법 팁까지 섭렵</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-indigo-500 text-white font-black px-1.5 py-0.5 rounded leading-none">03</span>
                                        <span className="text-xs md:text-sm font-black text-slate-300 uppercase italic">TEST (평가)</span>
                                    </div>
                                    <p className="text-[11px] md:text-xs text-slate-500 font-medium leading-relaxed">뜻 맞추기와 <strong>문장 빈칸 채우기</strong> 퀴즈를 통해 실전적 응용력을 평가합니다.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-indigo-500 text-white font-black px-1.5 py-0.5 rounded leading-none">04</span>
                                        <span className="text-xs md:text-sm font-black text-slate-300 uppercase italic">AUDIO (청취)</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 bg-slate-950/50 rounded-xl border border-white/5">
                                        <Volume2 className="w-4 h-4 text-indigo-400" />
                                        <p className="text-[10px] md:text-[11px] text-slate-500 font-medium">모든 예문은 클릭 시 학습에 최적화된 속도로 재생됩니다.</p>
                                    </div>
                                </div>
                            </div>
                        )}
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
                        const completionKey = `Voca_Day${day}`;
                        const isPassed = completions[completionKey]?.completed || false;
                        const isLocked = day > maxDay;

                        return (
                            <ApprovalGatedAction key={day}>
                                <Link
                                    href={isLocked ? "#" : `/homework/voca/${day}?from=${encodeURIComponent(`/homework/voca?from=${encodeURIComponent(fromPath)}`)}`}
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
                                                ? 'bg-indigo-500/10 border-indigo-500/40 hover:bg-indigo-500/20 shadow-lg shadow-indigo-500/10'
                                                : 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/50'
                                    )}>
                                        {isPassed && !isLocked && (
                                            <div className="absolute top-1.5 right-1.5 text-emerald-500">
                                                <CheckCircle className="w-3 h-3 md:w-4 md:h-4" />
                                            </div>
                                        )}
                                        <div className="text-center relative z-10">
                                            <span className={cn(
                                                "font-black text-xl md:text-4xl italic tracking-tighter block leading-none",
                                                isLocked ? 'text-slate-600' : isPassed ? 'text-indigo-400' : 'text-slate-300 group-hover:text-white'
                                            )}>
                                                DAY {String(day).padStart(2, '0')}
                                            </span>
                                        </div>
                                        {isLocked && (
                                            <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-slate-600">
                                                <Lock className="w-2.5 h-2.5" />
                                            </div>
                                        )}
                                    </Card>
                                </Link>
                            </ApprovalGatedAction>
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
