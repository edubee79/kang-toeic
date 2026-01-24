'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';

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

    const [status, setStatus] = useState<'loading' | 'lc' | 'rc' | 'completed' | 'submitting'>('loading');
    const [attemptId, setAttemptId] = useState<string | null>(null);
    const [lcAnswers, setLcAnswers] = useState<Record<string, string>>({});

    // 1. 초기 세션 생성
    useEffect(() => {
        const init = async () => {
            const userStr = localStorage.getItem('toeic_user');
            if (!userStr) {
                alert("로그인이 필요합니다.");
                router.push('/mock-test');
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

        setStatus('submitting'); // 제출 중 상태로 전환
        const allAnswers = { ...lcAnswers, ...rcAnswers };

        try {
            await updateDoc(doc(db, 'MockTestAttempts', attemptId), {
                status: 'completed',
                answers: allAnswers,
                timeLogs: timeLogs, // 파트별 시간 기록 추가
                completedAt: serverTimestamp()
            });

            // 로컬 스토리지에 결과 저장 (리포트 페이지 호환용)
            const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
            savedAttempts[`full-half_${testId}`] = {
                answers: allAnswers,
                timeLogs: timeLogs, // 분석용 시간 로그 포함
                date: new Date().toISOString()
            };
            localStorage.setItem('mock_test_attempts', JSON.stringify(savedAttempts));

            // 결과 페이지로 이동 (쿼리 파라미터 보강 및 이동 보장)
            const resultUrl = `/mock-test/full/${testId.startsWith('9') ? '9' : '10'}/result?half=${testId}&attemptId=${attemptId}`;
            console.log("[SUCCESS] Navigating to:", resultUrl);

            router.push(resultUrl);

            // 혹시라도 push가 안될 경우를 대비한 0.5초 뒤 강제 이동 예외처리
            setTimeout(() => {
                if (window.location.pathname.includes('half')) {
                    window.location.href = resultUrl;
                }
            }, 800);
        } catch (e) {
            console.error("[ERROR] Failed to finish exam:", e);
            setStatus('rc'); // 실패 시 다시 시험 화면으로 복구
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
