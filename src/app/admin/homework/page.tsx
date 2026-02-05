'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Download, Search, ChevronRight, CheckCircle2, XCircle, AlertCircle, ArrowLeft, Trash2, LayoutDashboard, Grid } from "lucide-react";
import Link from 'next/link';
import { format } from 'date-fns';

interface Student {
    id: string; // Document ID (usually same as userId but let's be safe)
    userId: string;
    userName: string;
    className: string;
}

interface Assignment {
    id: string;
    type: string;
    typeLabel?: string;
    detail: string;
    createdAt: any;
}

interface Result {
    studentId: string;
    type: string;
    detail: string; // unit
    score: number;
    total?: number;
    timestamp: any;
}

interface StudentStats {
    totalCompleted: number;
    totalRate: number;
    recentRate: number; // Last 5
    missedCount: number;
    status: 'good' | 'warning' | 'danger';
}

export default function HomeworkResultsPage() {
    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [currentView, setCurrentView] = useState<'dashboard' | 'matrix'>('dashboard');
    const [sortBy, setSortBy] = useState<'userName' | 'recentRate' | 'totalRate' | 'missedCount'>('userName');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Data State
    const [students, setStudents] = useState<Student[]>([]);
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [resultsMap, setResultsMap] = useState<Record<string, Result>>({}); // key: studentId_type_detail

    // Delete Dialog
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<Student | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const q = query(collection(db, "Classes"), orderBy("name"));
            const snapshot = await getDocs(q);
            const list: { name: string }[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.name) list.push({ name: data.name });
            });
            setClasses(list);
        } catch (error) {
            console.error("Error fetching classes:", error);
        }
    };

    const fetchClassData = async (className: string) => {
        // Ensure className is valid
        if (!className) {
            console.error("fetchClassData called with invalid className:", className);
            return;
        }

        setLoading(true);
        setSelectedClass(className);

        try {

            // 1. Fetch Students
            const qStudents = query(
                collection(db, "Winter_Users"),
                where("className", "==", className)
                // Removed orderBy("userName") to avoid creating a Composite Index manually
            );
            const snapStudents = await getDocs(qStudents);
            const studentList: Student[] = [];
            snapStudents.forEach(doc => {
                const data = doc.data();
                studentList.push({
                    id: doc.id,
                    userId: data.userId,
                    userName: data.userName,
                    className: data.className
                });
            });

            // Client-side Sort
            studentList.sort((a, b) => a.userName.localeCompare(b.userName));

            setStudents(studentList);

            // 2. Fetch Assignments (Targeted to this class OR all)
            // Note: Simple query for now, might need more complex filtering later
            const qAssignments = query(
                collection(db, "Assignments"),
                orderBy("createdAt", "desc")
                // We can filter by targetClass client-side or assume admins want to see recent 20 assignments
            );
            const snapAssignments = await getDocs(qAssignments);
            const assignList: Assignment[] = [];

            // Limit details for matrix view mainly, but need all for stats ideally?
            // User context: "Home work monitor... overall vs recent"
            // Let's fetch reasonably recent ones, distinct by type/detail?
            // For now, let's keep fetching "DESC" and take top 20 for matrix, 
            // but use maybe top 5 for recent stats.

            let count = 0;
            snapAssignments.forEach(doc => {
                const data = doc.data();

                // Skip AI-generated assignments in the main homework monitor
                if (data.isAiGenerated === true) return;

                // Filter: Include if targetClass is 'all', matches class, or is a weakness review for someone in this class
                if (data.targetClass === className || data.targetClass === 'all' || !data.targetClass) {
                    if (count < 30) { // Fetch up to 30 recent assignments
                        assignList.push({
                            id: doc.id,
                            type: data.type,
                            typeLabel: data.typeLabel,
                            detail: data.detail,
                            createdAt: data.createdAt
                        });
                        count++;
                    }
                }
            });
            // Reverse to show oldest -> newest left to right? Or Newest first?
            // Usually Matrix shows newest on right or left. Let's keep desc order (Newest Left)
            setAssignments(assignList);

            // 3. Fetch Results
            const qResults = query(
                collection(db, "Manager_Results"),
                where("className", "==", className)
            );
            const snapResults = await getDocs(qResults);
            const rMap: Record<string, Result> = {};

            snapResults.forEach(doc => {
                const data = doc.data();
                const type = data.type;
                const detail = data.detail || data.unit;

                // Key: studentId + type + detail
                const key = `${data.studentId}_${type}_${detail}`;

                if (!rMap[key] || rMap[key].timestamp < data.timestamp) {
                    rMap[key] = {
                        studentId: data.studentId,
                        type: type,
                        detail: detail,
                        score: data.score,
                        total: data.total,
                        timestamp: data.timestamp
                    };
                }
            });
            setResultsMap(rMap);

        } catch (error) {
            console.error("Error fetching class data:", error);
        } finally {
            setLoading(false);
        }
    };

    // --- Stats Calculation ---
    const calculateStats = (student: Student): StudentStats => {
        let completed = 0;
        let recentCompleted = 0;

        // Use all fetched assignments (up to 30) for Total Rate
        assignments.forEach(assign => {
            const key = `${student.id}_${assign.type}_${assign.detail}`;
            let isDone = !!resultsMap[key];

            // Level Test Mapping (Backward compatibility)
            if (!isDone && assign.type === 'level_test') {
                // Check if any part (like p1_test or p5_test) exists for LevelTest_9A
                const altKey = `${student.id}_part1_test_LevelTest_${assign.detail.toUpperCase()}`;
                const altKey2 = `${student.id}_part5_test_LevelTest_${assign.detail.toUpperCase()}`;
                if (resultsMap[altKey] || resultsMap[altKey2]) isDone = true;
            }

            if (isDone) {
                completed++;
            }
        });

        // Use ONLY top 5 recent assignments for Recent Rate
        const recentAssignments = assignments.slice(0, 5);
        recentAssignments.forEach(assign => {
            const key = `${student.id}_${assign.type}_${assign.detail}`;
            let isDone = !!resultsMap[key];

            if (!isDone && assign.type === 'level_test') {
                const altKey = `${student.id}_part1_test_LevelTest_${assign.detail.toUpperCase()}`;
                const altKey2 = `${student.id}_part5_test_LevelTest_${assign.detail.toUpperCase()}`;
                if (resultsMap[altKey] || resultsMap[altKey2]) isDone = true;
            }

            if (isDone) {
                recentCompleted++;
            }
        });

        const totalRate = assignments.length > 0 ? (completed / assignments.length) * 100 : 0;
        const recentRate = recentAssignments.length > 0 ? (recentCompleted / recentAssignments.length) * 100 : 0;
        const missedCount = assignments.length - completed;

        let status: 'good' | 'warning' | 'danger' = 'good';
        if (recentRate < 50) status = 'danger';
        else if (recentRate < 80) status = 'warning';

        return { totalCompleted: completed, totalRate, recentRate, missedCount, status };
    };

    const studentsWithStats = students.map(s => ({ ...s, stats: calculateStats(s) }));

    const handleSort = (field: typeof sortBy) => {
        if (sortBy === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortOrder(field === 'userName' ? 'asc' : 'desc'); // Default to desc for rates/counts
        }
    };

    const sortedStudents = [...studentsWithStats].sort((a, b) => {
        let valA: any, valB: any;
        if (fieldIsStat(sortBy)) {
            valA = a.stats[sortBy];
            valB = b.stats[sortBy];
        } else {
            valA = a[sortBy];
            valB = b[sortBy];
        }

        if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    function fieldIsStat(field: string): field is keyof StudentStats {
        return ['recentRate', 'totalRate', 'missedCount'].includes(field);
    }

    const SortIcon = ({ field }: { field: typeof sortBy }) => {
        if (sortBy !== field) return <AlertCircle className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity ml-1" />;
        return sortOrder === 'asc' ?
            <AlertCircle className="w-3 h-3 text-indigo-400 ml-1 rotate-180" /> :
            <AlertCircle className="w-3 h-3 text-indigo-400 ml-1" />;
    };

    // --- Delete Logic ---
    const confirmDelete = (student: Student) => {
        setUserToDelete(student);
        setDeleteDialogOpen(true);
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;
        setIsDeleting(true);
        try {
            await deleteDoc(doc(db, "Winter_Users", userToDelete.id));
            // Optimization: Remove locally instead of refetching all
            setStudents(prev => prev.filter(s => s.id !== userToDelete.id));
            setDeleteDialogOpen(false);
            setUserToDelete(null);
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleSendPush = () => {
        // Placeholder
        alert("푸시 알림 기능 준비 중입니다.");
    };

    const handleExcelExport = () => {
        import('xlsx').then(XLSX => {
            const wb = XLSX.utils.book_new();

            const data = studentsWithStats.map(student => {
                const row: any = {
                    '이름': student.userName,
                    'ID': student.userId,
                    '최근 달성률': `${Math.round(student.stats.recentRate)}%`,
                    '전체 달성률': `${Math.round(student.stats.totalRate)}%`,
                    '미제출': student.stats.missedCount,
                };

                assignments.forEach(assign => {
                    const key = `${student.id}_${assign.type}_${assign.detail}`;
                    const customKey = `${assign.detail}`;
                    if (resultsMap[key]) {
                        row[customKey] = resultsMap[key].score >= 0 ? resultsMap[key].score : 'Pass';
                    } else {
                        row[customKey] = '-';
                    }
                });
                return row;
            });

            const ws = XLSX.utils.json_to_sheet(data);
            XLSX.utils.book_append_sheet(wb, ws, "성적표");
            XLSX.writeFile(wb, `Homework_Results_${selectedClass || 'All'}_${format(new Date(), 'yyyyMMdd')}.xlsx`);
        });
    };

    const StatusBadge = ({ status }: { status: string }) => {
        if (status === 'danger') return <Badge className="bg-rose-500 hover:bg-rose-600">위험 (Danger)</Badge>;
        if (status === 'warning') return <Badge className="bg-amber-500 hover:bg-amber-600 text-black">경고 (Warning)</Badge>;
        return <Badge className="bg-emerald-500 hover:bg-emerald-600">양호 (Good)</Badge>;
    };

    const getScoreCell = (studentId: string, assign: Assignment) => {
        const key = `${studentId}_${assign.type}_${assign.detail}`;
        let result = resultsMap[key];

        // Level Test Look-up
        if (!result && assign.type === 'level_test') {
            const altKey = `${studentId}_part5_test_LevelTest_${assign.detail.toUpperCase()}`;
            result = resultsMap[altKey]; // Use P5 score as representative if available
        }

        if (!result) return <div className="text-slate-700 text-xs">-</div>;

        let colorClass = "text-emerald-400";
        if (assign.type === 'voca' && result.score < 80) colorClass = "text-rose-400";

        return (
            <div className={`font-bold ${colorClass}`}>
                {result.score >= 0 ? result.score : <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6">
            <div className="max-w-[1600px] mx-auto space-y-6">
                {/* Header & Controls */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 border-b border-slate-800 pb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/dashboard">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
                                <CheckCircle2 className="text-indigo-500 w-8 h-8" />
                                HOMEWORK MONITOR
                            </h1>
                            <p className="text-slate-400 mt-1">실시간 과제 제출 현황 및 학생 관리 관제 센터</p>
                        </div>
                    </div>

                    <div className="flex gap-3 bg-slate-900/50 p-2 rounded-xl border border-slate-800/50 backdrop-blur-sm">
                        <Select value={selectedClass} onValueChange={fetchClassData}>
                            <SelectTrigger className="w-[240px] h-12 bg-slate-950 border-slate-700 text-lg font-bold">
                                <SelectValue placeholder="반 선택 (Select Class)" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-700 text-white">
                                {classes.map((cls) => (
                                    <SelectItem key={cls.name} value={cls.name}>{cls.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <div className="w-[1px] bg-slate-700 h-12 mx-2"></div>

                        <Button variant="outline" className="h-12 px-6 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800" onClick={handleExcelExport}>
                            <Download className="w-4 h-4 mr-2" /> 엑셀 다운로드
                        </Button>
                        <Button className="h-12 px-6 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" onClick={handleSendPush}>
                            📲 푸시 발송
                        </Button>
                    </div>
                </div>

                <Tabs value={currentView} onValueChange={(v) => setCurrentView(v as any)} className="w-full">
                    <TabsList className="bg-slate-900 border border-slate-800 w-full justify-start h-14 p-1">
                        <TabsTrigger value="dashboard" className="h-12 px-8 text-base font-bold data-[state=active]:bg-indigo-600 data-[state=active]:text-white transition-all">
                            <LayoutDashboard className="w-5 h-5 mr-2" /> 종합 관제 (Overall Monitor)
                        </TabsTrigger>
                        <TabsTrigger value="matrix" className="h-12 px-8 text-base font-bold data-[state=active]:bg-slate-800 data-[state=active]:text-white transition-all">
                            <Grid className="w-5 h-5 mr-2" /> 상세 내역 (Detail Matrix)
                        </TabsTrigger>
                    </TabsList>

                    {/* Dashboard Tab */}
                    <TabsContent value="dashboard" className="space-y-4 mt-6">
                        <Card className="bg-slate-900 border-slate-800">
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle>종합 학습 현황</CardTitle>
                                    <CardDescription>최근 5개 과제 기준 달성률 및 위험군 분석</CardDescription>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white transition-all font-bold"
                                    onClick={() => {
                                        setSortBy('totalRate');
                                        setSortOrder('asc');
                                    }}
                                >
                                    ⚠️ 숙제 미달 위험군 우선순위 정렬
                                </Button>
                            </CardHeader>
                            <CardContent>
                                {loading && <div className="py-8 text-center text-slate-500"><Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />데이터 분석 중...</div>}
                                {!loading && selectedClass && studentsWithStats.length === 0 && <div className="py-12 text-center text-slate-500">학생 데이터가 없습니다.</div>}

                                {!loading && studentsWithStats.length > 0 && (
                                    <Table>
                                        <TableHeader className="bg-slate-950">
                                            <TableRow className="border-slate-800">
                                                <TableHead
                                                    className="w-[150px] cursor-pointer hover:text-indigo-400 group transition-colors"
                                                    onClick={() => handleSort('userName')}
                                                >
                                                    <div className="flex items-center">
                                                        학생 정보
                                                        <SortIcon field="userName" />
                                                    </div>
                                                </TableHead>
                                                <TableHead className="w-[120px]">상태 (Risk)</TableHead>
                                                <TableHead
                                                    className="cursor-pointer hover:text-indigo-400 group transition-colors"
                                                    onClick={() => handleSort('recentRate')}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col">
                                                            <span>최근 과제 진행률</span>
                                                            <span className="text-[10px] font-normal text-slate-400">Latest 5 Assignments</span>
                                                        </div>
                                                        <SortIcon field="recentRate" />
                                                    </div>
                                                </TableHead>
                                                <TableHead
                                                    className="cursor-pointer hover:text-indigo-400 group transition-colors"
                                                    onClick={() => handleSort('totalRate')}
                                                >
                                                    <div className="flex items-center">
                                                        <div className="flex flex-col">
                                                            <span>전체 과제 진행률</span>
                                                            <span className="text-[10px] font-normal text-slate-400">Total Progress ({assignments.length})</span>
                                                        </div>
                                                        <SortIcon field="totalRate" />
                                                    </div>
                                                </TableHead>
                                                <TableHead
                                                    className="w-[100px] text-center cursor-pointer hover:text-indigo-400 group transition-colors"
                                                    onClick={() => handleSort('missedCount')}
                                                >
                                                    <div className="flex items-center justify-center">
                                                        미제출
                                                        <SortIcon field="missedCount" />
                                                    </div>
                                                </TableHead>
                                                <TableHead className="w-[100px] text-right">관리</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {sortedStudents.map(student => (
                                                <TableRow key={student.id} className="border-slate-800 hover:bg-slate-800/50">
                                                    <TableCell>
                                                        <Link href={`/admin/results/${student.id}`} className="group">
                                                            <div className="font-bold text-base group-hover:text-indigo-400 group-hover:underline decoration-indigo-500/50 underline-offset-4 transition-colors">
                                                                {student.userName}
                                                            </div>
                                                            <div className="text-xs text-slate-500 group-hover:text-indigo-500/70">{student.userId}</div>
                                                        </Link>
                                                    </TableCell>
                                                    <TableCell>
                                                        <StatusBadge status={student.stats.status} />
                                                    </TableCell>
                                                    <TableCell className="w-[30%]">
                                                        <div className="flex items-center gap-3">
                                                            <Progress value={student.stats.recentRate} className={`h-3 w-full ${student.stats.recentRate < 50 ? 'bg-rose-950' : 'bg-slate-950'}`} indicatorClassName={student.stats.recentRate < 50 ? 'bg-rose-500' : student.stats.recentRate < 80 ? 'bg-amber-500' : 'bg-emerald-500'} />
                                                            <span className={`font-mono font-bold w-12 text-right ${student.stats.recentRate < 50 ? 'text-rose-500' : 'text-slate-200'}`}>{Math.round(student.stats.recentRate)}%</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="w-[30%]">
                                                        <div className="flex items-center gap-3">
                                                            <Progress value={student.stats.totalRate} className="h-3 w-full bg-slate-950" indicatorClassName="bg-indigo-500" />
                                                            <span className="font-mono font-bold w-12 text-right text-slate-400">{Math.round(student.stats.totalRate)}%</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-center">
                                                        {student.stats.missedCount > 0 ? (
                                                            <Badge variant="outline" className="border-rose-500/30 text-rose-500">{student.stats.missedCount}건</Badge>
                                                        ) : (
                                                            <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 text-xs">완료</Badge>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-rose-500 hover:bg-rose-500/10" onClick={() => confirmDelete(student)}>
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Matrix Tab (Existing View) */}
                    <TabsContent value="matrix" className="mt-6">
                        <Card className="bg-slate-900 border-slate-800 overflow-hidden">
                            <CardHeader>
                                <CardTitle className="flex justify-between">
                                    <span>상세 제출 내역</span>
                                    {assignments.length > 20 && <span className="text-sm text-amber-500 font-normal">* 최근 30개 과제만 표시됩니다.</span>}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 overflow-x-auto">
                                {!loading && students.length > 0 && (
                                    <Table>
                                        <TableHeader className="bg-slate-950">
                                            {/* 1st Header Row: Date Groups */}
                                            <TableRow className="border-slate-800 bg-slate-950/50">
                                                <TableHead className="w-[120px] bg-slate-950 sticky left-0 z-30 border-r border-slate-800"></TableHead>
                                                {(() => {
                                                    const groups: { date: string, count: number }[] = [];
                                                    assignments.forEach(a => {
                                                        // Fix: Handle both Firestore Timestamp and JS Date
                                                        const validDate = a.createdAt && typeof a.createdAt.toDate === 'function'
                                                            ? a.createdAt.toDate()
                                                            : a.createdAt;

                                                        const d = format(validDate, 'MM/dd');
                                                        if (groups.length > 0 && groups[groups.length - 1].date === d) {
                                                            groups[groups.length - 1].count++;
                                                        } else {
                                                            groups.push({ date: d, count: 1 });
                                                        }
                                                    });
                                                    return groups.map((g, i) => (
                                                        <TableHead key={i} colSpan={g.count} className="text-center text-[10px] font-black text-indigo-400 border-r border-slate-800/50 h-8 uppercase tracking-tighter">
                                                            {g.date} RELEASED
                                                        </TableHead>
                                                    ));
                                                })()}
                                            </TableRow>
                                            {/* 2nd Header Row: Part & Detail */}
                                            <TableRow className="border-slate-800 hover:bg-slate-950">
                                                <TableHead className="w-[120px] font-bold text-white bg-slate-950 sticky left-0 z-20 border-r border-slate-800">이름</TableHead>
                                                {assignments.map(assign => {
                                                    const shortLabel = (assign.typeLabel || assign.type)
                                                        .replace('단어 암기', 'VOCA')
                                                        .replace('문법 (Grammar)', 'GRAMMAR')
                                                        .replace('쉐도잉', 'SHD')
                                                        .replace('실전', 'TEST')
                                                        .replace('RC Part 7 ', 'P7 ')
                                                        .replace('LC Part ', 'P')
                                                        .split(' (')[0];

                                                    return (
                                                        <TableHead key={assign.id} className="text-center min-w-[90px] p-2 border-r border-slate-800/50 bg-slate-900/30">
                                                            <div className="flex flex-col gap-0.5">
                                                                <div className="text-[9px] text-indigo-300 font-black uppercase leading-none opacity-70 mb-0.5">
                                                                    {shortLabel}
                                                                </div>
                                                                <div className="font-black text-[11px] text-white truncate max-w-[85px] leading-tight" title={assign.detail}>
                                                                    {assign.detail}
                                                                </div>
                                                            </div>
                                                        </TableHead>
                                                    );
                                                })}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {sortedStudents.map(student => (
                                                <TableRow key={student.id} className="border-slate-800 hover:bg-slate-800/30">
                                                    <TableCell className="font-bold text-white bg-slate-900 sticky left-0 z-10 border-r border-slate-800">
                                                        <Link href={`/admin/results/${student.id}`} className="hover:text-indigo-400 hover:underline decoration-indigo-500/50 underline-offset-4">
                                                            {student.userName}
                                                        </Link>
                                                    </TableCell>
                                                    {assignments.map(assign => (
                                                        <TableCell key={assign.id} className="text-center p-2 border-r border-slate-800/50">
                                                            {getScoreCell(student.id, assign)}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Delete Confirmation Dialog */}
                <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                    <DialogContent className="bg-slate-900 border-rose-500/20 text-white">
                        <DialogHeader>
                            <DialogTitle className="text-rose-500 flex items-center gap-2">
                                <Trash2 className="w-5 h-5" />
                                학생 삭제 확인
                            </DialogTitle>
                            <DialogDescription className="text-slate-300">
                                <strong>{userToDelete?.userName}</strong> 학생을 영구적으로 삭제하시겠습니까?
                                <br />
                                <span className="text-xs text-rose-400 mt-2 block">
                                    * 이 작업은 되돌릴 수 없으며, 모든 성적 및 계정 정보가 삭제됩니다.
                                </span>
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="ghost" onClick={() => setDeleteDialogOpen(false)}>취소</Button>
                            <Button
                                onClick={handleDeleteUser}
                                className="bg-rose-600 hover:bg-rose-500"
                                disabled={isDeleting}
                            >
                                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
                                영구 삭제
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
