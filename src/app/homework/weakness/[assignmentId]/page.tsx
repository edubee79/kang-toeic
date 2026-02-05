'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getQuestionsByIds } from '@/data/toeic/reading/part5/tests';
import { getPart2QuestionByUniqueId } from '@/data/part2';
import { getPart3QuestionByUniqueId } from '@/data/part3';
import { getPart4QuestionByUniqueId } from '@/data/part4';
import { Part5Runner } from '@/components/exam/Part5Runner';
import { Loader2 } from "lucide-react";

export default function WeaknessReviewPage() {
    const params = useParams();
    const router = useRouter();
    const assignmentId = params.assignmentId as string;
    const [assignment, setAssignment] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDisplayData = async () => {
            try {
                setLoading(true);
                const docRef = doc(db, 'Assignments', assignmentId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setAssignment(data);

                    if (data.questionIds && Array.isArray(data.questionIds)) {
                        const loadedQuestions = data.questionIds.map((id: string) => {
                            const upperId = id.toUpperCase();
                            if (upperId.startsWith('P2_') || upperId.startsWith('P2-')) {
                                const q = getPart2QuestionByUniqueId(id);
                                if (q) {
                                    return {
                                        id: id,
                                        text: "(Audio Question)",
                                        options: q.options.map((opt, idx) => ({
                                            label: String.fromCharCode(65 + idx),
                                            text: opt
                                        })),
                                        correctAnswer: q.correctAnswer,
                                        audio: `/audio/ETS_TOEIC_3/Test_${q.testId.toString().padStart(2, '0')}/TEST ${q.testId.toString().padStart(2, '0')}_PART 2_${q.questionNo.toString()}.mp3`,
                                        type: 'LC_PART2',
                                        classification: q.questionType
                                    };
                                }
                            } else if (upperId.startsWith('P3_') || upperId.startsWith('P3-')) {
                                const result = getPart3QuestionByUniqueId(id);
                                if (result) {
                                    const { question, set } = result;
                                    return {
                                        id: id,
                                        text: question.text,
                                        options: Object.entries(question.options).map(([label, text]) => ({ label, text })),
                                        correctAnswer: question.correctAnswer,
                                        audio: set.audio,
                                        type: 'LC_PART3',
                                        classification: question.classification || set.contextType,
                                        translation: question.translation
                                    };
                                }
                            } else if (upperId.startsWith('P4_') || upperId.startsWith('P4-')) {
                                const result = getPart4QuestionByUniqueId(id);
                                if (result) {
                                    const { question, set } = result;
                                    return {
                                        id: id,
                                        text: question.text,
                                        options: Object.entries(question.options).map(([label, text]) => ({ label, text })),
                                        correctAnswer: question.correctAnswer,
                                        audio: set.audio,
                                        type: 'LC_PART4',
                                        classification: question.classification || set.contextType
                                    };
                                }
                            } else {
                                const qs = getQuestionsByIds([id]);
                                return qs.length > 0 ? { ...qs[0], type: 'RC_PART5' } : null;
                            }
                            return null;
                        }).filter(Boolean);
                        setQuestions(loadedQuestions);
                    }
                }
            } catch (error) {
                console.error("Error fetching assignment:", error);
            } finally {
                setLoading(false);
            }
        };

        if (assignmentId) {
            fetchDisplayData();
        }
    }, [assignmentId]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 font-inter">
                <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
                <p className="text-slate-400 font-bold animate-pulse uppercase tracking-widest text-xs">Loading AI Drill...</p>
            </div>
        );
    }

    if (!assignment || questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-white">
                <p>과제를 불러올 수 없습니다.</p>
                <button onClick={() => router.back()} className="mt-4 text-indigo-400 hover:underline">돌아가기</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">{assignment.title || '취약점 보강 과제'}</h1>
                    <p className="text-slate-500 text-sm mt-1">{assignment.description || 'AI가 분석한 오답 및 유사 유형 정복 과제입니다.'}</p>
                </div>

                <Part5Runner
                    questions={questions}
                    testId={assignmentId}
                    mode="drill"
                    onFinish={() => router.push('/student/dashboard')}
                />
            </div>
        </div>
    );
}
