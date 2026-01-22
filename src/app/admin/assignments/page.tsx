'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Plus, Trash2, CheckCircle2, ChevronLeft, Clock, Save, RefreshCw } from "lucide-react";
import { useRouter } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Grammar Unit Mapping
const GRAMMAR_UNITS = [
    "문장 구조 (Structure)",
    "명사 (Noun)",
    "대명사 (Pronoun)",
    "형용사 (Adjective)",
    "부사 (Adverb)",
    "전치사 (Preposition)",
    "동사 (Verb)",
    "to 부정사 (To Infinitive)",
    "동명사 (Gerund)",
    "분사 (Participle)",
    "부사절 접속사 (Adverbial Conjunctions)",
    "관계절 (Relative Clauses)",
    "명사절 (Noun Clauses)"
];

// Configuration for each column
const HOMEWORK_COLS = [
    { id: 'level_test', label: '레벨테스트 (Level)', prefix: 'Vol', range: 2 },
    { id: 'voca', label: '단어 (Voca)', prefix: 'Day', range: 20 },
    { id: 'grammar', label: '문법 (Grammar)', prefix: 'Unit', range: 13, startIndex: 0 },
    { id: 'part1_shadow', label: 'Part 1 쉐도잉', prefix: 'Set', range: 3 },
    { id: 'part1_test', label: 'LC Part 1 실전', prefix: 'Test', range: 10 },
    { id: 'part2_test', label: 'LC Part 2 실전', prefix: 'Test', range: 10 },
    { id: 'part3_test', label: 'LC Part 3 실전', prefix: 'Test', range: 10 },
    { id: 'part4_test', label: 'LC Part 4 실전', prefix: 'Test', range: 10 },
    { id: 'part5_test', label: 'RC Part 5 실전', prefix: 'Test', range: 10 },
    { id: 'part6_test', label: 'RC Part 6 실전', prefix: 'Test', range: 10 },
    { id: 'part7_single', label: 'RC Part 7 싱글', prefix: 'Test', range: 10 },
    { id: 'part7_double', label: 'RC Part 7 더블/트리플', prefix: 'Test', range: 10 },
    { id: 'mock_test', label: '모의고사 (Mock)', prefix: 'Exam', range: 5 },
    { id: 'weakness_review', label: 'AI취약점 (Analysis)', prefix: 'Week', range: 4 },
];

import { generateWeeklyReview } from '@/services/weaknessGenerator';

import { isAdmin } from '@/lib/adminAuth';

