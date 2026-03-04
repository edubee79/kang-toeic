'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, updateDoc, deleteDoc, doc, Timestamp, orderBy, writeBatch } from 'firebase/firestore';
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
import { CheckCircle2, XCircle, Upload, Search, Loader2, ArrowLeft, Trash2, Filter, Users as UsersIcon, Bomb, Eraser } from "lucide-react";
import { parseExcelFile, validateExcelData, type ExcelRow } from '@/lib/excel';
import type { User } from '@/types/user';

import { useRouter } from 'next/navigation';
import { isAdmin } from '@/lib/adminAuth';

export default function RegistrationsPage() {
    const router = useRouter();
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

    // Wipe Dialog (Hard Reset)
    const [wipeDialogOpen, setWipeDialogOpen] = useState(false);
    const [usersToWipe, setUsersToWipe] = useState<User[]>([]);
    const [isWiping, setIsWiping] = useState(false);

    // Clear Records Dialog (Manager_Results only)
    const [clearRecordsDialogOpen, setClearRecordsDialogOpen] = useState(false);
    const [usersToClearRecords, setUsersToClearRecords] = useState<User[]>([]);
    const [isClearingRecords, setIsClearingRecords] = useState(false);

    // Excel upload
    const [excelFile, setExcelFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadResult, setUploadResult] = useState<{ matched: number; unmatched: number } | null>(null);

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
            fetchInitialData();
        };
        checkAdmin();
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
        console.log('🔵 Approve button clicked:', { userId, userDocId });

        try {
            const userRef = doc(db, "Winter_Users", userDocId);
            console.log('🔵 Updating user:', userRef.path);

            await updateDoc(userRef, {
                status: 'approved',
                approvedAt: Timestamp.now(),
                approvedBy: 'admin',
            });
            console.log('✅ User approved successfully');

            // --- SEND PUSH NOTIFICATION ---
            const userObj = registrations.find(u => u.id === userDocId);
            if (userObj?.fcmToken) {
                try {
                    await fetch('/api/send-push', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            token: userObj.fcmToken,
                            title: '🎉 가입 승인 완료!',
                            body: `${userObj.userName}님, 가입이 승인되었습니다. 지금 바로 학습을 시작해보세요!`
                        })
                    });
                    console.log('📢 Approval push notification sent');
                } catch (pushErr) {
                    console.error('❌ Failed to send approval push:', pushErr);
                }
            }

            fetchRegistrations();
        } catch (error) {
            console.error("❌ Error approving user:", error);
            alert('승인 중 오류가 발생했습니다: ' + error);
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

    // --- Hard Wipe Logic ---
    const confirmWipe = (users: User[]) => {
        setUsersToWipe(users);
        setWipeDialogOpen(true);
    };

    const handleWipeData = async () => {
        if (usersToWipe.length === 0) return;
        setIsWiping(true);

        try {
            for (const user of usersToWipe) {
                const targetUid = user.userId || user.uid || user.id;

                // 1. Delete all Manager_Results
                const resultsQuery = query(collection(db, "Manager_Results"), where("studentId", "==", targetUid));
                const resultsSnap = await getDocs(resultsQuery);
                const batch1 = writeBatch(db);
                resultsSnap.forEach(d => batch1.delete(d.ref));
                await batch1.commit();

                // 2. Delete all MockTestAttempts
                const mockQuery = query(collection(db, "MockTestAttempts"), where("userId", "==", targetUid));
                const mockSnap = await getDocs(mockQuery);
                const batch2 = writeBatch(db);
                mockSnap.forEach(d => batch2.delete(d.ref));
                await batch2.commit();

                // 3. Delete Performance_Summaries
                await deleteDoc(doc(db, "Performance_Summaries", targetUid));

                // 4. Finally, reset the User document instead of deleting it (Plan 3)
                if (user.id) {
                    await updateDoc(doc(db, "Winter_Users", user.id), {
                        performanceSummary: { predictedTotal: 0, predictedLC: 0, predictedRC: 0, partStats: {} },
                        targetScore: 0,
                        targetLCScore: 0,
                        targetRCScore: 0,
                        weaknesses: []
                    });
                }
            }

            setWipeDialogOpen(false);
            setUsersToWipe([]);
            setSelectedUsers(new Set());
            fetchRegistrations();
            alert(`${usersToWipe.length}명의 학생과 연동된 모든 학습 데이터가 완벽히 삭제(초기화)되었습니다.`);
        } catch (error) {
            console.error("Error wiping user data:", error);
            alert("완전 삭제 중 오류가 발생했습니다.");
        } finally {
            setIsWiping(false);
        }
    };


    // --- Clear Records Logic (Manager_Results Only) ---
    const confirmClearRecords = (users: User[]) => {
        setUsersToClearRecords(users);
        setClearRecordsDialogOpen(true);
    };

    const handleClearRecords = async () => {
        if (usersToClearRecords.length === 0) return;
        setIsClearingRecords(true);

        try {
            for (const user of usersToClearRecords) {
                const targetUid = user.userId || user.uid || user.id;

                // 1. Delete all Manager_Results (단과 숙제 기록들)
                const resultsQuery = query(collection(db, "Manager_Results"), where("studentId", "==", targetUid));
                const resultsSnap = await getDocs(resultsQuery);
                const batch1 = writeBatch(db);
                resultsSnap.forEach(d => batch1.delete(d.ref));
                await batch1.commit();

                // 2. Delete Performance_Summaries (통계가 꼬이지 않도록 요약본도 함께 파기)
                await deleteDoc(doc(db, "Performance_Summaries", targetUid));
            }

            setClearRecordsDialogOpen(false);
            setUsersToClearRecords([]);
            setSelectedUsers(new Set());
            fetchRegistrations();
            alert(`${usersToClearRecords.length}명의 학생의 단과 학습 기록(Manager_Results)이 깨끗하게 삭제되었습니다.\n* 로그인 계정과 모의고사 기록은 유지됩니다.`);
        } catch (error) {
            console.error("Error clearing user records:", error);
            alert("학습 기록 삭제 중 오류가 발생했습니다.");
        } finally {
            setIsClearingRecords(false);
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
                            <div className="flex gap-2 animate-in fade-in">
                                <Button
                                    variant="destructive"
                                    className="bg-rose-600 hover:bg-rose-700"
                                    onClick={() => {
                                        const users = registrations.filter(u => u.id && selectedUsers.has(u.id));
                                        confirmDelete(users);
                                    }}
                                >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    선택 삭제 ({selectedUsers.size})
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-orange-950 text-orange-400 hover:bg-orange-900 border border-orange-900/50"
                                    onClick={() => {
                                        const users = registrations.filter(u => u.id && selectedUsers.has(u.id));
                                        confirmClearRecords(users);
                                    }}
                                >
                                    <Eraser className="w-4 h-4 mr-2" />
                                    단과 기록만 삭제 ({selectedUsers.size})
                                </Button>
                                <Button
                                    className="bg-red-950 text-red-400 hover:bg-red-900 border border-red-900/50"
                                    onClick={() => {
                                        const users = registrations.filter(u => u.id && selectedUsers.has(u.id));
                                        confirmWipe(users);
                                    }}
                                >
                                    <Bomb className="w-4 h-4 mr-2" />
                                    모든 데이터 완전 삭제 ({selectedUsers.size})
                                </Button>
                            </div>
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
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="h-8 text-slate-500 hover:text-rose-500 hover:bg-rose-500/10"
                                                                onClick={() => confirmDelete([user])}
                                                                title="계정만 삭제 (데이터 남김)"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="h-8 text-slate-500 hover:text-orange-500 hover:bg-orange-500/10"
                                                                onClick={() => confirmClearRecords([user])}
                                                                title="단과 학습 기록만 삭제 (계정 유지)"
                                                            >
                                                                <Eraser className="w-4 h-4" />
                                                            </Button>
                                                            <Button
                                                                size="sm"
                                                                variant="ghost"
                                                                className="h-8 text-slate-600 hover:text-red-500 hover:bg-red-500/10"
                                                                onClick={() => confirmWipe([user])}
                                                                title="계정 및 모든 학습 기록 데이터 완전 삭제 (초기화)"
                                                            >
                                                                <Bomb className="w-4 h-4" />
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

            {/* Delete Confirmation Dialog (Account Only) */}
            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent className="bg-slate-900 border-rose-500/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-rose-500 flex items-center gap-2">
                            <Trash2 className="w-5 h-5" />
                            가벼운 계정 삭제 확인 (기록 유지)
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            선택한 <strong>{usersToDelete.length}명</strong>의 계정을 목록에서 지우시겠습니까?
                            <br />
                            <span className="text-xs text-rose-400 mt-2 block">
                                * 학생이 로그인할 수 없게 되지만, 이미 쌓아놓은 정답률/학습 데이터는 통계용으로 DB에 남겨집니다.
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
                            계정만 삭제하기
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Hard Wipe Confirmation Dialog */}
            <Dialog open={wipeDialogOpen} onOpenChange={setWipeDialogOpen}>
                <DialogContent className="bg-slate-900 border-red-500/50 text-white shadow-2xl shadow-red-900/20 md:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-red-500 flex items-center gap-2 font-black text-xl">
                            <Bomb className="w-6 h-6 animate-pulse" />
                            초강력 데이터 완전 삭제 (WIPE)
                        </DialogTitle>
                        <DialogDescription className="text-slate-300 text-sm leading-relaxed mt-4">
                            선택한 <strong>{usersToWipe.length}명</strong>의 계정은 물론이고, 이 학생들이 남긴 <strong className="text-red-400 underline underline-offset-4">모든 단과 숙제 기록, 모의고사 성적, 오답 관리 등 파이어베이스에 작성된 기록 전체</strong>를 시스템에서 완전히 도려냅니다.
                            <br /><br />
                            <span className="bg-red-500/10 border border-red-500/30 p-3 rounded-xl text-red-400 block font-bold">
                                ⚠️ 주의: 테스트용 계정 삭제나, 과거 꼬인 데이터를 완전히 청소하고 시스템을 리셋할 때만 사용하세요. 이 작업은 절대 복구할 수 없습니다.
                            </span>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="max-h-[150px] overflow-auto bg-black p-4 rounded-lg border border-slate-800 my-2">
                        <ul className="space-y-1 text-sm font-mono text-slate-500">
                            {usersToWipe.map((u, i) => (
                                <li key={u.id || i}>&gt; target_uid: {u.userName} ({u.userId})</li>
                            ))}
                        </ul>
                    </div>

                    <DialogFooter className="mt-4 gap-2 sm:gap-0">
                        <Button variant="ghost" onClick={() => setWipeDialogOpen(false)} className="hover:bg-slate-800">취소</Button>
                        <Button
                            onClick={handleWipeData}
                            className="bg-red-600 hover:bg-red-500 text-white font-black tracking-widest"
                            disabled={isWiping}
                        >
                            {isWiping ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Bomb className="w-4 h-4 mr-2" />}
                            영구 폭파 실행
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Clear Records Confirmation Dialog */}
            <Dialog open={clearRecordsDialogOpen} onOpenChange={setClearRecordsDialogOpen}>
                <DialogContent className="bg-slate-900 border-orange-500/20 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-orange-500 flex items-center gap-2">
                            <Eraser className="w-5 h-5" />
                            단과 학습 기록만 삭제 확인
                        </DialogTitle>
                        <DialogDescription className="text-slate-300">
                            선택한 <strong>{usersToClearRecords.length}명</strong>의 파트별(1~7) <strong>숙제/테스트 기록(Manager_Results)</strong>과 <strong>누적 통계</strong>만 지우시겠습니까?
                            <br />
                            <span className="text-xs text-orange-400 mt-2 block">
                                * 학생의 로그인 계정, 인적사항, 모의고사(Mock Test) 응시 기록은 그대로 유지됩니다.
                                <br />* 이전 데이터로 인해 꼬인 누적 정답률 통계를 초기화할 때 적합합니다.
                            </span>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="max-h-[200px] overflow-auto bg-slate-950 p-4 rounded-lg border border-slate-800 my-4">
                        <ul className="space-y-1 text-sm text-slate-400">
                            {usersToClearRecords.map(u => (
                                <li key={u.id}>• {u.userName} ({u.userId})</li>
                            ))}
                        </ul>
                    </div>

                    <DialogFooter>
                        <Button variant="ghost" onClick={() => setClearRecordsDialogOpen(false)}>취소</Button>
                        <Button
                            onClick={handleClearRecords}
                            className="bg-orange-600 hover:bg-orange-500"
                            disabled={isClearingRecords}
                        >
                            {isClearingRecords ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Eraser className="w-4 h-4 mr-2" />}
                            기록만 지우기
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
