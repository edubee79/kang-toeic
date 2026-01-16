'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth(redirectTo: string = '/login') {
    const router = useRouter();

    useEffect(() => {
        // Check if user is authenticated
        const user = localStorage.getItem('toeic_user');

        if (!user) {
            router.push(redirectTo);
        }
    }, [router, redirectTo]);
}
