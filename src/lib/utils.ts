import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function normalizeOptions(options: any): { label: string; text: string }[] {
  if (!options) return [];
  if (Array.isArray(options)) {
    if (options.length === 0) return [];
    // Format: [{label: "A", text: "..."}]
    if (typeof options[0] === 'object' && options[0].label) return options;
    // Format: ["...", "...", "..."]
    return options.map((text, i) => ({
      label: String.fromCharCode(65 + i),
      text: String(text)
    }));
  }
  // Format: {"A": "...", "B": "..."}
  return Object.entries(options).map(([label, text]) => ({
    label,
    text: String(text)
  }));
}
