"use client";

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
    BookOpen,
    PenSquare,
    Mic2,
    Headphones,
    CheckSquare,
    FileText,
    Monitor,
    Target,
    Sparkles,
    ArrowRight,
    Search,
    BookMarked,
    GraduationCap,
    Trophy,
    TrendingUp,
    RotateCcw
} from "lucide-react";
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { WeaknessService, WeaknessReport } from '@/services/weaknessService';
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { useUserData } from '@/context/UserDataContext';
import { ApprovalGatedAction } from '@/components/auth/ApprovalGatedSection';

// --- Types & Data ---

type Category = 'PROBLEM' | 'LECTURE' | 'VOCA' | 'FULL';

interface ContentItem {
    id: string;
    title: string;
    description: string;
    icon: any;
    href: string;
    category: Category;
    featureKey?: string;
    isPCColor?: boolean;
    color?: 'emerald' | 'blue' | 'indigo' | 'rose' | 'amber' | 'violet' | 'cyan' | 'orange' | 'pink' | 'amber';
}

const CONTENT_ITEMS: ContentItem[] = [
    // Problem Category
    { id: 'grammar', title: '문법 미션 (Grammar)', description: '기초부터 실전까지 빈출 문법 정복', icon: PenSquare, href: '/homework/part5', category: 'PROBLEM', featureKey: 'grammar', color: 'blue' },
    { id: 'p1_shadow', title: 'Part 1 쉐도잉', description: 'LC 어휘와 발음을 동시에 훈련', icon: Mic2, href: '/homework/part1', category: 'PROBLEM', featureKey: 'part1', color: 'indigo' },
    { id: 'p1_real', title: 'Part 1 실전 테스트', description: '사진 묘사 완벽 대비 실전 문제', icon: CheckSquare, href: '/homework/part1-real', category: 'PROBLEM', featureKey: 'part1_real', color: 'indigo' },
    { id: 'p2_real', title: 'Part 2 실전 테스트', description: '질문-응답 1:1 집중 훈련', icon: Headphones, href: '/homework/part2', category: 'PROBLEM', featureKey: 'part2', color: 'rose' },
    { id: 'p3_real', title: 'Part 3 짧은 대화', description: '다자간 대화 흐름 파악 실전', icon: Headphones, href: '/homework/part3', category: 'PROBLEM', featureKey: 'part3', color: 'emerald' },
    { id: 'p4_real', title: 'Part 4 설명문', description: '긴 지문 핵심 정보 파악 실전', icon: Headphones, href: '/homework/part4', category: 'PROBLEM', featureKey: 'part4', color: 'amber' },
    { id: 'p5_real', title: 'Part 5 단문 넣기', description: '초스피드 실전 문법/어휘 풀이', icon: CheckSquare, href: '/homework/part5-real', category: 'PROBLEM', featureKey: 'part5', color: 'violet' },
    { id: 'p6_real', title: 'Part 6 장문 빈칸', description: '문맥 파악 및 문장 삽입 훈련', icon: FileText, href: '/homework/part6', category: 'PROBLEM', featureKey: 'part6', color: 'cyan' },
    { id: 'p7_single', title: 'Part 7 단일 지문', description: '독해 기본기 및 속독 집중 연습', icon: BookOpen, href: '/homework/part7', category: 'PROBLEM', featureKey: 'part7', color: 'orange' },
    { id: 'p7_double', title: 'Part 7 이중 지문', description: '연계 지문 분석 및 정보 추출 (PC 전용)', icon: Monitor, href: '/homework/part7-double', category: 'PROBLEM', featureKey: 'part7_double', color: 'pink' },

    // Voca Category
    { id: 'voca', title: '보카 (단어장)', description: '기출 어휘부터 고난도 단어까지', icon: BookMarked, href: '/homework/voca', category: 'VOCA', featureKey: 'voca', color: 'emerald' },

    // Full/Mock Category
    { id: 'mock_test', title: 'TOEIC 모의고사', description: '전체 파트 실전 배회 모의고사 (PC 전용)', icon: Trophy, href: '/mock-test', category: 'FULL', featureKey: 'mockTest', color: 'indigo' },
    { id: 'level_test', title: 'TOEIC 모의 하프테스트', description: '현재 실력 정밀 진단 시스템 (PC 전용)', icon: Target, href: '/level-test', category: 'FULL', featureKey: 'levelTest', color: 'amber' },
];

