'use client';

import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Home } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function MockTestResult() {
    const router = useRouter();
    const params = useParams();
    const testId = params?.testId;
    const [attempt, setAttempt] = useState<any>(null);

    useEffect(() => {
        const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
        const key = `full-${testId}`;
        const data = savedAttempts[key];

        if (data) {
            setAttempt(data);
        } else {
            // Redirect if no attempt found
            router.push('/mock-test');
        }
    }, [testId, router]);

    if (!attempt) return null;

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
            <Card className="max-w-lg w-full bg-white shadow-xl">
                <CardHeader className="text-center pb-2">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-slate-800">시험 종료</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6 pt-6">
                    <p className="text-gray-600">
                        수고하셨습니다!<br />
                        모의고사가 정상적으로 제출되었습니다.
                    </p>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <div className="text-sm text-gray-500 mb-1">제출 시간</div>
                        <div className="font-mono text-lg font-medium text-slate-700">
                            {new Date(attempt.date).toLocaleString()}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs text-amber-600 bg-amber-50 p-3 rounded">
                            * 현재 Beta 버전에서는 상세 점수 리포트가 제공되지 않습니다.<br />
                            추후 업데이트를 통해 정답 및 해설 확인 기능이 제공될 예정입니다.
                        </p>

                        <Button
                            onClick={() => router.push('/mock-test')}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 size-lg"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            로비로 돌아가기
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
