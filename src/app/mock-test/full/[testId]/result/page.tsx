'use client';

import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Home, BarChart3, Clock, AlertCircle, FileText, CheckCircle2, Volume2, Sparkles, ChevronRight, Search, Target, Calendar } from 'lucide-react';
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
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center text-slate-900 font-bold">
            <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
            <h2 className="text-xl mb-4 italic uppercase">Data Not Found</h2>
            <Button onClick={() => router.push('/mock-test')} className="bg-slate-900 italic">돌아가기</Button>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 pb-20 selection:bg-indigo-500/30">
            {/* Header Area: Softer Navy Gradient */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-32 px-6 md:px-10">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-4 py-1.5 bg-indigo-600 text-white text-[11px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg shadow-indigo-600/20">
                                실전 모의고사 결과
                            </span>
                            <span className="text-slate-500 text-[10px] font-black uppercase italic tracking-widest mt-1">수험번호: {attemptId?.slice(-6)}</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
                            {testId === 10 ? '2회 모의고사' : '1회 모의고사'} <span className="text-indigo-400 not-italic">리포트</span>
                        </h1>
                        <div className="flex items-center gap-4 text-slate-300 text-xs font-bold uppercase tracking-tight">
                            <span className="flex items-center gap-1.5 border-r border-white/10 pr-4 italic"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> {attempt.studentName} 수험생님</span>
                            <span className="flex items-center gap-1.5 italic"><Calendar className="w-4 h-4 text-slate-400" /> {new Date(attempt.date || Date.now()).toLocaleDateString()} 응시 완료</span>
                        </div>
                    </div>

                    <div className="flex gap-10 items-end">
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">분석 총합 점수</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-7xl md:text-8xl font-black text-white tabular-nums tracking-tighter italic leading-none">
                                    {halfAnalysis.overallScore}
                                </span>
                                <span className="text-indigo-400 font-black text-2xl uppercase italic">점</span>
                            </div>
                        </div>
                        <div className="h-20 w-px bg-white/10 mx-2 hidden lg:block"></div>
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:flex gap-10 px-10 hidden backdrop-blur-md">
                            <div className="text-center">
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1 italic">LC 점수</p>
                                <p className="text-3xl font-black text-white italic tracking-tighter leading-none">{halfAnalysis.lcScore}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-1 italic">RC 점수</p>
                                <p className="text-3xl font-black text-white italic tracking-tighter leading-none">{halfAnalysis.rcScore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-6xl mx-auto -mt-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left: AI Diagnosis Report (2/3 width) */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
                        <div className="bg-indigo-600 px-10 py-6 flex items-center justify-between text-white shadow-xl shadow-indigo-600/10">
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 fill-white animate-pulse" />
                                <h2 className="text-xl md:text-2xl font-black tracking-tight italic uppercase">강쌤의 프리미엄 1:1 진단서</h2>
                            </div>
                            {isGeneratingAi && (
                                <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full border border-white/20">
                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                                    <span className="text-[10px] font-black uppercase italic tracking-widest">분석 데이터 생성 중...</span>
                                </div>
                            )}
                        </div>
                        <CardContent className="p-10 md:p-14">
                            {aiReport ? (
                                <div className="prose prose-slate max-w-none 
                                    prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 prose-headings:italic prose-headings:uppercase
                                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                                    prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-p:font-medium
                                    prose-li:text-slate-700 prose-li:font-medium
                                    prose-strong:text-indigo-600 prose-strong:font-black
                                    prose-hr:border-slate-100
                                ">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{aiReport}</ReactMarkdown>
                                </div>
                            ) : (
                                <div className="py-24 flex flex-col items-center justify-center text-center space-y-6">
                                    <div className="w-16 h-16 bg-indigo-50 rounded-3xl flex items-center justify-center border border-indigo-100">
                                        <Sparkles className="w-8 h-8 text-indigo-500 animate-spin" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-black text-xl italic uppercase tracking-tight">학습 데이터를 분석하고 있습니다...</p>
                                        <p className="text-slate-500 font-bold text-sm mt-1">강쌤이 학생의 데이터를 바탕으로 1:1 개인 처방전을 작성 중입니다. 잠시만 기다려 주세요.</p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Time Analysis: Reading Pace (New Section) */}
                    <Card className="rounded-[3rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden bg-white mt-8">
                        <div className="bg-slate-900 px-10 py-6 flex items-center gap-3 text-white">
                            <Clock className="w-6 h-6 text-indigo-400" />
                            <h2 className="text-xl md:text-2xl font-black tracking-tight italic uppercase">강쌤의 RC 실전 페이스 진단</h2>
                        </div>
                        <CardContent className="p-8 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {halfAnalysis.rcTimeAnalysis.map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
                                        {/* Status Glow Overlay */}
                                        <div className={cn(
                                            "absolute top-0 right-0 w-20 h-20 -mr-6 -mt-6 rounded-full opacity-10 transition-all group-hover:scale-150",
                                            item.level === 'GREEN' ? "bg-emerald-500" : item.level === 'YELLOW' ? "bg-amber-500" : "bg-rose-500"
                                        )}></div>

                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-sm font-black text-slate-900 uppercase italic tracking-widest">{item.part}</span>
                                                <Badge className={cn(
                                                    "font-black text-[9px] px-2 py-0.5 rounded-full uppercase italic",
                                                    item.level === 'GREEN' ? "bg-emerald-100 text-emerald-700" :
                                                        item.level === 'YELLOW' ? "bg-amber-100 text-amber-700" : "bg-rose-100 text-rose-700"
                                                )}>
                                                    {item.level === 'GREEN' ? 'IDEAL' : item.level === 'YELLOW' ? 'SLOW' : 'DANGER'}
                                                </Badge>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">실제 소요</p>
                                                    <p className={cn(
                                                        "text-xl font-black italic",
                                                        item.level === 'RED' ? "text-rose-600" : "text-slate-900"
                                                    )}>
                                                        {Math.floor(item.actualHalf / 60)}분 {item.actualHalf % 60}초
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">권장 목표</p>
                                                    <p className="text-sm font-bold text-slate-500 italic">
                                                        {Math.floor(item.targetFull / 60)}분 이내
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-4 border-t border-slate-200/60 relative z-10">
                                            <p className="text-[11px] font-medium leading-relaxed text-slate-600">
                                                {item.coachingText}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 p-6 bg-indigo-50 rounded-2xl border border-indigo-100 flex flex-col md:flex-row items-center gap-6">
                                <div className="p-4 bg-white rounded-full shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                                    <Target className="w-8 h-8 text-indigo-600" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-slate-900 font-black italic uppercase text-lg leading-tight mb-1">Passage Over-Scanning Check</h4>
                                    <p className="text-slate-500 text-sm font-medium">
                                        {Object.values(halfAnalysis.rcTimeAnalysis).some(i => i.level === 'RED')
                                            ? "시간이 초과된 파트가 있습니다. 지문을 읽기 전에 문제를 먼저 스키밍하여 '무엇을 찾을지' 정하는 훈련이 시급합니다."
                                            : "페이스 조절이 탁월합니다. 현재의 속도를 유지하면서 정답의 근거를 지문에서 찾는 정확도만 조금 더 높이면 완벽합니다."
                                        }
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>

                {/* Right: Sidebar Actions & Summary */}
                <div className="space-y-8">
                    {/* Goal Card: Softened Background */}
                    <Card className="rounded-[3rem] border-none shadow-2xl bg-indigo-700 text-white p-10 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-32 h-full bg-white/5 skew-x-12 translate-x-12 group-hover:bg-white/10 transition-all"></div>
                        <div className="space-y-8 relative z-10">
                            <div>
                                <h3 className="text-indigo-200 text-xs font-black uppercase tracking-[0.3em] italic mb-4 flex items-center gap-2">
                                    <Target className="w-3.5 h-3.5" />
                                    최종 분석 결과
                                </h3>
                                <div className="flex items-baseline justify-between mb-4">
                                    <span className="text-6xl font-black italic tracking-tighter leading-none">{Math.round((halfAnalysis.overallScore / halfAnalysis.targetGoal) * 100)}%</span>
                                    <span className="text-indigo-100 font-black text-xs uppercase italic tracking-widest">목표치: {halfAnalysis.targetGoal}점</span>
                                </div>
                                <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden border border-white/5 p-0.5">
                                    <div
                                        className="h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                        style={{ width: `${Math.min((halfAnalysis.overallScore / halfAnalysis.targetGoal) * 100, 100)}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-indigo-100 text-sm font-bold leading-relaxed italic opacity-90">
                                    "{halfAnalysis.overallScore >= halfAnalysis.targetGoal ? '훌륭합니다! 목표 점수를 돌파했습니다. 실전 감각을 유지하세요.' : '목표 달성까지 조금 남았습니다. 강쌤의 처방전을 믿고 약점을 주저 없이 보완하십시오.'}"
                                </p>
                            </div>
                        </div>
                    </Card>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                        <Button
                            variant="outline"
                            className="h-20 rounded-[1.5rem] border-2 border-slate-200 font-black text-slate-800 bg-white hover:bg-slate-50 transition-all flex justify-between px-8 shadow-sm group"
                            onClick={() => {
                                const el = document.getElementById('missed-questions-section');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className="flex items-center gap-4 text-base italic uppercase tracking-tight">
                                <AlertCircle className="w-6 h-6 text-rose-500" />
                                틀린 문제 목록 보기
                            </span>
                            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            className="h-20 rounded-[1.5rem] bg-indigo-100 hover:bg-indigo-200 border-2 border-indigo-200 font-black text-indigo-800 transition-all flex justify-between px-8 shadow-sm group"
                            onClick={() => router.push('/student/history')}
                        >
                            <span className="flex items-center gap-4 text-base italic uppercase tracking-tight">
                                <FileText className="w-6 h-6 text-indigo-500" />
                                나의 학습 기록실로 이동
                            </span>
                            <ChevronRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            className="h-20 rounded-[1.5rem] bg-slate-900 hover:bg-black font-black text-white transition-all flex justify-between px-8 shadow-xl shadow-slate-900/20 group"
                            onClick={() => router.push('/student/dashboard')}
                        >
                            <span className="flex items-center gap-4 text-base italic uppercase tracking-tight">
                                <Home className="w-6 h-6 text-slate-400" />
                                메인 대시보드로 복귀
                            </span>
                            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Missed Questions Section: Specialized & Bold */}
                    <Card id="missed-questions-section" className="rounded-[3rem] bg-white border border-slate-200 p-10 shadow-2xl shadow-slate-200/50">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-slate-900 font-black text-xl italic uppercase tracking-tighter flex items-center gap-3 underline decoration-rose-500 decoration-4 underline-offset-8">
                                <Search className="w-6 h-6 text-rose-500" />
                                틀린 문제 분석
                            </h3>
                            <Badge className="bg-rose-500 text-white font-black text-[10px] italic px-3 py-1 uppercase rounded-full">
                                총 {Object.values(halfAnalysis.partStats).reduce((acc, s) => acc + (s.total - s.correct), 0)}문항 오답
                            </Badge>
                        </div>

                        <div className="space-y-10">
                            {Object.entries(halfAnalysis.partStats)
                                .filter(([_, stat]) => stat.total - stat.correct > 0)
                                .map(([part, stat]) => (
                                    <div key={part} className="space-y-4">
                                        <div className="flex justify-between items-end border-b border-slate-200 pb-2">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em] italic leading-none mb-1">
                                                    Score: {stat.correct} / {stat.total}
                                                </span>
                                                <span className="text-sm font-black text-slate-900 uppercase tracking-widest italic">
                                                    {(() => {
                                                        const labels: Record<string, string> = {
                                                            p1: '파트 1', p2: '파트 2', p3: '파트 3', p4: '파트 4',
                                                            p5: '파트 5', p6: '파트 6', p7s: '파트 7(단일)', p7m: '파트 7(복합)'
                                                        };
                                                        return labels[part] || part.toUpperCase();
                                                    })()}
                                                </span>
                                            </div>
                                            <div className="flex items-baseline gap-1">
                                                <span className={cn(
                                                    "text-4xl font-black italic leading-none",
                                                    stat.correct >= stat.target ? "text-emerald-500" : "text-rose-600"
                                                )}>
                                                    {stat.target}
                                                </span>
                                                <span className="text-[10px] text-slate-500 font-black uppercase italic">목표</span>
                                            </div>
                                        </div>

                                        {/* Specific Question Numbers */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {stat.wrongQuestionNumbers?.map((num: number) => (
                                                <div key={num} className="bg-white border-2 border-slate-100 text-slate-900 text-sm font-black w-10 h-10 flex items-center justify-center rounded-xl shadow-sm hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 transition-all cursor-default scale-110 md:scale-100 mb-1">
                                                    {num}
                                                </div>
                                            ))}
                                            {(!stat.wrongQuestionNumbers || stat.wrongQuestionNumbers.length === 0) && (
                                                <span className="text-sm text-slate-400 font-bold italic">데이터 분석 결과를 가져올 수 없거나 모두 맞았습니다.</span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {stat.wrongTags.slice(0, 5).map((tag, idx) => (
                                                <div key={idx} className="bg-indigo-50/50 text-indigo-600 border border-indigo-100 text-[9px] font-black px-3 py-1 rounded-full uppercase italic tracking-widest">
                                                    #{tag}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <p className="text-[10px] text-slate-400 font-bold leading-relaxed italic">
                                * 현재는 오답이 발생한 문항 번호와 유형별 분석 데이터를 제공합니다. 곧 개별 문제에 대한 심층 해설 리뷰 기능이 업데이트될 예정입니다.
                            </p>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
}
