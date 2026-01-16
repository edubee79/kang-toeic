import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "깡쌤토익 | TOEIC",
    description: "Real-time TOEIC Homework Manager",
    manifest: "/manifest.json",
};

export const viewport: Viewport = {
    themeColor: "#0f172a",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${inter.className} antialiased bg-slate-900 text-white`} suppressHydrationWarning={true}>
                <LayoutWrapper>{children}</LayoutWrapper>
            </body>
        </html>
    );
}
