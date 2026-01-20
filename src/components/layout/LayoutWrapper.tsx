'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, Navbar } from "@/components/layout/Sidebar";
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
    const shouldShowSidebar = !noSidebarPages.some(page => pathname.startsWith(page));

    // If no sidebar needed, just render children
    if (!shouldShowSidebar) {
        return <>{children}</>;
    }

    return (
        <div className="flex min-h-screen bg-slate-900 text-white">
            {/* Desktop Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col md:pl-72 transition-all">
                {/* Global Navbar with Logout */}
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
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <main className={cn(
                    "flex-1 w-full mx-auto",
                    pathname === '/homework/part7/practice' || pathname.startsWith('/mock-test/full/') ? "max-w-none p-0" : "max-w-7xl md:p-10 p-6",
                    pathname.startsWith('/homework/') && pathname !== '/homework/part7/practice' && pathname.split('/').filter(Boolean).length >= 3
                        ? "p-0"
                        : ""
                )}>
                    {children}
                </main>
            </div>
        </div>
    );
}
