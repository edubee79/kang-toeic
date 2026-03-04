'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { buildUniversalMockTest } from '@/lib/mock/dataBuilder';
import { mockTests } from '@/data/mock-test-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Info, CheckCircle2, XCircle, RotateCcw, AlertTriangle, Monitor, Sparkles, Trophy, Play, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function UniversalReviewClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const attemptId = searchParams.get('attemptId');
    const targetPart = searchParams.get('part'); // e.g. p5

    const [loading, setLoading] = useState(true);
    const [attempt, setAttempt] = useState<any>(null);
    const [testData, setTestData] = useState<any>(null);
    const [truthMap, setTruthMap] = useState<Record<string, string>>({});
    const [incorrectQuestions, setIncorrectQuestions] = useState<any[]>([]);

    // UI state
    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
    const [isResolved, setIsResolved] = useState<Record<string, boolean>>({}); // Tracks if a question was successfully re-solved
    const [showCompletion, setShowCompletion] = useState(false);
    const [stats, setStats] = useState({ total: 0, resolvedOk: 0, resolvedFail: 0 });

    useEffect(() => {
        const fetchReviewData = async () => {
            if (!attemptId || !targetPart) {
                alert("잘못된 접근입니다.");
                router.back();
                return;
            }

            try {
                // 1. Fetch Attempt
                const docRef = doc(db, 'MockTestAttempts', attemptId);
                const snapshot = await getDoc(docRef);

                let attemptData = null;
                if (snapshot.exists()) {
                    attemptData = snapshot.data();
                } else {
                    const localStr = localStorage.getItem('mock_test_attempts');
                    if (localStr) {
                        const localParams = JSON.parse(localStr);
                        // Try to find the local attempt
                        const tId = searchParams.get('testId');
                        if (tId && localParams[`full-${tId}`]) {
                            attemptData = localParams[`full-${tId}`];
                        }
                    }
                }

                if (!attemptData) {
                    throw new Error("Attempt data not found in DB or LocalStorage.");
                }
                setAttempt(attemptData);

                const testIdRaw = String(attemptData.testId);
                const isStaticMock = testIdRaw === '9' || testIdRaw === '10';

                let rawSchemaData: any = null;
                let dynamicTruthMap: Record<string, string> = {};

                // 2. Fetch or Build Test Data
                if (isStaticMock) {
                    const idx = testIdRaw === '9' ? 9 : 10;
                    rawSchemaData = mockTests[idx];

                    // Rebuild truth map for static mock
                    const { parts } = rawSchemaData;
                    parts.forEach((p: any) => {
                        const isSetBased = [6, 7].includes(p.partId);
                        // Note: mock-test-data maps p3/p4 directly to array of questions via flatMap!
                        if (isSetBased) {
                            (Array.isArray(p.data) ? p.data : []).forEach((set: any) => {
                                (Array.isArray(set.questions) ? set.questions : []).forEach((q: any) => {
                                    dynamicTruthMap[q.id] = q.correctAnswer || q.answer;
                                });
                            });
                        } else {
                            (Array.isArray(p.data) ? p.data : []).forEach((q: any) => {
                                dynamicTruthMap[q.id] = q.correctAnswer || q.answer;
                            });
                        }
                    });
                } else {
                    const customRef = doc(db, 'CustomMockTests', testIdRaw);
                    const customSnap = await getDoc(customRef);
                    if (!customSnap.exists()) {
                        throw new Error("Custom Test Configuration not found.");
                    }
                    const customData = customSnap.data();
                    const bundle = await buildUniversalMockTest(customData.schema);

                    const rcParts = bundle.rc;
                    const lcParts = bundle.lc;

                    rawSchemaData = {
                        parts: [
                            { partId: 1, data: lcParts.p1 },
                            { partId: 2, data: lcParts.p2 },
                            { partId: 3, data: lcParts.p3 },
                            { partId: 4, data: lcParts.p4 },
                            { partId: 5, data: rcParts.p5 },
                            { partId: 6, data: rcParts.p6 },
                            { partId: 7, data: [...rcParts.p7s, ...rcParts.p7m] } // Merge single and multi
                        ]
                    };
                    dynamicTruthMap = bundle.truthMap;
                }

                setTruthMap(dynamicTruthMap);

                // 3. Extract the target part
                const partMap: Record<string, number> = {
                    'p1': 1, 'p2': 2, 'p3': 3, 'p4': 4, 'p5': 5, 'p6': 6, 'p7s': 7, 'p7m': 7
                };

                const targetPartNum = partMap[targetPart];
                const partData = rawSchemaData.parts.find((p: any) => p.partId === targetPartNum)?.data || [];

                // For p7s / p7m specifically, we might need to filter based on set questions length or id format, but let's just use all p7 data mapped from schema
                let filteredPartData = Array.isArray(partData) ? partData : [];
                if (!isStaticMock && targetPart === 'p7s') {
                    // Filter single passages (usually 2-4 questions per set, or check id)
                    filteredPartData = filteredPartData.filter((s: any) => s.questions.some((q: any) => q.id.includes('p7-univ')));
                }

                // 4. Flatten all questions from this part to find out which ones were incorrect
                const incorrectIdsRaw = new Set<string>();
                Object.keys(attemptData.answers || {}).forEach(qId => {
                    const userAnswer = attemptData.answers[qId];
                    const correctAns = dynamicTruthMap[qId];
                    if (correctAns && userAnswer !== correctAns) {
                        incorrectIdsRaw.add(qId);
                    }
                });

                // Filter the part test data to ONLY include sets/questions that were incorrect
                // Edge case: if it is a static mock test, parts 3 and 4 were flattened into an array of questions.
                const isSetBased = isStaticMock
                    ? [6, 7].includes(targetPartNum)
                    : [3, 4, 6, 7].includes(targetPartNum);

                let finalIncorrectItems: any[] = [];
                let totalQsToReview = 0;

                if (isSetBased) {
                    (Array.isArray(filteredPartData) ? filteredPartData : []).forEach((set: any) => {
                        const wrongQsInSet = (Array.isArray(set.questions) ? set.questions : []).filter((q: any) => incorrectIdsRaw.has(q.id.toString()));
                        if (wrongQsInSet.length > 0) {
                            finalIncorrectItems.push({
                                ...set,
                                questions: wrongQsInSet // ONLY keep the wrong ones!
                            });
                            totalQsToReview += wrongQsInSet.length;
                        }
                    });
                } else {
                    const wrongQs = (Array.isArray(filteredPartData) ? filteredPartData : []).filter((q: any) => incorrectIdsRaw.has(q.id.toString()));
                    finalIncorrectItems = wrongQs;
                    totalQsToReview = wrongQs.length;
                }

                setIncorrectQuestions(finalIncorrectItems);
                setStats(prev => ({ ...prev, total: totalQsToReview }));
                setTestData({ isSetBased, targetPartNum, partLabel: targetPart.toUpperCase() });

                if (totalQsToReview === 0) {
                    // They didn't get any wrong!
                    setShowCompletion(true);
                }

            } catch (err) {
                console.error("Failed to construct universal review data:", err);
                alert("Review 데이터를 로드하는데 실패했습니다.");
                router.back();
            } finally {
                setLoading(false);
            }
        };

        fetchReviewData();
    }, [attemptId, targetPart, searchParams, router]);

    const handleSelect = (qId: string, answer: string) => {
        if (isResolved[qId]) return; // locked if already successfully resolved

        setSelectedAnswers(prev => ({ ...prev, [qId]: answer }));

        // Immediately check if correct
        const isCorrect = truthMap[qId] === answer;

        setIsResolved(prev => ({ ...prev, [qId]: true }));

        if (isCorrect) {
            setStats(prev => ({ ...prev, resolvedOk: prev.resolvedOk + 1 }));
        } else {
            setStats(prev => ({ ...prev, resolvedFail: prev.resolvedFail + 1 }));
        }

        // Check if all are resolved
        const resolvedCount = Object.keys(isResolved).length + 1; // including this one
        if (resolvedCount >= stats.total) {
            setTimeout(() => {
                setShowCompletion(true);
            }, 1000);
        }
    };

    if (loading || !testData) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-500 font-bold space-y-4">
                <Monitor className="w-12 h-12 text-indigo-500/50 animate-pulse" />
                <p className="uppercase tracking-widest text-xs italic">강쌤의 1:1 오답 복습 환경을 조립 중입니다...</p>
            </div>
        );
    }

    if (showCompletion && stats.total === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">Perfect Score</h2>
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-8">오답이 없습니다! 완벽합니다.</p>
                <Button onClick={() => router.back()} className="rounded-2xl h-14 px-8 text-lg font-black bg-emerald-600 hover:bg-emerald-500">돌아가기</Button>
            </div>
        );
    }

    if (showCompletion) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="w-24 h-24 rounded-3xl bg-indigo-500/10 text-indigo-500 ring-1 ring-indigo-500/50 flex items-center justify-center mb-6 shadow-2xl">
                    <Trophy className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-black italic tracking-tighter uppercase mb-2">Review Completed</h2>
                <p className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-8">{testData.partLabel} 오답 다시 풀기 완료</p>

                <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-sm mb-8 flex divide-x divide-slate-800">
                    <div className="flex-1 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-emerald-500 font-black mb-1">정답으로 수정</p>
                        <p className="text-4xl text-white font-black italic">{stats.resolvedOk}</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-[10px] uppercase tracking-widest text-rose-500 font-black mb-1">여전히 오답</p>
                        <p className="text-4xl text-white font-black italic">{stats.resolvedFail}</p>
                    </div>
                </div>

                <div className="space-y-3 w-full max-w-sm">
                    <Button onClick={() => router.back()} className="w-full h-14 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-black text-lg transition-all">분석 리포트로 돌아가기</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 pb-32 text-slate-200">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
                <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-slate-400 hover:text-white">
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <span className="text-[10px] font-black tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                            {testData.partLabel} Review Mode
                        </span>
                    </div>

                    <div className="text-center absolute left-1/2 -translate-x-1/2">
                        <span className="text-sm font-bold text-white tracking-widest">
                            <span className="text-indigo-400">{Object.keys(isResolved).length}</span> / {stats.total}
                        </span>
                    </div>
                </div>
            </div>

            <main className="max-w-3xl mx-auto px-4 md:px-6 py-8 space-y-12">
                <div className="mb-10 text-center space-y-3">
                    <h1 className="text-3xl font-black italic uppercase tracking-tighter">Universal <span className="text-indigo-500">Review</span></h1>
                    <p className="text-slate-400 font-bold text-sm bg-slate-900 border border-slate-800 py-3 px-6 rounded-2xl inline-block">
                        이전에 틀렸던 문제들을 다시 풀어보세요. 정답의 확신이 설 때까지 신중하게 선택하세요.
                    </p>
                </div>

                {incorrectQuestions.map((item: any, idx: number) => {
                    if (testData.isSetBased) {
                        return (
                            <ReviewSetCard
                                key={idx}
                                set={item}
                                truthMap={truthMap}
                                selectedAnswers={selectedAnswers}
                                isResolved={isResolved}
                                onSelect={handleSelect}
                            />
                        );
                    } else {
                        return (
                            <ReviewSingleCard
                                key={item.id}
                                q={item}
                                truthMap={truthMap}
                                selectedAnswers={selectedAnswers}
                                isResolved={isResolved}
                                onSelect={handleSelect}
                            />
                        );
                    }
                })}
            </main>
        </div>
    );
}

