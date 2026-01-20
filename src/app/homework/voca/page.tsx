'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getUserTargetScore, getUserProgress, getDueReviews } from '@/services/vocabularyService';
import { BookOpen, Brain, CheckCircle, RefreshCw, ArrowRight, Target, Lock } from 'lucide-react';
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
        <div className="max-w-md mx-auto space-y-8 pb-20">
            {/* Header */}
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">
                    WORD<br />
                    <span className="text-indigo-500">MASTER</span>
                </h2>
                <p className="text-slate-400 font-medium text-xs">
                    {targetScore}점 목표 | 매일 꾸준히, 현재 Day {maxDay}까지 오픈
                </p>
            </div>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 border-indigo-500/20 p-6">
                <h3 className="text-lg font-black text-white mb-3">학습 진도</h3>

                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">전체 진행률</span>
                        <span className="text-white font-bold">{progress.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full transition-all duration-500"
                            style={{ width: `${progress.progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                        <div className="text-xl font-black text-emerald-400">{progress.unknown}</div>
                        <div className="text-xs text-slate-400">새로운</div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                        <div className="text-xl font-black text-blue-400">{progress.learning}</div>
                        <div className="text-xs text-slate-400">학습 중</div>
                    </div>
                    <div className="text-center p-2 bg-slate-800/50 rounded-lg">
                        <div className="text-xl font-black text-violet-400">{progress.mastered}</div>
                        <div className="text-xs text-slate-400">완료</div>
                    </div>
                </div>
            </Card>

            {/* Day Grid */}
            <div className="grid grid-cols-3 gap-3">
                {days.map((day) => {
                    // TODO: Get actual completion status from Firestore
                    const isPassed = false; // Placeholder
                    const theme = DAY_THEMES[day] || "테마 준비중";
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
                            <Card className={`
                group relative p-4 rounded-3xl border transition-all cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-1 h-32
                ${isLocked
                                    ? 'bg-slate-900/50 border-slate-800/50 opacity-40 grayscale'
                                    : isPassed
                                        ? 'bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20'
                                        : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/30'
                                }
              `}>
                                {isLocked ? (
                                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-600">
                                        <Lock className="w-3 h-3" />
                                    </div>
                                ) : isPassed ? (
                                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-slate-900 shadow-lg shadow-indigo-500/20">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                ) : (
                                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-indigo-500 transition-colors">
                                        <BookOpen className="w-3 h-3" />
                                    </div>
                                )}

                                <div className="text-center mt-2">
                                    <span className={`font-black text-2xl italic tracking-tighter block mb-1 ${isLocked ? 'text-slate-600' : isPassed ? 'text-indigo-400' : 'text-slate-300 group-hover:text-white'
                                        }`}>
                                        DAY {String(day).padStart(2, '0')}
                                    </span>
                                    {!isLocked && (
                                        <span className="text-xs text-slate-500 font-bold bg-slate-900/50 px-2 py-1 rounded-full border border-slate-800 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
                                            {theme}
                                        </span>
                                    )}
                                </div>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            {/* Info Card */}
            <div className="bg-indigo-500/10 p-6 rounded-3xl border border-indigo-500/20 text-center">
                <p className="text-xs text-indigo-300 font-bold leading-relaxed">
                    각 Day를 클릭하여<br />
                    Sort → Learn → Test 순서로 학습하세요
                </p>
            </div>
        </div>
    );
}
