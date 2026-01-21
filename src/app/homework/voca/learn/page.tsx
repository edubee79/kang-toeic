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
            router.push('/homework/voca');
        }
    };

    // ... (loading / empty checks remain same)

    const currentWord = words[currentIndex];
    const totalWords = words.length + reviewPool.length;
    const progress = ((words.length - currentIndex - 1 + words.length - reviewPool.length) / totalWords) * 100;

    return (
        <div className="min-h-screen bg-slate-950 p-2 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-4 md:mb-8 text-center md:text-left flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white mb-2">
                            2단계: Learn
                        </h1>
                        <p className="text-slate-400 text-sm">
                            뜻을 확인하면(뒤집으면) 자동으로 복습 목록에 추가됩니다!
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 scale-90 origin-top-right">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-slate-500 hover:text-white"
                            onClick={() => router.back()}
                        >
                            ✕ Exit
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-xs border-blue-500/30 text-blue-400 hover:bg-blue-950 hover:text-white"
                            onClick={() => {
                                // Save & Exit
                                if (words.length > 0) {
                                    localStorage.setItem(`voca_learn_progress`, JSON.stringify({
                                        words,
                                        currentIndex,
                                        reviewPool
                                    }));
                                }
                                router.push('/homework/voca');
                            }}
                        >
                            💾 Save & Exit
                        </Button>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-6 px-2 md:px-0">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">진행률</span>
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
