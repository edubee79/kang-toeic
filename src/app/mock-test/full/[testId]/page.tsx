'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { mockTests } from '@/data/mock-test-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock, CheckCircle2, AlertTriangle, ChevronLeft, ChevronRight, Volume2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import MockTest_LC_Set9 from '@/components/exam/mock/MockTest_LC_Set9';
import MockTest_RC_Set9 from '@/components/exam/mock/MockTest_RC_Set9';
import MockTest_LC_Set10 from '@/components/exam/mock/MockTest_LC_Set10';
import MockTest_RC_Set10 from '@/components/exam/mock/MockTest_RC_Set10';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc, doc, writeBatch } from 'firebase/firestore';
import { getCorrectAnswersForTest9, getCorrectAnswersForTest10 } from '@/lib/mock/scoring';


export default function MockTestRunner() {
    const params = useParams();
    const router = useRouter();
    const testId = Number(params?.testId);

    // State
    const [status, setStatus] = useState<'loading' | 'lc' | 'rc' | 'completed'>('loading');
    const [currentPart, setCurrentPart] = useState(1);
    const [timeLeft, setTimeLeft] = useState(45 * 60); // LC: 45m, RC: 75m
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [rcStarted, setRcStarted] = useState(false);

    // Pagination
    const [currentPage, setCurrentPage] = useState(0);

    const testData = mockTests[testId];

    const [attemptId, setAttemptId] = useState<string | null>(null);

    useEffect(() => {
        if (!testData) {
            alert('Test data not found!');
            router.push('/mock-test');
            return;
        }

        const checkAndStartAttempt = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                alert("로그인이 필요합니다.");
                router.push('/data-management/users'); // Or login page
                return;
            }
            const user = JSON.parse(userStr);
            const userId = user.userId || user.uid;

            // 1. Check existing attempts
            const attemptsRef = collection(db, 'MockTestAttempts');
            const q = query(attemptsRef, where('userId', '==', userId), where('testId', '==', testId));
            const snapshot = await getDocs(q);

            if (!snapshot.empty) {
                // Check if any allowRetake is true? Currently strict mode.
                const attempt = snapshot.docs[0].data();
                if (!attempt.allowRetake) {
                    alert("이미 응시한 내역이 있습니다. 재응시가 불가능합니다.\n관리자에게 문의해주세요.");
                    router.push('/mock-test');
                    return;
                } else {
                    // If retake allowed, maybe verify if we should delete old one or just create new?
                    // For now, if allowRetake is true, we assume it's like a new start.
                    // But simpler: if allowRetake is true, we delete the old doc and start fresh?
                    // Or just proceed. Let's start fresh by ignoring old doc, but actually creating a NEW one is better for history.
                    // For this strict implementation: simple check.
                }
            }

            // 2. Create new 'in_progress' attempt
            try {
                const docRef = await addDoc(attemptsRef, {
                    userId,
                    studentName: user.userName || user.name || "Unknown",
                    testId,
                    testTitle: testData.title,
                    status: 'in_progress',
                    date: new Date().toISOString(), // String format for UI
                    timestamp: serverTimestamp(),  // Firestore timestamp for sorting
                    allowRetake: false
                });
                setAttemptId(docRef.id);
                setStatus('lc');
            } catch (e) {
                console.error("Error creating attempt:", e);
                alert("시험 시작 중 오류가 발생했습니다.");
            }
        };

        checkAndStartAttempt();
    }, [testData, router, testId]);

    // Timer logic ... (same as before)
    useEffect(() => {
        if (status === 'completed' || status === 'loading') return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    if (status === 'lc') {
                        setStatus('rc');
                        setRcStarted(true);
                        setCurrentPart(5);
                        setCurrentPage(0);
                        return 75 * 60;
                    } else {
                        handleSubmit();
                        return 0;
                    }
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [status]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    };

    const handleAnswer = (questionId: string, value: string) => {
        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        // Part 1 Auto-Advance Logic
        if (currentPart === 1) {
            const p1Data = testData.parts.find((p: any) => p.partId === 1)?.data || [];
            let currentPageQuestions: any[] = [];

            // Screen 0: Q1-Q2 (Indices 0, 1)
            if (currentPage === 0) {
                currentPageQuestions = p1Data.slice(0, 2);
            }
            // Screen 1: Q3-Q6 (Indices 2, 3, 4, 5)
            else if (currentPage === 1) {
                currentPageQuestions = p1Data.slice(2, 6);
            }

            const allAnswered = currentPageQuestions.every((q: any) => newAnswers[q.id]);

            if (allAnswered) {
                // Max screens = 2 (0 and 1). If on 0, go to 1.
                if (currentPage < 1) {
                    setTimeout(() => setCurrentPage(prev => prev + 1), 500);
                } else {
                    // If on last page (1), go to Part 2?
                    // User requested auto-advance.
                    // Transition to Part 2
                    setTimeout(() => {
                        setCurrentPart(2);
                        setCurrentPage(0);
                    }, 500);
                }
            }
        }
    };

    const handleSubmit = () => {
        // Calculate score (mock logic for now)
        // Save attempt
        const attempt = {
            status: 'completed',
            date: new Date().toISOString(),
            answers: answers,
            testId
        };

        // Save to local storage
        const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
        savedAttempts[`full-${testId}`] = attempt;
        localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));

        router.push(`/mock-test/full/${testId}/result`);
    };

    // Scroll Sync Refs
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const [leftContentMinHeight, setLeftContentMinHeight] = useState('100%');

    // Sync Right Panel with Left Panel Scroll
    const handleLeftScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (rightPanelRef.current) {
            rightPanelRef.current.scrollTop = e.currentTarget.scrollTop;
        }
    };

    // Ensure Left Panel is tall enough to scroll full Right Content
    useEffect(() => {
        // Just checking
        const checkHeights = () => {
            if (leftPanelRef.current && rightPanelRef.current) {
                const rightHeight = rightPanelRef.current.scrollHeight;
                const leftHeight = leftPanelRef.current.scrollHeight;
                if (rightHeight > leftHeight) {
                    setLeftContentMinHeight(`${rightHeight}px`);
                }
            }
        };
        // Check periodically or on dependency change
        const interval = setInterval(checkHeights, 1000);
        checkHeights();
        return () => clearInterval(interval);
    }, [currentPart, currentPage, testData]);

    // Forward Right Panel Wheel to Left Panel
    useEffect(() => {
        const rightPanel = rightPanelRef.current;
        if (!rightPanel || !leftPanelRef.current) return;

        const handleWheel = (e: WheelEvent) => {
            if (leftPanelRef.current) {
                leftPanelRef.current.scrollTop += e.deltaY;
                e.preventDefault();
            }
        };

        rightPanel.addEventListener('wheel', handleWheel, { passive: false });
        return () => rightPanel.removeEventListener('wheel', handleWheel);
    }, []);

    if (status === 'loading') return <div className="p-10 text-center">Loading Test...</div>;

    // Special Handling for Premium Mock Test #9
    if (testId === 9) {
        if (status === 'lc') {
            return (
                <MockTest_LC_Set9
                    onFinishLC={(lcAnswers) => {
                        setAnswers(prev => ({ ...prev, ...lcAnswers }));
                        setStatus('rc');
                    }}
                />
            );
        }
        if (status === 'rc') {
            return (
                <MockTest_RC_Set9
                    initialAnswers={answers}
                    onFinishExam={async (rcAnswers) => {
                        const finalAnswers = { ...answers, ...rcAnswers };
                        setAnswers(finalAnswers);

                        // 1. Save to LocalStorage (Immediate UI)
                        const attempt = {
                            status: 'completed',
                            date: new Date().toISOString(),
                            answers: finalAnswers,
                            testId
                        };
                        const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
                        savedAttempts[`full-${testId}`] = attempt;
                        localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));

                        // 2. Sync to Firebase (MockTestAttempts & Manager_Results)
                        if (attemptId) {
                            try {
                                const correctAnswers = getCorrectAnswersForTest9();
                                let totalCorrect = 0;
                                let totalQs = 0;
                                const partScores: Record<string, { correct: number, total: number }> = {
                                    p1: { correct: 0, total: 0 },
                                    p2: { correct: 0, total: 0 },
                                    p3: { correct: 0, total: 0 },
                                    p4: { correct: 0, total: 0 },
                                    p5: { correct: 0, total: 0 },
                                    p6: { correct: 0, total: 0 },
                                    p7: { correct: 0, total: 0 },
                                };

                                // Group IDs by Part for Manager_Results
                                const partMappings: Record<string, { type: string, label: string }> = {
                                    'p1': { type: 'part1_test', label: '실전 모의고사' },
                                    'p2': { type: 'part2_test', label: '실전 모의고사' },
                                    'q32-q70': { type: 'part3_test', label: '실전 모의고사' },
                                    'q71-q100': { type: 'part4_test', label: '실전 모의고사' },
                                    'q101-q130': { type: 'part5_test', label: '실전 모의고사' },
                                    'q131-q146': { type: 'part6_test', label: '실전 모의고사' },
                                    'q147-q200': { type: 'part7_test', label: '실전 모의고사' }
                                };

                                const userStr = localStorage.getItem('toeic_user');
                                const user = userStr ? JSON.parse(userStr) : null;
                                const userId = user?.userId || user?.uid || "Unknown";

                                // Calculate scores
                                Object.entries(correctAnswers).forEach(([qId, correct]) => {
                                    totalQs++;
                                    const uAns = finalAnswers[qId];
                                    const isCorrect = uAns === correct;
                                    if (isCorrect) totalCorrect++;

                                    const qNum = parseInt(qId.replace(/[^0-9]/g, ''));
                                    let part = "";
                                    if (qId.startsWith('p1_')) part = "p1";
                                    else if (qId.startsWith('p2_')) part = "p2";
                                    else if (qNum >= 32 && qNum <= 70) part = "p3";
                                    else if (qNum >= 71 && qNum <= 100) part = "p4";
                                    else if (qNum >= 101 && qNum <= 130) part = "p5";
                                    else if (qNum >= 131 && qNum <= 146) part = "p6";
                                    else if (qNum >= 147 && qNum <= 200) part = "p7";

                                    if (part && partScores[part]) {
                                        partScores[part].total++;
                                        if (isCorrect) partScores[part].correct++;
                                    }
                                });

                                const batch = writeBatch(db);

                                // Update Attempt Doc
                                batch.update(doc(db, 'MockTestAttempts', attemptId), {
                                    status: 'completed',
                                    completedAt: serverTimestamp(),
                                    totalScore: totalCorrect,
                                    totalQuestions: totalQs,
                                    partScores: partScores,
                                    answers: finalAnswers
                                });

                                // Manager_Results sync
                                const resultsRef = collection(db, "Manager_Results");
                                Object.entries(partMappings).forEach(([range, config]) => {
                                    let pCorrect = 0;
                                    let pTotal = 0;

                                    // Use partScores for cleaner logic
                                    let pKey = range.startsWith('q') ? range : range; // Dummy
                                    if (range === 'p1') { pCorrect = partScores.p1.correct; pTotal = partScores.p1.total; }
                                    else if (range === 'p2') { pCorrect = partScores.p2.correct; pTotal = partScores.p2.total; }
                                    else if (range === 'q32-q70') { pCorrect = partScores.p3.correct; pTotal = partScores.p3.total; }
                                    else if (range === 'q71-q100') { pCorrect = partScores.p4.correct; pTotal = partScores.p4.total; }
                                    else if (range === 'q101-q130') { pCorrect = partScores.p5.correct; pTotal = partScores.p5.total; }
                                    else if (range === 'q131-q146') { pCorrect = partScores.p6.correct; pTotal = partScores.p6.total; }
                                    else if (range === 'q147-q200') { pCorrect = partScores.p7.correct; pTotal = partScores.p7.total; }

                                    if (pTotal > 0) {
                                        batch.set(doc(resultsRef), {
                                            student: user?.userName || "Unknown",
                                            studentId: userId,
                                            unit: `제1회 실전 모의고사 (${config.type})`,
                                            type: config.type,
                                            score: pCorrect,
                                            total: pTotal,
                                            timestamp: serverTimestamp(),
                                            createdAt: serverTimestamp()
                                        });
                                    }
                                });

                                await batch.commit();

                            } catch (error) {
                                console.error("Failed to sync Mock Test 9 results:", error);
                            }
                        }

                        router.push(`/mock-test/full/${testId}/result`);
                    }}
                />
            );
        }
    }

    // Special Handling for Premium Mock Test #10 (Mock Test 2)
    if (testId === 10) {
        if (status === 'lc') {
            return (
                <MockTest_LC_Set10
                    onFinishLC={(lcAnswers) => {
                        setAnswers(prev => ({ ...prev, ...lcAnswers }));
                        setStatus('rc');
                    }}
                />
            );
        }
        if (status === 'rc') {
            return (
                <MockTest_RC_Set10
                    initialAnswers={answers}
                    onFinishExam={async (rcAnswers) => {
                        const finalAnswers = { ...answers, ...rcAnswers };
                        setAnswers(finalAnswers);

                        // 1. Save to LocalStorage (Immediate UI)
                        const attempt = {
                            status: 'completed',
                            date: new Date().toISOString(),
                            answers: finalAnswers,
                            testId
                        };
                        const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
                        savedAttempts[`full-${testId}`] = attempt;
                        localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));

                        // 2. Mark Attempt as Completed in DB with Total Score
                        if (attemptId) {
                            try {
                                let totalCorrect = 0;
                                let totalQs = 0;
                                const partScores: Record<string, { correct: number, total: number }> = {
                                    p1: { correct: 0, total: 0 },
                                    p2: { correct: 0, total: 0 },
                                    p3: { correct: 0, total: 0 },
                                    p4: { correct: 0, total: 0 },
                                    p5: { correct: 0, total: 0 },
                                    p6: { correct: 0, total: 0 },
                                    p7: { correct: 0, total: 0 },
                                };

                                const userStr = localStorage.getItem('toeic_user');
                                if (userStr) {
                                    let correctAnswers = {};
                                    if (testId === 9) correctAnswers = getCorrectAnswersForTest9();
                                    else if (testId === 10) correctAnswers = getCorrectAnswersForTest10();

                                    if (Object.keys(correctAnswers).length > 0) {
                                        Object.entries(correctAnswers).forEach(([qId, correct]) => {
                                            totalQs++;
                                            const uAns = finalAnswers[qId];
                                            const isCorrect = uAns === correct;
                                            if (isCorrect) totalCorrect++;

                                            // Determine Part
                                            const qNum = parseInt(qId.replace(/[^0-9]/g, ''));
                                            let part = "";
                                            if (qId.startsWith('p1_')) part = "p1";
                                            else if (qId.startsWith('p2_')) part = "p2";
                                            else if (qNum >= 32 && qNum <= 70) part = "p3";
                                            else if (qNum >= 71 && qNum <= 100) part = "p4";
                                            else if (qNum >= 101 && qNum <= 130) part = "p5";
                                            else if (qNum >= 131 && qNum <= 146) part = "p6";
                                            else if (qNum >= 147 && qNum <= 200) part = "p7";

                                            if (part && partScores[part]) {
                                                partScores[part].total++;
                                                if (isCorrect) partScores[part].correct++;
                                            }
                                        });
                                    }
                                }

                                const attemptRef = doc(db, 'MockTestAttempts', attemptId);
                                await updateDoc(attemptRef, {
                                    status: 'completed',
                                    completedAt: serverTimestamp(),
                                    totalScore: totalCorrect,
                                    totalQuestions: totalQs,
                                    partScores: partScores // Save detailed breakdown
                                });
                            } catch (e) {
                                console.error("Failed to update status to completed", e);
                            }
                        }

                        // 3. Sync to Firebase for Dashboard (Manager_Results)
                        const userStr = localStorage.getItem('toeic_user');
                        if (userStr) {
                            const user = JSON.parse(userStr);

                            // Determine correct answers and labels based on testId
                            let correctAnswers = {};
                            let testLabel = "";

                            if (testId === 9) {
                                correctAnswers = getCorrectAnswersForTest9();
                                testLabel = "제1회 실전 모의고사";
                            } else if (testId === 10) {
                                correctAnswers = getCorrectAnswersForTest10();
                                testLabel = "제2회 실전 모의고사";
                            }

                            if (Object.keys(correctAnswers).length > 0) {
                                // Group IDs by Part for separate recording
                                const partMappings: Record<string, { type: string, label: string }> = {
                                    'p1': { type: 'part1_test', label: '실전 모의고사' },
                                    'p2': { type: 'part2_test', label: '실전 모의고사' },
                                    'q32-q70': { type: 'part3_test', label: '실전 모의고사' },
                                    'q71-q100': { type: 'part4_test', label: '실전 모의고사' },
                                    'q101-q130': { type: 'part5_test', label: '실전 모의고사' },
                                    'q131-q146': { type: 'part6_test', label: '실전 모의고사' },
                                    'q147-q175': { type: 'part7_single', label: '실전 모의고사' },
                                    'q176-q200': { type: 'part7_double', label: '실전 모의고사' }
                                };

                                // Save each part to Manager_Results
                                const savePromises = Object.entries(partMappings).map(async ([partRange, config]) => {
                                    let correctCount = 0;
                                    let totalCount = 0;
                                    const incorrectQs: any[] = [];

                                    Object.entries(correctAnswers).forEach(([qId, correct]) => {
                                        // Logic to check if qId belongs to this partRange
                                        let belongs = false;
                                        const qNum = parseInt(qId.replace(/[^0-9]/g, ''));

                                        if (partRange === 'p1' && qId.startsWith('p1_')) belongs = true;
                                        else if (partRange === 'p2' && qId.startsWith('p2_')) belongs = true;
                                        else if (partRange === 'q32-q70' && qNum >= 32 && qNum <= 70) belongs = true;
                                        else if (partRange === 'q71-q100' && qNum >= 71 && qNum <= 100) belongs = true;
                                        else if (partRange === 'q101-q130' && qNum >= 101 && qNum <= 130) belongs = true;
                                        else if (partRange === 'q131-q146' && qNum >= 131 && qNum <= 146) belongs = true;
                                        else if (partRange === 'q147-q175' && qNum >= 147 && qNum <= 175) belongs = true;
                                        else if (partRange === 'q176-q200' && qNum >= 176 && qNum <= 200) belongs = true;

                                        if (belongs) {
                                            const userAns = finalAnswers[qId];
                                            totalCount++;
                                            if (userAns === correct) correctCount++;
                                            else {
                                                incorrectQs.push({ id: qId, classification: 'Unknown' });
                                            }
                                        }
                                    });

                                    if (totalCount > 0) {
                                        return addDoc(collection(db, "Manager_Results"), {
                                            student: user.userName || user.name || "Unknown",
                                            studentId: user.userId || user.uid,
                                            unit: `${testLabel} (${config.type})`,
                                            type: config.type,
                                            score: correctCount,
                                            total: totalCount,
                                            wrongCount: totalCount - correctCount,
                                            incorrectQuestions: incorrectQs,
                                            timestamp: serverTimestamp()
                                        });
                                    }
                                });

                                await Promise.all(savePromises);
                            }
                        }

                        router.push(`/mock-test/full/${testId}/result`);
                    }}
                />
            );
        }
    }

    return (
        <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
            {/* Header */}
            <header className="relative bg-white border-b px-6 py-3 flex items-center justify-between shrink-0 h-16 z-20">
                <div className="flex items-center gap-4">
                    <h1 className="font-bold text-lg">{testData.title}</h1>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${status === 'lc' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                        {status === 'lc' ? 'L/C (Listening)' : 'R/C (Reading)'}
                    </span>
                    <span className="text-gray-500 text-sm">Part {currentPart}</span>
                </div>

                {/* Central Header Navigation - High Z-Index & Black Color */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8 z-30">
                    <button
                        onClick={() => {
                            if (currentPage > 0) setCurrentPage(p => p - 1);
                            else if (currentPart > 1) {
                                setCurrentPart(p => p - 1);
                                setCurrentPage(0);
                            }
                        }}
                        disabled={currentPage === 0 && currentPart === 1}
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 disabled:opacity-20 disabled:hover:scale-100 transition-all shadow-lg ring-2 ring-white"
                        title="이전 페이지"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <span className="font-mono font-bold text-lg text-slate-800 min-w-[3rem] text-center">
                        {currentPart >= 5 ? `PAGE ${currentPage + 1}` : `PART ${currentPart}`}
                    </span>

                    <button
                        onClick={() => {
                            if (!isLastPage(currentPart, currentPage, testData)) {
                                setCurrentPage(p => p + 1);
                            } else {
                                if (currentPart < (status === 'lc' ? 4 : 7)) {
                                    setCurrentPart(p => p + 1);
                                    setCurrentPage(0);
                                }
                            }
                        }}
                        disabled={isLastPage(currentPart, currentPage, testData) && currentPart === (status === 'lc' ? 4 : 7)}
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 disabled:opacity-20 disabled:hover:scale-100 transition-all shadow-lg ring-2 ring-white"
                        title="다음 페이지"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Right Side: Timer */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 font-mono text-xl font-bold text-slate-700">
                        <Clock className="w-5 h-5" />
                        {formatTime(timeLeft)}
                    </div>
                    {currentPart === 7 && isLastPage(7, currentPage, testData) && (
                        <Button onClick={handleSubmit} size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 text-xs font-bold shadow-md shadow-indigo-200">
                            Submit Test
                        </Button>
                    )}
                </div>
            </header>
            <main className="flex-1 flex overflow-hidden relative">
                {/* Left Panel */}
                <div
                    ref={leftPanelRef}
                    onScroll={handleLeftScroll}
                    className="w-1/2 min-w-[50%] h-full bg-white text-slate-800 overflow-hidden flex flex-col border-r border-slate-200 shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10"
                >
                    {renderLeftContent(currentPart, testData, currentPage, answers, handleAnswer)}
                </div>

                {/* Right Panel */}
                <div
                    ref={rightPanelRef}
                    className="w-1/2 min-w-[50%] h-full bg-slate-50 text-slate-800 overflow-hidden flex flex-col"
                >
                    {renderRightContent(currentPart, testData, currentPage, answers, handleAnswer)}
                </div>


            </main>
        </div>
    );
}

// Helper Render Functions

function isLastPage(part: number, page: number, data: any) {
    if (!data) return true;
    if (part === 1) return page >= 2; // 6 Qs, 2 per page -> 3 pages (0-2)
    if (part === 2) return page >= 0; // 25 Qs, All on Left Panel -> 1 page (0)
    if (part === 3) {
        // 13 Sets. 4 Sets per page (2 Left, 2 Right). -> ceil(13/4) = 4 pages (0-3)
        const totalSets = data?.part3?.sets?.length || 0;
        return page >= Math.ceil(totalSets / 4) - 1;
    }
    if (part === 4) {
        // 10 Sets. 4 Sets per page -> ceil(10/4) = 3 pages (0-2)
        const totalSets = data?.part4?.sets?.length || 0;
        return page >= Math.ceil(totalSets / 4) - 1;
    }
    if (part === 5) {
        // 30 Qs. 20 Qs per page (10 L, 10 R) -> ceil(30/20) = 2 pages (0-1)
        return page >= 1;
    }
    if (part === 6) {
        // 4 Sets. 1 Set per page (Book View) -> 4 pages
        const totalSets = data?.part6?.sets?.length || 0;
        return page >= totalSets - 1;
    }
    if (part === 7) {
        // Part 7 Sets. 1 Set per page.
        const totalSets = data?.part7?.sets?.length || 0;
        return page >= totalSets - 1;
    }
    return false;
}

function renderLeftContent(part: number, data: any, page: number, answers: any, onAnswer: any) {
    if (part === 1) {
        // Part 1 Left: Directions Only
        return (
            <div className="p-8 flex flex-col items-center justify-center h-full text-center bg-gray-50/50">
                <div className="max-w-md space-y-6">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                    <h2 className="text-2xl font-bold text-gray-800">PART 1</h2>
                    <div className="text-left bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
                        <p className="font-semibold text-gray-700">Directions:</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            For each question in this part, you will hear four statements about a picture in your test book.
                            When you hear the statements, you must select the one statement that best describes what you see in the picture.
                            Then find the number of the question on your answer sheet and mark your answer.
                            The statements will not be printed in your test book and will be spoken only one time.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (part === 2) {
        // Part 2 Left: Directions + All Questions (2 columns)
        // Questions 7-31.
        // Split logic: Col 1 (7-19), Col 2 (20-31)
        const qStart = 7;
        const qEnd = 31;
        const total = qEnd - qStart + 1; // 25 questions
        const mid = 13; // 7 to 19 is 13 items.

        const col1Nums = Array.from({ length: mid }, (_, i) => qStart + i); // (7..19)
        const col2Nums = Array.from({ length: total - mid }, (_, i) => qStart + mid + i); // (20..31)

        return (
            <div className="flex flex-col h-full gap-6 p-6 overflow-y-auto">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-600 mb-4">
                    <h3 className="font-bold text-gray-800 mb-2">PART 2</h3>
                    <p>Directions: You will hear a question or statement and three responses spoken in English. They will not be printed in your test book and will be spoken only one time. Select the best response to the question or statement and mark the letter (A), (B), or (C) on your answer sheet.</p>
                </div>
                <div className="flex gap-8 h-full">
                    <div className="flex-1 flex flex-col gap-3">
                        {col1Nums.map(num => renderOMRRow(num, answers, onAnswer))}
                    </div>
                    <div className="w-px bg-gray-200 self-stretch my-2"></div>
                    <div className="flex-1 flex flex-col gap-3">
                        {col2Nums.map(num => renderOMRRow(num, answers, onAnswer))}
                    </div>
                </div>
            </div>
        );
    }

    if (part === 3) {
        // Part 3 Left: 2 Sets (6 Qs approx)
        const sets = data?.part3?.sets || [];
        const startSetIdx = page * 4;
        const leftSets = sets.slice(startSetIdx, startSetIdx + 2);

        return (
            <div className="flex flex-col gap-8 p-6 h-full overflow-y-auto">
                <div className="mb-2 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-2">Part 3: Conversations</h3>
                    <p>Directions: You will hear some conversations between two or more people. You will be asked to answer three questions about what the speakers say in each conversation. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet.</p>
                </div>
                {leftSets.map((set: any) => renderPart3QuestionSet(set, answers, onAnswer))}
            </div>
        );
    }

    if (part === 4) {
        const sets = data?.part4?.sets || [];
        const startSetIdx = page * 4;
        const leftSets = sets.slice(startSetIdx, startSetIdx + 2);

        return (
            <div className="flex flex-col gap-8 p-6 h-full overflow-y-auto">
                <div className="mb-2 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-2">Part 4: Talks</h3>
                    <p>Directions: You will hear some talks given by a single speaker. You will be asked to answer three questions about what the speaker says in each talk. Select the best response to each question and mark the letter (A), (B), (C), or (D) on your answer sheet.</p>
                </div>
                {leftSets.map((set: any) => renderPart3QuestionSet(set, answers, onAnswer))}
            </div>
        );
    }

    if (part === 5) {
        // Part 5 Left: 10 Questions
        const questions = data?.part5 || [];
        // Page 0: L=0-10, R=10-20. Page 1: L=20-30
        const startIdx = page * 20;
        const leftQs = questions.slice(startIdx, startIdx + 10);

        return (
            <div className="p-6 flex flex-col gap-4 overflow-y-auto h-full text-sm">
                <div className="mb-2 p-4 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-2">Part 5: Incomplete Sentences</h3>
                    <p>Directions: A word or phrase is missing in each of the sentences below. Four answer choices are given below each sentence. Select the best answer to complete the sentence.</p>
                </div>
                {leftQs.map((q: any) => renderPart5Question(q, answers, onAnswer))}
            </div>
        );
    }

    if (part === 6) {
        // Book View: Passage Left
        // Assuming 1 Set per Page.
        const setIndex = page;
        const set = data?.part6?.sets?.[setIndex];
        if (!set) return <div className="p-8 text-center text-gray-500">End of Section</div>;

        return (
            <div className="p-8 h-full overflow-y-auto font-serif text-lg leading-relaxed text-gray-800 bg-white">
                <div className="mb-6 pb-4 border-b border-gray-100">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm font-medium">
                        Questions {set.questions[0].id}-{set.questions[set.questions.length - 1].id}
                    </span>
                </div>
                <div className="whitespace-pre-wrap">{set.content}</div>
            </div>
        );
    }

    if (part === 7) {
        // Book View: Passage Left
        const setIndex = page;
        const set = data?.part7?.sets?.[setIndex];
        if (!set) return <div className="p-8 text-center text-gray-500">End of Section</div>;

        return (
            <div className="p-8 h-full overflow-y-auto">
                <div className="mb-6 pb-4 border-b border-gray-100">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded text-sm font-medium">
                        Questions {set.questions[0].id}-{set.questions[set.questions.length - 1].id}
                    </span>
                </div>
                <div className="prose prose-sm max-w-none">
                    {set.passages.map((p: any) => (
                        <div key={p.id} className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                            {p.title && <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{p.title}</h3>}
                            <div className="markdown-content whitespace-pre-wrap font-serif leading-relaxed text-gray-800">
                                {p.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
}

function renderRightContent(part: number, data: any, page: number, answers: any, onAnswer: any) {
    if (part === 1) {
        // Part 1 Right: 2 Questions (Vertical Stack)
        const questions = data?.part1 || [];
        const startIdx = page * 2;
        const pageQs = questions.slice(startIdx, startIdx + 2);

        return (
            <div className="h-full overflow-y-auto p-6 bg-slate-50/50">
                <div className="flex flex-col gap-8">
                    {pageQs.map((q: any) => renderPart1Question(q, answers, onAnswer))}
                </div>
            </div>
        );
    }

    if (part === 2) {
        // Part 2 Right: Empty or Decorative
        // Since all Qs are on Left (Split Columns), this space is free.
        return (
            <div className="h-full flex items-center justify-center bg-slate-50 text-slate-300 select-none">
                <div className="text-center">
                    <div className="text-4xl mb-2">→</div>
                    <p className="font-medium">Continue to next page</p>
                </div>
            </div>
        );
    }

    if (part === 3) {
        // Part 3 Right: Next 2 Sets
        const sets = data?.part3?.sets || [];
        const startSetIdx = page * 4 + 2; // Offset by 2 (Left took 0,1)
        const rightSets = sets.slice(startSetIdx, startSetIdx + 2);

        return (
            <div className="flex flex-col gap-8 p-6 h-full overflow-y-auto bg-slate-50/30">
                {rightSets.map((set: any) => renderPart3QuestionSet(set, answers, onAnswer))}
            </div>
        );
    }

    if (part === 4) {
        // Part 4 Right: Next 2 Sets
        const sets = data?.part4?.sets || [];
        const startSetIdx = page * 4 + 2;
        const rightSets = sets.slice(startSetIdx, startSetIdx + 2);

        return (
            <div className="flex flex-col gap-8 p-6 h-full overflow-y-auto bg-slate-50/30">
                {rightSets.map((set: any) => renderPart3QuestionSet(set, answers, onAnswer))}
            </div>
        );
    }

    if (part === 5) {
        // Part 5 Right: Next 10 Questions
        const questions = data?.part5 || [];
        // Page 0: L=0-10, R=10-20
        const startIdx = page * 20 + 10;
        const rightQs = questions.slice(startIdx, startIdx + 10);

        if (rightQs.length === 0) {
            return <div className="h-full bg-slate-50"></div>;
        }

        return (
            <div className="p-6 flex flex-col gap-4 overflow-y-auto h-full text-sm bg-slate-50/30">
                {rightQs.map((q: any) => renderPart5Question(q, answers, onAnswer))}
            </div>
        );
    }

    if (part === 6) {
        // Part 6 Right: Questions (Book View)
        // Matches Set index from Left Page
        const setIndex = page;
        const set = data?.part6?.sets?.[setIndex];
        if (!set) return null;

        return (
            <div className="p-8 h-full overflow-y-auto bg-slate-50/50">
                {/* Questions Logic for Part 6 (Usually embedded blanks, but visual representation here) */}
                <div className="space-y-6">
                    {/* Try to use renderPart6Set but only formatted questions? 
                         Actually renderPart6Set in original code renders content+questions.
                         We want to split. Content was on Left. Questions here.
                         Logic: Render questions list. 
                      */}
                    {set.questions.map((q: any) => renderPart5Question(q, answers, onAnswer))}
                </div>
            </div>
        );
    }

    if (part === 7) {
        // Part 7 Right: Questions (Book View)
        const setIndex = page;
        const set = data?.part7?.sets?.[setIndex];
        if (!set) return null;

        return (
            <div className="p-8 h-full overflow-y-auto bg-slate-50/50">
                <div className="space-y-8">
                    {set.questions.map((q: any) => (
                        <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <div className="flex gap-3 mb-4">
                                <span className="flex-none w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
                                    {q.id}
                                </span>
                                <p className="font-medium text-slate-800 pt-1">{q.text}</p>
                            </div>
                            <div className="pl-11">
                                <div className="flex flex-col gap-3">
                                    {q.options.map((opt: string) => {
                                        let label, text;
                                        // Handle "(A) Text" format
                                        const match = opt.match(/\(([ABCD])\)\s*(.+)/);
                                        if (match) {
                                            label = match[1];
                                            text = match[2];
                                        } else {
                                            label = opt.substring(0, 1).replace(/[\(\)]/g, ''); // Fallback
                                            text = opt.substring(3);
                                        }

                                        const isSelected = answers[q.id] === label;

                                        return (
                                            <label key={opt} className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border transition-all ${isSelected ? 'bg-indigo-50 border-indigo-200' : 'hover:bg-slate-50 border-transparent'}`}>
                                                <input
                                                    type="radio"
                                                    name={`q-${q.id}`}
                                                    value={label}
                                                    checked={isSelected}
                                                    onChange={() => onAnswer(String(q.id), label)}
                                                    className="hidden"
                                                />
                                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-400'}`}>
                                                    {label}
                                                </div>
                                                <span className={`text-sm ${isSelected ? 'text-indigo-900 font-medium' : 'text-slate-600'}`}>{text}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    return null;
}

// ----------------------------------------------------------------------
// Specific Renderers
// ----------------------------------------------------------------------

function renderPart1Question(q: any, answers: any, onAnswer: any) {
    if (!q) return null;
    return (
        <div key={q.id} className="flex flex-col gap-2">
            <div className="relative aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden border border-slate-300">
                {/* Image Placeholder or Actual Image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <span className="text-xs">Image {q.id}</span>
                </div>
                {q.imageUrl && <img src={q.imageUrl} alt={`Question ${q.id}`} className="w-full h-full object-cover" />}
            </div>
            <div className="flex gap-2 items-center justify-between px-2">
                <span className="font-bold text-indigo-600">Q{q.id}</span>
                <div className="flex gap-4">
                    {['A', 'B', 'C', 'D'].map((opt) => (
                        <label key={opt} className="flex items-center gap-1 cursor-pointer hover:opacity-75">
                            <input
                                type="radio"
                                name={`q${q.id}`}
                                value={opt}
                                checked={answers[q.id] === opt}
                                onChange={() => onAnswer(String(q.id), opt)}
                                className="accent-indigo-600"
                            />
                            <span className="text-xs font-bold text-slate-600">{opt}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

function renderOMRRow(qNum: number, answers: any, onAnswer: any) {
    return (
        <div key={qNum} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0 hover:bg-slate-50 px-2 rounded">
            <span className="font-bold text-slate-700 w-8">{qNum}.</span>
            <div className="flex gap-6">
                {['A', 'B', 'C'].map((opt) => (
                    <label key={opt} className="flex items-center gap-1.5 cursor-pointer group">
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold transition-all
                            ${answers[qNum] === opt ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-400 group-hover:border-indigo-400'}`}>
                            {opt}
                        </div>
                        <input
                            type="radio"
                            name={`q${qNum}`}
                            value={opt}
                            checked={answers[qNum] === opt}
                            onChange={() => onAnswer(String(qNum), opt)}
                            className="hidden"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

function renderPart3QuestionSet(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    return (
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="text-xs font-bold text-slate-500 mb-3 bg-slate-50 inline-block px-2 py-1 rounded">
                Questions {set.questions[0].id}-{set.questions[set.questions.length - 1].id}
            </div>
            {/* Graphics if exists */}
            {set.graphic && (
                <div className="mb-4 bg-slate-100 p-2 rounded text-center text-xs text-slate-400">
                    [Graphic: {set.graphic}]
                </div>
            )}
            <div className="flex flex-col gap-6">
                {set.questions.map((q: any) => renderPart5Question(q, answers, onAnswer))}
            </div>
        </div>
    );
}

function renderPart5Question(q: any, answers: any, onAnswer: any) {
    if (!q) return null;
    return (
        <div key={q.id} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group">
            <div className="flex gap-2 mb-1.5">
                <div className="shrink-0 font-black text-indigo-400 text-base">{q.id}.</div>
                <div className="text-[13px] font-bold text-slate-800 leading-snug pt-0.5">{q.text}</div>
            </div>
            <div className="grid grid-cols-1 gap-0 ml-6">
                {q.options.map((opt: any) => {
                    let label, text;
                    if (typeof opt === 'string') {
                        const match = opt.match(/\(([ABCD])\) (.+)/);
                        label = match ? match[1] : opt.charAt(1);
                        text = match ? match[2] : opt; // Or clean text
                        if (!text) text = opt;
                    } else {
                        label = opt.label;
                        text = opt.text;
                    }

                    const isSelected = answers[q.id] === label;

                    return (
                        <label
                            key={label}
                            className={`
                                flex items-center gap-2 px-2 py-[1px] rounded-lg cursor-pointer border transition-all
                                ${isSelected
                                    ? 'border-indigo-600 bg-indigo-50/50'
                                    : 'border-transparent hover:bg-slate-50'}
                            `}
                        >
                            <div className={`
                                shrink-0 w-4 h-4 rounded-full border flex items-center justify-center text-[8px] font-black
                                ${isSelected
                                    ? 'bg-indigo-600 text-white border-indigo-600'
                                    : 'bg-white text-slate-400 border-slate-200'}
                            `}>
                                {label}
                            </div>
                            <span className={`text-[13px] font-semibold ${isSelected ? 'text-indigo-900' : 'text-slate-600'}`}>{text}</span>
                            <input
                                type="radio"
                                name={String(q.id)}
                                value={label}
                                checked={isSelected}
                                onChange={() => onAnswer(String(q.id), label)}
                                className="hidden"
                            />
                        </label>
                    );
                })}
            </div>
        </div>
    );
}

function renderPart6Set(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const questions = set.questions || [];
    const col1 = questions.slice(0, 2);
    const col2 = questions.slice(2, 4);

    return (
        <div className="h-full flex flex-col pt-4 px-2">
            <div className="mb-3 px-1">
                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-xs font-bold text-slate-600 inline-block">
                    {set.guidance || `Questions ${questions[0]?.id}-${questions[questions.length - 1]?.id}`}
                </div>
            </div>
            <div className="border border-slate-300 p-5 bg-white rounded-lg shadow-sm text-[13px] leading-relaxed whitespace-pre-wrap mb-4 overflow-y-auto max-h-[50%] text-slate-900">
                {set.content}
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="flex-1 grid grid-cols-2 gap-6 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {col1.map((q: any) => renderPart5Question(q, answers, onAnswer))}
                </div>
                <div className="flex flex-col gap-4">
                    {col2.map((q: any) => renderPart5Question(q, answers, onAnswer))}
                </div>
            </div>
        </div>
    );
}

function renderPart7Set(set: any, answers: any, onAnswer: any) {
    if (!set) return null;
    const passages = set.passages || [];
    const content = passages.map((p: any) => p.content).join('\n\n----------------\n\n');
    const questions = set.questions || [];
    const mid = Math.ceil(questions.length / 2);
    const col1 = questions.slice(0, mid);
    const col2 = questions.slice(mid);

    return (
        <div className="h-full flex flex-col pt-4 px-2">
            <div className="mb-3 px-1">
                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded text-xs font-bold text-slate-600 inline-block">
                    {set.questionRange ? `Questions ${set.questionRange}` : 'Passage'}
                </div>
            </div>
            <div className="border border-slate-300 p-5 bg-white rounded-lg shadow-sm text-[13px] leading-relaxed whitespace-pre-wrap mb-4 overflow-y-auto max-h-[50%] text-slate-900">
                {content}
            </div>
            <div className="w-full h-px bg-slate-200 my-2"></div>
            <div className="flex-1 grid grid-cols-2 gap-6 overflow-y-auto">
                <div className="flex flex-col gap-4">
                    {col1.map((q: any) => renderPart5Question(q, answers, onAnswer))}
                </div>
                <div className="flex flex-col gap-4">
                    {col2.map((q: any) => renderPart5Question(q, answers, onAnswer))}
                </div>
            </div>
        </div>
    );
}
