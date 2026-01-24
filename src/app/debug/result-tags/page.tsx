'use client';

import { useState, useEffect } from 'react';
import { collection, query, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function DebugResultsTags() {
    const [tags, setTags] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTags = async () => {
            try {
                // Fetch from Manager_Results where part5 questions exist
                const q = query(collection(db, 'Manager_Results'), limit(50));
                const snapshot = await getDocs(q);

                const allTags = new Set<string>();

                snapshot.forEach(doc => {
                    const data = doc.data();
                    if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                        data.incorrectQuestions.forEach((q: any) => {
                            if (q.classification) allTags.add(q.classification);
                        });
                    }
                });

                setTags(Array.from(allTags));
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
            <h1 className="text-2xl font-bold mb-4">Manager_Results Tags Check</h1>
            <div className="flex flex-wrap gap-2">
                {tags.length > 0 ? tags.map(t => (
                    <span key={t} className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">{t}</span>
                )) : <span>No tags found in recent results.</span>}
            </div>
        </div>
    );
}
