(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "normalizeOptions",
    ()=>normalizeOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function normalizeOptions(options) {
    if (!options) return [];
    if (Array.isArray(options)) {
        if (options.length === 0) return [];
        // Format: [{label: "A", text: "..."}]
        if (typeof options[0] === 'object' && options[0].label) return options;
        // Format: ["...", "...", "..."]
        return options.map((text, i)=>({
                label: String.fromCharCode(65 + i),
                text: String(text)
            }));
    }
    // Format: {"A": "...", "B": "..."}
    return Object.entries(options).map(([label, text])=>({
            label,
            text: String(text)
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-1.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "messaging",
    ()=>messaging
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyDj4B-bqGuXiJMEnlnokOUynESTK0eWY98"),
    authDomain: ("TURBOPACK compile-time value", "kangs-toeic.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "kangs-toeic"),
    storageBucket: ("TURBOPACK compile-time value", "kangs-toeic.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "259666973446"),
    appId: ("TURBOPACK compile-time value", "1:259666973446:web:dead990eae3a8bd75cc487")
};
// Log warning if config is missing (only in dev)
if ("TURBOPACK compile-time truthy", 1) {
    if (!firebaseConfig.apiKey) {
        console.warn("Firebase API Key is missing. Check your .env.local file.");
    }
}
// Initialize Firebase (Singleton pattern)
let app;
try {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])() : (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
} catch (e) {
    console.error("Firebase App initialization failed", e);
    // Fallback to getApp() if initializeApp failed due to already existing app or other issues
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
}
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
// Messaging: Use isSupported check and more robust initialization
let messaging = null;
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.A("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/messaging/dist/esm/index.esm.js [app-client] (ecmascript, async loader)").then(async ({ getMessaging, isSupported })=>{
        try {
            const supported = await isSupported();
            if (supported) {
                messaging = getMessaging(app);
            } else {
                console.log("Firebase Messaging not supported in this browser.");
            }
        } catch (e) {
            console.warn("Firebase Messaging failed to initialize", e);
        }
    }).catch((err)=>{
        console.warn("Failed to load firebase/messaging", err);
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/configService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateReportPeriod",
    ()=>calculateReportPeriod,
    "getAIReportSchedule",
    ()=>getAIReportSchedule,
    "getFeatureAccess",
    ()=>getFeatureAccess,
    "setAIReportSchedule",
    ()=>setAIReportSchedule,
    "setFeatureAccess",
    ()=>setFeatureAccess,
    "updateLastReportDate",
    ()=>updateLastReportDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const DEFAULT_ACCESS = {
    part1: true,
    part2: true,
    part3: true,
    part4: true,
    part5: true,
    part6: true,
    part7: true,
    part7_double: true,
    mockTest: true,
    voca: true,
    grammar: true,
    levelTest: true,
    maxSets: {
        part1: 10,
        part1_real: {
            "3": 10,
            "4": 10
        },
        part2: {
            "3": 10,
            "4": 10
        },
        part3: {
            "3": 10,
            "4": 10
        },
        part4: {
            "3": 10,
            "4": 10
        },
        part5: {
            "3": 10,
            "4": 10
        },
        part6: {
            "3": 10,
            "4": 10
        },
        part7: {
            "3": 10,
            "4": 10
        },
        part7_double: {
            "3": 10,
            "4": 10
        },
        mockTest: 10,
        voca: 20,
        grammar: 10,
        levelTest: 2
    }
};
const getFeatureAccess = async ()=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'System_Settings', 'feature_access');
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            // Deep merge maxSets to handle both number and object formats
            const mergedMaxSets = {
                ...DEFAULT_ACCESS.maxSets || {}
            };
            if (data.maxSets) {
                Object.keys(data.maxSets).forEach((key)=>{
                    const value = data.maxSets[key];
                    const defaultValue = DEFAULT_ACCESS.maxSets?.[key];
                    if (typeof defaultValue === 'object' && defaultValue !== null) {
                        // If default is an object, ensure result is an object
                        mergedMaxSets[key] = {
                            ...defaultValue,
                            ...typeof value === 'object' ? value : {}
                        };
                    } else {
                        // Otherwise (default is number or undefined), use value from DB
                        mergedMaxSets[key] = value;
                    }
                });
            }
            return {
                ...DEFAULT_ACCESS,
                ...data,
                maxSets: mergedMaxSets
            };
        }
        return DEFAULT_ACCESS;
    } catch (error) {
        console.error("Error fetching feature access:", error);
        return DEFAULT_ACCESS;
    }
};
const setFeatureAccess = async (access)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'System_Settings', 'feature_access');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, access);
    } catch (error) {
        console.error("Error saving feature access:", error);
        throw error;
    }
};
const DEFAULT_SCHEDULE = {
    enabledDays: [
        5
    ],
    isAutoBatchEnabled: false
};
const getAIReportSchedule = async ()=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'System_Config', 'aiReportSchedule');
        const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(docRef);
        if (docSnap.exists()) {
            return {
                ...DEFAULT_SCHEDULE,
                ...docSnap.data()
            };
        }
        return DEFAULT_SCHEDULE;
    } catch (error) {
        console.error("Error fetching AI report schedule:", error);
        return DEFAULT_SCHEDULE;
    }
};
const setAIReportSchedule = async (schedule)=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'System_Config', 'aiReportSchedule');
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
            ...schedule,
            updatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error saving AI report schedule:", error);
        throw error;
    }
};
const updateLastReportDate = async ()=>{
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'System_Config', 'aiReportSchedule');
        const current = await getAIReportSchedule();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(docRef, {
            ...current,
            lastReportDate: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error updating last report date:", error);
        throw error;
    }
};
const calculateReportPeriod = (lastReportDate)=>{
    if (!lastReportDate) return 7; // Default 7 days if no previous report
    const daysSince = Math.floor((Date.now() - new Date(lastReportDate).getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(1, daysSince); // Minimum 1 day
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar,
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/mic-vocal.js [app-client] (ecmascript) <export default as Mic2>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as PenSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/monitor.js [app-client] (ecmascript) <export default as Monitor>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$configService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/configService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const menuItems = [
    {
        id: 'home',
        href: "/student/home",
        label: "나의 학습방",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        id: 'selection',
        href: "/student/selection",
        label: "선택 학습",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        subItems: [
            {
                href: "/student/selection?tab=PROBLEM",
                label: "문제",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__["PenSquare"],
                nestedItems: [
                    {
                        href: "/homework/part5?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "문법 미션 (Grammar)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenSquare$3e$__["PenSquare"],
                        featureKey: 'grammar'
                    },
                    {
                        href: "/homework/part1-real?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 1 실전 테스트",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                        featureKey: 'part1_real'
                    },
                    {
                        href: "/homework/part2?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 2 실전 테스트",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
                        featureKey: 'part2'
                    },
                    {
                        href: "/homework/part3?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 3 짧은 대화",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__["Mic2"],
                        featureKey: 'part3'
                    },
                    {
                        href: "/homework/part4?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 4 설명문",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__["Mic2"],
                        featureKey: 'part4'
                    },
                    {
                        href: "/homework/part5-real?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 5 단문 넣기",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"],
                        featureKey: 'part5'
                    },
                    {
                        href: "/homework/part6?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 6 장문 빈칸",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
                        featureKey: 'part6'
                    },
                    {
                        href: "/homework/part7?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 7 단일 지문",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                        featureKey: 'part7'
                    },
                    {
                        href: "/homework/part7-double?from=%2Fstudent%2Fselection%3Ftab%3DPROBLEM",
                        label: "Part 7 이중 지문",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Monitor$3e$__["Monitor"],
                        featureKey: 'part7_double'
                    }
                ]
            },
            {
                href: "/student/selection?tab=VOCA",
                label: "어휘",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"],
                nestedItems: [
                    {
                        href: "/homework/voca?from=%2Fstudent%2Fselection%3Ftab%3DVOCA",
                        label: "보카 (단어장)",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"],
                        featureKey: 'voca'
                    },
                    {
                        href: "/homework/part1?from=%2Fstudent%2Fselection%3Ftab%3DVOCA",
                        label: "Part 1 쉐도잉",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$vocal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic2$3e$__["Mic2"],
                        featureKey: 'part1'
                    }
                ]
            },
            {
                href: "/student/selection?tab=LECTURE",
                label: "강의",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
            },
            {
                href: "/student/selection?tab=FULL",
                label: "모의고사",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                nestedItems: [
                    {
                        href: "/mock-test?from=%2Fstudent%2Fselection%3Ftab%3DFULL",
                        label: "TOEIC 모의고사",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                        featureKey: 'mockTest'
                    },
                    {
                        href: "/level-test?from=%2Fstudent%2Fselection%3Ftab%3DFULL",
                        label: "TOEIC 모의 하프테스트",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                        featureKey: 'levelTest'
                    }
                ]
            }
        ]
    },
    {
        id: 'analysis',
        href: "/student/analysis",
        label: "AI 분석",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
    },
    {
        id: 'review',
        href: "/student/history",
        label: "복습",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"]
    }
];
function NavContent({ pathname, setOpen }) {
    _s();
    const [access, setAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedMenu, setExpandedMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedSubMenu, setExpandedSubMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentTab = searchParams.get('tab');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavContent.useEffect": ()=>{
            const fetchAccess = {
                "NavContent.useEffect.fetchAccess": async ()=>{
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$configService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFeatureAccess"])();
                    setAccess(data);
                }
            }["NavContent.useEffect.fetchAccess"];
            fetchAccess();
            // 1단계 확장 (선택 학습)
            if (pathname.includes('/homework/') || pathname === '/mock-test' || pathname === '/level-test' || pathname === '/student/selection') {
                setExpandedMenu('selection');
                // 2단계 확장 (문제 / 어휘 / 모의고사 등)
                if (pathname.includes('part') || pathname.includes('grammar')) {
                    setExpandedSubMenu('문제');
                } else if (pathname.includes('voca')) {
                    setExpandedSubMenu('어휘');
                } else if (pathname === '/mock-test' || pathname === '/level-test' || currentTab === 'FULL') {
                    setExpandedSubMenu('모의고사');
                } else if (currentTab === 'PROBLEM') {
                    setExpandedSubMenu('문제');
                } else if (currentTab === 'VOCA') {
                    setExpandedSubMenu('어휘');
                }
            }
        }
    }["NavContent.useEffect"], [
        pathname,
        currentTab
    ]);
    const isUrlActive = (href)=>{
        const [basePath, query] = href.split('?');
        // 세부 파트 진입 시 (예: /homework/part1-real) 해당 베이스 카테고리(정규표현식 등 활용 가능하나 간단히 체크)
        if (pathname === basePath && !query) return true;
        if (pathname === basePath && query) {
            const urlParams = new URLSearchParams(query);
            return urlParams.get('tab') === currentTab;
        }
        return false;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-[#0B0F1A] text-white p-6 border-r border-indigo-500/10 shadow-[4px_0_24px_rgba(0,0,0,0.5)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex items-center gap-3 px-2 cursor-default",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-200",
                        children: "KANGS TOEIC"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 137,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 space-y-2 overflow-y-auto max-md:no-scrollbar pr-1",
                children: menuItems.map((item)=>{
                    const isExpanded = expandedMenu === item.id;
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const isActive = isUrlActive(item.href) || hasSubItems && item.subItems.some((sub)=>isUrlActive(sub.href));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    if (hasSubItems) {
                                        setExpandedMenu(isExpanded ? null : item.id);
                                    }
                                },
                                className: "relative flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    onClick: (e)=>{
                                        if (hasSubItems) {
                                            e.preventDefault();
                                        }
                                        if (setOpen && !hasSubItems) setOpen(false);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold group", isActive ? "bg-indigo-600/20 text-indigo-400 border border-indigo-600/30 shadow-[0_0_15px_rgba(79,70,229,0.1)]" : "text-slate-400 hover:bg-white/[0.03] hover:text-indigo-400"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 transition-colors", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-400")
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                            lineNumber: 176,
                                            columnNumber: 37
                                        }, this),
                                        hasSubItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-auto",
                                            children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "w-4 h-4 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                lineNumber: 179,
                                                columnNumber: 59
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-4 h-4 opacity-50"
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                lineNumber: 179,
                                                columnNumber: 108
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                            lineNumber: 178,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                    lineNumber: 158,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 150,
                                columnNumber: 29
                            }, this),
                            hasSubItems && isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-4 pl-4 border-l border-slate-800/50 space-y-1 mt-1 animate-in fade-in slide-in-from-left-2 duration-300",
                                children: item.subItems.map((sub, subIdx)=>{
                                    const isLocked = sub.featureKey && access && !access[sub.featureKey];
                                    const hasNestedItems = sub.nestedItems && sub.nestedItems.length > 0;
                                    const isSubActive = isUrlActive(sub.href) || hasNestedItems && sub.nestedItems.some((nested)=>pathname === nested.href);
                                    const isSubExpanded = expandedSubMenu === sub.label;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: sub.href,
                                                onClick: (e)=>{
                                                    if (isLocked) {
                                                        e.preventDefault();
                                                        alert("이 기능은 현재 비활성화되었습니다.");
                                                        return;
                                                    }
                                                    if (hasNestedItems) {
                                                        setExpandedSubMenu(isSubExpanded ? null : sub.label);
                                                    }
                                                    // 모바일에서는 링크 클릭 시 무조건 사이드바를 닫음 (이동 확인을 위함)
                                                    if (setOpen) setOpen(false);
                                                },
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-[13px] font-bold group", isSubActive ? "text-indigo-400 bg-indigo-500/5" : isLocked ? "text-slate-600 grayscale opacity-50" : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(sub.icon, {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isSubActive ? "text-indigo-400" : "text-slate-600")
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isLocked && "line-through"),
                                                        children: sub.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 53
                                                    }, this),
                                                    hasNestedItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "ml-auto opacity-40",
                                                        children: isSubExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 78
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 116
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 57
                                                    }, this),
                                                    isLocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        className: "ml-auto w-3 h-3 text-rose-500/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 66
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                lineNumber: 195,
                                                columnNumber: 49
                                            }, this),
                                            hasNestedItems && isSubExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-4 pl-4 border-l border-white/5 space-y-1 mt-1 animate-in fade-in slide-in-from-left-2 duration-200",
                                                children: sub.nestedItems.map((nested, nIdx)=>{
                                                    const isNestedLocked = nested.featureKey && access && !access[nested.featureKey];
                                                    const isNestedActive = pathname === nested.href;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: nested.href,
                                                        onClick: (e)=>{
                                                            if (isNestedLocked) {
                                                                e.preventDefault();
                                                                alert("이 기능은 현재 비활성화되었습니다.");
                                                                return;
                                                            }
                                                            if (setOpen) setOpen(false);
                                                        },
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-1.5 rounded-md transition-all text-[11px] font-bold", isNestedActive ? "text-indigo-400 bg-indigo-500/10" : isNestedLocked ? "text-slate-700 grayscale opacity-40" : "text-slate-500 hover:text-indigo-300 hover:bg-white/[0.01]"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(nested.icon, {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-3 h-3", isNestedActive ? "text-indigo-400" : "text-slate-600")
                                                            }, void 0, false, {
                                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 69
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: isNestedLocked ? "line-through" : "",
                                                                children: nested.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 69
                                                            }, this)
                                                        ]
                                                    }, nIdx, true, {
                                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 65
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                                lineNumber: 230,
                                                columnNumber: 53
                                            }, this)
                                        ]
                                    }, subIdx, true, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                        lineNumber: 194,
                                        columnNumber: 45
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 186,
                                columnNumber: 33
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 149,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto h-4"
            }, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
        lineNumber: 132,
        columnNumber: 9
    }, this);
}
_s(NavContent, "842pWTOu0gUeC2y4WOTJSbGq8Jg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = NavContent;
function Sidebar({ open, setOpen }) {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:block w-72 h-screen bg-[#0B0F1A]"
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
            lineNumber: 282,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarInner, {
            open: open,
            setOpen: setOpen,
            pathname: pathname
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
            lineNumber: 283,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
        lineNumber: 282,
        columnNumber: 9
    }, this);
}
_s1(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Sidebar;
function SidebarInner({ open, setOpen, pathname }) {
    // Mobile Sheet View
    if (setOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
            open: open,
            onOpenChange: setOpen,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                side: "left",
                className: "p-0 border-r-slate-800 w-80 bg-slate-900 border-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                        className: "sr-only",
                        children: "Kangs Toeic Menu"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 294,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                        className: "sr-only",
                        children: "Navigation for students"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 295,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavContent, {
                        pathname: pathname,
                        setOpen: setOpen
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 296,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 293,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
            lineNumber: 292,
            columnNumber: 13
        }, this);
    }
    // Desktop Side View
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden md:block w-72 h-screen fixed left-0 top-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavContent, {
            pathname: pathname
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
            lineNumber: 305,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
        lineNumber: 304,
        columnNumber: 9
    }, this);
}
_c2 = SidebarInner;
function Navbar({ onMenuClick, onLogout }) {
    _s2();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const userData = localStorage.getItem('toeic_user');
            if (userData) {
                try {
                    const parsed = JSON.parse(userData);
                    setUserName(parsed.userName || parsed.name || parsed.username || '');
                } catch (e) {
                    console.error("Failed to parse user data", e);
                }
            }
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "p-4 md:p-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-black text-xl italic tracking-tighter text-indigo-400 cursor-default",
                        children: "깡쌤토익"
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 328,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-2 ml-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/admin/dashboard",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                className: "text-slate-500 hover:text-indigo-400 font-bold gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                        lineNumber: 334,
                                        columnNumber: 29
                                    }, this),
                                    "ADMIN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 333,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                            lineNumber: 332,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 327,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 md:gap-6",
                children: [
                    userName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 px-3 py-1.5 bg-indigo-500/5 rounded-full border border-indigo-500/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 rounded-full bg-indigo-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 343,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs md:text-sm font-black text-slate-200",
                                children: [
                                    userName,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-500 font-bold ml-0.5",
                                        children: "님"
                                    }, void 0, false, {
                                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                        lineNumber: 345,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 344,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 342,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/student/profile",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "h-9 w-9 text-slate-400 hover:text-white bg-white/5 rounded-full border border-white/5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                                lineNumber: 351,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                            lineNumber: 350,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                        lineNumber: 349,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
                lineNumber: 340,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx",
        lineNumber: 326,
        columnNumber: 9
    }, this);
}
_s2(Navbar, "00XnugoDycAozYiHGqQm3J8d29M=");
_c3 = Navbar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NavContent");
__turbopack_context__.k.register(_c1, "Sidebar");
__turbopack_context__.k.register(_c2, "SidebarInner");
__turbopack_context__.k.register(_c3, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navItems = [
    {
        label: '나의 학습방',
        href: '/student/home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        label: '선택 학습',
        href: '/student/selection',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
    },
    {
        label: 'AI 분석',
        href: '/student/analysis',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"]
    },
    {
        label: '복습',
        href: '/student/history',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"]
    }
];
function MainBottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-xl border-t border-white/5 pb-safe-area-inset-bottom shadow-[0_-10px_30px_rgba(0,0,0,0.5)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-around items-center h-16 max-w-lg mx-auto px-4",
            children: navItems.map((item)=>{
                let isActive = pathname === item.href;
                // Logic to keep "Selection Learning" active for its sub-lobby pages
                if (item.href === '/student/selection') {
                    if (pathname.startsWith('/homework/') || pathname === '/mock-test' || pathname === '/level-test') {
                        isActive = true;
                    }
                }
                const Icon = item.icon;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center gap-1 w-full h-full transition-all duration-300", isActive ? "text-white" : "text-slate-500 hover:text-slate-300"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded-xl transition-all duration-300", isActive && "bg-white/10"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-6 h-6", isActive && "scale-110")
                            }, void 0, false, {
                                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
                                lineNumber: 63,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-black tracking-tighter uppercase italic", isActive ? "opacity-100" : "opacity-60"),
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
                            lineNumber: 68,
                            columnNumber: 29
                        }, this)
                    ]
                }, item.href, true, {
                    fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
                    lineNumber: 51,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(MainBottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = MainBottomNav;
var _c;
__turbopack_context__.k.register(_c, "MainBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LayoutWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$MainBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/MainBottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function LayoutWrapper({ children }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutWrapper.useEffect": ()=>{
            setIsMounted(true);
        }
    }["LayoutWrapper.useEffect"], []);
    // Prevent hydration mismatch by waiting for mount
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-slate-900"
        }, void 0, false, {
            fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
            lineNumber: 24,
            columnNumber: 16
        }, this);
    }
    // Pages that should NOT have sidebar
    const noSidebarPages = [
        '/login',
        '/signup',
        '/admin'
    ];
    const mainTabPages = [
        '/student/home',
        '/student/selection',
        '/student/analysis',
        '/student/history'
    ];
    const isMainTabPage = mainTabPages.includes(pathname);
    const isAuthPage = noSidebarPages.some((page)=>pathname.startsWith(page));
    // Sidebar should be hidden on Auth pages.
    // On Main Tabs, it should be visible on Desktop but hidden on Mobile (handled by CSS in Sidebar).
    // However, for the Wrapper's padding, we need to know if we are on Desktop.
    const shouldShowSidebar = !isAuthPage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-slate-950 text-white",
        children: [
            shouldShowSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                lineNumber: 42,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 flex flex-col transition-all min-w-0 font-sans", shouldShowSidebar ? "md:pl-72" : "pl-0"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                        onMenuClick: ()=>setSidebarOpen(true),
                        onLogout: async ()=>{
                            try {
                                await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
                                router.push("/login");
                            } catch (error) {
                                console.error("Logout failed", error);
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    shouldShowSidebar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                        open: sidebarOpen,
                        setOpen: setSidebarOpen
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                        lineNumber: 62,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 w-full", pathname === '/' || pathname === '/student/home' || isMainTabPage || pathname === '/mock-test' || pathname === '/level-test' || pathname.startsWith('/homework/') && pathname.split('/').filter(Boolean).length === 2 || pathname === '/homework/part7/practice' || pathname.startsWith('/mock-test/full/') || pathname.startsWith('/admin') ? "max-w-none p-0" : "w-full md:p-10 p-6", isMainTabPage && "overflow-x-hidden", pathname.startsWith('/homework/') && pathname.split('/').filter(Boolean).length >= 3 && pathname !== '/homework/part7/practice' ? "p-0" : ""),
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    (isMainTabPage || pathname === '/mock-test' || pathname === '/level-test' || pathname.startsWith('/homework/') && pathname.split('/').filter(Boolean).length === 2 && !pathname.includes('voca')) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$components$2f$layout$2f$MainBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                        lineNumber: 92,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/components/layout/LayoutWrapper.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(LayoutWrapper, "2rS1yFukNDEbt06pPhrhf+82Me0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LayoutWrapper;
var _c;
__turbopack_context__.k.register(_c, "LayoutWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/types/toeic-standards.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 📊 TOEIC Data Standardization Types
 * This file defines the strictly enforced IDs for all TOEIC question tags and classifications.
 * Total 160 standardized items.
 */ // --- LC: Listening Comprehension (60 Items) ---
/** Part 2: Question Type (12) */ __turbopack_context__.s([
    "TOEIC_TAG_REGISTRY",
    ()=>TOEIC_TAG_REGISTRY
]);
const TOEIC_TAG_REGISTRY = {
    // Part 2
    'Who': {
        label: '인물/직책 파악',
        description: '화자 및 대상의 이름/직위/부서 인지력'
    },
    'When': {
        label: '시점/기간 파악',
        description: '시간표, 날짜, 기간에 대한 청취 정확도'
    },
    'Where': {
        label: '장소/위치 파악',
        description: '행선지 및 위치 전치사구 파악 능력'
    },
    'Why': {
        label: '이유/목적 파악',
        description: '원인 및 의도에 대한 논리적 이해도'
    },
    'How': {
        label: '방법/수단 파악',
        description: '프로세스, 상태, 가격, 빈도 표현 숙지'
    },
    'What': {
        label: '구체정보 파악',
        description: '사물, 사건, 특정 주제에 대한 세부 인지'
    },
    'YesNo': {
        label: '일반 의문문 대응',
        description: '긍정/부정 질문에 대한 응답 적합성'
    },
    'Choice': {
        label: '선택 의문문 대응',
        description: '두 옵션 사이의 결정/회피 표현 판단'
    },
    'Statement': {
        label: '평서문 문맥 이해',
        description: '의견/사실 전달에 대한 적절한 맞장구'
    },
    'Tag': {
        label: '부가 의문문 확인',
        description: '사실 확인 및 동의 요청 청취력'
    },
    'Negative': {
        label: '부정 의문문 대응',
        description: '부정 질문에 대한 정확한 해석 및 응답력'
    },
    'Indirect': {
        label: '우회적 답변 대응',
        description: '제3의 간접 응답에 대한 유연한 대응 능력'
    },
    // Part 3 Context
    'A1': {
        label: '회의/일정',
        description: '사내 업무 일정 및 회의 관련 대화'
    },
    'A2': {
        label: '프로젝트',
        description: '업무 기획 및 프로젝트 진행 상황'
    },
    'A3': {
        label: '인사/근무',
        description: '채용, 승진, 퇴사 등 인사 관련 상담'
    },
    'A4': {
        label: '재무/비용',
        description: '예산 집행, 영수증 처리, 비용 정산'
    },
    'A5': {
        label: '교육/훈련',
        description: '신입사원 교육 및 직무 능력 개발'
    },
    'B1': {
        label: '고객불만',
        description: '고객의 불편 사항 접수 및 해결 과정'
    },
    'B2': {
        label: '주문/배송',
        description: '제품 주문 절차 및 배송 상태 확인'
    },
    'B3': {
        label: '환불/교환',
        description: '구매 취소 및 교환/환불 정책 안내'
    },
    'B4': {
        label: '일반문의',
        description: '영업 시간, 위치 등 일반적인 고객 편의 문의'
    },
    'C1': {
        label: '항공/교통',
        description: '비행기, 기차 등 예약 및 운행 정보'
    },
    'C2': {
        label: '호텔/숙박',
        description: '숙박 시설 예약 및 서비스 이용'
    },
    'C3': {
        label: '일정변경',
        description: '여행 스케줄 변경 및 예약 취소 대응'
    },
    'D1': {
        label: '기기고장',
        description: '사무용 기기 및 시설물 고장 신고'
    },
    'D2': {
        label: 'IT오류',
        description: '소프트웨어, 시스템 장애 및 복구 요청'
    },
    'D3': {
        label: '유지보수',
        description: '정기 점검 및 시설 유지 관리 업무'
    },
    // Part 4 Context
    'A1_announcement': {
        label: '일반공지',
        description: '시설 이용 및 일반 규칙 안내'
    },
    'A2_ann': {
        label: '일정변경',
        description: '행사나 프로그램의 시간/장소 변경 공지'
    },
    'A3_ann': {
        label: '시설이용',
        description: '공공장소나 회사의 시설 사용 지침'
    },
    'A4_ann': {
        label: '규정변경',
        description: '사내 규정 및 관련 법규 변경 안내'
    },
    'A5_ann': {
        label: '긴급안전',
        description: '화재, 점검 등 안전 관련 긴급 공지'
    },
    'B1_company': {
        label: '현황보고',
        description: '회사 실적 및 업무 진행률 보고'
    },
    'B2_company': {
        label: '관리자',
        description: '상급자의 지시 및 업무 브리핑'
    },
    'B3_company': {
        label: '사내교육',
        description: '사내 워크샵 및 직원 교육 프로그램'
    },
    'B4_company': {
        label: '절차설명',
        description: '새로운 업무 시스템이나 절차 안내'
    },
    'C1_service': {
        label: '사용법',
        description: '제품 및 서비스의 상세 사용 설명'
    },
    'C2_customer': {
        label: '행동지시',
        description: '고객이 취해야 할 다음 행동 안내'
    },
    'C3_membership': {
        label: '혜택설명',
        description: '회원 등급 및 포인트 혜택 상세 안내'
    },
    'C4_technical': {
        label: '기술지원',
        description: '기술적 문제 해결을 위한 단계별 가이드'
    },
    'D1_ads': {
        label: '제품광고',
        description: '신제품 출시 및 기능 홍보'
    },
    'D2_ads': {
        label: '행사홍보',
        description: '지역 축제, 세일 행사 등 이벤트 홍보'
    },
    'D3_ads': {
        label: '할인행사',
        description: '한정 기간 할인 및 특가 정보 안내'
    },
    'D4_ads': {
        label: '서비스홍보',
        description: '전문 서비스 및 브랜드 가치 홍보'
    },
    'E1_trans': {
        label: '교통시간',
        description: '버스, 열차, 선박 등의 정규 운행 시간'
    },
    'E2_trans': {
        label: '지연변경',
        description: '교통 수단의 지연, 취소 및 노선 변경'
    },
    'E3_travel': {
        label: '여행정보',
        description: '관광 명소 추천 및 현지 여행 팁'
    },
    'E4_facility': {
        label: '공공시설',
        description: '박물관, 공원 등 공공장소 이용 정보'
    },
    'F1_event': {
        label: '전시공연',
        description: '미술관 전시 및 음악 공연 일정 안내'
    },
    'F2_community': {
        label: '지역공지',
        description: '반상회, 지역 축제 등 지역 사회 소식'
    },
    'F3_public': {
        label: '공공서비스',
        description: '수도, 전기, 공공기관 이용 관련 공지'
    },
    'G1_message': {
        label: '음성메시지',
        description: '개인이 남긴 부재중 전화 및 업무용 음성 메시지'
    },
    'G2_ars': {
        label: '자동응답',
        description: '고객센터, 병원 등의 ARS 자동 응답 및 녹음 안내'
    },
    // P3/4 QuestType
    'DETAIL': {
        label: '구체 정보 검색',
        description: '지문 내 명시된 팩트의 즉각적 포착'
    },
    'WHO_LOC': {
        label: '화자/장소 추론',
        description: '키워드를 통한 관련 인물 및 장소 파악'
    },
    'WHAT_WHICH': {
        label: '주제/목적 파악',
        description: '담화 전체의 흐름 및 핵심 주제 인지'
    },
    'WHEN_TIME': {
        label: '시점/기간 인지',
        description: '숫자 및 시간 관련 표현의 정확한 청취'
    },
    'WHY_REASON': {
        label: '이유/근거 분석',
        description: '특정 상황이 발생한 원인 파악'
    },
    'HOW_METHOD': {
        label: '방법/수단 이해',
        description: '행동의 방식이나 도구에 대한 인지'
    },
    'ACTION_NEXT': {
        label: '향후 행동 예측',
        description: '화자가 직후에 할 일에 대한 추론'
    },
    'IMPLY_MEANING': {
        label: '발화자 의도 추론',
        description: '문맥 속 숨은 의미(따옴표) 파악'
    },
    'GRAPHIC': {
        label: '시각 정보 매칭',
        description: '소리와 도표 정보의 동시 처리 능력'
    },
    'ASK_QUESTION': {
        label: '단순 정보 문의',
        description: '특정 정보에 대해 궁금해하거나 물어보는 사항 인지'
    },
    'OFFER_SUGGEST': {
        label: '요청 및 제안 파악',
        description: '상대방에게 요청/부탁하거나 본인이 제안/제공하는 행동 인지'
    },
    'PROBLEM_CONCERN': {
        label: '문제 및 우려 파악',
        description: '현재 겪고 있는 고충이나 걱정거리 파악'
    },
    // Part 5 - 1. Nouns etc
    'n1': {
        label: '명사 자리와 형태',
        description: '문장 내 주어/목적어 자리 명사 판단'
    },
    'n2': {
        label: '가산성과 수 일치',
        description: '가산/불가산 구분 및 동사 수 일치'
    },
    'n3': {
        label: '복합 명사 구조',
        description: '두 명사가 결합하여 하나의 명사가 되는 관용구'
    },
    'n4': {
        label: '사람 vs 사물 명사',
        description: '문맥에 따른 의미적 명사 구분'
    },
    'n5': {
        label: '특수 형태 명사',
        description: '동사와 형태가 같은 명사 등 주의가 필요한 유형'
    },
    'p1': {
        label: '인칭대명사 격',
        description: '주격, 소유격, 목적격 등 문장 내 역할 판단'
    },
    'p2': {
        label: '부정대명사 수 일치',
        description: 'Each, Some, None 등의 수 일치 규칙'
    },
    'p3': {
        label: '지시대명사 대상',
        description: 'That/Those 등이 지칭하는 대상 파악'
    },
    'p4': {
        label: '재귀대명사 용법',
        description: 'Self 형 대명사의 강조 및 재귀 용법'
    },
    'p5': {
        label: '단독 사용(own)',
        description: 'On one\'s own 등 소유 표현의 확장'
    },
    'p6': {
        label: '소유격 강조',
        description: '명사 앞 소유격을 강조하는 표현 판단'
    },
    'a1': {
        label: '명사 수식 형용사',
        description: '명사를 앞에서 한정하거나 수식하는 형용사'
    },
    'a2': {
        label: '2/5형식 보어 형용사',
        description: '동사 뒤에서 주어나 목적어를 보충하는 형용사'
    },
    'a3': {
        label: '분사형 형용사',
        description: 'Interested, Interesting 등 분사 형태의 형용사'
    },
    'a4': {
        label: '수량 형용사 일치',
        description: 'Many, Much 등 뒤에 오는 명사와 일치 여부'
    },
    'a5': {
        label: '형용사 숙어(eligible)',
        description: 'Be eligible for 등 특정 뒤따르는 전치사 매칭'
    },
    'a6': {
        label: '후치 수식 형용사',
        description: 'Available 등 명사 뒤에서 수식하는 특수 케이스'
    },
    'av1': {
        label: '부사 위치 판단',
        description: '문장 전체나 동사, 형용사 수식을 위한 위치'
    },
    'av2': {
        label: '형용사/부사 수식',
        description: '부사가 다른 부사나 형용사를 보강하는 구조'
    },
    'av3': {
        label: '빈도/접속부사 용법',
        description: 'Always, However 등 문맥 연결 및 빈도 표현'
    },
    // Part 5 - 2. Verbs
    'v1': {
        label: '주어-동사 수 일치',
        description: '주어의 단복수에 따른 동사 형태 일치'
    },
    'v2': {
        label: '동사 능동태/수동태',
        description: '주어의 의지에 따른 행위의 방향성 판단'
    },
    'v3': {
        label: '수동태 세부 형태',
        description: 'Be pp 뒤 전치사구나 수식어구 동반 패턴'
    },
    'v4': {
        label: '시점 부사-시제 일치',
        description: 'Since, Currently 등 단서 부사와 시제 일치'
    },
    'v5': {
        label: '당위/가정법 that절',
        description: 'Suggest/Insist that (should) do 구문'
    },
    'v6': {
        label: '조동사 뒤 원형',
        description: 'May, Can, Will 등 조동사 뒤 필수 원형'
    },
    'v7': {
        label: '자/타동사 구분',
        description: '목적어 유무에 따른 동사 성질 판단'
    },
    'v8': {
        label: '5형식 동사 패턴',
        description: 'Keep/Make/Find + O + OC 구조 이해'
    },
    'v9': {
        label: '명령문과 동사 원형',
        description: 'Please로 시작하는 명령문이나 문장 내 본동사 위치에 올바른 원형을 찾는 유형'
    },
    'i1': {
        label: 'To부정사 명사적 용법',
        description: '문장 내 주어, 목적어 자리에 위치한 To v'
    },
    'i2': {
        label: '형용사적 용법',
        description: '명사 뒤에서 수식하는 To v'
    },
    'i3': {
        label: '부사적(목적) 용법',
        description: '~하기 위해서(In order to)의 의미 분석'
    },
    'i4': {
        label: 'To v vs ing 구분',
        description: '특정 동사가 목적어로 취하는 형태 판단'
    },
    'i5': {
        label: '의문사 + To v',
        description: 'How to do, What to do 등 구 형태의 명사 용법'
    },
    'i6': {
        label: '의미상 주어(for)',
        description: 'To부정사의 행위 주체를 명시하는 구조'
    },
    'g1': {
        label: '명사적 동명사',
        description: '전치사의 목적어로 사용된 -ing 형태'
    },
    'g2': {
        label: '동명사 vs 명사',
        description: '목적어 유무로 동명사와 명사 자리 구분'
    },
    'g3': {
        label: '-ing 명사 vs 동명사',
        description: 'Planning, Shipping 등 명사화된 단어 구분'
    },
    'g4': {
        label: '동명사 vs To부정사',
        description: '맥락에 따른 적절한 준동사 선택'
    },
    'g5': {
        label: '관용 동명사',
        description: 'Look forward to -ing 등 관용적 표현'
    },
    'pa1': {
        label: '명사 앞 분사 수식',
        description: 'Updated report 등 형용사화된 분사'
    },
    'pa2': {
        label: '명사 뒤 분사 수식',
        description: 'The people (who are) working... 형태 분석'
    },
    'pa3': {
        label: '보어 자리 분사',
        description: '감정 동사(Excited/Exciling) 등의 보어 역할'
    },
    'pa4': {
        label: '분사구문 구조',
        description: 'While doing, Doing... 주절과 연결된 분사'
    },
    'pa5': {
        label: '관용 분사',
        description: 'Providing that 등 접속사화된 분사 패턴'
    },
    // Part 5 - 3. Clauses etc
    'nc1': {
        label: 'That/What 명사절',
        description: '완전/불완전 여부에 따른 명사절 접속사'
    },
    'nc2': {
        label: 'Whether/If 명사절',
        description: '~인지 아닌지 의미를 갖는 목적어절'
    },
    'nc3': {
        label: '의문사절 구조',
        description: '간접 의문문 어순 및 의미 파악'
    },
    'nc4': {
        label: '복합관계사(whoever)',
        description: '전체 문장 내 격과 역할을 고려한 선택'
    },
    'nc5': {
        label: '의문사+To v 절',
        description: '명사 역할을 하는 압축된 의문사절'
    },
    'ac1': {
        label: '관계대명사 격 선택',
        description: '선행사 종류와 관계절 내 빈 자리 판단'
    },
    'ac2': {
        label: 'That vs Which',
        description: '제한적 용법 및 계속적 용법 구분'
    },
    'ac3': {
        label: '부분 표시(all of whom)',
        description: '부분 명사 뒤 관계대명사 대칭 일치'
    },
    'ac4': {
        label: '전치사 + 관계사',
        description: '관계절 뒤 전치사가 관계사 앞으로 이동한 형태'
    },
    'ac5': {
        label: '관계사 생략 구조',
        description: '목적격 관계대명사의 생략 및 문장 구조 분석'
    },
    'ac6': {
        label: '관계부사 vs 대명사',
        description: '뒷 문장의 성분 완결성 여부로 판단'
    },
    'c1': {
        label: '등위/병렬 구조',
        description: 'And, But, Or를 통한 문법적 대칭'
    },
    'c2': {
        label: '상관접속사',
        description: 'Both A and B, Not only A but also B 규칙'
    },
    'c3': {
        label: '종속(부사절) 접속사',
        description: 'Because, although 등 의미 연결 판단'
    },
    'c4': {
        label: '접속사 vs 전치사',
        description: '절을 수반하는지 명사구를 수반하는지 구분'
    },
    'c5': {
        label: '축약 분사 구문',
        description: '접속사가 살아있는 분사구문의 형태 이해'
    },
    'pr1': {
        label: '단순 전치사 의미',
        description: '장소, 시간, 방향 등 기본 전치사 해석'
    },
    'pr2': {
        label: '전치사 vs 접속부사',
        description: '문맥은 같으나 문법적 성질이 다른 어휘 구분'
    },
    'pr3': {
        label: '전치사 + 동명사구',
        description: '특정 전치사 뒤의 동명사 관용 표현'
    },
    'pr4': {
        label: '자동사+전치사 숙어',
        description: 'Reply to, Comply with 등 고정된 짝꿍'
    },
    'pr5': {
        label: '복합 전치사(due to)',
        description: '두 개 이상의 단어가 결합한 전치사구'
    },
    'com1': {
        label: '원급/비교급 구조',
        description: 'As...as, more...than 등 기본 비교 형태'
    },
    'com2': {
        label: '비교급 수식 부사',
        description: 'Much, Far, Even 등 비교급 강조 위치'
    },
    'com3': {
        label: '최상급 강조 용법',
        description: 'By far the best 등 최상급 보강 표현'
    },
    'com4': {
        label: '관용 비교 표현',
        description: 'The more... the more 등 관용 구문'
    },
    's1': {
        label: '가정법 시제 짝꿍',
        description: 'If...did, would do / If...had pp, would have pp'
    },
    's2': {
        label: '가정법 If 생략 도치',
        description: 'Should you have, Had I known 등 특수 구문'
    },
    'inv1': {
        label: '조건절 도치',
        description: '가정법 및 조건절의 If 생략 시 도치'
    },
    'inv2': {
        label: '부정어 도치',
        description: 'Never, Rarely 등 부정어 문두 도치'
    },
    'inv3': {
        label: '보어/부사구 도치',
        description: '강조를 위한 장소 부사구 및 보어 역전'
    },
    'inv4': {
        label: 'Only 도치',
        description: 'Only after, Only then 등으로 시작하는 절'
    },
    'inv5': {
        label: 'So/Neither 도치',
        description: '맞장구 표현에서의 주어 동사 도치'
    },
    // Part 5 - 4. Vocab
    'voc1': {
        label: '순수 의미 어휘',
        description: '단어의 정확한 사전적 정의와 활용'
    },
    'voc2': {
        label: '연어(Collocation)',
        description: '자주 함께 쓰이는 단어들의 조합'
    },
    'voc3': {
        label: '상황별 뉘앙스 구분',
        description: '비슷한 의미 중 문맥에 더 적절한 어휘 선택'
    },
    'voc4': {
        label: '고정 관용구(Idiom)',
        description: '개별 단어 의미를 넘어서는 고정 표현'
    },
    // Part 6
    'p6g': {
        label: '문맥 일관 문법 판단',
        description: '지문 전체의 흐름을 고려한 시제/태 판단'
    },
    'p6v': {
        label: '전체 맥락 어휘 추론',
        description: '문단 간 논리 연결을 고려한 최적 어휘'
    },
    'p6s': {
        label: '장문 삽입 논리성',
        description: '전후 문맥을 고려한 올바른 문장 위치'
    },
    'p6c': {
        label: '문맥 연결어구 판단',
        description: '문장과 문장을 잇는 부사/접속사 등의 논리적 연결어 선택'
    },
    // Part 7
    'P7_PURPOSE': {
        label: '글의 목적 및 핵심 취지',
        description: '발신 동기 및 글 전체가 지향하는 핵심 목표 파악'
    },
    'P7_DETAIL': {
        label: '명시적 사실 관계 확인',
        description: '지문에 기록된 객관적 팩트의 정확한 검색'
    },
    'P7_NEGATIVE': {
        label: '불일치 정보(NOT) 판별',
        description: '사실과 다른 내용을 가려내는 변별력'
    },
    'P7_INFERENCE': {
        label: '고난도 암시 내용 추론',
        description: '정황 증거만으로 유추 가능한 결론 도출'
    },
    'P7_VOCABULARY': {
        label: '문맥상 최적 유의어',
        description: '현재 문맥에 가장 적절한 동의어 치환 능력'
    },
    'P7_INSERTION': {
        label: '문장 내 최적 위치 선정',
        description: '지시어 등을 통한 문장의 기하학적 위치 판단'
    },
    'P7_GRAPHIC': {
        label: '시각 자료-텍스트 통합',
        description: '도표와 지문 연계를 통한 다각적 정보 분석'
    },
    'P7_LOCATION': {
        label: '정보 근거 위치 검색',
        description: '특정 답변의 증거가 위치한 단락 식별'
    },
    'P7_INTENTION': {
        label: '발화의도 정밀 분석',
        description: '채팅/메시지 내 특정 어구(" ")의 문맥적 의도 파악'
    },
    'P7_LINK': {
        label: '다중지문 연계 추론',
        description: '두 개 이상의 지문 정보를 결합하여 정답 도출'
    },
    // RC Passage Group (Short IDs used in Data)
    'P1': {
        label: '서신/이메일',
        description: '비즈니스 서신 및 이메일 소통 (Master: P1_CORR)'
    },
    'P2': {
        label: '공문/안내문',
        description: '공지사항 및 공식 메시지 (Master: P2_OFFI)'
    },
    'P3': {
        label: '기사/보고서',
        description: '뉴스 및 정보성 전문 텍스트 (Master: P3_MEDI)'
    },
    'P4': {
        label: '홍보/광고',
        description: '마케팅 목적의 글 및 웹페이지 (Master: P4_MARK)'
    },
    'P5': {
        label: '양식/영수증',
        description: '송장, 일정표 등 정형 데이터 (Master: P5_FORM)'
    },
    'P6': {
        label: '규정/지침',
        description: '정책 및 조작 지침 분석 (Master: P6_RULE)'
    },
    'P7': {
        label: '채팅/메시지',
        description: '메신저 대화 및 구어체 흐름 (Master: P7_CONV)'
    },
    'P8': {
        label: '도표/시각자료',
        description: '그래프 및 이미지 정보 통합 (Master: P8_VISU)'
    },
    // RC Master Classification (Reference for AI Analysis)
    'P1_CORR': {
        label: '서신/이메일 독해력',
        description: '비즈니스 서신류의 전형적 소통 구조 및 의도 파악'
    },
    'P2_OFFI': {
        label: '공문/안내문 독해력',
        description: '공지사항, 메시지 등 공식 정보의 핵심 전달 사항 인지'
    },
    'P3_MEDI': {
        label: '기사/보고서 독해력',
        description: '뉴스 및 정보성 텍스트의 사실 관계 및 전문 정보 해독'
    },
    'P4_MARK': {
        label: '홍보/광고/웹페이지',
        description: '마케팅 목적의 글에서 혜택 및 세부 조건 파악 능력'
    },
    'P5_FORM': {
        label: '비즈니스 양식/영수증',
        description: '송장, 일정표 등 정형화된 양식 데이터의 신속한 처리'
    },
    'P6_RULE': {
        label: '규정 및 지침서 독해',
        description: '정책, 조작 지침 등 조건부 문항에 대한 정확한 분석'
    },
    'P7_CONV': {
        label: '메시지/채팅 대화',
        description: '메신저 및 대화문 지문에서의 구어체 흐름 및 상황 인지'
    },
    'P8_VISU': {
        label: '도표 및 시각 자료 연계',
        description: '그래프, 이미지 정보를 텍스트와 통합하여 해석하는 실력'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/utils/toeic-tag-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToeicTagLabel",
    ()=>getToeicTagLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$types$2f$toeic$2d$standards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/types/toeic-standards.ts [app-client] (ecmascript)");
;
const getToeicTagLabel = (tag, part)=>{
    // 1. Exact match
    const metadata = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$types$2f$toeic$2d$standards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOEIC_TAG_REGISTRY"][tag];
    if (metadata) return metadata.label;
    const cleanTag = tag.trim();
    // 2. Base Code extraction (e.g., "B4. 일반문의" -> "B4", "A1 (announcement_general)" -> "A1")
    // Match the first letter + numbers (optional underscores)
    const match = cleanTag.match(/^([A-Z]\d+)(?:_[a-z]+)?/i);
    if (match) {
        const baseCode = match[1].toUpperCase();
        // 3. For Part 4: Auto-map base codes to Part 4 specific keys (e.g., A1 -> A1_ann)
        if (part && (part.includes('p4') || part.includes('part4'))) {
            const possibleP4Keys = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$types$2f$toeic$2d$standards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOEIC_TAG_REGISTRY"]).filter((k)=>k.startsWith(`${baseCode}_`));
            if (possibleP4Keys.length > 0) {
                return __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$types$2f$toeic$2d$standards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOEIC_TAG_REGISTRY"][possibleP4Keys[0]].label;
            }
        }
        // 4. Fallback: try direct baseCode match
        const fallbackMetadata = __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$types$2f$toeic$2d$standards$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOEIC_TAG_REGISTRY"][baseCode];
        if (fallbackMetadata) {
            return fallbackMetadata.label;
        }
    }
    // 5. Keep original if totally unmatchable
    return tag;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/filters/actualTestFilter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Actual Test Filter Utility
 * 
 * Purpose: Filter Manager_Results to include only actual test data
 * Excludes: Drill mode, grammar homework, vocabulary, etc.
 */ __turbopack_context__.s([
    "calculateCorrectCount",
    ()=>calculateCorrectCount,
    "isActualTest",
    ()=>isActualTest,
    "mapToPartKey",
    ()=>mapToPartKey
]);
function isActualTest(data) {
    // 1. CRITICAL: Exclude drill mode (highest priority)
    if (data.mode === 'drill') {
        return false;
    }
    // 2. Exclude grammar homework (used for weekend weakness-specific assignments)
    if (data.type === 'grammar' || data.unit?.includes('문법')) {
        return false;
    }
    // 3. Exclude vocabulary
    if (data.type === 'voca' || data.unit?.includes('단어') || data.unit?.includes('Voca')) {
        return false;
    }
    // 4. Exclude Part 1 shadowing practice
    if (data.type === 'part1_shadow' || data.unit?.includes('쉐도잉')) {
        return false;
    }
    // 5. Check for actual test patterns
    const unit = data.unit || '';
    const type = data.type || '';
    // Standard actual test types (long and short)
    const actualTestTypes = [
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6',
        'p7s',
        'p7d',
        'p7',
        'part1_test',
        'part2_test',
        'part3_test',
        'part4_test',
        'part5_test',
        'part6_test',
        'part7_test',
        'part7_single',
        'part7_double',
        'part7_multi'
    ];
    if (actualTestTypes.includes(type) || type.endsWith('_test')) {
        return true;
    }
    // Pattern B: unit field contains 'Test', '회', 'Level', or 'p7'
    if (unit.includes('_Test') || unit.includes('Real Test') || unit.match(/Test.*?\d+/) || unit.match(/\d+회/) || unit.includes('Level') || unit.includes('p7s') || unit.includes('p7d')) {
        return true;
    }
    // Pattern C: unit contains '실전' (actual test)
    if (unit.includes('실전')) {
        return true;
    }
    // Default: not an actual test
    return false;
}
function mapToPartKey(data) {
    const unit = data.unit || '';
    const type = data.type || '';
    // 1. Unified mapping (Standardize to p1...p7d)
    const normalized = (type + '_' + unit).toLowerCase();
    if (normalized.includes('part1') || normalized.includes('p1')) return 'p1';
    if (normalized.includes('part2') || normalized.includes('p2')) return 'p2';
    if (normalized.includes('part3') || normalized.includes('p3')) return 'p3';
    if (normalized.includes('part4') || normalized.includes('p4')) return 'p4';
    if (normalized.includes('part5') || normalized.includes('p5')) return 'p5';
    if (normalized.includes('part6') || normalized.includes('p6')) return 'p6';
    if (normalized.includes('part7') || normalized.includes('p7')) {
        if (normalized.includes('double') || normalized.includes('triple') || normalized.includes('multi') || normalized.includes('이중') || normalized.includes('삼중') || normalized.includes('복합') || normalized.includes('p7d') || normalized.includes('p7m') || normalized.includes('p7t')) {
            return 'p7d';
        }
        if (normalized.includes('single') || normalized.includes('단일') || normalized.includes('p7s')) {
            return 'p7s';
        }
        return 'p7s'; // Default P7 to single if unknown
    }
    return 'unknown';
}
function calculateCorrectCount(data) {
    if (typeof data.score === 'number') {
        return data.score;
    }
    if (typeof data.total === 'number' && typeof data.wrongCount === 'number') {
        return data.total - data.wrongCount;
    }
    return 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/goalAnalysisService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "analyzeGoalStatus",
    ()=>analyzeGoalStatus
]);
/**
 * Goal Analysis Service
 * 
 * Purpose: Analyze student performance against their goals
 * Based on actual test results only (excludes drill mode, grammar, etc.)
 */ var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/filters/actualTestFilter.ts [app-client] (ecmascript)");
;
;
;
async function analyzeGoalStatus(userId, partTargets, preFetchedSnapshot) {
    const normalizedTargets = {};
    const KEY_MAP = {
        'p1': 'p1',
        'p1_goal': 'p1',
        'part1_test': 'p1',
        'p2': 'p2',
        'p2_goal': 'p2',
        'part2_test': 'p2',
        'p3': 'p3',
        'p3_goal': 'p3',
        'part3_test': 'p3',
        'p4': 'p4',
        'p4_goal': 'p4',
        'part4_test': 'p4',
        'p5': 'p5',
        'p5_goal': 'p5',
        'part5_test': 'p5',
        'p6': 'p6',
        'p6_goal': 'p6',
        'part6_test': 'p6',
        'p7s': 'p7s',
        'p7s_goal': 'p7s',
        'p7_single_goal': 'p7s',
        'part7_single': 'p7s',
        'p7d': 'p7d',
        'p7d_goal': 'p7d',
        'p7_double_goal': 'p7d',
        'part7_double': 'p7d',
        'part7_test': 'p7f',
        'p7f': 'p7f'
    };
    Object.entries(partTargets).forEach(([key, val])=>{
        const normKey = KEY_MAP[key] || key.replace('_goal', '');
        normalizedTargets[normKey] = val || 0;
    });
    const stats = await calculateActualTestStats(userId, preFetchedSnapshot);
    const partGoals = calculateGoalGap(normalizedTargets, stats);
    const weakestPart = findWeakestPart(partGoals);
    const achievement = calculateLCRCAchievement(partGoals);
    return {
        partGoals,
        weakestPart,
        lcAchievement: achievement.lc,
        rcAchievement: achievement.rc,
        overallAchievement: achievement.overall
    };
}
/**
 * Calculate statistics
 */ async function calculateActualTestStats(userId, preFetchedSnapshot) {
    let snapshot;
    if (preFetchedSnapshot) {
        snapshot = preFetchedSnapshot;
    } else {
        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Manager_Results'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('studentId', '==', userId));
        snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    }
    // Sort by timestamp DESC (Latest First)
    const docs = snapshot.docs.sort((a, b)=>{
        const tA = a.data().timestamp?.toMillis() || a.data().createdAt?.toMillis() || 0;
        const tB = b.data().timestamp?.toMillis() || b.data().createdAt?.toMillis() || 0;
        return tB - tA;
    });
    const scoreSums = {};
    const scoreCounts = {};
    const latestScore = {};
    const PART_MAX = {
        p1: 6,
        p2: 25,
        p3: 39,
        p4: 30,
        p5: 30,
        p6: 16,
        p7s: 29,
        p7d: 25,
        p7f: 54
    };
    const LONG_TO_SHORT = {
        'part1_test': 'p1',
        'part2_test': 'p2',
        'part3_test': 'p3',
        'part4_test': 'p4',
        'part5_test': 'p5',
        'part6_test': 'p6',
        'part7_single': 'p7s',
        'part7_double': 'p7d',
        'part7_triple': 'p7d',
        'part7_multi': 'p7d',
        'part7_test': 'p7f',
        'p1': 'p1',
        'p2': 'p2',
        'p3': 'p3',
        'p4': 'p4',
        'p5': 'p5',
        'p6': 'p6',
        'p7s': 'p7s',
        'p7d': 'p7d',
        'p7t': 'p7d',
        'p7f': 'p7f',
        'p7m': 'p7d'
    };
    docs.forEach((doc)=>{
        const data = doc.data();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActualTest"])(data)) return;
        const longKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToPartKey"])(data);
        const type = LONG_TO_SHORT[longKey] || longKey;
        if (typeof data.score === 'number' && PART_MAX[type] !== undefined) {
            const max = PART_MAX[type];
            let correct = 0;
            if (data.total) {
                correct = data.score <= data.total ? data.score : Math.round(data.score / 100 * data.total);
            } else {
                correct = data.score <= max ? data.score : Math.round(data.score / 100 * max);
            }
            correct = Math.min(correct, max);
            if (type === 'p7f') {
                const sCorrect = Math.round(correct * (29 / 54));
                const dCorrect = correct - sCorrect;
                [
                    [
                        'p7s',
                        sCorrect
                    ],
                    [
                        'p7d',
                        dCorrect
                    ]
                ].forEach(([subKey, curCorrect])=>{
                    const sub = subKey;
                    const val = curCorrect;
                    scoreSums[sub] = (scoreSums[sub] || 0) + val;
                    scoreCounts[sub] = (scoreCounts[sub] || 0) + 1;
                    if (latestScore[sub] === undefined) latestScore[sub] = val;
                });
            } else {
                scoreSums[type] = (scoreSums[type] || 0) + correct;
                scoreCounts[type] = (scoreCounts[type] || 0) + 1;
                if (latestScore[type] === undefined) {
                    latestScore[type] = correct;
                }
            }
        }
    });
    const partStats = {};
    Object.keys(scoreCounts).forEach((type)=>{
        const average = Math.round(scoreSums[type] / scoreCounts[type]);
        partStats[type] = {
            scores: Array(scoreCounts[type]).fill(average),
            latest: latestScore[type] || 0,
            average: average
        };
    });
    return partStats;
}
function calculateGoalGap(targets, stats) {
    return Object.entries(targets).map(([part, target])=>{
        const stat = stats[part] || {
            scores: [],
            latest: 0,
            average: 0
        };
        const gap = stat.latest - target;
        const achievementRate = target > 0 ? Math.round(stat.latest / target * 100) : 0;
        return {
            part,
            targetScore: target,
            averageScore: stat.average,
            latestScore: stat.latest,
            gap: gap,
            achievementRate,
            completedTests: stat.scores.length
        };
    });
}
function generateEvaluationMessage(part) {
    const partName = part.part.toUpperCase().replace('_TEST', '').replace('_', ' ');
    const gap = Math.abs(part.gap);
    const rate = part.achievementRate;
    if (rate < 50) {
        return `⚠️ ${partName} 달성률 ${rate}%로 매우 낮습니다. 목표 대비 ${gap}개 부족하며, 이는 전체 목표 달성의 가장 큰 장애물입니다. 즉시 집중 보강이 필요합니다.`;
    } else if (rate < 70) {
        return `📊 ${partName} 달성률 ${rate}%입니다. 목표 대비 ${gap}개 부족하며, 전체 성적 향상을 위해 우선적으로 보완해야 합니다.`;
    } else if (rate < 100) {
        return `📈 ${partName} 달성률 ${rate}%로 선방하고 있으나, 목표 대비 ${gap}개 부족합니다. 조금만 더 노력하면 목표 달성이 가능합니다.`;
    } else {
        return `🎉 ${partName} 목표를 달성했습니다! 현재 실력을 유지하며 안정적으로 학습하세요.`;
    }
}
function findWeakestPart(partGoals) {
    const partsWithData = partGoals.filter((p)=>p.completedTests > 0);
    if (partsWithData.length === 0) {
        return {
            part: 'none',
            gap: 0,
            achievementRate: 0,
            evaluationMessage: '📝 아직 실전 모의고사 기록이 없습니다. 먼저 테스트를 풀어보세요!',
            recommendationReason: '데이터 부족'
        };
    }
    const underPerforming = partsWithData.filter((p)=>p.gap < 0);
    if (underPerforming.length === 0) {
        return {
            part: 'none',
            gap: 0,
            achievementRate: 100,
            evaluationMessage: '🎉 모든 파트에서 목표를 달성했습니다! 현재 실력을 유지하며 안정적으로 학습하세요.',
            recommendationReason: '목표 달성 완료'
        };
    }
    const weakest = underPerforming.sort((a, b)=>a.gap - b.gap)[0];
    return {
        part: weakest.part,
        gap: Math.abs(weakest.gap),
        achievementRate: weakest.achievementRate,
        evaluationMessage: generateEvaluationMessage(weakest),
        recommendationReason: `전체 목표 달성에 가장 큰 걸림돌입니다. ${weakest.part.toUpperCase()} 집중 보강이 필요합니다.`
    };
}
function calculateLCRCAchievement(partGoals) {
    const lcParts = partGoals.filter((p)=>[
            'p1',
            'p2',
            'p3',
            'p4'
        ].includes(p.part));
    const rcParts = partGoals.filter((p)=>[
            'p5',
            'p6',
            'p7s',
            'p7d',
            'p7f'
        ].includes(p.part));
    const getAvg = (list)=>list.length > 0 ? Math.round(list.reduce((s, p)=>s + p.achievementRate, 0) / list.length) : 0;
    return {
        lc: getAvg(lcParts),
        rc: getAvg(rcParts),
        overall: getAvg(partGoals)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/utils/goal-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TOEIC Goal Distribution Utility
 */ __turbopack_context__.s([
    "MAX_QUESTIONS",
    ()=>MAX_QUESTIONS,
    "distributeGoals",
    ()=>distributeGoals
]);
const MAX_QUESTIONS = {
    p1: 6,
    p2: 25,
    p3: 39,
    p4: 30,
    p5: 30,
    p6: 16,
    p7s: 29,
    p7d: 25
};
function distributeGoals(totalScore, lcScore, rcScore) {
    let lc = Number(lcScore) || 0;
    let rc = Number(rcScore) || 0;
    const total = Number(totalScore) || 0;
    // 1. Synchronize LC/RC if they don't match total
    if (lc + rc !== total || isNaN(lc) || isNaN(rc)) {
        // Standard Formula: LC = (Total + 50) / 2
        lc = Math.round((total + 50) / 2 / 5) * 5;
        if (lc > 495) lc = 495;
        rc = total - lc;
        if (rc > 495) {
            rc = 495;
            lc = total - 495;
        }
    }
    // 2. Calculate required correct questions (Calibrated to Hackers table)
    // LC: Score 400 -> 81, 450 -> 90 => Formula: Score * 0.18 + 9
    // RC: Score 350 -> 77, 400 -> 85 => Formula: Score * 0.16 + 21
    const requiredLC = Math.max(0, Math.min(100, Math.round(lc * 0.18 + 9)));
    const requiredRC = Math.max(0, Math.min(100, Math.round(rc * 0.16 + 21)));
    const distribute = (budget, parts)=>{
        const result = {};
        if (budget <= 0) {
            parts.forEach((p)=>result[p.key] = 0);
            return result;
        }
        const sumWeightedMax = parts.reduce((sum, p)=>{
            const multiplier = p.isPriority ? 1.1 : 0.95;
            return sum + p.max * multiplier;
        }, 0);
        const A = budget / sumWeightedMax;
        let remainingBudget = budget;
        parts.forEach((p)=>{
            const multiplier = p.isPriority ? 1.1 : 0.95;
            let target = Math.round(p.max * A * multiplier);
            target = Math.max(0, Math.min(p.max, target));
            result[p.key] = target;
            remainingBudget -= target;
        });
        if (remainingBudget !== 0) {
            const sortedParts = [
                ...parts
            ].sort((a, b)=>(b.isPriority ? 1 : 0) - (a.isPriority ? 1 : 0));
            for (const p of sortedParts){
                const room = remainingBudget > 0 ? p.max - result[p.key] : result[p.key];
                if (room > 0) {
                    const add = remainingBudget > 0 ? Math.min(room, remainingBudget) : -Math.min(room, Math.abs(remainingBudget));
                    result[p.key] += add;
                    remainingBudget -= add;
                }
                if (remainingBudget === 0) break;
            }
        }
        return result;
    };
    const lcParts = [
        {
            key: 'p1_goal',
            max: MAX_QUESTIONS.p1,
            isPriority: true
        },
        {
            key: 'p2_goal',
            max: MAX_QUESTIONS.p2,
            isPriority: true
        },
        {
            key: 'p3_goal',
            max: MAX_QUESTIONS.p3,
            isPriority: false
        },
        {
            key: 'p4_goal',
            max: MAX_QUESTIONS.p4,
            isPriority: false
        }
    ];
    const rcParts = [
        {
            key: 'p5_goal',
            max: MAX_QUESTIONS.p5,
            isPriority: true
        },
        {
            key: 'p6_goal',
            max: MAX_QUESTIONS.p6,
            isPriority: true
        },
        {
            key: 'p7s_goal',
            max: MAX_QUESTIONS.p7s,
            isPriority: false
        },
        {
            key: 'p7d_goal',
            max: MAX_QUESTIONS.p7d,
            isPriority: false
        }
    ];
    const lcRes = distribute(requiredLC, lcParts);
    const rcRes = distribute(requiredRC, rcParts);
    return {
        ...lcRes,
        ...rcRes
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/weaknessService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeaknessService",
    ()=>WeaknessService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$utils$2f$toeic$2d$tag$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/utils/toeic-tag-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$goalAnalysisService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/goalAnalysisService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/filters/actualTestFilter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$utils$2f$goal$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/utils/goal-utils.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const CACHE_KEY_PREFIX = 'weakness_report_';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const WeaknessService = {
    // Force clear cache for a specific user (useful after finishing a test)
    clearCache: (userId)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            sessionStorage.removeItem(`${CACHE_KEY_PREFIX}${userId}`);
        }
    },
    analyzeUserWeakness: async (userId, forceRefresh = false)=>{
        try {
            // Check cache first if not force refreshing
            if (!forceRefresh && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const cached = sessionStorage.getItem(`${CACHE_KEY_PREFIX}${userId}`);
                if (cached) {
                    const { data, timestamp } = JSON.parse(cached);
                    if (Date.now() - timestamp < CACHE_TTL) {
                        return data;
                    }
                }
            }
            // 1. Get user data and targets from 'Winter_Users' collection
            let userSnap;
            let userDocRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users', userId);
            let initialSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userDocRef);
            if (initialSnap.exists()) {
                userSnap = initialSnap;
            } else {
                // Try fallback 1: by userId field
                const q1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
                const snap1 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q1);
                if (!snap1.empty) {
                    userSnap = snap1.docs[0];
                } else {
                    // Try fallback 2: by username field
                    const q2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('username', '==', userId));
                    const snap2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q2);
                    if (!snap2.empty) {
                        userSnap = snap2.docs[0];
                    }
                }
            }
            if (!userSnap) {
                console.warn(`User ${userId} not found in Winter_Users collection. Returning default report.`);
                const defaultStats = {
                    target: 0,
                    average: 0,
                    latest: 0,
                    gap: 0,
                    totalQuestions: 0
                };
                const parts = [
                    'p1',
                    'p2',
                    'p3',
                    'p4',
                    'p5',
                    'p6',
                    'p7_single',
                    'p7_double'
                ];
                const targetStats = parts.reduce((acc, part)=>({
                        ...acc,
                        [part]: defaultStats
                    }), {});
                return {
                    userId,
                    totalAccuracy: 0,
                    weakestTags: [],
                    partWeakestTags: {},
                    partBreakdown: {},
                    targetStats: targetStats,
                    priorityPart: 'p1',
                    analysisMessage: '사용자 데이터가 없습니다.',
                    targetScore: 850,
                    targetLCScore: 450,
                    targetRCScore: 400,
                    totalTargetLC: 450,
                    totalTargetRC: 400,
                    currentTotalLC: 0,
                    currentTotalRC: 0
                };
            }
            const userData = userSnap.data();
            // 2. Use targets from userData (standardizing keys)
            const pts = userData.partTargets || {};
            let partTargets = {
                p1: pts.p1_goal ?? pts.p1 ?? 0,
                p2: pts.p2_goal ?? pts.p2 ?? 0,
                p3: pts.p3_goal ?? pts.p3 ?? 0,
                p4: pts.p4_goal ?? pts.p4 ?? 0,
                p5: pts.p5_goal ?? pts.p5 ?? 0,
                p6: pts.p6_goal ?? pts.p6 ?? 0,
                p7s: pts.p7s_goal ?? pts.p7_single ?? pts.p7s ?? 0,
                p7d: pts.p7d_goal ?? pts.p7_double ?? pts.p7d ?? 0
            };
            // ✅ NEW: Fallback Allocation if targets are completely missing
            const isTargetsEmpty = Object.values(partTargets).every((v)=>v === 0);
            if (isTargetsEmpty) {
                const targetScore = userData.targetScore || 850;
                const targetLC = userData.targetLC || 450;
                const targetRC = userData.targetRC || 400;
                const autoTargets = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$utils$2f$goal$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distributeGoals"])(targetScore, targetLC, targetRC);
                partTargets = {
                    p1: autoTargets.p1_goal,
                    p2: autoTargets.p2_goal,
                    p3: autoTargets.p3_goal,
                    p4: autoTargets.p4_goal,
                    p5: autoTargets.p5_goal,
                    p6: autoTargets.p6_goal,
                    p7s: autoTargets.p7s_goal,
                    p7d: autoTargets.p7d_goal
                };
            }
            // 3. Get all results for analysis (Fetch once, reuse for goal analysis and tag analysis)
            const resultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Manager_Results');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(resultsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('studentId', '==', userId));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const goalAnalysis = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$goalAnalysisService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["analyzeGoalStatus"])(userId, partTargets, snapshot);
            const summary = userData.performanceSummary;
            // 4. Analyze tags from actual tests only
            const tagStats = {};
            snapshot.docs.forEach((docSnap)=>{
                const data = docSnap.data();
                // Only analyze actual tests
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActualTest"])(data)) return;
                if (data.incorrectQuestions && Array.isArray(data.incorrectQuestions)) {
                    const isPart3or4 = data.type === 'part3_test' || data.type === 'part4_test';
                    data.incorrectQuestions.forEach((q)=>{
                        let tag;
                        // For Part 3/4: use contextType UNLESS it's INFERENCE or GRAPHIC
                        if (isPart3or4) {
                            const classification = q.classification || '';
                            const isSpecialType = classification === 'INFERENCE' || classification === 'GRAPHIC';
                            if (isSpecialType) {
                                // Special question types: track by classification
                                tag = classification;
                            } else {
                                // Normal questions: track by contextType (conversation situation)
                                tag = q.contextType || 'Unknown';
                            }
                        } else {
                            // For other parts (1,2,5,6,7): use classification as before
                            tag = q.classification || 'Unknown';
                        }
                        if (tag === 'Unknown') return;
                        if (!tagStats[tag]) {
                            tagStats[tag] = {
                                total: 0,
                                incorrect: 0,
                                part: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToPartKey"])(data)
                            };
                        }
                        tagStats[tag].total++;
                        tagStats[tag].incorrect++;
                    });
                }
            });
            // 5. Build weakest tags (3+ incorrect) and partWeakestTags
            const weakestPartShort = goalAnalysis.weakestPart.part; // This is directly like 'p1', 'p2', 'p3'
            const allTags = Object.entries(tagStats).map(([tag, stat])=>({
                    tag,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$utils$2f$toeic$2d$tag$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToeicTagLabel"])(tag, stat.part) || tag,
                    total: stat.total,
                    incorrect: stat.incorrect,
                    accuracy: stat.total > 0 ? Math.round((stat.total - stat.incorrect) / stat.total * 100) : 0,
                    part: stat.part
                })).filter((tag)=>tag.incorrect >= 3).sort((a, b)=>b.incorrect - a.incorrect);
            const partWeakestTags = {};
            [
                'p1',
                'p2',
                'p3',
                'p4',
                'p5',
                'p6',
                'p7s',
                'p7d',
                'p7f'
            ].forEach((pt)=>{
                partWeakestTags[pt] = allTags.filter((t)=>t.part === pt).slice(0, 5);
            });
            const weakestTags = partWeakestTags[weakestPartShort] || [];
            // 6. Build targetStats (keys already in p1/p2 format)
            const targetStats = {};
            const partBreakdown = {};
            goalAnalysis.partGoals.forEach((pg)=>{
                targetStats[pg.part] = {
                    target: pg.targetScore,
                    average: pg.averageScore,
                    latest: pg.latestScore,
                    gap: pg.gap,
                    totalQuestions: pg.completedTests,
                    evaluationMessage: pg.evaluationMessage,
                    achievementRate: pg.achievementRate
                };
                partBreakdown[pg.part] = pg.latestScore;
            });
            // 7. Calculate Actual Total Score (No Projection as requested)
            // Logic: Only sum what the student has actually solved. Unattempted parts = 0.
            const lcParts = [
                'p1',
                'p2',
                'p3',
                'p4'
            ];
            const rcParts = [
                'p5',
                'p6',
                'p7s',
                'p7d',
                'p7f'
            ];
            let actualLCCount = 0;
            let actualRCCount = 0;
            lcParts.forEach((p)=>{
                actualLCCount += targetStats[p]?.latest || 0;
            });
            // Handle Part 7: prioritize single/double, fallback to total p7f
            const p7s = targetStats['p7s'];
            const p7d = targetStats['p7d'];
            const p7full = targetStats['p7f'];
            if ((p7s?.totalQuestions || 0) > 0 || (p7d?.totalQuestions || 0) > 0) {
                actualRCCount += p7s?.latest || 0;
                actualRCCount += p7d?.latest || 0;
            } else if ((p7full?.totalQuestions || 0) > 0) {
                actualRCCount += p7full.latest;
            }
            // Other RC parts
            [
                'p5',
                'p6'
            ].forEach((p)=>{
                actualRCCount += targetStats[p]?.latest || 0;
            });
            // TOEIC Score Conversion (Hybrid Logic)
            const allParts = [
                ...lcParts,
                ...rcParts
            ];
            const hasCompleteData = allParts.every((p)=>(targetStats[p]?.latest || 0) > 0);
            const calculateToeicScore = (count, isLC)=>{
                if (count === 0) return 5;
                let score = 5;
                if (hasCompleteData) {
                    if (isLC) {
                        score = Math.round((count - 9) / 0.18 / 5) * 5;
                    } else {
                        score = Math.round((count - 21) / 0.16 / 5) * 5;
                    }
                } else {
                    if (isLC) {
                        score = count * 5 + 10;
                    } else {
                        score = count * 5 - 10;
                    }
                }
                return Math.max(5, Math.min(495, score));
            };
            const currentTotalLC = calculateToeicScore(actualLCCount, true);
            const currentTotalRC = calculateToeicScore(actualRCCount, false);
            // Calculate Target Totals
            let targetLCCount = 0;
            lcParts.forEach((p)=>targetLCCount += targetStats[p]?.target || 0);
            let targetRCCount = (targetStats['p7s']?.target || 0) + (targetStats['p7d']?.target || 0);
            [
                'p5',
                'p6'
            ].forEach((p)=>targetRCCount += targetStats[p]?.target || 0);
            const totalTargetLC = calculateToeicScore(targetLCCount, true);
            const totalTargetRC = calculateToeicScore(targetRCCount, false);
            const report = {
                userId,
                totalAccuracy: goalAnalysis.overallAchievement,
                weakestTags,
                partWeakestTags,
                partBreakdown,
                targetStats,
                priorityPart: goalAnalysis.weakestPart.part,
                analysisMessage: goalAnalysis.weakestPart.evaluationMessage,
                targetScore: userData.targetScore || 850,
                targetLCScore: userData.targetLC || 450,
                targetRCScore: userData.targetRC || 400,
                totalTargetLC,
                totalTargetRC,
                currentTotalLC,
                currentTotalRC,
                latestWeeklyReport: userData.latestWeeklyReport,
                weakestPart: goalAnalysis.weakestPart
            };
            // Save to cache
            if ("TURBOPACK compile-time truthy", 1) {
                sessionStorage.setItem(`${CACHE_KEY_PREFIX}${userId}`, JSON.stringify({
                    data: report,
                    timestamp: Date.now()
                }));
            }
            return report;
        } catch (error) {
            console.error('Error analyzing user weakness:', error);
            throw error;
        }
    },
    getWeeklyDetailedStats: async (userId, periodDays = 7)=>{
        try {
            const resultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Manager_Results');
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - periodDays);
            // Fetch all for studentId to avoid index requirement
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(resultsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('studentId', '==', userId));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const allDocs = snapshot.docs.map((doc)=>doc.data());
            // Filter by date in memory
            const recentDocs = allDocs.filter((d)=>{
                const dDate = d.timestamp ? typeof d.timestamp === 'string' ? new Date(d.timestamp) : d.timestamp.toDate() : new Date(0);
                return dDate >= startDate;
            });
            const stats = {
                totalSolved: 0,
                parts: {},
                weakestTags: []
            };
            const tagMap = {};
            recentDocs.forEach((data)=>{
                const part = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToPartKey"])(data);
                if (part === 'unknown') return; // Skip non-TOEIC data
                if (!stats.parts[part]) {
                    stats.parts[part] = {
                        solved: 0,
                        correct: 0,
                        timeSpent: 0
                    };
                }
                const correctCount = data.score || 0;
                const totalCount = data.total || 0;
                stats.parts[part].solved += totalCount;
                stats.parts[part].correct += correctCount;
                stats.parts[part].timeSpent += data.timeSpent || 0;
                stats.totalSolved += totalCount;
                if (data.incorrectQuestions) {
                    data.incorrectQuestions.forEach((iq)=>{
                        const tag = iq.classification || iq.contextType || 'Unknown';
                        if (tag === 'Unknown') return;
                        if (!tagMap[tag]) tagMap[tag] = {
                            total: 0,
                            incorrect: 0,
                            part: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$filters$2f$actualTestFilter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapToPartKey"])(data)
                        };
                        tagMap[tag].incorrect++;
                    });
                }
            });
            // Flatten weak tags
            stats.weakestTags = Object.entries(tagMap).map(([tag, val])=>({
                    tag,
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$utils$2f$toeic$2d$tag$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToeicTagLabel"])(tag),
                    incorrectCount: val.incorrect,
                    part: val.part || ''
                })).sort((a, b)=>b.incorrectCount - a.incorrectCount).slice(0, 10);
            return stats;
        } catch (error) {
            console.error('Error getting weekly stats:', error);
            // Return empty stats instead of null to prevent downstream crashes
            return {
                totalSolved: 0,
                parts: {},
                weakestTags: []
            };
        }
    },
    getAiRecommendations: async (userId)=>{
        try {
            const resultsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Assignments');
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(resultsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('targetStudentId', '==', userId), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('isAiGenerated', '==', true));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const allAssignments = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            // Client-side sorting: show ALL current AI assignments (since old ones are batch-deleted upon generation)
            // Sort primarily by dayOffset, then Voca before Drill for the same day
            return allAssignments.sort((a, b)=>{
                const dayA = a.dayOffset || 0;
                const dayB = b.dayOffset || 0;
                if (dayA !== dayB) return dayA - dayB;
                const isVocaA = a.type === 'voca_boost' ? -1 : 1;
                const isVocaB = b.type === 'voca_boost' ? -1 : 1;
                return isVocaA - isVocaB;
            });
        } catch (error) {
            console.error('Error getting AI recommendations:', error);
            return [];
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/userService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserProfile",
    ()=>getUserProfile,
    "updateTargetDetails",
    ()=>updateTargetDetails,
    "updateTargetScore",
    ()=>updateTargetScore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
;
;
const getVerifiedUserDoc = async (userId)=>{
    if (!userId) return null;
    // 1. Try exact document ID
    const userRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users', userId);
    const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(userRef);
    if (userSnap.exists()) return {
        ref: userRef,
        snap: userSnap
    };
    // 2. Try by userId field
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('userId', '==', userId));
    const qSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (!qSnap.empty) return {
        ref: qSnap.docs[0].ref,
        snap: qSnap.docs[0]
    };
    // 3. Try by username field
    const q2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('username', '==', userId));
    const qSnap2 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q2);
    if (!qSnap2.empty) return {
        ref: qSnap2.docs[0].ref,
        snap: qSnap2.docs[0]
    };
    return null; // Not found anywhere
};
const getUserProfile = async (userId)=>{
    if (!userId) return null;
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (verified && verified.snap && verified.snap.exists()) {
            return {
                userId,
                ...verified.snap.data()
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
        throw error;
    }
};
const updateTargetScore = async (userId, targetScore)=>{
    // Legacy support or simple update
    // We should probably create a more detailed update function
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (!verified) throw new Error("User document not found.");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(verified.ref, {
            targetScore: targetScore
        }, {
            merge: true
        });
    } catch (error) {
        console.error("Error updating target score:", error);
        throw error;
    }
};
const updateTargetDetails = async (userId, data)=>{
    try {
        const verified = await getVerifiedUserDoc(userId);
        if (!verified) throw new Error("User document not found.");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDoc"])(verified.ref, data, {
            merge: true
        });
    } catch (error) {
        console.error("Error updating target details:", error);
        throw error;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/rankingService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUserRankInfo",
    ()=>getUserRankInfo,
    "getUserStreak",
    ()=>getUserStreak,
    "updateRankings",
    ()=>updateRankings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
const updateRankings = async (period, className = 'all')=>{
    try {
        console.log(`Starting ranking aggregation for ${period} (Class: ${className})...`);
        // 1. Fetch Students
        const usersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Winter_Users');
        let userQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(usersRef);
        if (className !== 'all') {
            userQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(usersRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('className', '==', className));
        }
        const userSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(userQuery);
        const students = {};
        userSnap.forEach((doc)=>{
            const data = doc.data();
            if (data.userId && data.status === 'approved') {
                students[data.userId] = {
                    name: data.userName || data.name || `Unknown(${data.userId})`,
                    class: data.className || ''
                };
            }
        });
        const sIds = Object.keys(students);
        console.log(`Analyzing ${sIds.length} approved students...`);
        // 2. Fetch All Results for these students
        // We'll process students in chunks to avoid overwhelming the client
        const studentStats = {};
        const chunkSize = 10;
        for(let i = 0; i < sIds.length; i += chunkSize){
            const chunk = sIds.slice(i, i + chunkSize);
            await Promise.all(chunk.map(async (sid)=>{
                const rQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Manager_Results'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('studentId', '==', sid));
                const rSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(rQuery);
                let totalScoreSum = 0;
                let vocaSum = 0;
                let vocaCount = 0;
                let hwCount = 0;
                rSnap.forEach((d)=>{
                    const data = d.data();
                    const score = data.score || 0;
                    if (data.type === 'voca') {
                        vocaSum += score;
                        vocaCount++;
                    } else if (data.type?.includes('test') || data.type?.includes('shadow')) {
                        // Standard score aggregation
                        totalScoreSum += score;
                    }
                    hwCount++;
                });
                studentStats[sid] = {
                    totalScore: totalScoreSum,
                    hwCount: hwCount,
                    vocaAvg: vocaCount > 0 ? Math.round(vocaSum / vocaCount) : 0,
                    hasVoca: vocaCount > 0
                };
            }));
        }
        // 3. Group by Class
        const classGroups = {
            'all': students
        };
        Object.keys(students).forEach((sid)=>{
            const s = students[sid];
            if (s.class) {
                if (!classGroups[s.class]) classGroups[s.class] = {};
                classGroups[s.class][sid] = s;
            }
        });
        const assignRanks = (list)=>{
            list.sort((a, b)=>b.score - a.score);
            return list.map((entry, idx)=>({
                    ...entry,
                    rank: idx + 1,
                    change: 0
                }));
        };
        const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
        // 4. Build Rankings for each Group
        const processGroup = (groupName, groupStudents)=>{
            if (className !== 'all' && groupName !== className) return;
            const totalR = [];
            const vocaR = [];
            const consistencyR = [];
            Object.keys(groupStudents).forEach((sid)=>{
                const stat = studentStats[sid] || {
                    totalScore: 0,
                    hwCount: 0,
                    vocaAvg: 0,
                    hasVoca: false
                };
                const info = groupStudents[sid];
                // Skill Rank (Raw Total Score)
                totalR.push({
                    userId: sid,
                    userName: info.name,
                    className: info.class,
                    score: stat.totalScore,
                    rank: 0,
                    detail: `누적 점수: ${stat.totalScore}p`
                });
                // Effort Rank (Task Count)
                consistencyR.push({
                    userId: sid,
                    userName: info.name,
                    className: info.class,
                    score: stat.hwCount,
                    rank: 0,
                    detail: `총 학습량: ${stat.hwCount}회`
                });
                // Voca Rank
                if (stat.hasVoca) {
                    vocaR.push({
                        userId: sid,
                        userName: info.name,
                        className: info.class,
                        score: stat.vocaAvg,
                        rank: 0,
                        detail: `단어평균: ${stat.vocaAvg}점`
                    });
                }
            });
            addToBatch(batch, period, groupName, 'total', assignRanks(totalR).slice(0, 50));
            addToBatch(batch, period, groupName, 'voca', assignRanks(vocaR).slice(0, 50));
            addToBatch(batch, period, groupName, 'consistency', assignRanks(consistencyR).slice(0, 50));
        };
        const addToBatch = (batch, period, classId, type, list)=>{
            const docId = `${period}-${type}-${classId}`;
            const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Rankings', docId);
            batch.set(ref, {
                id: docId,
                period,
                type,
                classId,
                updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                ranks: list
            });
        };
        Object.keys(classGroups).forEach((grp)=>processGroup(grp, classGroups[grp]));
        await batch.commit();
        console.log("Ranking aggregation complete.");
        return {
            success: true,
            debug: {
                studentCount: sIds.length
            }
        };
    } catch (error) {
        console.error("Ranking service error:", error);
        throw error;
    }
};
const getUserStreak = async (userId)=>{
    try {
        const rQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Manager_Results'), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])('studentId', '==', userId), (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])('timestamp', 'desc'));
        const rSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(rQuery);
        if (rSnap.empty) return 0;
        const dateStrings = new Set();
        rSnap.forEach((doc)=>{
            const data = doc.data();
            const ts = data.timestamp;
            if (ts) {
                const d = ts.toDate();
                // Format YYYY-MM-DD for stability
                const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                dateStrings.add(dateStr);
            }
        });
        const sortedDates = Array.from(dateStrings).sort((a, b)=>new Date(b).getTime() - new Date(a).getTime());
        const now = new Date();
        const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        const yesterday = new Date(Date.now() - 86400000);
        const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;
        // If didn't study today or yesterday, streak is 0
        if (sortedDates[0] !== todayStr && sortedDates[0] !== yesterdayStr) {
            return 0;
        }
        let streak = 1;
        let currentDate = new Date(sortedDates[0]);
        for(let i = 1; i < sortedDates.length; i++){
            const prevDate = new Date(sortedDates[i]);
            const diffInDays = Math.round((currentDate.getTime() - prevDate.getTime()) / (1000 * 3600 * 24));
            if (diffInDays === 1) {
                streak++;
                currentDate = prevDate;
            } else if (diffInDays > 1) {
                break;
            }
        }
        return streak;
    } catch (e) {
        console.error("Streak calculation error:", e);
        return 0;
    }
};
const getUserRankInfo = async (userId, className)=>{
    try {
        // Calculate current week period (e.g., 2026-W09)
        const now = new Date();
        const year = now.getFullYear();
        const onejan = new Date(year, 0, 1);
        const week = Math.ceil(((now.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
        const period = `${year}-W${String(week).padStart(2, '0')}`;
        // Get total score ranking for this class
        const docId = `${period}-total-${className || 'all'}`;
        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'Rankings', docId);
        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDoc"])(ref);
        if (snap.exists()) {
            const data = snap.data();
            const ranks = data.ranks || [];
            const myEntry = ranks.find((r)=>r.userId === userId);
            if (myEntry) {
                return {
                    rank: myEntry.rank,
                    totalCount: ranks.length,
                    score: myEntry.score,
                    period: period
                };
            }
        }
        return null;
    } catch (e) {
        console.error("User rank fetch error:", e);
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils/goal-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_Q",
    ()=>MAX_Q,
    "calculateDistributedGoals",
    ()=>calculateDistributedGoals,
    "getRequiredCounts",
    ()=>getRequiredCounts
]);
const MAX_Q = {
    p1_goal: 6,
    p2_goal: 25,
    p3_goal: 39,
    p4_goal: 30,
    p5_goal: 30,
    p6_goal: 16,
    p7s_goal: 29,
    p7d_goal: 25,
    p7f_goal: 54
};
const getRequiredCounts = (targetLC, targetRC)=>{
    return {
        requiredLC: Math.min(100, Math.round(targetLC * 0.18 + 9)),
        requiredRC: Math.min(100, Math.round(targetRC * 0.16 + 21))
    };
};
function calculateDistributedGoals(totalScore) {
    // 1. Determine LC/RC split (LC is generally +50 over RC for same score difficulty)
    let targetLC;
    let targetRC;
    if (totalScore >= 900) {
        // High Scorer Strategy (Priority on almost perfect LC)
        targetLC = 480 + Math.max(0, (totalScore - 900) * 0.5);
        targetLC = Math.min(495, Math.ceil(targetLC / 5) * 5);
        targetRC = totalScore - targetLC;
    } else {
        // Normal Strategy (LC +50 rule)
        targetLC = Math.ceil((totalScore + 50) / 2 / 5) * 5;
        targetRC = totalScore - targetLC;
        if (targetLC > 495) {
            targetLC = 495;
            targetRC = totalScore - 495;
        }
    }
    // 2. Determine Required Correct Counts (Hackers Table Calibration)
    const reqLC = Math.min(100, Math.ceil(targetLC / 5)); // Over-simplified for linear estimation
    const reqRC = Math.min(100, Math.ceil(targetRC / 5) + 4); // RC needs slightly more correct for same score
    // 3. Helper for Proportional Distribution
    const distribute = (budget, parts)=>{
        const result = {};
        const totalCapacity = parts.reduce((sum, p)=>sum + (p.cap ?? MAX_Q[p.key]), 0);
        // First pass: Proportional allocation
        let allocated = 0;
        parts.forEach((p)=>{
            const max = p.cap ?? MAX_Q[p.key];
            const proportion = max / totalCapacity;
            const target = Math.floor(budget * proportion);
            result[p.key] = Math.min(target, max);
            allocated += result[p.key];
        });
        // Second pass: Distribute remainder evenly to parts that have room
        let remaining = budget - allocated;
        while(remaining > 0){
            let spaceFound = false;
            for (const p of parts){
                if (remaining <= 0) break;
                const max = p.cap ?? MAX_Q[p.key];
                if (result[p.key] < max) {
                    result[p.key]++;
                    remaining--;
                    spaceFound = true;
                }
            }
            if (!spaceFound) break; // All parts capped
        }
        return result;
    };
    // 4. Distribute to Parts
    const lcResult = distribute(reqLC, [
        {
            key: 'p1_goal'
        },
        {
            key: 'p2_goal'
        },
        {
            key: 'p4_goal'
        },
        {
            key: 'p3_goal'
        }
    ]);
    // RC Dynamic Capacity based on score level (difficulty adjustment)
    let p5Cap = MAX_Q.p5_goal;
    if (totalScore < 750) p5Cap = 25;
    if (totalScore < 600) p5Cap = 20;
    const rcResult = distribute(reqRC, [
        {
            key: 'p5_goal',
            cap: p5Cap
        },
        {
            key: 'p6_goal'
        },
        {
            key: 'p7s_goal'
        },
        {
            key: 'p7d_goal'
        }
    ]);
    return {
        targetScore: totalScore,
        targetLC,
        targetRC,
        partTargets: {
            p1_goal: lcResult.p1_goal || 0,
            p2_goal: lcResult.p2_goal || 0,
            p3_goal: lcResult.p3_goal || 0,
            p4_goal: lcResult.p4_goal || 0,
            p5_goal: rcResult.p5_goal || 0,
            p6_goal: rcResult.p6_goal || 0,
            p7s_goal: rcResult.p7s_goal || 0,
            p7d_goal: rcResult.p7d_goal || 0,
            p7f_goal: (rcResult.p7s_goal || 0) + (rcResult.p7d_goal || 0)
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/context/UserDataContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserDataProvider",
    ()=>UserDataProvider,
    "useUserData",
    ()=>useUserData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$weaknessService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/weaknessService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/userService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$rankingService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/services/rankingService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2f$goal$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/lib/utils/goal-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const UserDataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function UserDataProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rankInfo, setRankInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastFetchedUserId, setLastFetchedUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const refreshAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDataProvider.useCallback[refreshAll]": async (userId, className, force = false)=>{
            // If already loading or same user and not forced, skip
            if (loading) return;
            if (!force && lastFetchedUserId === userId && report) return;
            setLoading(true);
            try {
                console.log(`[UserDataContext] Fetching data for ${userId}... (force: ${force})`);
                // If forced refresh, recalculate the backend performance summary first to guarantee consistency
                if (force) {
                    try {
                        await PerformanceSyncService.syncUserSummary(userId);
                    } catch (e) {
                        console.warn('[UserDataContext] Optional syncUserSummary failed:', e);
                    }
                }
                // Parallel execution for maximum speed
                const [profile, analysisReport, streakCount, rankData] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserProfile"])(userId),
                    __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$weaknessService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeaknessService"].analyzeUserWeakness(userId, force),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$rankingService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserStreak"])(userId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$rankingService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserRankInfo"])(userId, className)
                ]);
                setUser(profile);
                setReport(analysisReport);
                setStreak(streakCount);
                setRankInfo(rankData);
                setLastFetchedUserId(userId);
                console.log(`[UserDataContext] Data sync complete.`);
            } catch (error) {
                console.error('[UserDataContext] Error syncing data:', error);
            } finally{
                setLoading(false);
            }
        }
    }["UserDataProvider.useCallback[refreshAll]"], [
        loading,
        lastFetchedUserId,
        report
    ]);
    const setUserGoal = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDataProvider.useCallback[setUserGoal]": async (userId, className, totalScore)=>{
            setLoading(true);
            try {
                const distributedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$lib$2f$utils$2f$goal$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateDistributedGoals"])(totalScore);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$src$2f$services$2f$userService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTargetDetails"])(userId, distributedData);
                // Refresh to sync report and profile
                await refreshAll(userId, className, true);
            } catch (error) {
                console.error('[UserDataContext] Error setting user goal:', error);
            } finally{
                setLoading(false);
            }
        }
    }["UserDataProvider.useCallback[setUserGoal]"], [
        refreshAll
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserDataContext.Provider, {
        value: {
            user,
            report,
            rankInfo,
            streak,
            loading,
            refreshAll,
            setUserGoal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/.gemini/antigravity/scratch/kangs-toeic-next/src/context/UserDataContext.tsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(UserDataProvider, "LsDtkICg2mYWwQkDk7R56LpkBis=");
_c = UserDataProvider;
function useUserData() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f2e$gemini$2f$antigravity$2f$scratch$2f$kangs$2d$toeic$2d$next$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserDataContext);
    if (context === undefined) {
        throw new Error('useUserData must be used within a UserDataProvider');
    }
    return context;
}
_s1(useUserData, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "UserDataProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_gemini_antigravity_scratch_kangs-toeic-next_src_5c8ec9ac._.js.map