'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Home, BarChart3, Clock, AlertCircle, FileText, CheckCircle2, Sparkles, ChevronRight, Search, Target, Calendar, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { HalfTestService, HalfTestAnalysis } from '@/services/halfTestService';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MockTestResult() {
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();
    const testId = Number(params?.testId);
    const attemptId = searchParams.get('attemptId');
    const fromPath = searchParams.get('from') || '/student/home';

    const [attempt, setAttempt] = useState<any>(null);
    const [halfAnalysis, setHalfAnalysis] = useState<HalfTestAnalysis | null>(null);
    const [aiReport, setAiReport] = useState<string | null>(null);
    const [isGeneratingAi, setIsGeneratingAi] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResult = async () => {
            if (!attemptId) {
                setLoading(false);
                return;
            }

            try {
                const docRef = doc(db, 'MockTestAttempts', attemptId);
                const snapshot = await getDoc(docRef);

                if (snapshot.exists()) {
                    const data = snapshot.data();
                    setAttempt(data);

                    if (data.savedAiReport) {
                        setAiReport(data.savedAiReport);
                    }

                    const analysis = await HalfTestService.analyzeAttempt(attemptId);
                    if (analysis) {
                        setHalfAnalysis(analysis);
                        if (!data.savedAiReport && !isGeneratingAi) {
                            generateAiReport(analysis, data.studentName || '수험생');
                        }
                    }
                } else {
                    const savedAttempts = JSON.parse(localStorage.getItem('mock_test_attempts') || '{}');
                    const localData = savedAttempts[`full-${testId}`];
                    if (localData) setAttempt(localData);
                }
            } catch (error) {
                console.error("Error fetching results:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchResult();
    }, [attemptId, testId]);

    const generateAiReport = async (analysisData: HalfTestAnalysis, name: string) => {
        if (!attemptId || isGeneratingAi) return;
        setIsGeneratingAi(true);
        try {
            const resp = await fetch('/api/ai-tutor/mock-diagnosis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    attemptData: analysisData,
                    studentName: name,
                    userId: attempt?.userId
                })
            });
            const data = await resp.json();
            if (data.text) {
                setAiReport(data.text);
                await updateDoc(doc(db, 'MockTestAttempts', attemptId), {
                    savedAiReport: data.text
                });
            }
        } catch (e) {
            console.error("AI Report generation failed:", e);
        } finally {
            setIsGeneratingAi(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
            <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">강쌤의 전용 성적표 생성 중...</p>
        </div>
    );

    if (!attempt || !halfAnalysis) return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <Card className="p-10 text-center space-y-4">
                <AlertCircle className="w-12 h-12 text-rose-500 mx-auto" />
                <h2 className="text-xl font-black italic">데이터를 불러올 수 없습니다.</h2>
                <Button onClick={() => router.push(fromPath)}>메인으로 돌아가기</Button>
            </Card>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50 pb-24 selection:bg-indigo-500/30">
            {/* Header Area: Softer Navy Gradient */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-36 px-6 md:px-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-4 py-1.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/20">
                                실전 모의고사 결과
                            </span>
                            <span className="text-slate-500 text-[10px] font-black uppercase italic tracking-widest mt-1">수험번호: {attemptId?.slice(-6)}</span>
                        </div>
                        <h1 className="text-4xl md:text-[64px] font-black tracking-tighter uppercase italic leading-[1.1]">
                            {testId === 10 ? '2회 모의고사' : '1회 모의고사'} <span className="text-indigo-400 not-italic">리포트</span>
                        </h1>
                        <div className="flex items-center gap-4 text-slate-300 text-xs font-bold uppercase tracking-tight">
                            <span className="flex items-center gap-1.5 border-r border-white/10 pr-4 italic"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> {attempt.studentName} 수험생님</span>
                            <span className="flex items-center gap-1.5 italic"><Calendar className="w-4 h-4 text-slate-400" /> {new Date(attempt.date || Date.now()).toLocaleDateString()} 응시 완료</span>
                        </div>
                    </div>

                    <div className="flex gap-12 items-end">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">분석 총합 점수</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl md:text-8xl font-black text-white tabular-nums tracking-tighter italic leading-none">
                                    {halfAnalysis.overallScore}
                                </span>
                                <span className="text-indigo-400 font-black text-2xl uppercase italic">점</span>
                            </div>
                        </div>
                        <div className="h-24 w-px bg-white/10 mx-2 hidden lg:block"></div>
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 lg:flex gap-12 px-10 hidden backdrop-blur-md">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">LC 점수</p>
                                <p className="text-4xl font-black text-white italic tracking-tighter leading-none">{halfAnalysis.lcScore}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">RC 점수</p>
                                <p className="text-4xl font-black text-white italic tracking-tighter leading-none">{halfAnalysis.rcScore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto -mt-24 px-6 space-y-12">
                {/* Top Row: Goal Card (Left) + Action Icons (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <Card className="lg:col-span-8 rounded-[3.5rem] border-none shadow-2xl bg-indigo-700 text-white p-10 md:p-14 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute right-0 top-0 w-64 h-full bg-white/5 skew-x-12 translate-x-32 group-hover:bg-white/10 transition-all duration-700"></div>
                        <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                            <div className="space-y-6 w-full md:w-1/2">
                                <h3 className="text-indigo-200 text-[11px] font-black uppercase tracking-[0.4em] italic mb-2 flex items-center gap-2">
                                    <Target className="w-4 h-4" />
                                    최종 분석 결과
                                </h3>
                                <div className="flex items-baseline gap-4">
                                    <span className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none">{Math.round((halfAnalysis.overallScore / halfAnalysis.targetGoal) * 100)}%</span>
                                    <div className="space-y-1">
                                        <p className="text-white font-black text-xs uppercase tracking-widest opacity-60 italic">목표 지수</p>
                                        <p className="text-white font-black text-xl italic tracking-tight leading-none">{halfAnalysis.targetGoal}점</p>
                                    </div>
                                </div>
                                <div className="h-4 w-full bg-black/20 rounded-full overflow-hidden border border-white/5 p-1">
                                    <div
                                        className="h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                                        style={{ width: `${Math.min((halfAnalysis.overallScore / halfAnalysis.targetGoal) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 md:border-l md:border-white/10 md:pl-10 space-y-4">
                                <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-[9px] font-black uppercase italic tracking-widest text-indigo-200">강쌤의 1:1 처방</span>
                                <p className="text-indigo-50 text-xl font-bold leading-relaxed italic opacity-95">
                                    "{halfAnalysis.overallScore >= halfAnalysis.targetGoal ? '목표 점수를 돌파했습니다! 실전 감각을 유지하세요.' : '목표 달성까지 조금 남았습니다. 강쌤의 처방전을 믿고 약점을 주저 없이 보완하십시오.'}"
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                        <Button
                            className="h-full min-h-[140px] rounded-[3rem] bg-rose-600 hover:bg-rose-500 text-white font-black transition-all flex justify-between items-center px-10 shadow-2xl shadow-rose-600/30 group relative overflow-hidden"
                            onClick={() => router.push(`/mock-test/full/${testId}/result/analysis?attemptId=${attemptId}`)}
                        >
                            <div className="absolute top-0 right-0 w-32 h-full bg-white/10 skew-x-12 translate-x-12"></div>
                            <div className="text-left relative z-10">
                                <span className="flex items-center gap-2 text-rose-200 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
                                    <AlertCircle className="w-4 h-4" />
                                    Review Now
                                </span>
                                <span className="text-2xl uppercase italic tracking-tighter leading-tight block">오답 정밀 분석<br />리포트 이동</span>
                            </div>
                            <ArrowRight className="w-10 h-10 text-white/40 group-hover:translate-x-3 group-hover:text-white transition-all relative z-10" />
                        </Button>

                        <div className="grid grid-cols-2 gap-6">
                            <Button variant="outline" className="h-28 rounded-[2.5rem] border-2 border-slate-200 font-black text-slate-800 bg-white hover:bg-slate-50 transition-all flex flex-col items-center justify-center gap-3 shadow-sm group active:scale-95" onClick={() => router.push('/student/history')}>
                                <FileText className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
                                <span className="text-sm italic uppercase tracking-tighter">학습 기록</span>
                            </Button>
                            <Button className="h-28 rounded-[2.5rem] bg-slate-900 hover:bg-black font-black text-white transition-all flex flex-col items-center justify-center gap-3 shadow-xl shadow-slate-900/20 group active:scale-95" onClick={() => router.push(fromPath)}>
                                <Home className="w-8 h-8 text-slate-400 group-hover:scale-110 transition-transform" />
                                <span className="text-sm italic uppercase tracking-tighter">나의 학습방</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* 2. AI Diagnosis Report - Expanded Full Width */}
                <Card className="rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
                    <div className="bg-indigo-600 px-10 py-8 flex items-center justify-between text-white shadow-xl shadow-indigo-600/10">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-8 h-8 fill-white animate-pulse" />
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight italic uppercase leading-none">강쌤의 프리미엄 1:1 진단서</h2>
                        </div>
                        {isGeneratingAi && (
                            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full border border-white/20">
                                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                <span className="text-[11px] font-black uppercase italic tracking-widest">분석 데이터 생성 중...</span>
                            </div>
                        )}
                    </div>
                    <CardContent className="p-10 md:p-16 lg:p-20">
                        {aiReport ? (
                            <div className="prose prose-slate max-w-none 
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-headings:italic prose-headings:uppercase
                                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-xl prose-p:font-medium
                                prose-li:text-slate-700 prose-li:font-medium prose-li:text-lg
                                prose-strong:text-indigo-600 prose-strong:font-black
                                prose-hr:border-slate-100
                            ">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiReport}</ReactMarkdown>
                            </div>
                        ) : (
                            <div className="py-32 flex flex-col items-center justify-center text-center space-y-8">
                                <div className="w-24 h-24 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center border border-indigo-100 shadow-inner">
                                    <Sparkles className="w-12 h-12 text-indigo-500 animate-spin" />
                                </div>
                                <div>
                                    <p className="text-slate-900 font-black text-2xl italic uppercase tracking-tight">학습 데이터를 정밀 분석하고 있습니다...</p>
                                    <p className="text-slate-500 font-bold text-lg mt-2">강쌤이 학생의 취약점을 파악하여 개인 맞춤형 리포트를 작성 중입니다. 약 10~20초 정도 소요됩니다.</p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* 3. RC Time Analysis - Expanded Full Width */}
                <Card className="rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
                    <div className="bg-slate-900 px-10 py-8 flex items-center gap-4 text-white">
                        <Clock className="w-8 h-8 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight italic uppercase">강쌤의 RC 실전 페이스 진단</h2>
                    </div>
                    <CardContent className="p-10 md:p-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {halfAnalysis.rcTimeAnalysis.map((item, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col justify-between relative overflow-hidden group transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                                    <div className={cn(
                                        "absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 transition-all group-hover:scale-150",
                                        item.level === 'GREEN' ? "bg-emerald-500" : item.level === 'YELLOW' ? "bg-amber-500" : "bg-rose-500"
                                    )}></div>

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <span className="text-lg font-black text-slate-900 uppercase italic tracking-widest">{item.part}</span>
                                            <Badge className={cn(
                                                "font-black text-[10px] px-3 py-1 rounded-full uppercase italic",
                                                item.level === 'GREEN' ? "bg-emerald-100 text-emerald-700" :
                                                    item.level === 'YELLOW' ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                                            )}>
                                                {item.level === 'GREEN' ? 'IDEAL' : item.level === 'YELLOW' ? 'SLOW' : 'DANGER'}
                                            </Badge>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">실제 소요</p>
                                                <p className={cn(
                                                    "text-3xl font-black italic",
                                                    item.level === 'RED' ? "text-rose-600" : "text-slate-900"
                                                )}>
                                                    {Math.floor(item.actualHalf / 60)}분 {item.actualHalf % 60}초
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">권장 목표</p>
                                                <p className="text-base font-bold text-slate-500 italic">
                                                    {Math.floor(item.targetFull / 60)}분 이내
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-slate-200 relative z-10">
                                        <p className="text-xs font-bold leading-relaxed text-slate-600 italic">
                                            {item.coachingText}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex flex-col md:flex-row items-center gap-10">
                            <div className="p-6 bg-white rounded-[2rem] shadow-xl shadow-indigo-100 shrink-0">
                                <Target className="w-12 h-12 text-indigo-600" />
                            </div>
                            <div className="text-center md:text-left space-y-2">
                                <h4 className="text-slate-900 font-black italic uppercase text-2xl tracking-tighter">Passage Over-Scanning Check</h4>
                                <p className="text-slate-600 text-lg font-medium leading-relaxed">
                                    {Object.values(halfAnalysis.rcTimeAnalysis).some(i => i.level === 'RED')
                                        ? "특정 파트에서 시간이 초과되었습니다. 지문을 읽기 전 문제를 먼저 스키밍하여 '무엇을 찾을지' 정하는 훈련으로 낭비되는 시간을 줄여야 합니다."
                                        : "시간 관리가 매우 철저합니다. 현재 페이스를 유지하면서 오답 가능성이 높은 지문 근거 찾기에 좀 더 집중하면 고득점이 확실시됩니다."
                                    }
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Tip */}
                <div className="p-10 border-t border-slate-200 flex items-center justify-center">
                    <p className="text-slate-400 text-sm font-bold italic text-center uppercase tracking-[0.2em] opacity-50">
                        "Your struggle is the fuel for your next high score."
                    </p>
                </div>
            </div>
        </main>
    );
}
