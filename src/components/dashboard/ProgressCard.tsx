'use client';

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgressCardProps {
    title: string;
    value: string | number;
    subValue?: string;
    total?: number;
    current?: number;
    color: 'indigo' | 'rose' | 'blue' | 'emerald';
    icon?: LucideIcon;
    className?: string;
}

export function ProgressCard({ title, value, subValue, total, current, color, icon: Icon, className }: ProgressCardProps) {
    const colorStyles = {
        indigo: {
            bg: 'bg-indigo-600',
            text: 'text-indigo-100',
            value: 'text-indigo-400',
            bar: 'bg-indigo-500',
            shadow: 'shadow-indigo-100'
        },
        rose: {
            bg: 'bg-rose-500',
            text: 'text-rose-100',
            value: 'text-rose-400',
            bar: 'bg-rose-500', // Using same for bar as bg usually clashes, but matching original design
            shadow: 'shadow-rose-100'
        },
        blue: {
            bg: 'bg-blue-500',
            text: 'text-blue-100',
            value: 'text-blue-400',
            bar: 'bg-blue-500',
            shadow: 'shadow-blue-100'
        },
        emerald: {
            bg: 'bg-emerald-500',
            text: 'text-emerald-100',
            value: 'text-emerald-400',
            bar: 'bg-emerald-400',
            shadow: 'shadow-emerald-100'
        }
    };

    const style = colorStyles[color];
    const percentage = total && current !== undefined ? Math.min((current / total) * 100, 100) : 0;

    return (
        <div className={cn(`rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden transition-all`, style.bg, style.shadow, className)}>
            {Icon && (
                <Icon className={cn("absolute -right-4 -top-4 w-24 h-24 opacity-30 rotate-12", style.text)} />
            )}

            <h3 className={cn("text-[10px] font-black uppercase tracking-widest mb-4", style.text)}>
                {title}
            </h3>

            <div className="flex items-end justify-between mb-3 relative z-10">
                <span className="text-4xl font-black italic tracking-tighter">{value}</span>
                {subValue && (
                    <span className={cn("text-xs font-bold opacity-80", style.text)}>{subValue}</span>
                )}
            </div>

            {(total && current !== undefined) && (
                <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden relative z-10">
                    <div
                        className="bg-white h-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            )}
        </div>
    );
}
