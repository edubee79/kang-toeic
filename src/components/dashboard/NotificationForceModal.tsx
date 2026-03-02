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
    const [errorMessage, setErrorMessage] = useState('');

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

            const isSkipped = sessionStorage.getItem(`skip_notification_${userId}`) === 'true';

            if (!isDev && !isLocal && !isSkipped && (!hasToken || permission !== 'granted')) {
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
        setErrorMessage('');
        setStatus('loading');

        // Safety timeout: 15 seconds max for the entire process
        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('TIMEOUT')), 15000)
        );

        try {
            if (!('Notification' in window)) {
                setErrorMessage("이 브라우저는 알림 기능을 지원하지 않습니다. 크롬이나 엣지 브라우저를 사용해 주세요.");
                setStatus('idle');
                return;
            }

            // Wrap EVERYTHING in race
            await Promise.race([
                (async () => {
                    // 1. Request Permission (This can hang in some browsers)
                    console.log("Requesting notification permission...");
                    const permission = await Notification.requestPermission();
                    if (permission !== 'granted') {
                        setStatus('denied');
                        return;
                    }

                    // 2. Wait for messaging object
                    let currentMessaging = messaging;
                    if (!currentMessaging) {
                        console.log("Waiting for messaging module...");
                        for (let i = 0; i < 6; i++) { // Try for 3 seconds
                            await new Promise(r => setTimeout(r, 500));
                            if (messaging) {
                                currentMessaging = messaging;
                                break;
                            }
                        }
                    }

                    if (!currentMessaging) {
                        throw new Error("MESSAGING_NOT_READY");
                    }

                    // 3. Register service worker
                    console.log("Registering service worker...");
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

                    await navigator.serviceWorker.ready;

                    // 4. Get token
                    console.log("Acquiring FCM token...");
                    const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
                    const token = await getToken(currentMessaging, {
                        vapidKey,
                        serviceWorkerRegistration: registration
                    });

                    if (token) {
                        console.log("FCM Token acquired, updating DB...");
                        await updateDoc(doc(db, "Winter_Users", userId), {
                            fcmToken: token,
                            lastTokenUpdate: new Date().toISOString()
                        });
                        setStatus('success');
                        setIsVisible(false);
                    } else {
                        throw new Error("TOKEN_EMPTY");
                    }
                })(),
                timeoutPromise
            ]);

        } catch (error: any) {
            console.error("Notification activation failed:", error);
            setStatus('idle');

            if (error.message === 'TIMEOUT') {
                setErrorMessage("연결 시간이 초과되었습니다. 네트워크 상태를 확인하거나 잠시 후 다시 시도해 주세요.");
            } else if (error.message === 'MESSAGING_NOT_READY') {
                setErrorMessage("알림 서비스 준비 중입니다. 잠시 후 다시 시도해 주세요.");
            } else {
                setErrorMessage("알림 활성화 중 오류가 발생했습니다. 브라우저 설정을 확인해 주세요.");
            }
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
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    강쌤토익의 실시간 숙제 배포 및 긴급 메시지 수신을 위해<br />
                    <span className="text-indigo-400 font-bold">푸시 알림 활성화가 필수</span>입니다.<br />
                    알림을 켜지 않으면 서비스를 이용하실 수 없습니다.
                </p>

                {errorMessage && (
                    <div className="mb-6 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400 text-xs font-bold animate-in zoom-in-95">
                        {errorMessage}
                    </div>
                )}

                {status === 'denied' ? (
                    <div className="space-y-4">
                        <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-2xl text-rose-400 text-xs font-bold leading-normal">
                            이미 알림 권한을 거절하셨습니다.<br />
                            주소창 왼쪽의 자물쇠 아이콘을 클릭하여<br />
                            '알림' 권한을 다시 허용으로 변경한 후 새로고침 해주세요.
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                            <Button
                                onClick={() => window.location.reload()}
                                className="w-full h-12 bg-slate-800 hover:bg-slate-700 font-black rounded-xl"
                            >
                                설정 변경 후 새로고침
                            </Button>
                            <Button
                                onClick={() => {
                                    sessionStorage.setItem(`skip_notification_${userId}`, 'true');
                                    setIsVisible(false);
                                }}
                                variant="ghost"
                                className="w-full h-12 text-slate-500 hover:text-slate-300 font-bold text-xs underline underline-offset-4"
                            >
                                알림 없이 입장하기 (일부 기능 제한)
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <Button
                            onClick={handleEnable}
                            disabled={status === 'loading'}
                            className="w-full h-14 bg-indigo-600 hover:bg-indigo-500 text-lg font-black rounded-2xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
                        >
                            {status === 'loading' ? '활성화 중...' : '실시간 알림 켜고 입장하기'}
                        </Button>

                        <Button
                            onClick={() => {
                                sessionStorage.setItem(`skip_notification_${userId}`, 'true');
                                setIsVisible(false);
                            }}
                            disabled={status === 'loading'}
                            variant="ghost"
                            className="w-full h-10 text-slate-500 hover:text-slate-300 font-bold text-xs"
                        >
                            나중에 하기 (건너뛰기)
                        </Button>
                    </div>
                )}

                <p className="mt-6 text-[10px] text-slate-500 font-medium">
                    * 아이폰(iOS) 등 일부 기기에서는 알림이 지원되지 않을 수 있습니다.<br />
                    이 경우 '건너뛰기'를 눌러 입장해 주세요.
                </p>
            </div>
        </div>
    );
}
