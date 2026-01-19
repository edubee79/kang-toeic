'use client';

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, BookOpen, AlertCircle } from 'lucide-react';

interface VocabItem {
    word: string;
    meaning: string;
    example?: string;
    exampleKo?: string;
}

interface TouchDictionaryProps {
    text: string;
    className?: string;
    highlightKeywords?: boolean;
    stopWords?: Set<string>;
}

export const TouchDictionary: React.FC<TouchDictionaryProps> = ({
    text,
    className,
    highlightKeywords = false,
    stopWords = new Set()
}) => {
    const [selectedWord, setSelectedWord] = useState<{ word: string, rect: DOMRect } | null>(null);
    const [definition, setDefinition] = useState<VocabItem | null>(null);
    const [vocabData, setVocabData] = useState<VocabItem[] | null>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);

    // Initialize vocab data
    useEffect(() => {
        const loadVocab = async () => {
            try {
                const response = await fetch('/data/vocabulary_final.json');
                const data: VocabItem[] = await response.json();
                setVocabData(data);
            } catch (e) {
                console.error("Failed to load vocab data", e);
            }
        };
        loadVocab();
    }, []);

    const findDefinition = (word: string) => {
        if (!vocabData) return null;

        const clean = word.toLowerCase().trim();

        // 1. Exact match
        let found = vocabData.find(v => v.word.toLowerCase().trim() === clean);
        if (found) return found;

        // 2. Simple stemming for common variations
        const extensions = [
            { suffix: 's', remove: 1 },
            { suffix: 'es', remove: 2 },
            { suffix: 'ed', remove: 2 },
            { suffix: 'ing', remove: 3 },
            { suffix: 'd', remove: 1 }
        ];

        for (const ext of extensions) {
            if (clean.endsWith(ext.suffix) && clean.length > ext.remove + 2) {
                const base = clean.slice(0, -ext.remove);
                found = vocabData.find(v => v.word.toLowerCase().trim() === base);
                if (found) return found;
            }
        }

        return null;
    };

    const handleWordClick = (e: React.MouseEvent, word: string) => {
        e.stopPropagation();
        const cleanWord = word.toLowerCase().trim().replace(/^[.,\/#!$%\^&\*;:{}=\-_`~()]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+$/g, "");

        if (cleanWord.length <= 1) return;

        const rect = (e.target as HTMLElement).getBoundingClientRect();
        setSelectedWord({ word: cleanWord, rect });
        setDefinition(findDefinition(cleanWord));
    };

    const closeTooltip = () => {
        setSelectedWord(null);
        setDefinition(null);
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
                closeTooltip();
            }
        };
        if (selectedWord) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [selectedWord]);

    const renderText = () => {
        const tokens = text.split(/(\s+)/);
        return tokens.map((token, i) => {
            if (/\s+/.test(token)) return token;

            const cleanWord = token.toLowerCase().trim().replace(/^[.,\/#!$%\^&\*;:{}=\-_`~()]+|[.,\/#!$%\^&\*;:{}=\-_`~()]+$/g, "");

            let isHighlighted = false;
            if (highlightKeywords) {
                const isWhWord = /^(who|where|when|what|why|how|which)$/i.test(cleanWord);
                const isImportant = !stopWords.has(cleanWord) && cleanWord.length > 2;
                isHighlighted = isWhWord || isImportant;
            }

            return (
                <span
                    key={i}
                    onClick={(e) => handleWordClick(e, token)}
                    className={cn(
                        "cursor-pointer hover:bg-slate-800/60 rounded px-0.5 transition-colors duration-150 active:bg-indigo-500/20",
                        isHighlighted && "border-b border-slate-700/30"
                    )}
                >
                    {token}
                </span>
            );
        });
    };

    return (
        <div className={cn("relative inline", className)}>
            {renderText()}

            {selectedWord && (
                <div
                    ref={tooltipRef}
                    className="fixed z-[9999] bg-[#1a1c1e]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
                    style={{
                        top: Math.max(80, Math.min(window.innerHeight - 250, selectedWord.rect.top - 120)) + window.scrollY,
                        left: Math.max(10, Math.min(window.innerWidth - 310, selectedWord.rect.left - 130)),
                        width: '300px'
                    }}
                >
                    {/* Minimal Header */}
                    <div className="flex justify-between items-center px-4 py-3 border-b border-white/5 bg-white/5">
                        <div className="flex items-center gap-2">
                            <BookOpen size={14} className="text-indigo-400" />
                            <h4 className="font-black text-white text-sm tracking-tight uppercase truncate">
                                {selectedWord.word}
                            </h4>
                        </div>
                        <button onClick={closeTooltip} className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-all">
                            <X size={16} />
                        </button>
                    </div>

                    <div className="p-4">
                        {definition ? (
                            <div className="space-y-3">
                                <div className="bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-xl">
                                    <p className="text-slate-100 text-sm font-bold leading-relaxed">{definition.meaning}</p>
                                </div>
                                {definition.example && (
                                    <div className="space-y-1 pl-1">
                                        <p className="text-[11px] text-slate-400 italic leading-snug">"{definition.example}"</p>
                                        {definition.exampleKo && (
                                            <p className="text-[10px] text-slate-500 leading-snug">{definition.exampleKo}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-start gap-3 py-1">
                                <div className="mt-0.5 text-amber-500/80">
                                    <AlertCircle size={16} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-bold text-slate-300">핵심 단어장에 없는 단어입니다.</p>
                                    <p className="text-[10px] text-slate-500 leading-normal">
                                        토익 700+ 필수 어휘 위주로 구성되어 있습니다. 곧 더 방대한 사전을 포함할 예정입니다!
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