// Subcomponents for rendering UI

function ReviewSingleCard({ q, truthMap, selectedAnswers, isResolved, onSelect }: any) {
    const answered = isResolved[q.id];
    const userChoice = selectedAnswers[q.id];
    const isCorrect = userChoice === truthMap[q.id];

    // Audio support for LC questions
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const isLC = String(q.id).includes('p1') || String(q.id).includes('p2') || String(q.id).includes('p3') || String(q.id).includes('p4');

    return (
        <Card className="bg-slate-900/50 border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 overflow-hidden relative">
            {answered && (
                <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-1000",
                    isCorrect ? "bg-emerald-500" : "bg-rose-500"
                )}></div>
            )}

            <div className="flex gap-4">
                <div className={cn(
                    "flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm border-2 transition-all duration-500",
                    answered
                        ? (isCorrect ? "bg-emerald-500 text-slate-900 border-emerald-500" : "bg-rose-500 text-white border-rose-500")
                        : "bg-slate-800 text-slate-400 border-slate-700"
                )}>
                    {String(q.id).replace(/[^\d]/g, '') || '?'}
                </div>
                <div className="flex-1 space-y-6 pt-1">

                    {/* Audio Player for LC questions */}
                    {isLC && q.audio && (
                        <div className="flex items-center gap-4 mb-4">
                            <button
                                onClick={toggleAudio}
                                className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-lg shrink-0",
                                    isPlaying ? "bg-rose-500 text-white shadow-rose-500/20" : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/20"
                                )}
                            >
                                {isPlaying ? <Activity size={20} className="animate-pulse" /> : <Play size={20} className="ml-1" />}
                            </button>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                {isPlaying ? "Playing Audio..." : "Play Question Audio"}
                            </span>
                            <audio
                                ref={audioRef}
                                src={q.audio}
                                onEnded={() => setIsPlaying(false)}
                            // onPause={() => setIsPlaying(false)}
                            />
                        </div>
                    )}

                    {/* Image rendering for Part 1 or Visual questions */}
                    {q.image && (
                        <div className="w-full max-w-sm border-2 border-slate-800 rounded-xl overflow-hidden mb-4 bg-slate-950/50">
                            <img src={q.image} alt="Question Graphic" className="w-full h-auto" />
                        </div>
                    )}

                    {q.text && (
                        <p className="text-lg md:text-xl font-bold leading-relaxed text-slate-200">
                            {q.text}
                        </p>
                    )}

                    {!q.text && (
                        <p className="text-sm font-bold leading-relaxed text-slate-400 italic">
                            {isLC ? "음원을 듣고 알맞은 정답을 고르세요." : "해당 문항의 지문을 읽고 알맞은 답을 고르세요."}
                        </p>
                    )}

                    <div className="space-y-3">
                        {Array.isArray(q.options) ? q.options.map((opt: string) => <OptionBtn key={opt} opt={opt} qId={q.id} userChoice={userChoice} correctAns={truthMap[q.id]} answered={answered} onSelect={onSelect} />)
                            : Object.entries(q.options || {}).map(([key, val]) => <OptionBtn key={key} opt={`(${key}) ${val}`} qId={q.id} userChoice={userChoice} correctAns={truthMap[q.id]} answered={answered} onSelect={onSelect} />)}
                    </div>

                    {/* Show explanation only when resolved */}
                    {answered && q.explanation && (
                        <div className="mt-6 pt-6 border-t border-slate-800/50 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="flex items-start gap-3 bg-indigo-500/5 border border-indigo-500/10 p-5 rounded-2xl">
                                <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-indigo-400 mb-1">강쌤의 족집게 코멘트</p>
                                    <p className="text-sm leading-relaxed font-bold text-slate-300">{q.explanation}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    );
}

