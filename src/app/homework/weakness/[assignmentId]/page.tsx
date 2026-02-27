'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getQuestionsByIds } from '@/data/toeic/reading/part5/tests';
import { getPart2QuestionByUniqueId } from '@/data/part2';
import { getPart3QuestionByUniqueId } from '@/data/part3';
import { getPart4QuestionByUniqueId } from '@/data/part4';
import { part7TestData } from '@/data/toeic/reading/part7/tests';
import { part7MultiTestData } from '@/data/toeic/reading/part7/multi_tests';
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
                        // Part 7 단일 지문: Part7Test[].sets[]
                        // Part 7 복수 지문: { test1: PracticeSet[], ... } → 평탁
                        const multiSets: any[] = Object.values(part7MultiTestData).flat();

                        const getP7SetByQuestionId = (qId: string) => {
                            // Single-passage tests
                            for (const test of part7TestData) {
                                for (const set of (test as any).sets) {
                                    const q = set.questions.find((q: any) => q.id === qId);
                                    if (q) return { question: q, set };
                                }
                            }
                            // Multi-passage tests
                            for (const set of multiSets) {
                                if (!set || !set.questions) continue;
                                const q = set.questions.find((q: any) => q.id === qId);
                                if (q) return { question: q, set };
                            }
                            return null;
                        };

                        const loadedQuestions = data.questionIds.map((id: string, index: number) => {
                            // Use regex to detect part type — handles both legacy (p2-t1-q7)
                            // and v3/v4 format (v3-p3-t01-q32, v4-p4-t05-q71)
                            if (/p2[_-]t\d+[_-]q?\d+/i.test(id)) {
                                const q = getPart2QuestionByUniqueId(id);
                                if (q) {
                                    return {
                                        id: String(index + 1), // 순번 표시
                                        _originalId: id,
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
                            } else if (/p3[_-]t\d+[_-]q?\d+/i.test(id)) {
                                const result = getPart3QuestionByUniqueId(id);
                                if (result) {
                                    const { question, set } = result as any;
                                    // Part3Set에 audio 필드가 없으므로 vol/testId/questionRange로 경로 생성
                                    const vol = set.vol ?? 3;
                                    const tNum = set.testId.toString().padStart(2, '0');
                                    const audioSrc = set.audio
                                        || `/audio/ETS_TOEIC_${vol}/Test_${tNum}/TEST ${tNum}_PART 3_${set.questionRange}.mp3`;
                                    return {
                                        id: String(index + 1), // 순번 표시
                                        _originalId: id,
                                        text: question.text,
                                        options: Object.entries(question.options).map(([label, text]) => ({ label, text })),
                                        correctAnswer: question.correctAnswer,
                                        audio: audioSrc,
                                        type: 'LC_PART3',
                                        classification: question.classification || set.contextType,
                                        translation: question.translation
                                    };
                                }
                            } else if (/p4[_-]t\d+[_-]q?\d+/i.test(id)) {
                                const result = getPart4QuestionByUniqueId(id);
                                if (result) {
                                    const { question, set } = result as any;
                                    const vol = set.vol ?? 3;
                                    const tNum = set.testId.toString().padStart(2, '0');
                                    const audioSrc = set.audio
                                        || `/audio/ETS_TOEIC_${vol}/Test_${tNum}/TEST ${tNum}_PART 4_${set.questionRange}.mp3`;
                                    return {
                                        id: String(index + 1), // 순번 표시
                                        _originalId: id,
                                        text: question.text,
                                        options: Object.entries(question.options).map(([label, text]) => ({ label, text })),
                                        correctAnswer: question.correctAnswer,
                                        audio: audioSrc,
                                        type: 'LC_PART4',
                                        classification: question.classification || set.contextType
                                    };
                                }
                            } else if (/p7[_-]/i.test(id) || /v[34]-p7/i.test(id)) {
                                // Part 7: 세트(지문+문제) 함께 로드
                                const result = getP7SetByQuestionId(id);
                                if (result) {
                                    const { question, set } = result;
                                    // 지문 텍스트를 하나로 합침 (복수 지문 세트 대응)
                                    const passageText = set.passages
                                        .map((p: any) => (p.title ? `[${p.title}]\n` : '') + p.content)
                                        .join('\n\n---\n\n');
                                    return {
                                        id: String(index + 1),
                                        _originalId: id,
                                        text: question.text,
                                        options: Object.entries(question.options).map(([label, text]) => ({ label, text })),
                                        correctAnswer: question.correctAnswer,
                                        passage: passageText, // 지문 텍스트
                                        type: 'RC_PART7',
                                        classification: question.classification,
                                        explanation: question.explanation,
                                        translation: question.translation
                                    };
                                }
                            } else {
                                const qs = getQuestionsByIds([id]);
                                if (qs.length > 0) {
                                    return { ...qs[0], id: String(index + 1), _originalId: id, type: 'RC_PART5' };
                                }
                                return null;
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
                    title={assignment?.title || '취약점 보강 과제'}
                    mode="drill"
                    onFinish={(_score, _elapsed, _answers) => {
                        const searchParams = new URLSearchParams(window.location.search);
                        const from = searchParams.get('from') || '/student/home';
                        router.push(from);
                    }}
                    onExit={() => {
                        const searchParams = new URLSearchParams(window.location.search);
                        const from = searchParams.get('from') || '/student/home';
                        router.push(from);
                    }}
                />
            </div>
        </div>
    );
}
