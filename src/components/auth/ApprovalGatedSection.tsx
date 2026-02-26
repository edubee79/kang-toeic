'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldCheck, ArrowLeft, Clock, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserData } from '@/context/UserDataContext';
import { cn } from '@/lib/utils';

interface ApprovalLockModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ApprovalLockModal({ isOpen, onClose }: ApprovalLockModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="w-full max-w-md bg-slate-900 border border-white/10 rounded-[2.5rem] p-10 text-center shadow-2xl overflow-hidden relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Decorative Background */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mb-8 border border-white/10 shadow-inner">
                                <Lock className="w-10 h-10 text-indigo-400" />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-3 flex items-center justify-center gap-2">
                                    <Clock className="w-5 h-5 text-indigo-500" />
                                    ACCESS RESTRICTED
                                </h3>
                                <p className="text-slate-400 font-bold text-sm leading-relaxed mb-10 px-4">
                                    가입 승인 대기 중입니다.<br />
                                    관리자의 승인이 완료된 후 <br />
                                    <span className="text-indigo-400 font-black">실전 문제 풀이 및 모든 기능</span>이 활성화됩니다!
                                </p>
                            </motion.div>

                            <div className="w-full space-y-3">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 text-left">
                                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                                        <ShieldCheck className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-white uppercase italic">Student Status</p>
                                        <p className="text-[10px] text-slate-500 font-bold">수강생 인증 완료 전에는 미리보기만 가능합니다.</p>
                                    </div>
                                </div>

                                <Button
                                    onClick={onClose}
                                    className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-base shadow-xl shadow-indigo-900/40 transition-all active:scale-[0.98]"
                                >
                                    확인했습니다
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

interface ApprovalGatedActionProps {
    children: React.ReactElement; // Must be a single element like a button or link
    enabled?: boolean;
}

/**
 * A wrapper that intercepts clicks if the user is not approved.
 * Instead of performing the action, it shows the ApprovalLockModal.
 */
export function ApprovalGatedAction({ children, enabled = true }: ApprovalGatedActionProps) {
    const { user: profile } = useUserData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!enabled || !profile || profile.status === 'approved' || !profile.status) {
        return children;
    }

    if (profile.status === 'pending') {
        const handleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsModalOpen(true);
        };

        // Clone the child and inject the onClick handler to intercept
        return (
            <>
                {React.cloneElement(children, {
                    onClick: handleClick,
                    // If it's a Link or something that uses href, we might need to block it visually
                    className: cn(children.props.className, "cursor-pointer")
                })}
                <ApprovalLockModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
        );
    }

    return children;
}

/**
 * Legacy wrapper for full-page blocks - now simplified to NOT block.
 * Only use for wrapping specific functional UI blocks if needed.
 */
export function ApprovalGatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
    return <div className={className}>{children}</div>;
}
