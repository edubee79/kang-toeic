'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowLeft, Shield, Save, Lock, Zap, BookOpen, PenSquare, ChevronRight } from "lucide-react";
import Link from 'next/link';
import { getFeatureAccess, setFeatureAccess, FeatureAccess, getAIReportSchedule, setAIReportSchedule, AIReportSchedule, calculateReportPeriod } from '@/services/configService';
import { migrateAllUsersPerformance } from '@/services/migrationService';

import { isAdmin } from '@/lib/adminAuth';

export default function AdminSettingsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [migrating, setMigrating] = useState(false);
    const [aiSchedule, setAiSchedule] = useState<AIReportSchedule>({
        enabledDays: [5],
        isAutoBatchEnabled: false
    });
    const [access, setAccess] = useState<FeatureAccess>({
        part1: true,
        part2: true,
        part3: true,
        part4: true,
        part5: true,
        part6: true,
        part7: true,
        part7_double: true,
        mockTest: true,
        voca: true,
        grammar: true,
        part1_real: true,
        levelTest: true,
        maxSets: {}
    });

    useEffect(() => {
        const checkAdmin = () => {
            const userData = localStorage.getItem('toeic_user');
            if (!userData) {
                router.replace('/login');
                return;
            }
            const user = JSON.parse(userData);
            if (!isAdmin(user.username)) {
                alert("관리자 권한이 없습니다.");
                router.replace('/');
                return;
            }
            fetchSettings();
        };
        checkAdmin();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        const data = await getFeatureAccess();
        setAccess(data);
        const schedule = await getAIReportSchedule();
        setAiSchedule(schedule);
        setLoading(false);
    };

    const handleToggle = (key: keyof FeatureAccess) => {
        if (key === 'maxSets') return;
        setAccess(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleMaxSetChange = (key: string, value: string, vol?: string) => {
        const numValue = parseInt(value) || 0;
        setAccess(prev => {
            const currentMaxSets = { ...(prev.maxSets || {}) };
            if (vol) {
                // Handle object-based volume limits
                const volData = { ...(currentMaxSets[key] as Record<string, number> || {}) };
                volData[vol] = numValue;
                currentMaxSets[key] = volData;
            } else {
                // Handle single number limits
                currentMaxSets[key] = numValue;
            }
            return {
                ...prev,
                maxSets: currentMaxSets
            };
        });
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Save both Feature Access and AI Schedule simultaneously
            await Promise.all([
                setFeatureAccess(access),
                setAIReportSchedule(aiSchedule)
            ]);
            alert("전체 설정이 안전하게 저장되었습니다.");
        } catch (error) {
            console.error("Save Error:", error);
            alert("저장 중 오류가 발생했습니다.");
        } finally {
            setSaving(false);
        }
    };

    const handleMigrate = async () => {
        if (!confirm("전체 학생의 성적 요약 데이터를 재생성하시겠습니까? 학생 수에 따라 시간이 소요될 수 있습니다.")) return;
        setMigrating(true);
        try {
            await migrateAllUsersPerformance();
            alert("모든 학생의 성적 데이터 동기화가 완료되었습니다.");
        } catch (error) {
            console.error(error);
            alert("동기화 중 오류가 발생했습니다.");
        } finally {
            setMigrating(false);
        }
    };

    const handleDayToggle = (dayIndex: number) => {
        setAiSchedule(prev => {
            const newDays = prev.enabledDays.includes(dayIndex)
                ? prev.enabledDays.filter(d => d !== dayIndex)
                : [...prev.enabledDays, dayIndex].sort((a, b) => a - b);
            return { ...prev, enabledDays: newDays };
        });
    };

    const handleSaveSchedule = async () => {
        setSaving(true);
        try {
            await setAIReportSchedule(aiSchedule);
            alert("AI 리포트 스케줄이 저장되었습니다.");
        } catch (error) {
            alert("저장 중 오류가 발생했습니다.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen bg-slate-50 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
        </div>;
    }

    const items = [
        { key: 'voca', title: 'Vocabulary', desc: '기출 필수 영단어장 (Day 1~30)', icon: BookOpen },
        { key: 'grammar', title: 'Grammar Mission', desc: '문법 포인트별 핵심 훈련', icon: PenSquare },
        { key: 'part1', title: 'Part 1 Shadowing', desc: '사진 묘사 (쉐도잉 훈련)', icon: Zap },
        { key: 'part1_real', title: 'Part 1 Real Test', desc: '사진 묘사 (실전 훈련)', icon: Zap },
        { key: 'part2', title: 'Part 2 Practice', desc: '질의 응답 (실전/청취)', icon: Zap },
        { key: 'part3', title: 'Part 3 Practice', desc: '짧은 대화 (스키밍/실전)', icon: Zap },
        { key: 'part4', title: 'Part 4 Practice', desc: '설명문 (스키밍/실전)', icon: Zap },
        { key: 'part5', title: 'Part 5 Practice', desc: '단문 빈칸 (실전 모의)', icon: Zap },
        { key: 'part6', title: 'Part 6 Practice', desc: '장문 빈칸 (실전 모의)', icon: Zap },
        { key: 'part7', title: 'Part 7 Practice', desc: '독해 (단일 지문)', icon: Zap },
        { key: 'part7_double', title: 'Part 7 Double', desc: '독해 (이중/삼중 지문)', icon: Zap },
        { key: 'mockTest', title: 'Full Mock Test', desc: 'LC+RC 200문항 (PC 전용)', icon: Shield },
        { key: 'levelTest', title: 'Level Test (Diagnostic)', desc: '심층 레벨 진단 하프테스트 (PC 전용)', icon: Zap },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/dashboard">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">System <span className="text-indigo-600">Settings</span></h1>
                            <p className="text-slate-500 text-xs font-bold">학생용 기능 활성화 및 학습 범위 제한 설정</p>
                        </div>
                    </div>
                    <Button
                        onClick={handleSave}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 shadow-lg shadow-indigo-600/20"
                        disabled={saving}
                    >
                        {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                        설정 저장하기
                    </Button>
                </header>

                <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50/30">
                        <div className="flex items-center gap-3">
                            <Lock className="w-6 h-6 text-rose-500" />
                            <div>
                                <CardTitle className="text-xl font-bold">사이트 기능 제어 (통제 대상)</CardTitle>
                                <CardDescription>기능 활성화 여부와 **허용 가능한 최대 회차(Range)**를 설정합니다.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="grid grid-cols-1 divide-y divide-slate-50">
                            {items.map((item) => (
                                <div key={item.key} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-4 flex-1">
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border shadow-sm ${access[item.key as keyof FeatureAccess] ? 'bg-indigo-50 border-indigo-100 text-indigo-500' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-10 bg-slate-50/50 p-2 pl-4 rounded-2xl border border-slate-100 min-w-[240px]">
                                        <div className="flex flex-col flex-1">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Max Range</span>
                                            <div className="space-y-2">
                                                {typeof access.maxSets?.[item.key] === 'object' ? (
                                                    <div className="bg-indigo-50/50 p-2 rounded-xl border border-indigo-100/50 space-y-2">
                                                        {Object.keys(access.maxSets![item.key] as object).sort().map(vol => (
                                                            <div key={vol} className="flex items-center gap-2">
                                                                <span className="text-[10px] text-indigo-600 font-black w-10 text-right">VOL {vol}</span>
                                                                <Input
                                                                    type="number"
                                                                    className="w-16 h-7 text-xs font-black bg-white text-slate-900 focus:ring-indigo-500 border-slate-200"
                                                                    value={(access.maxSets![item.key] as any)[vol] || 0}
                                                                    onChange={(e) => handleMaxSetChange(item.key, e.target.value, vol)}
                                                                />
                                                                <span className="text-[10px] text-slate-400 font-bold">회차</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2 pl-2">
                                                        <Input
                                                            type="number"
                                                            className="w-20 h-8 text-sm font-black bg-white text-slate-900 focus:ring-indigo-500 border-slate-200"
                                                            value={(access.maxSets?.[item.key] as number) || 0}
                                                            onChange={(e) => handleMaxSetChange(item.key, e.target.value)}
                                                        />
                                                        <span className="text-xs text-slate-500 font-bold">{item.key === 'voca' ? '일차' : '회차'}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="w-px h-10 bg-slate-200"></div>

                                        <div className="flex flex-col items-end pr-2">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Status</span>
                                            <div className="flex items-center gap-3">
                                                <span className={`text-[10px] font-black uppercase ${access[item.key as keyof FeatureAccess] ? 'text-indigo-600' : 'text-slate-300'}`}>
                                                    {access[item.key as keyof FeatureAccess] ? 'Active' : 'Locked'}
                                                </span>
                                                <Switch
                                                    checked={access[item.key as keyof FeatureAccess] as boolean}
                                                    onCheckedChange={() => handleToggle(item.key as keyof FeatureAccess)}
                                                    className="data-[state=checked]:bg-indigo-600"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-2xl bg-white rounded-[2.5rem] overflow-hidden ring-1 ring-slate-200">
                    <CardHeader className="p-8 border-b border-slate-100 bg-gradient-to-br from-indigo-50/50 to-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-[1.25rem] bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200 ring-4 ring-indigo-50">
                                    <Zap className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <CardTitle className="text-2xl font-black text-slate-900 tracking-tight">AI 리포트 자동 생성</CardTitle>
                                        <span className={`text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-sm ${aiSchedule.isAutoBatchEnabled ? 'bg-emerald-500 text-white animate-pulse' : 'bg-slate-200 text-slate-500'}`}>
                                            {aiSchedule.isAutoBatchEnabled ? 'SYSTEM ACTIVE' : 'SYSTEM OFF'}
                                        </span>
                                    </div>
                                    <CardDescription className="text-slate-500 font-medium">매주 정해진 스케줄에 맞춰 AI 분석 및 숙제를 생성합니다.</CardDescription>
                                </div>
                            </div>

                            {/* HIGH CONTRAST CONTROL BOX */}
                            <div className="bg-slate-900 p-5 rounded-[2rem] border border-slate-800 shadow-2xl min-w-[280px]">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="space-y-0.5">
                                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter">Automation Master Switch</p>
                                        <p className="text-sm font-bold text-white">자동 생성 모드 활성화</p>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 p-2 px-3 rounded-2xl border border-white/10">
                                        <span className={`text-[10px] font-black ${aiSchedule.isAutoBatchEnabled ? 'text-emerald-400' : 'text-slate-500'}`}>
                                            {aiSchedule.isAutoBatchEnabled ? 'ON' : 'OFF'}
                                        </span>
                                        <Switch
                                            id="auto-batch-toggle"
                                            checked={!!aiSchedule.isAutoBatchEnabled}
                                            onCheckedChange={(checked) => setAiSchedule(prev => ({ ...prev, isAutoBatchEnabled: checked }))}
                                            className="data-[state=unchecked]:bg-slate-700 data-[state=checked]:bg-indigo-500 scale-125"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 space-y-8">
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-bold text-slate-700 mb-3">리포트 생성 가능 요일</h4>
                                <div className="flex gap-2">
                                    {['일', '월', '화', '수', '목', '금', '토'].map((day, idx) => (
                                        <label
                                            key={idx}
                                            className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${aiSchedule.enabledDays.includes(idx)
                                                ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                                                : 'bg-slate-50 border-slate-200 text-slate-400 hover:border-slate-300'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={aiSchedule.enabledDays.includes(idx)}
                                                onChange={() => handleDayToggle(idx)}
                                                className="sr-only"
                                            />
                                            <span className="text-xs font-bold">{day}</span>
                                            {aiSchedule.enabledDays.includes(idx) && (
                                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                            )}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-[2rem] p-7 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 opacity-80">
                                        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                                        <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest leading-none">
                                            Pro Analysis Engine v1.8
                                        </h4>
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-tight">지능형 자동 스케줄러가 대기 중입니다</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-lg">
                                        설정된 요일에 맞춰 모든 학생의 성적을 실시간으로 서버에서 정밀 분석합니다. <br />
                                        분석 결과에 따라 개인화된 리포트와 6일치 동적 숙제를 자정에 자동으로 배분합니다.
                                    </p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex flex-col items-center min-w-[200px]">
                                    <span className="text-[10px] text-slate-500 font-black mb-2 uppercase tracking-tighter">System Engine Status</span>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-3 h-3 rounded-full ${aiSchedule.isAutoBatchEnabled ? 'bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]' : 'bg-slate-700'}`}></div>
                                        <span className={`text-xl font-black italic tracking-tighter ${aiSchedule.isAutoBatchEnabled ? 'text-white' : 'text-slate-600'}`}>
                                            {aiSchedule.isAutoBatchEnabled ? 'READY TO ACT' : 'STANDBY'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white border border-slate-100 rounded-xl p-4">
                                    <h4 className="text-[10px] text-slate-400 font-bold uppercase mb-2">Next Batch Date</h4>
                                    <div className="flex gap-2">
                                        <Input
                                            type="date"
                                            className="font-bold text-slate-900 border-slate-100 bg-slate-50 focus:ring-indigo-500"
                                            value={aiSchedule.nextBatchDate || ''}
                                            onChange={(e) => setAiSchedule(prev => ({ ...prev, nextBatchDate: e.target.value }))}
                                        />
                                    </div>
                                    <p className="text-[10px] text-slate-400 mt-2 italic font-medium">관리자가 지정한 특정 날짜에 일괄 생성을 수행합니다.</p>
                                </div>

                                {aiSchedule.lastReportDate && (
                                    <div className="bg-white border border-slate-100 rounded-xl p-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Last Batch Run</p>
                                            <p className="text-sm font-bold text-slate-900">
                                                {new Date(aiSchedule.lastReportDate).toLocaleDateString('ko-KR', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    weekday: 'short'
                                                })}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Gap Days</p>
                                            <p className="text-xl font-black text-indigo-600">
                                                {calculateReportPeriod(aiSchedule.lastReportDate)}
                                                <span className="text-xs text-slate-400 ml-1 italic font-medium">일전</span>
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
                                <Shield className="w-5 h-5 text-amber-500" />
                                <p className="text-xs text-amber-800 leading-relaxed">
                                    <strong className="font-bold font-italic">주의:</strong> 자동 생성(Batch) 활성화 시, 시스템 부하를 줄이기 위해 설정된 당일에만 실행됩니다.
                                    대기 중인 학생이 많을 경우 완료까지 수 분이 소요될 수 있습니다.
                                </p>
                            </div>

                            <Button
                                onClick={handleSaveSchedule}
                                disabled={saving || aiSchedule.enabledDays.length === 0}
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl mb-3"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                                스케줄 설정 저장
                            </Button>

                            <Button
                                onClick={async () => {
                                    if (!confirm("모든 학생의 주간 리포트와 숙제를 즉시 일괄 생성하시겠습니까? (AI API 비용이 발생하며 수 분이 소요될 수 있습니다.)")) return;
                                    setSaving(true);
                                    try {
                                        const res = await fetch('/api/admin/batch-report?force=true', { method: 'POST' });
                                        const data = await res.json();
                                        if (res.ok) {
                                            alert(`배치 생성 완료: 성공 ${data.summary.success}, 실패 ${data.summary.failed}`);
                                            fetchSettings();
                                        } else {
                                            throw new Error(data.error);
                                        }
                                    } catch (err: any) {
                                        alert("배치 생성 중 오류: " + err.message);
                                    } finally {
                                        setSaving(false);
                                    }
                                }}
                                disabled={saving}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black h-12 rounded-xl shadow-lg shadow-indigo-600/20"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
                                [일괄 실행] 주간 리포트 & 숙제 지금 생성하기
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-slate-900 rounded-[2rem] overflow-hidden">
                    <CardHeader className="p-8">
                        <div className="flex items-center gap-3 text-white">
                            <Zap className="w-6 h-6 text-indigo-400" />
                            <div>
                                <CardTitle className="text-xl font-bold">System Maintenance</CardTitle>
                                <CardDescription className="text-slate-400">시스템 성능 최적화 및 데이터 무결성 도구</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                        <div className="bg-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
                            <div>
                                <h4 className="font-bold text-white mb-1">성적 요약 데이터 동기화 (Performance Sync)</h4>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    학생들의 파트별 평균, 최근값, 예상 점수를 미리 계산하여 저장합니다. <br />
                                    대시보드 로딩이 느리거나 점수가 일치하지 않을 때 실행하십시오.
                                </p>
                            </div>
                            <Button
                                onClick={handleMigrate}
                                disabled={migrating}
                                className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 h-12 rounded-xl"
                            >
                                {migrating ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
                                동기화 실행 (Migration)
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <div className="bg-amber-50 border border-amber-100 rounded-3xl p-6 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
                        <Shield className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-black text-amber-900 text-sm italic uppercase tracking-wider mb-1">Homework Access Rule</h4>
                        <p className="text-xs text-amber-800 leading-relaxed font-medium">
                            위 설정에서 기능을 비활성화(Locked)하더라도, **관리자가 '숙제(Assignment)'로 직접 배정한 항목**은 학생의 '나의 학습방'에서 여전히 접근 및 풀이가 가능합니다. <br />
                            이 설정은 메인 화면의 일반 연습 메뉴 노출 여부만 결정합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
