"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface Part6RunnerProps {
    className?: string;
}

export default function Part6Runner({ className }: Part6RunnerProps) {
    const [focusedQ, setFocusedQ] = useState<number | null>(null);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

    const handleSelect = (qNum: number, answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [qNum]: answer
        }));
    };

    // Placeholder Passage Content
    const passageContent = (
        <div className="space-y-3">
            <div className="border-b border-gray-200 pb-2 mb-2 font-sans text-xs text-slate-500 space-y-0.5">
                <p><strong>To:</strong> All Staff</p>
                <p><strong>From:</strong> Human Resources</p>
                <p><strong>Date:</strong> January 15</p>
                <p><strong>Subject:</strong> Annual Health Checkup</p>
            </div>
            <p className="leading-snug">Dear Employees,</p>
            <p className="leading-snug">
                This email is to <span className={cn("inline-block font-bold text-indigo-600 border-b-2 border-indigo-200 px-0.5 cursor-pointer transition-colors", focusedQ === 131 ? "bg-indigo-100 border-indigo-500" : "hover:bg-indigo-50")} onClick={() => setFocusedQ(131)}>[131]</span> you that the annual health checkup will be held next week.
            </p>
            <p className="leading-snug">
                Please ensure that you have completed the necessary forms before your appointment. The forms can be downloaded from our intranet portal. If you <span className={cn("inline-block font-bold text-indigo-600 border-b-2 border-indigo-200 px-0.5 cursor-pointer transition-colors", focusedQ === 132 ? "bg-indigo-100 border-indigo-500" : "hover:bg-indigo-50")} onClick={() => setFocusedQ(132)}>[132]</span> any assistance, please contact the HR department.
            </p>
            <p className="leading-snug">
                <span className={cn("inline-block font-bold text-indigo-600 border-b-2 border-indigo-200 px-0.5 cursor-pointer transition-colors", focusedQ === 133 ? "bg-indigo-100 border-indigo-500" : "hover:bg-indigo-50")} onClick={() => setFocusedQ(133)}>[133]</span>. We appreciate your cooperation in maintaining a healthy workplace.
            </p>
            <p className="leading-snug">
                Sincerely,<br />
                Human Resources Team
            </p>
        </div>
    );

    return (
        <div className={cn("flex md:flex-row flex-col h-full overflow-hidden", className)}>

            {/* Left: Passage (50%) */}
            <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-y-auto p-4 bg-slate-50 border-r border-slate-200">
                <div className="max-w-2xl mx-auto bg-white p-4 rounded shadow-sm border border-slate-100 text-sm leading-relaxed text-slate-800">
                    {passageContent}
                </div>
            </div>

            {/* Right: Questions (50%) */}
            <div className="md:w-1/2 w-full h-1/2 md:h-full overflow-y-auto bg-white relative">
                <div className="p-4 space-y-2 pb-32">
                    {/* Q131 */}
                    <div id="q-131" className={cn("scroll-mt-10 p-2 rounded-xl transition-all border", focusedQ === 131 ? "border-indigo-500 bg-indigo-50/50 shadow-md" : "border-slate-100 hover:border-slate-300")}>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">131</span>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            {['(A) inform', '(B) information', '(C) informative', '(D) informed'].map((opt, i) => {
                                const val = ['A', 'B', 'C', 'D'][i];
                                const isSelected = selectedAnswers[131] === val;
                                // Remove (A) for cleaner look, as we use the circle
                                const text = opt.replace(/^\([A-D]\)\s*/, '');

                                return (
                                    <label key={i} className={cn(
                                        "flex items-center gap-2 px-1.5 py-1 cursor-pointer group transition-all rounded hover:bg-slate-50",
                                        isSelected
                                            ? "bg-indigo-50"
                                            : "bg-white"
                                    )}>
                                        <div className={cn(
                                            "w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold transition-colors shrink-0",
                                            isSelected
                                                ? "bg-indigo-600 border-indigo-600 text-white"
                                                : "border-slate-300 text-slate-400 group-hover:border-indigo-400"
                                        )}>
                                            {val}
                                        </div>
                                        <span className={cn(
                                            "text-sm transition-colors leading-none", // tight leading
                                            isSelected ? "text-indigo-900 font-medium" : "text-slate-600 group-hover:text-slate-900"
                                        )}>{text}</span>
                                        <input
                                            type="radio"
                                            name="q131"
                                            className="hidden"
                                            onChange={() => handleSelect(131, val)}
                                            checked={isSelected}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Q132 */}
                    <div id="q-132" className={cn("scroll-mt-10 p-2 rounded-xl transition-all border", focusedQ === 132 ? "border-indigo-500 bg-indigo-50/50 shadow-md" : "border-slate-100 hover:border-slate-300")}>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-xs">132</span>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            {['(A) need', '(B) needs', '(C) needed', '(D) needing'].map((opt, i) => {
                                const val = ['A', 'B', 'C', 'D'][i];
                                const isSelected = selectedAnswers[132] === val;
                                const text = opt.replace(/^\([A-D]\)\s*/, '');

                                return (
                                    <label key={i} className={cn(
                                        "flex items-center gap-2 px-1.5 py-1 cursor-pointer group transition-all rounded hover:bg-slate-50",
                                        isSelected
                                            ? "bg-indigo-50"
                                            : "bg-white"
                                    )}>
                                        <div className={cn(
                                            "w-4 h-4 rounded-full border flex items-center justify-center text-[10px] font-bold transition-colors shrink-0",
                                            isSelected
                                                ? "bg-indigo-600 border-indigo-600 text-white"
                                                : "border-slate-300 text-slate-400 group-hover:border-indigo-400"
                                        )}>
                                            {val}
                                        </div>
                                        <span className={cn(
                                            "text-sm transition-colors leading-none",
                                            isSelected ? "text-indigo-900 font-medium" : "text-slate-600 group-hover:text-slate-900"
                                        )}>{text}</span>
                                        <input
                                            type="radio"
                                            name="q132"
                                            className="hidden"
                                            onChange={() => handleSelect(132, val)}
                                            checked={isSelected}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
