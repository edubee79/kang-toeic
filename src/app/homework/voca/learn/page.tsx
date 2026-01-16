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

    useEffect(() => {
        const init = async () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.push('/login');
                return;
            }

            const user = JSON.parse(userData);
            setUserId(user.userId);

            try {
                const wordsData = await getWordsForLearning(user.userId);
                // Shuffle words (Fisher-Yates)
                const shuffled = [...wordsData].sort(() => Math.random() - 0.5);
                setWords(shuffled);
            } catch (error) {
                console.error('Error loading words:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router]);

    const handleMemorized = async () => {
        if (!userId) return;

        const currentWord = words[currentIndex];
        await updateWordStatus(userId, currentWord.id, 'learning', true);

        moveToNext();
    };

    const handleReview = () => {
        // Add to review pool
        setReviewPool([...reviewPool, currentIndex]);
        moveToNext();
    };

    const moveToNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (reviewPool.length > 0) {
            // Go back to review pool
            setCurrentIndex(reviewPool[0]);
            setReviewPool(reviewPool.slice(1));
        } else {
            // All words learned
            router.push('/homework/voca');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-slate-400 font-bold animate-pulse">로딩 중...</div>
            </div>
        );
    }

    if (words.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
                <div className="text-center">
                    <h2 className="text-2xl font-black text-white mb-4">
                        학습할 단어가 없습니다
                    </h2>
                    <p className="text-slate-400 mb-6">
                        먼저 Sort 단계에서 모르는 단어를 분류해주세요.
                    </p>
                    <Button onClick={() => router.push('/homework/voca/sort')}>
                        Sort 단계로 가기
                    </Button>
                </div>
            </div>
        );
    }

    const currentWord = words[currentIndex];
    const totalWords = words.length + reviewPool.length;
    const progress = ((words.length - currentIndex - 1 + words.length - reviewPool.length) / totalWords) * 100;

    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-4 md:mb-8 text-center md:text-left">
                    <h1 className="text-2xl md:text-3xl font-black text-white mb-2">
                        2단계: Learn
                    </h1>
                    <p className="text-slate-400 text-sm">
                        카드를 클릭해서 뒤집으며 단어를 암기하세요
                    </p>
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
                        showBack={false}
                    />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        onClick={handleReview}
                        variant="outline"
                        className="h-16 text-lg font-bold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        다시 볼게요
                    </Button>
                    <Button
                        onClick={handleMemorized}
                        className="h-16 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white"
                    >
                        <CheckCircle className="w-5 h-5 mr-2" />
                        외웠어요
                    </Button>
                </div>

                {/* Hint */}
                <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-xs text-center">
                        💡 카드를 클릭하여 앞뒤를 자유롭게 확인하세요
                    </p>
                </div>
            </div>
        </div>
    );
}
