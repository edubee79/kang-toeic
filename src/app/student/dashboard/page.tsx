'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Mic2, Headphones, BookOpen, PenSquare, Target, TrendingUp, AlertTriangle, Zap, ArrowLeft, Calendar, CheckCircle2, BarChart2, ChevronRight } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { getUserProfile, updateTargetScore } from '@/services/userService';
import { getWeaknessAnalysis, AnalysisResult } from '@/services/analysisService';
import { TargetSettingSection } from '@/components/dashboard/TargetSettingSection';
import { ClassInfoCard } from '@/components/dashboard/ClassInfoCard';
import { Clock } from 'lucide-react';

// Homework Configuration for Progress display
const HOMEWORK_CONFIG: Record<string, { label: string, total: number, unit: string, color: string, icon: any }> = {
    voca: { label: '단어 암기 (Voca)', total: 30, unit: 'Days', color: 'emerald', icon: BookOpen },
    grammar: { label: '문법 (Grammar)', total: 13, unit: 'Units', color: 'blue', icon: PenSquare },
    part1_shadow: { label: 'Part 1 쉐도잉', total: 5, unit: 'Sets', color: 'indigo', icon: Mic2 },
    part2_test: { label: 'LC Part 2 실전', total: 10, unit: 'Tests', color: 'rose', icon: Headphones },
    part3_test: { label: 'LC Part 3 실전', total: 10, unit: 'Tests', color: 'orange', icon: Headphones },
    part4_test: { label: 'LC Part 4 실전', total: 10, unit: 'Tests', color: 'pink', icon: Headphones },
    part5_test: { label: 'RC Part 5 실전', total: 10, unit: 'Tests', color: 'amber', icon: PenSquare },
    part6_test: { label: 'RC Part 6 실전', total: 10, unit: 'Tests', color: 'violet', icon: BookOpen },
    part7_test: { label: 'RC Part 7 실전', total: 10, unit: 'Tests', color: 'cyan', icon: BookOpen },
};

