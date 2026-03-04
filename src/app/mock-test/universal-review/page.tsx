'use client';

import { Suspense } from 'react';
import UniversalReviewClient from './UniversalReviewClient';

export default function UniversalReviewPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-500 font-bold">오답 복습 환경 준비 중...</div>}>
            <UniversalReviewClient />
        </Suspense>
    );
}
