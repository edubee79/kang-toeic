
"use client";

import React, { useState, useEffect } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import { collection, doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getQuestionsByIds } from '@/data/rc_part5_tests';
import { Part5Runner } from '@/components/exam/Part5Runner';
import { Loader2 } from "lucide-react";

export default function WeaknessReviewPage() {
    const params = useParams();
    const router = useRouter();
    const assignmentId = params.assignmentId as string;

    const [loading, setLoading] = useState(true);
    const [assignment, setAssignment] = useState<any>(null);
    const [questions, setQuestions] = useState<any[]>([]);

    useEffect(() => {
        const fetchDisplayData = async () => {
            // Load Assignment
            try {
                const docRef = doc(db, "Assignments", assignmentId);
                const snap = await getDoc(docRef);
                if (snap.exists()) {
                    const data = snap.data();
                    setAssignment(data);

                    if (data.questionIds && Array.isArray(data.questionIds)) {
                        const loadedQuestions = getQuestionsByIds(data.questionIds);
                        setQuestions(loadedQuestions);
                    }
                } else {
                    return notFound();
                }
            } catch (e) {
                console.error("Failed to load assignment", e);
            } finally {
                setLoading(false);
            }
        };

        if (assignmentId) fetchDisplayData();
    }, [assignmentId]);

    const handleFinish = async (score: number, elapsedTime: number, selectedAnswers: Record<string, string>) => {
        const userStr = localStorage.getItem('toeic_user');
        if (!userStr || !assignment) return;

        const user = JSON.parse(userStr);

        try {
            // Identify Incorrect Questions (Again, for record keeping if they fail again)
            const incorrects: { id: string, classification: string }[] = [];
            questions.forEach(q => {
                if (selectedAnswers[q.id] !== q.correctAnswer) {
                    incorrects.push({
                        id: q.id.toString(),
                        classification: q.classification || 'Unknown'
                    });
                }
            });

            await addDoc(collection(db, "Manager_Results"), {
                student: user.userName || user.username || user.name,
                studentId: user.userId,
                className: user.userClass || user.className || "Unknown",
                unit: `Weakness_Review_${assignmentId}`, // Unique ID for completion tracking
                assignmentId: assignmentId, // Link back
                score: score,
                total: questions.length,
                wrongCount: questions.length - score,
                incorrectQuestions: incorrects,
                timestamp: serverTimestamp(),
                timeSpent: elapsedTime,
                mode: 'weakness',
                type: 'weakness_review',
                detail: assignment.detail || 'Weakness Review'
            });

            // Navigate back to dashboard after short delay
            setTimeout(() => {
                router.push('/student/dashboard');
            }, 2000);

        } catch (e) {
            console.error("Error saving results:", e);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500">
                <Loader2 className="w-8 h-8 animate-spin" />
            </div>
        );
    }

    if (!assignment || questions.length === 0) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-500 p-4 text-center">
                <h2 className="text-xl font-bold text-white mb-2">과제를 불러올 수 없습니다.</h2>
                <p>문제가 없거나 이미 삭제된 과제일 수 있습니다.</p>
                <button onClick={() => router.push('/student/dashboard')} className="mt-4 px-4 py-2 bg-slate-800 rounded-lg text-white">
                    돌아가기
                </button>
            </div>
        );
    }

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Part5Runner
                testId={assignmentId}
                title={assignment.detail || "Weakness Review"}
                questions={questions}
                mode="weakness"
                storageKey={`weakness_progress_${assignmentId}`}
                onFinish={handleFinish}
                onExit={() => router.push('/student/dashboard')}
            />
        </React.Suspense>
    );
}
