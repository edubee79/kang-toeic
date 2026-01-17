'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Search, Calendar, ChevronLeft, Filter, Download, User as UserIcon } from "lucide-react";
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import * as XLSX from 'xlsx';

interface StudentStats {
    user: any;
    voca: number;
    shadowing: number;
    lc2: number;
    grammar: number;
    lastActive: any;
    logs: any[];
}

export default function HomeworkResults() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [selectedClass, setSelectedClass] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [studentStats, setStudentStats] = useState<StudentStats[]>([]);
    const [filteredStats, setFilteredStats] = useState<StudentStats[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filterData();
    }, [selectedClass, searchTerm, studentStats]);

    const fetchData = async () => {
        setLoading(true);
        try {
            // 1. Fetch Classes
            const classesQuery = query(collection(db, "Classes"), orderBy("name"));
            const classesSnapshot = await getDocs(classesQuery);
            const classList: { name: string }[] = [];
            classesSnapshot.forEach((doc) => {
                const data = doc.data();
                if (data.name) classList.push({ name: data.name });
            });
            setClasses(classList);

            // 2. Fetch All Students (Approved)
            // Note: For scalability, we might want to query by class if selected, but for now fetching all active students is fine for < 1000 users.
            const usersQuery = query(collection(db, "Winter_Users")); //, where("status", "==", "approved"));
            const usersSnapshot = await getDocs(usersQuery);
            const usersMap = new Map();

            usersSnapshot.forEach(doc => {
                const data = doc.data();
                // if (data.status === 'approved') {
                usersMap.set(data.userId, {
                    ...data,
                    logs: [],
                    lastActive: null
                });
                // }
            });

            // 3. Fetch All Results (Optimized: Fetch recent or all? Let's fetch all for accurate aggregated stats for now)
            // Warning: This could get heavy. Ideally we should store aggregated stats on the user document.
            // For now, consistent with Dashboard logic.
            const resultsSnapshot = await getDocs(query(collection(db, "Manager_Results"), orderBy("timestamp", "asc")));

            resultsSnapshot.forEach(doc => {
                const res = doc.data();
                if (usersMap.has(res.studentId)) {
                    const user = usersMap.get(res.studentId);
                    user.logs.push(res);
                    // Update last active
                    if (!user.lastActive || (res.timestamp && res.timestamp > user.lastActive)) {
                        user.lastActive = res.timestamp;
                    }
                }
            });

            // 4. Calculate Stats
            const statsList: StudentStats[] = [];
            usersMap.forEach(user => {
                let maxShadowSet = 0;
                let lc2Count = 0;
                let grammarCount = 0;
                // Voca count from user profile mostly, or calculate from logs if needed.
                // Dashboard used user.passedVocaDays. Let's use that if available.
                const vocaCount = user.passedVocaDays ? user.passedVocaDays.length : 0;

                user.logs.forEach((log: any) => {
                    const unit = log.unit || "";
                    if (unit.includes('Shadowing')) {
                        const match = unit.match(/Set(\d+)/);
                        if (match && parseInt(match[1]) > maxShadowSet) maxShadowSet = parseInt(match[1]);
                    } else if (unit.includes('Part2') || unit.includes('LCpart2')) {
                        lc2Count++; // Or parse set number if meaningful
                    } else if (unit.includes('Part5') || unit.includes('Grammar')) {
                        grammarCount++;
                    }
                });

                statsList.push({
                    user: user,
                    voca: vocaCount,
                    shadowing: maxShadowSet,
                    lc2: lc2Count,
                    grammar: grammarCount,
                    lastActive: user.lastActive,
                    logs: user.logs
                });
            });

            // Sort by class then name
            statsList.sort((a, b) => {
                if (a.user.className !== b.user.className) {
                    return (a.user.className || 'ZZZ').localeCompare(b.user.className || 'ZZZ');
                }
                return (a.user.userName || '').localeCompare(b.user.userName || '');
            });

            setStudentStats(statsList);

        } catch (error) {
            console.error("Error fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    const filterData = () => {
        let filtered = studentStats;

        if (selectedClass !== 'all') {
            filtered = filtered.filter(s => s.user.className === selectedClass);
        }

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(s =>
                s.user.userName?.toLowerCase().includes(term) ||
                s.user.userId?.toLowerCase().includes(term)
            );
        }

        setFilteredStats(filtered);
    };

    const handleExport = () => {
        const wb = XLSX.utils.book_new();
        const data = filteredStats.map(s => ({
            Class: s.user.className || 'Unknown',
            Name: s.user.userName || s.user.username,
            ID: s.user.userId,
            Status: s.user.status,
            "Voca (Days)": s.voca,
            "Part 1 (Sets)": s.shadowing,
            "Part 2 (Sets)": s.lc2,
            "Part 5 (Units)": s.grammar,
            "Last Active": s.lastActive ? new Date(s.lastActive.toDate()).toLocaleString() : '-'
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "Class_Report");
        XLSX.writeFile(wb, `Homework_Report_${selectedClass}_${new Date().toISOString().slice(0, 10)}.xlsx`);
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return '-';
        try {
            return new Date(timestamp.toDate()).toLocaleString('ko-KR', {
                month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'
            });
        } catch (e) { return '-'; }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()} className="rounded-full hover:bg-slate-100">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter">HOMEWORK MONITOR</h1>
                        <p className="text-slate-500 font-bold text-sm mt-1">반별 숙제 진행 현황 상세 조회</p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <Input
                            placeholder="이름 또는 ID 검색..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="pl-10 bg-slate-50 border-slate-200 focus:bg-white transition-all rounded-xl font-bold text-slate-600"
                        />
                    </div>

                    <Button onClick={handleExport} variant="outline" className="gap-2 border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl font-bold">
                        <Download className="w-4 h-4" /> 엑셀 저장
                    </Button>
                </div>
            </div>

            {/* Class Filters */}
            <Card className="border-none shadow-sm bg-white rounded-2xl overflow-hidden">
                <div className="p-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
                    <Filter className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0" />
                    <button
                        onClick={() => setSelectedClass('all')}
                        className={cn(
                            "px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all",
                            selectedClass === 'all'
                                ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                        )}
                    >
                        전체 보기
                    </button>
                    <div className="w-px h-6 bg-slate-200 mx-2 flex-shrink-0" />
                    {classes.map((cls) => (
                        <button
                            key={cls.name}
                            onClick={() => setSelectedClass(cls.name)}
                            className={cn(
                                "px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all",
                                selectedClass === cls.name
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                                    : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                            )}
                        >
                            {cls.name}
                        </button>
                    ))}
                </div>
            </Card>

            {/* Main Table */}
            <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden min-h-[500px]">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-[500px] gap-4">
                        <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                        <p className="text-slate-400 font-bold animate-pulse">데이터를 분석하고 있습니다...</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader className="bg-slate-50/50">
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="w-[100px] font-black text-slate-400 text-xs uppercase tracking-wider pl-6">Class</TableHead>
                                    <TableHead className="w-[200px] font-black text-slate-400 text-xs uppercase tracking-wider">Student Info</TableHead>
                                    <TableHead className="font-black text-emerald-500 text-xs uppercase tracking-wider text-center">Voca (Day)</TableHead>
                                    <TableHead className="font-black text-indigo-500 text-xs uppercase tracking-wider text-center">Shadowing</TableHead>
                                    <TableHead className="font-black text-rose-500 text-xs uppercase tracking-wider text-center">Part 2</TableHead>
                                    <TableHead className="font-black text-blue-500 text-xs uppercase tracking-wider text-center">Part 5</TableHead>
                                    <TableHead className="font-black text-slate-400 text-xs uppercase tracking-wider text-right pr-6">Last Active</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredStats.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={7} className="h-[400px] text-center text-slate-400 font-medium">
                                            해당하는 학생 데이터가 없습니다.
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredStats.map((stat) => (
                                        <TableRow
                                            key={stat.user.userId}
                                            className="group hover:bg-slate-50/80 transition-colors border-slate-100 cursor-pointer"
                                            onClick={() => router.push(`/admin/results/${stat.user.id || stat.user.userId}`)}
                                        >
                                            <TableCell className="pl-6">
                                                <Badge variant="outline" className="bg-slate-100 text-slate-600 border-slate-200 font-bold">
                                                    {stat.user.className || '미배정'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold text-xs uppercase">
                                                        {stat.user.userName?.slice(0, 1) || <UserIcon className="w-4 h-4" />}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900">{stat.user.userName}</p>
                                                        <p className="text-xs text-slate-400 font-mono">{stat.user.userId}</p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="inline-flex flex-col items-center">
                                                    <span className="text-lg font-black text-emerald-600">{stat.voca}</span>
                                                    <span className="text-[10px] text-emerald-400 font-bold uppercase">Days</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {stat.shadowing > 0 ? (
                                                    <div className="inline-flex flex-col items-center">
                                                        <span className="text-lg font-black text-indigo-600">Set {stat.shadowing}</span>
                                                        <span className="text-[10px] text-indigo-400 font-bold uppercase">Max</span>
                                                    </div>
                                                ) : <span className="text-slate-300">-</span>}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {stat.lc2 > 0 ? (
                                                    <div className="inline-flex flex-col items-center">
                                                        <span className="text-lg font-black text-rose-600">{stat.lc2}</span>
                                                        <span className="text-[10px] text-rose-400 font-bold uppercase">Sets</span>
                                                    </div>
                                                ) : <span className="text-slate-300">-</span>}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {stat.grammar > 0 ? (
                                                    <div className="inline-flex flex-col items-center">
                                                        <span className="text-lg font-black text-blue-600">{stat.grammar}</span>
                                                        <span className="text-[10px] text-blue-400 font-bold uppercase">Units</span>
                                                    </div>
                                                ) : <span className="text-slate-300">-</span>}
                                            </TableCell>
                                            <TableCell className="text-right pr-6">
                                                <span className={cn(
                                                    "text-xs font-bold",
                                                    stat.lastActive ? "text-slate-500" : "text-slate-300"
                                                )}>
                                                    {formatDate(stat.lastActive)}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                )}
            </Card>
        </div>
    );
}
