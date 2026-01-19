'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Users, Shield, Download, Search, ListFilter, Mic2, Headphones, BookOpen, PenSquare, FileText, GraduationCap, Upload, Trophy } from "lucide-react";
import * as XLSX from 'xlsx';

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

    useEffect(() => {
        const checkAdmin = () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.replace('/login');
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

                let pending = 0;
                let approved = 0;

                usersSnapshot.forEach(doc => {
                    const userData = doc.data();
                    usersMap.set(userData.userId, { ...userData, logs: [], stats: {} });
                    if (userData.status === 'pending') pending++;
                    if (userData.status === 'approved') approved++;
                });

                // Fetch Assignments
                const assignSnapshot = await getDocs(query(collection(db, "Assignments")));
                let activeAssigns = 0;
                assignSnapshot.forEach(doc => {
                    if (doc.data().isActive) activeAssigns++;
                });

                // Fetch Results (Recent)
                const resultsSnapshot = await getDocs(query(collection(db, "Manager_Results"), orderBy("timestamp", "desc")));

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
                    }
                });

                // Calculate Stats for Table
                const studentList: any[] = [];
                usersMap.forEach(user => {
                    let maxShadowSet = 0;
                    let lc2Count = 0;
                    let grammarCount = 0;
                    let vocaCount = user.passedVocaDays ? user.passedVocaDays.length : 0;

                    user.logs.forEach((log: any) => {
                        const unit = log.unit || "";
                        if (unit.includes('Shadowing')) {
                            const match = unit.match(/Set(\d+)/);
                            if (match && parseInt(match[1]) > maxShadowSet) maxShadowSet = parseInt(match[1]);
                        } else if (unit.includes('Part2')) lc2Count++;
                        else if (unit.includes('Part5') || unit.includes('Unit')) grammarCount++;
                    });

                    user.stats = { maxShadowSet, lc2Count, grammarCount, vocaCount };
                    // Only approved active students for the table
                    if (user.status === 'approved') {
                        studentList.push(user);
                    }
                });

                setStudents(studentList);
                setStats({
                    totalStudents: approved,
                    pendingStudents: pending,
                    activeAssignments: activeAssigns,
                    todayLogs: todayCount
                });

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
            ID: s.userId,
            "Shadowing Set": s.stats.maxShadowSet,
            "Part2 Count": s.stats.lc2Count,
            "Part5 Unit": s.stats.grammarCount,
            "Voca Days": s.stats.vocaCount
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

    const filteredStudents = students.filter(student => {
        const matchesClass = filterClass === 'all' || (student.className && student.className === filterClass);
        const nameMatch = (student.name || '').toLowerCase().includes(searchTerm.toLowerCase());
        const idMatch = (student.userId || '').toLowerCase().includes(searchTerm.toLowerCase());
        return matchesClass && (nameMatch || idMatch);
    });

    if (loading) return <div className="p-8 text-center text-slate-500 animate-pulse font-bold">데이터 분석 중...</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Management <span className="text-indigo-600">Pro</span></h1>
                    <p className="text-slate-500 text-xs font-bold mt-1">학생 진행 현황 실시간 관리</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link href="/">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-slate-600 border-slate-200 hover:bg-slate-50">
                            <Shield className="w-4 h-4" /> 홈으로 (나가기)
                        </Button>
                    </Link>
                    <Link href="/admin/registrations">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-rose-600 border-rose-200 hover:bg-rose-50">
                            <Users className="w-4 h-4" /> 가입 승인 관리
                        </Button>
                    </Link>
                    <Link href="/admin/questions">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                            <Upload className="w-4 h-4" /> 문제 데이터 관리
                        </Button>
                    </Link>
                    <Link href="/admin/classes">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                            <Users className="w-4 h-4" /> 반(Class) 관리
                        </Button>
                    </Link>
                    <Link href="/admin/schools">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-purple-600 border-purple-200 hover:bg-purple-50">
                            <GraduationCap className="w-4 h-4" /> 학교(Univ) 관리
                        </Button>
                    </Link>
                    <Link href="/admin/homework">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                            <FileText className="w-4 h-4" /> 숙제 결과 전체보기
                        </Button>
                    </Link>
                    <Link href="/admin/assignments">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                            <PenSquare className="w-4 h-4" /> 숙제 내기 (Assign)
                        </Button>
                    </Link>
                    <Link href="/admin/rankings">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-yellow-600 border-yellow-200 hover:bg-yellow-50">
                            <Trophy className="w-4 h-4" /> 랭킹 관리
                        </Button>
                    </Link>
                    <Link href="/admin/settings">
                        <Button variant="outline" className="gap-2 text-xs font-bold bg-white text-amber-600 border-amber-200 hover:bg-amber-50">
                            <Shield className="w-4 h-4" /> 접근 제어 설정
                        </Button>
                    </Link>
                    <Button onClick={handleExport} variant="outline" className="gap-2 text-xs font-bold bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                        <Download className="w-4 h-4" /> 엑셀 다운로드
                    </Button>
                    {/* Dynamic Class Filter (Dropdown) */}
                    <div className="w-[150px]">
                        <Select value={filterClass} onValueChange={setFilterClass}>
                            <SelectTrigger className="h-9 text-xs font-bold bg-white border-slate-200 text-slate-600 shadow-sm">
                                <SelectValue placeholder="반 선택" />
                            </SelectTrigger>
                            <SelectContent className="bg-white text-slate-900 border border-slate-200 shadow-xl z-[50]">
                                <SelectItem value="all" className="font-bold cursor-pointer hover:bg-slate-100 focus:bg-slate-100">전체보기</SelectItem>
                                {classes.map(cls => (
                                    <SelectItem key={cls.name} value={cls.name} className="cursor-pointer hover:bg-slate-100 focus:bg-slate-100">{cls.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </header >

            {/* Dashboard Overview Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/admin/registrations" className="col-span-1">
                    <Card className={`border-none shadow-lg transition-all hover:scale-105 cursor-pointer ${stats.pendingStudents > 0 ? 'bg-amber-500 text-white' : 'bg-white text-slate-900'}`}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase opacity-80 flex items-center gap-2">
                                <Users className="w-4 h-4" /> 가입 승인 대기
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black">{stats.pendingStudents}</div>
                            {stats.pendingStudents > 0 && <p className="text-xs font-medium mt-1 opacity-90">승인이 필요한 학생이 있습니다!</p>}
                        </CardContent>
                    </Card>
                </Link>

                <div className="col-span-1">
                    <Card className="border-none shadow-lg bg-white text-slate-900">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                                <Users className="w-4 h-4" /> 총 수강생
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-slate-700">{stats.totalStudents}</div>
                            <p className="text-xs font-medium mt-1 text-slate-400">활성 계정 수</p>
                        </CardContent>
                    </Card>
                </div>

                <Link href="/admin/assignments" className="col-span-1">
                    <Card className="border-none shadow-lg bg-white text-slate-900 hover:bg-indigo-50 transition-colors cursor-pointer group">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase text-slate-400 group-hover:text-indigo-500 flex items-center gap-2">
                                <PenSquare className="w-4 h-4" /> 배포된 과제
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-slate-700 group-hover:text-indigo-600">{stats.activeAssignments}</div>
                            <p className="text-xs font-medium mt-1 text-slate-400 group-hover:text-indigo-400">현재 활성화된 과제 세트</p>
                        </CardContent>
                    </Card>
                </Link>

                <div className="col-span-1">
                    <Card className="border-none shadow-lg bg-white text-slate-900">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase text-slate-400 flex items-center gap-2">
                                <Trophy className="w-4 h-4" /> 학습 활동 (오늘)
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-slate-700">{stats.todayLogs}</div>
                            <p className="text-xs font-medium mt-1 text-slate-400">오늘 완료된 학습 및 테스트</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Student List */}
                <Card className="col-span-1 lg:col-span-3 border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm font-black uppercase text-slate-400">Student List ({filteredStudents.length})</CardTitle>
                        <div className="relative w-48">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input
                                placeholder="이름 검색..."
                                className="pl-9 h-9 text-xs font-bold bg-slate-50 border-none"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="max-h-[600px] overflow-auto">
                            <Table>
                                <TableHeader className="bg-slate-50 sticky top-0">
                                    <TableRow>
                                        <TableHead className="w-20 font-bold text-xs">Class</TableHead>
                                        <TableHead className="font-bold text-xs">Student</TableHead>
                                        <TableHead className="font-bold text-xs">Progress Summary</TableHead>
                                        <TableHead className="text-right font-bold text-xs">Detail</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredStudents.map((student) => {
                                        const stats = getStudentStats(student);
                                        return (
                                            <Dialog key={student.userId}>
                                                <DialogTrigger asChild>
                                                    <TableRow className="cursor-pointer hover:bg-slate-50" onClick={() => setSelectedStudent({ ...student, stats })}>
                                                        <TableCell className="font-bold text-slate-500">{student.className || '-'}</TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-slate-900">{student.name || student.username}</span>
                                                                <span className="text-[10px] text-slate-400">{student.userId}</span>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-wrap gap-1">
                                                                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded border border-emerald-100">VOCA {stats.vocaCount}D</span>
                                                                {stats.maxShadowSet > 0 && <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded border border-indigo-100">SHADOW {stats.maxShadowSet}</span>}
                                                                {stats.lc2Count > 0 && <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-bold rounded border border-rose-100">LC2 {stats.lc2Count}</span>}
                                                            </div>
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            <div className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                                                                <ListFilter className="w-4 h-4" />
                                                            </div>
                                                        </TableCell>
                                                    </TableRow>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-[2.5rem] p-0 overflow-hidden text-slate-900">
                                                    <DialogHeader className="p-8 border-b bg-white/50">
                                                        <DialogTitle className="text-2xl font-black italic text-slate-900">
                                                            {student.name} <span className="text-slate-400 text-sm not-italic ml-2">({student.className}반 | {student.userId})</span>
                                                        </DialogTitle>
                                                    </DialogHeader>
                                                    <div className="p-8 overflow-y-auto max-h-[70vh]">
                                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                                            <ProgressCard title="Part 1" value={stats.maxShadowSet} subValue="/ 5 Sets" color="indigo" icon={Mic2} current={stats.maxShadowSet} total={5} />
                                                            <ProgressCard title="Part 2" value={stats.lc2Count} subValue="/ 5 Sets" color="rose" icon={Headphones} current={stats.lc2Count} total={5} />
                                                            <ProgressCard title="Part 5" value={stats.grammarCount} subValue="/ 10 Unit" color="blue" icon={PenSquare} current={stats.grammarCount} total={10} />
                                                            <ProgressCard title="Voca" value={stats.vocaCount} subValue="/ 30 Days" color="emerald" icon={BookOpen} current={stats.vocaCount} total={30} />
                                                        </div>

                                                        <h3 className="text-sm font-black uppercase text-slate-400 mb-4">Recent Activity Logs</h3>
                                                        <div className="space-y-3">
                                                            {stats.logs.slice(0, 5).map((log: any, i: number) => (
                                                                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                                                    <div>
                                                                        <p className="text-xs font-black text-slate-500 uppercase">{log.unit}</p>
                                                                        <p className="text-[10px] font-bold text-slate-400" suppressHydrationWarning>{new Date(log.timestamp?.toDate()).toLocaleString()}</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <span className="text-sm font-black text-indigo-600">{log.score}</span><span className="text-[10px] text-slate-400">/{log.total}</span>
                                                                    </div>
                                                                </div>
                                                            ))}
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
