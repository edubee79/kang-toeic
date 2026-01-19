'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { part5Data } from '@/data/part5';
import { ChevronRight, Sword, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getFeatureAccess, FeatureAccess } from '@/services/configService';

export default function Part5LobbyPage() {
    const [access, setAccess] = useState<FeatureAccess | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAccess = async () => {
            const data = await getFeatureAccess();
            setAccess(data);
            setLoading(false);
        };
        fetchAccess();
    }, []);

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
        <div className="min-h-screen bg-slate-950 text-white pb-20">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600 mb-4">
                        GRAMMAR MISSION
                    </h1>
                    <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl">
                        Skill building drills to master TOEIC grammar points. | 현재 Unit {maxGrammar}까지 오픈
                        <br />
                        <span className="text-sm text-slate-500">각 유닛별로 핵심 문법을 익히고 문제를 풀어보세요.</span>
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Section: Grammar Mission (Drill) */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-xl shadow-indigo-500/10">
                            <Sword className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black tracking-tight text-white/90">GRAMMAR DRILLS</h2>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Skill Building</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {grammarUnits.map((unitId) => {
                            const unitNumber = parseInt(unitId.split('_')[1]);
                            const isLocked = unitNumber > maxGrammar;

                            return (
                                <Link
                                    href={isLocked ? "#" : `/homework/part5/${unitId}`}
                                    key={unitId}
                                    onClick={(e) => {
                                        if (isLocked) {
                                            e.preventDefault();
                                            alert(`현재 Unit ${maxGrammar}까지 오픈되어 있습니다.`);
                                        }
                                    }}
                                    className={cn(
                                        "group relative bg-slate-900/50 border transition-all duration-300 rounded-3xl p-6",
                                        isLocked
                                            ? "border-slate-800 opacity-40 grayscale cursor-not-allowed"
                                            : "hover:bg-indigo-900/20 border-indigo-500/10 hover:border-indigo-500/50 hover:-translate-y-1"
                                    )}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={cn(
                                            "w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center font-black text-sm border transition-colors",
                                            isLocked ? "text-slate-600 border-slate-800" : "text-slate-500 group-hover:text-indigo-400 border-slate-800"
                                        )}>
                                            {unitId.split('_')[1]}
                                        </div>
                                        {isLocked ? (
                                            <Lock className="w-5 h-5 text-slate-600" />
                                        ) : (
                                            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                                        )}
                                    </div>
                                    <h3 className={cn(
                                        "text-lg font-bold transition-colors mb-1",
                                        isLocked ? "text-slate-600" : "text-slate-200 group-hover:text-white"
                                    )}>
                                        {UNIT_TITLES[unitId] || unitId.replace(/Unit_\d+_/, '').replace(/_/g, ' ')}
                                    </h3>
                                    <p className={cn(
                                        "text-xs font-bold tracking-widest uppercase",
                                        isLocked ? "text-slate-700" : "text-indigo-500/50 group-hover:text-indigo-500/80"
                                    )}>
                                        {isLocked ? "Locked" : "Drill Mode"}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </section>

            </div>
        </div>
    );
}
