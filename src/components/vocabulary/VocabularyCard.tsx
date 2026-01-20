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
    const getFontSize = (text: string = '', type: 'meaning' | 'example') => {
        const safeText = text || '';
        const len = safeText.length;
        if (type === 'meaning') {
            if (len > 20) return 'text-xl md:text-2xl';
            if (len > 12) return 'text-2xl md:text-3xl';
            return 'text-3xl md:text-4xl';
        } else {
            // Example
            if (len > 100) return 'text-xs md:text-sm';
            if (len > 60) return 'text-sm md:text-base';
            return 'text-base md:text-lg';
        }
    };

    const wordLength = word?.word?.length || 0;
    const wordFontSize = wordLength > 20 ? 'text-lg md:text-xl' :
        wordLength > 15 ? 'text-xl md:text-2xl' :
            wordLength > 12 ? 'text-2xl md:text-3xl' :
                wordLength > 9 ? 'text-3xl md:text-5xl' :
                    wordLength > 7 ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl';

    return (
        <div
            className={cn(
                "[perspective:1500px] w-full aspect-[4/5] group",
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
                        "border-2 border-slate-700/50 md:border-slate-700 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-8 flex flex-col items-center justify-center text-center"
                    )}>
                        <h2
                            className={cn(
                                "font-black text-white tracking-tight drop-shadow-2xl w-full px-2 text-wrap break-all hyphens-auto",
                                wordFontSize
                            )}
                            lang="en"
                        >
                            {word?.word || ''}
                        </h2>
                        <div className="absolute bottom-6 md:bottom-8 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
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
                        "border-2 border-indigo-500/30 rounded-[2rem] md:rounded-[2.5rem] p-0.5 flex flex-col justify-center overflow-hidden"
                    )}>
                        <div className="h-full w-full p-5 md:p-8 flex flex-col space-y-4 md:space-y-6 overflow-y-auto custom-scrollbar">
                            <div>
                                <div className="flex justify-between items-start mb-2 gap-2">
                                    <h3 className={cn(
                                        "font-black text-white italic tracking-tighter break-words flex-1",
                                        getFontSize(word?.meaning, 'meaning')
                                    )}>
                                        {word?.meaning || ''}
                                    </h3>
                                    <div className={cn(
                                        "px-2 md:px-3 py-1 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-tighter shrink-0",
                                        word?.difficulty === 'basic' ? "bg-emerald-500/20 text-emerald-400" :
                                            word?.difficulty === 'intermediate' ? "bg-blue-500/20 text-blue-400" :
                                                "bg-violet-500/20 text-violet-400"
                                    )}>
                                        {word?.difficulty === 'basic' ? 'BASIC' : word?.difficulty === 'intermediate' ? 'INTER' : 'ADV'}
                                    </div>
                                </div>
                                <div className="h-1 w-10 md:h-1.5 md:w-12 bg-indigo-500 rounded-full"></div>
                            </div>

                            <div className="space-y-3 md:space-y-4 flex-1">
                                <div className="p-4 md:p-5 bg-slate-950/40 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm">
                                    <p className={cn(
                                        "text-white font-semibold leading-relaxed italic break-words",
                                        getFontSize(word?.example, 'example')
                                    )}>"{word?.example || ''}"</p>
                                </div>

                                <div className="p-4 md:p-5 bg-slate-950/40 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm">
                                    <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed break-words">{word?.exampleKo || ''}</p>
                                </div>

                                {/* Additional Info: Synonyms, Antonyms, Confusables */}
                                {(word.synonyms?.length || word.antonyms?.length || word.similar?.length) ? (
                                    <div className="pt-2 space-y-3">
                                        {word.synonyms && word.synonyms.length > 0 && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                                                    SYNONYM <span className="text-[9px] text-indigo-500/70">(유의어)</span>
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {word.synonyms.map((s, i) => (
                                                        <span key={i} className="text-xs md:text-sm text-slate-300 font-medium bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {word.similar && word.similar.length > 0 && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
                                                    EXPANSION <span className="text-[9px] text-amber-500/70">(파생어/확장)</span>
                                                </span>
                                                <div className="flex flex-wrap gap-2">
                                                    {word.similar.map((s, i) => (
                                                        <span key={i} className="text-xs md:text-sm text-slate-300 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : null}
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



