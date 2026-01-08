'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Shield, BookOpen, Mic2, Headphones, LogOut } from "lucide-react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const menuItems = [
    { href: "/", label: "Dashboard", icon: Home },
    { href: "/homework/shadowing-part1", label: "Part 1 Shadowing", icon: Mic2 },
    { href: "/homework/part2-practice", label: "Part 2 Real Test", icon: Headphones },
    { href: "/homework/part5", label: "Part 5 Grammar", icon: BookOpen },
    { href: "/homework/voca", label: "Vocabulary", icon: BookOpen },
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
                    WINTER CAMP
                </h1>
            </div>

            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen && setOpen(false)}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold group",
                                isActive
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-500 group-hover:text-indigo-400")} />
                            {item.label}
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
                    Admin Access
                </Link>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-500/10 text-sm font-bold transition-all"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
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
            <h1 className="font-black text-xl italic tracking-tighter text-indigo-400">WINTER CAMP</h1>
            <Button variant="ghost" size="icon" className="text-white" onClick={onMenuClick}>
                <Menu className="w-6 h-6" />
            </Button>
        </nav>
    );
}
