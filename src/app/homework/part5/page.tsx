'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { part5Data } from '@/data/part5';
import { ArrowLeft, ChevronRight, Sword, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';
import { getMultipleTestCompletions, TestCompletion } from '@/services/completionService';
import { CompletionBadge } from '@/components/ui/completion-badge';

export default function Part5LobbyPage() {
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/selection?tab=PROBLEM';
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [completions, setCompletions] = useState<Record<string, TestCompletion>>({});

    useEffect(() => {
        setIsMounted(true);
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);

            // Fetch completion status
            const userStr = localStorage.getItem('toeic_user');
            if (userStr) {
                const user = JSON.parse(userStr);
                const userId = user.userId || user.uid;
                const grammarUnits = Object.keys(part5Data);
                const completionData = await getMultipleTestCompletions(userId, grammarUnits);
                setCompletions(completionData);
            }

            setLoading(false);
        };
        fetchAccess();
    }, []);

    if (!isMounted) return null;

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    const maxGrammar = access?.maxSets?.grammar || 10;
    const grammarUnits = Object.keys(part5Data);

    const UNIT_TITLES: Record<string, string> = {
        "Unit_00_Structure": "문장 구조와 5형식",
        "Unit_01_Noun": "명사 (Noun)",
        "Unit_02_Pronoun": "대명사 (Pronoun)",
        "Unit_03_Adjective": "형용사 (Adjective)",
        "Unit_04_Adverb": "부사 (Adverb)",
        "Unit_05_Preposition": "전치사 (Preposition)",
        "Unit_06_Verb": "동사의 시제와 태",
        "Unit_07_To_Infinitive": "To 부정사",
        "Unit_08_Gerund": "동명사 (Gerund)",
        "Unit_09_Participle": "분사 (Participle)",
        "Unit_10_Adverb_Conjunctions": "부사절 접속사",
        "Unit_11_Relative_Clauses": "관계대명사",
        "Unit_12_Noun_Clauses": "명사절 접속사"
    };

    return (
        <div className="w-full space-y-3 md:space-y-6 pb-10 md:pb-20 px-0 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center px-3 md:px-8 py-4 md:py-8 bg-slate-900/50 border-b border-slate-800">
                <div className="flex items-center gap-4">
                    <Link href={fromPath}><ArrowLeft className="w-5 h-5 text-slate-500 hover:text-white transition-colors" /></Link>
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black mb-0 tracking-tighter leading-none italic uppercase font-inter">
                            <span className="text-white">Grammar</span>
                            <span className="text-amber-500"> Mission</span>
                        </h2>
                        <p className="text-slate-500 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">기초 문법 ⸱ 핵심 유형 12개 정복</p>
                    </div>
                </div>
                <p className="text-slate-500 font-black text-xs md:text-sm uppercase tracking-widest leading-none">{maxGrammar} Units Open</p>
            </div>

            <div className="w-full px-0 md:px-8 py-4 md:py-6">
                {/* Section: Grammar Mission (Drill) */}
                <section>
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 px-3 md:px-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10 shrink-0">
                            <Sword className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-black tracking-tight text-white/90 leading-none uppercase">Grammar Drills</h2>
                            <p className="text-[10px] md:text-sm font-black text-slate-500 uppercase tracking-widest mt-1">Skill Building</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 font-inter">
                        {grammarUnits.map((unitId) => {
                            const unitNumber = parseInt(unitId.split('_')[1]);
                            const isLocked = unitNumber > maxGrammar;

                            return (
                                <Link
                                    href={isLocked ? "#" : `/homework/part5/${unitId}?from=${encodeURIComponent(`/homework/part5?from=${encodeURIComponent(fromPath)}`)}`}
                                    key={unitId}
                                    onClick={(e) => {
                                        if (isLocked) {
                                            e.preventDefault();
                                            alert(`현재 Unit ${maxGrammar}까지 오픈되어 있습니다.`);
                                        }
                                    }}
                                    className={cn(
                                        "group relative bg-slate-900 border transition-all duration-300 rounded-xl md:rounded-2xl p-2 md:p-3 flex flex-col gap-1.5 h-auto min-h-[76px] md:min-h-[110px]",
                                        isLocked
                                            ? "border-slate-800 opacity-60 grayscale cursor-not-allowed"
                                            : !!completions[unitId]?.completed
                                                ? "bg-amber-500/5 border-amber-500/30 hover:bg-amber-500/10"
                                                : "bg-slate-800/80 border-slate-700/50 hover:bg-amber-900/10 hover:border-amber-500/50"
                                    )}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className={cn(
                                            "w-6 h-6 md:w-8 md:h-8 rounded md:rounded-lg bg-slate-950 flex items-center justify-center font-black text-[10px] md:text-sm border transition-colors",
                                            isLocked ? "text-slate-600 border-slate-800" : (!!completions[unitId]?.completed ? "text-amber-400 border-amber-500/30" : "text-amber-500/50 group-hover:text-amber-400 border-slate-800")
                                        )}>
                                            {unitId.split('_')[1]}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {!isLocked && completions[unitId] && completions[unitId].completed && (
                                                <div className="scale-75 md:scale-90 origin-right">
                                                    <CompletionBadge
                                                        completed={true}
                                                        score={completions[unitId].score}
                                                        total={completions[unitId].total}
                                                    />
                                                </div>
                                            )}
                                            {isLocked ? (
                                                <Lock className="w-3 h-3 md:w-4 md:h-4 text-slate-700" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-0.5 mt-auto">
                                        <h3 className={cn(
                                            "text-[18px] md:text-2xl font-black transition-colors leading-none italic tracking-tighter truncate",
                                            isLocked ? "text-slate-600" : "text-white"
                                        )}>
                                            {UNIT_TITLES[unitId] || unitId.replace(/Unit_\d+_/, '').replace(/_/g, ' ')}
                                        </h3>
                                        <p className={cn(
                                            "text-[8px] md:text-xs font-black tracking-widest uppercase opacity-70",
                                            isLocked ? "text-slate-700" : "text-slate-500"
                                        )}>
                                            {isLocked ? "Locked" : "Drill Mode"}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}
