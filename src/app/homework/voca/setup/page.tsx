'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { setUserTargetScore } from '@/services/vocabularyService';
import { Target, TrendingUp, Zap } from 'lucide-react';

export default function VocabularySetup() {
    const [selectedScore, setSelectedScore] = useState<650 | 800 | 900 | null>(null);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const userData = localStorage.getItem('toeic_user');
        if (!userData) {
            router.push('/login');
            return;
        }
        const user = JSON.parse(userData);
        setUserId(user.userId);
    }, [router]);

    const handleSelectScore = async () => {
        if (!selectedScore || !userId) return;

        setLoading(true);
        try {
            await setUserTargetScore(userId, selectedScore);
            router.push('/homework/voca');
        } catch (error) {
            console.error('Error setting target score:', error);
            alert('목표 점수 설정에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

    const scoreOptions = [
        {
            score: 650 as const,
            title: '650점 목표',
            description: '기초 필수 어휘',
            wordCount: '~1,600개',
            icon: Target,
            color: 'emerald',
            gradient: 'from-emerald-900 via-slate-900 to-slate-900',
            border: 'border-emerald-500/20 hover:border-emerald-500/50'
        },
        {
            score: 800 as const,
            title: '800점 목표',
            description: '중급 비즈니스 어휘',
            wordCount: '~3,200개',
            icon: TrendingUp,
            color: 'blue',
            gradient: 'from-blue-900 via-slate-900 to-slate-900',
            border: 'border-blue-500/20 hover:border-blue-500/50'
        },
        {
            score: 900 as const,
            title: '900점 목표',
            description: '고급 전문 어휘',
            wordCount: '~5,000개',
            icon: Zap,
            color: 'violet',
            gradient: 'from-violet-900 via-slate-900 to-slate-900',
            border: 'border-violet-500/20 hover:border-violet-500/50'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-950 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-white mb-4">
                        목표 점수를 선택하세요
                    </h1>
                    <p className="text-slate-400">
                        선택한 점수에 맞는 어휘 학습이 시작됩니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {scoreOptions.map((option) => {
                        const Icon = option.icon;
                        const isSelected = selectedScore === option.score;

                        return (
                            <Card
                                key={option.score}
                                onClick={() => setSelectedScore(option.score)}
                                className={`
                  group relative overflow-hidden cursor-pointer transition-all
                  bg-gradient-to-br ${option.gradient}
                  border ${option.border}
                  ${isSelected ? `ring-2 ring-${option.color}-500` : ''}
                  hover:scale-105
                `}
                            >
                                <div className={`absolute right-0 top-0 w-32 h-32 bg-${option.color}-500/10 rounded-full blur-3xl group-hover:bg-${option.color}-500/20 transition-all`}></div>

                                <div className="relative z-10 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <Icon className={`w-8 h-8 text-${option.color}-400`} />
                                        {isSelected && (
                                            <div className={`w-6 h-6 rounded-full bg-${option.color}-500 flex items-center justify-center`}>
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-2">
                                        {option.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        {option.description}
                                    </p>
                                    <div className={`inline-block px-3 py-1 rounded-full bg-${option.color}-500/20 text-${option.color}-300 text-xs font-bold`}>
                                        {option.wordCount}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <div className="text-center">
                    <Button
                        onClick={handleSelectScore}
                        disabled={!selectedScore || loading}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-6 rounded-xl text-lg font-bold shadow-lg shadow-indigo-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? '설정 중...' : '학습 시작하기'}
                    </Button>
                </div>

                <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">💡 학습 방법</h3>
                    <ul className="space-y-2 text-slate-400 text-sm">
                        <li>• <strong className="text-white">1단계 (Sort):</strong> 아는 단어와 모르는 단어를 분류합니다</li>
                        <li>• <strong className="text-white">2단계 (Learn):</strong> 모르는 단어를 집중 학습합니다</li>
                        <li>• <strong className="text-white">3단계 (Test):</strong> 3초 안에 뜻을 맞추는 퀴즈를 풉니다</li>
                        <li>• <strong className="text-white">복습 (Review):</strong> 틀린 단어는 자동으로 복습 일정이 잡힙니다</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
