'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VocabularyCard } from '@/components/vocabulary/VocabularyCard';
import {
    getWordsForDay,
    getDueReviews,
    updateWordStatus,
    updateSRSCard,
    VocabularyWord
} from '@/services/vocabularyService';
import {
    CheckCircle,
    X,
    ArrowLeft,
    Brain,
    Target,
    Clock,
    Trophy,
    AlertCircle,
    RefreshCw,
    Volume2,
    Headphones
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { StudyTogetherCard } from '@/components/vocabulary/StudyTogetherCard';

type Mode = 'loading' | 'sort' | 'learn' | 'test' | 'result' | 'listening';

export default function DayPage() {
    const params = useParams();
    const day = parseInt(params.day as string);
    const router = useRouter();

    // Data State
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [targetScore, setTargetScore] = useState<650 | 800 | 900 | null>(null);
    const [allWords, setAllWords] = useState<VocabularyWord[]>([]);

    // Flow State
    const [mode, setMode] = useState<Mode>('sort');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showBack, setShowBack] = useState(false);
    const [subStep, setSubStep] = useState<'front' | 'confirm'>('front');

    // Stage-specific Queues
    const [learningQueue, setLearningQueue] = useState<VocabularyWord[]>([]);
    const [testQueue, setTestQueue] = useState<VocabularyWord[]>([]);
    const [listeningQueue, setListeningQueue] = useState<VocabularyWord[]>([]);

    // Test State
    const [timeLeft, setTimeLeft] = useState(3);
    const [testScore, setTestScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [testOptions, setTestOptions] = useState<string[]>([]);
    const [results, setResults] = useState<boolean[]>([]);

    // Listening Feedback State
    const [listeningFeedback, setListeningFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [selectedListeningOption, setSelectedListeningOption] = useState<string | null>(null);

    // Initialization
    useEffect(() => {
        const init = async () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.push('/login');
                return;
            }

            const user = JSON.parse(userData);
            setUserId(user.userId);

            const classMatch = user.userClass?.match(/(\d+)반/);
            const score = classMatch ? parseInt(classMatch[1]) : 800;
            setTargetScore(score as 650 | 800 | 900);

            try {
                const [dailyWords, reviewWords] = await Promise.all([
                    getWordsForDay(user.userId, day, score as 650 | 800 | 900),
                    getDueReviews(user.userId)
                ]);

                // Merge: Reviews first, then Daily words.
                // Filter duplicates just in case a word is in both lists
                const dailyIds = new Set(dailyWords.map(w => w.id));
                const uniqueReviews = reviewWords.filter(w => !dailyIds.has(w.id));

                const combinedWords = [...uniqueReviews, ...dailyWords];

                // --- TEST MODE: 5 words for rapid verification ---
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('test') === 'true') {
                    setAllWords(combinedWords.slice(0, 5));
                } else {
                    setAllWords(combinedWords);
                }
            } catch (error) {
                console.error('Error loading words:', error);
            } finally {
                setLoading(false);
            }
        };

        init();
    }, [router, day]);

    // --- HELPERS ---

    const shuffle = <T,>(array: T[]): T[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const speak = (text: string, rate = 1.0) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = rate; // Adjustable rate
        window.speechSynthesis.speak(utter);
    };

    // --- SORT LOGIC ---

    const handleSortKnow = () => {
        setShowBack(true);
        setSubStep('confirm');
        speak(allWords[currentIndex].word);
    };

    const handleSortDontKnow = async () => {
        if (!allWords[currentIndex]) return;
        const currentWord = allWords[currentIndex];

        // 1. Optimistic Update (Local)
        setLearningQueue(prev => [...prev, currentWord]);

        // 2. Fire-and-forget DB update (Background)
        if (userId) {
            Promise.all([
                updateWordStatus(userId, currentWord.id, 'learning', false),
                updateSRSCard(userId, currentWord.id, false)
            ]).catch(error => {
                console.error("Failed to update word status in background:", error);
            });
        }

        // 3. Advance immediately
        advanceSort();
    };

    const handleReallyKnow = async () => {
        if (!allWords[currentIndex]) return;
        const currentWord = allWords[currentIndex];

        // Fire-and-forget DB update
        if (userId) {
            updateWordStatus(userId, currentWord.id, 'mastered', true)
                .catch(error => console.error("Failed to update status in background:", error));
        }

        advanceSort();
    };

    const advanceSort = () => {
        if (currentIndex < allWords.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowBack(false);
            setSubStep('front');
        } else {
            startLearning();
        }
    };

    const startLearning = () => {
        setMode('learn');
        setCurrentIndex(0);
        setShowBack(false);
        // Shuffle the words marked for learning
        setLearningQueue(prev => shuffle(prev));
    };

    // --- LEARN LOGIC ---

    const handleLearnMemorized = () => {
        window.speechSynthesis.cancel();
        if (currentIndex < learningQueue.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setShowBack(false);
        } else {
            startTest();
        }
    };

    const handleLearnRepeat = () => {
        window.speechSynthesis.cancel();
        const currentWord = learningQueue[currentIndex];

        if (!showBack) {
            // 1st click: reveal meaning and play audio
            speak(currentWord.word);
            setShowBack(true);
        } else {
            // 2nd click: move to end of queue and show next
            const newQueue = [...learningQueue.slice(0, currentIndex), ...learningQueue.slice(currentIndex + 1), currentWord];
            setLearningQueue(newQueue);
            setShowBack(false);
        }
    };

    const startTest = () => {
        // Generate test queue: shuffle all words and take 50%
        const shuffledAll = shuffle(allWords);
        const selected = shuffledAll.slice(0, Math.ceil(allWords.length * 0.5));
        setTestQueue(selected);
        setMode('test');
        setCurrentIndex(0);
        generateTestOptions(selected[0]);
        setTimeLeft(5);
    };

    // --- TEST LOGIC ---

    const generateTestOptions = useCallback((correctWord: VocabularyWord) => {
        const distractors = allWords
            .filter(w => w.id !== correctWord.id)
            .map(w => w.meaning);

        const shuffledDistractors = shuffle(distractors).slice(0, 3);
        const options = shuffle([correctWord.meaning, ...shuffledDistractors]);
        setTestOptions(options);
    }, [allWords]);

    useEffect(() => {
        if (mode !== 'test' || selectedAnswer !== null) return;

        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            handleTestAnswer(-1); // Time out
        }
    }, [mode, timeLeft, selectedAnswer]);

    const handleTestAnswer = async (index: number) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(index);
        const currentWord = testQueue[currentIndex];
        const isCorrect = index !== -1 && testOptions[index] === currentWord.meaning;

        if (isCorrect) setTestScore(prev => prev + 1);
        setResults(prev => [...prev, isCorrect]);

        if (userId) {
            await updateSRSCard(userId, currentWord.id, isCorrect);
        }

        setTimeout(() => {
            if (currentIndex < testQueue.length - 1) {
                const nextIdx = currentIndex + 1;
                setCurrentIndex(nextIdx);
                generateTestOptions(testQueue[nextIdx]);
                setSelectedAnswer(null);
                setTimeLeft(5);
            } else {
                setMode('result');
            }
        }, 1000);
    };

    // --- LISTENING CHALLENGE LOGIC ---

    // 1. Auto-play audio when word changes
    useEffect(() => {
        if (mode === 'listening' && listeningQueue[currentIndex] && !listeningFeedback) {
            speak(listeningQueue[currentIndex].word, 0.8); // 0.8x speed
        }
    }, [mode, currentIndex, listeningQueue, listeningFeedback]);

    // 2. Synchronously derive options (Fixes "Missing Answer" bug)
    const listeningOptions = useMemo(() => {
        if (mode !== 'listening') return [];
        const currentWord = listeningQueue[currentIndex];
        // Safety check: if allWords is empty or currentWord is missing
        if (!currentWord || allWords.length === 0) return [];

        // If by chance the current word isn't in allWords (data sync issue), 
        // fallback to using it directly + randoms.
        const distractors = allWords
            .filter(w => w.id !== currentWord.id)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(w => w.meaning);

        return [...distractors, currentWord.meaning].sort(() => 0.5 - Math.random());
    }, [mode, currentIndex, listeningQueue, allWords]);

    const submitListeningAnswer = (option: string) => {
        if (listeningFeedback !== null) return; // Prevent double clicks

        const currentWord = listeningQueue[currentIndex];
        if (!currentWord) return;

        setSelectedListeningOption(option);
        const isCorrect = option === currentWord.meaning;

        if (isCorrect) {
            setListeningFeedback('correct');
            // Play Ding (Placeholder or nothing, simple visual is enough as requested)
            // Or use a synthesized "Correct!"

            setTimeout(() => {
                const newQueue = [...listeningQueue];
                newQueue.splice(currentIndex, 1);

                setListeningQueue(newQueue);
                setListeningFeedback(null);
                setSelectedListeningOption(null);

                if (newQueue.length === 0) {
                    setTestScore(testQueue.length);
                    setMode('result');
                }
            }, 1000); // 1s delay for correct
        } else {
            setListeningFeedback('incorrect');
            speak(currentWord.word, 0.6); // Replay very slowly

            setTimeout(() => {
                const newQueue = [...listeningQueue];
                const [wrongItem] = newQueue.splice(currentIndex, 1);
                newQueue.push(wrongItem); // Move to end

                setListeningQueue(newQueue);
                setListeningFeedback(null);
                setSelectedListeningOption(null);
            }, 2500); // 2.5s delay for incorrect
        }
    };

    // --- RENDERERS ---

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-center space-y-6">
                    <div className="relative">
                        <div className="w-20 h-20 mx-auto">
                            <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-white font-black text-xl italic tracking-tight">Loading...</div>
                        <div className="text-slate-500 font-medium text-sm">단어를 불러오는 중입니다</div>
                    </div>
                </div>
            </div>
        );
    }

    // 1. SORT MODE
    if (mode === 'sort') {
        const currentWord = allWords[currentIndex];
        if (!currentWord) return null;

        const progress = ((currentIndex + 1) / allWords.length) * 100;

        return (
            <div className="min-h-screen bg-slate-950 p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-slate-500 font-bold tracking-tighter italic">SORTING</span>
                        <span className="text-white font-black italic">{currentIndex + 1} / {allWords.length}</span>
                    </div>

                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-12">
                        <div
                            className="h-full bg-indigo-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Flashcard */}
                    <div className="flex-1 flex flex-col justify-center mb-12">
                        <VocabularyCard
                            word={currentWord}
                            showBack={showBack}
                            onFlip={handleSortKnow}
                            clickable={false}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {subStep === 'front' ? (
                            <>
                                <Button
                                    onClick={handleSortDontKnow}
                                    variant="outline"
                                    className="h-20 rounded-3xl border-2 border-slate-800 bg-slate-900/50 text-rose-500 font-black text-xl italic hover:bg-rose-500/10 hover:border-rose-500/50 transition-all"
                                >
                                    <X className="w-6 h-6 mr-2" /> 몰라요
                                </Button>
                                <Button
                                    onClick={handleSortKnow}
                                    className="h-20 rounded-3xl bg-indigo-600 text-white font-black text-xl italic hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 active:scale-95 transition-all"
                                >
                                    <CheckCircle className="w-6 h-6 mr-2" /> 알아요
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={handleSortDontKnow}
                                    variant="outline"
                                    className="h-20 rounded-3xl border-2 border-slate-800 bg-slate-900/50 text-rose-500 font-black text-xl italic hover:bg-rose-500/10"
                                >
                                    <X className="w-6 h-6 mr-2" /> 몰라요
                                </Button>
                                <Button
                                    onClick={handleReallyKnow}
                                    className="h-20 rounded-3xl bg-emerald-600 text-white font-black text-xl italic hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all"
                                >
                                    <CheckCircle className="w-6 h-6 mr-2" /> 진짜 알아요
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // 2. LEARN MODE
    if (mode === 'learn') {
        if (learningQueue.length === 0) {
            // If no words were marked unknown, skip to test
            setTimeout(startTest, 0);
            return null;
        }

        const currentWord = learningQueue[currentIndex];

        return (
            <div className="min-h-screen bg-slate-950 p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-amber-500 font-bold tracking-tighter italic">LEARNING</span>
                        <span className="text-white font-black italic">{currentIndex + 1} / {learningQueue.length}</span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center mb-12 space-y-4">
                        <VocabularyCard
                            word={currentWord}
                            showBack={showBack}
                            onFlip={() => { }}
                            clickable={false}
                        />

                        {/* 2차 모르는 단어 (Study Together) */}
                        {showBack && (
                            <StudyTogetherCard
                                word={currentWord}
                                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                            />
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <Button
                            onClick={handleLearnRepeat}
                            variant="outline"
                            className="h-20 rounded-3xl border-2 border-slate-800 bg-slate-900/50 text-amber-500 font-black text-xl italic hover:bg-amber-500/10 transition-all"
                        >
                            <RefreshCw className="w-6 h-6 mr-2" /> 몰라요
                        </Button>
                        <Button
                            onClick={handleLearnMemorized}
                            className="h-20 rounded-3xl bg-indigo-600 text-white font-black text-xl italic hover:bg-indigo-500 transition-all"
                        >
                            <CheckCircle className="w-6 h-6 mr-2" /> 진짜 외웠어요
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    // 3. TEST MODE
    if (mode === 'test') {
        const currentWord = testQueue[currentIndex];
        const progress = ((currentIndex + 1) / testQueue.length) * 100;

        return (
            <div className="min-h-screen bg-slate-950 p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-violet-500 font-bold tracking-tighter italic">FINAL TEST</span>
                        <span className="text-white font-black italic">{currentIndex + 1} / {testQueue.length}</span>
                    </div>

                    {/* Timer bar */}
                    <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-12 flex items-center">
                        <div
                            className={cn(
                                "h-full transition-all duration-1000",
                                timeLeft > 2 ? "bg-emerald-500" : timeLeft > 1 ? "bg-amber-500" : "bg-rose-500"
                            )}
                            style={{ width: `${(timeLeft / 5) * 100}%` }}
                        />
                    </div>

                    <Card className="bg-slate-900 border-2 border-slate-800 p-8 rounded-[2.5rem] mb-12 shadow-2xl">
                        <div className="text-center mb-4">
                            <Clock className={cn(
                                "w-8 h-8 mx-auto mb-4",
                                timeLeft <= 1 ? "text-rose-500 animate-pulse" : "text-slate-600"
                            )} />
                            <h2 className="text-5xl font-black text-white italic tracking-tight">{currentWord.word}</h2>
                        </div>
                    </Card>

                    <div className="space-y-4 mb-8">
                        {testOptions.map((option, idx) => {
                            const isSelected = selectedAnswer === idx;
                            const isCorrect = option === currentWord.meaning;

                            let btnClass = "bg-slate-900 border-2 border-slate-800 text-slate-300 hover:border-violet-500/50";
                            if (selectedAnswer !== null) {
                                if (isCorrect) btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-400";
                                else if (isSelected) btnClass = "bg-rose-500/20 border-rose-500 text-rose-400";
                                else btnClass = "bg-slate-900/50 border-slate-800 text-slate-600";
                            }

                            return (
                                <Button
                                    key={idx}
                                    onClick={() => handleTestAnswer(idx)}
                                    disabled={selectedAnswer !== null}
                                    className={cn(
                                        "w-full h-16 rounded-2xl font-bold text-lg transition-all",
                                        btnClass
                                    )}
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }

    // 5. LISTENING CHALLENGE MODE
    if (mode === 'listening') {
        const currentWord = listeningQueue[currentIndex];

        const handleListeningAnswer = (selectedMeaning: string) => {
            const isCorrect = selectedMeaning === currentWord.meaning;

            if (isCorrect) {
                // Correct: Play Ding, Remove from queue (effectively) by advancing index,
                // BUT since we splice or filter, managing index is tricky.
                // Simpler: Just move index, but if filtered, queue shrinks?
                // No, let's keep array static but skip "mastered"?
                // Standard approach:
                // If correct -> Advance index.
                // If incorrect -> Push to back of queue.

                // Visual feedback? Maybe just sound and next.
                // User requirement: "Ding + Mastered + Next"
                const audio = new Audio('/sounds/ding.mp3'); // Placeholder, or use speech
                // For now, let's just advance.

                // If we want to remove it from "to do", we can just slice it out?
                // Or just increment index.
                // Wait, if incorrect -> push to back. This implies Queue mutation.

                if (currentIndex >= listeningQueue.length - 1) {
                    // End of current queue scan.
                    // But if words were pushed to back, length increased?
                    // Let's use a dynamic queue approach.
                    // On Correct: Remove from queue.
                    // On Incorrect: Move to back.
                }
            }
        };

        // Re-implementing handleListeningAnswer with Queue mutation logic:
        const submitAnswer = (option: string) => {
            if (!currentWord) return;

            const isCorrect = option === currentWord.meaning;

            if (isCorrect) {
                // Correct!
                // Mark as mastered (locally only needed for this session)
                // Remove from queue
                const newQueue = [...listeningQueue];
                newQueue.splice(currentIndex, 1);

                setListeningQueue(newQueue);
                // Index stays 0 if we remove the top item?
                // Or if we remove current, the next item slides into current index.
                // So currentIndex stays same, unless queue becomes empty.

                if (newQueue.length === 0) {
                    // Success!
                    // Show 100% score for "Mission Complete" effect
                    setTestScore(testQueue.length);
                    setMode('result');
                }
            } else {
                // Incorrect!
                // Push to back
                speak(currentWord.word); // Replay sound
                const newQueue = [...listeningQueue];
                const [wrongItem] = newQueue.splice(currentIndex, 1);
                newQueue.push(wrongItem); // Move to end
                setListeningQueue(newQueue);
                // Index stays same (next new word comes to slot 0)
            }
        };

        return (
            <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center justify-center">
                <div className="max-w-md mx-auto w-full space-y-8">
                    <div className="flex justify-between items-center mb-4">
                        <Button variant="ghost" className="text-slate-400" onClick={() => setMode('result')}>
                            <X className="w-6 h-6" /> QUIT
                        </Button>
                        <div className="flex items-center gap-2 text-indigo-400 font-bold">
                            <Headphones className="w-5 h-5 animate-pulse" />
                            <span>LISTENING CHALLENGE: {listeningQueue.length} LEFT</span>
                        </div>
                    </div>

                    <Card className="bg-slate-900 border-2 border-indigo-500/30 p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center min-h-[300px] cursor-pointer" onClick={() => speak(currentWord?.word || '')}>
                        <div className="bg-indigo-500/20 p-6 rounded-full mb-6 animate-bounce">
                            <Volume2 className="w-16 h-16 text-indigo-400" />
                        </div>
                        <p className="text-slate-500 font-medium text-sm animate-pulse">Touch to replay audio</p>
                    </Card>

                    <div className="grid grid-cols-1 gap-3">
                        {listeningOptions.map((option, idx) => {
                            let btnClass = "bg-slate-900 border-2 border-slate-800 text-slate-300 hover:border-indigo-500 hover:text-indigo-400 hover:bg-slate-800";

                            if (listeningFeedback) {
                                const isSelected = option === selectedListeningOption;
                                const isActualCorrect = option === currentWord.meaning;

                                if (isActualCorrect) {
                                    btnClass = "bg-emerald-500/20 border-emerald-500 text-emerald-400"; // Always show correct answer
                                } else if (isSelected && !isActualCorrect) {
                                    btnClass = "bg-rose-500/20 border-rose-500 text-rose-400"; // Mark selected wrong answer
                                } else {
                                    btnClass = "bg-slate-900/50 border-slate-800 text-slate-600 opacity-50"; // Dim others
                                }
                            }

                            return (
                                <Button
                                    key={idx}
                                    onClick={() => submitListeningAnswer(option)}
                                    disabled={listeningFeedback !== null}
                                    className={cn(
                                        "w-full h-16 rounded-2xl text-lg font-bold transition-all",
                                        btnClass
                                    )}
                                >
                                    {option}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    if (mode === 'result') {
        const total = testQueue.length;
        const percentage = Math.round((testScore / total) * 100);
        const passed = percentage >= 80;

        return (
            <div className="min-h-screen bg-slate-950 p-6 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full text-center space-y-8">
                    <div className={cn(
                        "w-32 h-32 rounded-[2.5rem] mx-auto flex items-center justify-center shadow-2xl transform rotate-6",
                        passed ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    )}>
                        {passed ? <Trophy className="w-16 h-16" /> : <AlertCircle className="w-16 h-16" />}
                    </div>

                    <div>
                        <h1 className="text-5xl font-black text-white italic tracking-tighter mb-2">
                            {passed ? "SUCCESS!" : "TRY AGAIN"}
                        </h1>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                            {passed ? "Perfectly mastered today's mission" : "A bit more practice needed"}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                            <div className="text-xs font-bold text-slate-500 mb-1 uppercase">Accuracy</div>
                            <div className="text-3xl font-black text-white italic">{percentage}%</div>
                        </div>
                        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
                            <div className="text-xs font-bold text-slate-500 mb-1 uppercase">Score</div>
                            <div className="text-3xl font-black text-white italic">{testScore} / {total}</div>
                        </div>
                    </div>

                    {/* Auto-save Trigger */}
                    <SaveResultEffect
                        testScore={testScore}
                        total={total}
                        day={day}
                        userId={userId}
                    />

                    <div className="space-y-4">
                        {!passed && (
                            <Button
                                onClick={() => {
                                    // 1. Identification Strategy
                                    // We need to find words that were answered INCORRECTLY.
                                    // 'results' array tracks boolean success/fail for each index in testQueue.

                                    const failedIndices = results
                                        .map((r, i) => r === false ? i : -1)
                                        .filter(i => i !== -1);

                                    let retryList = failedIndices.map(i => testQueue[i]);

                                    // Fallback: If for some reason the list is empty (but we failed?), 
                                    // just take the whole testQueue to be safe (retry all).
                                    if (retryList.length === 0 && testQueue.length > 0) {
                                        retryList = [...testQueue];
                                    }

                                    if (retryList.length > 0) {
                                        setListeningQueue(shuffle(retryList));
                                        setMode('listening');
                                        setCurrentIndex(0);
                                    } else {
                                        // Should not happen if passed=false, but safety valve
                                        setMode('sort');
                                        setCurrentIndex(0);
                                    }

                                    setResults([]);
                                    setTestScore(0);
                                }}
                                className="w-full h-16 bg-amber-500 text-slate-900 font-black text-xl italic rounded-2xl hover:bg-amber-400"
                            >
                                <Headphones className="w-6 h-6 mr-2" /> RESTART MISSION (Listening)
                            </Button>
                        )}
                        <Button
                            onClick={() => router.push('/homework/voca')}
                            variant="outline"
                            className="w-full h-16 border-2 border-slate-800 bg-transparent text-slate-400 font-black text-xl italic rounded-2xl hover:text-white"
                        >
                            DASHBOARD
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

// Side-effect component to handle saving
function SaveResultEffect({ testScore, total, day, userId }: { testScore: number, total: number, day: number, userId: string | null }) {
    useEffect(() => {
        const save = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (userStr && userId) {
                const user = JSON.parse(userStr);
                // Only save if passed? The user said "all homework... upon completion".
                // Even fail records might be useful, but let's stick to completing the flow.
                // Assuming reaching 'result' screen means "completed" (pass or fail).
                try {
                    await addDoc(collection(db, "Manager_Results"), {
                        student: user.userName || user.username || user.name,
                        studentId: userId,
                        className: user.userClass || user.className || "Unknown",
                        unit: `Voca_Day${day}`,
                        score: testScore,
                        total: total,
                        wrongCount: total - testScore,
                        timestamp: serverTimestamp(),
                        type: 'voca',
                        detail: `Day ${day}`
                    });
                    console.log("Voca Saved");
                } catch (e) {
                    console.error("Failed to save voca result", e);
                }
            }
        };
        save();
    }, []); // Run once on mount
    return null;
}
