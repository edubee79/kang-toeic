'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, query, where, updateDoc, doc, Timestamp } from 'firebase/firestore';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Link from 'next/link'; // Standard import
import { CheckCircle2, XCircle, Upload, Search, Loader2, ArrowLeft } from "lucide-react";
// import Link_Next from 'next/link'; // Removed unused alias
import { parseExcelFile, validateExcelData, type ExcelRow } from '@/lib/excel';
import type { User } from '@/types/user';

export default function RegistrationsPage() {
    const [registrations, setRegistrations] = useState<User[]>([]);
    const [filteredRegistrations, setFilteredRegistrations] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

    // Rejection dialog
    const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [rejectionReason, setRejectionReason] = useState('');

    // Excel upload
    const [excelFile, setExcelFile] = useState<File | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [uploadResult, setUploadResult] = useState<{ matched: number; unmatched: number } | null>(null);

    useEffect(() => {
        fetchRegistrations();
    }, []);

    useEffect(() => {
        filterRegistrations();
    }, [registrations, searchTerm, statusFilter]);

    const fetchRegistrations = async () => {
        try {
            setIsLoading(true);
            const usersSnapshot = await getDocs(collection(db, "Winter_Users"));
            const users = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as User[];

            setRegistrations(users);
        } catch (error) {
            console.error("Error fetching registrations:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterRegistrations = () => {
        let filtered = registrations;

        // Status filter
        if (statusFilter !== 'all') {
            filtered = filtered.filter(user => user.status === statusFilter);
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

    const handleApprove = async (userId: string, userDocId: string) => {
        try {
            const userRef = doc(db, "Winter_Users", userDocId);
            await updateDoc(userRef, {
                status: 'approved',
                approvedAt: Timestamp.now(),
                approvedBy: 'admin', // TODO: 실제 관리자 ID
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
                rejectedBy: 'admin', // TODO: 실제 관리자 ID
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
            // Parse Excel
            const excelData = await parseExcelFile(excelFile);
            const validation = validateExcelData(excelData);

            if (!validation.valid) {
                alert(validation.message);
                setIsProcessing(false);
                return;
            }

            // Match and approve
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
            case 'pending':
                return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">대기중</Badge>;
            case 'approved':
                return <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30">승인됨</Badge>;
            case 'rejected':
                return <Badge variant="outline" className="bg-rose-500/10 text-rose-500 border-rose-500/30">거부됨</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    return (
        <div className="space-y-6 p-8"> {/* added padding */}
            <div className="flex items-center gap-4">
                <Link href="/admin/dashboard">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black tracking-tighter">가입 신청 관리</h1>
                    <p className="text-slate-400 text-sm mt-1">회원가입 신청을 승인하거나 거부합니다.</p>
                </div>
            </div>

            <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as any)} className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-4 bg-slate-800">
                    <TabsTrigger value="pending">대기중</TabsTrigger>
                    <TabsTrigger value="approved">승인됨</TabsTrigger>
                    <TabsTrigger value="rejected">거부됨</TabsTrigger>
                    <TabsTrigger value="all">전체</TabsTrigger>
                </TabsList>

                <div className="mt-6 space-y-4">
                    {/* Search */}
                    <div className="flex gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input
                                placeholder="이름, 아이디, 이메일, 학번, 대학교로 검색..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 bg-slate-800 border-slate-700"
                            />
                        </div>
                    </div>

                    {/* Manual Approval Table */}
                    <TabsContent value={statusFilter} className="mt-0">
                        <Card className="bg-slate-800 border-slate-700">
                            <CardHeader>
                                <CardTitle className="text-lg">신청 목록</CardTitle>
                                <CardDescription>총 {filteredRegistrations.length}건</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {isLoading ? (
                                    <div className="text-center py-12">
                                        <Loader2 className="w-8 h-8 animate-spin mx-auto text-slate-500" />
                                        <p className="text-slate-500 mt-4">로딩 중...</p>
                                    </div>
                                ) : filteredRegistrations.length === 0 ? (
                                    <div className="text-center py-12 text-slate-500">
                                        <p className="font-bold">신청 내역이 없습니다.</p>
                                    </div>
                                ) : (
                                    <div className="rounded-md border border-slate-700">
                                        <Table>
                                            <TableHeader>
                                                <TableRow className="border-slate-700">
                                                    <TableHead>상태</TableHead>
                                                    <TableHead>아이디</TableHead>
                                                    <TableHead>이름</TableHead>
                                                    <TableHead>대학교</TableHead>
                                                    <TableHead>학번</TableHead>
                                                    <TableHead>이메일</TableHead>
                                                    <TableHead>신청일</TableHead>
                                                    <TableHead className="text-right">관리</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {filteredRegistrations.map((user) => (
                                                    <TableRow key={user.id} className="border-slate-700">
                                                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                                                        <TableCell className="font-mono text-sm">{user.username}</TableCell>
                                                        <TableCell className="font-bold">{user.userName}</TableCell>
                                                        <TableCell>{user.universityName}</TableCell>
                                                        <TableCell className="font-mono text-sm">{user.userId}</TableCell>
                                                        <TableCell className="text-sm">{user.email}</TableCell>
                                                        <TableCell className="text-sm text-slate-400">
                                                            {user.registeredAt?.toDate?.()?.toLocaleDateString('ko-KR') || '-'}
                                                        </TableCell>
                                                        <TableCell className="text-right">
                                                            {user.status === 'pending' && (
                                                                <div className="flex justify-end gap-2">
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        className="border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10"
                                                                        onClick={() => handleApprove(user.userId, user.id!)}
                                                                    >
                                                                        <CheckCircle2 className="w-4 h-4 mr-1" />
                                                                        승인
                                                                    </Button>
                                                                    <Button
                                                                        size="sm"
                                                                        variant="outline"
                                                                        className="border-rose-500/30 text-rose-500 hover:bg-rose-500/10"
                                                                        onClick={() => openRejectDialog(user)}
                                                                    >
                                                                        <XCircle className="w-4 h-4 mr-1" />
                                                                        거부
                                                                    </Button>
                                                                </div>
                                                            )}
                                                            {user.status === 'rejected' && user.rejectionReason && (
                                                                <p className="text-xs text-rose-400">사유: {user.rejectionReason}</p>
                                                            )}
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
                </div>
            </Tabs>

            {/* Excel Auto Approval Section */}
            <Card className="bg-slate-800 border-slate-700">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        엑셀 자동 승인
                    </CardTitle>
                    <CardDescription>
                        엑셀 파일을 업로드하여 명단과 일치하는 신청을 자동으로 승인합니다.
                        <br />
                        <span className="text-xs text-slate-500">형식: 대학명 | 학번 | 이름</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Input
                            type="file"
                            accept=".xlsx,.xls"
                            onChange={handleExcelUpload}
                            className="bg-slate-900 border-slate-700"
                        />
                        {excelFile && (
                            <p className="text-sm text-slate-400 mt-2">선택된 파일: {excelFile.name}</p>
                        )}
                    </div>

                    <Button
                        onClick={processExcelAutoApproval}
                        disabled={!excelFile || isProcessing}
                        className="bg-indigo-600 hover:bg-indigo-500"
                    >
                        {isProcessing ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                처리 중...
                            </>
                        ) : (
                            <>
                                <Upload className="w-4 h-4 mr-2" />
                                자동 승인 실행
                            </>
                        )}
                    </Button>

                    {uploadResult && (
                        <div className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                            <p className="font-bold mb-2">처리 결과</p>
                            <div className="space-y-1 text-sm">
                                <p className="text-emerald-400">✓ 매칭 및 승인: {uploadResult.matched}건</p>
                                <p className="text-slate-400">✗ 매칭 실패: {uploadResult.unmatched}건</p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Rejection Dialog */}
            <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
                <DialogContent className="bg-slate-900 border-slate-800 text-white">
                    <DialogHeader>
                        <DialogTitle>가입 신청 거부</DialogTitle>
                        <DialogDescription className="text-slate-400">
                            {selectedUser?.userName}님의 가입 신청을 거부하시겠습니까?
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400">거부 사유 *</label>
                            <Textarea
                                placeholder="거부 사유를 입력하세요..."
                                value={rejectionReason}
                                onChange={(e) => setRejectionReason(e.target.value)}
                                className="bg-slate-950 border-slate-800 min-h-[100px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setRejectDialogOpen(false)} className="border-slate-700">
                            취소
                        </Button>
                        <Button onClick={handleReject} className="bg-rose-600 hover:bg-rose-500">
                            거부
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