export default function SelectionPage() {
    return (
        <Suspense fallback={<LoadingState />}>
            <SelectionContent />
        </Suspense>
    );
}

function LoadingState() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <div className="text-slate-500 font-black uppercase tracking-widest text-sm italic">사다리 타는 중...</div>
        </div>
    );
}

function SelectionContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const {
        user: profile,
        report: weaknessReport,
        loading: globalLoading,
        refreshAll
    } = useUserData();

    const [activeTab, setActiveTab] = useState<Category>('PROBLEM');
    const [loading, setLoading] = useState(true);
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const tab = searchParams.get('tab') as Category;
        if (tab) setActiveTab(tab);

        const userStr = localStorage.getItem('toeic_user');
        if (!userStr) {
            router.push('/');
            return;
        }
        const parsedUser = JSON.parse(userStr);

        // Initial sync
        refreshAll(parsedUser.userId, parsedUser.className);

        // Fetch separate feature access
        getFeatureAccess().then(setAccess);
    }, [router, searchParams, refreshAll]);

    useEffect(() => {
        if (!globalLoading) {
            setLoading(false);
        }
    }, [globalLoading]);

    const handleItemClick = (item: ContentItem) => {
        const isLocked = item.featureKey && access && !access[item.featureKey as keyof FeatureAccess];
        if (isLocked) {
            alert("이 기능은 현재 관리자에 의해 비활성화되었습니다.");
            return;
        }

        // origin tracking: 현재 탭 정보까지 포함
        const currentPath = `/student/selection?tab=${activeTab}`;
        const targetUrl = item.href.includes('?')
            ? `${item.href}&from=${encodeURIComponent(currentPath)}`
            : `${item.href}?from=${encodeURIComponent(currentPath)}`;

        router.push(targetUrl);
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
            <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <div className="text-slate-500 font-black uppercase tracking-widest text-sm italic">사다리 타는 중...</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0B0F1A] pb-32 text-white font-sans overflow-x-hidden">
            {/* AI Weakness Focus Showcase (Santa Style) */}
            <div className="px-6 pt-12 mb-10">
                <div className="flex items-end justify-between mb-6">
                    <div className="flex flex-col">
                        <h3 className="text-4xl font-black text-white tracking-tighter leading-tight italic uppercase pr-2">
                            꼭 보완해야 할 <br />
                            <span className="text-rose-500">취약 파트 TOP 3</span>
                        </h3>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                if (profile) {
                                    refreshAll(profile.userId, profile.className, true);
                                }
                            }}
                            className="h-8 w-8 p-0 text-slate-700 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-full transition-all"
                            title="데이터 새로고침"
                        >
                            <RotateCcw className={cn("w-4 h-4", loading && "animate-spin")} />
                        </Button>
                        <div className="w-12 h-12 bg-rose-500/10 rounded-full flex items-center justify-center border border-rose-500/20">
                            <Trophy className="w-6 h-6 text-rose-500" />
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900/50 rounded-2xl border border-white/5 overflow-hidden">
                    <div className="divide-y divide-white/5">
                        {Object.entries(weaknessReport?.targetStats || {})
                            .map(([part, stats]) => ({ part, ...stats }))
                            .filter(p => p.target > 0)
                            .sort((a, b) => a.gap - b.gap) // Most negative gap first
                            .slice(0, 3)
                            .map((item, idx) => {
                                const partLabels: Record<string, string> = {
                                    p1: 'Part 1', p2: 'Part 2', p3: 'Part 3', p4: 'Part 4',
                                    p5: 'Part 5', p6: 'Part 6', p7s: 'Part 7 Single', p7d: 'Part 7 Double/Triple'
                                };
                                const isCritical = item.gap <= -3;

                                return (
                                    <div
                                        key={item.part}
                                        onClick={() => handleItemClick(CONTENT_ITEMS.find(ci => ci.id.includes(item.part.toLowerCase())) as ContentItem)}
                                        className="px-5 py-4 flex items-center justify-between hover:bg-white/[0.05] transition-colors group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border",
                                                idx === 0 ? "bg-rose-500 text-white border-rose-400" : "bg-slate-800 text-slate-500 border-slate-700"
                                            )}>
                                                {idx + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-black text-slate-200 uppercase italic tracking-tighter group-hover:text-white transition-colors pr-1">
                                                    {partLabels[item.part] || item.part}
                                                </p>
                                                <p className={cn(
                                                    "text-[10px] font-bold uppercase tracking-tight",
                                                    isCritical ? "text-rose-400" : "text-slate-500"
                                                )}>
                                                    {item.gap < 0 ? `${Math.abs(item.gap)}문제 더 맞춰야 함` : '목표 달성 중'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[9px] text-slate-500 font-bold uppercase mb-0.5 tracking-wider">Status</div>
                                            <div className="flex items-baseline gap-1">
                                                <span className={cn("text-lg font-black italic tracking-tighter pr-1", isCritical ? "text-rose-500" : "text-emerald-400")}>
                                                    {item.latest}
                                                </span>
                                                <span className="text-[10px] font-black text-slate-700">/ {item.target}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="p-3 bg-slate-950/30 border-t border-white/5">
                        <p className="text-[9px] text-slate-600 leading-relaxed text-center font-bold uppercase tracking-tighter">
                            * 목표 점수 대비 정답 개수가 부족한 순서로 표시됩니다
                        </p>
                    </div>
                </div>
            </div >

            {/* Category Sub-Tabs */}
            < div className="sticky top-0 z-40 bg-[#0B0F1A]/80 backdrop-blur-md px-6 py-4 flex gap-2 overflow-x-auto no-scrollbar border-b border-white/5" >
                {
                    [
                        { id: 'PROBLEM', label: '문제', icon: PenSquare },
                        { id: 'VOCA', label: '어휘', icon: BookMarked },
                        { id: 'LECTURE', label: '강의', icon: GraduationCap },
                        { id: 'FULL', label: '모의고사', icon: Trophy },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as Category)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black uppercase italic tracking-wider transition-all whitespace-nowrap",
                                activeTab === tab.id
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"
                                    : "bg-slate-900/60 text-slate-500 border border-white/5 hover:text-slate-300"
                            )}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))
                }
            </div >

            {/* Content List */}
            < div className="px-6 mt-8 grid grid-cols-1 gap-4 w-full" >
                {
                    CONTENT_ITEMS.filter(item => item.category === activeTab).map((item) => {
                        const isLocked = item.featureKey && access && !access[item.featureKey as keyof FeatureAccess];
                        return (
                            <ApprovalGatedAction key={item.id}>
                                <div
                                    onClick={() => handleItemClick(item)}
                                    className={cn(
                                        "relative group cursor-pointer transition-all duration-500 w-full",
                                        isLocked ? "opacity-40 grayscale" : "active:scale-95"
                                    )}
                                >
                                    {/* Card Background with Glass Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 group-hover:border-indigo-500/30 transition-colors"></div>

                                    <div className="relative p-4 sm:p-6 flex items-center gap-4 sm:gap-6">
                                        {/* Icon Container - Responsive Size */}
                                        <div className={cn(
                                            "w-12 h-12 sm:w-16 sm:h-16 rounded-[1rem] sm:rounded-[1.8rem] flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0",
                                            item.color === 'emerald' && "bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-emerald-900/40",
                                            item.color === 'blue' && "bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-900/40",
                                            item.color === 'indigo' && "bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-indigo-900/40",
                                            item.color === 'rose' && "bg-gradient-to-br from-rose-500 to-rose-700 shadow-rose-900/40",
                                            item.color === 'violet' && "bg-gradient-to-br from-violet-500 to-violet-700 shadow-violet-900/40",
                                            item.color === 'amber' && "bg-gradient-to-br from-amber-500 to-amber-700 shadow-amber-900/40",
                                            item.color === 'cyan' && "bg-gradient-to-br from-cyan-500 to-cyan-700 shadow-cyan-900/40",
                                            item.color === 'orange' && "bg-gradient-to-br from-orange-500 to-orange-700 shadow-orange-900/40",
                                            item.color === 'pink' && "bg-gradient-to-br from-pink-500 to-pink-700 shadow-pink-900/40",
                                            !item.color && "bg-gradient-to-br from-slate-500 to-slate-700 shadow-slate-900/40"
                                        )}>
                                            <item.icon className="w-5 h-5 sm:w-8 sm:h-8" />
                                        </div>

                                        {/* Text Content - Better Hierarchy */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                                                <h5 className="text-lg sm:text-2xl font-black text-white italic tracking-tighter uppercase leading-tight truncate pr-2">
                                                    {item.title}
                                                </h5>
                                                {item.id.includes('double') || item.id.includes('mock') || item.id.includes('level') ? (
                                                    <span className={cn(
                                                        "px-1.5 py-0.5 bg-white/10 border border-white/20 rounded-md text-[7px] sm:text-[8px] font-black text-white uppercase tracking-widest flex-shrink-0",
                                                        item.color === 'pink' && "bg-pink-500/10 border-pink-500/20 text-pink-400",
                                                        item.color === 'amber' && "bg-amber-500/10 border-amber-500/20 text-amber-400"
                                                    )}>
                                                        PC
                                                    </span>
                                                ) : null}
                                            </div>
                                            <p className="text-[11px] sm:text-sm font-bold text-slate-400 uppercase tracking-wide leading-snug line-clamp-1 sm:line-clamp-2 opacity-80">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Action Indicator */}
                                        <div className={cn(
                                            "hidden sm:flex w-10 h-10 rounded-full bg-white/5 items-center justify-center transition-all group-hover:text-white",
                                            item.color === 'emerald' && "group-hover:bg-emerald-500",
                                            item.color === 'blue' && "group-hover:bg-blue-500",
                                            item.color === 'indigo' && "group-hover:bg-indigo-500",
                                            item.color === 'rose' && "group-hover:bg-rose-500",
                                            item.color === 'violet' && "group-hover:bg-violet-500",
                                            item.color === 'amber' && "group-hover:bg-amber-500",
                                            item.color === 'cyan' && "group-hover:bg-cyan-500",
                                            item.color === 'orange' && "group-hover:bg-orange-500",
                                            item.color === 'pink' && "group-hover:bg-pink-500",
                                            !item.color && "group-hover:bg-indigo-500"
                                        )}>
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className={cn(
                                        "absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity",
                                        item.color === 'emerald' && "via-emerald-500/40",
                                        item.color === 'blue' && "via-blue-500/40",
                                        item.color === 'indigo' && "via-indigo-500/40",
                                        item.color === 'rose' && "via-rose-500/40",
                                        item.color === 'violet' && "via-violet-500/40",
                                        item.color === 'amber' && "via-amber-500/40",
                                        item.color === 'cyan' && "via-cyan-500/40",
                                        item.color === 'orange' && "via-orange-500/40",
                                        item.color === 'pink' && "via-pink-500/40",
                                        !item.color && "via-indigo-500/40"
                                    )}></div>
                                </div>
                            </ApprovalGatedAction>
                        );
                    })
                }

                {
                    activeTab === 'LECTURE' && (
                        <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-slate-900/60 rounded-full flex items-center justify-center mb-6 border border-white/5">
                                <GraduationCap className="w-10 h-10 text-slate-700" />
                            </div>
                            <h4 className="text-lg font-black text-slate-500 italic uppercase">Lectures Coming Soon</h4>
                            <p className="text-xs text-slate-600 font-bold uppercase tracking-widest mt-2">깡쌤의 명품 강의가 준비 중입니다</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
