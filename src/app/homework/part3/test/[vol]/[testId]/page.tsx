"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { collection, addDoc, serverTimestamp, getDoc, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Trophy, RotateCcw, AlertTriangle, BookOpen, CheckCircle2 } from "lucide-react";
import { part3RealTests, Part3Set, Part3Question } from '@/data/toeic/listening/part3/tests';
import { cn } from "@/lib/utils";
import { PerformanceSyncService } from '@/services/performanceSyncService';

type AppMode = 'skim' | 'real';
const SKIM_TIME = 18;

// Highlight logic:
// Questions: WH always + first 3 content words left-to-right (man/woman kept, auxiliaries removed)
// Options: first content word (verb) + last content word (key noun)
function getHighlightedText(text: string, isQuestion = false): string {
    const skipWords = new Set([
        // Auxiliaries (all)
        'does', 'do', 'did', 'will', 'would', 'is', 'are', 'was', 'were',
        'has', 'have', 'had', 'can', 'could', 'should', 'be', 'been', 'being',
        // Articles
        'a', 'an', 'the',
        // Subject pronouns
        'he', 'him', 'his', 'she', 'her', 'hers', 'it', 'its',
        'they', 'them', 'their', 'we', 'our', 'you', 'your', 'my',
        // Prepositions
        'of', 'in', 'to', 'by', 'from', 'into', 'with', 'on', 'at',
        'up', 'down', 'about', 'over', 'after', 'through', 'upon',
        // Conjunctions / function words
        'and', 'but', 'or', 'so', 'if', 'as', 'then', 'than',
        'also', 'just', 'not', 'very', 'most', 'there', 'here',
        'some', 'each', 'all', 'any', 'this', 'that', 'these', 'those',
        // Vague catch-all verbs
        'plan', 'plans', 'planned', 'planning', 'going', 'get', 'got', 'goes',
        // Generic Part3/4 context word (keep man/woman intentionally)
        'speakers',
    ]);
    const whPat = /^(who|where|when|what|why|how|which)$/i;

    // Collect words with offsets
    const words: { word: string; lower: string; offset: number }[] = [];
    text.replace(/\b([A-Za-z']+)\b/g, (match, _1, offset) => {
        words.push({ word: match, lower: match.toLowerCase(), offset });
        return match;
    });

    const highlighted = new Set<number>();

    if (isQuestion) {
        // Left-to-right: first 3 non-WH non-skip words (min 2 chars)
        let count = 0;
        for (const { lower, offset } of words) {
            if (whPat.test(lower) || skipWords.has(lower) || lower.length < 2) continue;
            highlighted.add(offset);
            if (++count >= 3) break;
        }
    } else {
        // Options: first content word + last content word
        const eligible = words.filter(w =>
            !whPat.test(w.lower) && !skipWords.has(w.lower) && w.lower.length >= 3
        );
        if (eligible.length >= 1) highlighted.add(eligible[0].offset);
        if (eligible.length >= 2) highlighted.add(eligible[eligible.length - 1].offset);
    }

    return text.replace(/\b([A-Za-z']+)\b/g, (match, _1, offset) => {
        if (whPat.test(match))
            return `<span class="text-emerald-400 font-extrabold border-b-2 border-emerald-500/50 pb-0.5">${match}</span>`;
        if (highlighted.has(offset))
            return `<span class="text-emerald-300 font-bold">${match}</span>`;
        return match;
    });
}

export default function Part3TestRunnerPage() {
    const params = useParams();
    const router = useRouter();
    const vol = parseInt(params.vol as string);
    const testId = parseInt(params.testId as string);
    const isHighlightTest = testId >= 1 && testId <= 3;

    const [mode, setMode] = useState<AppMode | null>(null);
    const [testSets, setTestSets] = useState<Part3Set[]>([]);
    const [isReady, setIsReady] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [audioIndex, setAudioIndex] = useState(0);
    const [isAudioTransitioning, setIsAudioTransitioning] = useState(false);

    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [showCompletion, setShowCompletion] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [wrongQueue, setWrongQueue] = useState<Part3Question[]>([]);
    const [history, setHistory] = useState<{ attempts: number; lastScore?: number }>({ attempts: 1 });
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    const [reviewedAnswers, setReviewedAnswers] = useState<Record<string, string>>({});
    const [showTranslation, setShowTranslation] = useState(false);
    const [isLoadingRetry, setIsLoadingRetry] = useState(false);
    const [isPerfectScore, setIsPerfectScore] = useState(false);
    const searchParams = useSearchParams();
    const retryMode = searchParams.get('mode') === 'retry';
    const resultId = searchParams.get('resultId');
    const fromPath = searchParams.get('from') || '/homework/part3';

    const [skimmingState, setSkimmingState] = useState<'idle' | 'active' | 'done'>('idle');
    const [timeLeft, setTimeLeft] = useState(0);
    const [isAudioBlocked, setIsAudioBlocked] = useState(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    // Load data
    useEffect(() => {
        if (!testId || !vol) return;
        const found = part3RealTests.find(t => t.vol === vol && t.testId === testId);
        if (!found) { alert("Test not found"); router.push('/homework/part3'); return; }
        const data = found.questions;
        setTestSets(data);

        const fetchRetryAndLoad = async () => {
            if (retryMode && resultId) {
                setIsLoadingRetry(true);
                try {
                    const docRef = doc(db, "Manager_Results", resultId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const resData = docSnap.data();
                        if (resData.incorrectQuestions && resData.incorrectQuestions.length > 0) {
                            const ids = resData.incorrectQuestions.map((iq: any) => iq.id);
                            const wQueue: Part3Question[] = [];
                            data.forEach(set => {
                                set.questions.forEach(q => {
                                    if (ids.includes(q.id)) wQueue.push(q);
                                });
                            });
                            setWrongQueue(wQueue);
                            setIsReady(true);
                            setMode('skim'); // Force skim mode for easier review navigation
                            setReviewMode(true);
                        } else {
                            setIsPerfectScore(true);
                        }
                    }
                } catch (e) {
                    console.error("Retry fetch failed", e);
                } finally {
                    setIsLoadingRetry(false);
                }
            } else {
                const savedHistory = localStorage.getItem(`p3_hist_v${vol}_t${testId}`);
                if (savedHistory) { try { setHistory(JSON.parse(savedHistory)); } catch (e) { } }
            }
        };

        fetchRetryAndLoad();
    }, [testId, vol, router, retryMode, resultId]);

    // Mode selected → restore progress & start
    useEffect(() => {
        if (!mode || testSets.length === 0) return;
        const saved = localStorage.getItem(`p3_prog_v${vol}_t${testId}`);
        if (saved) {
            try {
                const p = JSON.parse(saved);
                if (p.currentIndex !== undefined) { setCurrentIndex(p.currentIndex); setAudioIndex(p.currentIndex); }
                if (p.selectedAnswers) setSelectedAnswers(p.selectedAnswers);
            } catch (e) { }
        }
        setIsReady(true);
    }, [mode, testSets]); // eslint-disable-line

    // Start first skim on ready
    useEffect(() => {
        if (!isReady || showCompletion || reviewMode || skimmingState !== 'idle') return;
        setSkimmingState('active');
        setTimeLeft(SKIM_TIME);
    }, [isReady, showCompletion, reviewMode, skimmingState]);

    // SKIM mode: reset timer on each new set
    useEffect(() => {
        if (mode !== 'skim' || !isReady || showCompletion || reviewMode) return;
        setSkimmingState('active');
        setTimeLeft(SKIM_TIME);
    }, [currentIndex]); // eslint-disable-line

    // Countdown
    useEffect(() => {
        if (skimmingState !== 'active') return;
        if (timeLeft > 0) {
            const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
            return () => clearTimeout(t);
        } else {
            setSkimmingState('done');
        }
    }, [skimmingState, timeLeft]);

    // Play audio when skim done
    useEffect(() => {
        if (!isReady || showCompletion || isAudioTransitioning || skimmingState !== 'done') return;
        audioRef.current?.play()
            .then(() => setIsAudioBlocked(false))
            .catch(e => { if (e.name === 'NotAllowedError') setIsAudioBlocked(true); });
    }, [isReady, skimmingState, audioIndex, showCompletion, isAudioTransitioning]);

    const handleAudioEnded = () => {
        if (mode !== 'real') return;
        if (audioIndex < testSets.length - 1) {
            setIsAudioTransitioning(true);
            setTimeout(() => { setAudioIndex(p => p + 1); setIsAudioTransitioning(false); }, 2000);
        }
    };

    const handleSelect = (qId: string, label: string) => {
        if (skimmingState === 'active') return;

        if (reviewMode) {
            // In review mode, we only allow answering the ones that were wrong
            const originalWrong = wrongQueue.some(wq => wq.id === qId);
            if (!originalWrong) return;
            setReviewedAnswers(prev => ({ ...prev, [qId]: label }));
            return;
        }

        const newAns = { ...selectedAnswers, [qId]: label };
        setSelectedAnswers(newAns);
        localStorage.setItem(`p3_prog_v${vol}_t${testId}`, JSON.stringify({ currentIndex, selectedAnswers: newAns }));

        // Auto Scroll logic
        const qElement = document.getElementById(qId);
        if (qElement) {
            const container = qElement.parentElement;
            if (container) {
                const questions = Array.from(container.children);
                const qIdxInDOM = questions.indexOf(qElement);
                if (qIdxInDOM < questions.length - 1) {
                    const nextQuestion = questions[qIdxInDOM + 1];
                    setTimeout(() => {
                        nextQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 300);
                }
            }
        }
        if (mode === 'real') {
            const complete = testSets[currentIndex].questions.every(q => newAns[q.id]);
            if (complete) {
                if (currentIndex < testSets.length - 1) {
                    setTimeout(() => { setCurrentIndex(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 500);
                } else {
                    finishTest(newAns);
                }
            }
        }
    };

    // Manual Next (skim mode)
    const handleNext = () => {
        if (mode !== 'skim' && !reviewMode) return;
        const currentActiveSet = reviewMode ? reviewSets[currentIndex] : testSets[currentIndex];
        const isComplete = currentActiveSet.questions.every(q => {
            if (reviewMode) {
                const wasWrong = wrongQueue.some(wq => wq.id === q.id);
                return !wasWrong || reviewedAnswers[q.id];
            }
            return selectedAnswers[q.id];
        });

        if (!isComplete && !reviewMode) return;

        const limit = reviewMode ? reviewSets.length : testSets.length;
        if (currentIndex < limit - 1) {
            setCurrentIndex(p => p + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            if (reviewMode) {
                setShowCompletion(true);
                setReviewMode(false);
            } else {
                finishTest(selectedAnswers);
            }
        }
    };

    const finishTest = async (finalAns = selectedAnswers) => {
        // Prevent double saving for the same attempt in this session
        const saveKey = `p3_saved_v${vol}_t${testId}_${history.attempts}`;
        const alreadySaved = sessionStorage.getItem(saveKey);

        let score = 0;
        const wrongOnes: Part3Question[] = [];
        testSets.forEach(set => {
            set.questions.forEach(q => {
                if (finalAns[q.id] === q.correctAnswer) score++;
                else wrongOnes.push(q);
            });
        });
        setWrongQueue(wrongOnes);
        setShowCompletion(true);

        // Only save to DB if not already saved for this attempt
        if (alreadySaved || retryMode) return;

        const newHist = { attempts: history.attempts, lastScore: score };
        setHistory(newHist);
        localStorage.setItem(`p3_hist_v${vol}_t${testId}`, JSON.stringify(newHist));
        localStorage.removeItem(`p3_prog_v${vol}_t${testId}`);
        const userStr = localStorage.getItem('toeic_user');
        if (userStr) {
            const user = JSON.parse(userStr);
            const userId = user.userId || user.uid;
            try {
                const incorrects: any[] = [];
                testSets.forEach(set => {
                    set.questions.forEach(q => {
                        if (finalAns[q.id] !== q.correctAnswer) {
                            incorrects.push({
                                id: q.id,
                                contextType: set.contextType || 'Unknown',
                                classification: q.classification || 'Unknown'
                            });
                        }
                    });
                });

                await addDoc(collection(db, "Manager_Results"), {
                    studentId: userId,
                    studentName: user.userName || user.name || "Unknown",
                    type: 'part3_test',
                    detail: `Test ${testId}`,
                    unit: `Part3 Real Test Vol${vol} ${testId}`,
                    score,
                    total: testSets.reduce((a, s) => a + s.questions.length, 0),
                    wrongCount: wrongOnes.length,
                    incorrectQuestions: incorrects,
                    vol,
                    testId,
                    timestamp: serverTimestamp()
                });
                await PerformanceSyncService.syncUserSummary(userId);
                sessionStorage.setItem(saveKey, 'true');
            } catch (e) {
                console.error("Save error:", e);
            }
        }
    };

    const handleRetake = () => {
        const newHist = { attempts: history.attempts + 1, lastScore: undefined };
        setHistory(newHist);
        localStorage.setItem(`p3_hist_v${vol}_t${testId}`, JSON.stringify(newHist));
        setShowCompletion(false); setCurrentIndex(0); setAudioIndex(0);
        setSelectedAnswers({}); setSkimmingState('idle'); setWrongQueue([]);
        setReviewedAnswers({});
        localStorage.removeItem(`p3_prog_v${vol}_t${testId}`);
    };

    if (isPerfectScore) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <Trophy className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">Perfect Score</h2>
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-8">틀린 문제가 없습니다! 완벽합니다.</p>
                <p className="text-slate-400 font-bold text-sm mb-6 bg-slate-900 border border-slate-800 py-3 px-6 rounded-2xl w-full max-w-sm">
                    맞힌 문제라도 지문과 음원을 다시 들으며<br />가볍게 1회독 복습하시겠습니까?
                </p>
                <div className="space-y-4 w-full max-w-xs">
                    <button onClick={() => {
                        setIsPerfectScore(false);
                        setWrongQueue(testSets.flatMap(s => s.questions));
                        setIsReady(true);
                        setMode('skim');
                        setReviewMode(true);
                    }} className="w-full h-14 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-500 hover:scale-[1.02] transition-all">예 (전체 문제 복습)</button>
                    <button onClick={() => router.push(fromPath)} className="w-full h-14 bg-slate-800 text-slate-300 rounded-2xl font-bold hover:bg-slate-700 hover:text-white transition-all">아니오 (목록으로 복귀)</button>
                </div>
            </div>
        );
    }

    // ── MODE SELECTION SCREEN ──
    if (!mode || !isReady || isLoadingRetry) {
        if (testSets.length === 0 || isLoadingRetry) return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-slate-500 font-black italic uppercase tracking-widest text-xs">오답 데이터를 매칭하는 중...</p>
            </div>
        );
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-8">
                    <div className="text-center">
                        <p className="text-emerald-500 text-xs font-black uppercase tracking-widest mb-2">Part 3 · Vol {vol} · Test {testId}</p>
                        <h2 className="text-2xl font-black text-white mb-2">Select Mode</h2>
                        <p className="text-slate-400 text-sm">Choose your preferred test style</p>
                    </div>
                    <div className="space-y-4">
                        <button onClick={() => setMode('real')}
                            className="w-full h-20 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold border border-slate-700 flex flex-col items-center justify-center gap-1 transition-all active:scale-95">
                            <span className="text-lg">⚡ Real Test Mode</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">실전처럼 — 이전 세트 음원과 함께 스키밍</span>
                        </button>
                        <button onClick={() => setMode('skim')}
                            className="w-full h-20 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold flex flex-col items-center justify-center gap-1 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
                            <span className="text-lg">⏱️ Skimming Mode</span>
                            <span className="text-xs text-emerald-200 uppercase tracking-wider">세트마다 {SKIM_TIME}초 스키밍 후 음원 재생</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // ── COMPLETION SCREEN ──
    if (showCompletion) {
        if (reviewMode) {
            return (
                <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tighter">학습 완료</h2>
                    <p className="text-slate-400 font-medium mb-8">오답 문제 복습을 모두 완료했습니다!</p>
                    <div className="space-y-3 w-full max-w-xs">
                        <Link href={fromPath} className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20">
                            목록으로 돌아가기
                        </Link>
                    </div>
                </div>
            );
        }

        const total = testSets.reduce((a, s) => a + s.questions.length, 0);
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="animate-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-emerald-500/10 rounded-3xl flex items-center justify-center mb-6 mx-auto ring-1 ring-emerald-500/50 shadow-2xl shadow-emerald-500/20">
                            <Trophy className="w-12 h-12 text-emerald-500" />
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">MISSION COMPLETE</h2>
                        <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase">ATTEMPT #{history.attempts} FINISHED</p>
                    </div>
                    <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800">
                        <div className="flex items-center justify-center gap-6 mb-8">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Score</p>
                                <p className="text-5xl font-black text-white leading-none">{history.lastScore ?? 0}</p>
                            </div>
                            <div className="w-px h-12 bg-slate-800" />
                            <div className="text-center">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Total</p>
                                <p className="text-5xl font-black text-slate-700 leading-none">{total}</p>
                            </div>
                        </div>
                        {wrongQueue.length > 0 && (
                            <div className="text-left">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Wrong Questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {wrongQueue.map(q => (
                                        <div key={q.id} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                                            <span className="text-[10px] font-black text-rose-500">Q{q.id.replace(/.*-q/, '')}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="mt-6 pt-4 border-t border-slate-800">
                            <p className="text-sm font-bold text-emerald-400">
                                {wrongQueue.length === 0 ? "Perfect Score! Amazing work. 🎉" : "틀린 문제를 확인하고 복습하세요."}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <button onClick={handleRetake}
                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-2xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2">
                            <RotateCcw className="w-5 h-5" /><span>Retake Test ({history.attempts + 1})</span>
                        </button>
                        {wrongQueue.length > 0 && (
                            <button onClick={() => { setShowCompletion(false); setReviewMode(true); setCurrentIndex(0); }}
                                className="w-full h-14 bg-slate-800 text-white font-black rounded-2xl hover:bg-slate-700 transition-all border border-slate-700 active:scale-95">
                                Review Incorrect Answers
                            </button>
                        )}
                        <Link href={fromPath} className="w-full h-14 flex items-center justify-center text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
                            Back to Lobby
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const reviewSets = testSets.filter(s => s.questions.some(q => wrongQueue.some(wq => wq.id === q.id)));
    const activeSets = reviewMode ? reviewSets : testSets;
    const currentSet = activeSets[currentIndex];
    const audioSrc = (mode === 'real' && !reviewMode) ? testSets[audioIndex]?.audio : currentSet?.audio;
    const isSetComplete = currentSet?.questions.every(q => selectedAnswers[q.id]);
    const isReviewSetComplete = currentSet?.questions.every(q => {
        const wasWrong = wrongQueue.some(wq => wq.id === q.id);
        return !wasWrong || reviewedAnswers[q.id];
    });

    // Highlight stays on throughout skim mode for test 1-3 (even during audio)
    const shouldHighlight = (mode === 'skim' || reviewMode) && isHighlightTest;

    if (!currentSet) return null;

    return (
        <div className="min-h-screen bg-slate-950 pb-32 font-sans selection:bg-emerald-500/30">
            {/* Skimming Timer */}
            {mode === 'skim' && skimmingState === 'active' && (
                <div className="fixed top-24 right-4 z-50 animate-in fade-in slide-in-from-right duration-500">
                    <div className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black text-xl shadow-2xl flex flex-col items-center ring-4 ring-emerald-500/20">
                        <span className="text-[10px] uppercase font-bold text-emerald-100 opacity-80 tracking-widest mb-1">Skimming</span>
                        <span>{timeLeft}s</span>
                    </div>
                </div>
            )}

            {/* Sticky Header */}
            <div className="sticky top-0 z-10 bg-slate-950/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
                    <button onClick={() => setShowExitConfirm(true)} className="text-slate-400 hover:text-white text-sm font-medium transition-colors">✕ Exit</button>
                    <div className="flex-1 text-center">
                        <span className="text-[10px] font-black tracking-widest text-emerald-500 uppercase block mb-0.5">
                            {reviewMode ? 'REVIEW MODE' : `TEST ${testId} · ${mode === 'skim' ? 'SKIM' : 'REAL'} · ATTEMPT ${history.attempts}`}
                        </span>
                        <span className="text-sm font-bold text-white">
                            Set {currentIndex + 1} <span className="text-slate-600 mx-1">/</span> {activeSets.length}
                            <span className="text-slate-500 text-xs ml-1">(Q{currentSet.questionRange})</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        {reviewMode && (
                            <button
                                onClick={() => setShowTranslation(!showTranslation)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all border uppercase",
                                    showTranslation
                                        ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                                        : "bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-300"
                                )}
                            >
                                {showTranslation ? 'Translation ON' : 'Translation OFF'}
                            </button>
                        )}
                        <button onClick={() => {
                            localStorage.setItem(`p3_prog_v${vol}_t${testId}`, JSON.stringify({ currentIndex, selectedAnswers }));
                            router.push(fromPath);
                        }} className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500/20 transition-all flex items-center gap-1">💾 Save</button>
                    </div>
                </div>

                {/* Audio Bar */}
                <div className="bg-slate-900/50 border-b border-white/5 px-4 py-3">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-slate-800 rounded-full p-1 ring-1 ring-white/10 relative">
                            {(skimmingState === 'active' || isAudioTransitioning) && (
                                <div className="absolute inset-0 z-10 bg-slate-900/60 rounded-full flex items-center justify-center backdrop-blur-[1px]">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        {isAudioTransitioning ? 'Next Talk...' : 'Wait for Skimming...'}
                                    </span>
                                </div>
                            )}
                            <audio ref={audioRef} key={audioSrc} controls className="w-full h-8 opacity-90 invert-[.9]" src={audioSrc} onEnded={handleAudioEnded}>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        {isAudioBlocked && (
                            <button onClick={() => audioRef.current?.play()}
                                className="mt-2 text-xs text-amber-400 border border-amber-500/30 px-3 py-1 rounded-lg w-full">
                                ▶ Click to play audio
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-4 md:py-6 space-y-4 md:space-y-8">
                <div className="text-center space-y-1 my-4 px-4">
                    <h1 className="text-xl font-black text-white tracking-tight">Questions {currentSet.questionRange}</h1>
                    <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Listen and choose the best answer</p>
                </div>

                {currentSet.image && (
                    <div className="sticky top-[116px] z-[5] py-4 mb-6 bg-slate-950/95 backdrop-blur-sm border-b border-white/5 -mx-4 px-4 md:-mx-8 md:px-8">
                        <div className="flex justify-center">
                            <div className="border border-slate-700 p-1 rounded-lg shadow-2xl bg-slate-900">
                                <img src={currentSet.image} alt="Graphic" className="max-h-60 md:max-h-80 object-contain rounded opacity-90 transition-all" />
                            </div>
                        </div>
                    </div>
                )}

                <div className="space-y-2 md:space-y-8">
                    {currentSet.questions.map((q) => (
                        <div key={q.id} id={q.id} className={cn(
                            "p-6 transition-all duration-300 bg-slate-900/40 border border-slate-800 rounded-3xl",
                            shouldHighlight && "ring-1 ring-emerald-500/20"
                        )}>
                            <div className="flex gap-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-bold text-[10px] border bg-slate-800 text-slate-400 border-slate-700">
                                    {q.id.replace(/.*-q/, '')}
                                </div>
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-base font-bold leading-snug text-slate-200"
                                        dangerouslySetInnerHTML={{ __html: shouldHighlight ? getHighlightedText(q.text, true) : q.text }} />
                                    {reviewMode && showTranslation && q.translation && (
                                        <p className="text-sm font-medium text-emerald-400/80 -mt-2 animate-in fade-in slide-in-from-top-1 duration-300">
                                            {q.translation}
                                        </p>
                                    )}
                                    <div className="grid grid-cols-1 gap-2.5">
                                        {(Object.entries(q.options) as [string, string][]).map(([label, text]) => {
                                            const originalAns = selectedAnswers[q.id];
                                            const wasCorrect = q.correctAnswer === originalAns;
                                            const reviewAns = reviewedAnswers[q.id];
                                            const isSelected = reviewMode ? (reviewAns === label || (!wrongQueue.some(wq => wq.id === q.id) && originalAns === label)) : selectedAnswers[q.id] === label;
                                            const isCorrectAns = q.correctAnswer === label;
                                            const isWrongSelection = reviewMode && reviewAns === label && label !== q.correctAnswer;

                                            return (
                                                <button key={label}
                                                    onClick={() => handleSelect(q.id, label)}
                                                    disabled={(reviewMode && (!wrongQueue.some(wq => wq.id === q.id) || !!reviewAns)) || skimmingState === 'active'}
                                                    className={cn(
                                                        "text-left px-5 py-4 rounded-2xl transition-all duration-200 border relative overflow-hidden group",
                                                        isSelected && !reviewMode
                                                            ? 'border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)]'
                                                            : reviewMode && isCorrectAns && (wasCorrect || (reviewAns === q.correctAnswer) || !!reviewAns)
                                                                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                                                                : reviewMode && isWrongSelection
                                                                    ? 'border-rose-500 bg-rose-500/10 text-rose-400'
                                                                    : 'border-slate-800 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-700',
                                                        reviewMode && isCorrectAns && (wasCorrect || !!reviewAns) && 'ring-2 ring-emerald-500/50',
                                                        skimmingState === 'active' && 'cursor-wait'
                                                    )}>
                                                    <span className={cn("font-black mr-3 text-xs",
                                                        isSelected || (reviewMode && isCorrectAns && (wasCorrect || !!reviewAns)) ? 'text-indigo-500' : 'text-slate-700 group-hover:text-slate-500')}>
                                                        {label}
                                                    </span>
                                                    <span dangerouslySetInnerHTML={{ __html: shouldHighlight ? getHighlightedText(text, false) : text }} />
                                                    {reviewMode && showTranslation && (q as any)[`translation_${label}`] && (
                                                        <span className="block text-[11px] font-medium text-slate-500 mt-1 italic">
                                                            {(q as any)[`translation_${label}`]}
                                                        </span>
                                                    )}
                                                    {reviewMode && isCorrectAns && (wasCorrect || reviewAns === q.correctAnswer) && (
                                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-emerald-500 uppercase bg-emerald-500/10 px-2 py-0.5 rounded">Correct</span>
                                                    )}
                                                    {reviewMode && isWrongSelection && (
                                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-rose-500 uppercase bg-rose-500/10 px-2 py-0.5 rounded">Wrong</span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {reviewMode && currentSet.script && (wasCorrect || !!reviewedAnswers[q.id]) && (
                                        <div className="mt-4 p-4 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                                            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">Analysis & Script</p>
                                            <p className="text-xs text-slate-400 leading-relaxed italic">
                                                {typeof q.explanation === 'string' ? q.explanation : ""}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {reviewMode && currentSet.script && isReviewSetComplete && (
                    <div className="mt-8 p-6 bg-slate-900 border border-slate-800 rounded-[2rem] shadow-2xl animate-in zoom-in-95 duration-500">
                        <h4 className="text-xs font-black text-indigo-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" /> Full Script
                        </h4>
                        <div className="text-sm italic text-slate-400 leading-relaxed font-serif space-y-3">
                            {typeof currentSet.script === 'string'
                                ? currentSet.script
                                : currentSet.script.map((s, i) => (
                                    <div key={i}>
                                        <span className="font-black text-slate-300 not-italic uppercase text-[10px] tracking-wider">{s.speaker}:</span> {s.text}
                                    </div>
                                ))}
                        </div>
                        {showTranslation && currentSet.translation && (
                            <div className="mt-6 pt-6 border-t border-slate-800">
                                <h5 className="text-[10px] font-black text-emerald-500/70 uppercase tracking-widest mb-3">Korean Interpretation</h5>
                                <div className="text-sm text-slate-500 leading-relaxed font-medium">
                                    {currentSet.translation}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Nav — Skim mode only */}
            {(mode === 'skim' || reviewMode) && (
                <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pointer-events-none z-40">
                    <div className="max-w-3xl mx-auto flex justify-end pointer-events-auto">
                        <button onClick={handleNext} disabled={reviewMode ? !isReviewSetComplete : !isSetComplete}
                            className={cn(
                                "px-8 py-4 rounded-2xl font-black text-sm tracking-widest transition-all shadow-2xl active:scale-95 flex items-center gap-2 uppercase italic",
                                (reviewMode ? isReviewSetComplete : isSetComplete)
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 ring-1 ring-inset ring-white/20'
                                    : 'bg-slate-900 text-slate-700 cursor-not-allowed border border-slate-800'
                            )}>
                            {reviewMode
                                ? (currentIndex === activeSets.length - 1 ? <span>Finish Review 🏁</span> : <span>Next Review Set →</span>)
                                : (!isSetComplete
                                    ? <span>Select All Answers</span>
                                    : currentIndex === testSets.length - 1 ? <span>Finish Test 🎉</span> : <span>Next Talk →</span>
                                )}
                        </button>
                    </div>
                </div>
            )}
            {/* Exit Confirmation Modal */}
            {showExitConfirm && (
                <div className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="max-w-xs w-full bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-2xl text-center space-y-6">
                        <div className="w-20 h-20 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mx-auto ring-4 ring-rose-500/5">
                            <AlertTriangle className="w-10 h-10" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-white tracking-tight">학습을 중단할까요?</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                '저장하고 나가기'를 누르지 않으면<br />
                                현재까지의 진행 상황이 사라집니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => router.push(fromPath)}
                                className="w-full h-12 text-rose-400 hover:text-rose-300 hover:bg-rose-500/5 font-bold rounded-xl transition-colors"
                            >
                                저장 없이 그냥 나가기
                            </button>
                            <button
                                onClick={() => setShowExitConfirm(false)}
                                className="w-full h-14 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-2xl transition-all"
                            >
                                계속 학습하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
