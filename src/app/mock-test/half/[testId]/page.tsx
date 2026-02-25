'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc, writeBatch } from 'firebase/firestore';
import { calculateLevelScore } from '@/lib/level/scoring';
import { PerformanceSyncService } from '@/services/performanceSyncService';

// 고품질 UI 컴포넌트 임포트
import HalfTest_LC_Set9 from '@/components/exam/mock/HalfTest_LC_Set9';
import HalfTest_RC_Set9 from '@/components/exam/mock/HalfTest_RC_Set9';

/**
 * 하프테스트 통합 응시 페이지
 * 기존 실전 모의고사 UI를 100% 사용하여 몰입감 있는 수험 환경 제공
 */
export default function HalfTestPage() {
    const params = useParams();
    const router = useRouter();
    const testId = params?.testId as string;
    const searchParams = useSearchParams();
    const fromPath = searchParams.get('from') || '/mock-test';

    const [status, setStatus] = useState<'loading' | 'lc' | 'rc' | 'completed' | 'submitting'>('loading');
    const [attemptId, setAttemptId] = useState<string | null>(null);
    const [lcAnswers, setLcAnswers] = useState<Record<string, string>>({});

    // 1. 초기 세션 생성
    useEffect(() => {
        const init = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                alert("로그인이 필요합니다.");
                router.push(fromPath);
                return;
            }
            const user = JSON.parse(userStr);

            try {
                const docRef = await addDoc(collection(db, 'MockTestAttempts'), {
                    userId: user.userId || user.uid,
                    studentName: user.userName || user.name || "Unknown",
                    testId: `half_${testId}`,
                    testTitle: `하프테스트 제2회 (${testId.toUpperCase()})`,
                    status: 'in_progress',
                    type: 'half',
                    date: new Date().toISOString(),
                    timestamp: serverTimestamp()
                });
                setAttemptId(docRef.id);
                setStatus('lc');
            } catch (e) {
                console.error(e);
            }
        };
        init();
    }, [testId, router]);

    // 2. LC 종료 핸들러
    const handleFinishLC = (answers: Record<string, string>) => {
        setLcAnswers(answers);
        setStatus('rc'); // RC로 전환 (35분 타이머 시작)
    };

    // 3. 전체 시험 종료 및 제출
    const handleFinishExam = async (rcAnswers: Record<string, string>, timeLogs: Record<string, number>) => {
        if (!attemptId) {
            console.error("Missing attemptId");
            return;
        }

        setStatus('submitting');
        const allAnswers = { ...lcAnswers, ...rcAnswers };

        try {
            const userStr = localStorage.getItem('toeic_user');
            const user = userStr ? JSON.parse(userStr) : null;
            const userId = user?.userId || user?.uid || 'Unknown';

            // **[LEVEL TEST SCORING ENGINE]**
            const result = calculateLevelScore(testId, allAnswers);

            const totalCorrect = result.correctCount;
            const totalScore = result.totalScore;
            const partStats = result.partScores;

            // 2. Batch Update (MockTestAttempts & Manager_Results)
            const batch = writeBatch(db);

            // Update Attempt Doc
            batch.update(doc(db, 'MockTestAttempts', attemptId), {
                status: 'completed',
                answers: allAnswers,
                timeLogs: timeLogs,
                totalScore: totalScore,
                totalQuestions: result.totalQuestions,
                partScores: partStats,
                completedAt: serverTimestamp()
            });

            // Add to Manager_Results for Dashboard/Statistics
            const resultsRef = collection(db, 'Manager_Results');
            const commonData = {
                studentId: userId,
                studentName: user?.userName || 'Unknown',
                className: user?.className || 'Unknown',
                timestamp: serverTimestamp(),
                createdAt: serverTimestamp(),
                attemptId: attemptId,
            };

            // Individual Part Records for Dashboard
            const partMapping: Record<string, string> = {
                p1: 'part1_test', p2: 'part2_test', p3: 'part3_test', p4: 'part4_test',
                p5: 'part5_test', p6: 'part6_test', p7s: 'part7_single', p7m: 'part7_double'
            };

            const PART_MAX_STANDARD: Record<string, number> = {
                p1: 6, p2: 25, p3: 39, p4: 30,
                p5: 30, p6: 16, p7s: 29, p7m: 25
            };

            const testLabel = testId.includes('a') ? '레벨테스트 1회' : '레벨테스트 2회';

            Object.entries(partStats).forEach(([pKey, stats]: [any, any]) => {
                if (partMapping[pKey] && stats.total > 0) {
                    const resultDoc = doc(resultsRef);
                    const standardMax = PART_MAX_STANDARD[pKey] || stats.total * 2; // Approximate if not set

                    // Scale score to standard full test size for consistent prediction
                    // Level test has ~half questions, so we scale it.
                    const scaledScore = Math.round((stats.correct / stats.total) * standardMax);

                    batch.set(resultDoc, {
                        ...commonData,
                        type: partMapping[pKey],
                        unit: `${testLabel} (${pKey.toUpperCase()})`,
                        detail: testLabel,
                        score: scaledScore,
                        total: standardMax,
                        rawCorrect: stats.correct,
                        rawTotal: stats.total,
                        percentage: Math.round((stats.correct / stats.total) * 100)
                    });
                }
            });

            // Add summary record for the whole Level Test assignment
            const summaryDoc = doc(resultsRef);
            batch.set(summaryDoc, {
                ...commonData,
                type: 'level_test',
                unit: testLabel,
                detail: testLabel,
                score: totalScore,
                total: 1000,
                isSummary: true
            });

            await batch.commit();

            // ✅ NEW: Sync Performance Summary after Level Test submission
            await PerformanceSyncService.syncUserSummary(userId);

            // 3. Local Storage Sync & Navigation
            const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
            savedAttempts[`full-half_${testId}`] = {
                status: 'completed',
                answers: allAnswers,
                timeLogs: timeLogs,
                totalScore: totalScore,
                partScores: partStats,
                date: new Date().toISOString()
            };
            localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));

            const resultUrl = `/mock-test/level/result?testId=${testId}&attemptId=${attemptId}${searchParams.get('from') ? `&from=${searchParams.get('from')}` : ''}`;
            router.push(resultUrl);

            setTimeout(() => {
                if (window.location.pathname.includes('half')) {
                    window.location.href = resultUrl;
                }
            }, 800);
        } catch (e) {
            console.error("[ERROR] Failed to finish exam:", e);
            setStatus('rc');
            alert("제출 중 오류가 발생했습니다. 네트워크를 확인해주세요.");
        }
    };

    if (status === 'loading') {
        return <div className="fixed inset-0 bg-white flex items-center justify-center font-bold text-slate-400 animate-pulse transition-all">하프테스트 준비 중...</div>;
    }

    return (
        <main className="min-h-screen bg-white">
            {status === 'submitting' && (
                <div className="fixed inset-0 z-[2000] bg-slate-900/80 flex flex-col items-center justify-center text-white backdrop-blur-sm">
                    <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-6"></div>
                    <h2 className="text-2xl font-black italic tracking-tighter">ANALYZING YOUR PERFORMANCE...</h2>
                    <p className="text-slate-400 mt-2 font-bold uppercase tracking-widest text-xs">깡쌤의 정밀 진단 리포트를 생성하고 있습니다.</p>
                </div>
            )}
            {status === 'lc' ? (
                <HalfTest_LC_Set9 testId={testId} onFinishLC={handleFinishLC} />
            ) : status === 'rc' ? (
                <HalfTest_RC_Set9 testId={testId} onFinishExam={handleFinishExam} initialAnswers={lcAnswers} />
            ) : null}
        </main>
    );
}
