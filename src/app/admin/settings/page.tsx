'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Loader2, ArrowLeft, Shield, Save, Lock, Zap, BookOpen, PenSquare, ChevronRight } from "lucide-react";
import Link from 'next/link';
import { getFeatureAccess, setFeatureAccess, FeatureAccess } from '@/services/configService';

import { isAdmin } from '@/lib/adminAuth';

export default function AdminSettingsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
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
        setLoading(false);
    };

    const handleToggle = (key: keyof FeatureAccess) => {
        if (key === 'maxSets') return;
        setAccess(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleMaxSetChange = (key: string, value: string) => {
        const numValue = parseInt(value) || 0;
        setAccess(prev => ({
            ...prev,
            maxSets: { ...(prev.maxSets || {}), [key]: numValue }
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await setFeatureAccess(access);
            alert("설정이 저장되었습니다.");
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

                                    <div className="flex items-center gap-10 bg-slate-50/50 p-2 pl-4 rounded-2xl border border-slate-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">Max Range</span>
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    type="number"
                                                    className="w-20 h-8 text-sm font-black bg-white text-slate-900 focus:ring-indigo-500 border-slate-200"
                                                    value={access.maxSets?.[item.key] || 0}
                                                    onChange={(e) => handleMaxSetChange(item.key, e.target.value)}
                                                />
                                                <span className="text-xs text-slate-500 font-bold">{item.key === 'voca' ? '일차' : '회차'}</span>
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
