'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, updateDoc, deleteDoc, doc, Timestamp, orderBy } from 'firebase/firestore'; // Added deleteDoc, orderBy
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // Need to ensure this exists or use native input
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link';
import { CheckCircle2, XCircle, Upload, Search, Loader2, ArrowLeft, Trash2, Filter, Users as UsersIcon } from "lucide-react"; // Added Trash2, Filter
import { parseExcelFile, validateExcelData, type ExcelRow } from '@/lib/excel';
import type { User } from '@/types/user';

export default function RegistrationsPage() {
    const [registrations, setRegistrations] = useState<User[]>([]);
    const [filteredRegistrations, setFilteredRegistrations] = useState<User[]>([]);
    const [classes, setClasses] = useState<{ name: string }[]>([]); // New: Classes state
    const [isLoading, setIsLoading] = useState(true);

    // Filters
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending'); // Default to pending? Or all? User management usually starts with all or pending. Let's keep pending as default for registration workflow, but maybe 'all' for general management. Let's stick to 'pending' as entry point, but maybe switch to 'all' if they want management.
    const [classFilter, setClassFilter] = useState<string>('all'); // New: Class Filter

    // Selection & Actions
    const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
    const [isDeleting, setIsDeleting] = useState(false);

    // Rejection dialog
    const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [rejectionReason, setRejectionReason] = useState('');

    // Delete Dialog
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [usersToDelete, setUsersToDelete] = useState<User[]>([]); // For confirm dialog

    // Excel upload
    const [excelFile, setExcelFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadResult, setUploadResult] = useState<{ matched: number; unmatched: number } | null>(null);

    useEffect(() => {
        fetchInitialData();
    }, []);

    useEffect(() => {
        filterRegistrations();
    }, [registrations, searchTerm, statusFilter, classFilter]); // Added classFilter

    // Reset selection when filters change (to avoid deleting hidden users)
    useEffect(() => {
        setSelectedUsers(new Set());
    }, [statusFilter, classFilter]);

    const fetchInitialData = async () => {
        setIsLoading(true);
        try {
            await Promise.all([fetchRegistrations(), fetchClasses()]);
        } catch (error) {
            console.error("Error fetching initial data:", error);
        } finally {
            setIsLoading(false);
        }
    };

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

    const fetchRegistrations = async () => {
        try {
            // Fetch all users
            const usersSnapshot = await getDocs(collection(db, "Winter_Users"));
            const users = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as User[];

            // Sort by registeredAt desc
            users.sort((a, b) => {
                const tA = a.registeredAt?.toDate ? a.registeredAt.toDate().getTime() : 0;
                const tB = b.registeredAt?.toDate ? b.registeredAt.toDate().getTime() : 0;
                return tB - tA;
            });

            setRegistrations(users);
        } catch (error) {
            console.error("Error fetching registrations:", error);
        }
    };

    const filterRegistrations = () => {
        let filtered = registrations;

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(user => user.status === statusFilter);
        }

        // Class Filter
        if (classFilter !== 'all') {
            filtered = filtered.filter(user => user.className === classFilter);
        }

        // Search filter
        if (searchTerm) {
            const search = searchTerm.toLowerCase();
            filtered = filtered.filter(user =>
                user.username?.toLowerCase().includes(search) ||
                user.userName?.toLowerCase().includes(search) ||
                user.email?.toLowerCase().includes(search) ||
                user.userId?.toLowerCase().includes(search) ||
                user.universityName?.toLowerCase().includes(search)
            );
        }

        setFilteredRegistrations(filtered);
    };

    // --- Selection Logic ---
    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            // Select all currently filtered users
            const allIds = new Set(filteredRegistrations.map(u => u.id!).filter(Boolean));
            setSelectedUsers(allIds);
        } else {
            setSelectedUsers(new Set());
        }
    };

    const handleSelectUser = (userId: string, checked: boolean) => {
        const newSelected = new Set(selectedUsers);
        if (checked) {
            newSelected.add(userId);
        } else {
            newSelected.delete(userId);
        }
        setSelectedUsers(newSelected);
    };

    // --- Actions ---

    const handleApprove = async (userId: string, userDocId: string) => {
        if (!confirm("승인하시겠습니까?")) return;
        try {
            const userRef = doc(db, "Winter_Users", userDocId);
            await updateDoc(userRef, {
                status: 'approved',
                approvedAt: Timestamp.now(),
                approvedBy: 'admin',
            });
            fetchRegistrations();
        } catch (error) {
            console.error("Error approving user:", error);
            alert('승인 중 오류가 발생했습니다.');
        }
    };

    const openRejectDialog = (user: User) => {
        setSelectedUser(user);
        setRejectionReason('');
        setRejectDialogOpen(true);
    };

    const handleReject = async () => {
        if (!selectedUser || !rejectionReason.trim()) {
            alert('거부 사유를 입력해주세요.');
            return;
        }
        try {
            const userRef = doc(db, "Winter_Users", selectedUser.id!);
            await updateDoc(userRef, {
                status: 'rejected',
                rejectedAt: Timestamp.now(),
                rejectedBy: 'admin',
                rejectionReason: rejectionReason.trim(),
            });

            setRejectDialogOpen(false);
            setSelectedUser(null);
            setRejectionReason('');
            fetchRegistrations();
        } catch (error) {
            console.error("Error rejecting user:", error);
            alert('거부 중 오류가 발생했습니다.');
        }
    };

    // --- Delete Logic ---
    const confirmDelete = (users: User[]) => {
        setUsersToDelete(users);
        setDeleteDialogOpen(true);
    };

    const handleDeleteUsers = async () => {
        if (usersToDelete.length === 0) return;
        setIsDeleting(true);
        try {
            // Parallel delete
            await Promise.all(usersToDelete.map(user =>
                deleteDoc(doc(db, "Winter_Users", user.id!))
            ));

            // Cleanup state
            setDeleteDialogOpen(false);
            setUsersToDelete([]);
            setSelectedUsers(new Set());
            fetchRegistrations();
        } catch (error) {
            console.error("Error deleting users:", error);
            alert("삭제 중 오류가 발생했습니다.");
        } finally {
            setIsDeleting(false);
        }
    };


    const handleExcelUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setExcelFile(file);
        setUploadResult(null);
    };

    const processExcelAutoApproval = async () => {
        if (!excelFile) {
            alert('엑셀 파일을 선택해주세요.');
            return;
        }

        setIsProcessing(true);
        try {
            const excelData = await parseExcelFile(excelFile);
            const validation = validateExcelData(excelData);

            if (!validation.valid) {
                alert(validation.message);
                setIsProcessing(false);
                return;
            }

            let matchedCount = 0;
            let unmatchedCount = 0;

            const pendingUsers = registrations.filter(u => u.status === 'pending');

            for (const excelRow of excelData) {
                const matchedUser = pendingUsers.find(user =>
                    user.universityName === excelRow.schoolName &&
                    user.userId === excelRow.userId &&
                    user.userName === excelRow.userName
                );

                if (matchedUser && matchedUser.id) {
                    const userRef = doc(db, "Winter_Users", matchedUser.id);
                    await updateDoc(userRef, {
                        status: 'approved',
                        approvedAt: Timestamp.now(),
                        approvedBy: 'admin_auto',
                    });
                    matchedCount++;
                } else {
                    unmatchedCount++;
                }
            }

            setUploadResult({ matched: matchedCount, unmatched: unmatchedCount });
            fetchRegistrations();
        } catch (error) {
            console.error("Error processing Excel:", error);
            alert('엑셀 처리 중 오류가 발생했습니다.');
        } finally {
            setIsProcessing(false);
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending': return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">대기중</Badge>;
            case 'approved': return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30">승인됨</Badge>;
            case 'rejected': return <Badge variant="outline" className="bg-rose-500/10 text-rose-500 border-rose-500/30">거부됨</Badge>;
            default: return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-6 p-8 min-h-screen bg-slate-950 text-white">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/dashboard">
                        <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                            <ArrowLeft className="w-6 h-6" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black tracking-tighter flex items-center gap-2">
                            <UsersIcon className="text-indigo-500" />
                            회원 관리 (User Management)
                        </h1>
                        <p className="text-slate-400 text-sm mt-1">회원가입 승인, 반 배정 및 삭제 관리</p>
                    </div>
                </div>
            </div>

            <Tabs value={statusFilter} onValueChange={(v) => { setStatusFilter(v as any); setClassFilter('all'); }} className="w-full">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
                    <TabsList className="bg-slate-900 border border-slate-800">
                        <TabsTrigger value="pending" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                            대기중 ({registrations.filter(u => u.status === 'pending').length})
                        </TabsTrigger>
                        <TabsTrigger value="approved" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white">
                            승인됨 ({registrations.filter(u => u.status === 'approved').length})
                        </TabsTrigger>
                        <TabsTrigger value="rejected" className="data-[state=active]:bg-rose-500 data-[state=active]:text-white">
                            거부됨
                        </TabsTrigger>
                        <TabsTrigger value="all">전체</TabsTrigger>
                    </TabsList>

                    {/* Class Filter & Batch Actions */}
                    <div className="flex gap-2">
                        <Select value={classFilter} onValueChange={setClassFilter}>
                            <SelectTrigger className="w-[180px] bg-slate-900 border-slate-800">
                                <SelectValue placeholder="반 선택 (Class)" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-slate-800 text-white">
                                <SelectItem value="all">전체 반</SelectItem>
                                {classes.map(cls => (
                                    <SelectItem key={cls.name} value={cls.name}>{cls.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {selectedUsers.size > 0 && (
                            <Button
                                variant="destructive"
                                className="bg-rose-600 hover:bg-rose-700 animate-in fade-in"
                                onClick={() => {
                                    // Map selected IDs back to user objects
                                    const users = registrations.filter(u => u.id && selectedUsers.has(u.id));
                                    confirmDelete(users);
                                }}
                            >
                                <Trash2 className="w-4 h-4 mr-2" />
                                선택 삭제 ({selectedUsers.size})
                            </Button>
                        )}
                    </div>
                </div>

                <TabsContent value={statusFilter} className="mt-0 space-y-4">
                    {/* Search */}
                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input
                                placeholder="이름, 아이디, 이메일, 학번, 대학교로 검색..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 bg-slate-900 border-slate-800 text-white placeholder:text-slate-600"
                            />
                        </div>
                    </div>

                    <Card className="bg-slate-900 border-slate-800">
                        <CardHeader>
                            <CardTitle className="text-lg flex justify-between">
                                <span>{statusFilter.toUpperCase()} 목록</span>
                                <span className="text-sm font-normal text-slate-400">
                                    총 {filteredRegistrations.length}명
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {isLoading ? (
                                <div className="text-center py-12">
                                    <Loader2 className="w-8 h-8 animate-spin mx-auto text-indigo-500" />
                                    <p className="text-slate-500 mt-4">데이터를 불러오는 중...</p>
                                </div>
                            ) : filteredRegistrations.length === 0 ? (
                                <div className="text-center py-12 text-slate-500">
                                    <p>표시할 데이터가 없습니다.</p>
                                </div>
                            ) : (
                                <div className="rounded-md border border-slate-800 overflow-hidden">
                                    <Table>
                                        <TableHeader className="bg-slate-950">
                                            <TableRow className="border-slate-800 hover:bg-slate-950">
                                                <TableHead className="w-[50px] text-center">
                                                    <input
                                                        type="checkbox"
                                                        className="w-4 h-4 rounded border-slate-700"
                                                        checked={filteredRegistrations.length > 0 && selectedUsers.size === filteredRegistrations.length}
                                                        onChange={(e) => handleSelectAll(e.target.checked)}
                                                    />
                                                </TableHead>
                                                <TableHead>상태</TableHead>
                                                <TableHead>Class</TableHead>
                                                <TableHead>이름 (ID)</TableHead>
                                                <TableHead>정보 (학교/학번)</TableHead>
                                                <TableHead>신청일</TableHead>
                                                <TableHead className="text-right">관리</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredRegistrations.map((user) => (
                                                <TableRow key={user.id} className="border-slate-800 hover:bg-slate-800/50">
                                                    <TableCell className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 rounded border-slate-700"
                                                            checked={selectedUsers.has(user.id!)}
                                                            onChange={(e) => handleSelectUser(user.id!, e.target.checked)}
                                                        />
                                                    </TableCell>
                                                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                                                    <TableCell>
                                                        {user.className ? (
                                                            <Badge variant="outline" className="border-indigo-500/30 text-indigo-400">{user.className}</Badge>
                                                        ) : (
                                                            <span className="text-slate-600">-</span>
                                                        )}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-white">{user.userName}</span>
                                                            <span className="text-xs text-slate-500 font-mono">{user.username || user.userId}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex flex-col text-sm text-slate-400">
                                                            <span>{user.universityName}</span>
                                                            <span className="text-xs">{user.userId}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-sm text-slate-500">
                                                        {user.registeredAt?.toDate?.()?.toLocaleDateString('ko-KR') || '-'}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="flex justify-end gap-2">
                                                            {user.status === 'pending' && (
                                                                <>
                                                                    <Button size="sm" variant="outline" className="h-8 border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10" onClick={() => handleApprove(user.userId, user.id!)}>
                                                                        <CheckCircle2 className="w-4 h-4" />
                                                                    </Button>
                                                                    <Button size="sm" variant="outline" className="h-8 border-rose-500/30 text-rose-500 hover:bg-rose-500/10" onClick={() => openRejectDialog(user)}>
                                                                        <XCircle className="w-4 h-4" />
                                                                    </Button>
                                                                </>
                                                            )}
                                                            {/* Always show delete based on requirement, but usually delete is mostly for approved/finished students */}
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="h-8 text-slate-500 hover:text-rose-500 hover:bg-rose-500/10"
                                                                onClick={() => confirmDelete([user])}
                                                                title="삭제 (영구)"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Excel Auto Approval Section (Only show on Pending tab for clarity?) Let's keep it at bottom or hide if filter isn't pending. */}
            {statusFilter === 'pending' && (
                <Card className="bg-slate-900 border-slate-800">
                    {/* ... Excel Content ... */}
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Upload className="w-5 h-5" />
                            엑셀 자동 승인
                        </CardTitle>
                        <CardDescription>엑셀 파일을 업로드하여 일괄 승인합니다.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-4 items-end">
                            <Input
                                type="file"
                                accept=".xlsx,.xls"
                                onChange={handleExcelUpload}
                                className="bg-slate-950 border-slate-800 max-w-md"
                            />
                            <Button
                                onClick={processExcelAutoApproval}
                                disabled={!excelFile || isProcessing}
                                className="bg-emerald-600 hover:bg-emerald-500"
                            >
                                {isProcessing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                                자동 승인 실행
                            </Button>
                        </div>
                        {uploadResult && (
                            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-sm">
                                <p className="text-emerald-400">✓ 승인: {uploadResult.matched}건</p>
                                <p className="text-slate-400">✗ 실패: {uploadResult.unmatched}건</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Rejection Dialog */}
            <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>가입 신청 거부</DialogTitle>
                        <DialogDescription className="text-slate-400">
                            {selectedUser?.userName}님의 신청을 거부하시겠습니까?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <label className="text-sm font-bold text-slate-400 block mb-2">거부 사유</label>
                        <Textarea
                            placeholder="사유를 입력하세요..."
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            className="bg-slate-950 border-slate-800"
                        />
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setRejectDialogOpen(false)}>취소</Button>
                        <Button onClick={handleReject} className="bg-rose-600 hover:bg-rose-500">거부하기</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation Dialog */}
            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent className="bg-slate-900 border-rose-500/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-rose-500 flex items-center gap-2">
                            <Trash2 className="w-5 h-5" />
                            회원 삭제 확인
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            선택한 <strong>{usersToDelete.length}명</strong>의 회원을 영구적으로 삭제하시겠습니까?
                            <br />
                            <span className="text-xs text-rose-400 mt-2 block">
                                * 이 작업은 되돌릴 수 없으며, 사용자의 모든 데이터가 손실될 수 있습니다.
                            </span>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="max-h-[200px] overflow-auto bg-slate-950 p-4 rounded-lg border border-slate-800 my-4">
                        <ul className="space-y-1 text-sm text-slate-400">
                            {usersToDelete.map(u => (
                                <li key={u.id}>• {u.userName} ({u.userId})</li>
                            ))}
                        </ul>
                    </div>

                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setDeleteDialogOpen(false)}>취소</Button>
                        <Button
                            onClick={handleDeleteUsers}
                            className="bg-rose-600 hover:bg-rose-500"
                            disabled={isDeleting}
                        >
                            {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
                            영구 삭제
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