function ReviewSetCard({ set, truthMap, selectedAnswers, isResolved, onSelect }: any) {
    return (
        <div className="bg-slate-900/30 border border-slate-800/80 rounded-[2.5rem] p-6 md:p-10 space-y-10">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 font-medium text-slate-300 leading-relaxed text-sm md:text-base prose prose-invert max-w-none prose-p:leading-8 selection:bg-indigo-500/30">
                {set.passage ? (
                    <div dangerouslySetInnerHTML={{ __html: set.passage.replace(/\n/g, '<br/>') }} />
                ) : set.image ? (
                    <img src={set.image} alt="Passage" className="w-full rounded-2xl border border-white/10" />
                ) : (
                    <div className="text-center text-slate-500 italic py-10">해당 문장의 지문 텍스트가 없습니다.</div>
                )}
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-800/50">
                {set.questions.map((q: any) => (
                    <ReviewSingleCard
                        key={q.id}
                        q={q}
                        truthMap={truthMap}
                        selectedAnswers={selectedAnswers}
                        isResolved={isResolved}
                        onSelect={onSelect}
                    />
                ))}
            </div>
        </div>
    );
}

function OptionBtn({ opt, qId, userChoice, correctAns, answered, onSelect }: any) {
    let label = '';
    let text = '';
    const match = typeof opt === 'string' ? opt.match(/\(([A-D])\)\s*(.*)/) : null;
    if (match) {
        label = match[1];
        text = match[2];
    } else {
        label = opt.charAt(0);
        text = opt;
    }

    const isSelected = userChoice === label;
    const isCorrectTarget = correctAns === label;

    let style = "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-indigo-500 hover:text-indigo-400";
    let icon = null;

    if (answered) {
        if (isCorrectTarget) {
            style = "bg-emerald-500/10 border-emerald-500 text-emerald-400";
            icon = <CheckCircle2 className="w-5 h-5 shrink-0" />;
        } else if (isSelected) {
            style = "bg-rose-500/10 border-rose-500 text-rose-400 opacity-50";
            icon = <XCircle className="w-5 h-5 shrink-0" />;
        } else {
            style = "bg-slate-900/20 border-slate-800/50 text-slate-600 opacity-30";
        }
    } else if (isSelected) {
        style = "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20";
    }

    return (
        <button
            onClick={() => onSelect(qId, label)}
            disabled={answered}
            className={cn(
                "w-full px-5 py-4 rounded-2xl border-2 font-bold text-left transition-all duration-300 flex items-center justify-between group",
                style
            )}
        >
            <div className="flex items-center gap-4">
                <span className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-xl text-xs font-black transition-colors shrink-0",
                    (answered && isCorrectTarget) ? "bg-emerald-500 text-slate-900"
                        : (answered && isSelected && !isCorrectTarget) ? "bg-rose-500 text-white"
                            : isSelected ? "bg-white text-indigo-600" : "bg-slate-800 text-slate-500 group-hover:bg-indigo-500/20"
                )}>
                    {label}
                </span>
                <span className="text-sm md:text-base leading-snug">{text}</span>
            </div>
            {icon && <div className="ml-4 animate-in zoom-in duration-300">{icon}</div>}
        </button>
    );
}
