'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, Navbar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

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
                {/* Mobile Navbar */}
                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Mobile Sidebar Sheet Control */}
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <main className={cn(
                    "flex-1 w-full mx-auto max-w-7xl md:p-10",
                    pathname.startsWith('/homework/') && pathname.split('/').filter(Boolean).length >= 3
                        ? "p-0"
                        : "p-6"
                )}>
                    {children}
                </main>
            </div>
        </div>
    );
}
