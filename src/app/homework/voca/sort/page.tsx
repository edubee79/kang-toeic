'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { VocabularyCard } from '@/components/vocabulary/VocabularyCard';
import { getWordsForSorting, updateWordStatus } from '@/services/vocabularyService';
import { VocabularyWord } from '@/services/vocabularyService';
import { CheckCircle, X, ArrowRight } from 'lucide-react';

export default function SortPage() {
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [targetScore, setTargetScore] = useState<650 | 800 | 900 | null>(null);
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBack, setShowBack] = useState(false);
    const [step, setStep] = useState<'front' | 'confirm'>('front');
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

            // Extract target score from userClass (e.g., "800반" → 800)
            const classMatch = user.userClass?.match(/(\d+)반/);
            const score = classMatch ? parseInt(classMatch[1]) : 800;
            setTargetScore(score as 650 | 800 | 900);

            try {
                const wordsData = await getWordsForSorting(user.userId, score as 650 | 800 | 900, 40);
                setWords(wordsData);
            } catch (error) {
                console.error('Error loading words:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router]);

    const handleKnow = () => {
        setShowBack(true);
        setStep('confirm');
    };

    const handleReallyKnow = async () => {
        if (!userId) return;

        const currentWord = words[currentIndex];
        await updateWordStatus(userId, currentWord.id, 'mastered', true);

        moveToNext();
    };

    const handleDontKnow = async () => {
        if (!userId) return;

        const currentWord = words[currentIndex];
        await updateWordStatus(userId, currentWord.id, 'learning', false);

        moveToNext();
    };

    const moveToNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setShowBack(false);
            setStep('front');
        } else {
            // All words sorted
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
                        분류할 단어가 없습니다
                    </h2>
                    <p className="text-slate-400 mb-6">
                        모든 단어를 이미 분류했거나 새로운 단어가 없습니다.
                    </p>
                    <Button onClick={() => router.push('/homework/voca')}>
                        대시보드로 돌아가기
                    </Button>
                </div>
            </div>
        );
    }

    const currentWord = words[currentIndex];
    const progress = ((currentIndex + 1) / words.length) * 100;

    return (
        <div className="min-h-screen bg-slate-950 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-white mb-2">
                        1단계: Sort
                    </h1>
                    <p className="text-slate-400 text-sm">
                        아는 단어와 모르는 단어를 분류하세요
                    </p>
                </div>

                {/* Progress */}
                <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">진행률</span>
                        <span className="text-white font-bold">
                            {currentIndex + 1} / {words.length}
                        </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Card */}
                <div className="mb-8">
                    <VocabularyCard
                        word={currentWord}
                        showBack={showBack}
                    />
                </div>

                {/* Buttons */}
                {step === 'front' ? (
                    <div className="grid grid-cols-2 gap-4">
                        <Button
                            onClick={handleDontKnow}
                            variant="outline"
                            className="h-16 text-lg font-bold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                            <X className="w-5 h-5 mr-2" />
                            몰라요
                        </Button>
                        <Button
                            onClick={handleKnow}
                            className="h-16 text-lg font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
                        >
                            <CheckCircle className="w-5 h-5 mr-2" />
                            알아요
                        </Button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p className="text-center text-slate-400 text-sm mb-4">
                            정말 이 단어를 알고 있나요?
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                onClick={handleDontKnow}
                                variant="outline"
                                className="h-16 text-lg font-bold border-rose-700 text-rose-300 hover:bg-rose-900/20"
                            >
                                <X className="w-5 h-5 mr-2" />
                                몰라요
                            </Button>
                            <Button
                                onClick={handleReallyKnow}
                                className="h-16 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white"
                            >
                                <CheckCircle className="w-5 h-5 mr-2" />
                                진짜 알아요
                            </Button>
                        </div>
                    </div>
                )}

                {/* Hint */}
                <div className="mt-6 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
                    <p className="text-slate-400 text-xs text-center">
                        💡 정직하게 분류할수록 학습 효율이 높아집니다
                    </p>
                </div>
            </div>
        </div>
    );
}
