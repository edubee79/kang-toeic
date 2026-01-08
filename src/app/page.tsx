'use client';
// Winter Camp Deployment Check

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ProgressCard } from '@/components/dashboard/ProgressCard';
import { Mic2, Headphones, BookOpen, PenSquare, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Dashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        shadowing: 0,
        lc2: 0,
        grammar: 0,
        voca: 0
    });
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
        fetchStats(parsedUser.userId);
    }, [router]);

    const fetchStats = async (userId: string) => {
        try {
            const q = query(
                collection(db, "Manager_Results"),
                where("studentId", "==", userId)
            );
            const querySnapshot = await getDocs(q);

            let maxShadowSet = 0;
            let lc2Count = 0;
            let grammarCount = 0;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const unitName = data.unit || "";

                if (unitName.includes('Shadowing')) {
                    const match = unitName.match(/Set(\d+)/);
                    if (match && parseInt(match[1]) > maxShadowSet) maxShadowSet = parseInt(match[1]);
                }
                else if (unitName.includes('LCpart2') || unitName.includes('Part2')) {
                    lc2Count++;
                }
                else if (unitName.includes('Grammar') || unitName.includes('Unit')) {
                    grammarCount++;
                }
            });

            // Voca data is usually in user object directly in the legacy app
            // For now, re-reading user from local storage logic (it was passedVocaDays.length)
            // Wait, in fetchRealtimeReport (index.html), voca came from user object.
            // We need to re-fetch user doc to get latest voca? Or just use what we have?
            // index.html said: const vocaCount = user.passedVocaDays ? user.passedVocaDays.length : 0;
            // We already parsedUser.

            const userData = JSON.parse(localStorage.getItem('toeic_user') || '{}');
            const vocaCount = userData.passedVocaDays ? userData.passedVocaDays.length : 0;

            setStats({
                shadowing: maxShadowSet,
                lc2: lc2Count,
                grammar: grammarCount,
                voca: vocaCount
            });
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-slate-500 font-bold animate-pulse">데이터 로딩 중...</div>;
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter leading-tight">
                        MY STUDY<br />
                        <span className="text-indigo-500 italic">REPORT</span>
                    </h2>
                    <p className="text-slate-400 font-medium text-xs mt-2">실시간 학습 데이터가 동기화됩니다.</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-slate-300">{user?.userName} 학생</p>
                    <p className="text-xs text-slate-500">{user?.userClass}반</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ProgressCard
                    title="Part 1 Shadowing"
                    value={`${(stats.shadowing / 5 * 100).toFixed(0)}%`}
                    subValue={`${stats.shadowing}/5 Sets`}
                    current={stats.shadowing}
                    total={5}
                    color="indigo"
                    icon={Mic2}
                />
                <ProgressCard
                    title="Part 2 Real Test"
                    value={`${Math.min((stats.lc2 / 5 * 100), 100).toFixed(0)}%`}
                    subValue={`${stats.lc2}/5 Times`}
                    current={stats.lc2}
                    total={5}
                    color="rose"
                    icon={Headphones}
                />
                <ProgressCard
                    title="Grammar Mission"
                    value={`${Math.min((stats.grammar / 10 * 100), 100).toFixed(0)}%`}
                    subValue={`${stats.grammar}/10 Units`}
                    current={stats.grammar}
                    total={10}
                    color="blue"
                    icon={PenSquare}
                />
                <ProgressCard
                    title="Voca Mastery"
                    value={`${(stats.voca / 30 * 100).toFixed(0)}%`}
                    subValue={`${stats.voca}/30 Days`}
                    current={stats.voca}
                    total={30}
                    color="emerald"
                    icon={BookOpen}
                />
            </div>

            <h3 className="text-xl font-black italic text-slate-500 mt-12 mb-4 border-b border-slate-800 pb-2">HOMEWORK ACCESS</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/homework/part5">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <p className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1">Part 5</p>
                                <h4 className="text-2xl font-black text-white italic">GRAMMAR MISSION</h4>
                            </div>
                            <ArrowRight className="text-slate-600 group-hover:text-blue-400 w-6 h-6 transition-colors" />
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/shadowing-part1">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-1">Part 1</p>
                                <h4 className="text-2xl font-black text-white italic">SHADOWING MASTER</h4>
                            </div>
                            <ArrowRight className="text-slate-600 group-hover:text-indigo-400 w-6 h-6 transition-colors" />
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/part2-practice">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-rose-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <p className="text-rose-400 font-bold text-xs uppercase tracking-widest mb-1">Part 2</p>
                                <h4 className="text-2xl font-black text-white italic">REAL TEST</h4>
                            </div>
                            <ArrowRight className="text-slate-600 group-hover:text-rose-400 w-6 h-6 transition-colors" />
                        </div>
                    </Card>
                </Link>

                <Link href="/homework/voca">
                    <Card className="group bg-slate-800 border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all cursor-pointer overflow-hidden relative p-6">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                        <div className="relative z-10 flex justify-between items-center">
                            <div>
                                <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-1">Vocabulary</p>
                                <h4 className="text-2xl font-black text-white italic">WORD MASTER</h4>
                            </div>
                            <ArrowRight className="text-slate-600 group-hover:text-emerald-400 w-6 h-6 transition-colors" />
                        </div>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
