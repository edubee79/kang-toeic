'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Shield, Download, Search, ListFilter, Mic2, Headphones, BookOpen, PenSquare } from "lucide-react";
import * as XLSX from 'xlsx';

// Chart.js Setup
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [students, setStudents] = useState<any[]>([]);
    const [logs, setLogs] = useState<any[]>([]);
    const [filterClass, setFilterClass] = useState("all");
    const [selectedStudent, setSelectedStudent] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState("");

    // Password Check
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordInput === "Kang1818^^") {
            setIsAuthenticated(true);
            localStorage.setItem("admin_auth", "true");
        } else {
            alert("비밀번호가 틀렸습니다.");
        }
    };

    useEffect(() => {
        const auth = localStorage.getItem("admin_auth");
        if (auth === "true") setIsAuthenticated(true);
    }, []);

    // Data Fetching
    useEffect(() => {
        if (!isAuthenticated) return;

        // Fetch Logs Real-time
        const q = query(collection(db, "Manager_Results"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const logsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLogs(logsData);
        });

        // Fetch Students
        const fetchStudents = async () => {
            const snap = await getDocs(collection(db, "Winter_Users"));
            const studentsData = snap.docs.map(doc => doc.data());
            setStudents(studentsData);
        };
        fetchStudents();

        return () => unsubscribe();
    }, [isAuthenticated]);

    // Computed Data
    const filteredStudents = students.filter(s => {
        const matchesClass = filterClass === "all" || String(s.userClass) === filterClass;
        const matchesSearch = s.userName.includes(searchTerm) || s.userId.includes(searchTerm);
        return matchesClass && matchesSearch;
    });

    const getStudentStats = (student: any) => {
        const studentLogs = logs.filter(l => l.studentId === student.userId || l.student === student.userName);

        let maxShadowSet = 0;
        let lc2Count = 0;
        let grammarCount = 0;

        studentLogs.forEach(log => {
            const u = log.unit || "";
            if (u.includes('Shadowing')) {
                const m = u.match(/Set(\d+)/);
                if (m && parseInt(m[1]) > maxShadowSet) maxShadowSet = parseInt(m[1]);
            } else if (u.includes('LCpart2') || u.includes('Part2')) {
                lc2Count++;
            } else if (u.includes('Grammar') || u.includes('Unit')) {
                grammarCount++;
            }
        });

        const vocaCount = student.passedVocaDays ? student.passedVocaDays.length : 0;

        return { maxShadowSet, lc2Count, grammarCount, vocaCount, logs: studentLogs };
    };

    // Excel Export
    const handleExport = () => {
        const data = filteredStudents.map(s => {
            const stats = getStudentStats(s);
            return {
                Class: s.userClass,
                Name: s.userName,
                ID: s.userId,
                "Part1 (Set)": stats.maxShadowSet,
                "Part2 (Count)": stats.lc2Count,
                "Part5 (Unit)": stats.grammarCount,
                "Voca (Days)": stats.vocaCount
            };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Students");
        XLSX.writeFile(wb, "WinterCamp_Report.xlsx");
    };

    // Chart Data
    const chartData = {
        labels: ['Part 1', 'Part 2', 'Part 5', 'Voca'],
        datasets: [
            {
                label: 'Average Progress (%)',
                data: [
                    (filteredStudents.reduce((acc, s) => acc + (getStudentStats(s).maxShadowSet / 5 * 100), 0) / (filteredStudents.length || 1)),
                    (filteredStudents.reduce((acc, s) => acc + (Math.min(getStudentStats(s).lc2Count / 5 * 100, 100)), 0) / (filteredStudents.length || 1)),
                    (filteredStudents.reduce((acc, s) => acc + (Math.min(getStudentStats(s).grammarCount / 10 * 100, 100)), 0) / (filteredStudents.length || 1)),
                    (filteredStudents.reduce((acc, s) => acc + (getStudentStats(s).vocaCount / 30 * 100), 0) / (filteredStudents.length || 1)),
                ],
                backgroundColor: ['#6366f1', '#f43f5e', '#3b82f6', '#10b981'],
            }
        ]
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-100">
                <form onSubmit={handleLogin} className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-sm space-y-4">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-indigo-50 rounded-full">
                            <Shield className="w-8 h-8 text-indigo-600" />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-center text-slate-800">관리자 접근 권한 확인</h2>
                    <Input
                        type="password"
                        placeholder="관리자 비밀번호"
                        value={passwordInput}
                        onChange={e => setPasswordInput(e.target.value)}
                        className="text-center"
                    />
                    <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800">확인</Button>
                </form>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-10 space-y-8 bg-slate-50 min-h-screen text-slate-900">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">Management <span className="text-indigo-600">Pro</span></h1>
                    <p className="text-slate-500 text-xs font-bold mt-1">학생 진행 현황 실시간 관리</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button onClick={handleExport} variant="outline" className="gap-2 text-xs font-bold bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50">
                        <Download className="w-4 h-4" /> 엑셀 다운로드
                    </Button>
                    <div className="flex gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                        {['all', '650', '780'].map(cls => (
                            <button
                                key={cls}
                                onClick={() => setFilterClass(cls)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${filterClass === cls ? 'bg-slate-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                            >
                                {cls === 'all' ? '전체' : `${cls}반`}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Stats Chart */}
                <Card className="lg:col-span-1 border-none shadow-xl bg-white rounded-[2rem]">
                    <CardHeader>
                        <CardTitle className="text-sm font-black uppercase text-slate-400">Class Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64">
                            <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, max: 100 } } }} />
                        </div>
                    </CardContent>
                </Card>

                {/* Student List */}
                <Card className="lg:col-span-2 border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
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
                                                        <TableCell className="font-bold text-slate-500">{student.userClass}</TableCell>
                                                        <TableCell>
                                                            <div className="flex flex-col">
                                                                <span className="font-bold text-slate-900">{student.userName}</span>
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
                                                            {student.userName} <span className="text-slate-400 text-sm not-italic ml-2">({student.userClass}반 | {student.userId})</span>
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
                                                                        <p className="text-[10px] font-bold text-slate-400">{new Date(log.timestamp?.toDate()).toLocaleString()}</p>
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
        </div>
    );
}
