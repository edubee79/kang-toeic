'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Home, BookOpen, BarChart3, RotateCcw } from 'lucide-react';

const navItems = [
    {
        label: '나의 학습방',
        href: '/student/home',
        icon: Home,
    },
    {
        label: '선택 학습',
        href: '/student/selection',
        icon: BookOpen,
    },
    {
        label: 'AI 분석',
        href: '/student/analysis',
        icon: BarChart3,
    },
    {
        label: '복습',
        href: '/student/history',
        icon: RotateCcw,
    },
];

export default function MainBottomNav() {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-t border-white/5 pb-safe-area-inset-bottom shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
                {navItems.map((item) => {
                    let isActive = pathname === item.href;

                    // Logic to keep "Selection Learning" active for its sub-lobby pages
                    if (item.href === '/student/selection') {
                        if (pathname.startsWith('/homework/') || pathname === '/mock-test' || pathname === '/level-test') {
                            isActive = true;
                        }
                    }

                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300",
                                isActive ? "text-white" : "text-slate-500 hover:text-slate-300"
                            )}
                        >
                            <div className={cn(
                                "p-1 rounded-xl transition-all duration-300",
                                isActive && "bg-white/10"
                            )}>
                                <Icon className={cn(
                                    "w-6 h-6",
                                    isActive && "scale-110"
                                )} />
                            </div>
                            <span className={cn(
                                "text-[10px] font-black tracking-tighter uppercase italic",
                                isActive ? "opacity-100" : "opacity-60"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
