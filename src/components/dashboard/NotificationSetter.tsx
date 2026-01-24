'use client';

import { useState, useEffect } from 'react';
import { Bell, BellOff, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db, messaging } from '@/lib/firebase';
import { getToken } from 'firebase/messaging';
import { doc, updateDoc, getDoc } from 'firebase/firestore';

interface NotificationSetterProps {
    userId: string;
}

export function NotificationSetter({ userId }: NotificationSetterProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'denied'>('idle');
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const checkStatus = async () => {
            if (!userId) return;

            // 1. Check if permission is already granted
            if (typeof window !== 'undefined' && 'Notification' in window) {
                if (Notification.permission === 'granted') {
                    // Let's check if the token exists in DB
                    const userDoc = await getDoc(doc(db, "Winter_Users", userId));
                    if (userDoc.exists() && userDoc.data().fcmToken) {
                        setHasToken(true);
                        setStatus('success');
                    }
                } else if (Notification.permission === 'denied') {
                    setStatus('denied');
                }
            }
        };
        checkStatus();
    }, [userId]);

    const handleEnableNotifications = async () => {
        setStatus('loading');
        try {
            if (!('Notification' in window)) {
                alert("이 브라우저는 알림 기능을 지원하지 않습니다.");
                setStatus('error');
                return;
            }

            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                setStatus('denied');
                return;
            }

            if (!messaging) {
                console.warn("Messaging not initialized");
                setStatus('error');
                return;
            }

            // --- CUSTOM SERVICE WORKER REGISTRATION ---
            // We pass config via query params so public/firebase-messaging-sw.js can initialize correctly
            const configParams = new URLSearchParams({
                apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
                authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
                messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
                appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
            }).toString();

            const swUrl = `/firebase-messaging-sw.js?${configParams}`;
            const registration = await navigator.serviceWorker.register(swUrl, {
                scope: '/firebase-cloud-messaging-push-scope',
            });

            // --- WAIT FOR SERVICE WORKER TO BE ACTIVE ---
            // getToken requires an active service worker. 
            // Registration might still be in 'installing' or 'activating' state.
            const waitForActive = (reg: ServiceWorkerRegistration) => {
                const sw = reg.installing || reg.waiting || reg.active;
                if (!sw) return Promise.reject("No service worker found");

                if (sw.state === 'activated') return Promise.resolve();

                return new Promise<void>((resolve) => {
                    sw.addEventListener('statechange', (e: any) => {
                        if (e.target.state === 'activated') resolve();
                    });
                });
            };

            await waitForActive(registration);

            const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
            const token = await getToken(messaging, {
                vapidKey,
                serviceWorkerRegistration: registration
            });

            if (token) {
                await updateDoc(doc(db, "Winter_Users", userId), {
                    fcmToken: token
                });
                setHasToken(true);
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Failed to enable notifications", error);
            setStatus('error');
        }
    };

    if (status === 'denied') {
        return (
            <div className="flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-bold">
                <BellOff className="w-4 h-4" />
                <span>알림이 차단됨 (브라우저 설정에서 해제 필요)</span>
            </div>
        );
    }

    if (status === 'success' || hasToken) {
        return (
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>실시간 알림 활성화됨</span>
            </div>
        );
    }

    return (
        <Button
            onClick={handleEnableNotifications}
            disabled={status === 'loading'}
            variant="outline"
            className="h-9 px-4 rounded-xl border-indigo-500/30 bg-indigo-500/5 text-indigo-400 hover:bg-indigo-500 hover:text-white text-xs font-bold gap-2 transition-all"
        >
            {status === 'loading' ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
                <Bell className="w-4 h-4" />
            )}
            실시간 숙제 알림 켜기
        </Button>
    );
}
