'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Shield, BookOpen, Mic2, Headphones, LogOut, PenSquare, CheckSquare, FileText, Monitor, Target, Lock } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

import { getFeatureAccess, FeatureAccess } from "@/services/configService";

const menuItems = [
    { href: "/", label: "메인 홈", icon: Home },
    { href: "/student/dashboard", label: "나의 학습방", icon: Target },
    { type: 'divider' },
    { href: "/homework/voca", label: "보카 (단어장)", icon: BookOpen, featureKey: 'voca' },
    { href: "/homework/part5", label: "문법 미션 (Grammar)", icon: PenSquare, featureKey: 'grammar' },
    { href: "/homework/part1", label: "Part 1 쉐도잉 연습법", icon: Mic2, featureKey: 'part1' },
    { type: 'divider' },
    { href: "/homework/part1-real", label: "Part 1 실전 테스트", icon: CheckSquare, featureKey: 'part1_real' },
    { href: "/homework/part2", label: "Part 2 실전 테스트", icon: Headphones, featureKey: 'part2' },
    { href: "/homework/part3", label: "Part 3 짧은 대화", icon: Mic2, featureKey: 'part3' },
    { href: "/homework/part4", label: "Part 4 설명문", icon: Mic2, featureKey: 'part4' },
    { href: "/homework/part5-real", label: "실전 모의고사 Part 5", icon: CheckSquare, featureKey: 'part5' },
    { href: "/homework/part6", label: "Part 6 장문 빈칸", icon: FileText, featureKey: 'part6' },
    { href: "/homework/part7", label: "Part 7 단일 지문", icon: BookOpen, featureKey: 'part7' },
    { href: "/homework/part7-double", label: "Part 7 이중 지문 (PC 전용)", icon: Monitor, featureKey: 'part7_double' },
    { type: 'divider' },
    { href: "/mock-test", label: "TOEIC 모의테스트 (PC전용)", icon: Target, featureKey: 'mockTest' },
];

function NavContent({
    pathname,
    setOpen,
    handleLogout
}: {
    pathname: string;
    setOpen?: (v: boolean) => void;
    handleLogout: () => void;
}) {
    const [access, setAccess] = useState<FeatureAccess | null>(null);

    useEffect(() => {
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
        };
        fetchAccess();
    }, []);

    return (
        <div className="flex flex-col h-full bg-[#0B0F1A] text-white p-6 border-r border-indigo-500/10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
            <div className="mb-10 flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Target className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200">
                    KANGS TOEIC
                </h1>
            </div>

            <nav className="flex-1 space-y-2 overflow-y-auto max-md:no-scrollbar pr-1">
                {menuItems.map((item: any, index) => {
                    if (item.type === 'divider') {
                        return <div key={index} className="h-px bg-slate-800/40 my-4 mx-4" />;
                    }

                    const isLocked = item.featureKey && access && !access[item.featureKey as keyof FeatureAccess];
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={(e) => {
                                if (isLocked) {
                                    e.preventDefault();
                                    alert("이 기능은 현재 관리자에 의해 비활성화되었습니다.");
                                    return;
                                }

                                if (item.disabled) {
                                    e.preventDefault();
                                    return;
                                }

                                // PC Only Menu Check
                                if ((item.href === "/homework/part7-double" || item.href === "/mock-test") && typeof window !== 'undefined' && window.innerWidth < 1024) {
                                    e.preventDefault();
                                    alert("이 메뉴는 PC에서만 이용 가능합니다.\n큰 화면으로 접속해주세요.");
                                    return;
                                }

                                if (setOpen) setOpen(false);
                            }}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold group relative",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                                    : (item.disabled || isLocked)
                                        ? "text-slate-600 cursor-not-allowed grayscale bg-slate-800/10"
                                        : "text-slate-400 hover:bg-white/[0.03] hover:text-indigo-400"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 transition-colors",
                                isActive ? "text-white" :
                                    (item.disabled || isLocked) ? "text-slate-700" :
                                        "text-slate-500 group-hover:text-indigo-400"
                            )} />
                            <span className={cn(isLocked && "line-through decoration-slate-700 font-medium")}>
                                {item.label}
                            </span>

                            {isLocked && (
                                <Lock className="ml-auto w-3.5 h-3.5 text-rose-500/50" />
                            )}
                            {item.disabled && (
                                <span className="ml-auto text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">준비</span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-800/40 space-y-2">
                <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-indigo-400 hover:bg-white/[0.03] text-sm font-bold transition-all"
                >
                    <Shield className="w-4 h-4" />
                    관리자 메뉴
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 text-sm font-bold transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    로그아웃
                </button>
            </div>
        </div>
    );
}

export function Sidebar({ open, setOpen }: { open?: boolean; setOpen?: (v: boolean) => void }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    // Mobile Sheet View
    if (setOpen) {
        return (
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="p-0 border-r-slate-800 w-80 bg-slate-900 border-none">
                    <NavContent pathname={pathname} setOpen={setOpen} handleLogout={handleLogout} />
                </SheetContent>
            </Sheet>
        )
    }

    // Desktop Side View
    return (
        <div className="hidden md:block w-72 h-screen fixed left-0 top-0">
            <NavContent pathname={pathname} handleLogout={handleLogout} />
        </div>
    );
}

export function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <nav className="md:hidden p-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
            <h1 className="font-black text-xl italic tracking-tighter text-indigo-400">깡쌤토익</h1>
            <Button variant="ghost" size="icon" className="text-white" onClick={onMenuClick}>
                <Menu className="w-6 h-6" />
            </Button>
        </nav>
    );
}
