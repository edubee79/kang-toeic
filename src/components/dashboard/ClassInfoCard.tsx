import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { TrendingUp, AlertCircle } from "lucide-react";

export function ClassInfoCard({ user }: { user: any }) {
    const [rankInfo, setRankInfo] = useState<{
        skill: { rank: number, total: number, score: number } | null,
        effort: { rank: number, total: number, count: number } | null
    }>({ skill: null, effort: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.className) return;

        const fetchMyRank = async () => {
            try {
                const now = new Date();
                const year = now.getFullYear();
                const onejan = new Date(year, 0, 1);
                const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
                const period = `${year}-W${String(week).padStart(2, '0')}`;

                // Fetch Skill & Effort in parallel
                const [skillSnap, effortSnap] = await Promise.all([
                    getDocs(query(collection(db, "Rankings"), where("period", "==", period), where("type", "==", "total"), where("classId", "==", user.className))),
                    getDocs(query(collection(db, "Rankings"), where("period", "==", period), where("type", "==", "consistency"), where("classId", "==", user.className)))
                ]);

                let skillRes = null;
                let effortRes = null;

                if (!skillSnap.empty) {
                    const data = skillSnap.docs[0].data();
                    const myEntry = data.ranks?.find((r: any) => r.userId === user.userId);
                    if (myEntry) skillRes = { rank: myEntry.rank, total: data.ranks.length, score: myEntry.score };
                }

                if (!effortSnap.empty) {
                    const data = effortSnap.docs[0].data();
                    const myEntry = data.ranks?.find((r: any) => r.userId === user.userId);
                    if (myEntry) effortRes = { rank: myEntry.rank, total: data.ranks.length, count: myEntry.score };
                }

                setRankInfo({ skill: skillRes, effort: effortRes });
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
            <div className="text-left flex items-center gap-4">
                {loading ? (
                    <div className="animate-pulse flex flex-col gap-1 w-20">
                        <div className="h-3 bg-slate-700 rounded w-full"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                    </div>
                ) : (rankInfo.skill || rankInfo.effort) ? (
                    <>
                        {rankInfo.skill && (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                                    <span className="text-white font-black text-sm">실력 {rankInfo.skill.rank}등</span>
                                </div>
                                <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-tight">예상 {rankInfo.skill.score}점</p>
                            </div>
                        )}
                        <div className="h-6 w-px bg-slate-700/50"></div>
                        {rankInfo.effort && (
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                                    <span className="text-white font-black text-sm">열정 {rankInfo.effort.rank}등</span>
                                </div>
                                <p className="text-[10px] text-orange-400 font-bold uppercase tracking-tight">학습 {rankInfo.effort.count}회</p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex items-center gap-1.5 text-slate-500">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-xs">집계 대기 중</span>
                    </div>
                )}
            </div>
        </div>
    );
}
