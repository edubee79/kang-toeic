'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Shield, BookOpen, Mic2, Headphones, LogOut, PenSquare, CheckSquare, FileText, Monitor, Target } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const menuItems = [
    { href: "/", label: "메인 홈", icon: Home },
    { href: "/student/dashboard", label: "나의 학습방", icon: Target },
    { type: 'divider' },
    { href: "/homework/voca", label: "보카 (단어장)", icon: BookOpen },
    { href: "/homework/part5", label: "문법 미션 (Grammar)", icon: PenSquare },
    { type: 'divider' },
    { href: "/homework/part1", label: "Part 1 쉐도잉", icon: Mic2 },
    { href: "/homework/part2", label: "Part 2 실전 테스트", icon: Headphones },
    { href: "/homework/part3", label: "Part 3 짧은 대화", icon: Mic2 },
    { href: "/homework/part4", label: "Part 4 설명문", icon: Mic2 },
    { href: "/homework/part5-real", label: "실전 모의고사 Part 5", icon: CheckSquare },
    { href: "/homework/part6", label: "Part 6 장문 빈칸", icon: FileText },
    { href: "/homework/part7", label: "Part 7 단일 지문", icon: BookOpen },
    { href: "#", label: "Part 7 실전 (PC전용)", icon: Monitor, disabled: true },
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
    return (
        <div className="flex flex-col h-full bg-slate-900 text-white p-6 border-r border-slate-800">
            <div className="mb-10 flex items-center gap-2">
                <h1 className="text-xl font-black italic tracking-tighter text-indigo-400">
                    KangsToeic
                </h1>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item: any, index) => {
                    if (item.type === 'divider') {
                        return <div key={index} className="h-px bg-slate-800 my-4 mx-4" />;
                    }

                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={index}
                            href={item.href}
                            onClick={(e) => {
                                if (item.disabled) e.preventDefault();
                                else if (setOpen) setOpen(false);
                            }}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold group",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                    : item.disabled
                                        ? "text-slate-600 cursor-not-allowed"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-white" : item.disabled ? "text-slate-700" : "text-slate-500 group-hover:text-indigo-400")} />
                            <span>{item.label}</span>
                            {item.disabled && <span className="ml-auto text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-500">준비</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-800/50 space-y-2">
                <Link
                    href="/admin/dashboard"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-indigo-400 text-sm font-bold transition-all"
                >
                    <Shield className="w-4 h-4" />
                    관리자 메뉴
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 text-sm font-bold transition-all"
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
