"use client";

import { useEffect, useState } from "react";
import { getUniversities, addUniversity, deleteUniversity, updateUniversity, University } from "@/services/admin-service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Pencil } from "lucide-react";

export default function UniversitiesPage() {
    const [universities, setUniversities] = useState<University[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [name, setName] = useState("");

    const [error, setError] = useState("");

    const fetchUniversities = async () => {
        setLoading(true);
        setError("");

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("시간 초과: 5초 내에 응답이 없습니다. 네트워크를 확인해주세요.")), 5000)
        );

        try {
            console.log("Fetching universities...");
            // Race between fetch and timeout
            const data = await Promise.race([
                getUniversities(),
                timeoutPromise
            ]) as University[];

            console.log("Fetched:", data);
            setUniversities(data);
        } catch (err: any) {
            console.error("Fetch error:", err);
            setError(err.message || "데이터를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUniversities();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        try {
            if (editingId) {
                await updateUniversity(editingId, name);
            } else {
                await addUniversity(name);
            }
            setName("");
            setOpen(false);
            setEditingId(null);
            fetchUniversities(); // Refresh list
        } catch (error) {
            console.error("Error saving university:", error);
        }
    };

    const handleEdit = (uni: University) => {
        setEditingId(uni.id);
        setName(uni.name);
        setOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (confirm("정말로 삭제하시겠습니까?")) {
            await deleteUniversity(id);
            fetchUniversities();
        }
    };

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
        if (!isOpen) {
            setEditingId(null);
            setName("");
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">대학교 관리 (v2)</h2>
                <Dialog open={open} onOpenChange={handleOpenChange}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> 대학 추가
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingId ? "대학교 수정" : "대학교 추가"}</DialogTitle>
                            <DialogDescription>
                                관리할 대학교의 이름을 입력하세요.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        이름
                                    </Label>
                                    <Input
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">저장</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="rounded-md border bg-white dark:bg-black">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>이름</TableHead>
                            <TableHead className="w-[100px] text-right">관리</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={2} className="h-24 text-center">
                                    로딩 중...
                                </TableCell>
                            </TableRow>
                        ) : error ? (
                            <TableRow>
                                <TableCell colSpan={2} className="h-24 text-center text-red-500">
                                    오류 발생: {error}
                                </TableCell>
                            </TableRow>
                        ) : universities.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={2} className="h-24 text-center">
                                    등록된 대학교가 없습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            universities.map((uni) => (
                                <TableRow key={uni.id}>
                                    <TableCell className="font-medium">{uni.name}</TableCell>
                                    <TableCell className="text-right flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(uni)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600" onClick={() => handleDelete(uni.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