export default function StudentDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [stats, setStats] = useState<Record<string, number>>({});
    const [recentActivity, setRecentActivity] = useState<any[]>([]);
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

    // Target Score State
    const [targetScore, setTargetScore] = useState<number>(850); // Default fallback
    const [isEditingScore, setIsEditingScore] = useState(false);
    const [newTargetScore, setNewTargetScore] = useState('');

    // Assignments State
    const [assignments, setAssignments] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
    const [partScores, setPartScores] = useState<Record<string, number>>({});
    const [currentScore, setCurrentScore] = useState<number>(0);

    useEffect(() => {
        setIsMounted(true);
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }

        try {
            const parsedUser = JSON.parse(userData);

            // Validate userId exists
            if (!parsedUser || !parsedUser.userId) {
                console.warn("Invalid user session: missing userId");
                router.push('/login');
                return;
            }

            setUser(parsedUser);
            fetchStats(parsedUser.userId);
            fetchTargetScore(parsedUser.userId);
            fetchAssignments(parsedUser.className, parsedUser.userId);
            fetchAnalysis(parsedUser.userId);
        } catch (e) {
            console.error("Failed to parse user session", e);
            router.push('/login');
        }
    }, [router]);

    const fetchAnalysis = async (userId: string) => {
        const result = await getWeaknessAnalysis(userId);
        setAnalysis(result);
    };

    const fetchAssignments = async (className: string, userId: string) => {
        try {
            // Fetch recent assignments (Optimization: Should ideally use compound query or separate queries)
            // For now fetching last 20 and filtering
            const q = query(
                collection(db, "Assignments"),
                // where("targetClass", "in", ["all", className]), // 'in' query works if index exists
                orderBy("createdAt", "desc"),
                // limit(20)
            );

            // MATCHING LOGIC PREP: Fetch user's results to define "completedMap"
            const statsQ = query(collection(db, "Manager_Results"), where("studentId", "==", userId));
            const statsSnap = await getDocs(statsQ);

            const doneMap: Record<string, boolean> = {};
            statsSnap.forEach(d => {
                const r = d.data();
                if (r.type && r.detail) {
                    doneMap[`${r.type}_${r.detail}`] = true;
                }
            });
            setCompletedMap(doneMap);

            // Fallback: Fetch all sorted by date and filter client side if index missing
            // But let's try standard fetch 
            const querySnapshot = await getDocs(q);
            const list: any[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                // Filter: All OR Class OR Personal
                if (
                    data.targetClass === 'all' ||
                    data.targetClass === className ||
                    (data.targetStudentId && data.targetStudentId === userId)
                ) {
                    list.push({ id: doc.id, ...data });
                }
            });

            setAssignments(list.slice(0, 4)); // Show recent 4
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };



    // ... (existing imports)

    // Restored functions
    const fetchTargetScore = async (userId: string) => {
        try {
            const profile = await getUserProfile(userId);
            if (profile) {
                if (profile.targetScore) {
                    setTargetScore(profile.targetScore);
                }
                // Sync full profile data to user state so detailed targets are visible
                setUser((prev: any) => ({ ...prev, ...profile }));
            }
        } catch (error) {
            console.error("Failed to load target score", error);
        }
    };

    const handleSaveScore = async () => {
        if (!user || !newTargetScore) return;
        const score = parseInt(newTargetScore);
        if (isNaN(score)) return;

        try {
            await updateTargetScore(user.userId, score);
            setTargetScore(score);
            setIsEditingScore(false);
        } catch (error) {
            console.error("Failed to update score", error);
        }
    };

    const fetchStats = async (userId: string) => {
        try {
            const q = query(collection(db, "Manager_Results"), where("studentId", "==", userId));
            const querySnapshot = await getDocs(q);

            // Aggregation Sets
            const uniqueCounts: Record<string, Set<string>> = {
                voca: new Set(),
                grammar: new Set(),
                part1_shadow: new Set(),
                part1_test: new Set(),
                part2_test: new Set(),
                part3_test: new Set(),
                part4_test: new Set(),
                part5_test: new Set(),
                part6_test: new Set(),
                part7_single: new Set(),
                part7_double: new Set(),
                part7_test: new Set(),
            };

            // Score Aggregation (Total Correct / Count)
            const scoreSums: Record<string, number> = {};
            const scoreCounts: Record<string, number> = {};

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const type = data.type || mapLegacyType(data.unit || "");
                const detail = data.detail || data.unit || "Unknown";

                // 1. Count Completion
                if (uniqueCounts[type]) {
                    uniqueCounts[type].add(detail);
                }

                // 2. Aggregate Scores (Estimate Correct Count)
                // Assuming data.score is percentage or we calculate from incorrectQuestions
                // For now, let's look for 'correctCount' or derive from 'score' (percentage) * 'totalQuestions'
                // Fallback: If score is 0-100, and we know max questions for part...
                // Let's use a standard map for Part Max Questions
                const PART_MAX: Record<string, number> = {
                    part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
                    part5_test: 30, part6_test: 16,
                    part7_test: 54, part7_single: 29, part7_double: 25
                };

                if (typeof data.score === 'number') {
                    let correctCount: number | undefined;

                    // 1. If 'total' field exists, use it to determine if score is raw or percentage
                    if (data.total) {
                        if (data.score <= data.total) {
                            correctCount = data.score; // Raw score
                        } else {
                            correctCount = Math.round((data.score / 100) * data.total); // Percentage
                        }
                    }
                    // 2. Legacy/Fallback Logic using PART_MAX
                    else if (PART_MAX[type]) {
                        // Usually legacy data saved percentage as 'score'
                        correctCount = Math.round((data.score / 100) * PART_MAX[type]);
                    }

                    if (correctCount !== undefined) {
                        scoreSums[type] = (scoreSums[type] || 0) + correctCount;
                        scoreCounts[type] = (scoreCounts[type] || 0) + 1;
                    }
                }
            });

            // Legacy Voca Merge
            const userData = JSON.parse(localStorage.getItem('toeic_user') || '{}');
            if (userData.passedVocaDays) {
                userData.passedVocaDays.forEach((d: string) => uniqueCounts.voca.add(`Day ${d}`));
            }

            // Convert Sets to Counts
            const finalStats: Record<string, number> = {};
            Object.keys(uniqueCounts).forEach(k => {
                finalStats[k] = uniqueCounts[k].size;
            });

            // Calculate Averages
            const finalScores: Record<string, number> = {};
            Object.keys(scoreSums).forEach(k => {
                finalScores[k] = Math.round(scoreSums[k] / scoreCounts[k]);
            });
            // Aggregate Part 7 (Single + Double) -> P7 Total
            const p7S = finalScores['part7_single'] || 0;
            const p7D = finalScores['part7_double'] || 0;
            if (!finalScores['part7_test'] && (p7S || p7D)) {
                finalScores['part7_test'] = p7S + p7D;
            }

            // Calculate Estimated Total Score
            const lcCorrect = (finalScores['part1_test'] || 0) + (finalScores['part2_test'] || 0) + (finalScores['part3_test'] || 0) + (finalScores['part4_test'] || 0);
            const rcCorrect = (finalScores['part5_test'] || 0) + (finalScores['part6_test'] || 0) + (finalScores['part7_test'] || 0);
            const totalCorrect = lcCorrect + rcCorrect;
            const estScore = totalCorrect > 0 ? Math.round((totalCorrect / 200) * 990) : 0;

            setCurrentScore(estScore);
            setPartScores(finalScores);
            setStats(finalStats);
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setLoading(false);
        }
    };

    const mapLegacyType = (unit: string): string => {
        if (unit.includes('Voca')) return 'voca';
        if (unit.includes('Grammar') || unit.includes('Unit')) return 'grammar';
        if (unit.includes('Shadowing')) return 'part1_shadow';
        if (unit.includes('Part2') || unit.includes('LCpart2')) return 'part2_test';
        if (unit.includes('Part5')) return 'part5_test';
        return 'unknown';
    };

    const getHomeworkLink = (type: string, detail: string, id: string) => {
        // Map homework type to URL
        switch (type) {
            case 'level_test': return `/homework/level-test`;
            case 'voca': return `/homework/voca`;
            case 'grammar': {
                // detail might be "Unit 1" or "Unit 1: Noun"
                const match = detail.match(/(\d+)/);
                if (match) {
                    const unitNum = match[1].padStart(2, '0');
                    // Find actual key like Unit_01_Noun
                    const units = [
                        "Unit_00_Structure", "Unit_01_Noun", "Unit_02_Pronoun", "Unit_03_Adjective",
                        "Unit_04_Adverb", "Unit_05_Preposition", "Unit_06_Verb", "Unit_07_To_Infinitive",
                        "Unit_08_Gerund", "Unit_09_Participle", "Unit_10_Adverb_Conjunctions",
                        "Unit_11_Relative_Clauses", "Unit_12_Noun_Clauses"
                    ];
                    const target = units.find(u => u.includes(`Unit_${unitNum}`));
                    return target ? `/homework/part5/${target}` : `/homework/part5`;
                }
                return `/homework/part5`;
            }
            case 'part1_shadow': return `/homework/part1`;
            case 'part1_test': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part1-real/test/${match[1]}` : `/homework/part1-real`;
            }
            case 'part2_test': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part2/${match[1]}` : `/homework/part2`;
            }
            case 'part3_test': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part3/test/${match[1]}` : `/homework/part3`;
            }
            case 'part4_test': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part4/test/${match[1]}` : `/homework/part4`;
            }
            case 'part5_test': {
                // If detail is "Test 1" or similar, extract the number
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part5-real/test/${match[1]}` : `/homework/part5-real`;
            }
            case 'part6_test': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part6/test/${match[1]}` : `/homework/part6`;
            }
            case 'part7_test':
            case 'part7_single': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part7/test/${match[1]}` : `/homework/part7`;
            }
            case 'part7_double': {
                const match = detail.match(/(\d+)/);
                return match ? `/homework/part7/practice?test=${match[1]}` : `/homework/part7-double`;
            }
            case 'mock_test': return `/homework/mock-exam`;
            case 'weakness_review': return `/homework/weakness/${id}`;
            default: return '/';
        }
    };

    const getHomeworkIcon = (type: string = '') => {
        if (!type) return Headphones;
        if (type === 'level_test') return Target;
        if (type === 'mock_test') return PenSquare;
        if (type.includes('voca')) return BookOpen;
        if (type.includes('part1')) return Mic2;
        if (type.includes('part5')) return PenSquare;
        if (type.includes('part7')) return BookOpen;
        if (type === 'weakness_review') return Zap;
        return Headphones;
    }

    if (!isMounted || (loading && !user)) {
        return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;
    }

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20">
            {/* ... (Header remains same) */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-400 hover:text-white">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            메인으로
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">나의 학습방</h2>
                        <p className="text-slate-400 text-sm">개인 맞춤형 학습 성취도 분석 및 과제 관리</p>
                    </div>
                </div>

                {/* Class Info / Rank Badge */}
                {user && (
                    <ClassInfoCard user={user} />
                )}
            </div>

            {/* 1. Today's Homework (Admin Assigned) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-indigo-400 w-5 h-5" />
                    <h3 className="text-lg font-bold text-white">오늘의 과제 (Assignments)</h3>
                    {assignments.length > 0 && <span className="text-xs bg-indigo-500 text-white px-2 py-0.5 rounded-full">{assignments.length} New</span>}
                </div>

                {assignments.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 border border-dashed border-slate-700 rounded-xl">
                        <p className="text-sm">현재 배정된 과제가 없습니다.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {assignments.map((assign) => {
                            const isCompleted = completedMap[`${assign.type}_${assign.detail}`];
                            return (
                                <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id)} className={cn("block h-full transform transition-all duration-200 hover:scale-[1.02]", isCompleted ? "opacity-90" : "hover:shadow-lg hover:shadow-indigo-500/10")}>
                                    <Card className={cn(
                                        "p-4 flex justify-between items-center h-full border transition-all relative overflow-hidden",
                                        isCompleted
                                            ? "bg-slate-900/40 border-emerald-500/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.05)]"
                                            : "bg-slate-800 border-indigo-500/30 shadow-lg"
                                    )}>
                                        {isCompleted && <div className="absolute inset-0 bg-emerald-500/5 z-0" />}

                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className={cn(
                                                "w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner",
                                                isCompleted
                                                    ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20"
                                                    : "bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20"
                                            )}>
                                                {(() => {
                                                    const Icon = getHomeworkIcon(assign.type);
                                                    return <Icon className="w-6 h-6" />;
                                                })()}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <Badge variant="outline" className={cn("text-[10px] h-5 px-1.5 font-bold border-0", isCompleted ? "bg-emerald-500/10 text-emerald-400" : "bg-indigo-500/10 text-indigo-400")}>
                                                        {assign.typeLabel || assign.type}
                                                    </Badge>
                                                    {isCompleted && <span className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">Completed</span>}
                                                </div>
                                                <p className={cn("font-black text-lg", isCompleted ? "text-slate-400 line-through decoration-slate-600" : "text-white")}>
                                                    {assign.detail}
                                                </p>
                                                {!isCompleted && (
                                                    <p className="text-slate-500 text-xs mt-0.5 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" />
                                                        {assign.createdAt?.toDate ? new Date(assign.createdAt.toDate()).toLocaleDateString() : 'Today'}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="relative z-10">
                                            {isCompleted ? (
                                                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                                </div>
                                            ) : (
                                                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 font-bold h-9 px-4">
                                                    Start
                                                </Button>
                                            )}
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-3 bg-slate-900 border-rose-500/30 p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-48 h-48 bg-rose-500/5 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="text-rose-400 w-5 h-5" />
                                <h3 className="text-lg font-bold text-white">AI 취약점 분석 (Gap Analysis)</h3>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.push('/weakness/dashboard')}
                                className={cn(
                                    "text-xs gap-1.5 font-bold transition-all duration-500 rounded-full px-4 h-9 shadow-lg",
                                    Object.values(completedMap).filter(v => v).length > 0
                                        ? "bg-indigo-600 text-white border-indigo-400 hover:bg-indigo-500 shadow-indigo-600/40 animate-pulse"
                                        : "bg-slate-800 text-indigo-400 border-indigo-500/30 hover:bg-slate-700 hover:text-indigo-300"
                                )}
                            >
                                <BarChart2 className="w-4 h-4" />
                                취약점 상세 리포트 보기
                                {Object.values(completedMap).filter(v => v).length > 0 && (
                                    <Badge className="ml-1 bg-white text-indigo-600 hover:bg-white px-1.5 py-0 h-4 text-[10px] font-black border-none animate-bounce">
                                        UP!
                                    </Badge>
                                )}
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* 1. Vocabulary Check (Always visible) */}
                            {(() => {
                                const vocaCount = stats['voca'] || 0;
                                const vocaTarget = 15;
                                return (
                                    <div className={cn("border rounded-lg p-4", vocaCount < vocaTarget ? "bg-rose-500/10 border-rose-500/20" : "bg-emerald-500/10 border-emerald-500/20")}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className={cn("font-bold text-sm", vocaCount < vocaTarget ? "text-rose-400" : "text-emerald-400")}>
                                                어휘력 (Vocabulary)
                                            </span>
                                            <span className="text-xs text-slate-400">{vocaCount} / {vocaTarget} sets</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-2 overflow-hidden">
                                            <div className={cn("h-full rounded-full", vocaCount < vocaTarget ? "bg-rose-500" : "bg-emerald-500")} style={{ width: `${Math.min(100, (vocaCount / vocaTarget) * 100)}%` }}></div>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {vocaCount < vocaTarget
                                                ? "목표 달성을 위해 어휘 학습이 더 필요합니다."
                                                : "어휘 학습량이 충분합니다. 꾸준히 유지하세요!"}
                                        </p>
                                    </div>
                                );
                            })()}

                            {/* 2. Top Weakness Tag Analysis (Dynamic) */}
                            {(() => {
                                if (!analysis?.topWeakness) {
                                    return (
                                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-amber-400 font-bold text-sm">약점 태그 분석 중...</span>
                                                <span className="text-xs text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">-</span>
                                            </div>
                                            <p className="text-xs text-slate-400 leading-relaxed">
                                                Part 5 실전 테스트를 완료하면 약점 태그가 표시됩니다.
                                            </p>
                                        </div>
                                    );
                                }

                                const { label, percentage, message, code } = analysis.topWeakness;

                                return (
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-amber-400 font-bold text-sm">약점: {label}</span>
                                            <span className="text-xs text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">
                                                오답률 {percentage}%
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            {message}
                                        </p>
                                    </div>
                                );
                            })()}

                            {/* 3. LC / Speed Check */}
                            <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-indigo-400 font-bold text-sm">LC 청취 습관</span>
                                    <Badge variant="outline" className={cn(
                                        "text-[10px]",
                                        analysis?.lcHabit.status === 'Excellent' ? "text-emerald-400 border-emerald-500/50" :
                                            analysis?.lcHabit.status === 'Needs Improvement' ? "text-rose-400 border-rose-500/50" :
                                                "text-indigo-400 border-indigo-500/50"
                                    )}>{analysis?.lcHabit.status || 'Loading...'}</Badge>
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    {analysis?.lcHabit.message || "LC 학습 이력을 분석하고 있습니다."}
                                </p>
                            </div>
                        </div>

                        {/* 4. Action Button */}
                        {(() => {
                            // Find the most recent 'weakness_review' assignment
                            const weaknessAssignment = assignments.find(a => a.type === 'weakness_review');
                            const isCompleted = weaknessAssignment ? completedMap[`weakness_review_${weaknessAssignment.detail}`] : false;

                            return (
                                <div className="mt-4 pt-4 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <p className="text-[10px] sm:text-xs text-slate-500 max-w-[200px] sm:max-w-none">
                                        * 매주 금요일, 이번주 학습 데이터를 기반으로 새로운 약점 과제가 생성됩니다.
                                    </p>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <Button
                                            variant="ghost"
                                            className={cn(
                                                "text-xs h-9 flex-1 sm:flex-initial transition-all font-bold px-4",
                                                weaknessAssignment && !isCompleted
                                                    ? "bg-rose-500 text-white hover:bg-rose-600 shadow-md shadow-rose-500/20 animate-pulse"
                                                    : "text-rose-400 border border-rose-500/20 hover:bg-rose-500/10"
                                            )}
                                            onClick={() => {
                                                if (weaknessAssignment) {
                                                    router.push(`/homework/weakness/${weaknessAssignment.id}`);
                                                } else {
                                                    // Direct drill if no assignment
                                                    if (analysis?.topWeakness?.code && analysis.topWeakness.code !== 'NONE') {
                                                        router.push(`/weakness/review?tag=${analysis.topWeakness.code}&part=Part5`);
                                                    } else {
                                                        alert("아직 생성된 약점 보완 과제가 없습니다. 먼저 실전 테스트를 1회 이상 완료해주세요.");
                                                    }
                                                }
                                            }}
                                        >
                                            <Zap className="w-3 h-3 mr-1" />
                                            {weaknessAssignment
                                                ? (isCompleted ? "약점 과제 완료 (Review)" : "약점 보완 문제 풀기 (Start)")
                                                : "AI 맞춤 드릴 시작"
                                            }
                                        </Button>
                                    </div>
                                </div>
                            );
                        })()}
                    </div>
                </Card>
            </div>

            {/* 3. Score & Target Setting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Detailed Target Setting */}
                {user && (
                    <TargetSettingSection
                        user={user}
                        currentStats={{
                            p1: partScores['part1_test'] || 0,
                            p2: partScores['part2_test'] || 0,
                            p3: partScores['part3_test'] || 0,
                            p4: partScores['part4_test'] || 0,
                            p5: partScores['part5_test'] || 0,
                            p6: partScores['part6_test'] || 0,
                            p7_single: partScores['part7_single'] || 0,
                            p7_double: partScores['part7_double'] || 0
                        }}
                        onUpdate={async (newScore) => {
                            if (newScore) setTargetScore(newScore);
                            if (user) {
                                // Refresh full profile to update targets
                                const updatedProfile = await getUserProfile(user.userId);
                                if (updatedProfile) {
                                    setUser({ ...user, ...updatedProfile });
                                }
                            }
                        }}
                    />
                )}

                {/* Score Overview (Simplified - just showing progress now, setting is moved) */}
                <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="text-indigo-400 w-5 h-5" />
                            <h3 className="text-lg font-bold text-white">나의 목표 달성도</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                <div className="text-3xl font-black text-white">{targetScore}<span className="text-base text-slate-500 ml-1">점</span></div>
                                <div className="mt-2 text-xs text-slate-500">목표까지 <span className="text-indigo-400 font-bold">+{Math.max(0, targetScore - currentScore)}점</span> 남았습니다.</div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1">AI PREDICTION</p>
                                <div className="text-3xl font-black text-indigo-400">{currentScore}<span className="text-base text-indigo-500/50 ml-1">점</span></div>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">최근 학습 결과 반영</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>진행률</span>
                                <span>{Math.round((currentScore / targetScore) * 100)}%</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
                                    style={{ width: `${Math.min(100, Math.round((currentScore / targetScore) * 100))}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>



            {/* 3. Overall Statistics (Moved from Main) */}
            <div>
                <h3 className="text-xl font-bold text-slate-400 mb-4">전체 학습 현황</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Dynamic Progress Cards relying on Config */}
                    {Object.entries(HOMEWORK_CONFIG).map(([key, config]) => {
                        // Only show if it has progress OR is a high priority item (Voca/Grammar)
                        // Actually user wants "automatically created when they do a task".
                        // Let's show all for now to look populated, or filter.
                        // "voca", "grammar" should always be there.
                        const count = stats[key] || 0;
                        if (count === 0 && !['voca', 'grammar', 'part5_test'].includes(key)) return null;

                        return (
                            <ProgressCard
                                key={key}
                                title={config.label}
                                value={`${(count / config.total * 100).toFixed(0)}%`}
                                subValue={`${count}/${config.total} ${config.unit}`}
                                current={count}
                                total={config.total}
                                color={config.color as any}
                                icon={config.icon}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
