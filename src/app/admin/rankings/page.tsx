'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, RefreshCw, Medal, TrendingUp, Zap, BookOpen, Search } from "lucide-react";

export default function AdminRankingsPage() {
    const [rankings, setRankings] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [classes, setClasses] = useState<{ name: string }[]>([]);
    const [filterClass, setFilterClass] = useState('all');
    const [activeTab, setActiveTab] = useState('total');

    // For manual update trigger
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        fetchClasses();
        fetchRankings();
    }, [filterClass, activeTab]);

    const fetchClasses = async () => {
        const q = query(collection(db, "Classes"), orderBy("name"));
        const snap = await getDocs(q);
        const list: { name: string }[] = [];
        snap.forEach(d => list.push({ name: d.data().name }));
        setClasses(list);
    };

    const fetchRankings = async () => {
        setLoading(true);
        try {
            // Construct ID based on period (current week) + type + class
            // But we might want to fetch based on query.
            // For now, let's query the 'Rankings' collection.

            // Getting current week period string logic (duplicated from API, should be shared lib but ok for now)
            const now = new Date();
            const year = now.getFullYear();
            const onejan = new Date(year, 0, 1);
            const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
            const period = `${year}-W${String(week).padStart(2, '0')}`;

            const docId = `${period}-${activeTab}-${filterClass}`;

            // Ideally we getDoc by ID.
            // But if it doesn't exist, we might get previous week? 
            // For this UI, let's just try to get the specific doc.

            // Actually, let's use a query to get the *latest* ranking of type & class if we supported history.
            // But our ID structure is specific.

            console.log("Fetching ranking for:", docId);
            // Since we set ID manually in service, we can define it here.

            // However, querying by fields is safer if ID format changes.
            const rankingsRef = collection(db, "Rankings");
            const q = query(
                rankingsRef,
                where("period", "==", period),
                where("type", "==", activeTab),
                where("classId", "==", filterClass)
            );

            const snap = await getDocs(q);
            if (!snap.empty) {
                const data = snap.docs[0].data();
                setRankings(data.ranks || []);
            } else {
                setRankings([]);
            }

        } catch (error) {
            console.error("Failed to fetch rankings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateRankings = async () => {
        setUpdating(true);
        try {
            // Calculate Period (Client Side)
            const now = new Date();
            const year = now.getFullYear();
            const onejan = new Date(year, 0, 1);
            const week = Math.ceil((((now.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
            const period = `${year}-W${String(week).padStart(2, '0')}`;

            // Import dynamically or assume it's available since we changed the file to Client SDK
            const { updateRankings } = await import('@/services/rankingService');

            const result = await updateRankings(period, filterClass);

            if (result.success) {
                const debug = result.debug || {};
                alert(`랭킹 갱신 성공!\n\n기간: ${period}\n학생 수: ${debug.studentCount}\n성적 데이터: ${debug.resultCount}\n매칭 성공: ${debug.matchCount}\n\n리더보드를 확인해주세요.`);
                fetchRankings();
            }
        } catch (e: any) {
            console.error(e);
            alert('오류 발생: ' + e.message);
        } finally {
            setUpdating(false);
        }
    };

    const handleGenerateDummy = async () => {
        if (!confirm('테스트용 가상 데이터(학생 5명, 성적 20개)를 생성하시겠습니까?')) return;
        try {
            const res = await fetch('/api/test/generate-dummy-data', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                alert('테스트 데이터 생성 완료! 이제 [랭킹 수동 집계]를 눌러보세요.');
            } else {
                alert('생성 실패: ' + data.error);
            }
        } catch (e) {
            alert('오류 발생');
        }
    };

    const handleDeleteDummy = async () => {
        if (!confirm('생성된 테스트용 가상 데이터를 모두 삭제하시겠습니까?')) return;
        try {
            const res = await fetch('/api/test/delete-dummy-data', { method: 'POST' });
            const data = await res.json();
            if (data.success) {
                alert('테스트 데이터 삭제 완료! [랭킹 수동 집계]를 눌러 랭킹을 갱신해주세요.');
            } else {
                alert('삭제 실패: ' + data.error);
            }
        } catch (e) {
            alert('오류 발생');
        }
    };

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Medal className="w-6 h-6 text-yellow-400 fill-yellow-400" />;
        if (rank === 2) return <Medal className="w-6 h-6 text-slate-400 fill-slate-400" />;
        if (rank === 3) return <Medal className="w-6 h-6 text-amber-600 fill-amber-600" />;
        return <span className="font-bold text-slate-400">#{rank}</span>;
    };

    return (
        <div className="min-h-screen bg-slate-50 p-4 md:p-8 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <Link href="/admin/dashboard">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-2">
                            Ranking System <Trophy className="w-6 h-6 text-yellow-500" />
                        </h1>
                        <p className="text-slate-500 text-xs font-bold mt-1">학생 경쟁 및 동기부여 관리</p>
                    </div>
                </div>
                <div className="flex-1 min-w-0 max-w-xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-2 min-w-max px-1">
                        <Button
                            onClick={() => setFilterClass('all')}
                            variant={filterClass === 'all' ? 'default' : 'outline'}
                            className={`rounded-full px-4 h-8 text-xs font-bold transition-all ${filterClass === 'all' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 hover:bg-indigo-500 hover:scale-105' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-700'}`}
                        >
                            전체보기
                        </Button>
                        {classes.map(c => (
                            <Button
                                key={c.name}
                                onClick={() => setFilterClass(c.name)}
                                variant={filterClass === c.name ? 'default' : 'outline'}
                                className={`rounded-full px-4 h-8 text-xs font-bold transition-all ${filterClass === c.name ? 'bg-slate-800 text-white shadow-md shadow-slate-200 hover:bg-slate-700 hover:scale-105' : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-700'}`}
                            >
                                {c.name}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                    <Button
                        onClick={handleUpdateRankings}
                        disabled={updating}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold gap-2"
                    >
                        <RefreshCw className={`w-4 h-4 ${updating ? 'animate-spin' : ''}`} />
                        {updating ? '집계 중...' : '랭킹 수동 집계'}
                    </Button>
                    <div className="flex flex-col items-end gap-1">
                        <Button
                            onClick={handleGenerateDummy}
                            variant="ghost"
                            className="text-slate-400 hover:text-indigo-600 text-[10px] h-6 px-2"
                        >
                            <Zap className="w-3 h-3 mr-1" /> Test Data
                        </Button>
                        <Button
                            onClick={handleDeleteDummy}
                            variant="ghost"
                            className="text-slate-400 hover:text-rose-600 text-[10px] h-6 px-2"
                        >
                            <RefreshCw className="w-3 h-3 mr-1" /> Clear Data
                        </Button>
                    </div>
                </div>
            </header >

            <Tabs defaultValue="total" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mb-8 bg-slate-100 p-1 rounded-xl">
                    <TabsTrigger value="total" className="rounded-lg font-black data-[state=active]:bg-white data-[state=active]:text-indigo-600 data-[state=active]:shadow-sm">
                        종합 랭킹
                    </TabsTrigger>
                    <TabsTrigger value="voca" className="rounded-lg font-black data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-sm">
                        단어왕
                    </TabsTrigger>
                    <TabsTrigger value="consistency" className="rounded-lg font-black data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm">
                        성실왕
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="total" className="mt-0">
                    <RankingTable rankings={rankings} loading={loading} type="total" />
                </TabsContent>
                <TabsContent value="voca" className="mt-0">
                    <RankingTable rankings={rankings} loading={loading} type="voca" />
                </TabsContent>
                <TabsContent value="consistency" className="mt-0">
                    <RankingTable rankings={rankings} loading={loading} type="consistency" />
                </TabsContent>
            </Tabs>
        </div >
    );

    function RankingTable({ rankings, loading, type }: { rankings: any[], loading: boolean, type: string }) {
        if (loading) return <div className="py-20 text-center animate-pulse text-slate-400 font-bold">랭킹 데이터를 불러오는 중입니다...</div>;

        if (rankings.length === 0) {
            return (
                <div className="py-20 text-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50">
                    <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500 font-bold">집계된 랭킹 데이터가 없습니다.</p>
                    <p className="text-xs text-slate-400 mt-2">우측 상단 '랭킹 수동 집계' 버튼을 눌러주세요.</p>
                </div>
            );
        }

        return (
            <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="w-24 text-center font-black text-xs uppercase text-slate-500">Rank</TableHead>
                                <TableHead className="font-bold text-xs text-slate-500">Student Info</TableHead>
                                <TableHead className="font-bold text-xs text-slate-500">Class Info</TableHead>
                                <TableHead className="text-right font-bold text-xs text-slate-500">Score / Stats</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {rankings.map((rank) => (
                                <TableRow key={rank.userId} className={`hover:bg-slate-50/80 transition-colors ${rank.rank <= 3 ? "bg-indigo-50/30" : ""}`}>
                                    <TableCell className="text-center">
                                        <div className="flex flex-col items-center justify-center gap-1">
                                            {getRankIcon(rank.rank)}
                                            {/* Rank Change Indicator */}
                                            {rank.change !== 0 && (
                                                <div className={`text-[10px] font-bold flex items-center px-1.5 py-0.5 rounded-full ${rank.change > 0 ? 'text-rose-600 bg-rose-100' : 'text-blue-600 bg-blue-100'}`}>
                                                    <TrendingUp className={`w-3 h-3 mr-0.5 ${rank.change < 0 ? 'rotate-180' : ''}`} />
                                                    {Math.abs(rank.change)}
                                                </div>
                                            )}
                                            {rank.change === 0 && <span className="text-[10px] text-slate-300 font-bold">-</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-base font-black text-slate-900">{rank.userName}</span>
                                            <span className="text-xs font-medium text-slate-400 font-mono tracking-tight">{rank.userId}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-slate-200 font-bold hover:bg-slate-200">
                                            {rank.className || 'No Class'}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex flex-col items-end gap-0.5">
                                            <span className={`text-lg font-black ${type === 'voca' ? 'text-emerald-600' : type === 'consistency' ? 'text-orange-600' : 'text-indigo-600'}`}>
                                                {rank.score}
                                            </span>
                                            <span className="text-xs font-bold text-slate-400">{rank.detail || '-'}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        );
    }
}
