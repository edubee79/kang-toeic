'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Trash2, RefreshCcw, AlertTriangle, User as UserIcon, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

interface Student {
    id: string; // docId
    userId: string;
    userName: string;
    universityName?: string;
    className?: string;
}

interface MockTestAttempt {
    id: string; // docId
    testId: number;
    testTitle?: string;
    status: 'in_progress' | 'completed';
    date: string;
    studentName: string;
    totalScore?: number;
    totalQuestions?: number;
}

export default function MockTestResetPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [attempts, setAttempts] = useState<MockTestAttempt[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Class Filter States
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [selectedClass, setSelectedClass] = useState('all');

    // 0. Fetch Classes on Mount
    useEffect(() => {
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
        fetchClasses();
    }, []);

    // 1. Search Students
    const handleSearch = async () => {
        // if (!searchTerm.trim()) return; // Removed to allow class-only filter
        setIsLoading(true);
        setStudents([]);
        setSelectedStudent(null);
        setAttempts([]);

        try {
            // Simple search by userId or userName (Client-side filtering for simplicity if small scale, or specific queries)
            // For now, let's fetch 'Winter_Users' (approved) and filter.
            const usersRef = collection(db, 'Winter_Users');
            const q = query(usersRef, where('status', '==', 'approved')); // Only approved students
            const snapshot = await getDocs(q);

            const results: Student[] = [];
            const term = searchTerm.toLowerCase();

            snapshot.forEach(doc => {
                const data = doc.data();
                const userName = data.userName || '';
                const userId = data.userId || '';
                const className = data.className || '';

                // Filter by Class
                if (selectedClass !== 'all' && className !== selectedClass) {
                    return;
                }

                // Filter by Search Term
                if (searchTerm === '' || userName.toLowerCase().includes(term) || userId.toLowerCase().includes(term)) {
                    results.push({
                        id: doc.id,
                        userId: userId,
                        userName: userName,
                        universityName: data.universityName,
                        className: className
                    });
                }
            });

            setStudents(results);
        } catch (error) {
            console.error("Error searching students:", error);
            alert("학생 검색 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-search on class change
    useEffect(() => {
        handleSearch();
    }, [selectedClass]);

    // 2. Load Attempts for Selected Student
    const selectStudent = async (student: Student) => {
        setSelectedStudent(student);
        loadAttempts(student.userId);
    };

    const loadAttempts = async (userId: string) => {
        try {
            const attemptsRef = collection(db, 'MockTestAttempts');
            // Remove orderBy to avoid index requirement
            const q = query(attemptsRef, where('userId', '==', userId));
            const snapshot = await getDocs(q);

            const list: MockTestAttempt[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as MockTestAttempt));

            // Client-side sorting (Newest first)
            list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            setAttempts(list);
        } catch (error) {
            console.error("Error loading attempts:", error);
            // Index warning might occur if composite index missing.
            // Fallback: Client-side sorting if index error.
        }
    };

    // 3. Reset (Delete) Attempt
    const handleDeleteAttempt = async (attemptId: string, testTitle: string) => {
        if (!confirm(`[${testTitle}] 응시 기록을 정말 삭제하시겠습니까?\n삭제 후 학생은 다시 시험을 볼 수 있습니다.`)) {
            return;
        }

        try {
            await deleteDoc(doc(db, 'MockTestAttempts', attemptId));
            alert("응시 기록이 삭제되었습니다. 이제 재응시가 가능합니다.");
            if (selectedStudent) loadAttempts(selectedStudent.userId); // Refresh
        } catch (error) {
            console.error("Error deleting attempt:", error);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    return (
        <div className="p-8 min-h-screen bg-slate-950 text-white space-y-8">
            <div className="flex items-start gap-4">
                <Link href="/admin/dashboard">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black flex items-center gap-3 mb-2">
                        <RefreshCcw className="text-rose-500" />
                        모의고사 재응시 관리
                    </h1>
                    <p className="text-slate-400">학생의 모의고사 응시 기록을 초기화(삭제)하여 재응시를 허용합니다.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left: Student Search */}
                <Card className="bg-slate-900 border-slate-800 lg:col-span-1 h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <UserIcon className="w-5 h-5 text-indigo-400" />
                            학생 검색
                        </CardTitle>
                        <CardDescription>이름 또는 아이디로 검색하세요.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Select value={selectedClass} onValueChange={setSelectedClass}>
                                <SelectTrigger className="w-[120px] bg-slate-950 border-slate-800">
                                    <SelectValue placeholder="반 선택" />
                                </SelectTrigger>
                                <SelectContent className="bg-slate-900 border-slate-800">
                                    <SelectItem value="all" className="text-white focus:bg-slate-800 focus:text-white">전체 반</SelectItem>
                                    {classes.map((cls) => (
                                        <SelectItem key={cls.name} value={cls.name} className="text-white focus:bg-slate-800 focus:text-white">
                                            {cls.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Input
                                placeholder="이름/ID 입력..."
                                className="bg-slate-950 border-slate-800 flex-1"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                            <Button onClick={handleSearch} disabled={isLoading} className="bg-indigo-600 hover:bg-indigo-500">
                                <Search className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="space-y-2 mt-4 max-h-[400px] overflow-y-auto">
                            {students.length === 0 && !isLoading && searchTerm && (
                                <p className="text-sm text-slate-500 text-center py-4">검색 결과가 없습니다.</p>
                            )}
                            {students.map(student => (
                                <div
                                    key={student.id}
                                    onClick={() => selectStudent(student)}
                                    className={`p-3 rounded-md cursor-pointer transition-all border ${selectedStudent?.id === student.id
                                        ? 'bg-indigo-900/30 border-indigo-500'
                                        : 'bg-slate-950 border-slate-800 hover:border-slate-600'
                                        }`}
                                >
                                    <div className="font-bold text-white">
                                        {student.userName}
                                        {student.className && <span className="ml-2 text-xs font-normal text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">{student.className}</span>}
                                    </div>
                                    <div className="text-xs text-slate-400 flex justify-between">
                                        <span>{student.userId}</span>
                                        <span>{student.universityName}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Right: Attempts List */}
                <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>
                            {selectedStudent ? `${selectedStudent.userName}님의 응시 기록` : '학생을 선택해주세요'}
                        </CardTitle>
                        <CardDescription>
                            기록을 삭제하면 해당 회차를 다시 응시할 수 있습니다.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!selectedStudent ? (
                            <div className="text-center py-12 text-slate-600">
                                <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                <p>왼쪽에서 학생을 검색하고 선택해주세요.</p>
                            </div>
                        ) : attempts.length === 0 ? (
                            <div className="text-center py-12 text-slate-500">
                                <p>응시 기록이 없습니다. (아직 시험을 보지 않음)</p>
                            </div>
                        ) : (
                            <div className="rounded-md border border-slate-800 overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-slate-950">
                                        <TableRow className="border-slate-800">
                                            <TableHead>시험명</TableHead>
                                            <TableHead>상태</TableHead>
                                            <TableHead>성적</TableHead>
                                            <TableHead>시작 시간</TableHead>
                                            <TableHead className="text-right">관리</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {attempts.map(attempt => (
                                            <TableRow key={attempt.id} className="border-slate-800 hover:bg-slate-800/30">
                                                <TableCell className="font-medium text-white">
                                                    {attempt.testTitle || `Test ID: ${attempt.testId}`}
                                                </TableCell>
                                                <TableCell>
                                                    {attempt.status === 'completed' ? (
                                                        <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-emerald-500/20">완료됨</Badge>
                                                    ) : (
                                                        <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20">진행중</Badge>
                                                    )}
                                                </TableCell>
                                                <TableCell>
                                                    {attempt.status === 'completed' && attempt.totalQuestions ? (
                                                        <div className="flex flex-col">
                                                            <span className="text-indigo-400 font-bold">{attempt.totalScore} / {attempt.totalQuestions}</span>
                                                            <span className="text-[10px] text-slate-500">{Math.round((attempt.totalScore! / attempt.totalQuestions!) * 100)}%</span>
                                                        </div>
                                                    ) : (
                                                        <span className="text-slate-600">-</span>
                                                    )}
                                                </TableCell>
                                                <TableCell className="text-slate-400 text-sm">
                                                    {new Date(attempt.date).toLocaleString()}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => handleDeleteAttempt(attempt.id, attempt.testTitle || '시험')}
                                                        className="bg-rose-900/50 hover:bg-rose-700 text-rose-200 border border-rose-800"
                                                    >
                                                        <Trash2 className="w-3 h-3 mr-2" />
                                                        기록 삭제 (초기화)
                                                    </Button>
                                                </TableCell>
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
