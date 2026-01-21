'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getWordsForLearning, updateWordStatus, updateSRSCard } from '@/services/vocabularyService';
import { VocabularyWord } from '@/services/vocabularyService';
import { CheckCircle, X, Clock, CheckCircle2 } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function TestPage() {
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [words, setWords] = useState<VocabularyWord[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3);
    const [timerActive, setTimerActive] = useState(false);
    const [results, setResults] = useState<boolean[]>([]);
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

            setUserId(user.userId);
            try {
                // Check local storage first
                const saved = localStorage.getItem('voca_test_progress');
                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (parsed.words && parsed.words.length > 0) {
                        setWords(parsed.words);
                        if (parsed.currentIndex) setCurrentIndex(parsed.currentIndex);
                        if (parsed.results) setResults(parsed.results);
                        setTimerActive(true);
                        // Clean up after loading to avoid stale resume loop if completed? 
                        // Or keep it until explicit finish.
                        localStorage.removeItem('voca_test_progress'); // Remove auto-resume on fresh load to prevent loop, unless we want strict resume. User wants resume. Maybe we should not remove?
                        // Actually, if we remove it here, refresh will lose it. 
                        // But if we finish test, we should remove it.
                        // Let's decide: Only remove on Finish.
                    } else {
                        // Load fresh
                        const wordsData = await getWordsForLearning(user.userId);
                        const testWords = wordsData.slice(0, Math.ceil(wordsData.length * 0.5));
                        setWords(testWords);
                        setTimerActive(true);
                    }
                } else {
                    // Load fresh
                    const wordsData = await getWordsForLearning(user.userId);
                    const testWords = wordsData.slice(0, Math.ceil(wordsData.length * 0.5));
                    setWords(testWords);
                    setTimerActive(true);
                }
            } catch (error) {
                console.error('Error loading words:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router]);

    // 3-second timer
    useEffect(() => {
        if (!timerActive || showResult) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            // Time's up - mark as wrong
            handleAnswer(-1);
        }
    }, [timeLeft, timerActive, showResult]);

    const generateChoices = (correctWord: VocabularyWord): string[] => {
        const choices = [correctWord.meaning];

        // Generate 3 random wrong answers from other words
        const otherWords = words.filter(w => w.id !== correctWord.id);
        const shuffled = [...otherWords].sort(() => Math.random() - 0.5);

        for (let i = 0; i < 3 && i < shuffled.length; i++) {
            choices.push(shuffled[i].meaning);
        }

        // Shuffle choices
        return choices.sort(() => Math.random() - 0.5);
    };

    const handleAnswer = async (choiceIndex: number) => {
        if (showResult || !userId) return;

        setTimerActive(false);
        setSelectedAnswer(choiceIndex);
        setShowResult(true);

        const currentWord = words[currentIndex];
        const choices = generateChoices(currentWord);
        const isCorrect = choiceIndex >= 0 && choices[choiceIndex] === currentWord.meaning;

        setResults([...results, isCorrect]);

        // Update word status and SRS
        if (isCorrect) {
            await updateWordStatus(userId, currentWord.id, 'mastered', true);
            await updateSRSCard(userId, currentWord.id, true);
        } else {
            await updateWordStatus(userId, currentWord.id, 'learning', false);
            await updateSRSCard(userId, currentWord.id, false);
        }
    };

    const moveToNext = () => {
        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedAnswer(null);
            setShowResult(false);
            setTimeLeft(3);
            setTimerActive(true);
        } else {
            // Test complete - show results
            const correctCount = results.filter(r => r).length;
            const passRate = (correctCount / words.length) * 100;

            if (passRate >= 80) {
                alert(`합격! (${passRate.toFixed(0)}%)`);
            } else {
                alert(`불합격 (${passRate.toFixed(0)}%) - 다시 학습하세요`);
            }

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
                        테스트할 단어가 없습니다
                    </h2>
                    <p className="text-slate-400 mb-6">
                        먼저 Learn 단계에서 단어를 학습해주세요.
                    </p>
                    <Button onClick={() => router.push('/homework/voca/learn')}>
                        Learn 단계로 가기
                    </Button>
                </div>
            </div>
        );
    }

    const currentWord = words[currentIndex];
    const choices = generateChoices(currentWord);
    const progress = ((currentIndex + 1) / words.length) * 100;
    const timerProgress = (timeLeft / 3) * 100;

    return (
        <div className="min-h-screen bg-slate-950 p-2 md:p-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-4 md:mb-8 text-center md:text-left flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-black text-white mb-2">
                            3단계: Test
                        </h1>
                        <p className="text-slate-400 text-sm">
                            3초 안에 정답을 선택하세요
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
                            className="text-xs border-violet-500/30 text-violet-400 hover:bg-violet-950 hover:text-white"
                            onClick={() => {
                                // Save & Exit
                                if (words.length > 0) {
                                    localStorage.setItem(`voca_test_progress`, JSON.stringify({
                                        words,
                                        currentIndex,
                                        results
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
                        </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-violet-500 to-pink-500 h-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {/* Timer */}
                {!showResult && (
                    <div className="mb-6 px-4 md:px-0">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <Clock className="w-5 h-5 text-rose-400" />
                            <span className="text-3xl font-black text-white">{timeLeft}</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                            <div
                                className={`h-full transition-all duration-1000 ${timeLeft === 3 ? 'bg-emerald-500' :
                                    timeLeft === 2 ? 'bg-yellow-500' : 'bg-rose-500'
                                    }`}
                                style={{ width: `${timerProgress}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <div className="bg-transparent md:bg-gradient-to-br md:from-violet-900 md:via-slate-900 md:to-slate-900 border-none md:border md:border-violet-500/30 p-2 md:p-8 mb-4 flex items-center justify-center min-h-[120px] md:min-h-0 text-center">
                    <h2 className={cn(
                        "font-black text-white px-4 break-words",
                        currentWord.word.length > 15 ? "text-2xl md:text-4xl" :
                            currentWord.word.length > 10 ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl"
                    )}>
                        {currentWord.word}
                    </h2>
                </div>

                {/* Choices */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                    {choices.map((choice, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrect = choice === currentWord.meaning;

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                disabled={showResult}
                                className={cn(
                                    "w-full p-6 text-left rounded-2xl border transition-all active:scale-95 flex items-center justify-between group",
                                    showResult && isCorrect ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" :
                                        showResult && isSelected && !isCorrect ? "bg-rose-500/20 border-rose-500/50 text-rose-400" :
                                            "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-600"
                                )}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <span className="font-bold">{choice}</span>
                                    {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                                    {showResult && isSelected && !isCorrect && <X className="w-5 h-5 text-rose-400" />}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Next Button */}
                {showResult && (
                    <Button
                        onClick={moveToNext}
                        className="w-full h-14 text-lg font-bold bg-violet-600 hover:bg-violet-500 text-white"
                    >
                        다음 문제
                    </Button>
                )}
            </div>
        </div>
    );
}
