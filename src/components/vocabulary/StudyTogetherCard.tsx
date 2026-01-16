import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, GitCompare, ArrowRightLeft } from 'lucide-react';
import { VocabularyWord } from '@/services/vocabularyService';

interface StudyTogetherCardProps {
    word: VocabularyWord;
    className?: string;
}

export const StudyTogetherCard: React.FC<StudyTogetherCardProps> = ({ word, className }) => {
    // Hide if no enriched data (safety)
    const hasData = (word.synonyms?.length ?? 0) > 0 ||
        (word.antonyms?.length ?? 0) > 0 ||
        (word.similar?.length ?? 0) > 0;

    if (!hasData) return null;

    return (
        <Card className={`bg-slate-900/80 border-2 border-indigo-500/20 p-5 rounded-3xl ${className}`}>
            <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-500/20 rounded-xl">
                    <Zap className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="font-extrabold text-slate-300 text-sm tracking-wide">함께 공부해요</span>
            </div>

            <div className="space-y-4">
                {/* Synonyms */}
                {word.synonyms && word.synonyms.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-emerald-500 uppercase flex items-center gap-1">
                            <ArrowRightLeft className="w-3 h-3" /> 동의어 (Synonyms)
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {word.synonyms.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-sm font-bold">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Antonyms */}
                {word.antonyms && word.antonyms.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-rose-500 uppercase flex items-center gap-1">
                            <ArrowRightLeft className="w-3 h-3" /> 반의어 (Antonyms)
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {word.antonyms.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-rose-300 text-sm font-bold">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Confusables */}
                {word.similar && word.similar.length > 0 && (
                    <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-amber-500 uppercase flex items-center gap-1">
                            <GitCompare className="w-3 h-3" /> 혼동 어휘 (Confusables)
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {word.similar.map((s, i) => (
                                <span key={i} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-300 text-sm font-bold">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};
