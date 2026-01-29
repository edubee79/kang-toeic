"use client";

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import {
    ArrowLeft,
    Calendar,
    CheckCircle2,
    Clock,
    Trophy,
    ExternalLink,
    Search,
    Filter,
    BookOpen,
    Headphones,
    FileText,
    Layout
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface ManagerResult {
    id: string;
    type: string;
    detail: string;
    score: number;
    total: number;
    timestamp: any;
    mode: string;
    unit?: string;
}

export default function StudentHistoryPage() {
    const [results, setResults] = useState<ManagerResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [filter, setFilter] = useState<string>('all');

    useEffect(() => {
        const storedUser = localStorage.getItem('toeic_user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            fetchHistory(parsedUser.userId);
        }
    }, []);

    const fetchHistory = async (userId: string) => {
        try {
            const q = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", userId),
                orderBy("timestamp", "desc")
            );

            const snapshot = await getDocs(q);
            const list: ManagerResult[] = [];
            snapshot.forEach(doc => {
                list.push({ id: doc.id, ...doc.data() } as ManagerResult);
            });
            setResults(list);
        } catch (error) {
            console.error("Error fetching history:", error);
        } finally {
            setLoading(false);
        }
    };

    const getHomeworkLink = (type: string, detail: string, id: string) => {
        if (!type || !detail) return '#';
        const testNum = detail.match(/\d+/)?.[0] || '1';
        const typeLower = type.toLowerCase();

        if (typeLower.includes('voca')) return `/homework/voca`;
        if (typeLower.includes('grammar')) return `/homework/part5`;
        if (typeLower === 'part2_test') return `/homework/part2/${testNum}`;
        if (typeLower === 'part3_test') return `/homework/part3/test/${testNum}`;
        if (typeLower === 'part4_test') return `/homework/part4/test/${testNum}`;
        if (typeLower === 'part5_test') return `/homework/part5-real/test/${testNum}`;
        if (typeLower === 'part6_test') return `/homework/part6/test/${testNum}`;
        if (typeLower === 'part7_test' || typeLower === 'part7_single') return `/homework/part7/test/${testNum}`;
        if (typeLower.includes('part7_double') || typeLower.includes('part7_triple') || typeLower === 'part7_multi') return `/homework/part7/practice?test=${testNum}`;
        if (typeLower === 'part7_double_test') return `/homework/part7/practice?test=${testNum}`;
        if (typeLower === 'weakness_review') return `/homework/weakness/${id}`;
        if (typeLower === 'level_test' || typeLower.includes('mock')) return `/mock-test/half/${detail.toLowerCase().replace(' ', '')}`;

        return '#';
    };

    const getIcon = (type: string) => {
        if (!type) return FileText;
        const typeLower = type.toLowerCase();
        if (typeLower.includes('part1') || typeLower.includes('p1') || typeLower.includes('part2') || typeLower.includes('p2') || typeLower.includes('part3') || typeLower.includes('p3') || typeLower.includes('part4') || typeLower.includes('p4')) {
            return Headphones;
        }
        if (typeLower.includes('voca')) return BookOpen;
        if (typeLower.includes('grammar')) return Layout;
        return FileText;
    };

    const filteredResults = results.filter(r => {
        const type = r.type || '';
        if (filter === 'all') return true;
        if (filter === 'lc') return type.includes('part1') || type.includes('part2') || type.includes('part3') || type.includes('part4');
        if (filter === 'rc') return type.includes('part5') || type.includes('part6') || type.includes('part7') || type.includes('grammar');
        if (filter === 'mock') return type.includes('level_test') || type.includes('mock');
        return true;
    });

    if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500 font-bold animate-pulse">학습 기록 불러오는 중...</div>;

    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Link href="/student/dashboard">
                            <Button variant="ghost" className="text-slate-400 hover:text-white">
                                <ArrowLeft className="w-5 h-5 md:mr-2" />
                                <span className="hidden md:inline">학습방으로</span>
                            </Button>
                        </Link>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">학습 완료 기록</h2>
                            <p className="text-slate-400 text-sm">그동안 완료한 모든 과제와 시험 결과를 확인하세요.</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
                        {[
                            { id: 'all', label: '전체' },
                            { id: 'lc', label: 'LC' },
                            { id: 'rc', label: 'RC' },
                            { id: 'mock', label: '모의고사' },
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setFilter(btn.id)}
                                className={cn(
                                    "px-4 py-1.5 text-xs font-bold rounded-lg transition-all",
                                    filter === btn.id ? "bg-indigo-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-300"
                                )}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-800 bg-slate-900/80">
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">학습 일자</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">구분</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">과제 명</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Score</th>
                                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-850">
                                {filteredResults.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-20 text-center text-slate-500 font-medium">
                                            기록된 학습 데이터가 없습니다.
                                        </td>
                                    </tr>
                                ) : (
                                    filteredResults.map((res) => {
                                        const date = res.timestamp instanceof Timestamp ? res.timestamp.toDate() : new Date();
                                        const Icon = getIcon(res.type);

                                        return (
                                            <tr key={res.id} className="hover:bg-slate-800/30 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2 text-slate-300">
                                                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                                        <span className="text-sm font-medium">{format(date, 'yyyy. MM. dd', { locale: ko })}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge variant="outline" className="bg-slate-800 border-slate-700 text-slate-400 text-[10px] font-bold py-0 h-5 px-2">
                                                        {(res.type || 'UNKNOWN').replace('_test', '').toUpperCase()}
                                                    </Badge>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 shrink-0">
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-white font-bold text-sm tracking-tight">{res.detail}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex flex-col items-center">
                                                        <div className="flex items-end gap-1">
                                                            <span className="text-lg font-black text-emerald-400 leading-none">{res.score || 0}</span>
                                                            <span className="text-[10px] text-slate-600 font-bold mb-0.5">/ {res.total || '-'}</span>
                                                        </div>
                                                        <div className="w-16 h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                                                            <div
                                                                className="h-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                                                style={{ width: `${(res.score / (res.total || 1)) * 100}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Link href={getHomeworkLink(res.type, res.detail, res.id)}>
                                                        <Button size="sm" variant="ghost" className="text-indigo-400 hover:text-white hover:bg-indigo-600/20 font-bold text-xs gap-2">
                                                            복습하기 <ExternalLink className="w-3 h-3" />
                                                        </Button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
}
