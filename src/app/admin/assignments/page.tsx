'use client';

import { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, getDocs, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Plus, Trash2, CheckCircle2, ChevronLeft, Clock, Save } from "lucide-react";
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
    { id: 'voca', label: '단어 (Voca)', prefix: 'Day', range: 20 },
    { id: 'grammar', label: '문법 (Grammar)', prefix: 'Unit', range: 13, startIndex: 0 },
    { id: 'part1_shadow', label: 'Part 1 쉐도잉', prefix: 'Set', range: 3 },
    { id: 'part2_test', label: 'LC Part 2 실전', prefix: 'Test', range: 10 },
    { id: 'part3_test', label: 'LC Part 3 실전', prefix: 'Test', range: 10 },
    { id: 'part4_test', label: 'LC Part 4 실전', prefix: 'Test', range: 10 },
    { id: 'part5_test', label: 'RC Part 5 실전', prefix: 'Test', range: 10 },
    { id: 'part6_test', label: 'RC Part 6 실전', prefix: 'Test', range: 10 },
    { id: 'part7_test', label: 'RC Part 7 실전', prefix: 'Test', range: 1 },
];

import { generateWeeklyReview } from '@/services/weaknessGenerator';

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
        fetchClasses();
        fetchAssignments();
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

    const handleCreateAssignment = async () => {
        if (!selectedClass) {
            alert("반을 먼저 선택해주세요.");
            return;
        }

        // Filter out empty selections
        const activeSelections = Object.entries(selections).filter(([_, val]) => val && val !== 'none');

        if (activeSelections.length === 0) {
            alert("최소 하나의 숙제를 선택해주세요.");
            return;
        }

        setLoading(true);
        try {
            // Create individual assignment records for compatibility with Student Dashboard
            const promises = activeSelections.map(async ([key, val]) => {
                const config = HOMEWORK_COLS.find(c => c.id === key);

                await addDoc(collection(db, "Assignments"), {
                    targetClass: selectedClass,
                    type: key,         // e.g., 'voca'
                    typeLabel: config?.label, // e.g., '단어 (Voca)'
                    detail: val,       // e.g., 'Day 1'
                    createdAt: Timestamp.now(),
                    createdBy: 'Admin',
                    isActive: true
                });
            });

            await Promise.all(promises);

            // Reset
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
        if (!confirm("이 배포 내역을 삭제하시겠습니까? 학생들의 학습방에서도 사라집니다.")) return;
        try {
            await deleteDoc(doc(db, "Assignments", id));
            fetchAssignments();
        } catch (error) {
            console.error("Error deleting assignment:", error);
        }
    };

    const handleGenerateWeakness = async () => {
        if (!selectedClass || selectedClass === 'all') {
            alert("반을 선택해주세요. (전체 반 대상으로는 AI 분석 부하로 인해 실행할 수 없습니다)");
            return;
        }

        if (!confirm(`'${selectedClass}' 반 학생들의 지난주 오답을 분석하여 개인별 과제를 생성하시겠습니까?`)) return;

        setGeneratingWeakness(true);
        try {
            const result = await generateWeeklyReview(selectedClass);
            if (result.count === 0) {
                alert("지난주 오답 데이터가 없거나 대상 학생이 없어 생성된 과제가 없습니다.");
            } else {
                alert(`총 ${result.count}명의 학생에게 약점 보완 과제가 배포되었습니다.`);
                fetchAssignments();
            }
        } catch (error) {
            console.error("Generation failed:", error);
            alert("과제 생성 중 오류가 발생했습니다.");
        } finally {
            setGeneratingWeakness(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-8">
                <Button variant="ghost" size="icon" onClick={() => router.push('/admin/dashboard')} className="rounded-full hover:bg-slate-100">
                    <ChevronLeft className="w-6 h-6 text-slate-600" />
                </Button>
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tighter">HOMEWORK DISPATCHER</h1>
                    <p className="text-slate-500 font-bold text-sm mt-1">원클릭 다중 숙제 배포 시스템</p>
                </div>
            </div>

            {/* Control Bar (Horizontal Layout) */}
            <Card className="border-none shadow-xl bg-white rounded-2xl overflow-visible z-10 w-full">
                <div className="p-4 flex items-center gap-4 w-full">

                    {/* Class Selector (Fixed Left) */}
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

                    {/* Scrollable Columns (Middle) */}
                    <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar -mb-4 min-w-0">
                        <div className="flex items-center gap-2">
                            {HOMEWORK_COLS.map(col => (
                                <div key={col.id} className="min-w-[110px] flex-shrink-0">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase mb-1 block pl-1 truncate" title={col.label}>{col.label}</label>
                                    <Select
                                        value={selections[col.id] || ''}
                                        onValueChange={(val) => handleSelectionChange(col.id, val)}
                                    >
                                        <SelectTrigger className={`h-10 rounded-lg border-slate-200 font-medium text-xs ${selections[col.id] ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-bold' : 'bg-white'}`}>
                                            <SelectValue placeholder="-" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white text-slate-900 border border-slate-200 shadow-xl z-[9999]">
                                            <SelectItem value="none" className="text-slate-400 hover:bg-slate-100 focus:bg-slate-100 cursor-pointer">선택 안함</SelectItem>
                                            {Array.from({ length: col.range }, (_, i) => {
                                                const num = i + (col.startIndex ?? 1);
                                                const displayLabel = col.id === 'grammar' && GRAMMAR_UNITS[num]
                                                    ? `Unit ${num} - ${GRAMMAR_UNITS[num]}`
                                                    : `${col.prefix} ${num}`;

                                                return (
                                                    <SelectItem key={i} value={`${col.prefix} ${num}`} className="hover:bg-slate-100 focus:bg-slate-100 cursor-pointer">
                                                        {displayLabel}
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-px h-8 bg-slate-200 flex-shrink-0"></div>

                    {/* Submit Button (Fixed Right) */}
                    <div className="flex-shrink-0">
                        <label className="text-[10px] font-bold text-transparent uppercase mb-1 block">Action</label>
                        <Button
                            className="h-10 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-bold shadow-lg shadow-indigo-600/20 whitespace-nowrap"
                            onClick={handleCreateAssignment}
                            disabled={loading}
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "숙제 배포"}
                        </Button>
                    </div>
                </div>
            </Card>

            {/* AI Weakness Generator Section */}
            <Card className="border-none shadow-xl bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl overflow-visible z-10 w-full relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-rose-600"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                </div>
                <div className="p-6 flex flex-col md:flex-row items-center gap-6 relative z-10">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-rose-500 text-white border-none">AI Beta</Badge>
                            <h3 className="text-lg font-black text-rose-950">Weekly Weakness Review</h3>
                        </div>
                        <p className="text-sm text-rose-800/80 font-medium">
                            지난 7일간의 오답 데이터를 분석하여 개인별 맞춤 약점 보완 과제를 생성합니다. (반 선택 필수)
                        </p>
                    </div>
                    <div>
                        <Button
                            onClick={handleGenerateWeakness}
                            disabled={generatingWeakness || !selectedClass || selectedClass === 'all'}
                            className="h-12 px-6 rounded-xl bg-white text-rose-600 border-2 border-rose-100 hover:bg-rose-50 hover:border-rose-200 font-black shadow-sm transition-all"
                        >
                            {generatingWeakness ? (
                                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> 분석 및 생성 중...</>
                            ) : (
                                "AI 약점 과제 생성하기"
                            )}
                        </Button>
                    </div>
                </div>
            </Card>

            {/* History Table */}
            <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Clock className="w-5 h-5 text-slate-400" />
                        배포 이력 (History)
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="w-[150px] font-bold pl-6">수강반</TableHead>
                                <TableHead className="w-[120px] font-bold">작성자</TableHead>
                                <TableHead className="w-[180px] font-bold">배포 날짜</TableHead>
                                <TableHead className="font-bold">숙제 내용 (Items)</TableHead>
                                <TableHead className="w-[80px] text-right pr-6">관리</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {assignments.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="h-40 text-center text-slate-400">
                                        배포 내역이 없습니다.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                assignments.map((assign) => (
                                    <TableRow key={assign.id} className="hover:bg-slate-50/50">
                                        <TableCell className="pl-6">
                                            <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-200 font-bold">
                                                {assign.targetClass === 'all' ? '전체 반' : assign.targetClass}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-slate-500 font-medium">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">A</div>
                                                {assign.createdBy || 'Admin'}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-slate-400 text-xs font-mono">
                                            {assign.createdAt?.toDate ? new Date(assign.createdAt.toDate()).toLocaleString() : '-'}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex flex-wrap gap-2">
                                                {assign.items ? (
                                                    assign.items.map((item: any, idx: number) => (
                                                        <Badge key={idx} className="bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 transition-colors">
                                                            {item.label || item.type}: <span className="font-black ml-1 text-indigo-900">{item.detail}</span>
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    // Backwards compatibility for single item records
                                                    <Badge className="bg-slate-100 text-slate-600 border-slate-200">
                                                        {assign.typeLabel || assign.type}: {assign.detail}
                                                    </Badge>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right pr-6">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-full"
                                                onClick={() => handleDelete(assign.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
