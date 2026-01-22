'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, doc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ArrowLeft, Calendar, FileText, CheckCircle2, TrendingUp, Target, AlertTriangle, Zap, Send, Bell, BookOpen, PenSquare, Mic2, Headphones, Trophy } from "lucide-react";
import Link from 'next/link';
import { format } from 'date-fns';
import { useParams, useRouter } from 'next/navigation';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { cn } from "@/lib/utils";
import { TargetSettingSection } from '@/components/dashboard/TargetSettingSection';
import { UserProfile, getUserProfile } from '@/services/userService';
import { getWeaknessAnalysis, AnalysisResult } from '@/services/analysisService';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';

// Reusing configuration from Student Dashboard for consistency
const HOMEWORK_CONFIG: Record<string, { label: string, total: number, unit: string, color: string, icon: any }> = {
    voca: { label: '단어 암기', total: 30, unit: 'Days', color: 'emerald', icon: BookOpen },
    grammar: { label: '문법 (Grammar)', total: 13, unit: 'Units', color: 'blue', icon: PenSquare },
    part1_shadow: { label: 'Part 1 쉐도잉', total: 5, unit: 'Sets', color: 'indigo', icon: Mic2 },
    part2_test: { label: 'LC Part 2 실전', total: 10, unit: 'Tests', color: 'rose', icon: Headphones },
    part3_test: { label: 'LC Part 3 실전', total: 10, unit: 'Tests', color: 'orange', icon: Headphones },
    part4_test: { label: 'LC Part 4 실전', total: 10, unit: 'Tests', color: 'pink', icon: Headphones },
    part5_test: { label: 'RC Part 5 실전', total: 10, unit: 'Tests', color: 'amber', icon: PenSquare },
    part6_test: { label: 'RC Part 6 실전', total: 10, unit: 'Tests', color: 'violet', icon: BookOpen },
    part7_test: { label: 'RC Part 7 실전', total: 10, unit: 'Tests', color: 'cyan', icon: BookOpen },
};

// Update Student Interface to be compatible with UserProfile
interface Student extends Partial<UserProfile> {
    id: string; // Document ID
    userId: string;
    userName: string;
    className: string;
    universityName?: string;
    email?: string;
    phone?: string;
    fcmToken?: string;
    currentScore?: number;
    // UserProfile fields included via extension/Partial
}

interface Result {
    id: string;
    type: string;
    detail: string;
    unit?: string;
    score: number;
    total: number;
    timestamp: any;
    className: string;
}

