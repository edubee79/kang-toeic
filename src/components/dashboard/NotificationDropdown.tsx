'use client';

import { useState, useEffect, useRef } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, orderBy, limit, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { MessageCircle, Clock, Inbox, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import Ko from 'date-fns/locale/ko';

interface Notification {
    id: string;
    title: string;
    body: string;
    timestamp: any;
    isRead: boolean;
    type: string;
}

interface NotificationDropdownProps {
    userId: string;
}

export function NotificationDropdown({ userId }: NotificationDropdownProps) {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const unreadCount = notifications.filter(n => !n.isRead).length;
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!userId) return;

        // Simplified query to avoid composite index requirement
        const q = query(
            collection(db, 'User_Notifications'),
            where('userId', '==', userId),
            limit(20)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const list = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                };
            }) as Notification[];

            // Client-side sort to avoid index error
            const sortedList = list.sort((a, b) => {
                const timeA = a.timestamp?.toMillis() || 0;
                const timeB = b.timestamp?.toMillis() || 0;
                return timeB - timeA;
            });

            setNotifications(sortedList.slice(0, 5));
        }, (error) => {
            console.error('Error fetching notifications:', error);
        });

        return () => unsubscribe();
    }, [userId]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const markAsRead = async (id: string) => {
        try {
            await updateDoc(doc(db, 'User_Notifications', id), {
                isRead: true
            });
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Trigger Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all relative",
                    unreadCount > 0
                        ? "bg-indigo-500/20 text-indigo-400 animate-pulse"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                )}
            >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white px-1">
                        {unreadCount}
                    </span>
                )}
            </button>

            {/* Compact Dropdown Box */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-72 md:w-80 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                    <div className="p-3 border-b border-slate-800 flex items-center justify-between">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Messages</span>
                        <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-slate-500" /></button>
                    </div>

                    <div className="max-h-64 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-6 text-center">
                                <Inbox className="w-6 h-6 text-slate-700 mx-auto mb-2 opacity-30" />
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">수신 메시지 없음</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-slate-800/50 text-left">
                                {notifications.map((n) => (
                                    <div
                                        key={n.id}
                                        className={cn(
                                            "p-3 transition-colors cursor-pointer",
                                            !n.isRead ? "bg-indigo-500/5 hover:bg-indigo-500/10" : "hover:bg-slate-800/30"
                                        )}
                                        onClick={() => {
                                            if (!n.isRead) markAsRead(n.id);
                                        }}
                                    >
                                        <div className="flex justify-between items-start mb-0.5">
                                            <p className={cn("text-[11px] font-black italic", !n.isRead ? "text-white" : "text-slate-500")}>{n.title}</p>
                                            <span className="text-[8px] text-slate-600 font-bold">
                                                {n.timestamp ? formatDistanceToNow(n.timestamp.toDate(), { addSuffix: true, locale: Ko }) : '방금'}
                                            </span>
                                        </div>
                                        <p className={cn("text-[10px] leading-tight", !n.isRead ? "text-slate-300" : "text-slate-500")}>
                                            {n.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
