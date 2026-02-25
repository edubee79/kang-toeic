'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, Navbar } from "@/components/layout/Sidebar";
import MainBottomNav from "@/components/layout/MainBottomNav";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Prevent hydration mismatch by waiting for mount
    if (!isMounted) {
        return <div className="min-h-screen bg-slate-900" />;
    }

    // Pages that should NOT have sidebar
    const noSidebarPages = ['/login', '/signup', '/admin'];
    const mainTabPages = ['/student/home', '/student/selection', '/student/analysis', '/student/history'];

    const isMainTabPage = mainTabPages.includes(pathname);
    const isAuthPage = noSidebarPages.some(page => pathname.startsWith(page));

    // Sidebar should be hidden on Auth pages.
    // On Main Tabs, it should be visible on Desktop but hidden on Mobile (handled by CSS in Sidebar).
    // However, for the Wrapper's padding, we need to know if we are on Desktop.
    const shouldShowSidebar = !isAuthPage;

    return (
        <div className="flex min-h-screen bg-slate-950 text-white">
            {/* Desktop Sidebar - Always show except login/admin */}
            {shouldShowSidebar && <Sidebar />}

            <div className={cn(
                "flex-1 flex flex-col transition-all min-w-0 font-sans",
                shouldShowSidebar ? "md:pl-72" : "pl-0"
            )}>
                {/* Global Navbar with Logout - Shown on all pages including main tabs */}
                <Navbar
                    onMenuClick={() => setSidebarOpen(true)}
                    onLogout={async () => {
                        try {
                            await signOut(auth);
                            router.push("/login");
                        } catch (error) {
                            console.error("Logout failed", error);
                        }
                    }}
                />

                {/* Mobile Sidebar Sheet Control */}
                {shouldShowSidebar && <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />}

                <main className={cn(
                    "flex-1 w-full",
                    (
                        pathname === '/' ||
                        pathname === '/student/home' ||
                        isMainTabPage ||
                        pathname === '/mock-test' ||
                        pathname === '/level-test' ||
                        (pathname.startsWith('/homework/') && pathname.split('/').filter(Boolean).length === 2) ||
                        pathname === '/homework/part7/practice' ||
                        pathname.startsWith('/mock-test/full/') ||
                        pathname.startsWith('/admin')
                    ) ? "max-w-none p-0" : "w-full md:p-10 p-6",
                    isMainTabPage && "overflow-x-hidden",
                    pathname.startsWith('/homework/') &&
                        pathname.split('/').filter(Boolean).length >= 3 &&
                        pathname !== '/homework/part7/practice'
                        ? "p-0"
                        : ""
                )}>
                    {children}
                </main>

                {/* Bottom Navigation for Main Tabs */}
                {isMainTabPage && <MainBottomNav />}
            </div>
        </div>
    );
}
