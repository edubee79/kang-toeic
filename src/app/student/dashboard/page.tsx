'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { Mic2, Headphones, BookOpen, PenSquare, Target, Clock, ArrowLeft, Calendar, BarChart2, TrendingUp, AlertTriangle, Zap, CheckCircle2 } from "lucide-react";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { getUserProfile } from '@/services/userService';
import { getWeaknessAnalysis, AnalysisResult } from '@/services/analysisService';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { TargetSettingSection } from '@/components/dashboard/TargetSettingSection';
import { ClassInfoCard } from '@/components/dashboard/ClassInfoCard';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { NotificationSetter } from '@/components/dashboard/NotificationSetter';

const HOMEWORK_CONFIG: Record<string, { label: string, total: number, unit: string, color: string, icon: any }> = {
    voca: { label: '단어 암기 (Voca)', total: 30, unit: 'Days', color: 'emerald', icon: BookOpen },
    grammar: { label: '문법 (Grammar)', total: 13, unit: 'Units', color: 'blue', icon: PenSquare },
    part1_shadow: { label: 'Part 1 쉐도잉', total: 5, unit: 'Sets', color: 'indigo', icon: Mic2 },
    part1_test: { label: 'Part 1 실전', total: 10, unit: 'Tests', color: 'blue', icon: Headphones },
    part2_test: { label: 'LC Part 2 실전', total: 10, unit: 'Tests', color: 'rose', icon: Headphones },
    part3_test: { label: 'LC Part 3 실전', total: 10, unit: 'Tests', color: 'orange', icon: Headphones },
    part4_test: { label: 'LC Part 4 실전', total: 10, unit: 'Tests', color: 'pink', icon: Headphones },
    part5_test: { label: 'RC Part 5 실전', total: 10, unit: 'Tests', color: 'amber', icon: PenSquare },
    part6_test: { label: 'RC Part 6 실전', total: 10, unit: 'Tests', color: 'violet', icon: BookOpen },
    part7_single: { label: 'RC Part 7 싱글', total: 10, unit: 'Tests', color: 'cyan', icon: BookOpen },
    part7_test: { label: 'RC Part 7 전체', total: 10, unit: 'Tests', color: 'sky', icon: BookOpen },
    part7_double: { label: 'RC Part 7 다중', total: 10, unit: 'Tests', color: 'teal', icon: BookOpen },
    mock_test: { label: '전체 모의고사', total: 5, unit: 'Exams', color: 'slate', icon: Target },
};

