'use client';
// Winter Camp Deployment Check

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Mic2, Headphones, BookOpen, PenSquare, ArrowRight, Shield, Lock, Target, TrendingUp, AlertTriangle, Zap } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from "@/lib/utils";

import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { isAdmin } from '@/lib/adminAuth';
import { NotificationForceModal } from '@/components/dashboard/NotificationForceModal';

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        const userData = localStorage.getItem('toeic_user');

        if (!userData) {
            router.push('/login');
            return;
        }

        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        // If user is approved, redirect to the new Home immediately
        if (parsedUser.status !== 'pending' && parsedUser.status !== 'rejected') {
            router.replace('/student/home');
            return;
        }

        setLoading(false);
    }, [router]);

    if (!isMounted || loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                <Zap className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
                <div className="text-slate-500 font-black uppercase tracking-widest text-sm italic">나의 학습방으로 이동 중...</div>
            </div>
        );
    }

    const isPending = user?.status === 'pending';
    const isRejected = user?.status === 'rejected';

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className="max-w-md w-full space-y-8">
                {isPending && (
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
                        <Shield className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-black text-amber-500 mb-3 italic tracking-tighter uppercase">ACCESS PENDING</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-bold uppercase tracking-tight">
                            가입 승인 대기 중입니다.<br />
                            관리자 승인이 완료되면 모든 학습 기능을 <br />
                            이용하실 수 있습니다.
                        </p>
                        <div className="space-y-3">
                            <Link href="/admin">
                                <Button variant="outline" className="w-full text-xs border-slate-700 text-slate-500 hover:bg-slate-800 hover:text-white rounded-xl h-12 font-bold uppercase transition-all">
                                    관리자 페이지 바로가기 (ADMIN)
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                onClick={() => {
                                    localStorage.removeItem('toeic_user');
                                    router.push('/login');
                                }}
                                className="w-full text-xs text-slate-600 hover:text-rose-500 font-bold uppercase"
                            >
                                로그아웃 (LOGOUT)
                            </Button>
                        </div>
                    </div>
                )}

                {isRejected && (
                    <div className="bg-rose-500/10 border border-rose-500/20 rounded-3xl p-8 text-center backdrop-blur-md">
                        <AlertTriangle className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-black text-rose-500 mb-3 italic tracking-tighter uppercase">ACCESS DENIED</h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-bold">
                            가입이 거부되었습니다.<br />
                            {user?.rejectionReason && <span className="text-rose-400/80 mt-2 block italic">사유: {user.rejectionReason}</span>}
                        </p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                localStorage.removeItem('toeic_user');
                                router.push('/login');
                            }}
                            className="w-full text-xs border-slate-700 text-slate-500 hover:bg-slate-800 hover:text-white rounded-xl h-12 font-bold uppercase"
                        >
                            돌아가기 (BACK)
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
