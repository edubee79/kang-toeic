'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, ArrowLeft, Calendar, FileText, CheckCircle2, TrendingUp, Target, AlertTriangle, Zap, Send, Bell, BookOpen, PenSquare, Mic2, Headphones } from "lucide-react";
import Link from 'next/link';
import { format } from 'date-fns';
import { useParams, useRouter } from 'next/navigation';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { cn } from "@/lib/utils";

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

interface Student {
    id: string;
    userId: string;
    userName: string;
    className: string;
    universityName?: string;
    targetScore?: number;
    email?: string;
    phone?: string;
    fcmToken?: string;
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

    // Push Notification State
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

            // 1. Fetch Student Info
            const userRef = doc(db, "Winter_Users", studentId);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const data = userSnap.data();
                setStudent({
                    id: userSnap.id,
                    userId: data.userId,
                    userName: data.userName,
                    className: data.className,
                    universityName: data.universityName,
                    targetScore: data.targetScore || 850, // Default if not set
                    email: data.email,
                    phone: data.phone,
                    fcmToken: data.fcmToken // Fetch FCM Token
                });
            } else {
                console.error("Student not found");
            }

            // 2. Fetch Results History
            const qResults = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", studentId),
                orderBy("timestamp", "desc")
            );

            const resSnap = await getDocs(qResults);
            const resList: Result[] = [];
            const uniqueCounts: Record<string, Set<string>> = {};

            // Initialize sets
            Object.keys(HOMEWORK_CONFIG).forEach(k => uniqueCounts[k] = new Set());

            resSnap.forEach(doc => {
                const data = doc.data();
                resList.push({
                    id: doc.id,
                    type: data.type,
                    detail: data.detail || data.unit, // Normalize naming
                    unit: data.unit,
                    score: data.score,
                    total: data.total,
                    timestamp: data.timestamp,
                    className: data.className
                });

                // Calculate Stats (mimicking User Dashboard logic)
                const type = data.type || mapLegacyType(data.unit || "");
                const detail = data.detail || data.unit || "Unknown";

                if (uniqueCounts[type]) {
                    uniqueCounts[type].add(detail);
                }
            });

            // Also check legacy Voca from User doc if available (not doing here for simplicity, relying on Manager_Results)

            const finalStats: Record<string, number> = {};
            Object.keys(uniqueCounts).forEach(k => {
                finalStats[k] = uniqueCounts[k].size;
            });

            setResults(resList);
            setStats(finalStats);

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
                <Link href="/admin/results">
                    <Button variant="outline">돌아가기</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header & Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/results">
                            <Button variant="outline" className="flex items-center gap-2 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
                                <ArrowLeft className="w-4 h-4" />
                                <span className="hidden md:inline">목록으로</span>
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
                                STUDENT MONITOR
                                <Badge className="bg-indigo-600 text-white not-italic">{student.className}</Badge>
                            </h1>
                            <p className="text-slate-400 text-sm">학생별 상세 학습 이력 및 성취도 분석</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Profile & Push (1 Column) */}
                    <div className="space-y-6 lg:col-span-1">
                        {/* 1. Student Profile Card */}
                        <Card className="bg-slate-900 border-slate-800 overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-indigo-900/50 to-slate-900"></div>
                            <CardContent className="pt-8 relative z-10">
                                <div className="text-center mb-6">
                                    <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto flex items-center justify-center text-3xl font-bold shadow-xl border-4 border-slate-900 mb-3">
                                        {student.userName[0]}
                                    </div>
                                    <h2 className="text-2xl font-bold">{student.userName}</h2>
                                    <p className="text-slate-400">{student.userId}</p>
                                    <div className="flex justify-center gap-2 mt-2">
                                        <Badge variant="outline" className="border-slate-700 text-slate-400">{student.universityName}</Badge>
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

                        {/* 2. Push Notification Panel */}
                        <Card className="bg-slate-900 border-indigo-500/30">
                            <CardHeader className="pb-3 border-b border-slate-800">
                                <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-400">
                                    <Bell className="w-4 h-4" />
                                    개별 푸시 발송 (Push Notification)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <Textarea
                                    placeholder={`${student.userName} 학생에게 보낼 응원이나 경고 메시지를 입력하세요.`}
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

                        {/* 1. Target Score & Progress (Simulated Dashboard View) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="bg-slate-900 border-slate-800 p-6 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="text-indigo-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">목표 달성도</h3>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium mb-1">TARGET SCORE</p>
                                    <div className="text-3xl font-black text-white">{student.targetScore}<span className="text-base text-slate-500 ml-1">점</span></div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                                        <span>Current: 675 (Est.)</span>
                                        <span>78%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 rounded-full h-2">
                                        <div className="bg-indigo-500 h-2 rounded-full w-[78%]"></div>
                                    </div>
                                </div>
                            </Card>

                            <Card className="bg-slate-900 border-rose-500/30 p-6 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle className="text-rose-400 w-5 h-5" />
                                    <h3 className="text-lg font-bold text-white">취약점 분석</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="bg-rose-500/10 border border-rose-500/20 rounded-md p-3">
                                        <span className="text-rose-400 font-bold text-xs block mb-1">어휘력(Voca) 부족</span>
                                        <p className="text-xs text-slate-400">학습 진행률이 40% 미만입니다.</p>
                                    </div>
                                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-md p-3">
                                        <span className="text-amber-400 font-bold text-xs block mb-1">약점 태그: 가정법</span>
                                        <p className="text-xs text-slate-400">Part 5 오답률 상위 태그입니다.</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* 2. Progress Overview (Grid) */}
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

                        {/* 3. Detailed History Table */}
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
                                                        <span className="text-xs text-slate-500 font-bold">{format(res.timestamp.toDate(), 'MM/dd')}</span>
                                                        <span className="text-xs text-slate-600">{format(res.timestamp.toDate(), 'HH:mm')}</span>
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
