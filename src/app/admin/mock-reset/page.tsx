'use client';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, deleteDoc, doc, orderBy, writeBatch } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Trash2, RefreshCcw, AlertTriangle, User as UserIcon, ArrowLeft, CheckSquare } from 'lucide-react';
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
    const [selectedAttempts, setSelectedAttempts] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCleaning, setIsCleaning] = useState(false);

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
        setSelectedAttempts([]); // Clear selection when student changes
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

    const handleDeleteAttempt = async (attemptId: string, testTitle: string) => {
        if (!confirm(`[${testTitle}] 응시 기록을 정말 삭제하시겠습니까?\n이와 연동된 모든 학습 성적(Manager_Results)도 함께 영구 삭제됩니다.`)) {
            return;
        }

        setIsDeleting(true);
        try {
            const batch = writeBatch(db);

            // 1. Delete the Attempt Document
            batch.delete(doc(db, 'MockTestAttempts', attemptId));

            // 2. Find and Delete Linked Manager_Results
            const resultsRef = collection(db, 'Manager_Results');
            const q = query(resultsRef, where('attemptId', '==', attemptId));
            const snapshot = await getDocs(q);
            snapshot.forEach(d => {
                batch.delete(d.ref);
            });

            await batch.commit();

            setSelectedAttempts(prev => prev.filter(id => id !== attemptId));
            if (selectedStudent) loadAttempts(selectedStudent.userId); // Refresh
            alert(`[${testTitle}] 기록과 연동된 성 데이터가 모두 삭제되었습니다.`);
        } catch (error) {
            console.error("Error deleting attempt:", error);
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleBatchDelete = async () => {
        if (selectedAttempts.length === 0) return;
        if (!confirm(`선택한 ${selectedAttempts.length}개의 응시 기록과 연동된 모든 학습 내역을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
            return;
        }

        setIsDeleting(true);
        try {
            const batch = writeBatch(db);

            // We loop through selected attemptIds to delete both the attempt and its linked results
            for (const attemptId of selectedAttempts) {
                // Delete Attempt
                batch.delete(doc(db, 'MockTestAttempts', attemptId));

                // Find linked Results (Sync query required for each to ensure all are caught)
                const resultsRef = collection(db, 'Manager_Results');
                const q = query(resultsRef, where('attemptId', '==', attemptId));
                const snapshot = await getDocs(q);
                snapshot.forEach(d => {
                    batch.delete(d.ref);
                });
            }

            await batch.commit();

            alert(`${selectedAttempts.length}개의 기록과 관련된 모든 데이터가 삭제되었습니다.`);
            setSelectedAttempts([]);
            if (selectedStudent) loadAttempts(selectedStudent.userId);
        } catch (error) {
            console.error("Error batch deleting:", error);
            alert("일괄 삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleGlobalCleanup = async () => {
        const confirmMsg = "모든 학생의 데이터를 전수 조사하여, 뿌리(응시 기록)가 없는 유령 성적 데이터를 찾아 삭제합니다.\n기존에 잘못 삭제된 기록들을 정리하는 데 효과적입니다. 실행하시겠습니까?";
        if (!confirm(confirmMsg)) return;

        setIsCleaning(true);
        try {
            // 1. Get all valid attempt IDs
            const attemptsSnap = await getDocs(collection(db, 'MockTestAttempts'));
            const validAttemptIds = new Set(attemptsSnap.docs.map(d => d.id));

            // 2. Get all Manager_Results that should have an attemptId
            const resultsRef = collection(db, 'Manager_Results');
            // We focus on mock_test or part_test types that have attemptId field
            const resultsSnap = await getDocs(resultsRef);

            const orphans: any[] = [];
            resultsSnap.forEach(doc => {
                const data = doc.data();
                // If it has an attemptId but that ID is NOT in our valid set
                if (data.attemptId && !validAttemptIds.has(data.attemptId)) {
                    orphans.push(doc.ref);
                }
            });

            if (orphans.length === 0) {
                alert("삭제할 유령 기록이 없습니다. 데이터가 깨끗합니다!");
                return;
            }

            if (!confirm(`총 ${orphans.length}개의 유령 기록이 발견되었습니다. 모두 삭제할까요?`)) return;

            // 3. Batch delete orphans
            const batch = writeBatch(db);
            let count = 0;
            for (const ref of orphans) {
                batch.delete(ref);
                count++;
                // Firestore batch limit is 500
                if (count % 400 === 0) {
                    await batch.commit();
                    // Need a new batch object if we continue
                }
            }

            if (count % 400 !== 0) {
                await batch.commit();
            }

            alert(`성공적으로 ${count}개의 유령 기록을 청소했습니다!`);
            if (selectedStudent) loadAttempts(selectedStudent.userId);
        } catch (error) {
            console.error("Cleanup error:", error);
            alert("청소 도중 오류가 발생했습니다.");
        } finally {
            setIsCleaning(false);
        }
    };

    const toggleSelectAll = () => {
        if (selectedAttempts.length === attempts.length) {
            setSelectedAttempts([]);
        } else {
            setSelectedAttempts(attempts.map(a => a.id));
        }
    };

    const toggleSelect = (id: string) => {
        setSelectedAttempts(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
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
                <div className="ml-auto flex items-center gap-4">
                    <div className="text-right hidden md:block">
                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest leading-none mb-1">Data Integrity</p>
                        <p className="text-[10px] text-slate-500 font-bold italic">주인 없는 유령 기록들을 청소합니다.</p>
                    </div>
                    <Button
                        onClick={handleGlobalCleanup}
                        disabled={isCleaning}
                        className="bg-slate-900 border border-rose-500/30 text-rose-500 hover:bg-rose-500 hover:text-white font-black italic uppercase text-xs h-12 px-6 rounded-xl shadow-lg transition-all"
                    >
                        {isCleaning ? <RefreshCcw className="w-4 h-4 animate-spin mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
                        유령 기록 일괄 청소기 (Cleanup)
                    </Button>
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
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                        <div>
                            <CardTitle>
                                {selectedStudent ? `${selectedStudent.userName}님의 응시 기록` : '학생을 선택해주세요'}
                            </CardTitle>
                            <CardDescription>
                                기록을 삭제하면 해당 회차를 다시 응시할 수 있습니다.
                            </CardDescription>
                        </div>
                        {selectedAttempts.length > 0 && (
                            <Button
                                variant="destructive"
                                size="sm"
                                onClick={handleBatchDelete}
                                disabled={isDeleting}
                                className="bg-rose-600 hover:bg-rose-500 font-bold"
                            >
                                <CheckSquare className="w-4 h-4 mr-2" />
                                {selectedAttempts.length}개 일괄 삭제
                            </Button>
                        )}
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
                                            <TableHead className="w-[50px]">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 rounded border-slate-700 bg-slate-900"
                                                    checked={attempts.length > 0 && selectedAttempts.length === attempts.length}
                                                    onChange={toggleSelectAll}
                                                />
                                            </TableHead>
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
                                                <TableCell>
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-slate-700 bg-slate-900"
                                                        checked={selectedAttempts.includes(attempt.id)}
                                                        onChange={() => toggleSelect(attempt.id)}
                                                    />
                                                </TableCell>
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
                                                        disabled={isDeleting}
                                                        className="bg-rose-900/50 hover:bg-rose-700 text-rose-200 border border-rose-800"
                                                    >
                                                        <Trash2 className="w-3 h-3 mr-2" />
                                                        삭제
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
