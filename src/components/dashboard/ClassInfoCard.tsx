import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TrendingUp, AlertCircle } from "lucide-react";

export function ClassInfoCard({ user }: { user: any }) {
    const [rankInfo, setRankInfo] = useState<{ rank: number, total: number, topPercent: number } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.className) return;

        const fetchMyRank = async () => {
            try {
                // Get Current Week Period
                const now = new Date();
                const year = now.getFullYear();
                const onejan = new Date(year, 0, 1);
                const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
                const period = `${year}-W${String(week).padStart(2, '0')}`;

                // Try fetching 'total' ranking for this class
                // First try user's specific class
                const q = query(
                    collection(db, "Rankings"),
                    where("period", "==", period),
                    where("type", "==", "total"),
                    where("classId", "==", user.className)
                );

                const snap = await getDocs(q);

                if (!snap.empty) {
                    const data = snap.docs[0].data();
                    const myEntry = data.ranks?.find((r: any) => r.userId === user.userId);
                    if (myEntry) {
                        setRankInfo({
                            rank: myEntry.rank,
                            total: data.ranks.length, // or total students count if stored
                            topPercent: Math.round((myEntry.rank / data.ranks.length) * 100)
                        });
                    }
                } else {
                    // No ranking data for this week yet?
                    // Maybe try 'all' classes or just null
                }
            } catch (e) {
                console.error("Rank fetch error", e);
            } finally {
                setLoading(false);
            }
        };

        fetchMyRank();
    }, [user]);

    return (
        <div className="hidden md:flex items-center gap-4 bg-slate-800/50 px-4 py-2 rounded-xl border border-slate-700/50">
            <div className="text-right">
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider">My Class</p>
                <p className="text-white font-bold">{user.className || "배정된 반 없음"}</p>
            </div>
            <div className="h-8 w-px bg-slate-700"></div>
            <div className="text-left">
                {loading ? (
                    <div className="animate-pulse flex flex-col gap-1 w-20">
                        <div className="h-3 bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                    </div>
                ) : rankInfo ? (
                    <>
                        <div className="flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4 text-emerald-400" />
                            <span className="text-white font-bold">{rankInfo.rank}등</span>
                            <span className="text-slate-500 text-xs">/ {rankInfo.total}명</span>
                        </div>
                        <p className="text-xs text-emerald-500 font-medium">상위 {rankInfo.topPercent}% 🔥</p>
                    </>
                ) : (
                    <div className="flex items-center gap-1.5 text-slate-500">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs">집계 중...</span>
                    </div>
                )}
            </div>
        </div>
    );
}
