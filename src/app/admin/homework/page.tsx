'use client';

import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, limit, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Loader2, Search, Calendar, FileText, CheckCircle2, ChevronLeft } from "lucide-react";
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";

interface HomeworkResult {
    id: string;
    student: string;
    studentId: string;
    studentClass?: string;
    unit: string;
    score: number;
    total: number;
    timestamp: any;
    details?: any; // For Part 5 logs
}

export default function HomeworkResults() {
    const router = useRouter();
    const [results, setResults] = useState<HomeworkResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        setLoading(true);
        try {
            // Default: fetch last 50 results
            const q = query(collection(db, "Manager_Results"), orderBy("timestamp", "desc"), limit(50));
            const querySnapshot = await getDocs(q);
            const data: HomeworkResult[] = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() } as HomeworkResult);
            });
            setResults(data);
        } catch (error) {
            console.error("Error fetching results:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async () => {
        // Client-side filtering for simplicity first (or complex query)
        // Since Firestore requires indices for complex queries, let's filter client side if list is small, 
        // or just use basic exact match if needed. For now, filter the 'results' state.
        // But if we want to search DB, we need separate query.

        // Let's just filter the visible list for now.
    };

    const filteredResults = results.filter(r =>
        r.student.includes(searchTerm) ||
        r.studentId.includes(searchTerm) ||
        r.unit.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatDate = (timestamp: any) => {
        if (!timestamp) return '-';
        const date = timestamp.toDate();
        return new Intl.DateTimeFormat('ko-KR', {
            month: 'short', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
        }).format(date);
    };

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8 min-h-screen pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ChevronLeft className="w-5 h-5 text-slate-400" />
                    </Button>
                    <div>
                        <h1 className="text-2xl font-black text-slate-100 tracking-tight">HOMEWORK RESULTS</h1>
                        <p className="text-xs text-slate-500 font-bold uppercase">Student Performance Tracker</p>
                    </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                            placeholder="Search Student, ID, or Unit..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-slate-800 border-slate-700 text-slate-200 rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
                </div>
            ) : (
                <div className="grid gap-4">
                    {filteredResults.length === 0 ? (
                        <div className="text-center py-20 text-slate-500 font-medium">
                            No homework results found.
                        </div>
                    ) : (
                        filteredResults.map((result) => (
                            <Card key={result.id} className="bg-slate-800/40 border-slate-700/50 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-800/60 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border",
                                        result.score === result.total ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                                            result.score / result.total >= 0.8 ? "bg-amber-500/10 border-amber-500/30 text-amber-400" :
                                                "bg-slate-700/30 border-slate-600/30 text-slate-400"
                                    )}>
                                        {Math.round((result.score / result.total) * 100)}<span className="text-[10px]">%</span>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-white text-lg">{result.student}</h3>
                                            <span className="text-xs text-slate-500 font-mono bg-slate-900/50 px-2 py-0.5 rounded-md">{result.studentId}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                                            <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {result.unit}</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(result.timestamp)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 pl-16 md:pl-0">
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Score</p>
                                        <p className="text-xl font-black text-slate-200">{result.score} <span className="text-sm text-slate-500">/ {result.total}</span></p>
                                    </div>
                                    {/* Future: View Details Button */}
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
