'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
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
    ArrowRight,
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
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/student/home';

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
    const [studyMode, setStudyMode] = useState<'basic' | 'advanced'>('advanced');

    // Stage-specific Queues
    const [learningQueue, setLearningQueue] = useState<VocabularyWord[]>([]);
    const [testQueue, setTestQueue] = useState<VocabularyWord[]>([]);
    const [listeningQueue, setListeningQueue] = useState<VocabularyWord[]>([]);
    const [pendingReviews, setPendingReviews] = useState<VocabularyWord[]>([]);

    // Test State
    const [timeLeft, setTimeLeft] = useState(10);
    const [testScore, setTestScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [testOptions, setTestOptions] = useState<string[]>([]);
    const [results, setResults] = useState<boolean[]>([]);
    const [testType, setTestType] = useState<'meaning' | 'collocation' | 'example_fill'>('meaning');
    const [colloQuestion, setColloQuestion] = useState<{ en: string; ko?: string } | null>(null);

    // Listening Feedback State
    const [listeningFeedback, setListeningFeedback] = useState<'correct' | 'incorrect' | null>(null);
    const [selectedListeningOption, setSelectedListeningOption] = useState<string | null>(null);

    // Save Logic
    const handleSaveAndExit = useCallback(() => {
        if (!userId) return;
        const progress = {
            mode,
            currentIndex,
            allWords,
            learningQueue,
            testQueue,
            listeningQueue,
            pendingReviews,
            results,
            testScore,
            subStep,
            showBack,
            timestamp: Date.now()
        };
        localStorage.setItem(`voca_day_progress_${userId}_${day}`, JSON.stringify(progress));
        router.push(fromPath);
    }, [userId, day, mode, currentIndex, allWords, learningQueue, testQueue, listeningQueue, pendingReviews, results, testScore, subStep, showBack, router, fromPath]);

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
                // 1. Check for saved progress first
                const savedKey = `voca_day_progress_${user.userId}_${day}`;
                const saved = localStorage.getItem(savedKey);
                if (saved) {
                    const parsed = JSON.parse(saved);
                    // Check if data exists and is valid
                    if (parsed.allWords && parsed.allWords.length > 0) {
                        setAllWords(parsed.allWords);
                        setMode(parsed.mode || 'sort');
                        setCurrentIndex(parsed.currentIndex || 0);
                        setLearningQueue(parsed.learningQueue || []);
                        setTestQueue(parsed.testQueue || []);
                        setListeningQueue(parsed.listeningQueue || []);
                        setResults(parsed.results || []);
                        setTestScore(parsed.testScore || 0);
                        setSubStep(parsed.subStep || 'front');
                        setShowBack(parsed.showBack || false);
                        setLoading(false);
                        return;
                    }
                }

                // 2. Normal Fetching
                const [dailyWords, reviewWords] = await Promise.all([
                    getWordsForDay(user.userId, day, score as 650 | 800 | 900),
                    getDueReviews(user.userId, 40) // Limit to 40 for optimal balance
                ]);

                // Phase 1 (Sorting) ONLY uses Daily words
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('test') === 'true') {
                    setAllWords(dailyWords.slice(0, 5));
                } else {
                    setAllWords(dailyWords);
                }

                // Store reviews to be merged in Phase 2
                setPendingReviews(reviewWords);
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

    const speak = (text: string) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-US';
        utter.rate = 0.85;
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

        // Merge "Don't know" words from today + SRS Pending Reviews
        setLearningQueue(prev => {
            // Deduplicate if any overlap (though rare due to logic)
            const currentIds = new Set(prev.map(w => w.id));
            const filteredReviews = pendingReviews.filter(w => !currentIds.has(w.id));
            return shuffle([...prev, ...filteredReviews]);
        });
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
        generateTestOptions(selected[0], 0);
        setTimeLeft(8); // Start with 8s for Part 1
    };

    // --- TEST LOGIC ---

    const generateTestOptions = useCallback((correctWord: VocabularyWord, index: number) => {
        const rand = Math.random();

        // 1. Determine Test Type based on Part
        let type: 'meaning' | 'collocation' | 'example_fill' = 'meaning';

        if (index >= 20) {
            // Part 2: Advanced Contextual (Example or Collocation)
            if (correctWord.collocations && correctWord.collocations.length > 0 && rand > 0.5) {
                type = 'collocation';
            } else if (correctWord.example) {
                type = 'example_fill';
            } else {
                // Fallback if no example data
                type = 'meaning';
            }
        } else {
            // Part 1: Basic Meaning Match
            type = 'meaning';
        }

        setTestType(type);

        // 2. Helper to get POS-matched distractors
        const getDistractors = (count: number, field: 'word' | 'meaning') => {
            // Try to find words with same POS first
            let candidates = allWords.filter(w =>
                w.id !== correctWord.id &&
                w.word.toLowerCase() !== correctWord.word.toLowerCase()
            );

            const samePos = candidates.filter(w => w.pos === correctWord.pos);

            // If we have enough same-POS words, use them. Otherwise fallback.
            const source = samePos.length >= count ? samePos : candidates;

            return shuffle(source)
                .slice(0, count)
                .map(w => w[field]);
        };

        // 3. Generate content based on type
        if (type === 'collocation') {
            const collo = correctWord.collocations![Math.floor(Math.random() * correctWord.collocations!.length)];
            const blankedEn = collo.en.replace(new RegExp(correctWord.word, 'gi'), ' ____ ');
            setColloQuestion({ en: blankedEn, ko: collo.ko });

            const distractors = getDistractors(3, 'word');
            setTestOptions(shuffle([correctWord.word, ...distractors]));
        }
        else if (type === 'example_fill') {
            const blankedEn = correctWord.example.replace(new RegExp(correctWord.word, 'gi'), ' ____ ');
            setColloQuestion({ en: blankedEn, ko: correctWord.exampleKo });

            const distractors = getDistractors(3, 'word');
            setTestOptions(shuffle([correctWord.word, ...distractors]));
        }
        else {
            // Meaning Match
            setColloQuestion(null);
            const distractors = getDistractors(3, 'meaning');
            setTestOptions(shuffle([correctWord.meaning, ...distractors]));
        }
    }, [allWords]); // removed studyMode as we use index now

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

        // Validation changes based on type
        const isCorrect = index !== -1 && (
            testType === 'meaning'
                ? testOptions[index] === currentWord.meaning
                : testOptions[index] === currentWord.word
        );

        if (isCorrect) setTestScore(prev => prev + 1);
        setResults(prev => [...prev, isCorrect]);

        if (userId) {
            await updateSRSCard(userId, currentWord.id, isCorrect);
        }

        setTimeout(() => {
            if (currentIndex < testQueue.length - 1) {
                const nextIdx = currentIndex + 1;
                setCurrentIndex(nextIdx);
                generateTestOptions(testQueue[nextIdx], nextIdx);
                setSelectedAnswer(null);

                // Dynamic Time: Part 1 (0-19) -> 8s, Part 2 (20-39) -> 20s
                setTimeLeft(nextIdx >= 20 ? 20 : 8);
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
            <div className="min-h-screen bg-slate-950 p-3 md:p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-end mb-2 px-1">
                        <div className="flex flex-col">
                            <span className="text-indigo-400 font-bold tracking-widest italic text-[10px] md:text-sm">SORTING</span>
                            <div className="flex gap-2 items-center mt-1">
                                <button
                                    onClick={handleSaveAndExit}
                                    className="text-[9px] font-black text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-all w-fit"
                                >
                                    SAVE & EXIT
                                </button>
                                <button
                                    onClick={() => setStudyMode(prev => prev === 'basic' ? 'advanced' : 'basic')}
                                    className={cn(
                                        "text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded border transition-all",
                                        studyMode === 'advanced'
                                            ? "bg-indigo-500/20 text-indigo-400 border-indigo-500/30"
                                            : "bg-slate-800 text-slate-400 border-slate-700"
                                    )}
                                >
                                    {studyMode === 'advanced' ? 'ADVANCED MODE' : 'BASIC MODE'}
                                </button>
                            </div>
                        </div>
                        <span className="text-slate-500 font-bold italic text-sm md:text-lg leading-none">
                            <span className="text-white font-black">{currentIndex + 1}</span>
                            <span className="mx-1 opacity-50">/</span>
                            {allWords.length}
                        </span>
                    </div>

                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-3 md:mb-12">
                        <div
                            className="h-full bg-indigo-500 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Flashcard */}
                    <div className="mt-4 mb-8 max-w-[340px] mx-auto w-full">
                        <VocabularyCard
                            word={currentWord}
                            showBack={showBack}
                            onFlip={handleSortKnow}
                            clickable={false}
                            studyMode={studyMode}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {subStep === 'front' ? (
                            <>
                                <Button
                                    onClick={handleSortDontKnow}
                                    variant="outline"
                                    className="h-14 md:h-20 rounded-2xl md:rounded-3xl border-2 border-slate-800 bg-slate-900/50 text-rose-500 font-black text-lg md:text-xl italic hover:bg-rose-500/10 hover:border-rose-500/50 transition-all"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 몰라요
                                </Button>
                                <Button
                                    onClick={handleSortKnow}
                                    className="h-14 md:h-20 rounded-2xl md:rounded-3xl bg-indigo-600 text-white font-black text-lg md:text-xl italic hover:bg-indigo-500 shadow-xl shadow-indigo-600/20 active:scale-95 transition-all"
                                >
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 알아요
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    onClick={handleSortDontKnow}
                                    variant="outline"
                                    className="h-14 md:h-20 rounded-2xl md:rounded-3xl border-2 border-slate-800 bg-slate-900/50 text-rose-500 font-black text-lg md:text-xl italic hover:bg-rose-500/10"
                                >
                                    <X className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 몰라요
                                </Button>
                                <Button
                                    onClick={handleReallyKnow}
                                    className="h-14 md:h-20 rounded-2xl md:rounded-3xl bg-emerald-600 text-white font-black text-lg md:text-xl italic hover:bg-emerald-500 shadow-xl shadow-emerald-600/20 active:scale-95 transition-all"
                                >
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 진짜 알아요
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
            <div className="min-h-screen bg-slate-950 p-3 md:p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    <div className="flex justify-between items-end mb-2">
                        <div className="flex flex-col">
                            <span className="text-amber-500 font-bold tracking-widest italic text-[10px] md:text-sm">LEARNING</span>
                            <div className="flex gap-2 items-center mt-1">
                                <button
                                    onClick={handleSaveAndExit}
                                    className="text-[9px] font-black text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-all w-fit"
                                >
                                    SAVE & EXIT
                                </button>
                                <button
                                    onClick={() => setStudyMode(prev => prev === 'basic' ? 'advanced' : 'basic')}
                                    className={cn(
                                        "text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded border transition-all",
                                        studyMode === 'advanced'
                                            ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                                            : "bg-slate-800 text-slate-400 border-slate-700"
                                    )}
                                >
                                    {studyMode === 'advanced' ? 'ADVANCED MODE' : 'BASIC MODE'}
                                </button>
                            </div>
                        </div>
                        <span className="text-slate-500 font-bold italic text-sm md:text-lg leading-none">
                            <span className="text-white font-black">{currentIndex + 1}</span>
                            <span className="mx-1 opacity-50">/</span>
                            {learningQueue.length}
                        </span>
                    </div>

                    <div className="mt-4 mb-8 max-w-[340px] mx-auto w-full space-y-4">
                        <VocabularyCard
                            word={currentWord}
                            showBack={showBack}
                            onFlip={() => {
                                const nextState = !showBack;
                                setShowBack(nextState);
                                if (nextState) {
                                    speak(currentWord.word);
                                }
                            }}
                            clickable={true}
                            studyMode={studyMode}
                        />
                    </div>

                    <div className="mb-6">
                        <Button
                            onClick={handleLearnMemorized}
                            className={cn(
                                "w-full h-14 md:h-20 rounded-2xl md:rounded-3xl text-white font-black text-lg md:text-xl italic transition-all shadow-xl active:scale-95",
                                showBack
                                    ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-600/20"
                                    : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
                            )}
                        >
                            {showBack ? (
                                <>
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 다음 (Next)
                                </>
                            ) : (
                                <>
                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> 외웠어요
                                </>
                            )}
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
            <div className="min-h-screen bg-slate-950 p-3 md:p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full flex-1 flex flex-col">
                    <div className="flex justify-between items-end mb-2 px-1">
                        <div className="flex flex-col">
                            <span className="text-violet-500 font-bold tracking-widest italic text-[10px] md:text-sm">FINAL TEST</span>
                            <button
                                onClick={handleSaveAndExit}
                                className="text-[9px] font-black text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-all w-fit mt-0.5"
                            >
                                SAVE & EXIT
                            </button>
                        </div>
                        <span className="text-slate-500 font-bold italic text-sm md:text-lg leading-none">
                            <span className="text-white font-black">{currentIndex + 1}</span>
                            <span className="mx-1 opacity-50">/</span>
                            {testQueue.length}
                        </span>
                    </div>

                    {/* Timer bar */}
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-3 md:mb-12 flex items-center">
                        <div
                            className={cn(
                                "h-full transition-all duration-1000",
                                currentIndex >= 20 ? (timeLeft > 10 ? "bg-emerald-500" : timeLeft > 5 ? "bg-amber-500" : "bg-rose-500") :
                                    (timeLeft > 5 ? "bg-emerald-500" : timeLeft > 2 ? "bg-amber-500" : "bg-rose-500")
                            )}
                            style={{ width: `${(timeLeft / (currentIndex >= 20 ? 20 : 8)) * 100}%` }}
                        />
                    </div>

                    <Card className="bg-slate-900 border-2 border-slate-800 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] mb-3 md:mb-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-3 right-4">
                            <Clock className={cn(
                                "w-4 h-4 md:w-8 md:h-8",
                                timeLeft <= 1 ? "text-rose-500 animate-pulse" : "text-slate-700"
                            )} />
                        </div>
                        <div className="text-center space-y-4">
                            {testType === 'meaning' ? (
                                <h2 className="text-2xl md:text-5xl font-black text-white italic tracking-tight">{currentWord.word}</h2>
                            ) : (
                                <div className="space-y-4">
                                    <div className="bg-slate-950/80 p-4 md:p-6 rounded-2xl border border-white/5 shadow-inner">
                                        <h2 className="text-xl md:text-3xl font-black text-white italic tracking-tight leading-relaxed">
                                            "{colloQuestion?.en}"
                                        </h2>
                                    </div>
                                    {colloQuestion?.ko && (
                                        <div className="bg-indigo-500/10 py-2 px-4 rounded-xl border border-indigo-500/20">
                                            <p className="text-indigo-300 text-xs md:text-base font-bold italic">{colloQuestion.ko}</p>
                                        </div>
                                    )}
                                    <p className="text-[10px] md:text-xs text-slate-500 font-black uppercase tracking-widest">Select the word for the blank</p>
                                </div>
                            )}
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
                                        "w-full h-12 md:h-16 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all",
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
            <div className="min-h-screen bg-slate-950 p-3 md:p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full space-y-2 md:space-y-6">
                    <div className="flex justify-between items-end mb-2 px-1">
                        <div className="flex flex-col gap-1">
                            <Button variant="ghost" className="text-slate-500 p-0 h-auto w-fit hover:text-white text-[10px] md:text-xs font-bold" onClick={() => setMode('result')}>
                                <X className="w-3 h-3 md:w-4 md:h-4 mr-1" /> QUIT
                            </Button>
                            <button
                                onClick={handleSaveAndExit}
                                className="text-[9px] md:text-[10px] font-black text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 px-1.5 md:px-2 py-0.5 rounded border border-emerald-500/20 hover:bg-emerald-500/20 transition-all w-fit mt-0.5 leading-none"
                            >
                                SAVE & EXIT
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs md:text-base">
                            <Headphones className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                            <span>LISTENING: {listeningQueue.length} LEFT</span>
                        </div>
                    </div>

                    <Card className="bg-slate-900 border-2 border-indigo-500/30 p-6 md:p-12 rounded-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center min-h-[160px] md:min-h-[300px] cursor-pointer" onClick={() => speak(currentWord?.word || '')}>
                        <div className="bg-indigo-500/20 p-3 md:p-6 rounded-full mb-2 md:mb-6 animate-bounce">
                            <Volume2 className="w-8 h-8 md:w-16 md:h-16 text-indigo-400" />
                        </div>
                        <p className="text-slate-500 font-bold text-[9px] md:text-sm animate-pulse uppercase tracking-widest">Touch to replay</p>
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
                                        "w-full h-12 md:h-16 rounded-xl md:rounded-2xl text-base md:text-lg font-bold transition-all",
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
            <div className="min-h-screen bg-slate-950 p-3 md:p-6 flex flex-col">
                <div className="max-w-md mx-auto w-full text-center space-y-3 md:space-y-6">
                    <div className={cn(
                        "w-24 h-24 md:w-32 md:h-32 rounded-3xl md:rounded-[2.5rem] mx-auto flex items-center justify-center shadow-2xl transform rotate-6",
                        passed ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    )}>
                        {passed ? <Trophy className="w-12 h-12 md:w-16 md:h-16" /> : <AlertCircle className="w-12 h-12 md:w-16 md:h-16" />}
                    </div>

                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter mb-1 md:mb-2 leading-none">
                            {passed ? "SUCCESS!" : "TRY AGAIN"}
                        </h1>
                        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                            {passed ? "Mission Complete" : "More practice needed"}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div className="bg-slate-900 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-800">
                            <div className="text-[10px] md:text-xs font-bold text-slate-500 mb-0.5 md:mb-1 uppercase tracking-wider">Accuracy</div>
                            <div className="text-2xl md:text-3xl font-black text-white italic leading-none">{percentage}%</div>
                        </div>
                        <div className="bg-slate-900 p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-800">
                            <div className="text-[10px] md:text-xs font-bold text-slate-500 mb-0.5 md:mb-1 uppercase tracking-wider">Score</div>
                            <div className="text-2xl md:text-3xl font-black text-white italic leading-none">{testScore} / {total}</div>
                        </div>
                    </div>

                    {/* Auto-save Trigger */}
                    <SaveResultEffect
                        testScore={testScore}
                        total={total}
                        day={day}
                        userId={userId}
                    />

                    <div className="space-y-3">
                        {!passed && (
                            <Button
                                onClick={() => {
                                    const failedIndices = results
                                        .map((r, i) => r === false ? i : -1)
                                        .filter(i => i !== -1);

                                    let retryList = failedIndices.map(i => testQueue[i]);

                                    if (retryList.length === 0 && testQueue.length > 0) {
                                        retryList = [...testQueue];
                                    }

                                    if (retryList.length > 0) {
                                        setListeningQueue(shuffle(retryList));
                                        setMode('listening');
                                        setCurrentIndex(0);
                                    } else {
                                        setMode('sort');
                                        setCurrentIndex(0);
                                    }

                                    setResults([]);
                                    setTestScore(0);
                                }}
                                className="w-full h-12 md:h-16 bg-amber-500 text-slate-900 font-bold text-base md:text-xl italic rounded-xl md:rounded-2xl hover:bg-amber-400"
                            >
                                <Headphones className="w-5 h-5 md:w-6 md:h-6 mr-1.5" /> RESTART MISSION
                            </Button>
                        )}
                        <Button
                            onClick={() => router.push(`/homework/voca?from=${fromPath}`)}
                            variant="outline"
                            className="w-full h-12 md:h-16 border-2 border-slate-800 bg-transparent text-slate-400 font-bold text-base md:text-xl italic rounded-xl md:rounded-2xl hover:text-white"
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
                        student: user.userName || user.username || user.name || "Unknown",
                        studentId: userId || user.userId || user.uid || "Guest",
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
                    // Clear progress upon successful completion save
                    localStorage.removeItem(`voca_day_progress_${userId}_${day}`);
                } catch (e) {
                    console.error("Failed to save voca result", e);
                }
            }
        };
        save();
    }, []); // Run once on mount
    return null;
}
