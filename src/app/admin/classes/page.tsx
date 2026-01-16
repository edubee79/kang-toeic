'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, Trash2, Users, Loader2 } from "lucide-react";

interface ClassType {
    id: string;
    name: string;
    description: string;
    studentsCount?: number; // Optional: Fetch this later if needed
}

export default function ClassManagementPage() {
    const [classes, setClasses] = useState<ClassType[]>([]);
    const [loading, setLoading] = useState(true);
    const [newClassName, setNewClassName] = useState('');
    const [newClassDesc, setNewClassDesc] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            setLoading(true);
            const q = query(collection(db, "Classes"), orderBy("name"));
            const querySnapshot = await getDocs(q);

            const classList: ClassType[] = [];
            querySnapshot.forEach((doc) => {
                classList.push({ id: doc.id, ...doc.data() } as ClassType);
            });
            setClasses(classList);
        } catch (error) {
            console.error("Error fetching classes:", error);
            alert("반 목록을 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const handleAddClass = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newClassName.trim()) return;

        try {
            setIsSubmitting(true);
            await addDoc(collection(db, "Classes"), {
                name: newClassName,
                description: newClassDesc,
                createdAt: serverTimestamp()
            });

            setNewClassName('');
            setNewClassDesc('');
            setIsDialogOpen(false);
            fetchClasses(); // Refresh list
        } catch (error) {
            console.error("Error adding class:", error);
            alert("반 추가에 실패했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteClass = async (id: string, name: string) => {
        if (!confirm(`정말로 '${name}'을 삭제하시겠습니까?\n이 반에 속한 학생들의 정보가 꼬일 수 있습니다.`)) return;

        try {
            await deleteDoc(doc(db, "Classes", id));
            fetchClasses(); // Refresh list
        } catch (error) {
            console.error("Error deleting class:", error);
            alert("반 삭제에 실패했습니다.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/dashboard">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black italic tracking-tighter">CLASS MANAGEMENT</h1>
                            <p className="text-slate-400 font-medium">수강 반 관리</p>
                        </div>
                    </div>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-indigo-600 hover:bg-indigo-500 font-bold">
                                <Plus className="w-4 h-4 mr-2" /> 새 반 추가
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-900 border-slate-800 text-white">
                            <DialogHeader>
                                <DialogTitle>새로운 반 추가</DialogTitle>
                                <DialogDescription className="text-slate-400">
                                    새로 개설할 반의 이름을 입력해주세요.
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleAddClass} className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">반 이름 (필수)</Label>
                                    <Input
                                        id="name"
                                        placeholder="예: 750+ 실전반"
                                        value={newClassName}
                                        onChange={(e) => setNewClassName(e.target.value)}
                                        className="bg-slate-950 border-slate-800"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="desc">설명 (선택)</Label>
                                    <Input
                                        id="desc"
                                        placeholder="예: 월수금 저녁반"
                                        value={newClassDesc}
                                        onChange={(e) => setNewClassDesc(e.target.value)}
                                        className="bg-slate-950 border-slate-800"
                                    />
                                </div>
                                <DialogFooter>
                                    <Button type="submit" disabled={isSubmitting} className="bg-indigo-600 hover:bg-indigo-500 text-white">
                                        {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : '추가하기'}
                                    </Button>
                                </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Content */}
                <Card className="bg-slate-900 border-slate-800">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-400" />
                            현재 개설된 반 목록
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            학생들이 회원가입 시 이 목록에서 반을 선택하게 됩니다.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-12 text-slate-500 animate-pulse font-bold">
                                목록을 불러오는 중...
                            </div>
                        ) : classes.length === 0 ? (
                            <div className="text-center py-12 text-slate-500 border-2 border-dashed border-slate-800 rounded-xl">
                                <p className="mb-2">아직 개설된 반이 없습니다.</p>
                                <p className="text-xs">우측 상단의 '새 반 추가' 버튼을 눌러보세요.</p>
                            </div>
                        ) : (
                            <div className="rounded-md border border-slate-800">
                                <Table>
                                    <TableHeader className="bg-slate-950">
                                        <TableRow className="border-slate-800 hover:bg-slate-950">
                                            <TableHead className="text-slate-400 font-bold">반 이름</TableHead>
                                            <TableHead className="text-slate-400 font-bold">설명</TableHead>
                                            <TableHead className="text-right text-slate-400 font-bold">관리</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {classes.map((cls) => (
                                            <TableRow key={cls.id} className="border-slate-800 hover:bg-slate-800/50">
                                                <TableCell className="font-bold text-white">{cls.name}</TableCell>
                                                <TableCell className="text-slate-400">{cls.description}</TableCell>
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDeleteClass(cls.id, cls.name)}
                                                        className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
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
