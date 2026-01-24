// Firebase Cloud Messaging Service Worker
// This worker handles background notifications.

// 1. Import scripts
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');

// Add immediate activation
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));

// 2. Initialize with config from URL params or default
const urlParams = new URLSearchParams(location.search);

const config = {
    apiKey: urlParams.get('apiKey'),
    authDomain: urlParams.get('authDomain'),
    projectId: urlParams.get('projectId'),
    storageBucket: urlParams.get('storageBucket'),
    messagingSenderId: urlParams.get('messagingSenderId'),
    appId: urlParams.get('appId'),
};

// Check if we have the minimum required config
if (config.apiKey && config.messagingSenderId) {
    try {
        firebase.initializeApp(config);
        const messaging = firebase.messaging();

        messaging.onBackgroundMessage((payload) => {
            console.log('[firebase-messaging-sw.js] Received background message ', payload);

            const notificationTitle = payload.notification?.title || '깡쌤토익 알림';
            const notificationOptions = {
                body: payload.notification?.body || '새로운 메시지가 도착했습니다.',
                icon: '/icons/app-main-icon.jpg',
                data: payload.data
            };

            self.registration.showNotification(notificationTitle, notificationOptions);
        });
    } catch (err) {
        console.error('Firebase SW initialization error:', err);
    }
} else {
    console.warn('[firebase-messaging-sw.js] Missing config. Notifications might not work in background.');
    console.log('Current config was:', config);
}
