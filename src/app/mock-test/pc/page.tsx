"use client";

import React, { useState, useEffect } from 'react';
import LC_Full_Template from '@/components/exam/mock/LC_Full_Template';
import RC_Full_Template from '@/components/exam/mock/RC_Full_Template';

export default function MockTestPCPage() {
    const [phase, setPhase] = useState<'check' | 'intro' | 'lc' | 'rc' | 'finish'>('check');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            if (window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                if (phase === 'check') setPhase('intro');
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, [phase]);

    const startTest = () => {
        const doc = document.documentElement;
        if (doc.requestFullscreen) {
            doc.requestFullscreen().catch((err) => console.log(err));
        }
        setPhase('lc');
    };

    const handleLCFinish = () => {
        alert("Listening Test Completed. Proceeding to Reading Test.");
        setPhase('rc');
    };

    const handleRCFinish = () => {
        alert("Mock Test Completed!");
        setPhase('finish');
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => console.log(err));
        }
    };

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">PC Version Only</h1>
                <p>This mock test is designed for desktop screens (width 1024px+).</p>
                <p className="text-gray-400 mt-2">Please access this page on a PC or laptop.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {phase === 'intro' && (
                <div className="fixed inset-0 bg-[#111] text-white flex flex-col items-center justify-center z-50">
                    <h1 className="text-5xl font-bold mb-4 font-serif">TOEIC ACTUAL TEST (Full)</h1>
                    <p className="text-gray-400 text-xl mb-8">Part 1 - Part 7 (120 Minutes)</p>

                    <div className="bg-gray-800 p-6 rounded-lg max-w-md text-left mb-8 border border-gray-700">
                        <h3 className="text-lg font-bold mb-2 text-yellow-500">Instructions</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                            <li>This test simulates the actual TOEIC exam environment.</li>
                            <li>Please close other tabs and applications.</li>
                            <li>The test will run in <strong>Full Screen Mode</strong>.</li>
                            <li>Do not refresh the page during the test.</li>
                        </ul>
                    </div>

                    <button
                        onClick={startTest}
                        className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-lg transition-colors shadow-lg hover:shadow-blue-500/50"
                    >
                        START MOCK TEST
                    </button>

                    <p className="mt-6 text-gray-500 text-sm">Listening (45m) + Reading (75m)</p>
                </div>
            )}

            {phase === 'lc' && (
                <LC_Full_Template onFinish={handleLCFinish} />
            )}

            {phase === 'rc' && (
                <RC_Full_Template onFinish={handleRCFinish} />
            )}

            {phase === 'finish' && (
                <div className="fixed inset-0 bg-[#111] text-white flex flex-col items-center justify-center z-50">
                    <h1 className="text-4xl font-bold mb-4 text-green-500">Test Submitted Successfully</h1>
                    <p className="text-xl mb-8">Your answers have been recorded.</p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded"
                    >
                        Return to Dashboard
                    </button>
                </div>
            )}
        </div>
    );
}
