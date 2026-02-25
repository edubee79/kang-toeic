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
import { Users, Shield, Download, Search, ListFilter, Mic2, Headphones, BookOpen, PenSquare, FileText, GraduationCap, Upload, Trophy, BarChart3 } from "lucide-react";
import * as XLSX from 'xlsx';
import { cn } from "@/lib/utils";

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
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import React from 'react'; // Added for Fragments

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
    const [loading, setLoading] = useState(true);
    const [reports, setReports] = useState<Record<string, WeaknessReport>>({});
    const [loadingAnalysis, setLoadingAnalysis] = useState(false);

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
                const approvedStudents: any[] = [];
                let pendingCount = 0;

                usersSnapshot.forEach(doc => {
                    const userData = doc.data();
                    if (userData.status === 'pending') pendingCount++;
                    if (userData.status === 'approved' && !isAdmin(userData.username)) {
                        approvedStudents.push({ ...userData, id: doc.id });
                    }
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
                    if (res.timestamp?.toDate) {
                        const logDate = res.timestamp.toDate().toDateString();
                        if (logDate === todayStr) todayCount++;
                    }
                });

                setStudents(approvedStudents);
                setStats({
                    totalStudents: approvedStudents.length,
                    pendingStudents: pendingCount,
                    activeAssignments: activeAssigns,
                    todayLogs: todayCount
                });

                // Trigger Analysis
                analyzeStudents(approvedStudents);

            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        const analyzeStudents = async (studentList: any[]) => {
            setLoadingAnalysis(true);
            const reportMap: Record<string, WeaknessReport> = {};

            const chunkSize = 10;
            for (let i = 0; i < studentList.length; i += chunkSize) {
                const chunk = studentList.slice(i, i + chunkSize);
                await Promise.all(chunk.map(async (s) => {
                    try {
                        const report = await WeaknessService.analyzeUserWeakness(s.userId);
                        reportMap[s.userId] = report;
                    } catch (e) {
                        console.error(`Error analyzing ${s.userId}:`, e);
                    }
                }));
                setReports(prev => ({ ...prev, ...reportMap }));
            }
            setLoadingAnalysis(false);
        };

        checkAdmin();

        const checkAndAutoUpdateRankings = async () => {
            try {
                const now = new Date();
                const year = now.getFullYear();
                const onejan = new Date(year, 0, 1);
                const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
                const period = `${year}-W${String(week).padStart(2, '0')}`;
                const docId = `${period}-total-all`;

                const { doc, getDoc } = await import('firebase/firestore');
                const rankDoc = await getDoc(doc(db, 'Rankings', docId));

                let needsUpdate = false;
                if (!rankDoc.exists()) {
                    needsUpdate = true;
                } else {
                    const data = rankDoc.data();
                    if (data.updatedAt?.toDate) {
                        const lastUpdate = data.updatedAt.toDate().toDateString();
                        const today = new Date().toDateString();
                        if (lastUpdate !== today) needsUpdate = true;
                    } else {
                        needsUpdate = true;
                    }
                }

                if (needsUpdate) {
                    console.log("Auto-updating rankings for new day...");
                    const { updateRankings } = await import('@/services/rankingService');
                    await updateRankings(period, 'all');
                    console.log("Auto-update complete.");
                }
            } catch (e) {
                console.error("Auto-ranking update failed:", e);
            }
        };

        checkAndAutoUpdateRankings();
    }, [router]);

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
        const data = sortedStudents.map(s => {
            const r = s.report;
            const row: any = {
                "수강반": s.className || '-',
                "이름": s.userName || s.name || s.username,
                "순위": s.rank,
                "목표_총점": s.targetScore || 0,
                "목표_RC": s.targetRC || 0,
                "목표_LC": s.targetLC || 0,
                "현재_예상점수": s.predicted,
                "차이": s.predicted - (s.targetScore || 0)
            };

            const keys = [
                { id: 'p1', label: 'P1' },
                { id: 'p2', label: 'P2' },
                { id: 'p3', label: 'P3' },
                { id: 'p4', label: 'P4' },
                { id: 'p5', label: 'P5' },
                { id: 'p6', label: 'P6' },
                { id: 'p7_single', label: 'P7단' },
                { id: 'p7_double', label: 'P7중' }
            ];

            keys.forEach(k => {
                const st = r?.targetStats[k.id];
                row[`${k.label}_목표`] = st?.target || 0;
                row[`${k.label}_평균`] = st?.average || 0;
                row[`${k.label}_최근`] = st?.latest || 0;
            });

            return row;
        });

        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "학생성취도");
        XLSX.writeFile(wb, `Student_Progress_${filterClass}_${new Date().toISOString().slice(0, 10)}.xlsx`);
    };

    const sortedStudents = students
        .filter(s => filterClass === 'all' || s.className === filterClass)
        .map(s => {
            const report = reports[s.userId];
            const predicted = report ? (report.currentTotalLC + report.currentTotalRC) : 0;
            return { ...s, predicted, report };
        })
        .sort((a, b) => b.predicted - a.predicted)
        .map((s, idx) => ({ ...s, rank: idx + 1 }));

    const renderPartColumns = (pKey: string, report?: WeaknessReport) => {
        const stat = report?.targetStats[pKey];
        if (!stat) return [
            <TableCell key={`${pKey}-target`} className="text-center text-slate-300">-</TableCell>,
            <TableCell key={`${pKey}-avg`} className="text-center text-slate-300">-</TableCell>,
            <TableCell key={`${pKey}-latest`} className="text-center text-slate-300 border-r">-</TableCell>
        ];

        return [
            <TableCell key={`${pKey}-target`} className="text-center font-bold text-slate-400 bg-slate-50/50">{stat.target}</TableCell>,
            <TableCell key={`${pKey}-avg`} className="text-center text-slate-600">{stat.average}</TableCell>,
            <TableCell key={`${pKey}-latest`} className={cn(
                "text-center font-black border-r",
                stat.latest >= stat.target ? "text-emerald-500" : "text-rose-500"
            )}>{stat.latest}</TableCell>
        ];
    };

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
                    <Link href="/admin/universities">
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

                <Link href="/admin/mock-reset" className="col-span-1">
                    <Card className="border-none shadow-lg bg-white text-slate-900 hover:bg-rose-50 transition-colors cursor-pointer group">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase text-slate-400 group-hover:text-rose-500 flex items-center gap-2">
                                <Shield className="w-4 h-4" /> 모의고사 관리
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black text-slate-700 group-hover:text-rose-600">RESET</div>
                            <p className="text-xs font-medium mt-1 text-slate-400 group-hover:text-rose-400">재응시 초기화 및 기록 삭제</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/mock-report" className="col-span-1">
                    <Card className="border-none shadow-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer group">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-xs font-bold uppercase text-indigo-200 group-hover:text-white flex items-center gap-2">
                                <BarChart3 className="w-4 h-4" /> 모의고사 성적
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-4xl font-black group-hover:scale-105 transition-transform">REPORT</div>
                            <p className="text-xs font-medium mt-1 text-indigo-200">반별 성적 일람 및 석차 확인</p>
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

            {/* Performance Achievement Table */}
            <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between bg-slate-900 text-white py-4 px-8">
                    <CardTitle className="text-sm font-black uppercase tracking-widest italic">Student Performance Achievement</CardTitle>
                    {loadingAnalysis && (
                        <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 animate-pulse">
                            <div className="w-3 h-3 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin" />
                            ANALYZING DATA...
                        </div>
                    )}
                </CardHeader>
                <CardContent className="p-0 overflow-x-auto">
                    <Table className="min-w-[1200px]">
                        <TableHeader className="bg-slate-100">
                            <TableRow className="hover:bg-transparent">
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] border-r text-slate-900">순위</TableHead>
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] border-r text-slate-900">수강반</TableHead>
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] border-r text-slate-900">이름</TableHead>
                                <TableHead colSpan={1} className="text-center font-black text-[10px] border-r bg-indigo-50 text-indigo-700">목표 성적</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 1</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 2</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 3</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 4</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 5</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">PART 6</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">P7 단지문</TableHead>
                                <TableHead colSpan={3} className="text-center font-black text-[10px] border-r text-slate-900">P7 이/삼중</TableHead>
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] border-r bg-emerald-50 text-emerald-700">현재예상</TableHead>
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] border-r bg-rose-50 text-rose-700">부족/초과</TableHead>
                                <TableHead rowSpan={2} className="text-center font-black text-[10px] bg-orange-50 text-orange-700">학습 열정</TableHead>
                            </TableRow>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="text-center text-[9px] font-bold border-r bg-indigo-50/50 text-indigo-700">총점/RC/LC</TableHead>

                                {[...Array(8)].map((_, i) => {
                                    const keyBase = `head-p${i}`;
                                    return (
                                        <React.Fragment key={i}>
                                            <TableHead key={`${keyBase}-target`} className="text-center text-[8px] font-medium bg-slate-50 text-slate-600">목표</TableHead>
                                            <TableHead key={`${keyBase}-avg`} className="text-center text-[8px] font-medium text-slate-600">평균</TableHead>
                                            <TableHead key={`${keyBase}-latest`} className="text-center text-[8px] font-bold border-r text-slate-900">최근</TableHead>
                                        </React.Fragment>
                                    );
                                })}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedStudents.map((s) => {
                                const report = reports[s.userId];
                                const predicted = s.predicted;
                                const target = s.targetScore || 850;
                                const diff = predicted - target;

                                return (
                                    <TableRow key={s.userId} className="group hover:bg-slate-50 transition-colors">
                                        <TableCell className="text-center font-black text-slate-400 border-r">{s.rank}위</TableCell>
                                        <TableCell className="text-center text-[10px] font-bold text-slate-500 border-r">{s.className || '-'}</TableCell>
                                        <TableCell className="border-r">
                                            <button
                                                onClick={() => router.push(`/admin/results/${s.userId}`)}
                                                className="w-full text-center font-black text-slate-900 group-hover:text-indigo-600 transition-colors"
                                            >
                                                {s.userName || s.name || s.username}
                                            </button>
                                        </TableCell>
                                        {/* Targets */}
                                        <TableCell className="border-r bg-indigo-50/10">
                                            <div className="flex flex-col items-center gap-0.5">
                                                <span className="text-[11px] font-black text-indigo-600">{target}</span>
                                                <span className="text-[9px] text-slate-400">{s.targetRC || 425}/{s.targetLC || 425}</span>
                                            </div>
                                        </TableCell>
                                        {/* Part Stats */}
                                        {renderPartColumns("p1", report)}
                                        {renderPartColumns("p2", report)}
                                        {renderPartColumns("p3", report)}
                                        {renderPartColumns("p4", report)}
                                        {renderPartColumns("p5", report)}
                                        {renderPartColumns("p6", report)}
                                        {renderPartColumns("p7_single", report)}
                                        {renderPartColumns("p7_double", report)}
                                        {/* Summary */}
                                        <TableCell className="text-center border-r bg-emerald-50/20">
                                            <span className="text-sm font-black text-emerald-600">{predicted}점</span>
                                        </TableCell>
                                        <TableCell className={cn(
                                            "text-center font-black text-xs bg-rose-50/10",
                                            diff >= 0 ? "text-emerald-500" : "text-rose-500"
                                        )}>
                                            {diff > 0 ? `+${diff}` : diff}
                                        </TableCell>
                                        <TableCell className="text-center font-bold text-slate-500 bg-orange-50/10">
                                            {report?.completedCount || 0}개
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {sortedStudents.length === 0 && (
                                <TableRow>
                                    <TableCell colSpan={32} className="h-32 text-center text-slate-400 font-bold">표시할 학생 데이터가 없습니다.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div >
    );
}
