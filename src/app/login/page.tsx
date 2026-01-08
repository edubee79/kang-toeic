'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            // Find user in Winter_Users collection
            const q = query(
                collection(db, "Winter_Users"),
                where("userName", "==", name),
                where("userId", "==", studentId)
            );

            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setError("학생 정보가 일치하지 않습니다. 이름과 학번을 확인해주세요.");
                setIsLoading(false);
                return;
            }

            // User found
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

            // Store in simple localStorage logic similar to original app
            // For Next.js, we should ideally use Context/Cookies, but keeping compatibility for now
            localStorage.setItem('toeic_user', JSON.stringify(userData));

            // Dispatch event for Navbar update (if needed)
            window.dispatchEvent(new Event('storage'));

            router.push('/');
        } catch (err) {
            console.error("Login Error:", err);
            setError("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white shadow-2xl">
                <CardHeader className="space-y-4 text-center pb-8 border-b border-slate-800/50">
                    <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 rounded-full mb-4"></div>
                    <CardTitle className="text-3xl font-black italic tracking-tighter">WINTER CAMP</CardTitle>
                    <CardDescription className="text-slate-400 font-medium">
                        토익 특강 학생 전용 페이지입니다.<br />
                        등록된 이름과 학번으로 로그인하세요.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-10 space-y-4">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Name</label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="홍길동"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="studentId" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Student ID</label>
                            <Input
                                id="studentId"
                                type="text"
                                placeholder="20240123"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-center gap-3 text-rose-400 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full h-12 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-lg shadow-lg shadow-indigo-900/50 mt-6"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Logging in...
                                </>
                            ) : (
                                "LOGIN"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="justify-center border-t border-slate-800/50 py-6">
                    <p className="text-xs text-slate-600 font-medium text-center leading-relaxed">
                        로그인 문제가 발생할 경우<br />
                        담당 조교 내지 관리자에게 문의하세요.
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
