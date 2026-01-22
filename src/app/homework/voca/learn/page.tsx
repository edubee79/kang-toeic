'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { VocabularyCard } from '@/components/vocabulary/VocabularyCard';
import { getWordsForLearning, updateWordStatus } from '@/services/vocabularyService';
import { VocabularyWord } from '@/services/vocabularyService';
import { CheckCircle, RefreshCw, ArrowRight } from 'lucide-react';

export default function LearnPage() {
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [reviewPool, setReviewPool] = useState<number[]>([]);
    const router = useRouter();

    const [showBack, setShowBack] = useState(false);
    const [hasPeeked, setHasPeeked] = useState(false); // Track if user peeked at least once

    useEffect(() => {
        const init = async () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.push('/login');
                return;
            }

            const user = JSON.parse(userData);
            setUserId(user.userId);

            setUserId(user.userId);
            try {
                // Check saved progress
                const saved = localStorage.getItem('voca_learn_progress');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (parsed.words && parsed.words.length > 0) {
                        setWords(parsed.words);
                        if (parsed.currentIndex) setCurrentIndex(parsed.currentIndex);
                        if (parsed.reviewPool) setReviewPool(parsed.reviewPool);
                    } else {
                        // fallback
                        const wordsData = await getWordsForLearning(user.userId);
                        const shuffled = [...wordsData].sort(() => Math.random() - 0.5);
                        setWords(shuffled);
                    }
                } else {
                    const wordsData = await getWordsForLearning(user.userId);
                    // Shuffle words (Fisher-Yates)
                    const shuffled = [...wordsData].sort(() => Math.random() - 0.5);
                    setWords(shuffled);
                }
            } catch (error) {
                console.error('Error loading words:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router]);
    useEffect(() => {
        setShowBack(false);
        setHasPeeked(false);
    }, [currentIndex]);

    const speak = (text: string) => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'en-US';
            window.speechSynthesis.speak(utter);
        }
    };

    const handleFlip = () => {
        const nextShowBack = !showBack;
        setShowBack(nextShowBack);

        if (nextShowBack) { // Revealing
            setHasPeeked(true);
            const currentWord = words[currentIndex];
            if (currentWord) speak(currentWord.word);
        }
    };

    const handleMemorized = async () => {
        if (!userId) return;
        const currentWord = words[currentIndex];
        await updateWordStatus(userId, currentWord.id, 'learning', true);
        moveToNext();
    };

    // "Next Word" (Forced Review)
    const handleNextForcedReview = () => {
        setReviewPool(prev => [...prev, currentIndex]);
        moveToNext();
    };

    const moveToNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (reviewPool.length > 0) {
            setCurrentIndex(reviewPool[0]);
            setReviewPool(prev => prev.slice(1));
        } else {
            localStorage.removeItem('voca_learn_progress');
            router.push('/homework/voca');
        }
    };

    // ... (loading / empty checks remain same)

    const currentWord = words[currentIndex];
    const totalWords = words.length + reviewPool.length;
    const progress = ((words.length - currentIndex - 1 + words.length - reviewPool.length) / totalWords) * 100;

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
                <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <button
                        onClick={() => router.back()}
                        className="text-slate-400 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                        ✕ Exit
                    </button>

                    <div className="flex-1 text-center">
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => {
                                    if (words.length > 0) {
                                        localStorage.setItem(`voca_learn_progress`, JSON.stringify({
                                            words,
                                            currentIndex,
                                            reviewPool
                                        }));
                                    }
                                    router.push('/homework/voca');
                                }}
                                className="inline-flex items-center gap-1 px-2 py-0.5 mb-1 rounded bg-emerald-900/30 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/50 transition-colors cursor-pointer active:scale-95"
                            >
                                <span className="text-[9px] font-black uppercase tracking-widest">SAVE & EXIT</span>
                            </button>
                            <h1 className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-0.5">
                                Step 2: Learn
                            </h1>
                        </div>
                        <span className="text-xs font-bold text-white">
                            Word {currentIndex + 1} <span className="text-slate-600 mx-1">/</span> {words.length}
                        </span>
                    </div>

                    <div className="w-12 md:w-auto">
                        {/* Placeholder for symmetry */}
                    </div>
                </div>
            </div>

            <div className="max-w-2xl mx-auto w-full p-4 md:p-8 flex-1">
                {/* Info Text */}
                <div className="mb-6 text-center">
                    <p className="text-slate-400 text-xs font-medium bg-slate-900/50 py-2 px-4 rounded-full border border-white/5 inline-block">
                        뜻을 확인하면(뒤집으면) 자동으로 복습 목록에 추가됩니다!
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-6 px-2 md:px-0">
                    <div className="flex justify-between text-[10px] uppercase font-black tracking-widest mb-2">
                        <span className="text-slate-500">Processing...</span>
                        <span className="text-white font-bold">
                            {currentIndex + 1} / {words.length}
                            {reviewPool.length > 0 && (
                                <span className="text-blue-400 ml-2">
                                    (복습 {reviewPool.length}개)
                                </span>
                            )}
                        </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-blue-500 to-violet-500 h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Card */}
                <div className="mb-6 md:mb-8">
                    <VocabularyCard
                        word={currentWord}
                        showBack={showBack}
                        onFlip={handleFlip}
                        clickable={true}
                    />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-1 gap-4">
                    {!hasPeeked ? (
                        <Button
                            onClick={handleMemorized}
                            className="h-20 text-xl font-black italic bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                        >
                            <CheckCircle className="w-6 h-6 mr-2" />
                            완벽히 외웠어요! (넘어가기)
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNextForcedReview}
                            className="h-20 text-xl font-black italic bg-slate-800 border-2 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white rounded-2xl active:scale-95 transition-all"
                        >
                            <ArrowRight className="w-6 h-6 mr-2" />
                            다음 단어 (자동 복습장 추가)
                        </Button>
                    )}
                </div>

                {/* Hint */}
                <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-xs text-center">
                        {!hasPeeked
                            ? "💡 카드를 뒤집는 순간 '복습 대상'이 됩니다. 신중하세요!"
                            : "💡 이미 뜻을 확인했습니다. 이 단어는 나중에 다시 나옵니다."}
                    </p>
                </div>
            </div>
        </div>
    );
}
