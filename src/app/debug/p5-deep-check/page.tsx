'use client';

import { useState, useEffect } from 'react';
import { collection, query, limit, getDocs, getCountFromServer } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function DebugP5DeepCheck() {
    const [stats, setStats] = useState<any>(null);
    const [samples, setSamples] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkData = async () => {
            try {
                // 1. Check Part5_Questions count
                const coll = collection(db, 'Part5_Questions');
                const countSnap = await getCountFromServer(coll);
                const totalCount = countSnap.data().count;

                // 2. Fetch samples
                const q = query(coll, limit(20));
                const snap = await getDocs(q);

                const dataSamples: any[] = [];
                let taggedCount = 0;

                snap.forEach(doc => {
                    const data = doc.data();
                    const tag = data.classification || data.tags?.[0] || data.type || null;
                    if (tag) taggedCount++;
                    dataSamples.push({
                        id: doc.id,
                        text: data.question || data.text || 'N/A',
                        tag: tag,
                        raw: JSON.stringify(data).substring(0, 100) + '...'
                    });
                });

                setStats({ totalCount, sampleSize: snap.size, taggedInSample: taggedCount });
                setSamples(dataSamples);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        checkData();
    }, []);

    if (loading) return <div>Data Investigation in Progress...</div>;

    return (
        <div className="p-10 bg-white text-black min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Deep Data Investigation: Part5_Questions</h1>

            <div className="bg-slate-100 p-6 rounded-xl mb-8">
                <h2 className="text-lg font-bold mb-2">Collection Stats</h2>
                <p>Total Documents in 'Part5_Questions': <strong>{stats?.totalCount}</strong></p>
                <p>Samples Examined: <strong>{stats?.sampleSize}</strong></p>
                <p>Documents with any Tag/Classification: <strong>{stats?.taggedInSample}</strong></p>
            </div>

            <h2 className="text-lg font-bold mb-4">Sample Data (First 20)</h2>
            <div className="space-y-4">
                {samples.map((s, i) => (
                    <div key={i} className="border p-4 rounded bg-white shadow-sm">
                        <div className="text-xs text-slate-400 font-mono">DocID: {s.id}</div>
                        <div className="font-bold my-1">{s.text}</div>
                        <div className={`inline-block px-2 py-1 rounded text-sm font-black ${s.tag ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            Tag found: {s.tag || 'NONE'}
                        </div>
                        <div className="text-[10px] text-slate-300 mt-2 font-mono truncate">{s.raw}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
