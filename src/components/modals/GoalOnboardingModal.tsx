'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Sparkles, TrendingUp, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GoalOnboardingModalProps {
    isOpen: boolean;
    onConfirm: (score: number) => Promise<void>;
}

export function GoalOnboardingModal({ isOpen, onConfirm }: GoalOnboardingModalProps) {
    const [score, setScore] = useState(700);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleConfirm = async () => {
        setIsSubmitting(true);
        try {
            await onConfirm(score);
            setIsSuccess(true);
            // Modal will be closed by parent state change after refresh
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getScoreMessage = (s: number) => {
        if (s >= 900) return "상위 1%를 향한 위대한 도전입니다!";
        if (s >= 800) return "대기업 합격권! 충분히 가능합니다.";
        if (s >= 700) return "가장 많은 학생들이 목표로 하는 점수예요.";
        if (s >= 600) return "기초부터 탄탄하게, 시작이 반입니다!";
        return "한 걸음씩 확실하게 올라가 봐요.";
    };

    const getTargetLabel = (s: number) => {
        if (s >= 900) return "MASTER";
        if (s >= 800) return "EXPERT";
        if (s >= 700) return "ADVANCED";
        if (s >= 600) return "INTERMEDIATE";
        return "BEGINNER";
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-slate-950/90 backdrop-blur-xl"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        className="w-full max-w-lg bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Aura */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]"></div>
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-rose-500/10 rounded-full blur-[100px]"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30"
                            >
                                <Target className="w-8 h-8 text-indigo-400" />
                            </motion.div>

                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-2">
                                Welcome to <span className="text-indigo-500">KANG's TOEIC</span>
                            </h2>
                            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest leading-relaxed mb-10">
                                목표 점수를 설정하면 강쌤 AI가 <br />
                                파트별 학습 전략을 자동으로 구성해 드립니다.
                            </p>

                            {/* Score Display */}
                            <div className="mb-12 relative">
                                <motion.div
                                    key={score}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="text-[100px] font-black italic text-white leading-none tracking-tighter flex items-center">
                                        {score}
                                        <span className="text-2xl text-slate-600 ml-2 not-italic">pt</span>
                                    </div>
                                    <Badge className="mt-4 bg-indigo-500/20 text-indigo-400 border-indigo-500/30 font-black italic px-4 py-1.5 rounded-full text-sm">
                                        {getTargetLabel(score)}
                                    </Badge>
                                </motion.div>
                            </div>

                            {/* Range Slider */}
                            <div className="w-full px-4 mb-10">
                                <input
                                    type="range"
                                    min="300"
                                    max="990"
                                    step="5"
                                    value={score}
                                    onChange={(e) => setScore(parseInt(e.target.value))}
                                    className="w-full h-3 bg-slate-800 rounded-full appearance-none cursor-pointer accent-indigo-500 shadow-inner"
                                />
                                <div className="flex justify-between mt-4">
                                    <span className="text-[10px] font-black text-slate-600">MIN 300</span>
                                    <p className="text-xs font-bold text-indigo-400 italic">
                                        {getScoreMessage(score)}
                                    </p>
                                    <span className="text-[10px] font-black text-slate-600">MAX 990</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleConfirm}
                                disabled={isSubmitting || isSuccess}
                                className={cn(
                                    "w-full h-16 rounded-2xl font-black text-xl italic uppercase tracking-tighter transition-all shadow-xl shadow-indigo-900/30",
                                    isSuccess ? "bg-emerald-600" : "bg-indigo-600 hover:bg-indigo-500 active:scale-95"
                                )}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="animate-pulse" />
                                        분석 중...
                                    </div>
                                ) : isSuccess ? (
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="w-6 h-6" />
                                        START STUDY
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        AI 목표 설정하기
                                        <ArrowRight className="ml-2 w-6 h-6" />
                                    </div>
                                )}
                            </Button>

                            <p className="mt-6 text-[10px] text-slate-600 font-bold uppercase">
                                * 언제든지 마이페이지에서 목표를 수정할 수 있습니다.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={cn("inline-flex items-center rounded-md border text-xs font-semibold", className)}>
            {children}
        </span>
    );
}
