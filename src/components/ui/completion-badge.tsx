import { CheckCircle2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CompletionBadgeProps {
    completed: boolean;
    score?: number;
    total?: number;
    simple?: boolean; // true for voca/shadowing (checkmark only)
    className?: string;
}

export function CompletionBadge({
    completed,
    score = 0,
    total = 0,
    simple = false,
    className
}: CompletionBadgeProps) {
    if (!completed) return null;

    // Simple mode: just a checkmark
    if (simple) {
        return (
            <CheckCircle2 className={cn("w-5 h-5 text-emerald-500", className)} />
        );
    }

    // Detailed mode: checkmark/star + score
    const isPerfect = score === total && total > 0;

    return (
        <div className={cn("flex items-center gap-1", className)}>
            {isPerfect ? (
                <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400 fill-amber-400" />
            ) : (
                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />
            )}
            <span className={cn(
                "text-xs md:text-sm font-black",
                isPerfect ? "text-amber-400" : "text-emerald-500"
            )}>
                {score}/{total}
            </span>
        </div>
    );
}
