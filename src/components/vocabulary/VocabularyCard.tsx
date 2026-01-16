'use client';

import { useState, useEffect } from 'react';
import { VocabularyWord } from '@/services/vocabularyService';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface VocabularyCardProps {
    word: VocabularyWord;
    showBack?: boolean;
    onFlip?: () => void;
    clickable?: boolean;
}

export function VocabularyCard({ word, showBack = false, onFlip, clickable = true }: VocabularyCardProps) {
    const [isFlipped, setIsFlipped] = useState(showBack);

    // Sync isFlipped with showBack prop
    useEffect(() => {
        setIsFlipped(showBack);
    }, [showBack]);

    const handleFlip = (e: React.MouseEvent) => {
        if (!clickable) return;
        e.stopPropagation();
        const nextFlipped = !isFlipped;
        setIsFlipped(nextFlipped);
        if (nextFlipped) {
            onFlip?.();
        }
    };

    if (!word) return null;

    const difficultyColors = {
        basic: 'emerald',
        intermediate: 'blue',
        advanced: 'violet'
    };

    // Default to intermediate if difficulty is missing or invalid
    const color = (word.difficulty && difficultyColors[word.difficulty]) ? difficultyColors[word.difficulty] : 'blue';

    // Helper for dynamic font sizing
    const getFontSize = (text: string, type: 'meaning' | 'example') => {
        const len = text.length;
        if (type === 'meaning') {
            if (len > 20) return 'text-2xl';
            if (len > 12) return 'text-3xl';
            return 'text-4xl';
        } else {
            // Example
            if (len > 100) return 'text-sm'; // Very long
            if (len > 60) return 'text-base';
            return 'text-lg'; // Standard
        }
    };

    const wordLength = word.word.length;
    const wordFontSize = wordLength > 15 ? 'text-3xl' : wordLength > 10 ? 'text-4xl' : 'text-6xl';

    return (
        <div
            className={cn(
                "[perspective:1500px] w-full aspect-[4/3] group",
                clickable && "cursor-pointer"
            )}
        >
            <div
                className={cn(
                    "relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]",
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                )}
                onClick={handleFlip}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit_backface_visibility:hidden] z-20"
                    style={{ transform: 'rotateY(0deg)' }}
                >
                    <div className={cn(
                        "w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:shadow-2xl overflow-hidden shadow-none",
                        "md:border-2 md:border-slate-700 rounded-[2.5rem] p-8 flex flex-col items-center justify-center"
                    )}>
                        <h2 className={cn(
                            "font-black text-white text-center tracking-tight drop-shadow-2xl break-words w-full",
                            wordFontSize
                        )}>
                            {word.word}
                        </h2>
                        <div className="absolute bottom-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                            CLICK TO REVEAL
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] [-webkit_backface_visibility:hidden] z-10"
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className={cn(
                        "w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 md:shadow-2xl shadow-none",
                        "md:border-2 md:border-indigo-500/30 md:rounded-[2.5rem] rounded-none p-1 flex flex-col justify-center overflow-hidden"
                    )}>
                        <div className="h-full w-full p-7 flex flex-col space-y-5 overflow-y-auto custom-scrollbar">
                            <div>
                                <div className="flex justify-between items-start mb-2 gap-2">
                                    <h3 className={cn(
                                        "font-black text-white italic tracking-tighter break-words flex-1",
                                        getFontSize(word.meaning, 'meaning')
                                    )}>
                                        {word.meaning}
                                    </h3>
                                    <div className={cn(
                                        "px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shrink-0",
                                        word.difficulty === 'basic' ? "bg-emerald-500/20 text-emerald-400" :
                                            word.difficulty === 'intermediate' ? "bg-blue-500/20 text-blue-400" :
                                                "bg-violet-500/20 text-violet-400"
                                    )}>
                                        {word.difficulty === 'basic' ? 'BASIC' : word.difficulty === 'intermediate' ? 'INTER' : 'ADV'}
                                    </div>
                                </div>
                                <div className="h-1.5 w-12 bg-indigo-500 rounded-full"></div>
                            </div>

                            <div className="space-y-4 flex-1">
                                <div className="p-5 bg-slate-950/40 rounded-3xl border border-white/5 backdrop-blur-sm">
                                    <p className={cn(
                                        "text-white font-semibold leading-relaxed italic break-words",
                                        getFontSize(word.example, 'example')
                                    )}>"{word.example}"</p>
                                </div>

                                <div className="p-5 bg-slate-950/40 rounded-3xl border border-white/5 backdrop-blur-sm">
                                    <p className="text-slate-300 font-medium leading-relaxed break-words">{word.exampleKo}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(99, 102, 241, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(99, 102, 241, 0.4);
                }
            `}</style>
        </div>
    );
}



