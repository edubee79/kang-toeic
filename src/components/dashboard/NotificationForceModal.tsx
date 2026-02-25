'use client';

import { useState, useEffect } from 'react';
import { Bell, ShieldAlert, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db, messaging } from '@/lib/firebase';
import { getToken } from 'firebase/messaging';
import { doc, updateDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { cn } from '@/lib/utils';

interface NotificationForceModalProps {
    userId: string;
}

export function NotificationForceModal({ userId }: NotificationForceModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'denied'>('idle');
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!userId) return;

        // Listen for real-time changes to the user's token in DB
        const unsubscribe = onSnapshot(doc(db, "Winter_Users", userId), (docSnap) => {
            const data = docSnap.data();
            const hasToken = !!data?.fcmToken;

            // If they granted permission but somehow the browser permission is denied, 
            // we should still show the modal if the token is missing from DB.
            const permission = (typeof window !== 'undefined' && 'Notification' in window)
                ? Notification.permission
                : 'default';

            const isDev = process.env.NODE_ENV === 'development';
            const isLocal = typeof window !== 'undefined' && (
                window.location.hostname === 'localhost' ||
                window.location.hostname === '127.0.0.1' ||
                window.location.hostname.startsWith('192.168.') ||
                window.location.hostname.startsWith('10.') ||
                window.location.hostname.startsWith('172.')
            );

            if (!isDev && !isLocal && (!hasToken || permission !== 'granted')) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setStatus('success');
            }
            setIsChecking(false);
        });

        return () => unsubscribe();
    }, [userId]);

    const handleEnable = async () => {
        setStatus('loading');
        try {
            if (!('Notification' in window)) {
                alert("이 브라우저는 알림 기능을 지원하지 않습니다. 크롬이나 엣지 브라우저를 사용해주세요.");
                setStatus('idle');
                return;
            }

            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                setStatus('denied');
                return;
            }

            if (!messaging) {
                console.warn("Messaging not initialized");
                setStatus('idle');
                return;
            }

            // Register service worker and get token
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

            // Wait for sw to be active
            const sw = registration.installing || registration.waiting || registration.active;
            if (sw && sw.state !== 'activated') {
                await new Promise<void>((resolve) => {
                    sw.addEventListener('statechange', (e: any) => {
                        if (e.target.state === 'activated') resolve();
                    });
                });
            }

            const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
            const token = await getToken(messaging, {
                vapidKey,
                serviceWorkerRegistration: registration
            });

            if (token) {
                await updateDoc(doc(db, "Winter_Users", userId), {
                    fcmToken: token
                });
                setStatus('success');
                setIsVisible(false);
            }
        } catch (error) {
            console.error("Failed to force enable notifications", error);
            setStatus('idle');
        }
    };

    if (isChecking || !isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-500">
            <div className="max-w-md w-full mx-4 bg-slate-900 border border-indigo-500/30 rounded-3xl p-8 shadow-2xl shadow-indigo-500/10 text-center">
                <div className="w-20 h-20 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    {status === 'loading' ? (
                        <Loader2 className="w-10 h-10 text-indigo-400 animate-spin" />
                    ) : status === 'denied' ? (
                        <ShieldAlert className="w-10 h-10 text-rose-500" />
                    ) : (
                        <Bell className="w-10 h-10 text-indigo-400 animate-pulse" />
                    )}
                </div>

                <h2 className="text-2xl font-black text-white mb-3 tracking-tighter uppercase italic">
                    Push Notification Required
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    강쌤토익의 실시간 숙제 배포 및 긴급 메시지 수신을 위해<br />
                    <span className="text-indigo-400 font-bold">푸시 알림 활성화가 필수</span>입니다.<br />
                    알림을 켜지 않으면 서비스를 이용하실 수 없습니다.
                </p>

                {status === 'denied' ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 text-xs font-bold leading-normal">
                            이미 알림 권한을 거절하셨습니다.<br />
                            주소창 왼쪽의 자물쇠 아이콘을 클릭하여<br />
                            '알림' 권한을 다시 허용으로 변경한 후 새로고침 해주세요.
                        </div>
                        <Button
                            onClick={() => window.location.reload()}
                            className="w-full bg-slate-800 hover:bg-slate-700 font-black"
                        >
                            설정 변경 후 새로고침
                        </Button>
                    </div>
                ) : (
                    <Button
                        onClick={handleEnable}
                        disabled={status === 'loading'}
                        className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-lg font-black rounded-2xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
                    >
                        {status === 'loading' ? '활성화 중...' : '실시간 알림 켜고 입장하기'}
                    </Button>
                )}

                <p className="mt-6 text-[10px] text-slate-500 font-medium">
                    * 무분별한 광고성 정보는 발송되지 않으며,<br />
                    오직 학습 관련 정보 및 강사의 메시지만 전송됩니다.
                </p>
            </div>
        </div>
    );
}