export default function StudentDetailPage() {
    const params = useParams();
    const router = useRouter();
    const studentId = params.studentId as string;

    const [loading, setLoading] = useState(true);
    const [student, setStudent] = useState<Student | null>(null);
    const [results, setResults] = useState<Result[]>([]);
    const [stats, setStats] = useState<Record<string, number>>({});
    const [partScores, setPartScores] = useState<Record<string, number>>({}); // New State for Detailed Scores
    const [studentRankings, setStudentRankings] = useState<any[]>([]);
    const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
    const [weaknessReport, setWeaknessReport] = useState<WeaknessReport | null>(null);

    const [pushMessage, setPushMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (studentId) {
            fetchStudentData();
        }
    }, [studentId]);

    const fetchStudentData = async () => {
        try {
            setLoading(true);

            // 1. Fetch Student Info (Robust Resolution)
            let userSnap = await getDoc(doc(db, "Winter_Users", studentId));
            let userData = userSnap.exists() ? userSnap.data() : null;
            let resolvedDocId = studentId;

            // If not found by direct doc ID, try querying by userId field
            if (!userData) {
                const qUser = query(collection(db, "Winter_Users"), where("userId", "==", studentId));
                const qSnap = await getDocs(qUser);
                if (!qSnap.empty) {
                    userSnap = qSnap.docs[0];
                    userData = userSnap.data() || null;
                    resolvedDocId = userSnap.id;
                }
            }

            // CROSS-SYNC FIX: If we have a userId field, check if a document named by that userId exists
            // This is because student dashboards save to doc(db, 'Winter_Users', userId)
            if (userData?.userId && userData.userId !== resolvedDocId) {
                const syncSnap = await getDoc(doc(db, "Winter_Users", userData.userId));
                if (syncSnap.exists()) {
                    const syncData = syncSnap.data();
                    // Merit the sync document's data (targets, etc)
                    userData = { ...userData, ...syncData };
                    // We should use the student ID number for subsequent result queries
                    resolvedDocId = userData.userId;

                    // BACK-SYNC: Update the primary document (abcxyz) with the latest data from userId doc
                    // This fixes stale data in the Admin List/Monitor
                    try {
                        await updateDoc(doc(db, "Winter_Users", studentId), {
                            targetScore: syncData.targetScore || userData.targetScore,
                            targetLC: syncData.targetLC || userData.targetLC,
                            targetRC: syncData.targetRC || userData.targetRC,
                            partTargets: syncData.partTargets || userData.partTargets,
                            lastSyncedAt: Timestamp.now()
                        });
                    } catch (syncErr) {
                        console.warn("Back-sync to primary doc failed:", syncErr);
                    }
                }
            }

            // Store values to be used after results are processed
            const studentBase = userData ? {
                id: resolvedDocId,
                userId: userData.userId,
                userName: userData.userName,
                className: userData.className || "Unknown",
                universityName: userData.universityName,
                targetScore: userData.targetScore || 850,
                targetLC: userData.targetLC,
                targetRC: userData.targetRC,
                partTargets: userData.partTargets,
                email: userData.email,
                phone: userData.phone,
                fcmToken: userData.fcmToken,
                name: userData.userName,
                passedVocaDays: userData.passedVocaDays || [],
            } : null;

            // 2. Fetch Results History (Use the resolved Student ID Number)
            const resultQueryId = userData?.userId || studentId;

            // Trigger Analysis in parallel
            getWeaknessAnalysis(resultQueryId).then(setAnalysis).catch(e => console.error("Admin Analysis Error:", e));
            WeaknessService.analyzeUserWeakness(resultQueryId).then(setWeaknessReport).catch(e => console.error("Admin Weakness Report Error:", e));
            const qResults = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", resultQueryId),
                orderBy("timestamp", "desc")
            );

            const resSnap = await getDocs(qResults);
            const resList: Result[] = [];
            const uniqueCounts: Record<string, Set<string>> = {};
            Object.keys(HOMEWORK_CONFIG).forEach(k => uniqueCounts[k] = new Set());

            // Score Aggregation logic (Borrowed from StudentDashboard)
            const scoreSums: Record<string, number> = {};
            const scoreCounts: Record<string, number> = {};
            const PART_MAX: Record<string, number> = {
                part1_test: 6, part2_test: 25, part3_test: 39, part4_test: 30,
                part5_test: 30, part6_test: 16,
                part7_test: 54, part7_single: 29, part7_double: 25
            };

            resSnap.forEach(doc => {
                const data = doc.data();
                resList.push({
                    id: doc.id,
                    type: data.type,
                    detail: data.detail || data.unit,
                    unit: data.unit,
                    score: data.score,
                    total: data.total,
                    timestamp: data.timestamp,
                    className: data.className
                });

                const type = data.type || mapLegacyType(data.unit || "");
                const detail = data.detail || data.unit || "Unknown";

                if (uniqueCounts[type]) uniqueCounts[type].add(detail);

                // Calculate Part Scores
                // IMPROVED Logic: Unify with StudentDashboard (handle raw vs percentage correctly)
                const maxQ = PART_MAX[type];
                if (maxQ && typeof data.score === 'number') {
                    let correctCount: number | undefined;

                    if (data.total) { // If total is recorded (modern)
                        // If score is 16 and total is 30, it's raw. 16 <= 30.
                        // If score is 80 and total is 30, it's percentage. 80 > 30.
                        if (data.score <= data.total) {
                            correctCount = data.score;
                        } else {
                            correctCount = Math.round((data.score / 100) * data.total);
                        }
                    } else { // Fallback to PART_MAX if total missing
                        if (data.score <= maxQ) {
                            correctCount = data.score;
                        } else {
                            correctCount = Math.round((data.score / 100) * maxQ);
                        }
                    }

                    if (correctCount !== undefined) {
                        scoreSums[type] = (scoreSums[type] || 0) + correctCount;
                        scoreCounts[type] = (scoreCounts[type] || 0) + 1;
                    }
                }
            });

            // Voca Progress Sync from Profile (Legacy/Manual items)
            if (studentBase?.passedVocaDays) {
                studentBase.passedVocaDays.forEach((d: string) => uniqueCounts.voca.add(`Day ${d}`));
            }

            const finalStats: Record<string, number> = {};
            Object.keys(uniqueCounts).forEach(k => finalStats[k] = uniqueCounts[k].size);

            // Calculate Averages
            const finalScores: Record<string, number> = {};
            Object.keys(scoreSums).forEach(k => {
                finalScores[k] = Math.round(scoreSums[k] / scoreCounts[k]);
            });
            // P7 Aggregation
            const p7Single = finalScores['part7_single'] || 0;
            const p7Double = finalScores['part7_double'] || 0;
            if (!finalScores['part7_test'] && (p7Single || p7Double)) {
                finalScores['part7_test'] = p7Single + p7Double;
            }

            setResults(resList);
            setStats(finalStats);
            // Finalize Student Data with Estimated Score
            if (studentBase) {
                const lcCorrect = (finalScores['part1_test'] || 0) + (finalScores['part2_test'] || 0) + (finalScores['part3_test'] || 0) + (finalScores['part4_test'] || 0);
                const rcCorrect = (finalScores['part5_test'] || 0) + (finalScores['part6_test'] || 0) + (finalScores['part7_test'] || 0);
                const totalCorrect = lcCorrect + rcCorrect;
                const estScore = totalCorrect > 0 ? Math.round((totalCorrect / 200) * 990) : 0;

                setStudent({
                    ...studentBase,
                    currentScore: estScore
                });
            }

            setPartScores(finalScores);

            // 3. Fetch Rankings for this student
            try {
                const now = new Date();
                const year = now.getFullYear();
                const onejan = new Date(year, 0, 1);
                const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
                const period = `${year}-W${String(week).padStart(2, '0')}`;

                const rankingsRef = collection(db, "Rankings");
                // Fetch All & Class rankings (Total, Voca, Consistency)
                const types = ['total', 'voca', 'consistency'];
                const classFilters = ['all', userData?.className || 'none'];

                const foundRanks: any[] = [];

                for (const t of types) {
                    for (const c of classFilters) {
                        const qRank = query(
                            rankingsRef,
                            where("period", "==", period),
                            where("type", "==", t),
                            where("classId", "==", c)
                        );
                        const rSnap = await getDocs(qRank);
                        if (!rSnap.empty) {
                            const rData = rSnap.docs[0].data();
                            const myRank = (rData.ranks || []).find((r: any) => r.userId === (userData?.userId || studentId));
                            if (myRank) {
                                foundRanks.push({
                                    ...myRank,
                                    type: t,
                                    scope: c === 'all' ? '전체' : '클래스'
                                });
                            }
                        }
                    }
                }
                setStudentRankings(foundRanks);
            } catch (rErr) {
                console.error("Error fetching rankings for student:", rErr);
            }

        } catch (error) {
            console.error("Error fetching student details:", error);
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

    const getTypeLabel = (type: string) => {
        if (HOMEWORK_CONFIG[type]) return HOMEWORK_CONFIG[type].label;
        if (type === 'weakness_review') return 'AI 약점 복습';
        return type;
    };

    const handleSendPush = async () => {
        if (!pushMessage.trim()) return;

        if (!student?.fcmToken) {
            alert('이 학생은 푸시 알림 권한을 허용하지 않았거나 토큰이 없습니다.');
            return;
        }

        setIsSending(true);
        try {
            const res = await fetch('/api/send-push', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: student.fcmToken,
                    title: '깡쌤토익 알림',
                    body: pushMessage
                })
            });

            const data = await res.json();

            if (data.success) {
                alert(`[푸시 발송 성공]\n수신자: ${student?.userName}\n내용: ${pushMessage}`);
                setPushMessage('');
            } else {
                throw new Error(data.error);
            }
        } catch (e: any) {
            console.error(e);
            alert(`[발송 실패] 오류가 발생했습니다: ${e.message}`);
        } finally {
            setIsSending(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (!student) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white gap-4">
                <p>학생 정보를 찾을 수 없습니다.</p>
                <Link href="/admin/homework">
                    <Button variant="outline">돌아가기</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header & Navigation (Keep existing) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/homework">
                            <Button variant="outline" className="flex items-center gap-2 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden md:inline">목록으로</span>
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
                                STUDENT MONITOR
                                <Badge className="bg-indigo-600 text-white not-italic">{student?.className}</Badge>
                            </h1>
                            <p className="text-slate-400 text-sm">학생별 상세 학습 이력 및 성취도 분석</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Profile & Push (1 Column) */}
                    <div className="space-y-6 lg:col-span-1">
                        {/* 1. Student Profile Card (Keep existing) */}
                        <Card className="bg-slate-900 border-slate-800 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-900/50 to-slate-900"></div>
                            <CardContent className="pt-8 relative z-10">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto flex items-center justify-center text-3xl font-bold shadow-xl border-4 border-slate-900 mb-3">
                                        {student?.userName?.[0] || '?'}
                                    </div>
                                    <h2 className="text-2xl font-bold">{student?.userName}</h2>
                                    <p className="text-slate-400">{student?.userId}</p>
                                    <div className="flex justify-center flex-wrap gap-2 mt-2">
                                        <Badge variant="secondary" className="bg-indigo-900/50 text-indigo-300 hover:bg-indigo-900/70">{student?.className}</Badge>
                                        <Badge variant="outline" className="border-slate-700 text-slate-400">{student?.universityName}</Badge>
                                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-500">Active</Badge>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center border-t border-slate-800 pt-4">
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold">Total Login</p>
                                        <p className="text-lg font-bold">12회</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs uppercase font-bold">Assignments</p>
                                        <p className="text-lg font-bold text-indigo-400">{results.length} 완료</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* 2. Push Notification Panel (Keep existing) */}
                        <Card className="bg-slate-900 border-indigo-500/30">
                            <CardHeader className="pb-3 border-b border-slate-800">
                                <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-400">
                                    <Bell className="w-4 h-4" />
                                    개별 푸시 발송 (Push Notification)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <Textarea
                                    placeholder={`${student?.userName} 학생에게 보낼 응원이나 경고 메시지를 입력하세요.`}
                                    className="bg-slate-950 border-slate-800 min-h-[100px] text-sm resize-none focus:border-indigo-500"
                                    value={pushMessage}
                                    onChange={(e) => setPushMessage(e.target.value)}
                                />
                                <Button
                                    className="w-full bg-indigo-600 hover:bg-indigo-500 font-bold"
                                    onClick={handleSendPush}
                                    disabled={isSending || !pushMessage.trim()}
                                >
                                    {isSending ? (
                                        <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    ) : (
                                        <Send className="w-4 h-4 mr-2" />
                                    )}
                                    푸시 전송 (Send)
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column: Dashboard Replica & Detail History (2 Columns) */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* 1. Target Score & Progress (Restored + Modal) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="bg-slate-900 border-slate-800 p-6 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="text-indigo-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">목표 달성도</h3>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                    <div className="text-3xl font-black text-white">{student?.targetScore}<span className="text-base text-slate-500 ml-1">점</span></div>
                                </div>
                                <div className="mt-4 mb-4">
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Current: {student?.currentScore || 0} (Predict)</span>
                                        <span>{Math.round(((student?.currentScore || 0) / (student?.targetScore || 850)) * 100)}%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-500"
                                            style={{ width: `${Math.min(100, Math.round(((student?.currentScore || 0) / (student?.targetScore || 850)) * 100))}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Modal Trigger */}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full bg-indigo-600 hover:bg-indigo-500 font-bold">
                                            목표 상세 현황 보기
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-5xl bg-slate-950 border-slate-800 text-white max-h-[90vh] overflow-y-auto">
                                        <DialogTitle className="text-xl font-bold">
                                            {student?.userName} 학생의 목표 상세 현황
                                        </DialogTitle>
                                        {weaknessReport && (
                                            <div className="mt-4">
                                                <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden text-inter">
                                                    <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                                                    <div className="relative z-10">
                                                        <div className="mb-6">
                                                            <p className="text-slate-400 text-sm">
                                                                목표: <span className="text-white font-bold">{weaknessReport.targetScore}점</span>
                                                                (LC {weaknessReport.targetLCScore} / RC {weaknessReport.targetRCScore})
                                                            </p>
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
                                                    </div>
                                                </Card>
                                            </div>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            </Card>

                            <Card className="bg-slate-900 border-yellow-500/30 p-6 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <Trophy className="text-yellow-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">현재 랭킹 현황</h3>
                                </div>
                                <div className="space-y-3">
                                    {studentRankings.length === 0 ? (
                                        <div className="text-center py-6 text-slate-500 text-xs font-bold">
                                            이번 주 집계된 랭킹이 없습니다.
                                        </div>
                                    ) : (
                                        studentRankings.map((rank, i) => (
                                            <div key={i} className="flex items-center justify-between bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-500 uppercase leading-none mb-1">{rank.scope} {rank.type === 'total' ? '종합' : rank.type === 'voca' ? '단어' : '성실'}</p>
                                                    <p className="text-lg font-black italic tracking-tighter text-white">
                                                        RANK <span className={cn(
                                                            "text-2xl",
                                                            rank.rank === 1 ? "text-yellow-400" : rank.rank === 2 ? "text-slate-300" : rank.rank === 3 ? "text-amber-600" : "text-indigo-400"
                                                        )}>#{rank.rank}</span>
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    {rank.change !== 0 && (
                                                        <div className={cn(
                                                            "text-[10px] font-bold flex items-center justify-end px-1.5 py-0.5 rounded-full mb-1",
                                                            rank.change > 0 ? 'text-rose-400 bg-rose-400/10' : 'text-blue-400 bg-blue-400/10'
                                                        )}>
                                                            <TrendingUp className={cn("w-3 h-3 mr-0.5", rank.change < 0 && "rotate-180")} />
                                                            {Math.abs(rank.change)}
                                                        </div>
                                                    )}
                                                    <p className="text-[10px] font-bold text-slate-500">{rank.detail}</p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </Card>

                            <Card className="bg-slate-900 border-rose-500/30 p-6 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="text-rose-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">취약점 분석</h3>
                                </div>
                                <div className="space-y-3">
                                    {analysis?.topWeakness && analysis.topWeakness.code !== 'NONE' ? (
                                        <>
                                            <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-4">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline" className="bg-rose-500 text-white border-none text-[10px] h-5">TOP WEAKNESS</Badge>
                                                    <span className="text-rose-400 font-bold text-sm">{analysis.topWeakness.label}</span>
                                                </div>
                                                <p className="text-xs text-slate-400 leading-relaxed">{analysis.topWeakness.message}</p>
                                                <div className="mt-3 flex items-center justify-between text-[10px] font-bold">
                                                    <span className="text-slate-500">오답 비중</span>
                                                    <span className="text-rose-400">{analysis.topWeakness.percentage}%</span>
                                                </div>
                                            </div>

                                            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-4">
                                                <span className="text-indigo-400 font-bold text-sm block mb-1 uppercase tracking-wider text-[10px]">LC 학습 습관</span>
                                                <p className="text-xs text-slate-400 leading-relaxed">{analysis.lcHabit.message}</p>
                                                <div className="mt-2 flex items-center gap-1">
                                                    <Badge variant="outline" className="border-indigo-500/30 text-indigo-400 text-[10px]">{analysis.lcHabit.status}</Badge>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center py-10 bg-slate-950/50 rounded-xl border border-dashed border-slate-800">
                                            <Loader2 className="w-5 h-5 animate-spin mx-auto text-slate-700 mb-2" />
                                            <p className="text-xs text-slate-600 font-medium font-bold">분석 데이터 생성 중...</p>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>

                        {/* 2. Progress Overview (Grid) - Keep existing */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Object.entries(HOMEWORK_CONFIG).map(([key, config]) => {
                                const count = stats[key] || 0;
                                return (
                                    <ProgressCard
                                        key={key}
                                        title={config.label}
                                        value={`${(count / config.total * 100).toFixed(0)}%`}
                                        subValue={`${count}/${config.total}`}
                                        current={count}
                                        total={config.total}
                                        color={config.color as any}
                                        icon={config.icon}
                                    />
                                );
                            })}
                        </div>

                        {/* 3. Detailed History Table - Keep existing */}
                        <Card className="bg-slate-900 border-slate-800">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-indigo-500" />
                                    상세 학습 이력 (Timeline)
                                </CardTitle>
                                <CardDescription>최근 학습한 모든 내역이 표시됩니다.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {results.length === 0 ? (
                                    <div className="text-center py-12 text-slate-500">
                                        아직 완료된 학습 내역이 없습니다.
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {results.map((res, idx) => (
                                            <div key={res.id} className="flex items-center justify-between bg-slate-950/50 p-4 rounded-lg border border-slate-800 hover:border-indigo-500/30 transition-colors">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-900 rounded-lg border border-slate-800">
                                                        <span className="text-xs text-slate-500 font-bold">{format(res.timestamp?.toDate ? res.timestamp.toDate() : new Date(), 'MM/dd')}</span>
                                                        <span className="text-xs text-slate-600">{format(res.timestamp?.toDate ? res.timestamp.toDate() : new Date(), 'HH:mm')}</span>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-slate-200">{res.detail}</h4>
                                                        <Badge variant="outline" className="text-[10px] text-slate-500 border-slate-700 mt-1">{getTypeLabel(res.type)}</Badge>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xl font-black text-emerald-400">
                                                        {res.score}
                                                        <span className="text-xs text-slate-500 font-normal ml-0.5">/ {res.total}</span>
                                                    </div>
                                                    {res.score >= (res.total * 0.8) ? (
                                                        <span className="text-[10px] text-emerald-600 font-bold">PASS</span>
                                                    ) : (
                                                        <span className="text-[10px] text-rose-500 font-bold">REVIEW NEEDED</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
