'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp, collection, query, orderBy, onSnapshot, deleteDoc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Beaker, CheckCircle2, ChevronRight, Copy, Loader2, Sparkles, Volume2, Trash2, List } from "lucide-react";

import { isAdmin } from '@/lib/adminAuth';

const V4_VOLUMES = Array.from({ length: 10 }, (_, i) => String(i + 1).padStart(2, '0')); // 01 ~ 10

export default function MockBuilderPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    // Schema Builder State
    const [title, setTitle] = useState("V4 혼합형 특별 모의고사");

    const [schema, setSchema] = useState({
        p1: 'v4_p1_t01',
        p2: 'v4_p2_t02',
        p3: 'v4_p3_t03',
        p4: 'v4_p4_t04',
        p5: 'v4_p5_t05',
        p6: 'v4_p6_t06',
        p7s: 'v4_p7_t07',
        p7m: 'v4_p7_t08_multi'
    });

    const [publishedId, setPublishedId] = useState<string | null>(null);
    const [customList, setCustomList] = useState<any[]>([]);

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

            // Fetch custom mock tests list
            const q = query(collection(db, 'CustomMockTests'), orderBy('createdAt', 'desc'));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const list: any[] = [];
                snapshot.forEach(doc => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setCustomList(list);
            });

            return () => unsubscribe();
        };
        checkAdmin();
    }, [router]);

    const handleDelete = async (id: string, testTitle: string) => {
        if (!confirm(`정말로 [${testTitle}] 모의고사를 삭제하시겠습니까? (삭제 시 복구 불가)`)) return;
        try {
            await deleteDoc(doc(db, 'CustomMockTests', id));
            alert("삭제되었습니다.");
        } catch (e) {
            console.error(e);
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    const handleSchemaChange = (part: string, value: string) => {
        setSchema(prev => ({ ...prev, [part]: value }));
    };

    const handlePublish = async () => {
        if (!title.trim()) return alert("모의고사 제목을 입력해주세요.");
        setLoading(true);

        try {
            // Generate a unique short ID, e.g., 'custom-170...'
            const customId = `c${Date.now().toString().slice(-6)}`;

            const payload = {
                id: customId,
                title,
                schema,
                createdAt: serverTimestamp(),
                type: 'custom_mock'
            };

            // Save to Firebase 'CustomMockTests' collection
            await setDoc(doc(db, 'CustomMockTests', customId), payload);

            setPublishedId(customId);
        } catch (e) {
            console.error(e);
            alert("동적 모의고사 발행 중 오류가 발생했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (!publishedId) return;
        const link = `${window.location.origin}/mock-test/full/${publishedId}`;
        navigator.clipboard.writeText(link);
        alert("링크가 복사되었습니다!");
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <header className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/dashboard">
                            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50">
                                <ArrowLeft className="w-6 h-6" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-2">
                                Universal <span className="text-rose-600">Mock Builder</span>
                            </h1>
                            <p className="text-slate-500 text-xs font-bold">V3 및 V4 데이터를 자유롭게 조합하여 커스텀 모의고사를 생성합니다.</p>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: Metadata */}
                    <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden flex flex-col">
                        <CardHeader className="p-8 border-b border-slate-50 bg-slate-900 text-white">
                            <div className="flex items-center gap-3">
                                <Sparkles className="w-6 h-6 text-amber-400" />
                                <div>
                                    <CardTitle className="text-xl font-bold">기본 메타데이터 설정</CardTitle>
                                    <CardDescription className="text-slate-400">시험지 이름을 지정합니다.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6 flex-1 bg-slate-50/50">
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">시험지 제목 (학생용 표시)</label>
                                <Input
                                    className="h-14 font-bold text-lg border-2 border-slate-200 focus:border-indigo-500 focus:ring-0 rounded-2xl bg-white text-black"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    placeholder="예: 4주차 스파르타 모의고사"
                                />
                            </div>

                            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50 space-y-2">
                                <div className="flex items-center gap-2 text-indigo-600 font-bold">
                                    <Volume2 className="w-4 h-4" />
                                    <span className="text-sm">스마트 오디오 연속 재생 지원</span>
                                </div>
                                <p className="text-xs text-indigo-500 font-medium leading-relaxed">
                                    선택한 V3/V4 파트 데이터를 바탕으로 4개의 파별 MP3 음원이 모의고사 환경에서 자동으로 연결되어 (Relay) 재생됩니다.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Right: Part Combiner */}
                    <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                        <CardHeader className="p-8 border-b border-slate-50 bg-gradient-to-r from-indigo-50 to-white">
                            <div className="flex items-center gap-3">
                                <Beaker className="w-6 h-6 text-indigo-600" />
                                <div>
                                    <CardTitle className="text-xl font-bold text-slate-900">유니버설 파트 설계도 조립</CardTitle>
                                    <CardDescription className="text-slate-500">각 파트별로 가져올 교재 버젼(V3/V4)과 회차 데이터를 선택하세요.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">

                            <div className="grid grid-cols-2 gap-4">
                                {['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7s', 'p7m'].map(part => {
                                    return (
                                        <div key={part} className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-black uppercase text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full tracking-wider">{part.toUpperCase()}</span>
                                            </div>
                                            <Select
                                                value={(() => {
                                                    const match = (schema as any)[part].match(/v(\d)_p\d?[sm]?_t(\d+)/);
                                                    return match ? `v${match[1]}-${match[2]}` : 'v4-01';
                                                })()}
                                                onValueChange={(val) => {
                                                    const [vol, test] = val.split('-');
                                                    let suffix = '';
                                                    if (part === 'p7s') suffix = '';
                                                    if (part === 'p7m') suffix = '_multi';
                                                    handleSchemaChange(part, `${vol}_${part.replace('s', '').replace('m', '')}_t${test}${suffix}`);
                                                }}
                                            >
                                                <SelectTrigger className="h-10 text-xs font-bold bg-white border-slate-200 text-slate-900">
                                                    <SelectValue placeholder="회차 선택" />
                                                </SelectTrigger>
                                                <SelectContent className="max-h-[200px] bg-white border-slate-200">
                                                    {['4', '3'].map(volNum =>
                                                        V4_VOLUMES.map(vol => (
                                                            <SelectItem key={`v${volNum}-${vol}`} value={`v${volNum}-${vol}`} className="font-bold text-slate-900 hover:bg-slate-100 focus:bg-slate-100 cursor-pointer">
                                                                Vol. {volNum} - Test {parseInt(vol)}
                                                            </SelectItem>
                                                        ))
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )
                                })}
                            </div>

                        </CardContent>
                    </Card>
                </div>

                {/* Publish Action & Result */}
                <div className="bg-slate-900 p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
                    {!publishedId ? (
                        <div className="flex items-center gap-4 text-white">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center animate-pulse">
                                <Sparkles className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">완벽한 모의고사가 준비되었나요?</h3>
                                <p className="text-xs text-slate-400 font-medium tracking-wide">발행 버튼을 누르는 즉시 라이브 링크가 발급됩니다.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col flex-1 gap-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <h3 className="font-black text-emerald-400 uppercase tracking-widest text-sm">Successfully Published</h3>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-xl border border-slate-700">
                                <Input
                                    readOnly
                                    className="bg-transparent border-none text-white font-bold text-lg flex-1 h-auto"
                                    value={`${window.location.origin}/mock-test/full/${publishedId}`}
                                />
                                <Button onClick={copyToClipboard} variant="outline" className="shrink-0 bg-indigo-600 border-none text-white hover:bg-indigo-500">
                                    <Copy className="w-4 h-4 mr-2" /> 복사
                                </Button>
                            </div>
                        </div>
                    )}

                    {!publishedId && (
                        <Button
                            onClick={handlePublish}
                            disabled={loading}
                            className="bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-400 hover:to-rose-500 text-white font-black text-lg px-8 py-8 rounded-[1.5rem] shadow-xl shadow-rose-900/50 hover:scale-105 transition-all w-full md:w-auto"
                        >
                            {loading ? <Loader2 className="w-6 h-6 animate-spin mr-3" /> : <Sparkles className="w-6 h-6 mr-3" />}
                            모의고사 생성
                        </Button>
                    )}

                    {publishedId && (
                        <Link href={`/mock-test/full/${publishedId}`} target="_blank" className="shrink-0">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-black px-8 py-8 rounded-[1.5rem]">
                                테스트 접속하기 <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    )}
                </div>

            </div>

            {/* List & Delete Section */}
            <div className="max-w-4xl mx-auto mt-12">
                <Card className="border-none shadow-xl bg-white rounded-[2rem] overflow-hidden">
                    <CardHeader className="p-8 border-b border-slate-50 bg-slate-50">
                        <div className="flex items-center gap-3">
                            <List className="w-6 h-6 text-slate-700" />
                            <div>
                                <CardTitle className="text-xl font-bold text-slate-900">생성된 커스텀 모의고사 목록</CardTitle>
                                <CardDescription className="text-slate-500">방금 생성했거나 예전에 만들어둔 모의고사를 관리하고 삭제할 수 있습니다.</CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        {customList.length === 0 ? (
                            <div className="p-12 text-center text-slate-400 font-bold">생성된 모의고사가 없습니다.</div>
                        ) : (
                            <div className="divide-y divide-slate-100">
                                {customList.map((ct) => (
                                    <div key={ct.id} className="p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                                        <div>
                                            <h4 className="font-black text-slate-900 text-lg">{ct.title}</h4>
                                            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
                                                <Badge variant="outline" className="bg-slate-100/50 text-slate-600 border-slate-200">ID: {ct.id}</Badge>
                                                <span>{ct.createdAt?.toDate ? ct.createdAt.toDate().toLocaleString() : '방금 전'}</span>
                                            </div>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => handleDelete(ct.id, ct.title)}
                                            className="text-rose-400 hover:text-rose-600 hover:bg-rose-50"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
