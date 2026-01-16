"use client";

import React, { useState, useEffect } from 'react';
import Part6Runner from '@/components/exam/Part6Runner';
import Part7Runner from '@/components/exam/Part7Runner';
import { Clock, BookOpen, Monitor, Maximize, Minimize } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function StudentExamPage() {
    const [currentPart, setCurrentPart] = useState<'part6' | 'part7'>('part6');
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [currentPart]);

    useEffect(() => {
        setElapsedTime(0);
    }, [currentPart]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        // Listeners for various browsers
        ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(
            event => document.addEventListener(event, handleFullscreenChange)
        );
        return () => {
            ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(
                event => document.removeEventListener(event, handleFullscreenChange)
            );
        };
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const toggleFullscreen = () => {
        const doc = document as any;
        const elem = document.documentElement as any;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            // Enter Fullscreen
            if (elem.requestFullscreen) {
                elem.requestFullscreen().catch((err: any) => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message}`);
                    setIsFullscreen(true); // Fallback force
                });
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(); // Safari
            } else {
                setIsFullscreen(true); // Fallback logic
            }
        } else {
            // Exit Fullscreen
            if (doc.exitFullscreen) {
                doc.exitFullscreen();
            } else if (doc.msExitFullscreen) {
                doc.msExitFullscreen();
            } else if (doc.mozCancelFullScreen) {
                doc.mozCancelFullScreen();
            } else if (doc.webkitExitFullscreen) {
                doc.webkitExitFullscreen();
            }
            setIsFullscreen(false);
        }
    };

    return (
        <div className={cn(
            "flex flex-col bg-slate-50 overflow-hidden",
            // If CSS fallback is taking over or if native fullscreen is active, fill viewport
            (isFullscreen) ? "fixed inset-0 z-[9999] w-screen h-screen" : "h-screen w-full"
        )}>

            {/* Header */}
            <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 z-20">
                <div className="flex items-center gap-3">
                    <h1 className="font-bold text-base tracking-tight text-slate-800">
                        Daily Training <span className="text-slate-400 font-normal">|</span> <span className="text-indigo-600">Mock Test Vol. 1</span>
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex bg-slate-100 rounded-lg p-0.5">
                        <button
                            onClick={() => setCurrentPart('part6')}
                            className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all flex items-center gap-1.5 ${currentPart === 'part6' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            <BookOpen className="w-3 h-3" />
                            Part 6
                        </button>
                        <button
                            onClick={() => setCurrentPart('part7')}
                            className={`px-2.5 py-1 text-[10px] font-bold rounded transition-all flex items-center gap-1.5 ${currentPart === 'part7' ? 'bg-white shadow text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`}
                        >
                            <Monitor className="w-3 h-3" />
                            Part 7
                        </button>
                    </div>

                    <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400 shadow-sm min-w-[80px] justify-center">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{formatTime(elapsedTime)}</span>
                    </div>

                    <button
                        onClick={toggleFullscreen}
                        className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </button>
                </div>
            </header>

            {/* Main Body */}
            <div className="flex flex-1 overflow-hidden" style={{ height: 'calc(100vh - 3.5rem)' }}>
                <div className="w-full h-full relative">
                    {currentPart === 'part6' ? (
                        <Part6Runner className="h-full w-full" />
                    ) : (
                        <Part7Runner className="h-full w-full" />
                    )}
                </div>
            </div>
        </div>
    );
}
