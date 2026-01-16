'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { verifyPassword } from '@/lib/password';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2 } from "lucide-react";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("🚀 Login started for user:", username);
        setIsLoading(true);
        setError('');

        try {
            console.log("🔍 Querying Firestore for collection: Winter_Users");
            // Find user by username
            const q = query(
                collection(db, "Winter_Users"),
                where("username", "==", username)
            );

            const querySnapshot = await getDocs(q);
            console.log("📥 Query snapshot received. Empty?", querySnapshot.empty);

            if (querySnapshot.empty) {
                setError("아이디 또는 비밀번호가 일치하지 않습니다.");
                setIsLoading(false);
                return;
            }

            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            console.log("👤 User found:", userData.username, "Status:", userData.status);

            // Verify password
            console.log("🔑 Verifying password...");
            const isPasswordValid = await verifyPassword(password, userData.password);
            console.log("✅ Password valid?", isPasswordValid);

            if (!isPasswordValid) {
                setError("아이디 또는 비밀번호가 일치하지 않습니다.");
                setIsLoading(false);
                return;
            }

            // Check approval status
            if (userData.status === 'pending') {
                setError("가입 승인 대기 중입니다. 관리자 승인 후 로그인하실 수 있습니다.");
                setIsLoading(false);
                return;
            }

            if (userData.status === 'rejected') {
                const reason = userData.rejectionReason ? `\n사유: ${userData.rejectionReason}` : '';
                setError(`가입이 거부되었습니다.${reason}`);
                setIsLoading(false);
                return;
            }

            // User is approved - proceed with login
            console.log("🎉 Login successful! Storing user data and redirecting...");
            localStorage.setItem('toeic_user', JSON.stringify(userData));
            window.dispatchEvent(new Event('storage'));

            router.push('/');
        } catch (err) {
            console.error("❌ Login Error:", err);
            setError("로그인 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setIsLoading(false);
        }
    };

    // DEBUG: Emergency bypass
    const handleGuestLogin = () => {
        const dummyUser = { username: 'Guest', role: 'student', status: 'approved', name: '게스트' };
        localStorage.setItem('toeic_user', JSON.stringify(dummyUser));
        window.dispatchEvent(new Event('storage'));
        router.push('/');
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-slate-900 border-slate-800 text-white shadow-2xl">
                <CardHeader className="space-y-4 text-center pb-8 border-b border-slate-800/50">
                    <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-rose-500 rounded-full mb-4"></div>
                    <CardTitle className="text-3xl font-black italic tracking-tighter">깡쌤토익</CardTitle>
                    <CardDescription className="text-slate-400 font-medium">
                        토익 특강 로그인
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                아이디
                            </label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="아이디를 입력하세요"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">
                                비밀번호
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력하세요"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-slate-950 border-slate-800 focus:border-indigo-500 h-12 text-lg font-bold"
                                required
                            />
                        </div>

                        {error && (
                            <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-lg flex items-start gap-3 text-rose-400 text-sm font-bold animate-in fade-in slide-in-from-top-1">
                                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                                <span className="whitespace-pre-line">{error}</span>
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
                                    로그인 중...
                                </>
                            ) : (
                                "로그인"
                            )}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 text-center border-t border-slate-800/50 pt-6">
                    <p className="text-sm text-slate-500">
                        계정이 없으신가요?{' '}
                        <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors">
                            회원가입
                        </Link>
                    </p>
                    <button
                        onClick={handleGuestLogin}
                        className="mt-4 text-[10px] text-slate-700 hover:text-slate-500 underline"
                    >
                        Dev: Bypass Login
                    </button>
                </CardFooter>
            </Card>
        </div>
    );
}
