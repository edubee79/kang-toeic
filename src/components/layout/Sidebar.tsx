'use client';

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Home, Shield, BookOpen, Mic2, Headphones, LogOut, PenSquare, CheckSquare, FileText, Monitor, Target, Lock, UserX, AlertTriangle, ChevronDown, ChevronRight, RefreshCw, BookMarked, GraduationCap, Trophy, Settings } from "lucide-react";
import { auth, db } from "@/lib/firebase";
import { signOut, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import { getFeatureAccess, FeatureAccess } from "@/services/configService";

const menuItems = [
    {
        id: 'home',
        href: "/student/home",
        label: "나의 학습방",
        icon: Target
    },
    {
        id: 'selection',
        href: "/student/selection",
        label: "선택 학습",
        icon: BookOpen,
        subItems: [
            {
                href: "/student/selection?tab=PROBLEM",
                label: "문제",
                icon: PenSquare,
                nestedItems: [
                    { href: "/homework/part5?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "문법 미션 (Grammar)", icon: PenSquare, featureKey: 'grammar' },
                    { href: "/homework/part1-real?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 1 실전 테스트", icon: CheckSquare, featureKey: 'part1_real' },
                    { href: "/homework/part2?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 2 실전 테스트", icon: Headphones, featureKey: 'part2' },
                    { href: "/homework/part3?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 3 짧은 대화", icon: Mic2, featureKey: 'part3' },
                    { href: "/homework/part4?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 4 설명문", icon: Mic2, featureKey: 'part4' },
                    { href: "/homework/part5-real?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 5 단문 넣기", icon: CheckSquare, featureKey: 'part5' },
                    { href: "/homework/part6?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 6 장문 빈칸", icon: FileText, featureKey: 'part6' },
                    { href: "/homework/part7?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 7 단일 지문", icon: BookOpen, featureKey: 'part7' },
                    { href: "/homework/part7-double?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM", label: "Part 7 이중 지문", icon: Monitor, featureKey: 'part7_double' },
                ]
            },
            {
                href: "/student/selection?tab=VOCA",
                label: "어휘",
                icon: BookMarked,
                nestedItems: [
                    { href: "/homework/voca?from=%2Fstudent%2Fselection%3Ftab%3DVOCA", label: "보카 (단어장)", icon: BookMarked, featureKey: 'voca' },
                    { href: "/homework/part1?from=%2Fstudent%2Fselection%3Ftab%3DVOCA", label: "Part 1 쉐도잉", icon: Mic2, featureKey: 'part1' },
                ]
            },
            { href: "/student/selection?tab=LECTURE", label: "강의", icon: GraduationCap },
            {
                href: "/student/selection?tab=FULL",
                label: "모의고사",
                icon: Trophy,
                nestedItems: [
                    { href: "/mock-test?from=%2Fstudent%2Fselection%3Ftab%3DFULL", label: "TOEIC 모의고사", icon: Trophy, featureKey: 'mockTest' },
                    { href: "/level-test?from=%2Fstudent%2Fselection%3Ftab%3DFULL", label: "TOEIC 모의 하프테스트", icon: Target, featureKey: 'levelTest' },
                ]
            },
        ]
    },
    {
        id: 'analysis',
        href: "/student/analysis",
        label: "AI 분석",
        icon: Shield
    },
    {
        id: 'review',
        href: "/student/history",
        label: "복습",
        icon: RefreshCw
    },
];

function NavContent({
    pathname,
    setOpen,
}: {
    pathname: string;
    setOpen?: (v: boolean) => void;
}) {
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const currentTab = searchParams.get('tab');

    useEffect(() => {
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
        };
        fetchAccess();

        // 1단계 확장 (선택 학습)
        if (pathname.includes('/homework/') || pathname === '/mock-test' || pathname === '/level-test' || pathname === '/student/selection') {
            setExpandedMenu('selection');

            // 2단계 확장 (문제 / 어휘 / 모의고사 등)
            if (pathname.includes('part') || pathname.includes('grammar')) {
                setExpandedSubMenu('문제');
            } else if (pathname.includes('voca')) {
                setExpandedSubMenu('어휘');
            } else if (pathname === '/mock-test' || pathname === '/level-test' || currentTab === 'FULL') {
                setExpandedSubMenu('모의고사');
            } else if (currentTab === 'PROBLEM') {
                setExpandedSubMenu('문제');
            } else if (currentTab === 'VOCA') {
                setExpandedSubMenu('어휘');
            }
        }
    }, [pathname, currentTab]);

    const isUrlActive = (href: string) => {
        const [basePath, query] = href.split('?');
        // 세부 파트 진입 시 (예: /homework/part1-real) 해당 베이스 카테고리(정규표현식 등 활용 가능하나 간단히 체크)
        if (pathname === basePath && !query) return true;
        if (pathname === basePath && query) {
            const urlParams = new URLSearchParams(query);
            return urlParams.get('tab') === currentTab;
        }
        return false;
    };

    return (
        <div className="flex flex-col h-full bg-[#0B0F1A] text-white p-6 border-r border-indigo-500/10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
            <div className="mb-10 flex items-center gap-3 px-2 cursor-default">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
                    KANGS TOEIC
                </h1>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto max-md:no-scrollbar pr-1">
                {menuItems.map((item: any) => {
                    const isExpanded = expandedMenu === item.id;
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isActive = isUrlActive(item.href) || (hasSubItems && item.subItems.some((sub: any) => isUrlActive(sub.href)));

                    return (
                        <div key={item.id} className="space-y-1">
                            <div
                                onClick={() => {
                                    if (hasSubItems) {
                                        setExpandedMenu(isExpanded ? null : item.id);
                                    }
                                }}
                                className="relative flex items-center"
                            >
                                <Link
                                    href={item.href}
                                    onClick={(e) => {
                                        if (hasSubItems) {
                                            e.preventDefault();
                                        }
                                        if (setOpen && !hasSubItems) setOpen(false);
                                    }}
                                    className={cn(
                                        "flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold group",
                                        isActive
                                            ? "bg-indigo-600/20 text-indigo-400 border border-indigo-600/30 shadow-[0_0_15px_rgba(79,70,229,0.1)]"
                                            : "text-slate-400 hover:bg-white/[0.03] hover:text-indigo-400"
                                    )}
                                >
                                    <item.icon className={cn("w-5 h-5 transition-colors",
                                        isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-400"
                                    )} />
                                    <span>{item.label}</span>
                                    {hasSubItems && (
                                        <div className="ml-auto">
                                            {isExpanded ? <ChevronDown className="w-4 h-4 opacity-50" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
                                        </div>
                                    )}
                                </Link>
                            </div>

                            {hasSubItems && isExpanded && (
                                <div className="ml-4 pl-4 border-l border-slate-800/50 space-y-1 mt-1 animate-in fade-in slide-in-from-left-2 duration-300">
                                    {item.subItems.map((sub: any, subIdx: number) => {
                                        const isLocked = sub.featureKey && access && !access[sub.featureKey as keyof FeatureAccess];
                                        const hasNestedItems = sub.nestedItems && sub.nestedItems.length > 0;
                                        const isSubActive = isUrlActive(sub.href) || (hasNestedItems && sub.nestedItems.some((nested: any) => pathname === nested.href));
                                        const isSubExpanded = expandedSubMenu === sub.label;

                                        return (
                                            <div key={subIdx} className="space-y-1">
                                                <Link
                                                    href={sub.href}
                                                    onClick={(e) => {
                                                        if (isLocked) {
                                                            e.preventDefault();
                                                            alert("이 기능은 현재 비활성화되었습니다.");
                                                            return;
                                                        }
                                                        if (hasNestedItems) {
                                                            setExpandedSubMenu(isSubExpanded ? null : sub.label);
                                                        }
                                                        // 모바일에서는 링크 클릭 시 무조건 사이드바를 닫음 (이동 확인을 위함)
                                                        if (setOpen) setOpen(false);
                                                    }}
                                                    className={cn(
                                                        "flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-[13px] font-bold group",
                                                        isSubActive
                                                            ? "text-indigo-400 bg-indigo-500/5"
                                                            : isLocked
                                                                ? "text-slate-600 grayscale opacity-50"
                                                                : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                                                    )}
                                                >
                                                    <sub.icon className={cn("w-4 h-4", isSubActive ? "text-indigo-400" : "text-slate-600")} />
                                                    <span className={cn(isLocked && "line-through")}>{sub.label}</span>
                                                    {hasNestedItems && (
                                                        <div className="ml-auto opacity-40">
                                                            {isSubExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                                                        </div>
                                                    )}
                                                    {isLocked && <Lock className="ml-auto w-3 h-3 text-rose-500/50" />}
                                                </Link>

                                                {/* 3단계: 세부 파트 (PC 전용) */}
                                                {hasNestedItems && isSubExpanded && (
                                                    <div className="ml-4 pl-4 border-l border-white/5 space-y-1 mt-1 animate-in fade-in slide-in-from-left-2 duration-200">
                                                        {sub.nestedItems.map((nested: any, nIdx: number) => {
                                                            const isNestedLocked = nested.featureKey && access && !access[nested.featureKey as keyof FeatureAccess];
                                                            const isNestedActive = pathname === nested.href;

                                                            return (
                                                                <Link
                                                                    key={nIdx}
                                                                    href={nested.href}
                                                                    onClick={(e) => {
                                                                        if (isNestedLocked) {
                                                                            e.preventDefault();
                                                                            alert("이 기능은 현재 비활성화되었습니다.");
                                                                            return;
                                                                        }
                                                                        if (setOpen) setOpen(false);
                                                                    }}
                                                                    className={cn(
                                                                        "flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-[11px] font-bold",
                                                                        isNestedActive
                                                                            ? "text-indigo-400 bg-indigo-500/10"
                                                                            : isNestedLocked
                                                                                ? "text-slate-700 grayscale opacity-40"
                                                                                : "text-slate-500 hover:text-indigo-300 hover:bg-white/[0.01]"
                                                                    )}
                                                                >
                                                                    <nested.icon className={cn("w-3 h-3", isNestedActive ? "text-indigo-400" : "text-slate-600")} />
                                                                    <span className={isNestedLocked ? "line-through" : ""}>{nested.label}</span>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </nav>

            {/* Bottom spacer */}
            <div className="mt-auto h-4" />
        </div >
    );
}
export function Sidebar({ open, setOpen }: { open?: boolean; setOpen?: (v: boolean) => void }) {
    const pathname = usePathname();

    return (
        <Suspense fallback={<div className="hidden md:block w-72 h-screen bg-[#0B0F1A]" />}>
            <SidebarInner open={open} setOpen={setOpen} pathname={pathname} />
        </Suspense>
    );
}

function SidebarInner({ open, setOpen, pathname }: { open?: boolean; setOpen?: (v: boolean) => void; pathname: string }) {
    // Mobile Sheet View
    if (setOpen) {
        return (
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="p-0 border-r-slate-800 w-80 bg-slate-900 border-none">
                    <SheetTitle className="sr-only">Kangs Toeic Menu</SheetTitle>
                    <SheetDescription className="sr-only">Navigation for students</SheetDescription>
                    <NavContent pathname={pathname} setOpen={setOpen} />
                </SheetContent>
            </Sheet>
        )
    }

    // Desktop Side View
    return (
        <div className="hidden md:block w-72 h-screen fixed left-0 top-0">
            <NavContent pathname={pathname} />
        </div>
    );
}

export function Navbar({ onMenuClick, onLogout }: { onMenuClick: () => void; onLogout: () => void }) {
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (userData) {
            try {
                const parsed = JSON.parse(userData);
                setUserName(parsed.userName || parsed.name || parsed.username || '');
            } catch (e) {
                console.error("Failed to parse user data", e);
            }
        }
    }, []);

    return (
        <nav className="p-4 md:p-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
            <div className="flex items-center gap-4">
                <h1 className="font-black text-xl italic tracking-tighter text-indigo-400 cursor-default">
                    깡쌤토익
                </h1>
                <div className="hidden md:flex items-center gap-2 ml-4">
                    <Link href="/admin/dashboard">
                        <Button variant="ghost" size="sm" className="text-slate-500 hover:text-indigo-400 font-bold gap-2">
                            <Shield className="w-4 h-4" />
                            ADMIN
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
                {userName && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/5 rounded-full border border-indigo-500/10">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                        <span className="text-xs md:text-sm font-black text-slate-200">
                            {userName} <span className="text-slate-500 font-bold ml-0.5">님</span>
                        </span>
                    </div>
                )}
                <Link href="/student/profile">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-white bg-white/5 rounded-full border border-white/5">
                        <Settings className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </nav>
    );
}
