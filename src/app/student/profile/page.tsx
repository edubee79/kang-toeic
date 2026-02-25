'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db, auth } from '@/lib/firebase';
import { signOut, deleteUser } from 'firebase/auth';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, User, Mail, Shield, Trash2, ArrowLeft, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function StudentProfilePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [userProfile, setUserProfile] = useState<any>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.push('/login');
                return;
            }

            try {
                const parsed = JSON.parse(userData);
                const userRef = doc(db, 'Winter_Users', parsed.userId);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    setUserProfile({ id: userSnap.id, ...userSnap.data() });
                } else {
                    setUserProfile(parsed);
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('toeic_user');
            router.push('/login');
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleWithdrawal = async () => {
        if (!confirm("정말로 탈퇴하시겠습니까?\n모든 학습 기록과 정보가 영구적으로 삭제되며 복구할 수 없습니다.")) {
            return;
        }

        setIsDeleting(true);
        try {
            const user = auth.currentUser;
            if (user) {
                // 1. Delete Firestore Data
                await deleteDoc(doc(db, "Winter_Users", user.uid));

                // 2. Delete Auth User
                await deleteUser(user);

                localStorage.removeItem('toeic_user');
                alert("회원 탈퇴가 완료되었습니다. 그동안 이용해주셔서 감사합니다.");
                window.location.href = "/";
            } else {
                alert("인증 정보가 만료되었습니다. 다시 로그인 후 시도해주세요.");
                handleLogout();
            }
        } catch (error: any) {
            console.error("Withdrawal error:", error);
            if (error.code === 'auth/requires-recent-login') {
                alert("보안을 위해 다시 로그인한 후 탈퇴를 진행해주세요.");
                handleLogout();
            } else {
                alert("탈퇴 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
            }
        } finally {
            setIsDeleting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
            <div className="max-w-2xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/student/home">
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black italic tracking-tighter text-white uppercase">Profile Settings</h1>
                        <p className="text-slate-500 font-bold text-xs mt-1">회원 정보 및 계정 관리</p>
                    </div>
                </div>

                {/* Profile Card */}
                <Card className="bg-slate-900/50 border-white/5 overflow-hidden rounded-3xl backdrop-blur-sm">
                    <CardHeader className="border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <CardTitle className="text-xl font-black text-white">{userProfile?.userName || userProfile?.name || '학생'}</CardTitle>
                                <p className="text-slate-400 font-bold text-xs">{userProfile?.className || '수강반 정보 없음'} 수강 중</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">아이디 (ID)</label>
                                <div className="flex items-center gap-2 text-slate-200 font-bold">
                                    <Mail className="w-4 h-4 text-indigo-400" />
                                    <span>{userProfile?.username || userProfile?.email || '-'}</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">회원 등급</label>
                                <div className="flex items-center gap-2 text-slate-200 font-bold">
                                    <Shield className="w-4 h-4 text-indigo-400" />
                                    <span>{userProfile?.role === 'admin' ? '관리자' : '정회원'}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="flex-1 bg-white/5 border-white/10 hover:bg-white/10 text-white font-black italic rounded-2xl h-12"
                            >
                                <LogOut className="w-4 h-4 mr-2" />
                                로그아웃 (Log Out)
                            </Button>
                            <Button
                                onClick={handleWithdrawal}
                                disabled={isDeleting}
                                variant="ghost"
                                className="flex-1 text-slate-500 hover:text-rose-500 hover:bg-rose-500/5 font-black italic rounded-2xl h-12"
                            >
                                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Trash2 className="w-4 h-4 mr-2" />}
                                회원 탈퇴 (Withdrawal)
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer simple notice */}
                <p className="text-center text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                    Any issues? Contact via Kangs Toeic Admin
                </p>
            </div>
        </div>
    );
}
