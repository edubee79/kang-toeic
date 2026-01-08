'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { BookOpen, CheckCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function VocaLobby() {
    const [passedDays, setPassedDays] = useState<number[]>([]);

    useEffect(() => {
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            setPassedDays(user.passedVocaDays || []);
        }
    }, []);

    // Generate 1-30 days
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">WORD<br /><span className="text-amber-500">MASTER</span></h2>
                <p className="text-slate-400 font-medium text-xs">매일 20단어, 30일 완성</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {days.map((day) => {
                    const isPassed = passedDays.includes(day);
                    // Lock logic? For now, let's keep all open or sequential?. 
                    // Let's keep all open to be safe as user might jump around.
                    const isLocked = false;

                    return (
                        <Link key={day} href={`/homework/voca/${day}`}>
                            <Card className={cn(
                                "group relative p-4 rounded-3xl border transition-all cursor-pointer overflow-hidden aspect-square flex flex-col items-center justify-center gap-2",
                                isPassed
                                    ? "bg-amber-500/10 border-amber-500/50 hover:bg-amber-500/20"
                                    : "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-amber-500/30"
                            )}>
                                {isPassed ? (
                                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-600 group-hover:text-amber-500 transition-colors">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                )}

                                <span className={cn(
                                    "font-black text-lg italic tracking-tighter",
                                    isPassed ? "text-amber-400" : "text-slate-300 group-hover:text-white"
                                )}>DAY {day}</span>
                            </Card>
                        </Link>
                    );
                })}
            </div>

            <div className="bg-amber-500/10 p-6 rounded-3xl border border-amber-500/20 text-center">
                <p className="text-xs text-amber-300 font-bold leading-relaxed">
                    하루 20개 단어를 암기하고<br />
                    TEST를 통과하면 출석이 인정됩니다.
                </p>
            </div>
        </div>
    );
}
