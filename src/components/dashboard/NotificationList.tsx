'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, limit, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { Bell, MessageCircle, Clock, CheckCircle2, Inbox } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

interface Notification {
    id: string;
    title: string;
    body: string;
    timestamp: any;
    isRead: boolean;
    type: string;
}

interface NotificationListProps {
    userId: string;
}

export function NotificationList({ userId }: NotificationListProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!userId) return;

        const q = query(
            collection(db, 'User_Notifications'),
            where('userId', '==', userId),
            orderBy('timestamp', 'desc'),
            limit(10)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Notification[];
            setNotifications(list);
            setLoading(false);
        }, (error) => {
            console.error('Error fetching notifications:', error);
            // On error (like missing index), stop loading so it doesn't hang
            setLoading(false);
        });

        return () => unsubscribe();
    }, [userId]);

    const markAsRead = async (id: string) => {
        try {
            await updateDoc(doc(db, 'User_Notifications', id), {
                isRead: true
            });
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    if (loading) {
        return (
            <Card className="bg-slate-900/50 border-slate-800 animate-pulse">
                <CardContent className="h-40" />
            </Card>
        );
    }

    return (
        <Card className="bg-slate-900/50 border-slate-800 overflow-hidden">
            <CardHeader className="pb-3 border-b border-slate-800/50 flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-black text-indigo-400 flex items-center gap-2 uppercase tracking-widest italic">
                    <MessageCircle className="w-4 h-4" />
                    Teacher's Messages
                </CardTitle>
                {notifications.filter(n => !n.isRead).length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-500 text-[10px] font-black text-white animate-bounce">
                        NEW
                    </span>
                )}
            </CardHeader>
            <CardContent className="p-0">
                {notifications.length === 0 ? (
                    <div className="p-8 text-center bg-slate-800/10">
                        <Inbox className="w-8 h-8 text-slate-700 mx-auto mb-2 opacity-20" />
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                            수신된 메시지가 없습니다.<br />선생님의 응원을 기다려보세요!
                        </p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-800/50">
                        {notifications.map((n) => (
                            <div
                                key={n.id}
                                className={cn(
                                    "p-4 transition-colors relative group",
                                    !n.isRead ? "bg-indigo-500/5 hover:bg-indigo-500/10" : "hover:bg-slate-800/30"
                                )}
                                onClick={() => !n.isRead && markAsRead(n.id)}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className={cn(
                                        "text-sm font-black",
                                        !n.isRead ? "text-white" : "text-slate-400"
                                    )}>
                                        {n.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold">
                                        <Clock className="w-3 h-3" />
                                        {n.timestamp ? formatDistanceToNow(n.timestamp.toDate(), { addSuffix: true, locale: ko }) : '방금 전'}
                                    </div>
                                </div>
                                <p className={cn(
                                    "text-xs leading-relaxed",
                                    !n.isRead ? "text-slate-300" : "text-slate-500"
                                )}>
                                    {n.body}
                                </p>
                                {!n.isRead && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
