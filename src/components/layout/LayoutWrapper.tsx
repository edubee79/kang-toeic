'use client';

import { useState } from "react";
import { Sidebar, Navbar } from "@/components/layout/Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-slate-900 text-white">
            {/* Desktop Sidebar */}
            <Sidebar />

            <div className="flex-1 flex flex-col md:pl-72 transition-all">
                {/* Mobile Navbar */}
                <Navbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Mobile Sidebar Sheet Control */}
                <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

                <main className="flex-1 p-6 md:p-10 max-w-7xl w-full mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