export default function StudentDashboard() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [stats, setStats] = useState<Record<string, number>>({});
    const [assignments, setAssignments] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, any>>({});
    const [partScores, setPartScores] = useState<Record<string, number>>({});
    const [latestScores, setLatestScores] = useState<Record<string, number>>({});
    const [currentScore, setCurrentScore] = useState<number>(0);
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
    const [targetScore, setTargetScore] = useState<number>(850);
    const [weaknessReport, setWeaknessReport] = useState<WeaknessReport | null>(null);

    // Target editing states
    const [isEditingTarget, setIsEditingTarget] = useState(false);
    const [editTotalScore, setEditTotalScore] = useState(850);
    const [editTargetLC, setEditTargetLC] = useState(450);
    const [editTargetRC, setEditTargetRC] = useState(400);
    const [editPartTargets, setEditPartTargets] = useState({
        p1_goal: 0, p2_goal: 0, p3_goal: 0, p4_goal: 0,
        p5_goal: 0, p6_goal: 0, p7s_goal: 0, p7d_goal: 0
    });
    const [currentStats, setCurrentStats] = useState({
        p1_cur: 0, p2_cur: 0, p3_cur: 0, p4_cur: 0,
        p5_cur: 0, p6_cur: 0, p7s_cur: 0, p7d_cur: 0, p7f_cur: 0
    });

    useEffect(() => {
        setIsMounted(true);
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }

        try {
            const parsedUser = JSON.parse(userData);
            if (!parsedUser || !parsedUser.userId) {
                router.push('/login');
                return;
            }

            setUser(parsedUser);
            fetchData(parsedUser.userId, parsedUser.className);
        } catch (e) {
            router.push('/login');
        }
    }, [router]);

    const fetchData = async (userId: string, className: string) => {
        setLoading(true);
        try {
            await Promise.all([
                fetchStats(userId),
                fetchTargetScore(userId),
                fetchAssignments(className, userId),
                fetchAnalysis(userId),
                fetchWeaknessReport(userId)
            ]);
        } finally {
            setLoading(false);
        }
    };

    const fetchWeaknessReport = async (userId: string) => {
        const report = await WeaknessService.analyzeUserWeakness(userId);
        setWeaknessReport(report);

        // ✅ Synchronize with Weakness Dashboard's manual calculation logic
        if (report && report.targetStats) {
            // 1. Manually sum only the parts visible in the UI (matches Weakness Dashboard)
            const lcParts = ['p1', 'p2', 'p3', 'p4'];
            const rcParts = ['p5', 'p6', 'p7_single', 'p7_double'];

            const lcCorrect = lcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);
            const rcCorrect = rcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);

            // 2. Apply the TOEIC conversion formula
            const lcScore = lcCorrect > 0 ? (lcCorrect * 5) + 10 : 0;
            const rcScore = rcCorrect > 0 ? (rcCorrect * 5) - 10 : 0;

            // 3. Set the total score (matches the 165 or similar manual sum)
            setCurrentScore(Math.max(0, lcScore) + Math.max(0, rcScore));

            // Update individual part stats for the table
            setCurrentStats({
                p1_cur: report.targetStats.p1?.latest || 0,
                p2_cur: report.targetStats.p2?.latest || 0,
                p3_cur: report.targetStats.p3?.latest || 0,
                p4_cur: report.targetStats.p4?.latest || 0,
                p5_cur: report.targetStats.p5?.latest || 0,
                p6_cur: report.targetStats.p6?.latest || 0,
                p7s_cur: report.targetStats.p7s?.latest || 0,
                p7d_cur: report.targetStats.p7d?.latest || 0,
                p7f_cur: report.targetStats.p7f?.latest || 0
            });
        }
    };

    // Target editing functions
    const MAX_Q = {
        p1_goal: 6, p2_goal: 25, p3_goal: 39, p4_goal: 30,
        p5_goal: 30, p6_goal: 16, p7s_goal: 29, p7d_goal: 25
    };

    const handleEditTarget = () => {
        if (user) {
            setEditTotalScore(user.targetScore || 850);
            setEditTargetLC(user.targetLC || 450);
            setEditTargetRC(user.targetRC || 400);

            // 데이터 정규화: 기존 p1 형식을 p1_goal 형식으로 변환하여 불러오기 (내일 수업 대비)
            const pts = user.partTargets || {};
            setEditPartTargets({
                p1_goal: pts.p1_goal || pts.p1 || 0,
                p2_goal: pts.p2_goal || pts.p2 || 0,
                p3_goal: pts.p3_goal || pts.p3 || 0,
                p4_goal: pts.p4_goal || pts.p4 || 0,
                p5_goal: pts.p5_goal || pts.p5 || 0,
                p6_goal: pts.p6_goal || pts.p6 || 0,
                p7s_goal: pts.p7s_goal || pts.p7_single || 0,
                p7d_goal: pts.p7d_goal || pts.p7_double || 0
            });
            setIsEditingTarget(true);
        }
    };

    const handleSaveTarget = async () => {
        if (!user) return;
        try {
            const userRef = doc(db, 'Winter_Users', user.userId);
            await updateDoc(userRef, {
                targetScore: editTotalScore,
                targetLC: editTargetLC,
                targetRC: editTargetRC,
                partTargets: editPartTargets
            });
            setIsEditingTarget(false);
            await fetchData(user.userId, user.className);
        } catch (error) {
            console.error('Failed to save targets', error);
        }
    };

    const handleAutoAllocate = () => {
        // 0. Synchronization: Ensure LC/RC add up to Total Score
        let lc = Number(editTargetLC) || 0;
        let rc = Number(editTargetRC) || 0;
        const total = Number(editTotalScore) || 0;

        if (lc + rc !== total || isNaN(lc) || isNaN(rc)) {
            // If out of sync, distribute total score (roughly 52/48 split for LC/RC as typical strategy)
            lc = Math.round((total * 0.52) / 5) * 5;
            rc = total - lc;

            // Re-cap if they exceed 495 (TOEIC max per section)
            if (lc > 495) {
                lc = 495;
                rc = total - 495;
            } else if (rc > 495) {
                rc = 495;
                lc = total - 495;
            }

            setEditTargetLC(lc);
            setEditTargetRC(rc);
        }

        // 1. Calculate required question counts from total scores
        // Logic: Score to Questions (Simplified inverse of calculator)
        const requiredLC = Math.max(0, Math.min(100, Math.ceil((lc - 10) / 5)));
        const requiredRC = Math.max(0, Math.min(100, Math.ceil((rc + 10) / 5)));

        /**
         * Strategic Distribution Logic: 
         * - Proportional to Max Questions
         * - +10% Weighted emphasis on 'Scoring Parts' (P1, P2, P5, P6)
         */
        const distributeStrategically = (budget: number, parts: Array<{ key: keyof typeof MAX_Q; isPriority: boolean }>) => {
            const result: any = {};
            if (budget <= 0) {
                parts.forEach(p => result[p.key] = 0);
                return result;
            }

            // Calculate denominator: Sum of (MaxQ * Multiplier)
            const sumWeightedMax = parts.reduce((sum, p) => {
                const multiplier = p.isPriority ? 1.1 : 0.95;
                return sum + (MAX_Q[p.key] * multiplier);
            }, 0);

            // Calculate Base Achievement Rate (A)
            const A = budget / sumWeightedMax;

            let remainingBudget = budget;

            // First pass: Assign targets capped at MAX_Q
            parts.forEach(p => {
                const multiplier = p.isPriority ? 1.1 : 0.95;
                let target = Math.round(MAX_Q[p.key] * A * multiplier);
                target = Math.max(0, Math.min(MAX_Q[p.key], target));
                result[p.key] = target;
                remainingBudget -= target;
            });

            // Second pass: Distribute any remaining due to caps or rounding
            if (remainingBudget !== 0) {
                // Sort by priority for the remainder
                const sortedParts = [...parts].sort((a, b) => (b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0));
                for (const p of sortedParts) {
                    const room = remainingBudget > 0 ? (MAX_Q[p.key] - result[p.key]) : result[p.key];
                    if (room > 0) {
                        const add = remainingBudget > 0 ? Math.min(room, remainingBudget) : -Math.min(room, Math.abs(remainingBudget));
                        result[p.key] += add;
                        remainingBudget -= add;
                    }
                    if (remainingBudget === 0) break;
                }
            }

            return result;
        };

        const lcParts = [
            { key: 'p1_goal' as const, isPriority: true },
            { key: 'p2_goal' as const, isPriority: true },
            { key: 'p3_goal' as const, isPriority: false },
            { key: 'p4_goal' as const, isPriority: false }
        ];

        const rcParts = [
            { key: 'p5_goal' as const, isPriority: true },
            { key: 'p6_goal' as const, isPriority: true },
            { key: 'p7s_goal' as const, isPriority: false },
            { key: 'p7d_goal' as const, isPriority: false }
        ];

        const lcResult = distributeStrategically(requiredLC, lcParts);
        const rcResult = distributeStrategically(requiredRC, rcParts);

        setEditPartTargets({
            p1_goal: lcResult.p1_goal || 0, p2_goal: lcResult.p2_goal || 0, p3_goal: lcResult.p3_goal || 0, p4_goal: lcResult.p4_goal || 0,
            p5_goal: rcResult.p5_goal || 0, p6_goal: rcResult.p6_goal || 0,
            p7s_goal: rcResult.p7s_goal || 0, p7d_goal: rcResult.p7d_goal || 0
        });
    };

    const fetchAnalysis = async (userId: string) => {
        const result = await getWeaknessAnalysis(userId);
        setAnalysis(result);
    };

    const fetchTargetScore = async (userId: string) => {
        const profile = await getUserProfile(userId);
        if (profile) {
            if (profile.targetScore) setTargetScore(profile.targetScore);
            setUser((prev: any) => ({ ...prev, ...profile }));
        }
    };

    const fetchAssignments = async (className: string, userId: string) => {
        try {
            const q = query(collection(db, "Assignments"), orderBy("createdAt", "desc"));
            const statsQ = query(collection(db, "Manager_Results"), where("studentId", "==", userId));

            const [assignSnap, statsSnap] = await Promise.all([getDocs(q), getDocs(statsQ)]);

            const doneMap: Record<string, any> = {};
            statsSnap.forEach(d => {
                const r = d.data();
                if (r.type && r.detail) {
                    doneMap[`${r.type}_${r.detail}`] = {
                        isCompleted: true,
                        score: r.score,
                        total: r.total,
                        timestamp: r.timestamp
                    };
                }
            });
            setCompletedMap(doneMap);

            const list: any[] = [];
            assignSnap.forEach((doc) => {
                const data = doc.data();
                if (data.targetClass === 'all' || data.targetClass === className || data.targetStudentId === userId) {
                    list.push({ id: doc.id, ...data });
                }
            });
            setAssignments(list);
        } catch (error) {
            console.error("Error assignments:", error);
        }
    };

    const fetchStats = async (userId: string) => {
        try {
            const q = query(collection(db, "Manager_Results"), where("studentId", "==", userId));
            const querySnapshot = await getDocs(q);

            const uniqueCounts: Record<string, Set<string>> = {
                voca: new Set(), grammar: new Set(), part1_shadow: new Set(),
                part1_test: new Set(), part2_test: new Set(), part3_test: new Set(), part4_test: new Set(),
                part5_test: new Set(), part6_test: new Set(), part7_single: new Set(), part7_double: new Set(), part7_test: new Set()
            };

            const scoreSums: Record<string, number> = {};
            const scoreCounts: Record<string, number> = {};
            const latestScore: Record<string, number> = {};

            const PART_MAX: Record<string, number> = {
                part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
                part5_test: 30, part6_test: 16, part7_test: 54, part7_single: 29, part7_double: 25
            };

            // Order query by createdAt desc if possible, or handle in code
            const docs = querySnapshot.docs.sort((a, b) => {
                const tA = a.data().createdAt?.toMillis() || 0;
                const tB = b.data().createdAt?.toMillis() || 0;
                return tB - tA; // Latest first
            });

            docs.forEach((doc) => {
                const data = doc.data();
                const type = data.type || "unknown";
                const detail = data.detail || data.unit || "Unknown";

                if (uniqueCounts[type]) uniqueCounts[type].add(detail);

                if (typeof data.score === 'number') {
                    let correct = 0;
                    if (data.total) {
                        correct = data.score <= data.total ? data.score : Math.round((data.score / 100) * data.total);
                    } else if (PART_MAX[type]) {
                        correct = Math.round((data.score / 100) * PART_MAX[type]);
                    }

                    scoreSums[type] = (scoreSums[type] || 0) + correct;
                    scoreCounts[type] = (scoreCounts[type] || 0) + 1;
                    if (latestScore[type] === undefined) latestScore[type] = correct;
                }
            });

            const finalStats: Record<string, number> = {};
            Object.keys(uniqueCounts).forEach(k => finalStats[k] = uniqueCounts[k].size);

            const finalScores: Record<string, number> = {};
            Object.keys(scoreSums).forEach(k => finalScores[k] = Math.round(scoreSums[k] / scoreCounts[k]));

            setPartScores(finalScores);
            setLatestScores(latestScore);
            setStats(finalStats);

            // Note: currentScore is now calculated from weaknessReport in fetchWeaknessReport for consistency
        } catch (error) {
            console.error("Error stats:", error);
        }
    };

    const getHomeworkLink = (type: string, detail: string, id: string) => {
        const testNum = detail.match(/\d+/)?.[0] || '1';
        switch (type) {
            case 'voca': return `/homework/voca`;
            case 'grammar': return `/homework/part5`;
            case 'part1_test': return `/homework/part1-real/test/${testNum}`;
            case 'part1_shadow': return `/homework/part1/${testNum}`;
            case 'part2_test': return `/homework/part2/${testNum}`;
            case 'part3_test': return `/homework/part3/test/${testNum}`;
            case 'part4_test': return `/homework/part4/test/${testNum}`;
            case 'part5_test': return `/homework/part5-real/test/${testNum}`;
            case 'part6_test': return `/homework/part6/test/${testNum}`;
            case 'part7_test':
            case 'part7_single':
                return `/homework/part7/test/${testNum}`;
            case 'part7_double': return `/homework/part7-double`;
            case 'weakness_review': return `/homework/weakness/${id}`;
            case 'level_test': {
                if (detail.includes('레벨테스트 1')) return `/mock-test/half/9a`;
                if (detail.includes('레벨테스트 2')) return `/mock-test/half/9b`;
                return `/mock-test/half/${detail.toLowerCase()}`;
            }
            case 'mock_test': {
                if (detail.includes('모의고사 1회')) return `/mock-test/full/9`;
                if (detail.includes('모의고사 2회')) return `/mock-test/full/10`;
                if (detail.includes('모의고사 3회')) return `/mock-test/full/11`;
                if (detail.includes('모의고사 4회')) return `/mock-test/full/12`;
                return `/mock-test/full/${testNum}`;
            }
            default: return '/';
        }
    };

    const getHomeworkIcon = (type: string) => {
        if (type.includes('voca') || type === 'grammar') return BookOpen;
        if (type.includes('part1')) return Mic2;
        if (type.includes('part5') || type.includes('part6') || type.includes('part7')) return PenSquare;
        if (type === 'level_test' || type === 'mock_test') return Target;
        return Headphones;
    };

    if (!isMounted || (loading && !user)) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/"><Button variant="ghost" className="text-slate-400 hover:text-white px-2 md:px-4"><ArrowLeft className="w-5 h-5 md:mr-2" /><span className="hidden md:inline">메인으로</span></Button></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">나의 학습방</h2>
                        <p className="text-slate-400 text-sm">개인 맞춤형 학습 성취도 분석 및 과제 관리</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 self-end md:self-auto">
                    {user?.userId && <NotificationSetter userId={user.userId} />}
                    {user && <ClassInfoCard user={user} />}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-indigo-400 w-5 h-5" /><h3 className="text-lg font-bold text-white">오늘의 과제 (Assignments)</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(() => {
                        const pending = assignments.filter(a => !completedMap[`${a.type}_${a.detail}`]).slice(0, 4);
                        if (pending.length === 0) {
                            return (
                                <div className="col-span-full py-10 flex flex-col items-center justify-center bg-slate-800/20 rounded-xl border border-dashed border-slate-700">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3 opacity-50" />
                                    <p className="text-slate-400 font-bold">오늘 지정된 모든 과제를 완료했습니다! 🎉</p>
                                    <p className="text-slate-500 text-xs mt-1">새로운 과제가 배정될 때까지 기초 학습에 집중하세요.</p>
                                </div>
                            );
                        }
                        return pending.map((assign) => (
                            <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id)} className="block h-full transform transition-all hover:scale-[1.02]">
                                <Card className="p-4 flex justify-between items-center h-full border transition-all relative overflow-hidden bg-slate-800 border-indigo-500/30 shadow-lg">
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-indigo-500/10 text-indigo-400">
                                            {(() => { const Icon = getHomeworkIcon(assign.type); return <Icon className="w-6 h-6" />; })()}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <Badge variant="outline" className="text-[10px] h-5 px-1.5 font-bold border-0 bg-indigo-500/10 text-indigo-400">{assign.typeLabel || assign.type}</Badge>
                                            </div>
                                            <p className="font-black text-lg text-white">{assign.detail}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 shadow-lg font-bold">Start</Button>
                                    </div>
                                </Card>
                            </Link>
                        ));
                    })()}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-3 bg-slate-900 border-rose-500/30 p-6 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                        <div className="flex items-center gap-2"><AlertTriangle className="text-rose-400 w-5 h-5" /><h3 className="text-lg font-bold text-white">AI 약점 정밀 분석 및 솔루션 (Diagnosis & Solution)</h3></div>
                        <Button variant="outline" size="sm" onClick={() => router.push('/weakness/dashboard')} className="bg-slate-800 text-white border-indigo-500/30 hover:bg-slate-700 hover:text-indigo-300 font-bold px-4 h-9">
                            <BarChart2 className="w-4 h-4 mr-1.5" />분석 리포트 & 트레이닝 이동
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className={cn("border rounded-lg p-4", (stats['voca'] || 0) < 15 ? "bg-rose-500/10 border-rose-500/20" : "bg-emerald-500/10 border-emerald-500/20")}>
                            <div className="flex justify-between items-center mb-2"><span className={cn("font-bold text-sm", (stats['voca'] || 0) < 15 ? "text-rose-400" : "text-emerald-400")}>어휘력 (Vocabulary)</span><span className="text-xs text-slate-400">{stats['voca'] || 0} / 15 days</span></div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2"><div className={cn("h-full rounded-full", (stats['voca'] || 0) < 15 ? "bg-rose-500" : "bg-emerald-500")} style={{ width: `${Math.min(100, ((stats['voca'] || 0) / 15) * 100)}%` }}></div></div>
                            <p className="text-xs text-slate-400 leading-relaxed">{analysis?.vocaStatus?.message || "어휘 학습 이력을 분석하고 있습니다."}</p>
                        </div>
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2"><span className="text-amber-400 font-bold text-sm">Part 5 분석: {analysis?.topWeakness?.label || '분석 중...'}</span><span className="text-xs text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">{analysis?.topWeakness?.percentage || 0}%</span></div>
                            <p className="text-xs text-slate-400 leading-relaxed">{analysis?.topWeakness?.message || "테스트 데이터가 충분하지 않습니다."}</p>
                        </div>
                        <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2"><span className="text-indigo-400 font-bold text-sm">LC 청취 습관</span><Badge variant="outline" className="text-[10px] text-indigo-400 border-indigo-500/50">{analysis?.lcHabit?.status || '분석 중'}</Badge></div>
                            <p className="text-xs text-slate-400 leading-relaxed">{analysis?.lcHabit?.message || "LC 학습 이력을 분석하고 있습니다."}</p>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Detailed Target Card - From Weakness Dashboard */}
                {weaknessReport && (
                    <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden text-inter">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            {!isEditingTarget ? (
                                <>
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Target className="text-indigo-400 w-5 h-5" />
                                                <h3 className="text-lg font-bold text-white">나의 목표 상세 현황</h3>
                                            </div>
                                            <p className="text-slate-400 text-sm">
                                                목표: <span className="text-white font-bold">{weaknessReport.targetScore}점</span>
                                                (LC {weaknessReport.targetLCScore} / RC {weaknessReport.targetRCScore})
                                            </p>
                                        </div>
                                        <Button
                                            onClick={handleEditTarget}
                                            variant="outline"
                                            className="h-8 text-xs border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                                        >
                                            목표 수정하기
                                        </Button>
                                    </div>

                                    {/* Comparison Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* LC Column */}
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase border-b border-blue-500/20 pb-1">Listening (LC)</h4>
                                            {[
                                                { k: 'p1', label: 'P1' },
                                                { k: 'p2', label: 'P2' },
                                                { k: 'p3', label: 'P3' },
                                                { k: 'p4', label: 'P4' }
                                            ].map(({ k, label }) => {
                                                const partStats = weaknessReport.targetStats[k] || { target: 0, average: 0, latest: 0 };
                                                const goal = partStats.target;
                                                const current = partStats.average;
                                                const latest = partStats.latest;
                                                const gap = latest - goal;

                                                return (
                                                    <div key={k} className="flex items-center text-sm gap-2 font-inter">
                                                        <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{label}</span>
                                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                                <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}개</span>
                                                            </div>
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">평균</span>
                                                                <span className="text-white font-bold text-sm tracking-tight">{current}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">최근</span>
                                                                <span className={cn("font-bold text-sm tracking-tight", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                            </div>
                                                        </div>
                                                        <span className={cn("text-[11px] w-10 text-right font-black flex-shrink-0 font-inter", gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                                            {gap !== 0 ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* RC Column */}
                                        <div className="space-y-3">
                                            <h4 className="text-xs font-bold text-indigo-400 mb-2 uppercase border-b border-indigo-500/20 pb-1">Reading (RC)</h4>
                                            {[
                                                { k: 'p5', label: 'P5' },
                                                { k: 'p6', label: 'P6' },
                                                { k: 'p7_single', label: 'P7 S' },
                                                { k: 'p7_double', label: 'P7 D' }
                                            ].map(({ k, label }) => {
                                                const partStats = weaknessReport.targetStats[k] || { target: 0, average: 0, latest: 0 };
                                                const goal = partStats.target;
                                                const current = partStats.average;
                                                const latest = partStats.latest;
                                                const gap = latest - goal;

                                                return (
                                                    <div key={k} className="flex items-center text-sm gap-2 font-inter">
                                                        <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{label}</span>
                                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                                <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}개</span>
                                                            </div>
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">평균</span>
                                                                <span className="text-white font-bold text-sm tracking-tight">{current}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">최근</span>
                                                                <span className={cn("font-bold text-sm tracking-tight", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                            </div>
                                                        </div>
                                                        <span className={cn("text-[11px] w-10 text-right font-black flex-shrink-0 font-inter", gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                                            {gap !== 0 ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-white">목표 점수 수정</h3>
                                        <div className="flex gap-2">
                                            <Button onClick={() => setIsEditingTarget(false)} variant="outline" size="sm">취소</Button>
                                            <Button onClick={handleSaveTarget} size="sm" className="bg-indigo-600">저장</Button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">총점</label>
                                            <Input type="number" value={editTotalScore} onChange={(e) => setEditTotalScore(Number(e.target.value) || 0)} className="bg-slate-800 border-slate-700" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">LC</label>
                                            <Input type="number" value={editTargetLC} onChange={(e) => setEditTargetLC(Number(e.target.value) || 0)} className="bg-slate-800 border-slate-700" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">RC</label>
                                            <Input type="number" value={editTargetRC} onChange={(e) => setEditTargetRC(Number(e.target.value) || 0)} className="bg-slate-800 border-slate-700" />
                                        </div>
                                    </div>
                                    <Button onClick={handleAutoAllocate} variant="outline" size="sm" className="w-full"><Zap className="w-4 h-4 mr-2" />AI 자동 배분</Button>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {Object.keys(MAX_Q).map((part) => {
                                            const labelMap: Record<string, string> = {
                                                p1_goal: 'P1', p2_goal: 'P2', p3_goal: 'P3', p4_goal: 'P4',
                                                p5_goal: 'P5', p6_goal: 'P6', p7s_goal: 'P7 S', p7d_goal: 'P7 D'
                                            };
                                            return (
                                                <div key={part}>
                                                    <label className="text-xs text-slate-400 mb-1 block uppercase font-bold">{labelMap[part] || part}</label>
                                                    <Input type="number" value={editPartTargets[part as keyof typeof MAX_Q]} onChange={(e) => setEditPartTargets(prev => ({ ...prev, [part]: parseInt(e.target.value) || 0 }))} max={MAX_Q[part as keyof typeof MAX_Q]} className="bg-slate-800 border-slate-700 text-sm font-bold" />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Card>
                )}
                <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden font-inter">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                            <Target className="text-indigo-400 w-5 h-5" />
                            <h3 className="text-lg font-bold text-white">나의 목표 달성도</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                <div className="text-3xl font-black text-white">{targetScore}<span className="text-base text-slate-500 ml-1 font-normal">점</span></div>
                                <div className="mt-2 text-xs text-slate-500">목표까지 <span className="text-indigo-400 font-bold">+{Math.max(0, targetScore - currentScore)}점</span> 남았습니다.</div>
                            </div>
                            <div>
                                <p className="text-slate-400 text-xs font-medium mb-1 font-bold">AI PREDICTION</p>
                                <div className="text-3xl font-black text-indigo-400">{currentScore}<span className="text-base text-indigo-500/50 ml-1 font-normal">점</span></div>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                                    <span className="text-emerald-500 font-bold">최근 학습 결과 반영</span>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>진행률</span>
                                <span>{Math.min(100, Math.round((currentScore / targetScore) * 100))}%</span>
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

            <div>
                <h3 className="text-xl font-bold text-slate-400 mb-4">전체 학습 현황</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(HOMEWORK_CONFIG).map(([key, config]) => {
                        const count = stats[key] || 0;
                        if (count === 0 && !['voca', 'grammar', 'part5_test'].includes(key)) return null;
                        return <ProgressCard key={key} title={config.label} value={`${(count / config.total * 100).toFixed(0)}%`} subValue={`${count}/${config.total} ${config.unit}`} current={count} total={config.total} color={config.color as any} icon={config.icon} />;
                    })}
                </div>
            </div>

            {/* Recently Completed Homework Section */}
            {(() => {
                const completed = assignments.filter(a => completedMap[`${a.type}_${a.detail}`]).slice(0, 3);
                if (completed.length === 0) return null;
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                                <h3 className="text-xl font-bold text-white">최근 완료한 숙제 (Recent)</h3>
                            </div>
                            <Link href="/student/history">
                                <Button variant="ghost" className="text-slate-400 hover:text-white text-xs font-bold gap-2">
                                    전체 기록 보기 <ArrowLeft className="w-3 h-3 rotate-180" />
                                </Button>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {completed.map((assign) => {
                                const result = completedMap[`${assign.type}_${assign.detail}`];

                                // Direct lookup from USER DEFINED targets (strictly using pX_goal keys)
                                const targetValue = (() => {
                                    if (!user?.partTargets) return 0;
                                    const lowerType = (assign.type || '').toLowerCase();

                                    // Map to the exact _goal keys used in the target setting UI
                                    let goalKey = '';
                                    if (lowerType.includes('part1') || lowerType.includes('p1')) goalKey = 'p1_goal';
                                    else if (lowerType.includes('part2') || lowerType.includes('p2')) goalKey = 'p2_goal';
                                    else if (lowerType.includes('part3') || lowerType.includes('p3')) goalKey = 'p3_goal';
                                    else if (lowerType.includes('part4') || lowerType.includes('p4')) goalKey = 'p4_goal';
                                    else if (lowerType.includes('part5') || lowerType.includes('p5')) goalKey = 'p5_goal';
                                    else if (lowerType.includes('part6') || lowerType.includes('p6')) goalKey = 'p6_goal';
                                    else if (lowerType.includes('part7') || lowerType.includes('p7')) {
                                        if (lowerType.includes('double') || lowerType.includes('triple') || lowerType.includes('multi')) goalKey = 'p7d_goal';
                                        else goalKey = 'p7s_goal';
                                    }

                                    if (!goalKey) return 0;
                                    const pts = user.partTargets as any;
                                    return pts[goalKey] || 0;
                                })();

                                return (
                                    <Card key={assign.id} className="bg-slate-900/40 border-emerald-500/20 p-5 flex flex-col border transition-all h-full justify-between gap-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 text-emerald-500 shrink-0">
                                                    {(() => { const Icon = getHomeworkIcon(assign.type); return <Icon className="w-5 h-5" />; })()}
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-wider truncate">{assign.typeLabel || assign.type}</span>
                                                        <Badge variant="outline" className="text-[9px] h-4 px-1.5 font-bold border-emerald-500/30 text-emerald-400">SUCCESS</Badge>
                                                    </div>
                                                    <p className="font-black text-white text-lg truncate uppercase">{assign.detail}</p>
                                                </div>
                                            </div>
                                            <Link href={getHomeworkLink(assign.type, assign.detail, assign.id)}>
                                                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-bold gap-1.5 px-3 h-8">
                                                    복습하기 <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                                                </Button>
                                            </Link>
                                        </div>

                                        <div className="flex items-end justify-between bg-slate-800/20 p-3 rounded-xl border border-slate-800/50">
                                            {/* Target Section */}
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] text-slate-500 font-black uppercase tracking-tighter">당신의 목표</span>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-black text-amber-500 leading-none">{targetValue}</span>
                                                    <span className="text-[10px] text-slate-600 font-bold uppercase">Goal</span>
                                                </div>
                                            </div>

                                            {/* VS Divider */}
                                            <div className="h-8 w-px bg-slate-800 hidden md:block" />

                                            {/* Result Section */}
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-[9px] text-slate-500 font-black uppercase tracking-tighter">취득 점수</span>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-black text-emerald-400 leading-none">{result.score || 0}</span>
                                                    <span className="text-xs text-slate-600 font-bold">/ {result.total || '-'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                );
            })()}
        </div>
    );
}
