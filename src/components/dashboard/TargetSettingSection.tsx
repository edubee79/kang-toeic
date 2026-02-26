'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Target, CheckCircle2, AlertCircle, TrendingUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { updateTargetDetails, UserProfile } from '@/services/userService';
import { calculateDistributedGoals, getRequiredCounts, MAX_Q } from '@/lib/utils/goal-utils';

interface TargetSettingSectionProps {
    user: UserProfile;
    currentStats: {
        p1_cur: number;
        p2_cur: number;
        p3_cur: number;
        p4_cur: number;
        p5_cur: number;
        p6_cur: number;
        p7s_cur: number;
        p7d_cur: number;
        p7f_cur?: number;
    };
    onUpdate: (newScore?: number) => void;
}

export function TargetSettingSection({ user, currentStats, onUpdate }: TargetSettingSectionProps) {
    const [totalScore, setTotalScore] = useState(user.targetScore || 850);
    const [isEditing, setIsEditing] = useState(false);
    const [targetLC, setTargetLC] = useState(user.targetLC || 450);
    const [targetRC, setTargetRC] = useState(user.targetRC || 400);
    const [partTargets, setPartTargets] = useState<UserProfile['partTargets']>({
        p1_goal: 0, p2_goal: 0, p3_goal: 0, p4_goal: 0,
        p5_goal: 0, p6_goal: 0,
        p7s_goal: 0, p7d_goal: 0, p7f_goal: 0
    });

    useEffect(() => {
        if (!isEditing && user) {
            setTotalScore(user.targetScore || 850);
            setTargetLC(user.targetLC || 450);
            setTargetRC(user.targetRC || 400);

            const raw = user.partTargets as any || {};
            setPartTargets({
                p1_goal: raw.p1_goal ?? raw.p1 ?? 0,
                p2_goal: raw.p2_goal ?? raw.p2 ?? 0,
                p3_goal: raw.p3_goal ?? raw.p3 ?? 0,
                p4_goal: raw.p4_goal ?? raw.p4 ?? 0,
                p5_goal: raw.p5_goal ?? raw.p5 ?? 0,
                p6_goal: raw.p6_goal ?? raw.p6 ?? 0,
                p7s_goal: raw.p7s_goal ?? raw.p7_single ?? raw.p7s ?? 0,
                p7d_goal: raw.p7d_goal ?? raw.p7_double ?? raw.p7d ?? 0,
                p7f_goal: raw.p7f_goal ?? raw.p7_test ?? 0
            });
        }
    }, [user.userId, isEditing]);

    const { requiredLC, requiredRC } = getRequiredCounts(targetLC, targetRC);
    const currentLCSum = (partTargets?.p1_goal || 0) + (partTargets?.p2_goal || 0) + (partTargets?.p3_goal || 0) + (partTargets?.p4_goal || 0);
    const currentRCSum = (partTargets?.p5_goal || 0) + (partTargets?.p6_goal || 0) + (partTargets?.p7s_goal || 0) + (partTargets?.p7d_goal || 0);
    const remainingLC = requiredLC - currentLCSum;
    const remainingRC = requiredRC - currentRCSum;

    const handleAutoAllocate = () => {
        const data = calculateDistributedGoals(totalScore);
        setTargetLC(data.targetLC);
        setTargetRC(data.targetRC);
        setPartTargets(data.partTargets);
    };

    const handleTotalChange = (val: string) => {
        const score = parseInt(val) || 0;
        setTotalScore(score);
        const data = calculateDistributedGoals(score);
        setTargetLC(data.targetLC);
        setTargetRC(data.targetRC);
        setPartTargets(data.partTargets);
    };

    const handleLCChange = (val: string) => {
        const lc = Math.min(495, parseInt(val) || 0);
        setTargetLC(lc);
        setTargetRC(Math.max(0, totalScore - lc));
    };

    const handleRCChange = (val: string) => {
        const rc = Math.min(495, parseInt(val) || 0);
        setTargetRC(rc);
        setTargetLC(Math.max(0, totalScore - rc));
    };

    const handleSave = async () => {
        try {
            await updateTargetDetails(user.userId, {
                targetScore: totalScore,
                targetLC,
                targetRC,
                partTargets: partTargets!
            });
            setIsEditing(false);
            onUpdate(totalScore);
        } catch (error) {
            console.error("Failed to save targets", error);
        }
    };

    const updatePart = (partKey: string, val: number) => {
        setPartTargets(prev => ({ ...prev, [partKey]: val } as any));
    };

    if (!isEditing) {
        const getPartCurrent = (part: string) => {
            switch (part) {
                case 'p1': return currentStats.p1_cur;
                case 'p2': return currentStats.p2_cur;
                case 'p3': return currentStats.p3_cur;
                case 'p4': return currentStats.p4_cur;
                case 'p5': return currentStats.p5_cur;
                case 'p6': return currentStats.p6_cur;
                case 'p7s': return currentStats.p7s_cur;
                case 'p7d': return currentStats.p7d_cur;
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-blue-400 uppercase border-b border-blue-500/20 pb-1 mb-2">
                                Listening (LC) 총필요 정답수:{requiredLC}
                            </h4>
                            {['p1', 'p2', 'p3', 'p4'].map((p) => {
                                const goalKey = `${p}_goal` as keyof UserProfile['partTargets'];
                                const goal = partTargets?.[goalKey] || 0;
                                const current = getPartCurrent(p);
                                const gap = current !== null ? current - goal : null;

                                return (
                                    <div key={p} className="flex items-center text-sm gap-2">
                                        <span className="text-slate-400 font-bold w-8 text-center uppercase flex-shrink-0">{p}</span>
                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                            <div className="flex flex-col items-center">
                                                <span className="text-slate-500 text-[10px]">목표</span>
                                                <span className="text-white font-bold text-base">{goal}</span>
                                            </div>
                                            <div className="w-px h-6 bg-slate-700/50 mx-2"></div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-slate-500 text-[10px]">현재</span>
                                                {current !== null ? (
                                                    <span className={cn("font-bold text-base", gap && gap < 0 ? "text-rose-400" : "text-emerald-400")}>{current}</span>
                                                ) : (
                                                    <span className="text-slate-700 text-sm">-</span>
                                                )}
                                            </div>
                                        </div>
                                        <span className={cn("text-sm w-10 text-right font-black flex-shrink-0", gap && gap < 0 ? "text-rose-500" : "text-slate-600")}>
                                            {gap !== null ? (gap > 0 ? `+${gap}` : gap) : '-'}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="space-y-3">
                            <h4 className="text-xs font-bold text-indigo-400 uppercase border-b border-indigo-500/20 pb-1 mb-2">
                                Reading (RC) 총필요 정답수:{requiredRC}
                            </h4>
                            {['p5', 'p6', 'p7s', 'p7d'].map((p) => {
                                const goalKey = `${p}_goal` as keyof UserProfile['partTargets'];
                                const goal = partTargets?.[goalKey] || 0;
                                const current = getPartCurrent(p);
                                const gap = current !== null ? current - goal : null;

                                return (
                                    <div key={p} className="flex items-center text-sm gap-2">
                                        <span className="text-slate-400 font-bold w-16 uppercase text-[10px] sm:text-xs flex-shrink-0">{p.replace('p7s', 'P7 S').replace('p7d', 'P7 D')}</span>
                                        <div className="flex-1 flex justify-between items-center px-3 bg-slate-800/50 rounded py-2">
                                            <div className="flex flex-col items-center">
                                                <span className="text-slate-500 text-[10px]">목표</span>
                                                <span className="text-white font-bold text-base">{goal}</span>
                                            </div>
                                            <div className="w-px h-6 bg-slate-700/50 mx-2"></div>
                                            <div className="flex flex-col items-center">
                                                <span className="text-slate-500 text-[10px]">현재</span>
                                                {current !== null ? (
                                                    <span className={cn("font-bold text-base", gap && gap < 0 ? "text-rose-400" : "text-emerald-400")}>{current}</span>
                                                ) : (
                                                    <span className="text-slate-700 text-sm">-</span>
                                                )}
                                            </div>
                                        </div>
                                        <span className={cn("text-sm w-10 text-right font-black flex-shrink-0", gap && gap < 0 ? "text-rose-500" : "text-slate-600")}>
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

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 relative">
                        <label className="text-xs font-bold text-blue-400 uppercase mb-2 block">LC 목표 (청해)</label>
                        <div className="flex justify-between items-end">
                            <div>
                                <Input
                                    type="number"
                                    value={targetLC}
                                    onChange={(e) => handleLCChange(e.target.value)}
                                    className="text-2xl font-black text-white h-10 w-24 bg-transparent border-none p-0 focus-visible:ring-0"
                                />
                                <div className="text-xs text-slate-500">필요 정답수: <span className="text-blue-400 font-bold">{requiredLC}개</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <label className="text-xs font-bold text-indigo-400 uppercase mb-2 block">RC 목표 (독해)</label>
                        <div className="flex justify-between items-end">
                            <div>
                                <Input
                                    type="number"
                                    value={targetRC}
                                    onChange={(e) => handleRCChange(e.target.value)}
                                    className="text-2xl font-black text-white h-10 w-24 bg-transparent border-none p-0 focus-visible:ring-0"
                                />
                                <div className="text-xs text-slate-500">필요 정답수: <span className="text-indigo-400 font-bold">{requiredRC}개</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-blue-400">LC 총필요 정답수:{requiredLC}</h4>
                            <div className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-lg border",
                                remainingLC === 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                                    remainingLC > 0 ? "bg-blue-500/10 border-blue-500/30 text-blue-400" :
                                        "bg-rose-500/10 border-rose-500/30 text-rose-400"
                            )}>
                                <span className="text-xs font-bold uppercase">포인트</span>
                                <span className="font-black text-lg">{remainingLC > 0 ? remainingLC : remainingLC === 0 ? "OK" : remainingLC}</span>
                            </div>
                        </div>

                        {['p1', 'p2', 'p3', 'p4'].map((p) => {
                            const goalKey = `${p}_goal`;
                            const currentVal = (partTargets as any)?.[goalKey] || 0;
                            const maxVal = MAX_Q[goalKey] || 0;
                            const smartMax = Math.min(maxVal, remainingLC >= 0 ? currentVal + remainingLC : currentVal);

                            return (
                                <div key={p} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-300 font-bold uppercase">{p} ({maxVal}문항)</span>
                                        <span className={cn("font-bold", currentVal === maxVal ? "text-emerald-400" : "text-white")}>
                                            {currentVal}개
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={smartMax}
                                        value={currentVal}
                                        onChange={(e) => updatePart(goalKey, parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 touch-none"
                                        disabled={smartMax === 0 && currentVal === 0}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-indigo-400">RC 총필요 정답수:{requiredRC}</h4>
                            <div className={cn(
                                "flex items-center gap-2 px-3 py-1.5 rounded-lg border",
                                remainingRC === 0 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" :
                                    remainingRC > 0 ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" :
                                        "bg-rose-500/10 border-rose-500/30 text-rose-400"
                            )}>
                                <span className="text-xs font-bold uppercase">포인트</span>
                                <span className="font-black text-lg">{remainingRC > 0 ? remainingRC : remainingRC === 0 ? "OK" : remainingRC}</span>
                            </div>
                        </div>

                        {['p5', 'p6', 'p7s', 'p7d'].map((p) => {
                            const goalKey = `${p}_goal`;
                            const currentVal = (partTargets as any)?.[goalKey] || 0;
                            const maxVal = MAX_Q[goalKey] || 0;
                            const smartMax = Math.min(maxVal, remainingRC >= 0 ? currentVal + remainingRC : currentVal);
                            const partLabel = p === 'p7s' ? 'Part 7 Single' : p === 'p7d' ? 'Part 7 Double/Triple' : p.toUpperCase();

                            return (
                                <div key={p} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-300 font-bold uppercase">{partLabel} ({maxVal}문항)</span>
                                        <span className={cn("font-bold", currentVal === maxVal ? "text-emerald-400" : "text-white")}>
                                            {currentVal}개
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max={smartMax}
                                        value={currentVal}
                                        onChange={(e) => updatePart(goalKey, parseInt(e.target.value))}
                                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500 touch-none"
                                        disabled={smartMax === 0 && currentVal === 0}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Card>
    );
}
