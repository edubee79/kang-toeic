'use client';

import { useState, useEffect } from 'react';
import { collection, query, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function DebugP5Tags() {
    const [tags, setTags] = useState<string[]>([]);
    const [samples, setSamples] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const q = query(collection(db, 'Part5_Questions'), limit(100));
                const snapshot = await getDocs(q);

                const allTags: string[] = [];
                const allSamples: any[] = [];

                snapshot.forEach(doc => {
                    const data = doc.data();
                    const tag = data.classification || (data.tags && data.tags[0]) || 'NONE';
                    allTags.push(tag);
                    allSamples.push({
                        id: doc.id,
                        question: data.question || data.text || 'N/A',
                        tag: tag
                    });
                });

                setTags(Array.from(new Set(allTags)));
                setSamples(allSamples);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        fetchTags();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="p-10 bg-white text-black min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Part 5 Tags Check (Samples)</h1>

            <div className="mb-8">
                <h2 className="text-xl font-bold mb-2">Unique Tags Found:</h2>
                <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                        <span key={t} className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">{t}</span>
                    ))}
                </div>
            </div>

            <h2 className="text-xl font-bold mb-2">Question Samples:</h2>
            <div className="space-y-4">
                {samples.map((s, i) => (
                    <div key={i} className="border p-4 rounded bg-slate-50">
                        <div className="text-xs text-slate-400 font-mono mb-1">{s.id}</div>
                        <div className="font-medium mb-2">{s.question}</div>
                        <div className="text-indigo-600 font-bold font-mono">Tag: {s.tag}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
