"use client";

import React from 'react';
import { cn } from "@/lib/utils";
import { DocumentRenderer } from '../Part7Templates';

interface Part7RunnerProps {
    className?: string;
}

// Mock Data for a Double Passage
const MOCK_DOCS = [
    {
        type: 'email',
        header: {
            from: "Sarah Jenkins <s.jenkins@globex.com>",
            to: "Marketing Team <marketing@globex.com>",
            date: "May 12",
            subject: "Product Launch Strategy"
        },
        content: [
            "Team,",
            "I'd like to schedule a meeting to discuss the launch strategy for our new eco-friendly product line. As you know, we are targeting a Q3 release, and we need to finalized our marketing channels by the end of this month.",
            "Please review the attached preliminary report before our meeting on Friday. I specifically want feedback on the social media campaign budget allocation.",
            "Best,",
            "Sarah"
        ]
    },
    {
        type: 'memo',
        header: {
            title: "Meeting Agenda",
            subtitle: "Marketing Strategy - Q3 Launch"
        },
        content: [
            "Date: Friday, May 15",
            "Time: 10:00 AM - 11:30 AM",
            "Location: Conference Room B",
            "1. Review of Q2 performance metrics",
            "2. Presentation of new product features",
            "3. Brainstorming session for social media influencers",
            "4. Budget approval process"
        ]
    }
];

export default function Part7Runner({ className }: Part7RunnerProps) {
    const [selectedAnswers, setSelectedAnswers] = React.useState<Record<number, string>>({});
    const [highlights, setHighlights] = React.useState<{ text: string, id: string }[]>([]);

    const handleSelect = (qNum: number, answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [qNum]: answer
        }));
    };

    // Simple Highlight Handler (Prototype)
    const handleHighlight = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) return;

        const range = selection.getRangeAt(0);
        const selectedText = range.toString();

        if (selectedText.length > 0) {
            const span = document.createElement('span');
            span.style.backgroundColor = '#fef08a'; // yellow-200
            span.style.cursor = 'pointer';
            span.title = "Click to remove highlight";
            span.onclick = (e) => {
                const target = e.target as HTMLElement;
                const parent = target.parentNode;
                if (parent) {
                    parent.replaceChild(document.createTextNode(target.innerText), target);
                }
            };

            try {
                range.surroundContents(span);
                selection.removeAllRanges();
            } catch (e) {
                console.warn("Complex highlight not supported in this prototype.");
                alert("Highlighting across multiple paragraphs is not supported in this demo. Please select text within a single paragraph.");
            }
        }
    };

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 h-full gap-2 p-1 bg-slate-100 text-slate-900 relative", className)}>

            {/* Left: Reading Passage Area */}
            <div className="h-full overflow-y-auto bg-white rounded-lg shadow-sm border border-slate-200 flex flex-col">
                <div className="p-2 bg-slate-50 border-b border-slate-200 flex justify-between items-center sticky top-0 z-10 w-full">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Questions 176-180</span>
                    <div className="flex gap-1">
                        <button
                            onClick={handleHighlight}
                            className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded hover:bg-yellow-200 font-bold flex items-center gap-1"
                            title="Select text then click here"
                        >
                            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                            Highlight
                        </button>
                    </div>
                </div>

                <div className="p-4 md:p-5 space-y-5">
                    {/* Render Docs */}
                    {MOCK_DOCS.map((doc, idx) => (
                        <div key={idx} className="relative group">
                            <span className="absolute -left-4 top-0 text-slate-300 font-black text-2xl select-none group-hover:text-slate-200 transition-colors pointer-events-none">
                                {idx === 0 ? "A" : "B"}
                            </span>
                            <DocumentRenderer doc={doc} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Questions Area */}
            <div className="h-full overflow-y-auto bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="p-2 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Multiple Choice</span>
                </div>

                <div className="p-3 space-y-3">
                    {/* Question 176 */}
                    <div className="space-y-1.5">
                        <div className="flex gap-2">
                            <span className="font-bold text-slate-700 text-sm">176.</span>
                            <p className="font-medium text-slate-800 text-sm leading-tight">What is the main purpose of the email?</p>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            {["To announce a new product release", "To schedule a strategy meeting", "To report Q2 financial results", "To request budget approval"].map((opt, i) => {
                                const val = ['A', 'B', 'C', 'D'][i];
                                const isSelected = selectedAnswers[176] === val;
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
                                        )}>{opt}</span>
                                        <input
                                            type="radio"
                                            name="q176"
                                            className="hidden"
                                            onChange={() => handleSelect(176, val)}
                                            checked={isSelected}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div className="h-px bg-slate-100 my-2"></div>

                    {/* Question 177 */}
                    <div className="space-y-1.5">
                        <div className="flex gap-2">
                            <span className="font-bold text-slate-700 text-sm">177.</span>
                            <p className="font-medium text-slate-800 text-sm leading-tight">According to the memo, what will happen at the meeting?</p>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                            {["A product demo will be shown", "Employees will sign contracts", "The office will be closed", "Social media influencers will visit"].map((opt, i) => {
                                const val = ['A', 'B', 'C', 'D'][i];
                                const isSelected = selectedAnswers[177] === val;
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
                                        )}>{opt}</span>
                                        <input
                                            type="radio"
                                            name="q177"
                                            className="hidden"
                                            onChange={() => handleSelect(177, val)}
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
