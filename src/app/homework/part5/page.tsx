'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
    LayerGroup, Type, UserSquare, Star, Zap, MapPin,
    Settings, ArrowRightToLine, Loader, Scissors, Link as LinkIcon,
    GitBranch, Archive, ChevronRight
} from 'lucide-react';

const units = [
    { id: "Unit_00_Structure", title: "Unit 00", sub: "문장 구조", icon: LayerGroup, color: "text-slate-400" },
    { id: "Unit_01_Noun", title: "Unit 01", sub: "명사", icon: Type, color: "text-blue-400" },
    { id: "Unit_02_Pronoun", title: "Unit 02", sub: "대명사", icon: UserSquare, color: "text-indigo-400" },
    { id: "Unit_03_Adjective", title: "Unit 03", sub: "형용사", icon: Star, color: "text-cyan-400" },
    { id: "Unit_04_Adverb", title: "Unit 04", sub: "부사", icon: Zap, color: "text-teal-400" },
    { id: "Unit_05_Preposition", title: "Unit 05", sub: "전치사", icon: MapPin, color: "text-orange-400" },
    { id: "Unit_06_Verb", title: "Unit 06", sub: "동사 (시제/태/일치)", icon: Settings, color: "text-pink-400" },
    { id: "Unit_07_To_Infinitive", title: "Unit 07", sub: "to부정사", icon: ArrowRightToLine, color: "text-sky-400" },
    { id: "Unit_08_Gerund", title: "Unit 08", sub: "동명사", icon: Loader, color: "text-emerald-400" },
    { id: "Unit_09_Participle", title: "Unit 09", sub: "분사", icon: Scissors, color: "text-amber-400" },
    { id: "Unit_10_Adverb_Conjunctions", title: "Unit 10", sub: "부사절 및 등위접속사", icon: LinkIcon, color: "text-indigo-500" },
    { id: "Unit_11_Relative_Clauses", title: "Unit 11", sub: "형용사절 (관계사)", icon: GitBranch, color: "text-violet-400" },
    { id: "Unit_12_Noun_Clauses", title: "Unit 12", sub: "명사절", icon: Archive, color: "text-rose-400" }
];

export default function Part5Lobby() {
    return (
        <div className="max-w-md mx-auto space-y-8 pb-20">
            <div>
                <h2 className="text-3xl font-black mb-2 tracking-tighter leading-tight">SELECT YOUR<br /><span className="text-indigo-500">UNIT</span></h2>
                <p className="text-slate-400 font-medium text-xs">단원별 훈련을 통해 실력을 완성하세요.</p>
            </div>

            <div className="grid gap-3">
                {units.map((unit) => (
                    <Link key={unit.id} href={`/homework/part5/${unit.id}`}>
                        <div className="group relative bg-slate-800/50 p-5 rounded-2xl text-left border border-slate-700/50 active:scale-95 transition-all overflow-hidden flex items-center gap-4 hover:bg-slate-800">
                            <div className={cn("w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-lg border border-slate-700", unit.color)}>
                                <unit.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <span className={cn("font-black text-[10px] uppercase tracking-wider", unit.color)}>{unit.title}</span>
                                <h3 className="text-sm font-bold text-slate-200">{unit.sub}</h3>
                            </div>
                            <ChevronRight className="text-slate-600 group-hover:text-white transition-colors w-4 h-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
