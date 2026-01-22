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
    const [assignments, setAssignments] = useState<any[]>([]);
    const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
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
        p1: 0, p2: 0, p3: 0, p4: 0,
        p5: 0, p6: 0, p7_single: 0, p7_double: 0
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
    };

    // Target editing functions
    const MAX_Q = {
        p1: 6, p2: 25, p3: 39, p4: 30,
        p5: 30, p6: 16, p7_single: 29, p7_double: 25
    };

    const handleEditTarget = () => {
        if (user) {
            setEditTotalScore(user.targetScore || 850);
            setEditTargetLC(user.targetLC || 450);
            setEditTargetRC(user.targetRC || 400);
            setEditPartTargets(user.partTargets || {
                p1: 0, p2: 0, p3: 0, p4: 0,
                p5: 0, p6: 0, p7_single: 0, p7_double: 0
            });
            setIsEditingTarget(true);
        }
    };

    const handleSaveTarget = async () => {
        if (!user) return;
        try {
            const userRef = doc(db, 'Manager_Users', user.userId);
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
        const requiredLC = Math.min(100, Math.ceil(editTargetLC / 5));
        const requiredRC = Math.min(100, Math.ceil(editTargetRC / 5) + 4);

        const distribute = (budget: number, parts: Array<{ key: keyof typeof MAX_Q; cap?: number }>) => {
            const result: any = {};
            let remaining = budget;
            for (const part of parts) {
                const max = part.cap || MAX_Q[part.key];
                const allocated = Math.min(max, remaining);
                result[part.key] = allocated;
                remaining -= allocated;
                if (remaining <= 0) break;
            }
            return result;
        };

        const lcParts = [
            { key: 'p1' as const },
            { key: 'p2' as const },
            { key: 'p4' as const },
            { key: 'p3' as const }
        ];
        const lcResult = distribute(requiredLC, lcParts);

        let p5Cap = MAX_Q.p5;
        if (editTotalScore < 750) p5Cap = 25;
        if (editTotalScore < 600) p5Cap = 20;

        const rcParts = [
            { key: 'p5' as const, cap: p5Cap },
            { key: 'p6' as const },
            { key: 'p7_single' as const },
            { key: 'p7_double' as const }
        ];
        const rcResult = distribute(requiredRC, rcParts);

        setEditPartTargets({
            p1: lcResult.p1 || 0, p2: lcResult.p2 || 0, p3: lcResult.p3 || 0, p4: lcResult.p4 || 0,
            p5: rcResult.p5 || 0, p6: rcResult.p6 || 0,
            p7_single: rcResult.p7_single || 0, p7_double: rcResult.p7_double || 0
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

            const doneMap: Record<string, boolean> = {};
            statsSnap.forEach(d => {
                const r = d.data();
                if (r.type && r.detail) doneMap[`${r.type}_${r.detail}`] = true;
            });
            setCompletedMap(doneMap);

            const list: any[] = [];
            assignSnap.forEach((doc) => {
                const data = doc.data();
                if (data.targetClass === 'all' || data.targetClass === className || data.targetStudentId === userId) {
                    list.push({ id: doc.id, ...data });
                }
            });
            setAssignments(list.slice(0, 4));
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

            const lcCorrect = (finalScores['part1_test'] || 0) + (finalScores['part2_test'] || 0) + (finalScores['part3_test'] || 0) + (finalScores['part4_test'] || 0);
            const rcCorrect = (finalScores['part5_test'] || 0) + (finalScores['part6_test'] || 0) + (finalScores['part7_test'] || finalScores['part7_single'] || 0);
            setCurrentScore(lcCorrect + rcCorrect > 0 ? Math.round(((lcCorrect + rcCorrect) / 200) * 990) : 0);
            setPartScores(finalScores);
            setLatestScores(latestScore);
            setStats(finalStats);
        } catch (error) {
            console.error("Error stats:", error);
        }
    };

    const getHomeworkLink = (type: string, detail: string, id: string) => {
        switch (type) {
            case 'voca': return `/homework/voca`;
            case 'grammar': return `/homework/part5`;
            case 'part2_test': return `/homework/part2/${detail.match(/\d+/)?.[0] || '1'}`;
            case 'part5_test': return `/homework/part5-real/test/${detail.match(/\d+/)?.[0] || '1'}`;
            case 'part7_double': return `/homework/part7-double`;
            case 'weakness_review': return `/homework/weakness/${id}`;
            default: return '/';
        }
    };

    const getHomeworkIcon = (type: string) => {
        if (type.includes('voca')) return BookOpen;
        if (type.includes('part1')) return Mic2;
        if (type.includes('part5')) return PenSquare;
        return Headphones;
    };

    if (!isMounted || (loading && !user)) return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;

    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-20">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/"><Button variant="ghost" className="text-slate-400 hover:text-white"><ArrowLeft className="w-5 h-5 mr-2" />메인으로</Button></Link>
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">나의 학습방</h2>
                        <p className="text-slate-400 text-sm">개인 맞춤형 학습 성취도 분석 및 과제 관리</p>
                    </div>
                </div>
                {user && <ClassInfoCard user={user} />}
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                    <Calendar className="text-indigo-400 w-5 h-5" /><h3 className="text-lg font-bold text-white">오늘의 과제 (Assignments)</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {assignments.map((assign) => {
                        const isCompleted = completedMap[`${assign.type}_${assign.detail}`];
                        return (
                            <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id)} className={cn("block h-full transform transition-all hover:scale-[1.02]", isCompleted && "opacity-90")}>
                                <Card className={cn("p-4 flex justify-between items-center h-full border transition-all relative overflow-hidden", isCompleted ? "bg-slate-900/40 border-emerald-500/20" : "bg-slate-800 border-indigo-500/30 shadow-lg")}>
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", isCompleted ? "bg-emerald-500/10 text-emerald-400" : "bg-indigo-500/10 text-indigo-400")}>
                                            {(() => { const Icon = getHomeworkIcon(assign.type); return <Icon className="w-6 h-6" />; })()}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <Badge variant="outline" className={cn("text-[10px] h-5 px-1.5 font-bold border-0", isCompleted ? "bg-emerald-500/10 text-emerald-400" : "bg-indigo-500/10 text-indigo-400")}>{assign.typeLabel || assign.type}</Badge>
                                            </div>
                                            <p className={cn("font-black text-lg", isCompleted ? "text-slate-400 line-through decoration-slate-600" : "text-white")}>{assign.detail}</p>
                                        </div>
                                    </div>
                                    <div className="relative z-10">
                                        {isCompleted ? <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]"><CheckCircle2 className="w-6 h-6 text-white" /></div> : <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500 shadow-lg font-bold">Start</Button>}
                                    </div>
                                </Card>
                            </Link>
                        );
                    })}
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
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div className={cn("h-full rounded-full", (stats['voca'] || 0) < 15 ? "bg-rose-500" : "bg-emerald-500")} style={{ width: `${Math.min(100, ((stats['voca'] || 0) / 15) * 100)}%` }}></div></div>
                        </div>
                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                            <div className="flex justify-between items-center mb-2"><span className="text-amber-400 font-bold text-sm">약점: {analysis?.topWeakness?.label || '분석 중...'}</span><span className="text-xs text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">{analysis?.topWeakness?.percentage || 0}%</span></div>
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
                                            {['p1', 'p2', 'p3', 'p4'].map((p) => {
                                                const goal = weaknessReport.targetStats[p].target;
                                                const current = weaknessReport.targetStats[p].average;
                                                const latest = weaknessReport.targetStats[p].latest;
                                                const gap = latest - goal;

                                                return (
                                                    <div key={p} className="flex items-center text-sm gap-2 font-inter">
                                                        <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{p}</span>
                                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                                <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}</span>
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
                                            {['p5', 'p6', 'p7_single', 'p7_double'].map((p) => {
                                                const goal = weaknessReport.targetStats[p].target;
                                                const current = weaknessReport.targetStats[p].average;
                                                const latest = weaknessReport.targetStats[p].latest;
                                                const gap = latest - goal;

                                                return (
                                                    <div key={p} className="flex items-center text-sm gap-2 font-inter">
                                                        <span className="text-slate-400 font-bold w-12 text-center uppercase text-[10px] sm:text-xs flex-shrink-0">{p.replace('p7_', 'P7 ').replace('single', 'S').replace('double', 'D')}</span>
                                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                                            <div className="flex flex-col items-center min-w-[32px]">
                                                                <span className="text-slate-500 text-[9px] mb-0.5">목표</span>
                                                                <span className="text-emerald-400 font-bold text-sm tracking-tight">{goal}</span>
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
                                            <Input type="number" value={editTotalScore} onChange={(e) => setEditTotalScore(parseInt(e.target.value))} className="bg-slate-800 border-slate-700" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">LC</label>
                                            <Input type="number" value={editTargetLC} onChange={(e) => setEditTargetLC(parseInt(e.target.value))} className="bg-slate-800 border-slate-700" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block">RC</label>
                                            <Input type="number" value={editTargetRC} onChange={(e) => setEditTargetRC(parseInt(e.target.value))} className="bg-slate-800 border-slate-700" />
                                        </div>
                                    </div>
                                    <Button onClick={handleAutoAllocate} variant="outline" size="sm" className="w-full"><Zap className="w-4 h-4 mr-2" />AI 자동 배분</Button>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {Object.keys(MAX_Q).map((part) => (
                                            <div key={part}>
                                                <label className="text-xs text-slate-400 mb-1 block uppercase">{part}</label>
                                                <Input type="number" value={editPartTargets[part as keyof typeof MAX_Q]} onChange={(e) => setEditPartTargets(prev => ({ ...prev, [part]: parseInt(e.target.value) || 0 }))} max={MAX_Q[part as keyof typeof MAX_Q]} className="bg-slate-800 border-slate-700 text-sm" />
                                            </div>
                                        ))}
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
        </div>
    );
}
