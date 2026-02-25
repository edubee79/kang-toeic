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
    studyMode?: 'basic' | 'advanced';
}

export function VocabularyCard({
    word,
    showBack = false,
    onFlip,
    clickable = true,
    studyMode = 'advanced'
}: VocabularyCardProps) {
    const [isFlipped, setIsFlipped] = useState(showBack);
    const [showHints, setShowHints] = useState<Record<string, boolean>>({});

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

    const toggleHint = (key: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setShowHints(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSpeak = (text: string, e: React.MouseEvent) => {
        e.stopPropagation();
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = 0.85; // Slightly slower for better learning (Default is 1.0)
        window.speechSynthesis.speak(utter);
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
                wordLength > 9 ? 'text-3xl md:text-4xl' :
                    wordLength > 7 ? 'text-3xl md:text-5xl' : 'text-4xl md:text-6xl';

    return (
        <div
            className={cn(
                "[perspective:1500px] w-full h-fit group transition-all duration-500",
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
                    className={cn(
                        "w-full h-fit min-h-[90px] md:min-h-[160px] [backface-visibility:hidden] [-webkit_backface_visibility:hidden] z-20 transition-all duration-500",
                        !isFlipped ? "relative" : "absolute inset-0"
                    )}
                    style={{ transform: 'rotateY(0deg)' }}
                >
                    <div className={cn(
                        "w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 md:shadow-2xl overflow-hidden shadow-none transition-all duration-500",
                        "border-2 border-slate-700/50 md:border-slate-700 rounded-xl md:rounded-[2.5rem] p-4 md:p-8 flex flex-col items-center justify-center text-center relative"
                    )}>
                        <h2
                            className={cn(
                                "font-black text-white tracking-tight drop-shadow-2xl w-full px-2 break-words",
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
                    className={cn(
                        "w-full h-fit min-h-[90px] md:min-h-[160px] [backface-visibility:hidden] [-webkit_backface_visibility:hidden] z-10 transition-all duration-500",
                        isFlipped ? "relative" : "absolute inset-0"
                    )}
                    style={{ transform: 'rotateY(180deg)' }}
                >
                    <div className={cn(
                        "w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 md:shadow-2xl shadow-none",
                        "border-2 border-indigo-500/30 rounded-xl md:rounded-[2.5rem] p-0.5 flex flex-col justify-center overflow-hidden"
                    )}>
                        <div className="h-full w-full p-4 md:p-8 flex flex-col space-y-2 md:space-y-6 overflow-y-auto custom-scrollbar">
                            <div>
                                <div className="flex justify-between items-start mb-2 gap-2">
                                    <div className="flex flex-col flex-1 gap-1">
                                        <div className="flex items-center gap-2">
                                            {word.pos && (
                                                <span className="text-[10px] font-bold text-indigo-400 border border-indigo-400/30 px-1 rounded bg-indigo-400/5 italic shrink-0">
                                                    {word.pos}
                                                </span>
                                            )}
                                            <h3 className={cn(
                                                "font-black text-white italic tracking-tighter break-words",
                                                getFontSize(word?.meaning, 'meaning')
                                            )}>
                                                {word?.meaning || ''}
                                            </h3>
                                        </div>
                                    </div>
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
                                <div
                                    className="p-3 md:p-5 bg-slate-950/40 rounded-xl md:rounded-3xl border border-white/5 backdrop-blur-sm group/example cursor-pointer hover:bg-slate-950/60 transition-all"
                                    onClick={(e) => handleSpeak(word?.example || '', e)}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <p className={cn(
                                            "text-white font-semibold leading-tight italic break-words flex-1",
                                            getFontSize(word?.example, 'example')
                                        )}>"{word?.example || ''}"</p>
                                        <div className="p-1.5 rounded-full bg-white/5 opacity-0 group-hover/example:opacity-100 transition-opacity">
                                            <svg className="w-3 h-3 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M11 5L6 9H2V15H6L11 19V5Z" />
                                                <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-[10px] font-bold tracking-widest opacity-0 group-hover/example:opacity-100 transition-opacity uppercase">Click to Listen</p>
                                </div>

                                <div className="p-3 md:p-5 bg-slate-950/40 rounded-xl md:rounded-3xl border border-white/5 backdrop-blur-sm">
                                    <p className="text-slate-300 text-xs md:text-base font-medium leading-tight break-words">
                                        {(word as any).exampleKo || (word as any).exampleMeaning || ''}
                                    </p>
                                </div>

                                {/* Core Relationship Info (Visible in all modes) */}
                                {(word.synonyms?.length || word.similar?.length || word.derivatives?.length) ? (
                                    <div className="pt-1.5 space-y-3">
                                        {word.synonyms && word.synonyms.length > 0 && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-black text-indigo-400 uppercase tracking-wider shrink-0">
                                                    SYNONYMS <span className="text-[8px] opacity-70">(유의어)</span>
                                                </span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {word.synonyms.map((s, i) => (
                                                        <span key={i} className="text-[10px] md:text-xs text-slate-300 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {word.similar && word.similar.length > 0 && (
                                            <div className="flex flex-col gap-1">
                                                <span className="text-[9px] font-black text-amber-400 uppercase tracking-wider shrink-0">
                                                    EXPANSION <span className="text-[8px] opacity-70">(관련어/확장)</span>
                                                </span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {word.similar.map((s, i) => (
                                                        <span key={i} className="text-[10px] md:text-xs text-slate-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                                                            {s}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                        {/* Derivatives with Core Highlighting (Always visible) */}
                                        {word.derivatives && word.derivatives.length > 0 && (
                                            <div className="space-y-2 pt-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                                    <span className="text-[10px] font-black text-emerald-400 tracking-widest uppercase italic text-left">Essential Derivatives (파생어)</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {word.derivatives.map((d: any, i) => {
                                                        const isObject = typeof d === 'object' && d !== null;
                                                        const derivativeWord = isObject ? d.word : d.split(' ')[0] || d;
                                                        const derivativePos = isObject ? d.pos : d.match(/\((.*?)\)/)?.[1] || '';
                                                        const derivativeMeaning = isObject ? d.meaning : d.split(')').pop()?.trim() || '';

                                                        return (
                                                            <div key={i} className={cn(
                                                                "px-3 py-1.5 rounded-xl flex items-center gap-2 max-w-full overflow-hidden transition-all",
                                                                d.isCore
                                                                    ? "bg-emerald-500/20 border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                                                                    : "bg-emerald-500/5 border border-emerald-500/10"
                                                            )}>
                                                                <span className={cn("text-sm font-black break-all", d.isCore ? "text-white" : "text-emerald-100")}>{derivativeWord}</span>
                                                                {derivativePos && <span className="text-[10px] text-emerald-400 px-1 bg-emerald-400/10 rounded font-black italic shrink-0">{derivativePos}</span>}
                                                                {derivativeMeaning && <span className="text-xs text-emerald-300/80 font-semibold truncate text-left">{derivativeMeaning}</span>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : null}

                                {/* Advanced Info (only in advanced mode) */}
                                {studyMode === 'advanced' && (
                                    <div className="space-y-4 pt-2">
                                        {/* Sinagong Enhanced Information */}
                                        {((word as any).usageNote || (word as any).exampleTip) && (
                                            <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                                        <span className="text-[10px] font-black text-blue-400 tracking-widest uppercase">Usage Point</span>
                                                    </div>
                                                    <button
                                                        onClick={(e) => toggleHint('usage', e)}
                                                        className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[9px] font-black text-blue-400 hover:bg-blue-500/30 transition-all border border-blue-500/30"
                                                    >
                                                        {showHints['usage'] ? 'HIDE TIP' : 'SHOW TIP'}
                                                    </button>
                                                </div>
                                                {showHints['usage'] ? (
                                                    <p className="text-sm text-blue-100 font-bold leading-relaxed animate-in fade-in slide-in-from-top-1 duration-300">
                                                        {(word as any).usageNote || (word as any).exampleTip}
                                                    </p>
                                                ) : (
                                                    <p className="text-[10px] text-blue-400/50 font-bold italic">출제 포인트를 확인하려면 팁 버튼을 누르세요.</p>
                                                )}
                                            </div>
                                        )}

                                        {word.collocations && word.collocations.length > 0 && (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                                    <span className="text-[10px] font-black text-indigo-400 tracking-widest uppercase">Must-Know Collocations</span>
                                                </div>
                                                <div className="grid gap-2">
                                                    {word.collocations.map((c, i) => {
                                                        const isObject = typeof c === 'object' && c !== null;
                                                        const en = isObject ? (c as any).en : c;
                                                        const ko = isObject ? (c as any).ko : '';

                                                        return (
                                                            <div key={i} className="px-4 py-2 bg-indigo-500/5 rounded-xl border border-indigo-500/10 flex flex-col md:flex-row md:items-start justify-between gap-1 overflow-hidden group/collo hover:bg-indigo-500/10 transition-all cursor-pointer" onClick={(e) => handleSpeak(en, e)}>
                                                                <span className="text-sm text-indigo-100 font-bold break-words">{en}</span>
                                                                {ko && <span className="text-xs text-indigo-400 font-medium shrink-0 group-hover/collo:text-indigo-300">{ko}</span>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {/* Derivatives with Core Highlighting */}
                                        {word.derivatives && word.derivatives.length > 0 && (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                                    <span className="text-[10px] font-black text-emerald-400 tracking-widest uppercase italic">Essential Derivatives (파생어)</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {word.derivatives.map((d: any, i) => {
                                                        const isObject = typeof d === 'object' && d !== null;
                                                        const derivativeWord = isObject ? d.word : d.split(' ')[0] || d;
                                                        const derivativePos = isObject ? d.pos : d.match(/\((.*?)\)/)?.[1] || '';
                                                        const derivativeMeaning = isObject ? d.meaning : d.split(')').pop()?.trim() || '';

                                                        return (
                                                            <div key={i} className={cn(
                                                                "px-3 py-1.5 rounded-xl flex items-center gap-2 max-w-full overflow-hidden transition-all",
                                                                d.isCore
                                                                    ? "bg-emerald-500/20 border-2 border-emerald-500/40 shadow-lg shadow-emerald-950/20"
                                                                    : "bg-emerald-500/5 border border-emerald-500/10"
                                                            )}>
                                                                <span className={cn("text-sm font-black break-all", d.isCore ? "text-white" : "text-emerald-100")}>{derivativeWord}</span>
                                                                {derivativePos && <span className="text-[10px] text-emerald-400 px-1 bg-emerald-400/10 rounded font-black italic shrink-0">{derivativePos}</span>}
                                                                {derivativeMeaning && <span className="text-xs text-emerald-300/80 font-semibold truncate">{derivativeMeaning}</span>}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        {word.grammarPoint && (
                                            <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 relative overflow-hidden group/grammar">
                                                <div className="absolute top-0 right-0 p-1 bg-orange-500/20 rounded-bl-xl">
                                                    <span className="text-[8px] font-black text-orange-400 px-1 uppercase italic">Toeic Tip</span>
                                                </div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.8)]"></span>
                                                    <span className="text-[10px] font-black text-orange-400 tracking-widest uppercase">Logic & Grammar</span>
                                                </div>
                                                <p className="text-sm text-orange-100 font-black leading-relaxed">{word.grammarPoint}</p>
                                            </div>
                                        )}
                                    </div>
                                )}
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
        </div >
    );
}



