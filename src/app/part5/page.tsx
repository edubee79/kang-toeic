'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Part5Page() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/homework/part5');
    }, [router]);

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
            <p className="animate-pulse text-slate-500">Redirecting to Part 5 Lobby...</p>
        </div>
    );
}
