'use client';

import { useState } from 'react';
import Link from 'next/link';
import { collection, addDoc, writeBatch, doc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Upload, FileText, CheckCircle2, Loader2, ArrowLeft } from "lucide-react";
import { parsePart5Excel, parsePart6Excel } from '@/lib/excel';
import type { Part5Question, Part6Passage } from '@/types/toeic';

export default function AdminQuestionsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    // Part 5 State
    const [part5File, setPart5File] = useState<File | null>(null);
    const [part5Preview, setPart5Preview] = useState<Part5Question[]>([]);

    // Part 6 State
    const [part6File, setPart6File] = useState<File | null>(null);
    const [part6Preview, setPart6Preview] = useState<Part6Passage[]>([]);

    // --- Part 5 Handlers ---
    const handlePart5Upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPart5File(file);
        try {
            const data = await parsePart5Excel(file);
            setPart5Preview(data);
            setStatus(`Part 5: ${data.length}문제 로드됨`);
        } catch (err) {
            console.error(err);
            setStatus('파일 파싱 오류');
        }
    };

    const savePart5ToFirebase = async () => {
        if (!part5Preview.length) return;
        setIsLoading(true);
        try {
            const batch = writeBatch(db);
            const collectionRef = collection(db, 'Part5_Questions');

            // Generate IDs and add to batch
            // Note: Batch limit is 500. For production, chunking is needed.
            // For now, simpler implementation or basic chunking.

            const CHUNK_SIZE = 450;
            for (let i = 0; i < part5Preview.length; i += CHUNK_SIZE) {
                const chunk = part5Preview.slice(i, i + CHUNK_SIZE);
                const chunkBatch = writeBatch(db);

                chunk.forEach(q => {
                    const docRef = doc(collectionRef); // Auto ID
                    chunkBatch.set(docRef, {
                        ...q,
                        createdAt: new Date()
                    });
                });
                await chunkBatch.commit();
            }

            setStatus('Part 5 저장 완료!');
            setPart5Preview([]);
            setPart5File(null);
        } catch (err) {
            console.error(err);
            setStatus('저장 중 오류 발생');
        } finally {
            setIsLoading(false);
        }
    };

    // --- Part 6 Handlers ---
    const handlePart6Upload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setPart6File(file);
        try {
            const data = await parsePart6Excel(file);
            setPart6Preview(data);
            setStatus(`Part 6: ${data.length}개 지문 로드됨`);
        } catch (err) {
            console.error(err);
            setStatus('파일 파싱 오류');
        }
    };

    const savePart6ToFirebase = async () => {
        if (!part6Preview.length) return;
        setIsLoading(true);
        try {
            const collectionRef = collection(db, 'Part6_Passages');
            // Part 6 is usually fewer items (passages), so simple loop might suffice or batching
            const CHUNK_SIZE = 450;
            for (let i = 0; i < part6Preview.length; i += CHUNK_SIZE) {
                const chunk = part6Preview.slice(i, i + CHUNK_SIZE);
                const chunkBatch = writeBatch(db);

                chunk.forEach(p => {
                    const docRef = doc(collectionRef);
                    chunkBatch.set(docRef, {
                        ...p,
                        createdAt: new Date()
                    });
                });
                await chunkBatch.commit();
            }

            setStatus('Part 6 저장 완료!');
            setPart6Preview([]);
            setPart6File(null);
        } catch (err) {
            console.error(err);
            setStatus('저장 중 오류 발생');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/admin/dashboard">
                    <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <ArrowLeft className="w-6 h-6" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black tracking-tighter">문제 데이터 관리</h1>
                    <p className="text-slate-400">엑셀/CSV 파일을 업로드하여 문제를 등록합니다.</p>
                </div>
            </div>

            <Tabs defaultValue="part5" className="w-full">
                <TabsList className="bg-slate-800">
                    <TabsTrigger value="part5">Part 5 (단문)</TabsTrigger>
                    <TabsTrigger value="part6">Part 6 (장문)</TabsTrigger>
                    <TabsTrigger value="part7" disabled>Part 7 (준비중)</TabsTrigger>
                </TabsList>

                {/* Part 5 Tab */}
                <TabsContent value="part5" className="space-y-4">
                    <Card className="bg-slate-800 border-slate-700">
                        <CardHeader>
                            <CardTitle>Part 5 업로드</CardTitle>
                            <CardDescription>
                                형식: Unit, Question_No, Question, Option_A~D, Answer, Type_Tag, Explanation
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Input type="file" accept=".xlsx,.csv" onChange={handlePart5Upload} className="bg-slate-950 border-slate-700" />
                                <Button
                                    onClick={savePart5ToFirebase}
                                    disabled={!part5Preview.length || isLoading}
                                    className="bg-indigo-600 hover:bg-indigo-500"
                                >
                                    {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                                    DB 저장
                                </Button>
                            </div>

                            {status && <div className="text-emerald-400 font-bold">{status}</div>}

                            {/* Preview Table */}
                            {part5Preview.length > 0 && (
                                <div className="mt-4 border border-slate-700 rounded-md overflow-hidden max-h-[500px] overflow-y-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-900 text-slate-400 uppercase font-bold sticky top-0">
                                            <tr>
                                                <th className="p-3">No</th>
                                                <th className="p-3">Question</th>
                                                <th className="p-3">Options</th>
                                                <th className="p-3">Answer</th>
                                                <th className="p-3">Tags</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-700">
                                            {part5Preview.slice(0, 50).map((q, idx) => (
                                                <tr key={idx} className="hover:bg-slate-700/50">
                                                    <td className="p-3 font-mono">{q.questionNumber}</td>
                                                    <td className="p-3 max-w-sm truncate">{q.question}</td>
                                                    <td className="p-3 text-xs text-slate-300">
                                                        <div className="grid grid-cols-2 gap-x-2">
                                                            <span>A) {q.options[0]}</span>
                                                            <span>B) {q.options[1]}</span>
                                                            <span>C) {q.options[2]}</span>
                                                            <span>D) {q.options[3]}</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 font-bold text-center">{q.answer}</td>
                                                    <td className="p-3 text-slate-400 text-xs">
                                                        {q.tags?.join(', ')}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {part5Preview.length > 50 && (
                                        <div className="p-3 text-center text-slate-500 bg-slate-900">
                                            ... 외 {part5Preview.length - 50}개 항목
                                        </div>
                                    )}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Part 6 Tab */}
                <TabsContent value="part6" className="space-y-4">
                    <Card className="bg-slate-800 border-slate-700">
                        <CardHeader>
                            <CardTitle>Part 6 업로드</CardTitle>
                            <CardDescription>
                                형식: Passage_ID, Content, Question_No, Options... (같은 ID끼리 자동 묶음)
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Input type="file" accept=".xlsx,.csv" onChange={handlePart6Upload} className="bg-slate-950 border-slate-700" />
                                <Button
                                    onClick={savePart6ToFirebase}
                                    disabled={!part6Preview.length || isLoading}
                                    className="bg-purple-600 hover:bg-purple-500"
                                >
                                    {isLoading ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : <Upload className="w-4 h-4 mr-2" />}
                                    DB 저장
                                </Button>
                            </div>

                            {status && <div className="text-emerald-400 font-bold">{status}</div>}

                            {/* Preview List */}
                            {part6Preview.length > 0 && (
                                <div className="mt-4 space-y-4 max-h-[500px] overflow-y-auto pr-2">
                                    {part6Preview.map((passage, idx) => (
                                        <Card key={idx} className="bg-slate-900 border-slate-700">
                                            <CardHeader className="py-3">
                                                <CardTitle className="text-sm font-mono text-slate-300">
                                                    ID: {passage.passageId} ({passage.docType})
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="py-3 text-sm space-y-2">
                                                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-400 line-clamp-3">
                                                    {passage.content}
                                                </div>
                                                <div className="pl-4 border-l-2 border-purple-500/30">
                                                    <p className="font-bold text-slate-300 mb-1">
                                                        포함된 문제 ({passage.questions.length}개)
                                                    </p>
                                                    {passage.questions.map(q => (
                                                        <span key={q.questionNumber} className="inline-block bg-slate-800 px-2 py-1 rounded mr-2 text-xs">
                                                            Q{q.questionNumber} (정답: {q.answer})
                                                        </span>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
