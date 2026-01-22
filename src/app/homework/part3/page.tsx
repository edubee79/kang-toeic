'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { Headphones, PlayCircle, Activity, Lock } from "lucide-react";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

// Mock data for tests (1 to 10)
const initialTests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `TEST ${String(i + 1).padStart(2, '0')}`,
    isActive: true
}));

export default function Part3LobbyPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const testParam = searchParams.get('test');
        if (testParam) {
            const testId = parseInt(testParam);
            if (!isNaN(testId) && testId >= 1 && testId <= 10) {
                router.push(`/homework/part3/test/${testId}`);
                return;
            }
        }

        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
            setLoading(false);
        };
        fetchAccess();
    }, [router, searchParams]);

    if (!isMounted || loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxTest = access?.maxSets?.part3 || 10;
    const tests = initialTests.map(t => ({
        ...t,
        isActive: t.id <= maxTest
    }));

    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">LC PART 3<br /><span className="text-emerald-500">SHORT CONVERSATION</span></h2>
                <p className="text-slate-400 font-medium text-xs">짧은 대화 실전 모의고사 | 현재 {maxTest}회차 오픈</p>
            </div>

            <div className="space-y-4">
                {tests.map((test) => (
                    <Link
                        key={test.id}
                        href={test.isActive ? `/homework/part3/test/${test.id}` : '#'}
                    >
                        <Card className={`
                group relative p-6 rounded-[2rem] border transition-all cursor-pointer overflow-hidden
                ${test.isActive
                                ? 'bg-slate-800/80 border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800'
                                : 'bg-slate-900 border-slate-800 opacity-60 cursor-not-allowed'}
            `}
                        >
                            {test.isActive && (
                                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
                            )}

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className={`
                    w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg border 
                    ${test.isActive ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400' : 'bg-slate-800 text-slate-600 border-slate-800'}
                  `}>
                                        {test.isActive ? <Headphones className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-black italic tracking-tighter ${test.isActive ? 'text-white' : 'text-slate-500'}`}>
                                            {test.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                                            {test.id <= 3 ? '스키밍 연습' : '실전 연습'}
                                        </p>
                                    </div>
                                </div>

                                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-colors
                    ${test.isActive ? 'bg-slate-900 text-slate-600 group-hover:text-emerald-500' : 'bg-slate-800 text-slate-700'}
                `}>
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/20 text-center">
                <div className="flex justify-center mb-2 text-emerald-400">
                    <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <p className="text-xs text-emerald-300 font-bold leading-relaxed">
                    실전과 동일한 환경에서<br />
                    대화 청취 훈련이 진행됩니다.
                </p>
            </div>
        </div>
    );
}
