'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs, orderBy, doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { cn } from "@/lib/utils";
import { Mic2, Headphones, BookOpen, PenSquare, Target, Clock, ArrowLeft, ArrowRight, Calendar, BarChart2, TrendingUp, AlertTriangle, Zap, CheckCircle2, FileText } from "lucide-react";
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
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';
import { NotificationDropdown } from '@/components/dashboard/NotificationDropdown';
import { distributeGoals } from '@/utils/goal-utils';
import { format, isValid } from 'date-fns';

// Helper function to safely handle various date formats (Firestore Timestamp, JS Date, etc.)
const getSafeDate = (dateField: any): Date => {
    if (!dateField) return new Date(0);

    // 1. Firestore Timestamp
    if (typeof dateField.toDate === 'function') {
        return dateField.toDate();
    }

    // 2. Seconds/Nanoseconds object (sometimes Firestore data arrives as a plain POJO)
    if (typeof dateField.seconds === 'number') {
        return new Date(dateField.seconds * 1000);
    }

    // 3. Already a Date or String/Number that can be parsed
    const d = new Date(dateField);
    return isValid(d) ? d : new Date(0);
};


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
        // 1. Get user profile first to check for summary
        const profile = await getUserProfile(userId);

        // 2. If pre-calculated summary exists, use it! (Ultra fast)
        if (profile?.performanceSummary) {
            const summary = profile.performanceSummary;
            setCurrentScore(summary.predictedTotal);
            setCurrentStats({
                p1_cur: summary.partStats.p1?.latest || 0,
                p2_cur: summary.partStats.p2?.latest || 0,
                p3_cur: summary.partStats.p3?.latest || 0,
                p4_cur: summary.partStats.p4?.latest || 0,
                p5_cur: summary.partStats.p5?.latest || 0,
                p6_cur: summary.partStats.p6?.latest || 0,
                p7s_cur: summary.partStats.p7s?.latest || 0,
                p7d_cur: summary.partStats.p7d?.latest || 0,
                p7f_cur: summary.partStats.p7f?.latest || 0
            });

            // Still fetch weakness report for tags/priority, but we can potentially optimize this later too
            const report = await WeaknessService.analyzeUserWeakness(userId);
            setWeaknessReport(report);
            return;
        }

        // 3. Fallback to existing manual calculation if no summary
        const report = await WeaknessService.analyzeUserWeakness(userId);
        setWeaknessReport(report);

        if (report && report.targetStats) {
            const lcParts = ['p1', 'p2', 'p3', 'p4'];
            const rcParts = ['p5', 'p6', 'p7s', 'p7d'];

            const lcCorrect = lcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);
            const rcCorrect = rcParts.reduce((sum, p) => sum + (report.targetStats[p]?.latest || 0), 0);

            const lcScore = lcCorrect > 0 ? (lcCorrect * 5) + 10 : 0;
            const rcScore = rcCorrect > 0 ? (rcCorrect * 5) - 10 : 0;

            setCurrentScore(Math.max(0, lcScore) + Math.max(0, rcScore));

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
            // ✅ AI Force Allocation: If any part target is 0, auto-calculate before saving
            const isAnyTargetEmpty = Object.values(editPartTargets).some(v => v === 0);
            let finalPartTargets = editPartTargets;

            if (isAnyTargetEmpty) {
                console.log("Empty targets detected. AI is auto-allocating...");
                finalPartTargets = distributeGoals(editTotalScore, editTargetLC, editTargetRC);
            }

            const userRef = doc(db, 'Winter_Users', user.userId);
            await updateDoc(userRef, {
                targetScore: editTotalScore,
                targetLC: editTargetLC,
                targetRC: editTargetRC,
                partTargets: finalPartTargets
            });
            setIsEditingTarget(false);
            await fetchData(user.userId, user.className);
        } catch (error) {
            console.error('Failed to save targets', error);
        }
    };

    const handleAutoAllocate = () => {
        // Sync LC/RC first based on current total in input
        const score = editTotalScore;
        let lc = Math.round((score + 50) / 2 / 5) * 5;
        if (lc > 495) lc = 495;
        if (lc < 0) lc = 0;
        let rc = score - lc;
        if (rc < 0) rc = 0;

        setEditTargetLC(lc);
        setEditTargetRC(rc);

        // Run part-by-part distribution
        const result = distributeGoals(score, lc, rc);
        setEditPartTargets(result);
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
            // Rule-Safe Queries: Avoid broad collection reads to prevent 'Insufficient Permissions'
            const qPersonal = query(collection(db, "Assignments"), where("targetStudentId", "==", userId));
            const qClass = query(collection(db, "Assignments"), where("targetClass", "==", className));
            const qAll = query(collection(db, "Assignments"), where("targetClass", "==", "all"));
            const statsQ = query(collection(db, "Manager_Results"), where("studentId", "==", userId));

            const [personalSnap, classSnap, allSnap, statsSnap] = await Promise.all([
                getDocs(qPersonal),
                getDocs(qClass),
                getDocs(qAll),
                getDocs(statsQ)
            ]);

            const doneMap: Record<string, any> = {};
            statsSnap.forEach(d => {
                const r = d.data();
                if (r.type && r.detail) {
                    doneMap[`${r.type}_${r.detail}`] = {
                        isCompleted: true,
                        score: r.score,
                        total: r.total,
                        timestamp: r.timestamp,
                        attemptId: r.attemptId // ✨ Store attemptId for result links
                    };
                }
            });
            setCompletedMap(doneMap);

            // Combine and Deduplicate
            const assignmentMap = new Map();
            [...personalSnap.docs, ...classSnap.docs, ...allSnap.docs].forEach(doc => {
                assignmentMap.set(doc.id, { id: doc.id, ...doc.data() });
            });

            const list = Array.from(assignmentMap.values())
                .filter(data => !data.isAiGenerated) // Hide AI tasks from main dashboard
                .sort((a, b) => {
                    const dateA = getSafeDate(a.createdAt).getTime();
                    const dateB = getSafeDate(b.createdAt).getTime();
                    return dateB - dateA;
                });

            setAssignments(list);
        } catch (error) {
            console.error("Error assignments:", error);
        }
    };

    const fetchStats = async (userId: string) => {
        const profile = await getUserProfile(userId);

        // Use summary if available to skip heavy calculations
        if (profile?.performanceSummary) {
            const summary = profile.performanceSummary;
            const latestScore: Record<string, number> = {};
            const averageScore: Record<string, number> = {};
            const completedCount: Record<string, number> = {};

            Object.entries(summary.partStats).forEach(([p, stat]: [string, any]) => {
                latestScore[p] = stat.latest;
                averageScore[p] = stat.average;
                completedCount[p] = stat.completedCount;
            });

            // Map back to long keys for compatibility with dashboard UI
            const SHORT_TO_LONG: Record<string, string> = {
                'p1': 'part1_test', 'p2': 'part2_test', 'p3': 'part3_test', 'p4': 'part4_test',
                'p5': 'part5_test', 'p6': 'part6_test', 'p7s': 'part7_single', 'p7d': 'part7_double', 'p7f': 'part7_test'
            };

            const finalScores: Record<string, number> = {};
            const finalLatest: Record<string, number> = {};
            const finalStats: Record<string, number> = {};

            Object.keys(summary.partStats).forEach(p => {
                const longKey = SHORT_TO_LONG[p] || p;
                finalScores[longKey] = Math.round(summary.partStats[p].average);
                finalLatest[longKey] = summary.partStats[p].latest;
                finalStats[longKey] = summary.partStats[p].completedCount;
            });

            setPartScores(finalScores);
            setLatestScores(finalLatest);
            setStats(finalStats);
            return;
        }

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

    const getHomeworkLink = (type: string, detail: string, id: string, homeworkUrl?: string, attemptId?: string) => {
        // ✨ If we have an attemptId, it means this is a completed test result we want to view
        if (attemptId && type === 'mock_test') {
            const testNum = detail?.includes('2회') ? 10 : 9;
            return `/mock-test/full/${testNum}/result?attemptId=${attemptId}`;
        }

        // If the assignment already has a direct URL, use it (for AI generated ones)
        if (homeworkUrl) return homeworkUrl;

        const testNum = detail?.match(/\d+/)?.[0] || '1';
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
            case 'type_review': return homeworkUrl || `/homework/part5-real`;
            case 'level_test': {
                if (!detail) return '/';
                if (detail.includes('레벨테스트 1')) return `/mock-test/half/9a`;
                if (detail.includes('레벨테스트 2')) return `/mock-test/half/9b`;
                return `/mock-test/half/${detail.toLowerCase()}`;
            }
            case 'mock_test': {
                if (!detail) return '/';
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
        <div className="space-y-4 md:space-y-8 w-full pb-10 md:pb-20 px-0">
            {/* Force Push Notification Activation */}
            {user?.userId && <NotificationForceModal userId={user.userId} />}

            <div className="flex items-center justify-between gap-1 md:gap-6 px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-1 md:gap-4">
                    <Link href="/"><Button variant="ghost" className="text-slate-400 hover:text-white px-1 md:px-4 h-7 md:h-10"><ArrowLeft className="w-4 h-4 md:w-5 md:h-5 md:mr-2" /></Button></Link>
                    <div>
                        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-none uppercase italic">Workspace</h2>
                        <p className="text-[10px] md:text-sm mt-1 font-black uppercase tracking-widest text-indigo-400/90">
                            {user?.userName || user?.name || user?.username}님의 학습 분석 & 과제
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 self-center md:self-auto">
                    {/* 나의 학습 기록실 (History) Button */}
                    <Link href="/student/history">
                        <Button variant="outline" className="h-8 md:h-10 bg-slate-800 border-indigo-500/30 text-indigo-400 hover:bg-slate-700 hover:text-white px-2 md:px-4 text-[10px] md:text-sm font-black uppercase tracking-widest gap-2">
                            <FileText className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            <span className="hidden sm:inline">나의 학습 기록실</span>
                            <span className="sm:hidden">기록실</span>
                        </Button>
                    </Link>

                    {user?.userId && (
                        <div className="flex items-center gap-1 md:gap-2 scale-[0.9] md:scale-100 origin-right">
                            <NotificationDropdown userId={user.userId} />
                            <NotificationSetter userId={user.userId} />
                        </div>
                    )}
                    {user && <div className="scale-[0.9] md:scale-100 origin-right"><ClassInfoCard user={user} /></div>}
                </div>
            </div>

            <div className="bg-slate-900/40 border-y border-slate-800/60 px-2 md:px-8 py-4 md:py-8">
                <div className="flex items-center gap-2 mb-3 md:mb-6 px-1">
                    <Calendar className="text-indigo-400 w-5 h-5" /><h3 className="text-sm md:text-lg font-black text-slate-300 uppercase tracking-widest">오늘의 과제</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    {(() => {
                        const pending = assignments.filter(a => !completedMap[`${a.type}_${a.detail}`]).slice(0, 4);
                        if (pending.length === 0) {
                            return (
                                <div className="col-span-full py-8 md:py-12 flex flex-col items-center justify-center bg-slate-800/20 rounded-xl border border-dashed border-slate-700">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-3 opacity-50" />
                                    <p className="text-slate-300 font-black text-sm md:text-lg italic">오늘의 모든 과제 완료! 🎉</p>
                                </div>
                            );
                        }
                        return pending.map((assign) => (
                            <Link key={assign.id} href={getHomeworkLink(assign.type, assign.detail, assign.id, assign.homeworkUrl)} className="block h-full transition-all">
                                <Card className="p-3 md:p-5 flex flex-col justify-between h-32 md:h-48 border transition-all relative overflow-hidden bg-slate-800/50 border-indigo-500/10 hover:border-indigo-500/50 group">
                                    <div className="relative z-10 w-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <Badge variant="outline" className="text-[10px] h-4 px-1.5 font-black border-0 bg-indigo-500/20 text-indigo-300 uppercase italic tracking-widest leading-none">{assign.typeLabel || assign.type}</Badge>
                                            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400/80" />
                                        </div>
                                        <p className="font-black text-[16px] md:text-2xl text-white leading-tight italic truncate w-full">{assign.title || assign.detail}</p>
                                    </div>
                                    <Button size="sm" className="w-full bg-indigo-600/80 hover:bg-indigo-600 h-8 md:h-10 text-xs md:text-sm font-black rounded-lg md:rounded-xl uppercase tracking-widest shadow-lg shadow-indigo-900/50">Start Now</Button>
                                </Card>
                            </Link>
                        ));
                    })()}
                </div>
            </div>

            <div className="px-2 md:px-8">
                <Card className="bg-slate-900/60 border-rose-500/20 p-4 md:p-8 relative overflow-hidden rounded-xl md:rounded-[2.5rem]">
                    <div className="flex items-center justify-between mb-4 md:mb-8 px-1">
                        <div className="flex items-center gap-3"><AlertTriangle className="text-rose-400 w-6 h-6" /><h3 className="text-[17px] md:text-2xl font-black text-white uppercase tracking-widest italic">AI 약점 분석</h3></div>
                        <Button variant="outline" size="sm" onClick={() => router.push('/weakness/dashboard')} className="bg-slate-800 text-white border-indigo-500/20 h-9 md:h-11 text-xs md:text-sm px-3 md:px-6 font-black uppercase tracking-widest rounded-xl">
                            <BarChart2 className="w-4 h-4 mr-2" />AI 정밀 진단실
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        <div className={cn("border rounded-2xl p-4 md:p-6 transition-all", (stats['voca'] || 0) < 15 ? "bg-rose-500/5 border-rose-500/20" : "bg-emerald-500/5 border-emerald-500/20")}>
                            <div className="flex justify-between items-center mb-3 text-sm md:text-base"><span className={cn("font-black uppercase italic tracking-widest", (stats['voca'] || 0) < 15 ? "text-rose-400" : "text-emerald-400")}>Voca Status</span><span className="text-slate-500 font-black ml-1 text-xs md:text-lg italic">{stats['voca'] || 0}/15d</span></div>
                            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3"><div className={cn("h-full rounded-full transition-all duration-1000", (stats['voca'] || 0) < 15 ? "bg-rose-500 shadow-[0_0_12px_rgba(244,63,94,0.5)]" : "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]")} style={{ width: `${Math.min(100, ((stats['voca'] || 0) / 15) * 100)}%` }}></div></div>
                            <p className="text-[15px] md:text-lg text-slate-200 leading-tight font-black italic">{analysis?.vocaStatus?.message || "분석 데이터를 불러오는 중입니다."}</p>
                        </div>
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-4 md:p-6">
                            <div className="flex justify-between items-center mb-3 text-sm md:text-base"><span className="text-amber-400 font-black uppercase italic tracking-widest">Grammar Weakness</span><span className="text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-lg text-xs md:text-base font-black italic">{analysis?.topWeakness?.percentage || 0}%</span></div>
                            <p className="text-[15px] md:text-lg text-slate-200 leading-tight font-black italic">{analysis?.topWeakness?.label || "데이터를 분석 중입니다."}</p>
                        </div>
                        <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-4 md:p-6 md:col-span-2 lg:col-span-1">
                            <div className="flex justify-between items-center mb-3 text-sm md:text-base"><span className="text-indigo-400 font-black uppercase italic tracking-widest">Listening Habit</span><Badge variant="outline" className="text-xs md:text-sm text-indigo-400 border-indigo-500/20 h-6 px-3 leading-none font-black italic uppercase">Excellent</Badge></div>
                            <p className="text-[15px] md:text-lg text-slate-200 leading-tight font-black italic">{analysis?.lcHabit?.message || "LC 데이터를 분석 중입니다."}</p>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="px-2 md:px-8">
                {/* Detailed Target Card - From Weakness Dashboard */}
                {weaknessReport && (
                    <Card className="bg-slate-900 border-indigo-500/30 p-4 md:p-8 relative overflow-hidden text-inter rounded-xl md:rounded-[2.5rem]">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                        <div className="relative z-10">
                            {!isEditingTarget ? (
                                <>
                                    <div className="flex flex-col sm:flex-row justify-between items-start mb-6 md:mb-10 gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Target className="text-indigo-400 w-6 h-6" />
                                                <h3 className="text-[17px] md:text-2xl font-black text-white uppercase tracking-widest italic">Target Status</h3>
                                            </div>
                                            <p className="text-slate-400 text-xs md:text-lg font-black uppercase tracking-widest leading-none">
                                                목표: <span className="text-indigo-400">{weaknessReport.targetScore}점</span>
                                                <span className="mx-3 text-slate-800">/</span>
                                                LC {weaknessReport.targetLCScore} <span className="mx-1 text-slate-800">|</span> RC {weaknessReport.targetRCScore}
                                            </p>
                                        </div>
                                        <Button
                                            onClick={handleEditTarget}
                                            variant="outline"
                                            className="w-full sm:w-auto h-10 md:h-12 text-[10px] md:text-xs border-indigo-500/50 text-indigo-400 font-black uppercase tracking-widest rounded-xl"
                                        >
                                            목표 수정
                                        </Button>
                                    </div>

                                    {/* Comparison Grid */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        {/* LC Column */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs md:text-lg font-black text-blue-400 mb-4 uppercase italic tracking-widest border-b border-blue-500/20 pb-2">
                                                Listening (LC) 총필요 정답수:{Math.min(100, Math.round(weaknessReport.targetLCScore * 0.18 + 9))}
                                            </h4>
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
                                                    <div key={k} className="flex items-center gap-2 md:gap-4 font-inter">
                                                        <span className="text-slate-500 font-black w-10 text-center uppercase text-[12px] md:text-lg flex-shrink-0 italic">{label}</span>
                                                        <div className="flex-1 flex justify-between items-center px-4 bg-slate-800/40 rounded-xl py-3 border border-slate-700/30">
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Goal</span>
                                                                <span className="text-emerald-400 font-black text-[15px] md:text-xl tracking-tighter italic">{goal}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Avg</span>
                                                                <span className="text-slate-300 font-black text-[15px] md:text-xl tracking-tighter italic">{current}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Last</span>
                                                                <span className={cn("font-black text-[15px] md:text-xl tracking-tighter italic", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                            </div>
                                                        </div>
                                                        <span className={cn("text-[13px] md:text-lg w-10 text-right font-black flex-shrink-0 font-inter italic", gap < 0 ? "text-rose-500" : "text-emerald-500")}>
                                                            {gap !== 0 ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                                        </span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* RC Column */}
                                        <div className="space-y-4">
                                            <h4 className="text-xs md:text-lg font-black text-indigo-400 mb-4 uppercase italic tracking-widest border-b border-indigo-500/20 pb-2">
                                                Reading (RC) 총필요 정답수:{Math.min(100, Math.round(weaknessReport.targetRCScore * 0.16 + 21))}
                                            </h4>
                                            {[
                                                { k: 'p5', label: 'P5' },
                                                { k: 'p6', label: 'P6' },
                                                { k: 'p7s', label: 'P7 S' },
                                                { k: 'p7d', label: 'P7 D' }
                                            ].map(({ k, label }) => {
                                                const partStats = weaknessReport.targetStats[k] || { target: 0, average: 0, latest: 0 };
                                                const goal = partStats.target;
                                                const current = partStats.average;
                                                const latest = partStats.latest;
                                                const gap = latest - goal;

                                                return (
                                                    <div key={k} className="flex items-center gap-2 md:gap-4 font-inter">
                                                        <span className="text-slate-500 font-black w-10 text-center uppercase text-[12px] md:text-lg flex-shrink-0 italic">{label}</span>
                                                        <div className="flex-1 flex justify-between items-center px-4 bg-slate-800/40 rounded-xl py-3 border border-slate-700/30">
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Goal</span>
                                                                <span className="text-emerald-400 font-black text-[15px] md:text-xl tracking-tighter italic">{goal}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Avg</span>
                                                                <span className="text-slate-300 font-black text-[15px] md:text-xl tracking-tighter italic">{current}</span>
                                                            </div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-slate-600 text-[10px] md:text-[11px] font-black uppercase mb-1">Last</span>
                                                                <span className={cn("font-black text-[15px] md:text-xl tracking-tighter italic", latest >= goal ? "text-emerald-400" : "text-rose-400")}>{latest}</span>
                                                            </div>
                                                        </div>
                                                        <span className={cn("text-[13px] md:text-lg w-10 text-right font-black flex-shrink-0 font-inter italic", gap < 0 ? "text-rose-500" : "text-emerald-500")}>
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
                                            <Input
                                                type="number"
                                                value={editTotalScore}
                                                onChange={(e) => {
                                                    const score = Number(e.target.value) || 0;
                                                    setEditTotalScore(score);
                                                    // Immediately sync LC/RC in UI
                                                    let lc = Math.round((score + 50) / 2 / 5) * 5;
                                                    if (lc > 495) lc = 495;
                                                    if (lc < 0) lc = 0;
                                                    let rc = score - lc;
                                                    if (rc < 0) rc = 0;
                                                    setEditTargetLC(lc);
                                                    setEditTargetRC(rc);
                                                }}
                                                className="bg-slate-800 border-slate-700 font-bold"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block text-blue-400">LC 목표</label>
                                            <Input
                                                type="number"
                                                value={editTargetLC}
                                                onChange={(e) => {
                                                    const lc = Math.min(495, Number(e.target.value) || 0);
                                                    setEditTargetLC(lc);
                                                    // Adjust RC to keep total fixed
                                                    setEditTargetRC(Math.max(0, editTotalScore - lc));
                                                }}
                                                className="bg-slate-800 border-slate-700 font-bold text-blue-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-xs text-slate-400 mb-1 block text-indigo-400">RC 목표</label>
                                            <Input
                                                type="number"
                                                value={editTargetRC}
                                                onChange={(e) => {
                                                    const rc = Math.min(495, Number(e.target.value) || 0);
                                                    setEditTargetRC(rc);
                                                    // Adjust LC to keep total fixed
                                                    setEditTargetLC(Math.max(0, editTotalScore - rc));
                                                }}
                                                className="bg-slate-800 border-slate-700 font-bold text-indigo-400"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        onClick={handleAutoAllocate}
                                        variant="outline"
                                        size="sm"
                                        className="w-full bg-indigo-500/10 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                                    >
                                        <Zap className="w-4 h-4 mr-2" />전체 데이터에 맞춰 AI 자동 분배
                                    </Button>
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
                <h3 className="text-base md:text-xl font-bold text-slate-400 mb-3 md:mb-4 px-1 uppercase tracking-wider">학습 지표 (Aggregate)</h3>
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-4 mb-10">
                    {Object.entries(HOMEWORK_CONFIG).map(([key, config]) => {
                        const count = stats[key] || 0;
                        if (count === 0 && !['voca', 'grammar', 'part5_test'].includes(key)) return null;
                        return <ProgressCard key={key} title={config.label.split('(')[0]} value={`${(count / config.total * 100).toFixed(0)}%`} subValue={`${count}/${config.total}`} current={count} total={config.total} color={config.color as any} icon={config.icon} />;
                    })}
                </div>


            </div>

            {/* Recently Completed Homework Section - Removed for Slimmer Dashboard. Accessed via History Page. */}
        </div>
    );
}
