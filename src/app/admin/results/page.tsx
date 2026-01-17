'use client'; // Force Rebuild

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Download, Search, ChevronRight, CheckCircle2, XCircle, AlertCircle, ArrowLeft } from "lucide-react";
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

export default function HomeworkResultsPage() {
    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [selectedClass, setSelectedClass] = useState<string>('');

    // Data State
    const [students, setStudents] = useState<Student[]>([]);
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [resultsMap, setResultsMap] = useState<Record<string, Result>>({}); // key: studentId_type_detail

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
                if (data.name) {
                    list.push({ name: data.name });
                }
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

            // Limit to last 15 columns for readability
            let count = 0;
            snapAssignments.forEach(doc => {
                if (count >= 15) return;
                const data = doc.data();
                // Filter: Include if targetClass is 'all', matches class, or is a weakness review for someone in this class
                // For simplicity in matrix, let's show class-wide assignments mainly
                if (data.targetClass === className || data.targetClass === 'all' || !data.targetClass) {
                    assignList.push({
                        id: doc.id,
                        type: data.type,
                        typeLabel: data.typeLabel,
                        detail: data.detail,
                        createdAt: data.createdAt
                    });
                    count++;
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
                // Key: studentId + type + detail
                const key = `${data.studentId}_${data.type}_${data.detail}`;
                // If duplicate, keep latest? Firestore doesn't prevent dupes.
                // Let's assume existing logic is okay, or take highest score.
                if (!rMap[key] || rMap[key].timestamp < data.timestamp) {
                    rMap[key] = {
                        studentId: data.studentId,
                        type: data.type,
                        detail: data.unit || data.detail, // unit/detail naming inconsistency handling
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

    const getScoreCell = (studentId: string, assign: Assignment) => {
        const key = `${studentId}_${assign.type}_${assign.detail}`;
        const result = resultsMap[key];

        if (!result) {
            return <div className="text-slate-700 text-xs">-</div>; // Not done
        }

        // Display logic based on Type
        if (result.score >= 0) {
            // Did they pass?
            // For Pass/Fail types (like Voca with strict cutline), we might check score.
            // For now just show score.
            let colorClass = "text-emerald-400";
            if (assign.type === 'voca') {
                if (result.score < 80) colorClass = "text-rose-400"; // Arbitrary cutline visual
            }
            return (
                <div className={`font-bold ${colorClass} flex flex-col items-center`}>
                    <span>{result.score}</span>
                    {/* <span className="text-[9px] text-slate-500">{format(result.timestamp.toDate(), 'MM/dd')}</span> */}
                </div>
            )
        }

        return <CheckCircle2 className="w-4 h-4 text-emerald-500" />;
    };

    const [showLowCompletion, setShowLowCompletion] = useState(false);

    // Calculate Stats & Filter
    const studentsWithStats = students.map(student => {
        let completed = 0;
        let totalScore = 0;
        let countScore = 0;

        assignments.forEach(assign => {
            const key = `${student.id}_${assign.type}_${assign.detail}`;
            if (resultsMap[key]) {
                completed++;
                if (resultsMap[key].score >= 0) {
                    totalScore += resultsMap[key].score;
                    countScore++;
                }
            }
        });

        const rate = assignments.length > 0 ? (completed / assignments.length) * 100 : 0;
        return { ...student, stats: { completed, rate, avg: countScore > 0 ? Math.round(totalScore / countScore) : 0 } };
    });

    const filteredStudents = showLowCompletion
        ? studentsWithStats.filter(s => s.stats.rate < 80)
        : studentsWithStats;

    const handleSendPush = () => {
        const targetNames = filteredStudents.map(s => s.userName).join(', ');
        alert(`다음 학생들에게 알림을 발송했습니다 (Simulation):\n${targetNames}\n\n"과제 수행률이 낮습니다. 분발하세요!"`);
    };

    const handleExcelExport = () => {
        import('xlsx').then(XLSX => {
            const wb = XLSX.utils.book_new();

            // Prepare Data: Rows = Students
            const data = filteredStudents.map(student => {
                const row: any = {
                    '이름': student.userName,
                    'ID': student.userId,
                    '달성률(%)': `${Math.round(student.stats.rate)}%`,
                    '완료 과제 수': student.stats.completed,
                };

                // Add columns for each assignment
                assignments.forEach(assign => {
                    const key = `${student.id}_${assign.type}_${assign.detail}`;
                    const customKey = `${assign.detail} (${assign.typeLabel || assign.type})`; // Column Header

                    if (resultsMap[key]) {
                        row[customKey] = resultsMap[key].score >= 0 ? resultsMap[key].score : 'Pass';
                    } else {
                        row[customKey] = '-';
                    }
                });

                return row;
            });

            const ws = XLSX.utils.json_to_sheet(data);

            // Auto-width columns roughly
            const wscols = [{ wch: 10 }, { wch: 15 }, { wch: 10 }, { wch: 10 }];
            assignments.forEach(() => wscols.push({ wch: 15 }));
            ws['!cols'] = wscols;

            XLSX.utils.book_append_sheet(wb, ws, "성적표");
            XLSX.writeFile(wb, `Homework_Results_${selectedClass || 'All'}_${format(new Date(), 'yyyyMMdd')}.xlsx`);
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-[1600px] mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/dashboard">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
                                <CheckCircle2 className="text-indigo-500" />
                                HOMEWORK RESULTS
                            </h1>
                            <p className="text-slate-400">반별 숙제 제출 현황 및 성적 조회</p>
                        </div>
                    </div>

                    <div className="flex gap-2 bg-slate-900 p-2 rounded-lg border border-slate-800 flex-wrap">
                        <Select value={selectedClass} onValueChange={fetchClassData}>
                            <SelectTrigger className="w-[200px] bg-slate-950 border-slate-700 font-bold">
                                <SelectValue placeholder="반 선택 (Class)" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-700 text-white">
                                {classes.map((cls) => (
                                    <SelectItem key={cls.name} value={cls.name} className="focus:bg-slate-800">
                                        {cls.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button
                            variant={showLowCompletion ? "destructive" : "outline"}
                            onClick={() => setShowLowCompletion(!showLowCompletion)}
                            className={`border-slate-700 ${showLowCompletion ? 'bg-rose-600 hover:bg-rose-700 border-rose-600' : 'text-slate-400 hover:text-white'}`}
                        >
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {showLowCompletion ? '전체 보기' : '미완료 학생 (80%↓)'}
                        </Button>

                        {showLowCompletion && (
                            <Button className="bg-indigo-600 hover:bg-indigo-500 animate-in fade-in" onClick={handleSendPush}>
                                <div className="mr-2">📲</div> 푸시 발송
                            </Button>
                        )}

                        <Button
                            variant="outline"
                            className="border-slate-700 text-slate-400 hover:text-white"
                            onClick={handleExcelExport}
                        >
                            <Download className="w-4 h-4 mr-2" /> 엑셀
                        </Button>
                    </div>
                </div>

                {/* Main Content */}
                <Card className="bg-slate-900 border-slate-800 shadow-xl overflow-hidden">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex justify-between items-center">
                            <span>{selectedClass ? `${selectedClass} 학습 현황표` : '반을 선택해주세요'}</span>
                            {selectedClass && (
                                <span className={`text-sm font-normal px-2 py-1 rounded ${showLowCompletion ? 'bg-rose-500/10 text-rose-400' : 'bg-slate-800 text-slate-400'}`}>
                                    표시: {filteredStudents.length}명 / 전체 {students.length}명
                                </span>
                            )}
                        </CardTitle>
                        <CardDescription>
                            {selectedClass && `최근 ${assignments.length}개의 과제 기준`}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                        {loading ? (
                            <div className="h-64 flex flex-col items-center justify-center gap-4 text-slate-500">
                                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                                <p>데이터를 불러오는 중입니다...</p>
                            </div>
                        ) : !selectedClass ? (
                            <div className="h-64 flex items-center justify-center text-slate-600 border-t border-slate-800">
                                상단에서 반을 선택하면 결과가 표시됩니다.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader className="bg-slate-950 sticky top-0 z-10 shadow-sm">
                                        <TableRow className="border-slate-800 hover:bg-slate-950">
                                            <TableHead className="w-[180px] font-bold text-white bg-slate-950 sticky left-0 z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.5)]">
                                                학생 이름 / 달성률
                                            </TableHead>
                                            {assignments.map(assign => (
                                                <TableHead key={assign.id} className="text-center min-w-[100px] text-xs">
                                                    <div className="flex flex-col items-center gap-1 py-2">
                                                        <Badge variant="outline" className="text-[10px] h-5 border-slate-700 text-slate-400 font-normal">
                                                            {assign.createdAt && typeof assign.createdAt.toDate === 'function' ? format(assign.createdAt.toDate(), 'MM/dd') : '-'}
                                                        </Badge>
                                                        <span className="font-bold text-slate-200">
                                                            {assign.detail}
                                                        </span>
                                                        <span className="text-[10px] text-slate-500 uppercase tracking-tighter">
                                                            {assign.typeLabel || assign.type}
                                                        </span>
                                                    </div>
                                                </TableHead>
                                            ))}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredStudents.length === 0 ? (
                                            <TableRow>
                                                <TableCell colSpan={assignments.length + 1} className="h-24 text-center text-slate-500">
                                                    해당 조건의 학생이 없습니다.
                                                </TableCell>
                                            </TableRow>
                                        ) : filteredStudents.map(student => (
                                            <TableRow key={student.id} className="border-slate-800 hover:bg-slate-800/30">
                                                <TableCell className="font-bold text-white bg-slate-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.5)]">
                                                    <div className="flex justify-between items-center pr-4 min-w-[200px]">
                                                        <div>
                                                            <div className="flex flex-col gap-1 w-full">
                                                                <div className="flex justify-between items-center">
                                                                    <span className="font-bold text-white">{student.userName}</span>
                                                                    <Button asChild size="sm" variant="outline" className="h-6 text-[10px] border-indigo-500 text-indigo-400 hover:bg-indigo-950 px-2 cursor-pointer">
                                                                        <Link href={`/admin/results/${student.id}`}>
                                                                            상세보기
                                                                            <ChevronRight className="w-3 h-3 ml-1" />
                                                                        </Link>
                                                                    </Button>
                                                                </div>
                                                                <span className="text-[10px] text-slate-500 font-normal">{student.userId}</span>
                                                            </div>
                                                        </div>
                                                        <div className={`text-xs font-bold ${student.stats.rate < 80 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                                            {Math.round(student.stats.rate)}%
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                {assignments.map(assign => (
                                                    <TableCell key={assign.id} className="text-center border-l border-slate-800/50 p-2">
                                                        {getScoreCell(student.id, assign)}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
