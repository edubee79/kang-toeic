
"use client";

import React, { useState, useRef } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { part3Data } from '@/data/part3';

export default function Part3DetailPage() {
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const params = useParams();
    const router = useRouter();
    const setId = params.setId as string;

    const set = part3Data.find(s => s.setId === setId);

    if (!isMounted) return null;

    if (!set) {
        notFound();
    }

    const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

    const handleSelect = (questionId: string, optionLabel: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionId]: optionLabel
        }));
    };

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Sticky Header with Audio */}
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
                    <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-900">
                        ← Back
                    </button>
                    <div className="flex-1 mx-8">
                        <p className="text-xs text-center text-gray-500 mb-1 font-medium">AUDIO TRACK</p>
                        <audio
                            controls
                            className="w-full h-8"
                            src={set.audio}
                        >
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    <div className="w-10"></div> {/* Spacer */}
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 py-8 space-y-12">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">Questions {set.questionRange}</h1>
                    <p className="text-gray-500 text-sm">Listen to the conversation and choose the best answer.</p>
                </div>

                {/* Questions List */}
                <div className="space-y-10">
                    {set.questions.map((q, index) => (
                        <div key={q.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                                    {q.id.replace('q', '')}
                                </div>
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-lg font-medium text-gray-900 leading-snug">
                                        {q.text}
                                    </h3>

                                    <div className="grid grid-cols-1 gap-3">
                                        {q.options.map((opt) => {
                                            const isSelected = selectedAnswers[q.id] === opt.label;
                                            return (
                                                <button
                                                    key={opt.label}
                                                    onClick={() => handleSelect(q.id, opt.label)}
                                                    className={`text-left px-4 py-3 rounded-xl transition-all duration-200 border-2 ${isSelected
                                                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                        : 'border-transparent bg-gray-50 hover:bg-gray-100 text-gray-700'
                                                        }`}
                                                >
                                                    <span className="font-bold mr-2">{opt.label}.</span>
                                                    {opt.text}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm flex items-start gap-3">
                    <span className="text-lg">💡</span>
                    <p>
                        Currently in <strong>Practice Mode</strong>.
                        Since we extracted these questions from a PDF without the answer key,
                        automatic grading is not available yet.
                        Focus on listening and understanding!
                    </p>
                </div>
            </div>
        </div>
    );
}
