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
    Layout,
    RotateCcw,
    Sparkles,
    Target,
    Zap
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
    attemptId?: string;
}

export default function StudentHistoryPage() {
    const [results, setResults] = useState<ManagerResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<string>('mock');
    const [activeSubTab, setActiveSubTab] = useState<string>('all');

    // Reset subtab when main tab changes
    useEffect(() => {
        setActiveSubTab('all');
    }, [activeTab]);

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

    const getHomeworkLink = (type: string, detail: string, id: string, attemptId?: string) => {
        const typeLower = (type || '').toLowerCase();
        const detailLower = (detail || '').toLowerCase();
        const currentPath = '/student/history';

        let path = '#';

        // 1. If it's a summary record with attemptId, go to full report
        if (attemptId && (typeLower === 'mock_test' || typeLower === 'level_test' || detailLower.includes('diagnosis'))) {
            const testId = detail.includes('2회') || detailLower.includes('10a') || detailLower.includes('set10') ? 10 : 9;
            path = typeLower === 'level_test'
                ? `/mock-test/level/result?testId=${detailLower.includes('2회') || detailLower.includes('9b') ? '9b' : '9a'}&attemptId=${attemptId}`
                : `/mock-test/full/${testId}/result?attemptId=${attemptId}`;
        } else {
            // 2. Extract test number safely
            const testNum = detailLower.match(/\d+/)?.[0] || '1';

            // 3. Mapping for individual parts (Review/Practice)
            switch (typeLower) {
                case 'voca': path = `/homework/voca`; break;
                case 'grammar': path = `/homework/part5`; break;
                case 'part1_test': path = `/homework/part1-real/test/${testNum}`; break;
                case 'part1_shadow': path = `/homework/part1/${testNum}`; break;
                case 'part2_test': path = `/homework/part2/${testNum}`; break;
                case 'part3_test': path = `/homework/part3/test/${testNum}`; break;
                case 'part4_test': path = `/homework/part4/test/${testNum}`; break;
                case 'part5_test': path = `/homework/part5-real/test/${testNum}`; break;
                case 'part6_test': path = `/homework/part6/test/${testNum}`; break;
                case 'part7_test':
                case 'part7_single':
                    path = `/homework/part7/test/${testNum}`; break;
                case 'part7_double':
                case 'part7_triple':
                case 'part7_multi':
                case 'part7_double_test':
                    path = `/homework/part7/practice?test=${testNum}`; break;
                case 'weakness_review': path = `/homework/weakness/${id}`; break;
                case 'level_test':
                    const levelId = detailLower.includes('2회') || detailLower.includes('9b') ? '9b' : '9a';
                    path = `/mock-test/half/${levelId}`; break;
                default:
                    // Fallback for partial matches
                    if (typeLower.includes('part1')) path = `/homework/part1-real/test/${testNum}`;
                    else if (typeLower.includes('part2')) path = `/homework/part2/${testNum}`;
                    else if (typeLower.includes('part3')) path = `/homework/part3/test/${testNum}`;
                    else if (typeLower.includes('part4')) path = `/homework/part4/test/${testNum}`;
                    else if (typeLower.includes('part5')) path = `/homework/part5-real/test/${testNum}`;
                    else if (typeLower.includes('part6')) path = `/homework/part6/test/${testNum}`;
                    else if (typeLower.includes('part7')) path = `/homework/part7/test/${testNum}`;
            }
        }

        if (path === '#') return '#';
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}from=${currentPath}`;
    };

    const formatScore = (res: ManagerResult) => {
        if (typeof res.score !== 'number') return { score: 0, total: res.total || 0 };

        const typeLower = (res.type || '').toLowerCase();

        // Configuration for standard part sizes
        const PART_MAX: Record<string, number> = {
            'part1_test': 6, 'part2_test': 25, 'part3_test': 39, 'part4_test': 30,
            'part5_test': 30, 'part6_test': 16, 'part7_test': 54, 'part7_single': 29,
            'part7_double': 25, 'part7_triple': 25, 'voca': 30
        };

        const max = res.total || PART_MAX[typeLower] || 0;

        // If score is 0-100 AND significantly larger than total, it's likely a percentage
        if (max > 0 && res.score > max && res.score <= 100) {
            return {
                score: Math.round((res.score / 100) * max),
                total: max
            };
        }

        return { score: res.score, total: max };
    };

    const getIcon = (type: string) => {
        if (!type) return FileText;
        const typeLower = type.toLowerCase();
        if (typeLower.includes('mock') || typeLower.includes('level_test')) return Target;
        if (typeLower.includes('part1') || typeLower.includes('p1') || typeLower.includes('part2') || typeLower.includes('p2') || typeLower.includes('part3') || typeLower.includes('p3') || typeLower.includes('part4') || typeLower.includes('p4')) {
            return Headphones;
        }
        if (typeLower.includes('voca')) return BookOpen;
        if (typeLower.includes('grammar') || typeLower.includes('part5') || typeLower.includes('part6')) return Layout;
        return FileText;
    };

    // Refined Filtering Logic for Tabs
    const filteredResults = results.filter(r => {
        const typeLower = (r.type || '').toLowerCase();
        const detailLower = (r.detail || '').toLowerCase();
        const unitLower = (r.unit || '').toLowerCase();

        // 1. Identify Mock/Level Test Related Records (Standard markers)
        const isMockRelated = typeLower.includes('mock') || typeLower.includes('level') || !!r.attemptId;

        // 2. Identify Summary vs Sub-Part
        const isSummary =
            typeLower === 'mock_test' ||
            typeLower === 'level_test' ||
            r.isSummary === true;

        // 3. Category Filter
        if (activeTab === 'mock') {
            // ONLY show the single summary record for the test
            return isMockRelated && isSummary;
        }

        // For LC, RC, Voca tabs - hide all mock components
        if (isMockRelated) return false;

        if (activeTab === 'lc') {
            const isLC = typeLower.includes('part1') || typeLower.includes('part2') ||
                typeLower.includes('part3') || typeLower.includes('part4') ||
                typeLower.includes('lc');
            if (!isLC) return false;
        } else if (activeTab === 'rc') {
            const isRC = typeLower.includes('part5') || typeLower.includes('part6') ||
                typeLower.includes('part7') || typeLower.includes('grammar') ||
                typeLower.includes('rc');
            if (!isRC) return false;
        } else if (activeTab === 'voca') {
            if (!typeLower.includes('voca')) return false;
        }

        // 4. Sub-tab Filter (for LC/RC homework)
        if (activeSubTab === 'all') return true;

        const partMap: Record<string, string> = {
            'p1': 'part1', 'p2': 'part2', 'p3': 'part3', 'p4': 'part4',
            'p5': 'part5', 'p6': 'part6', 'p7': 'part7'
        };

        const targetPart = partMap[activeSubTab];
        return typeLower.includes(targetPart);
    });

    if (loading) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <div className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">나의 학습 데이터 동기화 중...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8 font-sans selection:bg-indigo-500/30">
            <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-4">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <RotateCcw className="w-4 h-4 text-rose-500" />
                                <span className="text-[10px] font-black text-rose-500/80 uppercase tracking-[0.2em] italic">Review & Re-training Mode</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">복습 & 오답 정복</h2>
                            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">틀린 문제를 분석하고 다시 풀어보며 취약점을 완벽하게 보완하세요.</p>
                        </div>
                    </div>

                    {/* Tab Section Stack */}
                    <div className="space-y-6">
                        {/* Main Category Tabs */}
                        <div className="flex bg-slate-900/80 backdrop-blur-xl border border-white/5 p-1.5 rounded-2xl shadow-2xl w-fit mx-auto md:mx-0">
                            {[
                                { id: 'mock', label: '모의고사', icon: Target },
                                { id: 'lc', label: '리스닝(LC)', icon: Headphones },
                                { id: 'rc', label: '리딩(RC)', icon: Layout },
                                { id: 'voca', label: '단어/기타', icon: BookOpen }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {
                                        setActiveTab(tab.id);
                                        setActiveSubTab('all'); // Reset sub-tab when main tab changes
                                    }}
                                    className={cn(
                                        "flex items-center gap-2 px-2.5 md:px-4 py-2 text-sm md:text-lg font-black rounded-xl transition-all uppercase tracking-wider italic",
                                        activeTab === tab.id
                                            ? "bg-indigo-600 text-white shadow-[0_4_20px_rgba(79,70,229,0.4)]"
                                            : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                                    )}
                                >
                                    <tab.icon className={cn("w-3.5 h-3.5 md:w-5 md:h-5", activeTab === tab.id ? "animate-pulse" : "")} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Sub-Tabs Row (Stable secondary navigation) */}
                        <div className="min-h-[40px] flex items-center justify-center">
                            {(activeTab === 'lc' || activeTab === 'rc') && (
                                <div className="flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                                    {[
                                        ...(activeTab === 'lc'
                                            ? [{ id: 'all', label: '전체' }, { id: 'p1', label: 'Part 1' }, { id: 'p2', label: 'Part 2' }, { id: 'p3', label: 'Part 3' }, { id: 'p4', label: 'Part 4' }]
                                            : [{ id: 'all', label: '전체' }, { id: 'p5', label: 'Part 5' }, { id: 'p6', label: 'Part 6' }, { id: 'p7', label: 'Part 7' }]
                                        )
                                    ].map((sub) => (
                                        <button
                                            key={sub.id}
                                            onClick={() => setActiveSubTab(sub.id)}
                                            className={cn(
                                                "px-3 py-1 text-xs font-black rounded-lg transition-all border uppercase tracking-wider italic",
                                                activeSubTab === sub.id
                                                    ? "bg-white text-slate-900 border-white shadow-lg"
                                                    : "bg-slate-900/50 text-slate-500 border-white/5 hover:border-white/20 hover:text-slate-300"
                                            )}
                                        >
                                            {sub.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Content Section */}
                <div className="space-y-12">
                    {filteredResults.length === 0 ? (
                        <Card className="bg-slate-900/30 border-dashed border-white/5 p-24 text-center rounded-[3rem]">
                            <div className="flex flex-col items-center justify-center space-y-4">
                                <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center border border-white/5">
                                    <Zap className="w-10 h-10 text-slate-600" />
                                </div>
                                <div>
                                    <p className="text-slate-400 font-black text-lg uppercase tracking-tight italic">No Records Found</p>
                                    <p className="text-slate-600 text-sm font-medium mt-1">해당 카테고리의 학습 데이터가 아직 없습니다.</p>
                                </div>
                                <Link href="/student/home">
                                    <Button className="bg-indigo-600 hover:bg-indigo-500 font-black italic uppercase text-xs px-8 h-12 rounded-2xl mt-4">
                                        새로운 학습 시작하기
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ) : (
                        Object.entries(
                            filteredResults.reduce((acc, res) => {
                                const date = res.timestamp instanceof Timestamp ? res.timestamp.toDate() : new Date();
                                const dateKey = format(date, 'yyyy-MM-dd');
                                if (!acc[dateKey]) acc[dateKey] = [];
                                acc[dateKey].push(res);
                                return acc;
                            }, {} as Record<string, ManagerResult[]>)
                        ).sort((a, b) => b[0].localeCompare(a[0])).map(([dateKey, items]) => (
                            <div key={dateKey} className="space-y-6 relative">
                                {/* Date Divider */}
                                <div className="sticky top-4 z-10 flex items-center gap-4 py-2">
                                    <div className="bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)] text-white px-4 py-1.5 rounded-full flex items-center gap-2 border border-indigo-400/30">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span className="text-[11px] font-black italic tracking-tight">
                                            {format(new Date(dateKey), 'yyyy. MM. dd', { locale: ko })}
                                        </span>
                                    </div>
                                    <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
                                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
                                        {items.length} Achievements
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 gap-4 pl-0 md:pl-4">
                                    {items.map((res) => {
                                        const date = res.timestamp instanceof Timestamp ? res.timestamp.toDate() : new Date();
                                        const Icon = getIcon(res.type);
                                        const isMock = (res.type || '').toLowerCase().includes('mock') || (res.type || '').toLowerCase().includes('level');

                                        return (
                                            <Card key={res.id} className={cn(
                                                "group p-5 md:p-6 transition-all duration-300 rounded-[2rem] border relative overflow-hidden",
                                                isMock
                                                    ? "bg-indigo-500/5 border-indigo-500/20 hover:border-indigo-500/50 shadow-xl shadow-indigo-500/5"
                                                    : "bg-slate-900/40 border-white/5 hover:border-white/20"
                                            )}>
                                                {/* Background Accent for Mock Tests */}
                                                {isMock && (
                                                    <div className="absolute right-0 top-0 w-32 h-full bg-indigo-500/5 -skew-x-12 translate-x-16"></div>
                                                )}

                                                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                    <div className="flex items-center gap-5">
                                                        {/* Time Badge */}
                                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center shrink-0">
                                                            <span className="text-[8px] text-slate-500 font-black leading-none mb-1 uppercase tracking-tighter">Time</span>
                                                            <span className="text-sm font-black text-white italic">{format(date, 'HH:mm')}</span>
                                                        </div>

                                                        <div className="min-w-0">
                                                            <div className="flex items-center gap-2 mb-1.5">
                                                                {(() => {
                                                                    const typeLower = (res.type || '').toLowerCase();
                                                                    const detailLower = (res.detail || '').toLowerCase();
                                                                    const unitLower = (res.unit || '').toLowerCase();
                                                                    const isSummary = typeLower === 'mock_test' ||
                                                                        typeLower === 'level_test' ||
                                                                        typeLower === 'mock_summary' ||
                                                                        res.isSummary === true ||
                                                                        unitLower.includes('result') ||
                                                                        detailLower.includes('diagnosis');

                                                                    return (
                                                                        <Badge variant="outline" className={cn(
                                                                            "text-[9px] font-black h-5 px-2 uppercase italic tracking-widest border-none",
                                                                            isSummary ? "bg-indigo-600 text-white" : "bg-white/10 text-slate-400"
                                                                        )}>
                                                                            {isSummary ? 'Premium Analysis' : (res.type || 'H.W').replace('_test', '').toUpperCase()}
                                                                        </Badge>
                                                                    );
                                                                })()}
                                                                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-tight hidden sm:inline">Successfully Completed</span>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <div className={cn(
                                                                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                                                                    (res.type || '').toLowerCase().includes('mock') || (res.type || '').toLowerCase().includes('level') || (res.detail || '').toLowerCase().includes('레벨') || (res.detail || '').toLowerCase().includes('모의') ? "bg-indigo-500/20 text-indigo-400" : "bg-white/5 text-slate-500"
                                                                )}>
                                                                    <Icon className="w-4 h-4" />
                                                                </div>
                                                                <p className="font-black text-white text-lg md:text-xl truncate tracking-tight uppercase italic">{res.detail}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between md:justify-end gap-10 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                                                        {/* Score Section */}
                                                        {(() => {
                                                            const { score, total } = formatScore(res);
                                                            return (
                                                                <div className="flex flex-col items-center md:items-end">
                                                                    <div className="flex items-baseline gap-1.5">
                                                                        <span className={cn(
                                                                            "text-3xl font-black tracking-tighter italic",
                                                                            (res.type || '').toLowerCase().includes('mock') || (res.type || '').toLowerCase().includes('level') ? "text-indigo-400" : "text-emerald-400"
                                                                        )}>{score}</span>
                                                                        <span className="text-xs text-slate-600 font-bold">/ {total || '-'}</span>
                                                                    </div>
                                                                    <div className="w-24 h-1 bg-white/5 rounded-full mt-2 overflow-hidden hidden md:block border border-white/5">
                                                                        <div
                                                                            className={cn(
                                                                                "h-full transition-all duration-1000",
                                                                                (res.type || '').toLowerCase().includes('mock') || (res.type || '').toLowerCase().includes('level') ? "bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)]" : "bg-emerald-500/80"
                                                                            )}
                                                                            style={{ width: `${(score / (total || 1)) * 100}%` }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        })()}

                                                        {/* Link Button */}
                                                        <Link href={getHomeworkLink(res.type, res.detail, res.id, res.attemptId)} className="shrink-0">
                                                            <Button
                                                                size="sm"
                                                                className={cn(
                                                                    "font-black text-xs h-12 px-6 rounded-2xl gap-2 tracking-widest italic transition-all group-hover:scale-105",
                                                                    isMock
                                                                        ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                                                                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                                                )}
                                                            >
                                                                {isMock ? '분석 리포트' : '틀린문제 다시풀기'}
                                                                <RotateCcw className="w-3.5 h-3.5" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
