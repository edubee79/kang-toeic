'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, BarChart3, Download, ArrowLeft, Trophy, Users, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import * as XLSX from 'xlsx';

interface PartScore {
    correct: number;
    total: number;
}

interface ReportItem {
    id: string;
    userId: string;
    userName: string;
    className: string;
    testTitle: string;
    totalScore: number;
    totalQuestions: number;
    partScores: Record<string, PartScore>;
    date: string;
}

export default function MockReportPage() {
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [selectedClass, setSelectedClass] = useState('all');
    const [reportData, setReportData] = useState<ReportItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [stats, setStats] = useState({
        avgScore: 0,
        totalTakers: 0,
        topScore: 0
    });
    const [availableTests, setAvailableTests] = useState<{ id: string, title: string }[]>([
        { id: '9', title: '제1회 실전 모의고사' },
        { id: '10', title: '제2회 실전 모의고사' }
    ]);
    const [selectedTest, setSelectedTest] = useState('all');

    // 0. Fetch Classes
    useEffect(() => {
        const fetchClasses = async () => {
            const q = query(collection(db, "Classes"), orderBy("name"));
            const snapshot = await getDocs(q);
            const list: { name: string }[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.name) list.push({ name: data.name });
            });
            setClasses(list);
        };
        fetchClasses();
    }, []);

    // 1. Fetch Report Data
    const fetchReport = async () => {
        setIsLoading(true);
        try {
            // 1. Get all completed attempts
            const attemptsRef = collection(db, 'MockTestAttempts');
            const q = query(attemptsRef, where('status', '==', 'completed'));
            const snapshot = await getDocs(q);

            // 2. Get all users to match ClassName
            const usersRef = collection(db, 'Winter_Users');
            const usersSnapshot = await getDocs(usersRef);
            const userMap = new Map();
            usersSnapshot.forEach(doc => {
                const data = doc.data();
                userMap.set(data.userId, data);
            });

            const results: ReportItem[] = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                const student = userMap.get(data.userId);

                // Filter by Class if selected
                if (selectedClass !== 'all' && student?.className !== selectedClass) {
                    return;
                }

                // Filter by Test if selected
                if (selectedTest !== 'all' && String(data.testId) !== selectedTest) {
                    return;
                }

                results.push({
                    id: doc.id,
                    userId: data.userId,
                    userName: data.userName || student?.userName || 'Unknown',
                    className: student?.className || '-',
                    testTitle: data.testTitle || `Test ${data.testId}`,
                    totalScore: data.totalScore || 0,
                    totalQuestions: data.totalQuestions || 0,
                    partScores: data.partScores || {},
                    date: data.date
                });
            });

            // Sort by Rank (Score DESC)
            results.sort((a, b) => b.totalScore - a.totalScore);
            setReportData(results);

            // Calculate Stats
            if (results.length > 0) {
                const sum = results.reduce((acc, curr) => acc + curr.totalScore, 0);
                setStats({
                    avgScore: Math.round((sum / results.length) * 10) / 10,
                    totalTakers: results.length,
                    topScore: results[0].totalScore
                });
            } else {
                setStats({ avgScore: 0, totalTakers: 0, topScore: 0 });
            }

            // Extract unique tests for the filter (keeping 1st and 2nd as default)
            const tests = new Map();
            tests.set('9', '제1회 실전 모의고사');
            tests.set('10', '제2회 실전 모의고사');

            snapshot.forEach(doc => {
                const data = doc.data();
                const tId = String(data.testId);
                if (!tests.has(tId)) {
                    tests.set(tId, data.testTitle || `Test ${tId}`);
                }
            });
            const testList = Array.from(tests.entries()).map(([id, title]) => ({ id, title }));
            setAvailableTests(testList);

        } catch (error) {
            console.error("Report error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReport();
    }, [selectedClass, selectedTest]);

    // Export to Excel
    const handleExport = () => {
        const data = reportData.map((item, index) => ({
            '석차': index + 1,
            '이름': item.userName,
            '아이디': item.userId,
            '반': item.className,
            '총점': item.totalScore,
            'P1 오답': (item.partScores.p1?.total || 0) - (item.partScores.p1?.correct || 0),
            'P2 오답': (item.partScores.p2?.total || 0) - (item.partScores.p2?.correct || 0),
            'P3 오답': (item.partScores.p3?.total || 0) - (item.partScores.p3?.correct || 0),
            'P4 오답': (item.partScores.p4?.total || 0) - (item.partScores.p4?.correct || 0),
            'P5 오답': (item.partScores.p5?.total || 0) - (item.partScores.p5?.correct || 0),
            'P6 오답': (item.partScores.p6?.total || 0) - (item.partScores.p6?.correct || 0),
            'P7 오답': (item.partScores.p7?.total || 0) - (item.partScores.p7?.correct || 0),
            '응시일': new Date(item.date).toLocaleDateString()
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "MockReport");
        XLSX.writeFile(wb, `Mock_Report_${selectedClass}_Test${selectedTest}_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    return (
        <div className="p-8 min-h-screen bg-slate-50 text-slate-900 space-y-8">
            <div className="flex justify-between items-center">
                <div className="flex items-start gap-4">
                    <Link href="/admin/dashboard">
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black flex items-center gap-3 mb-2 italic uppercase">
                            <BarChart3 className="text-indigo-600" />
                            Mock Test <span className="text-indigo-600">Leaderboard</span>
                        </h1>
                        <p className="text-slate-500 font-bold">반별 모의고사 응시 현황 및 성적 리포트</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Select value={selectedTest} onValueChange={setSelectedTest}>
                        <SelectTrigger className="w-[180px] bg-white border-slate-200 shadow-sm font-bold text-slate-900">
                            <SelectValue placeholder="모의고사 선택" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200">
                            <SelectItem value="all" className="text-slate-900 focus:bg-slate-100 italic">전체 모의고사</SelectItem>
                            {availableTests.map((test) => (
                                <SelectItem key={test.id} value={test.id} className="text-slate-900 focus:bg-slate-100 font-medium">
                                    {test.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger className="w-[180px] bg-white border-slate-200 shadow-sm font-bold text-slate-900">
                            <SelectValue placeholder="반 선택" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200">
                            <SelectItem value="all" className="text-slate-900 focus:bg-slate-100 italic">전체 수강반</SelectItem>
                            {classes.map((cls) => (
                                <SelectItem key={cls.name} value={cls.name} className="text-slate-900 focus:bg-slate-100 font-medium">
                                    {cls.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleExport} variant="outline" className="border-emerald-200 text-emerald-600 hover:bg-emerald-50">
                        <Download className="w-4 h-4 mr-2" /> 엑셀 다운로드
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-none shadow-lg bg-white rounded-3xl group overflow-hidden">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                            <Users className="w-4 h-4" /> 총 응시 인원
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-slate-900">{stats.totalTakers}명</div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-indigo-600 text-white rounded-3xl group overflow-hidden relative">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase text-indigo-100 flex items-center gap-2">
                            <Star className="w-4 h-4" /> 반 평균 점수
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black">{stats.avgScore}점</div>
                        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    </CardContent>
                </Card>
                <Card className="border-none shadow-lg bg-white rounded-3xl group overflow-hidden">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-black uppercase text-slate-400 flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-amber-500" /> 최고 점수
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-slate-900">{stats.topScore}점</div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Report Table */}
            <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                <CardContent className="p-0">
                    <div className="max-h-[700px] overflow-auto">
                        <Table>
                            <TableHeader className="bg-slate-50 sticky top-0 z-10">
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="w-16 font-black text-[10px] uppercase text-slate-400 text-center">Rank</TableHead>
                                    <TableHead className="w-32 font-black text-[10px] uppercase text-slate-400">Student</TableHead>
                                    <TableHead className="w-24 font-black text-[10px] uppercase text-slate-400">Class</TableHead>
                                    <TableHead className="w-24 font-black text-[10px] uppercase text-indigo-500">Total Score</TableHead>
                                    {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map(p => (
                                        <TableHead key={p} className="w-16 font-black text-[10px] uppercase text-slate-400 text-center">{p} <br /> 오답</TableHead>
                                    ))}
                                    <TableHead className="text-right font-black text-[10px] uppercase text-slate-400 pr-8">Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={11} className="h-64 text-center text-slate-400 font-bold animate-pulse">데이터 분석 중...</TableCell>
                                    </TableRow>
                                ) : reportData.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={11} className="h-64 text-center text-slate-400 font-bold">응시 기록이 없습니다.</TableCell>
                                    </TableRow>
                                ) : (
                                    reportData.map((item, index) => (
                                        <TableRow key={item.id} className="group hover:bg-slate-50/80 transition-colors border-slate-50">
                                            <TableCell className="text-center">
                                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black mx-auto ${index === 0 ? 'bg-amber-100 text-amber-600 shadow-sm border border-amber-200' :
                                                    index === 1 ? 'bg-slate-200 text-slate-600' :
                                                        index === 2 ? 'bg-orange-50 text-orange-600' : 'text-slate-400'
                                                    }`}>
                                                    {index + 1}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-900">{item.userName}</span>
                                                    <span className="text-[10px] text-slate-400 uppercase tracking-tighter">{item.userId}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="bg-slate-50 border-slate-200 text-slate-500 font-bold">{item.className}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-lg font-black text-indigo-600">{item.totalScore}</span>
                                                    <span className="text-[10px] text-slate-400 font-bold">/ {item.totalQuestions}</span>
                                                </div>
                                            </TableCell>
                                            {['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'].map(pKey => {
                                                const score = item.partScores[pKey];
                                                const wrong = score ? score.total - score.correct : '-';
                                                return (
                                                    <TableCell key={pKey} className="text-center font-bold">
                                                        <span className={wrong !== '-' && (wrong as number) > 5 ? 'text-rose-500 font-black' : 'text-slate-500'}>
                                                            {wrong}
                                                        </span>
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell className="text-right pr-8 text-xs text-slate-400 font-medium">
                                                {new Date(item.date).toLocaleDateString()}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest pt-8">
                End of Report
            </div>
        </div>
    );
}
