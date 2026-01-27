'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Users, Shield, Download, Search, ListFilter, Mic2, Headphones, BookOpen, PenSquare, FileText, GraduationCap, Upload, Trophy, BarChart3, Target, ChevronDown, ChevronUp, TrendingUp, ChevronRight } from "lucide-react";
import * as XLSX from 'xlsx';
import { cn } from "@/lib/utils";
import { isActualTest, mapToPartKey, calculateCorrectCount } from '@/lib/filters/actualTestFilter';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import { isAdmin } from '@/lib/adminAuth';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalStudents: 0,
        pendingStudents: 0,
        activeAssignments: 0,
        todayLogs: 0
    });
    const router = useRouter();
    const [students, setStudents] = useState<any[]>([]);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [filterClass, setFilterClass] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState<any>(null);
    const [averages, setAverages] = useState<any>({
        targetScore: 0, predictedTotal: 0, predictedLC: 0, predictedRC: 0,
        parts: {}
    });
    const [statsAverages, setStatsAverages] = useState<any>(null); // To store calculated avgs from fetchData

    useEffect(() => {
        const checkAdmin = () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.replace('/login');
                return;
            }
            const user = JSON.parse(userData);
            if (!isAdmin(user.username)) {
                alert("관리자 권한이 없습니다.");
                router.replace('/');
                return;
            }
            fetchData();
        };

        const fetchData = async () => {
            try {
                // Fetch Classes
                const classesQuery = query(collection(db, "Classes"), orderBy("name"));
                const classesSnapshot = await getDocs(classesQuery);
                const classList: { name: string }[] = [];
                classesSnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.name) classList.push({ name: data.name });
                });
                setClasses(classList);

                // Fetch Users
                const q = query(collection(db, "Winter_Users"), orderBy("registeredAt", "desc"));
                const usersSnapshot = await getDocs(q);
                const usersMap = new Map();

                usersSnapshot.forEach(doc => {
                    const userData = doc.data();
                    usersMap.set(userData.userId, {
                        ...userData,
                        logs: [],
                        stats: {
                            vocaCount: 0,
                            grammarCount: 0,
                            maxShadowSet: 0,
                            currents: {},
                            targets: {},
                            predictedLC: 0,
                            predictedRC: 0,
                            predictedTotal: 0
                        }
                    });
                });

                // Fetch Results (Recent first for latest score check)
                const resultsSnapshot = await getDocs(query(collection(db, "Manager_Results"), orderBy("timestamp", "desc")));

                // Fetch Assignments
                const assignSnapshot = await getDocs(query(collection(db, "Assignments")));

                let todayCount = 0;
                const todayStr = new Date().toDateString();

                resultsSnapshot.forEach(doc => {
                    const res = doc.data();
                    if (usersMap.has(res.studentId)) {
                        const user = usersMap.get(res.studentId);
                        user.logs.push(res);

                        // Check if log is today
                        if (res.timestamp?.toDate) {
                            const logDate = res.timestamp.toDate().toDateString();
                            if (logDate === todayStr) todayCount++;
                        }

                        // Calculate Latest Score per Part or Total
                        if (isActualTest(res)) {
                            const partKey = mapToPartKey(res);
                            const correctCount = calculateCorrectCount(res);

                            // If it's a full test points (usually > 200), store as total
                            if (correctCount > 200 && (user.stats.latestTotalScore === undefined)) {
                                user.stats.latestTotalScore = correctCount;
                            }

                            if (user.stats.currents[partKey] === undefined) {
                                user.stats.currents[partKey] = correctCount;
                            }
                        }
                    }
                });

                // Final Score Summaries & Status Counts
                const studentList: any[] = [];
                let pendingCount = 0;

                usersMap.forEach(user => {
                    if (user.status === 'pending') pendingCount++;
                    if (user.status !== 'approved') return;

                    // Normalize Targets
                    const pts = user.partTargets || {};
                    const targets: Record<string, number> = {
                        p1: pts.p1_goal || pts.p1 || 6,
                        p2: pts.p2_goal || pts.p2 || 25,
                        p3: pts.p3_goal || pts.p3 || 39,
                        p4: pts.p4_goal || pts.p4 || 30,
                        p5: pts.p5_goal || pts.p5 || 30,
                        p6: pts.p6_goal || pts.p6 || 16,
                        p7s: pts.p7s_goal || pts.p7_single || 29,
                        p7d: pts.p7d_goal || pts.p7_double || 25
                    };
                    user.stats.targets = targets;

                    // Standardize Currents (combine p7 if needed for calculation)
                    const c = user.stats.currents;
                    const lcCount = (c.part1_test || 0) + (c.part2_test || 0) + (c.part3_test || 0) + (c.part4_test || 0);
                    const rcCount = (c.part5_test || 0) + (c.part6_test || 0) + (c.part7_single || 0) + (c.part7_double || 0);

                    user.stats.predictedTotal = user.stats.latestTotalScore || 0;

                    studentList.push(user);
                });

                // Calculate Rankings by Class
                const classesInList = [...new Set(studentList.map(s => s.className))];
                classesInList.forEach(cls => {
                    const classStudents = studentList.filter(s => s.className === cls)
                        .sort((a, b) => b.stats.predictedTotal - a.stats.predictedTotal);

                    classStudents.forEach((s, idx) => {
                        // Handle ties (optional, but straightforward)
                        if (idx > 0 && classStudents[idx - 1].stats.predictedTotal === s.stats.predictedTotal) {
                            s.stats.rank = classStudents[idx - 1].stats.rank;
                        } else {
                            s.stats.rank = idx + 1;
                        }
                        s.stats.classTotal = classStudents.length;
                    });
                });

                setStudents(studentList);
                setStats({
                    totalStudents: studentList.length,
                    pendingStudents: pendingCount,
                    activeAssignments: assignSnapshot.size,
                    todayLogs: todayCount
                });

                // Calculate Initial Averages for all approved students
                if (studentList.length > 0) {
                    const count = studentList.length;
                    const sums = studentList.reduce((acc, s) => {
                        acc.targetScore += (s.targetScore || 850);
                        acc.predictedLC += s.stats.predictedLC;
                        acc.predictedRC += s.stats.predictedRC;
                        acc.predictedTotal += s.stats.predictedTotal;

                        // 안전하게 처리: 데이터가 없는 경우 빈 객체로 대체
                        Object.entries(s.stats?.displayCurrents || {}).forEach(([p, val]) => {
                            acc.parts[p] = (acc.parts[p] || 0) + (val as number);
                        });
                        Object.entries(s.stats?.targets || {}).forEach(([p, val]) => {
                            acc.partTargets[p] = (acc.partTargets[p] || 0) + (val as number);
                        });
                        return acc;
                    }, { targetScore: 0, predictedTotal: 0, predictedLC: 0, predictedRC: 0, parts: {}, partTargets: {} });

                    const avgParts: Record<string, string> = {};
                    Object.keys(sums.parts).forEach(p => {
                        avgParts[p] = `${(sums.parts[p] / count).toFixed(1)} / ${(sums.partTargets[p] / count).toFixed(1)}`;
                    });

                    setStatsAverages({
                        targetScore: Math.round(sums.targetScore / count),
                        predictedTotal: Math.round(sums.predictedTotal / count),
                        predictedLC: Math.round(sums.predictedLC / count),
                        predictedRC: Math.round(sums.predictedRC / count),
                        parts: avgParts
                    });
                }

            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        checkAdmin();
    }, [router]);

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
        const data = filteredStudents.map(s => ({
            Class: s.className || 'Unknown',
            Name: s.name || s.username || 'Unknown',
            ID: s.userId
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "Toeic_Students_Report.xlsx");
    };

    const getStudentStats = (student: any) => {
        return {
            ...student.stats,
            logs: student.logs || []
        };
    };

    const filteredStudents = useMemo(() => {
        return students
            .filter(student => {
                const matchesClass = filterClass === 'all' || (student.className && student.className === filterClass);
                const nameMatch = (student.userName || student.name || '').toLowerCase().includes(searchTerm.toLowerCase());
                const idMatch = (student.userId || '').toLowerCase().includes(searchTerm.toLowerCase());
                const userMatch = (student.username || '').toLowerCase().includes(searchTerm.toLowerCase());
                return matchesClass && (nameMatch || idMatch || userMatch);
            })
            .sort((a, b) => {
                // First by rank (if same class), else by predictedTotal
                return b.stats.predictedTotal - a.stats.predictedTotal;
            });
    }, [students, filterClass, searchTerm]);

    // Move filtering logic here, but KEEP THE AVERAGES UPDATER SEPARATE AND STABLE
    const filteredStats = useMemo(() => {
        if (filteredStudents.length === 0) return null;
        const count = filteredStudents.length;
        const sums = filteredStudents.reduce((acc, s) => {
            acc.targetScore += (s.targetScore || 850);
            acc.predictedLC += s.stats.predictedLC;
            acc.predictedRC += s.stats.predictedRC;
            acc.predictedTotal += s.stats.predictedTotal;

            // 안전하게 처리: 데이터가 없는 경우 빈 객체로 대체
            Object.entries(s.stats?.displayCurrents || {}).forEach(([p, val]) => {
                acc.parts[p] = (acc.parts[p] || 0) + (val as number);
            });
            Object.entries(s.stats?.targets || {}).forEach(([p, val]) => {
                acc.partTargets[p] = (acc.partTargets[p] || 0) + (val as number);
            });
            return acc;
        }, { targetScore: 0, predictedTotal: 0, predictedLC: 0, predictedRC: 0, parts: {}, partTargets: {} });

        const avgParts: Record<string, string> = {};
        Object.keys(sums.parts).forEach(p => {
            avgParts[p] = `${(sums.parts[p] / count).toFixed(1)} / ${(sums.partTargets[p] / count).toFixed(1)}`;
        });

        return {
            targetScore: Math.round(sums.targetScore / count),
            predictedTotal: Math.round(sums.predictedTotal / count),
            predictedLC: Math.round(sums.predictedLC / count),
            predictedRC: Math.round(sums.predictedRC / count),
            parts: avgParts
        };
    }, [filteredStudents]);

    // Use derived state for display
    const currentAverages = filteredStats || statsAverages;

    if (loading) return <div className="p-8 text-center text-slate-500 animate-pulse font-bold">데이터 분석 중...</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 space-y-8">
            <header className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">강쌤토익 관리자</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-2 flex-[2]">
                        <Link href="/"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">홈으로</Button></Link>
                        <Link href="/admin/registrations">
                            <Button variant="outline" size="sm" className={`font-bold h-10 px-4 ${stats.pendingStudents > 0 ? 'border-rose-500 text-rose-600 bg-rose-50' : 'border-slate-300 text-slate-700'}`}>
                                가입 승인 {stats.pendingStudents > 0 && <span className="ml-1 px-2 py-0.5 bg-rose-500 text-white text-[11px] rounded-full">{stats.pendingStudents}</span>}
                            </Button>
                        </Link>
                        <Link href="/admin/questions"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">문제 데이터 관리</Button></Link>
                        <Link href="/admin/classes"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">반(Class) 관리</Button></Link>
                        <Link href="/admin/schools"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">학교(Univ) 관리</Button></Link>
                        <Link href="/admin/homework"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">숙제 결과 전체보기</Button></Link>
                        <Link href="/admin/assignments"><Button variant="outline" size="sm" className="font-bold border-indigo-500 text-indigo-700 h-10 px-4">숙제 내기 (Assign)</Button></Link>
                        <Link href="/admin/mock-reset"><Button variant="outline" size="sm" className="font-bold border-rose-500 text-rose-600 h-10 px-4">모의고사 RESET</Button></Link>
                        <Link href="/admin/mock-report"><Button variant="outline" size="sm" className="font-bold border-indigo-500 text-indigo-700 h-10 px-4">모의고사 REPORT</Button></Link>
                        <Link href="/admin/rankings"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">랭킹 관리</Button></Link>
                        <Link href="/admin/settings"><Button variant="outline" size="sm" className="font-bold border-slate-300 text-slate-700 h-10 px-4">설정</Button></Link>

                        <div className="w-[140px] ml-2">
                            <Select value={filterClass} onValueChange={setFilterClass}>
                                <SelectTrigger className="h-10 text-sm font-bold bg-white border-slate-400">
                                    <SelectValue placeholder="반 선택" />
                                </SelectTrigger>
                                <SelectContent className="bg-white text-slate-900 border-slate-200">
                                    <SelectItem value="all">전체보기</SelectItem>
                                    {classes.map(cls => (
                                        <SelectItem key={cls.name} value={cls.name}>{cls.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button onClick={handleExport} variant="outline" size="sm" className="font-bold border-emerald-500 text-emerald-700 h-10 px-4">엑셀 다운로드</Button>
                    </div>
                </div>
            </header>


            {/* Student List Section */}
            <div className="space-y-6">
                {/* Student List */}
                <Card className="col-span-1 lg:col-span-3 border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                    <CardHeader className="px-8 pt-8 flex flex-row items-center justify-between">
                        <CardTitle className="text-lg font-black uppercase text-slate-400 tracking-tight">수강생 목록 ({filteredStudents.length}명)</CardTitle>
                    </CardHeader>

                    <CardContent className="p-0">
                        {/* Student Search Bar */}
                        <div className="px-8 pb-6">
                            <div className="relative max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <Input
                                    placeholder="찾으시는 학생 이름을 입력하세요..."
                                    className="pl-12 h-12 text-base font-bold bg-slate-50 border-slate-100 rounded-2xl focus:bg-white transition-all shadow-sm"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="max-h-[800px] overflow-auto border-t border-slate-50">
                            <Table>
                                <TableHeader className="bg-slate-50 sticky top-0">
                                    <TableRow>
                                        <TableHead className="w-[180px] font-black text-base py-6">이름 / 반</TableHead>
                                        <TableHead className="w-[100px] font-black text-base">석차</TableHead>
                                        <TableHead className="w-[200px] font-black text-base">성적 (예측 / 목표)</TableHead>
                                        <TableHead className="w-[100px] text-right font-black text-base">분석</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredStudents.map((student) => {
                                        const stats = getStudentStats(student);
                                        return (
                                            <Dialog key={student.userId}>
                                                <DialogTrigger asChild>
                                                    <TableRow className="cursor-pointer hover:bg-slate-50 h-28" onClick={() => setSelectedStudent({ ...student, stats })}>
                                                        <TableCell className="py-6">
                                                            <div className="flex flex-col">
                                                                <span className="font-black text-slate-900 text-xl leading-tight">
                                                                    {student.userName || student.name || student.username}
                                                                </span>
                                                                <div className="flex items-center gap-2 mt-1.5">
                                                                    <span className="font-bold text-indigo-600 text-[13px] bg-indigo-50 px-1.5 rounded">{student.className || "반 미지정"}</span>
                                                                    <span className="text-xs text-slate-400 font-medium tracking-tight">{student.userId}</span>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex items-baseline gap-1">
                                                                <span className="text-2xl font-black text-rose-500">{student.stats.rank}</span>
                                                                <span className="text-xs font-bold text-slate-400">위</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-col gap-1.5">
                                                                <div className="flex items-baseline gap-1.5">
                                                                    <div className="text-2xl font-black text-slate-700 group-hover:text-rose-600 uppercase">Reset</div>
                                                                    <span className="text-sm font-bold text-slate-400">/ {student.targetScore || 850}점</span>
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <span className="text-[11px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded">LC {student.stats.predictedLC}</span>
                                                                    <span className="text-[11px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">RC {student.stats.predictedRC}</span>
                                                                </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right px-6">
                                                            <Link href={`/admin/results/${student.userId}`} onClick={(e) => e.stopPropagation()}>
                                                                <Button variant="outline" size="sm" className="font-bold border-slate-200 hover:bg-indigo-50 hover:text-indigo-600">상세보기</Button>
                                                            </Link>
                                                        </TableCell>
                                                    </TableRow>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-[2.5rem] p-0 overflow-hidden text-slate-900">
                                                    <DialogHeader className="p-8 border-b bg-white/50">
                                                        <DialogTitle className="text-2xl font-black italic text-slate-900">
                                                            {student.userName || student.name || student.username} <span className="text-slate-400 text-sm not-italic ml-2">({student.className}반 | {student.userId})</span>
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <div className="p-8 overflow-y-auto max-h-[70vh]">

                                                        <div className="flex items-center justify-between mb-4">
                                                            <h3 className="text-sm font-black uppercase text-slate-400 italic">Level Test & Activity Logs</h3>
                                                            <Link href={`/admin/results/${student.userId}`}>
                                                                <Button variant="outline" size="sm" className="text-[10px] font-bold py-0.5 h-6">전체 결과 상세보기</Button>
                                                            </Link>
                                                        </div>
                                                        <div className="space-y-3">
                                                            {stats.logs && stats.logs.length > 0 ? (
                                                                stats.logs.map((log: any, i: number) => {
                                                                    const isLevelTest = (log.unit || '').includes('Level');
                                                                    return (
                                                                        <div key={i} className={cn(
                                                                            "flex justify-between items-center p-4 rounded-2xl border transition-all",
                                                                            isLevelTest ? "bg-indigo-50 border-indigo-200 shadow-sm" : "bg-slate-50 border-slate-100"
                                                                        )}>
                                                                            <div>
                                                                                <div className="flex items-center gap-2">
                                                                                    <p className={cn("text-xs font-black uppercase", isLevelTest ? "text-indigo-600" : "text-slate-500")}>
                                                                                        {log.unit}
                                                                                    </p>
                                                                                    {isLevelTest && <Badge className="bg-indigo-600 text-[8px] h-3 px-1">LEVEL TEST</Badge>}
                                                                                </div>
                                                                                <p className="text-[10px] font-bold text-slate-400" suppressHydrationWarning>
                                                                                    {log.timestamp?.toDate ? new Date(log.timestamp.toDate()).toLocaleString() : 'N/A'}
                                                                                </p>
                                                                            </div>
                                                                            <div className="text-right">
                                                                                <span className={cn("text-sm font-black", isLevelTest ? "text-indigo-700" : "text-indigo-600")}>
                                                                                    {log.score}
                                                                                </span>
                                                                                <span className="text-[10px] text-slate-400">/{log.total}</span>
                                                                                {log.type && <p className="text-[8px] font-bold text-slate-300 uppercase leading-none">{log.type}</p>}
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })
                                                            ) : (
                                                                <div className="text-center py-8 text-slate-400 text-xs font-bold border-2 border-dashed border-slate-100 rounded-3xl">
                                                                    활동 내역이 없습니다.
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div >
    );
}
