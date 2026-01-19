'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Target, CheckCircle2, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import { updateTargetDetails, UserProfile } from '@/services/userService';

import { Zap, Lock, Unlock, AlertCircle, TrendingUp } from 'lucide-react';

interface TargetSettingSectionProps {
    user: UserProfile;
    currentStats: {
        p1: number;
        p2: number;
        p3: number;
        p4: number;
        p5: number;
        p6: number;
        p7_single: number;
        p7_double: number;
    };
    onUpdate: (newScore?: number) => void;
}

export function TargetSettingSection({ user, currentStats, onUpdate }: TargetSettingSectionProps) {
    // 1. Total Score State
    const [totalScore, setTotalScore] = useState(user.targetScore || 850);
    const [isEditing, setIsEditing] = useState(false);

    // 2. LC/RC Split State
    const [targetLC, setTargetLC] = useState(user.targetLC || 450);
    const [targetRC, setTargetRC] = useState(user.targetRC || 400);

    // 3. Part Targets State
    const [partTargets, setPartTargets] = useState(user.partTargets || {
        p1: 0, p2: 0, p3: 0, p4: 0,
        p5: 0, p6: 0, p7_single: 0, p7_double: 0
    });

    // Validates and Syncs state when user prop updates
    useEffect(() => {
        if (user) {
            setTotalScore(user.targetScore || 850);
            setTargetLC(user.targetLC || 450);
            setTargetRC(user.targetRC || 400);

            // Legacy Migration Support
            const rawTargets = user.partTargets as any;
            if (rawTargets) {
                if (rawTargets.p7 !== undefined && rawTargets.p7_single === undefined) {
                    // Split old p7 roughly half-half if migrating (or just 0)
                    // Better to just set 0 and let user fix
                    setPartTargets({
                        p1: rawTargets.p1, p2: rawTargets.p2, p3: rawTargets.p3, p4: rawTargets.p4,
                        p5: rawTargets.p5, p6: rawTargets.p6,
                        p7_single: 0, p7_double: 0
                    });
                } else {
                    setPartTargets(user.partTargets!);
                }
            }
        }
    }, [user]);

    // Max questions per part
    const MAX_Q = {
        p1: 6, p2: 25, p3: 39, p4: 30,
        p5: 30, p6: 16, p7_single: 29, p7_double: 25
    };

    // Determine Required Counts based on Score (User Heuristic)
    // LC: Close to simple /5 (e.g. 98 correct ~= 495)
    // RC: "Need 3-5 more correct than the 5-point system"
    const requiredLC = Math.min(100, Math.ceil(targetLC / 5));
    const requiredRC = Math.min(100, Math.ceil(targetRC / 5) + 4); // +4 Questions buffer for RC difficulty

    // Calculate current sums
    const currentLCSum = partTargets.p1 + partTargets.p2 + partTargets.p3 + partTargets.p4;
    const currentRCSum = partTargets.p5 + partTargets.p6 + partTargets.p7_single + partTargets.p7_double;

    // Remaining Points
    const remainingLC = requiredLC - currentLCSum;
    const remainingRC = requiredRC - currentRCSum;

    // AI Auto-Allocate Logic
    const handleAutoAllocate = () => {
        // Strategy 2.2: "Human Heuristic"
        // 1. Target >= 900 => LC must be ~480-495 (Max out LC first).
        // 2. RC requires more raw correct answers (handled by requiredRC above).

        // 1. Determine realistic LC/RC split
        let newLC, newRC;

        if (totalScore >= 900) {
            // High Scorer Strategy
            // LC should be 480-495.
            // If Total=900, LC=480, RC=420.
            // If Total=950, LC=490, RC=460.
            newLC = 480 + Math.max(0, (totalScore - 900) * 0.5); // Push LC hard
            newLC = Math.min(495, Math.ceil(newLC / 5) * 5);
            newRC = totalScore - newLC;
        } else {
            // Normal Strategy (LC +50 rule)
            newLC = Math.ceil((totalScore + 50) / 2 / 5) * 5;
            newRC = totalScore - newLC;
            if (newLC > 495) { newLC = 495; newRC = totalScore - 495; }
        }

        setTargetLC(newLC);
        setTargetRC(newRC);

        // 2. Allocate Part Targets (Re-calculate required based on NEW split)
        const reqLC = Math.min(100, Math.ceil(newLC / 5));
        const reqRC = Math.min(100, Math.ceil(newRC / 5) + 4); // Keep consistency

        // Distribution Helper
        const distribute = (budget: number, parts: { key: keyof typeof MAX_Q, cap?: number }[]) => {
            const result: Partial<Record<keyof typeof MAX_Q, number>> = {};
            parts.forEach(p => result[p.key] = 0);

            let remaining = budget;

            // Phase 1: Fill up to Soft Cap (90% or custom)
            // If Score >= 900, Soft Cap is 100% (No buffer needed)
            const useSoftCap = totalScore < 900;

            for (const p of parts) {
                const max = p.cap ?? MAX_Q[p.key];
                // Exception: Part 1 is always allowed to be maxed
                const isP1 = p.key === 'p1';

                let limit = max;
                if (useSoftCap && !isP1) {
                    limit = Math.floor(max * 0.9);
                }

                const take = Math.min(limit, remaining);
                result[p.key] = take;
                remaining -= take;
            }

            // Phase 2: Overflow (if budget still remains, fill from easiest to hardest up to purely Max)
            if (remaining > 0) {
                for (const p of parts) {
                    const current = result[p.key] || 0;
                    const max = p.cap ?? MAX_Q[p.key]; // Hard max
                    const available = max - current;

                    if (available > 0) {
                        const take = Math.min(available, remaining);
                        result[p.key] = current + take;
                        remaining -= take;
                    }
                    if (remaining === 0) break;
                }
            }

            return result;
        };

        // LC Parts Definition (Priority Order: P1 -> P2 -> P4 -> P3)
        const lcParts = [
            { key: 'p1' as const },
            { key: 'p2' as const },
            { key: 'p4' as const },
            { key: 'p3' as const }
        ];
        const lcResult = distribute(reqLC, lcParts);

        // RC Parts Definition
        // P5 Logic: < 750 => Cap 25. < 600 => Cap 20.
        let p5Cap = MAX_Q.p5;
        if (totalScore < 750) p5Cap = 25;
        if (totalScore < 600) p5Cap = 20;

        // Priority: P5 -> P6 -> P7 Single -> P7 Double
        const rcParts = [
            { key: 'p5' as const, cap: p5Cap },
            { key: 'p6' as const },
            { key: 'p7_single' as const },
            { key: 'p7_double' as const }
        ];
        const rcResult = distribute(reqRC, rcParts);

        setPartTargets({
            p1: lcResult.p1 || 0, p2: lcResult.p2 || 0, p3: lcResult.p3 || 0, p4: lcResult.p4 || 0,
            p5: rcResult.p5 || 0, p6: rcResult.p6 || 0,
            p7_single: rcResult.p7_single || 0, p7_double: rcResult.p7_double || 0
        });
    };

    // Use Effect to Auto-Allocate on open or when total changes significantly if not set
    // For now, let's just leave it manual or button click to avoid overriding user data annoyingly

    // Auto-calculate Split when Total Changes (Default simple split, AI button does advanced)
    const handleTotalChange = (val: string) => {
        const score = parseInt(val);
        if (isNaN(score)) return;
        setTotalScore(score);

        // Simple default: LC = RC + 50 (similar to AI logic base)
        let lc = Math.ceil((score + 50) / 2 / 5) * 5;
        if (lc > 495) lc = 495;
        let rc = score - lc;

        setTargetLC(lc);
        setTargetRC(rc);
    };

    const handleSave = async () => {
        try {
            await updateTargetDetails(user.userId, {
                targetScore: totalScore,
                targetLC,
                targetRC,
                partTargets
            });
            setIsEditing(false);
            onUpdate(totalScore);
        } catch (error) {
            console.error("Failed to save targets", error);
        }
    };

    const updatePart = (part: keyof typeof MAX_Q, val: number) => {
        // Smart Constraint: 
        // Allow updating only if it fits in budget OR if we are reducing value
        // But the Slider 'max' prop handles the upper bound constraint visually.
        // Here we just set state.
        setPartTargets(prev => ({ ...prev, [part]: val }));
    };

    if (!isEditing) {
        // Comparison View Logic
        const getPartCurrent = (part: string) => {
            switch (part) {
                case 'p1': return currentStats.p1;
                case 'p2': return currentStats.p2;
                case 'p3': return currentStats.p3;
                case 'p4': return currentStats.p4;
                case 'p5': return currentStats.p5;
                case 'p6': return currentStats.p6;
                case 'p7_single': return currentStats.p7_single;
                case 'p7_double': return currentStats.p7_double;
                default: return null;
            }
        };

        return (
            <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Target className="text-indigo-400 w-5 h-5" />
                                <h3 className="text-lg font-bold text-white">나의 목표 상세 현황</h3>
                            </div>
                            <p className="text-slate-400 text-sm">
                                목표: <span className="text-white font-bold">{totalScore}점</span>
                                (LC {targetLC} / RC {targetRC})
                            </p>
                        </div>
                        <Button onClick={() => setIsEditing(true)} variant="outline" className="h-8 text-xs border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white">
                            목표 수정하기
                        </Button>
                    </div>

                    {/* Comparison Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* LC Column */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-blue-400 mb-2 uppercase border-b border-blue-500/20 pb-1">Listening (LC)</h4>
                            {['p1', 'p2', 'p3', 'p4'].map((p) => {
                                const key = p as keyof typeof partTargets;
                                const goal = partTargets[key];
                                const current = getPartCurrent(p);
                                const gap = current !== null ? current - goal : null;

                                return (
                                    <div key={p} className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400 font-bold w-8 uppercase">{p}</span>
                                        <div className="flex-1 flex justify-between px-3 bg-slate-800/50 rounded py-1 mx-2">
                                            <span className="text-slate-500 text-xs">목표 <span className="text-white font-bold text-sm">{goal}</span></span>
                                            {current !== null ? (
                                                <span className="text-slate-500 text-xs">현재 <span className={cn("font-bold text-sm", gap && gap < 0 ? "text-rose-400" : "text-emerald-400")}>{current}</span></span>
                                            ) : (
                                                <span className="text-slate-700 text-xs">-</span>
                                            )}
                                        </div>
                                        <span className={cn("text-xs w-8 text-right font-bold", gap && gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                            {gap !== null ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>

                        {/* RC Column */}
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-indigo-400 mb-2 uppercase border-b border-indigo-500/20 pb-1">Reading (RC)</h4>
                            {['p5', 'p6', 'p7_single', 'p7_double'].map((p) => {
                                const key = p as keyof typeof partTargets;
                                const goal = partTargets[key];
                                const current = getPartCurrent(p);
                                const gap = current !== null ? current - goal : null;

                                return (
                                    <div key={p} className="flex justify-between items-center text-sm">
                                        <span className="text-slate-400 font-bold w-16 uppercase">{p.replace('p7_', 'P7 ')}</span>
                                        <div className="flex-1 flex justify-between px-3 bg-slate-800/50 rounded py-1 mx-2">
                                            <span className="text-slate-500 text-xs">목표 <span className="text-white font-bold text-sm">{goal}</span></span>
                                            {current !== null ? (
                                                <span className="text-slate-500 text-xs">현재 <span className={cn("font-bold text-sm", gap && gap < 0 ? "text-rose-400" : "text-emerald-400")}>{current}</span></span>
                                            ) : (
                                                <span className="text-slate-700 text-xs">-</span>
                                            )}
                                        </div>
                                        <span className={cn("text-xs w-8 text-right font-bold", gap && gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                            {gap !== null ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className="bg-slate-900 border-indigo-500/30 p-6 relative overflow-hidden animate-in fade-in zoom-in-95">
            <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <Target className="text-indigo-400" />
                            목표 상세 설정
                        </h3>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10 gap-2"
                            onClick={handleAutoAllocate}
                        >
                            <Zap className="w-3 h-3" />
                            AI Auto-Set
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => setIsEditing(false)}>취소</Button>
                        <Button size="sm" className="bg-indigo-600 hover:bg-indigo-500" onClick={handleSave}>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            저장하기
                        </Button>
                    </div>
                </div>

                {/* 1. Total Score Input */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <label className="text-xs font-bold text-slate-500 uppercase mb-2 block">총 목표 점수</label>
                        <div className="flex items-center gap-2">
                            <Input
                                type="number"
                                value={totalScore}
                                onChange={(e) => handleTotalChange(e.target.value)}
                                className="text-2xl font-black text-white h-12 bg-slate-900 border-slate-700"
                            />
                            <span className="text-slate-500 font-bold">점</span>
                        </div>
                    </div>

                    {/* LC Target */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative">
                        <label className="text-xs font-bold text-blue-400 uppercase mb-2 block">LC 목표 (청해)</label>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-2xl font-black text-white">{targetLC}</div>
                                <div className="text-xs text-slate-500">필요 정답수: <span className="text-blue-400 font-bold">{requiredLC}개</span></div>
                            </div>
                            <div className="text-[10px] text-slate-600 mb-1">RC + 50점 Recommended</div>
                        </div>
                    </div>

                    {/* RC Target */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <label className="text-xs font-bold text-indigo-400 uppercase mb-2 block">RC 목표 (독해)</label>
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="text-2xl font-black text-white">{targetRC}</div>
                                <div className="text-xs text-slate-500">필요 정답수: <span className="text-indigo-400 font-bold">{requiredRC}개</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Part Allocation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* LC Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-blue-400">LC Part-by-Part</h4>
                            <div className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-lg border",
                                remainingLC === 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                                    remainingLC > 0 ? "bg-blue-500/10 border-blue-500/30 text-blue-400" :
                                        "bg-rose-500/10 border-rose-500/30 text-rose-400"
                            )}>
                                <span className="text-xs font-bold uppercase">포인트(문제)</span>
                                <span className="font-black text-lg">{remainingLC > 0 ? remainingLC : remainingLC === 0 ? "OK" : remainingLC}</span>
                            </div>
                        </div>

                        {['p1', 'p2', 'p3', 'p4'].map((p) => {
                            const key = p as keyof typeof MAX_Q;
                            const currentVal = partTargets[key];
                            const smartMax = Math.min(MAX_Q[key], remainingLC >= 0 ? currentVal + remainingLC : currentVal);

                            return (
                                <div key={p} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-300 font-bold uppercase">{p} ({MAX_Q[key]}문항)</span>
                                        <span className={cn("font-bold", currentVal === MAX_Q[key] ? "text-emerald-400" : "text-white")}>
                                            {currentVal}개
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={smartMax}
                                        value={currentVal}
                                        onChange={(e) => updatePart(key, parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 touch-none"
                                        disabled={smartMax === 0 && currentVal === 0}
                                    />
                                </div>
                            );
                        })}
                        {remainingLC < 0 && (
                            <div className="flex items-center gap-2 text-xs text-rose-400 font-bold bg-rose-500/10 p-2 rounded">
                                <AlertCircle className="w-3 h-3" />
                                {Math.abs(remainingLC)}개를 줄여야 합니다!
                            </div>
                        )}
                    </div>

                    {/* RC Section */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-indigo-400">RC Part-by-Part</h4>
                            <div className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-lg border",
                                remainingRC === 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                                    remainingRC > 0 ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" :
                                        "bg-rose-500/10 border-rose-500/30 text-rose-400"
                            )}>
                                <span className="text-xs font-bold uppercase">포인트(문제)</span>
                                <span className="font-black text-lg">{remainingRC > 0 ? remainingRC : remainingRC === 0 ? "OK" : remainingRC}</span>
                            </div>
                        </div>

                        {['p5', 'p6', 'p7_single', 'p7_double'].map((p) => {
                            const key = p as keyof typeof MAX_Q;
                            const currentVal = partTargets[key];
                            const smartMax = Math.min(MAX_Q[key], remainingRC >= 0 ? currentVal + remainingRC : currentVal);

                            return (
                                <div key={p} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-300 font-bold uppercase">
                                            {p === 'p7_single' ? 'Part 7 Single' : p === 'p7_double' ? 'Part 7 Double/Triple' : p} ({MAX_Q[key]}문항)
                                        </span>
                                        <span className={cn("font-bold", currentVal === MAX_Q[key] ? "text-emerald-400" : "text-white")}>
                                            {currentVal}개
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={smartMax}
                                        value={currentVal}
                                        onChange={(e) => updatePart(key, parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 touch-none"
                                        disabled={smartMax === 0 && currentVal === 0}
                                    />
                                </div>
                            );
                        })}
                        {remainingRC < 0 && (
                            <div className="flex items-center gap-2 text-xs text-rose-400 font-bold bg-rose-500/10 p-2 rounded">
                                <AlertCircle className="w-3 h-3" />
                                {Math.abs(remainingRC)}개를 줄여야 합니다!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}