export default function AssignHomeworkPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [generatingWeakness, setGeneratingWeakness] = useState(false);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [assignments, setAssignments] = useState<any[]>([]);

    // Form State: one value per column
    const [selectedClass, setSelectedClass] = useState<string>('');
    const [selections, setSelections] = useState<{ [key: string]: string }>({});

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
            fetchClasses();
            fetchAssignments();
        };
        checkAdmin();
    }, []);

    const fetchClasses = async () => {
        try {
            const q = query(collection(db, "Classes"), orderBy("name"));
            const snapshot = await getDocs(q);
            const list: { name: string }[] = [];
            snapshot.forEach(doc => list.push({ name: doc.data().name }));
            setClasses(list);
        } catch (error) {
            console.error("Error fetching classes:", error);
        }
    };

    const fetchAssignments = async () => {
        try {
            const q = query(collection(db, "Assignments"), orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            const list: any[] = [];
            snapshot.forEach(doc => list.push({ id: doc.id, ...doc.data() }));
            setAssignments(list);
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };

    const handleSelectionChange = (colId: string, value: string) => {
        setSelections(prev => ({
            ...prev,
            [colId]: value
        }));
    };

    // Grouping Helper
    const groupAssignments = (rawList: any[]) => {
        const groups: Record<string, any> = {};

        rawList.forEach(item => {
            // Group Key: batchId (preferred) -> or fallback to "Class_TimeMinutes"
            let key = item.batchId;
            if (!key) {
                // Fallback for legacy data: Group by Class + Time (Minute precision)
                const dateStr = item.createdAt?.toDate ? item.createdAt.toDate().toISOString().substring(0, 16) : 'unknown';
                key = `${item.targetClass}_${dateStr}`;
            }

            if (!groups[key]) {
                groups[key] = {
                    id: key,
                    batchId: item.batchId,
                    targetClass: item.targetClass,
                    createdBy: item.createdBy,
                    createdAt: item.createdAt,
                    items: [],
                    docIds: []
                };
            }
            groups[key].items.push(item);
            groups[key].docIds.push(item.id);
        });

        // Convert to array and sort
        return Object.values(groups).sort((a, b) => {
            const tA = a.createdAt?.seconds || 0;
            const tB = b.createdAt?.seconds || 0;
            return tB - tA;
        });
    };

    const handleCreateAssignment = async () => {
        if (!selectedClass) {
            alert("반을 먼저 선택해주세요.");
            return;
        }

        const activeSelections = Object.entries(selections).filter(([_, val]) => val && val !== 'none');
        if (activeSelections.length === 0) {
            alert("최소 하나의 숙제를 선택해주세요.");
            return;
        }

        setLoading(true);
        try {
            const batchId = doc(collection(db, "Assignments")).id; // Generate random ID for batch
            const sharedTimestamp = Timestamp.now();

            const promises = activeSelections.map(async ([key, val]) => {
                const config = HOMEWORK_COLS.find(c => c.id === key);
                await addDoc(collection(db, "Assignments"), {
                    targetClass: selectedClass,
                    type: key,
                    typeLabel: config?.label,
                    detail: val,
                    createdAt: sharedTimestamp,
                    createdBy: 'Admin',
                    isActive: true,
                    batchId: batchId // Link them together
                });
            });

            await Promise.all(promises);

            setSelections({});
            fetchAssignments();
            alert("숙제가 배포되었습니다.");
        } catch (error) {
            console.error("Error creating assignment:", error);
            alert("숙제 배포 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("선택한 항목을 삭제하시겠습니까?")) return;
        try {
            await deleteDoc(doc(db, "Assignments", id));
            // alert("삭제되었습니다."); // Too noisy for quick deletes
            fetchAssignments();
        } catch (error: any) {
            console.error("Delete error:", error);
            alert("삭제 실패: " + error.message);
        }
    };

    const handleDeleteBatch = async (docIds: string[]) => {
        if (!confirm(`이 배포 내역(${docIds.length}개 항목)을 모두 삭제하시겠습니까?`)) return;
        try {
            await Promise.all(docIds.map(id => deleteDoc(doc(db, "Assignments", id))));
            alert("삭제되었습니다.");
            fetchAssignments();
        } catch (error: any) {
            console.error("Delete error:", error);
            alert("삭제 실패: " + error.message);
        }
    };

    // Render Helper
    const groupedAssignments = groupAssignments(assignments);

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-6">
            {/* Header & Creation Form (Keep existing) */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-8">
                <Button variant="ghost" size="icon" onClick={() => router.push('/admin/dashboard')} className="rounded-full hover:bg-slate-100">
                    <ChevronLeft className="w-6 h-6 text-slate-600" />
                </Button>
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter">HOMEWORK DISPATCHER</h1>
                    <p className="text-slate-500 font-bold text-sm mt-1">원클릭 다중 숙제 배포 시스템</p>
                </div>
            </div>

            {/* Control Bar */}
            <Card className="border-none shadow-xl bg-white rounded-2xl overflow-visible z-10 w-full mb-8">
                <div className="p-4 flex items-center gap-4 w-full">
                    {/* Class Selector */}
                    <div className="min-w-[150px] flex-shrink-0">
                        <label className="text-[10px] font-black text-slate-400 uppercase mb-1 block pl-1">Target Class</label>
                        <Select value={selectedClass} onValueChange={setSelectedClass}>
                            <SelectTrigger className="h-10 rounded-lg bg-slate-900 text-white border-none font-bold shadow-md">
                                <SelectValue placeholder="반 선택" />
                            </SelectTrigger>
                            <SelectContent className="bg-white text-slate-900 border border-slate-200 shadow-xl z-[9999]">
                                <SelectItem value="all" className="font-bold hover:bg-slate-100 focus:bg-slate-100">전체 반 (All)</SelectItem>
                                {classes.map(cls => (
                                    <SelectItem key={cls.name} value={cls.name} className="hover:bg-slate-100 focus:bg-slate-100 cursor-pointer">{cls.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-px h-8 bg-slate-200 flex-shrink-0"></div>
                    {/* Compact Selectors */}
                    <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar -mb-4 min-w-0">
                        <div className="flex items-center gap-2">
                            {HOMEWORK_COLS.map(col => (
                                <div key={col.id} className="min-w-[100px] flex-shrink-0">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block pl-1 truncate" title={col.label}>{col.label.split('(')[0]}</label>
                                    <Select
                                        value={selections[col.id] || ''}
                                        onValueChange={(val) => handleSelectionChange(col.id, val)}
                                    >
                                        <SelectTrigger className={`h-9 text-xs rounded-md border-slate-200 ${selections[col.id] ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-bold' : 'bg-white'}`}>
                                            <SelectValue placeholder="-" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white text-slate-900 border border-slate-200 shadow-xl z-[9999] max-h-[300px]">
                                            <SelectItem value="none" className="text-slate-400">선택 안함</SelectItem>
                                            {Array.from({ length: col.range }, (_, i) => {
                                                const num = i + (col.startIndex ?? 1);
                                                return (<SelectItem key={i} value={`${col.prefix} ${num}`}>{col.prefix} {num}</SelectItem>);
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-px h-8 bg-slate-200 flex-shrink-0"></div>
                    <Button
                        className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-bold shadow-lg shadow-indigo-600/20 whitespace-nowrap"
                        onClick={handleCreateAssignment}
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "배포하기"}
                    </Button>
                </div>
            </Card>

            {/* AI Generation (Collapsed by default or small) - Keep existing but maybe simpler? Let's keep distinct. */}

            {/* History Table (Excel-like Grid) */}
            <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardHeader className="pb-4 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Clock className="w-5 h-5 text-slate-400" />
                            배포 현황 (Excel View)
                        </CardTitle>
                        <Button variant="outline" size="sm" onClick={fetchAssignments} className="h-8 text-xs">
                            <RefreshCw className="w-3 h-3 mr-1" /> 새로고침
                        </Button>
                    </div>
                </CardHeader>
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50/50">
                            <TableRow className="hover:bg-transparent">
                                <TableHead className="w-[140px] font-bold text-slate-900 whitespace-nowrap">배포 일시</TableHead>
                                <TableHead className="w-[100px] font-bold text-slate-900 whitespace-nowrap">대상 반</TableHead>
                                {HOMEWORK_COLS.map(col => (
                                    <TableHead key={col.id} className="min-w-[80px] text-xs font-bold text-slate-500 text-center whitespace-nowrap border-l border-slate-100">
                                        {col.label.split('(')[0]}
                                    </TableHead>
                                ))}
                                <TableHead className="w-[60px] text-center font-bold text-slate-900 whitespace-nowrap border-l border-slate-100">삭제</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {groupedAssignments.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={HOMEWORK_COLS.length + 3} className="h-32 text-center text-slate-400">
                                        배포 내역이 없습니다.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                groupedAssignments.map((group) => (
                                    <TableRow key={group.id} className="hover:bg-indigo-50/30 transition-colors group">
                                        <TableCell className="font-mono text-xs text-slate-500 whitespace-nowrap">
                                            {group.createdAt?.toDate ? group.createdAt.toDate().toLocaleString('ko-KR', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : '-'}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="bg-white text-slate-700 border-slate-200 font-bold whitespace-nowrap shadow-sm">
                                                {group.targetClass === 'all' ? '전체' : group.targetClass}
                                            </Badge>
                                        </TableCell>

                                        {HOMEWORK_COLS.map(col => {
                                            // Find item in this group matching column type
                                            const item = group.items.find((i: any) => i.type === col.id);
                                            return (
                                                <TableCell key={col.id} className="text-center p-2 border-l border-slate-100/50 relative group/cell">
                                                    {item ? (
                                                        <div className="relative inline-block">
                                                            <span className="inline-block px-2 py-1 rounded bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100 whitespace-nowrap">
                                                                {item.detail}
                                                            </span>
                                                            <button
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleDelete(item.id);
                                                                }}
                                                                className="absolute -top-2 -right-2 bg-white text-rose-500 border border-slate-200 rounded-full w-4 h-4 flex items-center justify-center opacity-0 group-hover/cell:opacity-100 shadow-sm hover:bg-rose-50 transition-all z-10"
                                                                title="삭제"
                                                            >
                                                                <Trash2 className="w-2.5 h-2.5" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <span className="text-slate-200 text-xs">-</span>
                                                    )}
                                                </TableCell>
                                            );
                                        })}

                                        <TableCell className="text-center border-l border-slate-100/50">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-full"
                                                onClick={() => handleDeleteBatch(group.docIds)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
