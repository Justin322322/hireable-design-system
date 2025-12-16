(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureCard",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/glass-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCardScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useCardScale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CARD_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 36,
        filter: "blur(12px)",
        transition: {
            duration: 0.4,
            ease: [
                0.4,
                0,
                0.2,
                1
            ]
        }
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: 0.05
        }
    }
};
const FeatureCard = ({ title, description, children, cardRef, onMouseEnter, onMouseLeave })=>{
    _s();
    const { scale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCardScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardScale"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use hysteresis: enter at 25%, exit only when completely out of viewport
    const checkVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FeatureCard.useCallback[checkVisibility]": ()=>{
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const elementHeight = rect.height;
            const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
            const visibleRatio = Math.max(0, visibleHeight / elementHeight);
            if (!isActiveRef.current && visibleRatio >= 0.25) {
                // Enter: need 25% visible
                isActiveRef.current = true;
                setIsInView(true);
            } else if (isActiveRef.current && visibleRatio <= 0) {
                // Exit: only when completely out of viewport
                isActiveRef.current = false;
                setIsInView(false);
            }
        }
    }["FeatureCard.useCallback[checkVisibility]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeatureCard.useEffect": ()=>{
            const handleScroll = {
                "FeatureCard.useEffect.handleScroll": ()=>{
                    if (rafRef.current) return;
                    rafRef.current = requestAnimationFrame({
                        "FeatureCard.useEffect.handleScroll": ()=>{
                            checkVisibility();
                            rafRef.current = null;
                        }
                    }["FeatureCard.useEffect.handleScroll"]);
                }
            }["FeatureCard.useEffect.handleScroll"];
            checkVisibility();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "FeatureCard.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                }
            })["FeatureCard.useEffect"];
        }
    }["FeatureCard.useEffect"], [
        checkVisibility
    ]);
    // Memoize style objects to prevent recreation on every render
    const cardStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeatureCard.useMemo[cardStyle]": ()=>({
                height: 280 * scale,
                maxWidth: 424 * scale
            })
    }["FeatureCard.useMemo[cardStyle]"], [
        scale
    ]);
    const transformStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FeatureCard.useMemo[transformStyle]": ()=>({
                transform: `scale(${scale})`,
                transformOrigin: "center"
            })
    }["FeatureCard.useMemo[transformStyle]"], [
        scale
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: containerRef,
        className: "flex w-full max-w-[424px] flex-1 flex-col items-center gap-6 text-center sm:gap-10 lg:items-start lg:text-left",
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: CARD_VARIANTS,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-center gap-[11px] lg:items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-text-large-b flex w-full items-center justify-center text-(length:--text-large-b-font-size) leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-black [font-style:var(--text-large-b-font-style)] lg:justify-start",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-text-medium flex w-full items-center justify-center text-(length:--text-medium-font-size) leading-(--text-medium-line-height) font-(--text-medium-font-weight) tracking-(--text-medium-letter-spacing) text-neutral-600 [font-style:var(--text-medium-font-style)] lg:justify-start",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$glass$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlassCard"], {
                ref: cardRef,
                className: "mx-auto w-full",
                style: cardStyle,
                innerClassName: "flex items-center justify-center px-0 sm:px-3 py-12",
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-full items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: transformStyle,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeatureCard, "TnYUCU56RPQCUTy7bPPh6mY1SZg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCardScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCardScale"]
    ];
});
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedCounter",
    ()=>AnimatedCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AnimatedCounter = ({ from, to, duration, suffix = "", prefix = "", className })=>{
    _s();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            const node = nodeRef.current;
            if (!node) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(from, to, {
                duration,
                ease: "linear",
                onUpdate (value) {
                    node.textContent = prefix + Math.round(value) + suffix;
                }
            });
            return ({
                "AnimatedCounter.useEffect": ()=>controls.stop()
            })["AnimatedCounter.useEffect"];
        }
    }["AnimatedCounter.useEffect"], [
        from,
        to,
        duration,
        suffix,
        prefix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: nodeRef,
        className: className
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedCounter.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedCounter, "6lOStpyXmuUepN3BYUamOEINVKQ=");
_c = AnimatedCounter;
var _c;
__turbopack_context__.k.register(_c, "AnimatedCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedProgressCard",
    ()=>AnimatedProgressCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useViewportCenter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedCounter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const AnimatedProgressCard = ()=>{
    _s();
    const [isComplete, setIsComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 1024px)");
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use optimized viewport center detection with exit delay
    const isCentered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"])(cardRef, {
        threshold: 0.2,
        enabled: isMobile,
        exitDelay: 800
    });
    // Memoized event handlers
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimatedProgressCard.useCallback[handleMouseEnter]": ()=>setIsHovering(true)
    }["AnimatedProgressCard.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AnimatedProgressCard.useCallback[handleMouseLeave]": ()=>setIsHovering(false)
    }["AnimatedProgressCard.useCallback[handleMouseLeave]"], []);
    const shouldAnimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatedProgressCard.useMemo[shouldAnimate]": ()=>isMobile ? isCentered : isHovering
    }["AnimatedProgressCard.useMemo[shouldAnimate]"], [
        isMobile,
        isCentered,
        isHovering
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedProgressCard.useEffect": ()=>{
            if (!shouldAnimate) {
                setIsComplete(false);
                return;
            }
            const timer = setTimeout({
                "AnimatedProgressCard.useEffect.timer": ()=>{
                    setIsComplete(true);
                }
            }["AnimatedProgressCard.useEffect.timer"], 2800);
            return ({
                "AnimatedProgressCard.useEffect": ()=>clearTimeout(timer)
            })["AnimatedProgressCard.useEffect"];
        }
    }["AnimatedProgressCard.useEffect"], [
        shouldAnimate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "relative flex h-[269.43px] w-[408px] flex-col items-center justify-start overflow-hidden rounded-[7.7px] pt-[21px]",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-[371px] flex-col items-start gap-[26.53px] overflow-hidden rounded-[6.63px] border-[0.83px] border-solid border-neutral-300 bg-white p-[13.27px] shadow-[0px_5.77px_7.7px_#0000001a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-[33.16px] flex-1 items-center gap-[6.63px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "size-[33.16px] overflow-hidden rounded-[103.64px] bg-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "size-[33px] rounded-full object-cover",
                                            alt: "Isabel Reyes",
                                            src: "/images/Isabel-Reyes.svg",
                                            width: 33,
                                            height: 33,
                                            priority: true
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col items-start gap-[3.32px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-text-s text-[13px] leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11.6px]",
                                                children: "Isabel Reyes"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]",
                                                children: "Product Designer"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none inline-flex flex-col items-center justify-center gap-[8.29px] rounded-[96.23px] border-[0.41px] border-solid px-2 py-1", isComplete ? "border-matched-green bg-matched-green/10" : "border-client bg-client/10"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-text-s text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)] sm:text-[7px]", isComplete ? "text-matched-green" : "text-client"),
                                    children: isComplete ? "COMPLETED" : "ON TRACK"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col items-start gap-[13.27px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col items-start gap-[1.66px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-[16.58px] w-full items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center gap-[3.32px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "size-[11.61px]",
                                                        alt: "Component",
                                                        src: "/icons/component-18-7.svg",
                                                        width: 12,
                                                        height: 12,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-text-s text-[11px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[9.9px]",
                                                        children: "Overall Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 104,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            shouldAnimate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCounter"], {
                                                from: 0,
                                                to: 100,
                                                duration: 2.8,
                                                suffix: "%",
                                                className: "font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]",
                                                children: "0%"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-[16.58px] w-full items-center gap-[3.32px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-[8.29px] flex-1 flex-col items-start justify-center gap-[19.9px] overflow-hidden rounded-[82.91px] bg-(--color-neutral-150)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "bg-client h-full rounded-[82.91px]",
                                                initial: {
                                                    width: "0%"
                                                },
                                                animate: {
                                                    width: shouldAnimate ? "100%" : "0%"
                                                },
                                                transition: {
                                                    duration: shouldAnimate ? 2.8 : 0.3,
                                                    ease: shouldAnimate ? "linear" : "easeOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-full flex-col items-start gap-[1.66px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-[16.58px] w-full items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 items-center gap-[3.32px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "size-[11.61px]",
                                                        alt: "Icon components",
                                                        src: "/icons/icon-calendar.svg",
                                                        width: 12,
                                                        height: 12,
                                                        priority: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-text-s text-[11px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[9.9px]",
                                                        children: "Trial Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            shouldAnimate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedCounter"], {
                                                from: 1,
                                                to: 30,
                                                duration: 2.79,
                                                suffix: " / 30 days",
                                                className: "font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-text-s text-[11px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[9.9px]",
                                                children: "1 / 30 days"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 170,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-[16.58px] w-full items-center gap-[3.32px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-[8.29px] flex-1 flex-col items-start justify-center gap-[19.9px] overflow-hidden rounded-[82.91px] bg-(--color-neutral-150)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "h-full rounded-[82.91px] bg-neutral-300",
                                                initial: {
                                                    width: "3.33%"
                                                },
                                                animate: {
                                                    width: shouldAnimate ? "100%" : "3.33%"
                                                },
                                                transition: {
                                                    duration: shouldAnimate ? 2.79 : 0.3,
                                                    ease: shouldAnimate ? "linear" : "easeOut"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 flex h-[46px] w-[371px] items-center justify-center gap-2 rounded-[8px] border-[0.96px] border-solid px-[19.25px] py-2 transition-all duration-400", isComplete ? "border-client bg-client hover:bg-client-hover cursor-pointer opacity-100" : "cursor-not-allowed border-(--color-neutral-150) bg-neutral-200 opacity-60"),
                disabled: !isComplete,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-text-s flex items-center justify-center text-center text-base leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap [font-style:var(--text-s-font-style)] sm:text-[15.4px]", isComplete ? "text-white" : "text-neutral-300"),
                    children: "Hire as full-time"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AnimatedProgressCard, "U8XHqM8zA7EG0wYiOBkdnj+5HSo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"]
    ];
});
_c = AnimatedProgressCard;
var _c;
__turbopack_context__.k.register(_c, "AnimatedProgressCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlotDigit",
    ()=>SlotDigit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
/**
 * SlotDigit Component
 *
 * Renders a single digit with slot-machine style animation.
 * Used for animated number displays like payment amounts.
 */ const SlotDigitComponent = ({ targetDigit, shouldAnimate, delay = 0, width = 28 })=>{
    const digits = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
    ];
    const digitHeight = 52;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden",
        style: {
            height: digitHeight,
            width
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex flex-col",
            initial: {
                y: 0
            },
            animate: {
                y: shouldAnimate ? -targetDigit * digitHeight : 0
            },
            transition: {
                duration: 1.5,
                delay: delay,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            },
            children: digits.map((digit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center font-['DM_Sans'] text-[40px] font-semibold text-black",
                    style: {
                        height: digitHeight,
                        width: 28,
                        lineHeight: `${digitHeight}px`
                    },
                    children: digit
                }, digit, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SlotDigitComponent;
const SlotDigit = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SlotDigitComponent);
_c1 = SlotDigit;
SlotDigit.displayName = "SlotDigit";
var _c, _c1;
__turbopack_context__.k.register(_c, "SlotDigitComponent");
__turbopack_context__.k.register(_c1, "SlotDigit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentPaymentCard",
    ()=>TalentPaymentCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/**
 * TalentPaymentCard Component
 *
 * Displays a payment received animation with slot-machine style numbers.
 * Features animated circles and checkmark on hover/center.
 * Used in the talent view of the LastCard section.
 */ const TalentPaymentCardComponent = ()=>{
    _s();
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 1024px)");
    const [isCentered, setIsCentered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Set mounted state immediately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TalentPaymentCardComponent.useEffect": ()=>{
            setIsMounted(true);
        }
    }["TalentPaymentCardComponent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TalentPaymentCardComponent.useEffect": ()=>{
            if (!isMounted || !isMobile || !cardRef.current) return;
            const checkIfCentered = {
                "TalentPaymentCardComponent.useEffect.checkIfCentered": ()=>{
                    if (!cardRef.current) return;
                    const rect = cardRef.current.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const viewportCenter = viewportHeight / 2;
                    const elementCenter = rect.top + rect.height / 2;
                    const centerThreshold = viewportHeight * 0.2;
                    const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
                    setIsCentered(distanceFromCenter <= centerThreshold);
                }
            }["TalentPaymentCardComponent.useEffect.checkIfCentered"];
            window.addEventListener("scroll", checkIfCentered, {
                passive: true
            });
            window.addEventListener("resize", checkIfCentered);
            checkIfCentered();
            return ({
                "TalentPaymentCardComponent.useEffect": ()=>{
                    window.removeEventListener("scroll", checkIfCentered);
                    window.removeEventListener("resize", checkIfCentered);
                }
            })["TalentPaymentCardComponent.useEffect"];
        }
    }["TalentPaymentCardComponent.useEffect"], [
        isMobile,
        isMounted
    ]);
    const shouldAnimate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TalentPaymentCardComponent.useMemo[shouldAnimate]": ()=>isMounted && (isMobile ? isCentered : isHovering)
    }["TalentPaymentCardComponent.useMemo[shouldAnimate]"], [
        isMobile,
        isCentered,
        isHovering,
        isMounted
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: cardRef,
        className: "relative flex h-[264px] w-[408px] flex-col items-center rounded-lg bg-white",
        onMouseEnter: ()=>setIsHovering(true),
        onMouseLeave: ()=>setIsHovering(false),
        initial: {
            filter: "blur(0px)"
        },
        animate: {
            filter: "blur(0px)"
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    maskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 65%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 35%, transparent 65%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-[80px] left-1/2 size-[186.24px] -translate-x-1/2 -translate-y-1/2 overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "innerGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#737373"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#E5E5E5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                            lineNumber: 95,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "93.12",
                                cy: "93.12",
                                stroke: "url(#innerGradient)",
                                strokeWidth: "0.8",
                                fill: "none",
                                initial: {
                                    pathLength: 1,
                                    rotate: -90,
                                    strokeWidth: 0.8,
                                    r: 92.62,
                                    opacity: 0
                                },
                                animate: {
                                    pathLength: 1,
                                    rotate: shouldAnimate ? 270 : -90,
                                    opacity: shouldAnimate ? [
                                        0,
                                        1,
                                        1,
                                        1
                                    ] : 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: shouldAnimate ? 0.3 : 0,
                                    ease: "easeInOut",
                                    times: [
                                        0,
                                        0.2,
                                        0.8,
                                        1
                                    ]
                                },
                                style: {
                                    originX: "50%",
                                    originY: "50%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-[80px] left-1/2 size-[274px] -translate-x-1/2 -translate-y-1/2 overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: "outerGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0%",
                                            stopColor: "#737373"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "100%",
                                            stopColor: "#E5E5E5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "137",
                                cy: "137",
                                stroke: "url(#outerGradient)",
                                strokeWidth: "0.8",
                                fill: "none",
                                initial: {
                                    pathLength: 1,
                                    rotate: -90,
                                    strokeWidth: 0.8,
                                    r: 136.5,
                                    opacity: 0
                                },
                                animate: {
                                    pathLength: 1,
                                    rotate: shouldAnimate ? 270 : -90,
                                    opacity: shouldAnimate ? [
                                        0,
                                        1,
                                        1,
                                        1
                                    ] : 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: shouldAnimate ? 0.5 : 0,
                                    ease: "easeInOut",
                                    times: [
                                        0,
                                        0.2,
                                        0.8,
                                        1
                                    ]
                                },
                                style: {
                                    originX: "50%",
                                    originY: "50%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "bg-neutral-150 absolute top-[40px] left-1/2 z-20 flex size-[80px] -translate-x-1/2 items-center justify-center rounded-full border-[0.83px] border-neutral-300 shadow-[0px_5px_6.67px_rgba(0,0,0,0.1)]",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: shouldAnimate ? 1 : 0
                },
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-[66.67px] items-center justify-center rounded-full border-[0.83px] border-neutral-300 bg-white shadow-[0px_5px_6.67px_rgba(0,0,0,0.1)]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "17",
                        height: "17",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M4 12L9 17L20 6",
                            stroke: "#616161",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            initial: {
                                pathLength: 0
                            },
                            animate: {
                                pathLength: shouldAnimate ? 1 : 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: shouldAnimate ? 0.3 : 0,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                            lineNumber: 184,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[147px] left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-[13px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[52px] items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 1,
                                shouldAnimate: shouldAnimate,
                                delay: 0,
                                width: 30
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black",
                                children: ","
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 2,
                                shouldAnimate: shouldAnimate,
                                delay: 0.1
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 0,
                                shouldAnimate: shouldAnimate,
                                delay: 0.2
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 0,
                                shouldAnimate: shouldAnimate,
                                delay: 0.3
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['DM_Sans'] text-[40px] leading-[52px] font-semibold text-black",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 0,
                                shouldAnimate: shouldAnimate,
                                delay: 0.4
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlotDigit"], {
                                targetDigit: 0,
                                shouldAnimate: shouldAnimate,
                                delay: 0.5
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-[30px] items-center justify-center font-['Inter'] text-[20px] leading-[150%] font-normal tracking-[0.4px] whitespace-nowrap text-black",
                        children: "Payment Received"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TalentPaymentCardComponent, "WcKDpkUKLLB3pP+OHYLAuP4sdwQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"]
    ];
});
_c = TalentPaymentCardComponent;
const TalentPaymentCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(TalentPaymentCardComponent);
_c1 = TalentPaymentCard;
TalentPaymentCard.displayName = "TalentPaymentCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "TalentPaymentCardComponent");
__turbopack_context__.k.register(_c1, "TalentPaymentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateCard",
    ()=>CandidateCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const CandidateCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ card, index })=>{
    const isFocused = index === 1;
    const isTop = index === 0;
    const isBottom = index === 2;
    const zIndex = isFocused ? 5 : 1;
    const cardScale = isFocused ? 1 : 0.82;
    let yOffset = 0;
    let opacity = 1;
    let blur = 0;
    if (isTop) {
        yOffset = -115;
        opacity = 0.7;
        blur = 2;
    } else if (isBottom) {
        yOffset = 115;
        opacity = 0.7;
        blur = 2;
    }
    const cardWidth = isFocused ? 282 : 212;
    const isLargeCard = cardWidth === 282;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute",
        style: {
            zIndex,
            willChange: "transform, opacity, filter",
            filter: blur > 0 ? `blur(${blur}px)` : "none"
        },
        animate: {
            scale: cardScale,
            y: yOffset,
            opacity
        },
        transition: {
            duration: 0.4,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex flex-col items-start bg-white ${isLargeCard ? "gap-[7.42px] overflow-hidden rounded-[7.42px] p-[11.14px] shadow-[0px_3.85px_15.4px_3.85px_#00000014]" : "gap-[5.57px] rounded-[5.57px] p-[8.35px]"}`,
            style: {
                width: `${cardWidth}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex w-full items-center self-stretch ${isLargeCard ? "h-[37.12px] gap-[7.42px]" : "h-[27.84px] gap-[5.57px]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `overflow-hidden ${isLargeCard ? "size-[37.12px] rounded-full" : "size-[27.84px] rounded-full"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "size-full rounded-full object-cover",
                                alt: card.name,
                                src: card.avatar,
                                width: isLargeCard ? 37 : 28,
                                height: isLargeCard ? 37 : 28,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-1 flex-col items-start ${isLargeCard ? "gap-[3.71px]" : "gap-[2.78px]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `font-text-s font-bold whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[11px] leading-(--text-s-line-height) tracking-(--text-s-letter-spacing) sm:text-[11px]" : "text-[9px] leading-(--text-s-line-height) tracking-(--text-s-letter-spacing) sm:text-[9px]"}`,
                                    children: card.name
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `font-text-s text-neutral-700 [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]" : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"}`,
                                    children: card.role
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex w-full items-center ${isLargeCard ? "h-[20.42px] gap-[16.71px]" : "h-[15.31px] gap-[12.53px]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `inline-flex items-center justify-center ${isLargeCard ? "gap-[9.28px]" : "gap-[6.96px]"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-text-s whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]" : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"}`,
                                children: card.salary
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `font-text-s whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]" : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"}`,
                            children: card.experience
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `inline-flex items-center justify-center gap-2 bg-[var(--color-success)]/10 px-2 py-1 ${isLargeCard ? "h-[18.56px] rounded-[4.25px]" : "h-[13.92px] rounded-[3.19px]"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-text-s whitespace-nowrap text-[var(--color-success)] [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[8px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) sm:text-[8px]" : "text-[7px] leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) sm:text-[7px]"}`,
                                children: card.match
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                    lineNumber: 124,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex w-full items-center justify-between px-0 ${isLargeCard ? "h-[22.27px] py-[3.71px]" : "h-[16.71px] py-[2.78px]"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `inline-flex items-center ${isLargeCard ? "gap-[7.42px]" : "gap-[5.57px]"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-text-s whitespace-nowrap text-neutral-300 [font-style:var(--text-s-font-style)] ${isLargeCard ? "text-[9px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[9px]" : "text-[8px] leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) sm:text-[8px]"}`,
                                children: "Activity Title"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `inline-flex items-center bg-neutral-200 ${isLargeCard ? "gap-[9.28px] rounded-[92.81px]" : "gap-[6.96px] rounded-[69.61px]"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: isLargeCard ? "size-[14.85px]" : "size-[11.14px]",
                                alt: "Icon components",
                                src: "/icons/icon-components-3.svg",
                                width: isLargeCard ? 15 : 11,
                                height: isLargeCard ? 15 : 11,
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                                lineNumber: 204,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
            lineNumber: 63,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, card.id, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = CandidateCard;
CandidateCard.displayName = "CandidateCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "CandidateCard$React.memo");
__turbopack_context__.k.register(_c1, "CandidateCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CSS animation keyframes for path drawing (more performant than JS pathLength)
__turbopack_context__.s([
    "ANIMATION_PHASES",
    ()=>ANIMATION_PHASES,
    "pathAnimationStyles",
    ()=>pathAnimationStyles
]);
const pathAnimationStyles = `
  @keyframes drawPath {
    from { stroke-dashoffset: 280; }
    to { stroke-dashoffset: 0; }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes popIn {
    from { opacity: 0; transform: translateX(-50%) translateY(10px) scale(0.8); }
    to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
  }
  @keyframes glowPulse {
    from { box-shadow: 0 0 0 0 rgba(0, 167, 248, 0); }
    to { box-shadow: 0 0 30px 10px rgba(0, 167, 248, 0.6); }
  }
`;
const ANIMATION_PHASES = {
    PERSON1_COLOR: 0,
    LOGO_COLOR_START: 0.8,
    LOGO_COLOR_DURATION: 1.5,
    RAINBOW_PATH1_DURATION: 2.0,
    RAINBOW_PATH2_START: 2.0,
    RAINBOW_PATH2_DURATION: 1.5,
    GREY_LINES_HIDE: 3.5,
    BLUE_PATH_START: 3.5,
    BLUE_PATH_DURATION: 2.0,
    PERSON2_COLOR: 3.5,
    GLOW_START: 5.5,
    MATCHED_POPUP: 5.5
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedSVG",
    ()=>AnimatedSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/constants.ts [app-client] (ecmascript)");
;
;
;
;
const AnimatedSVG = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ shouldAnimate, animationPhase })=>{
    const isPhase2OrComplete = animationPhase === "phase2" || animationPhase === "complete";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "pointer-events-none absolute inset-0 size-full",
        style: {
            zIndex: 5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                        id: "rainbowGradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#FF2FC5"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "33%",
                                stopColor: "#FB2E6F"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "66%",
                                stopColor: "#FF8112"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#FF8112"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "vector2Mask",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            fill: "white",
                            style: {
                                transform: shouldAnimate ? "translateX(0%)" : "translateX(-100%)",
                                transition: shouldAnimate ? "transform 2s ease-in-out" : "transform 0.3s ease-out"
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "vector1Mask",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            fill: "white",
                            style: {
                                transform: shouldAnimate ? "translateX(0%)" : "translateX(-100%)",
                                transition: shouldAnimate ? `transform 1.5s ease-in-out ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].RAINBOW_PATH2_START}s` : "transform 0.3s ease-out"
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "greyLine1HideMask",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "100%",
                                height: "100%",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686",
                                stroke: "black",
                                strokeWidth: "1.5",
                                fill: "none",
                                initial: {
                                    pathLength: 0
                                },
                                animate: isPhase2OrComplete ? {
                                    pathLength: 1
                                } : {
                                    pathLength: 0
                                },
                                transition: isPhase2OrComplete ? {
                                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].BLUE_PATH_DURATION,
                                    ease: "easeInOut"
                                } : {
                                    duration: 0.2
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: "greyLine2HideMask",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "100%",
                                height: "100%",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                d: "M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0",
                                stroke: "black",
                                strokeWidth: "1.5",
                                fill: "none",
                                initial: {
                                    pathLength: 0
                                },
                                animate: isPhase2OrComplete ? {
                                    pathLength: 1
                                } : {
                                    pathLength: 0
                                },
                                transition: isPhase2OrComplete ? {
                                    duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].BLUE_PATH_DURATION,
                                    ease: "easeInOut"
                                } : {
                                    duration: 0.2
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(67, -9)",
                mask: "url(#greyLine1HideMask)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686",
                    className: "stroke-neutral-300",
                    strokeWidth: "0.962264",
                    fill: "none",
                    strokeDasharray: "3.85 3.85"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(204, 133)",
                mask: "url(#greyLine2HideMask)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0",
                    className: "stroke-neutral-300",
                    strokeWidth: "0.962264",
                    fill: "none",
                    strokeDasharray: "3.85 3.85"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(67, -9)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686",
                    stroke: "url(#rainbowGradient)",
                    strokeWidth: "0.962264",
                    fill: "none",
                    strokeDasharray: "3.85 3.85",
                    mask: "url(#vector2Mask)"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                    lineNumber: 142,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                transform: "translate(204, 133)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0",
                    stroke: "url(#rainbowGradient)",
                    strokeWidth: "0.962264",
                    fill: "none",
                    strokeDasharray: "3.85 3.85",
                    mask: "url(#vector1Mask)"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isPhase2OrComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                style: {
                    opacity: 1,
                    animation: `fadeIn 0.1s ease-out forwards`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(67, -9)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686",
                            stroke: "#7FCFFF",
                            strokeWidth: "1.5",
                            strokeOpacity: "1",
                            fill: "none",
                            initial: {
                                pathLength: 0
                            },
                            animate: shouldAnimate ? {
                                pathLength: 1
                            } : {
                                pathLength: 0
                            },
                            transition: shouldAnimate ? {
                                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].BLUE_PATH_DURATION,
                                ease: "easeInOut"
                            } : {
                                duration: 0.2
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                            lineNumber: 167,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(204, 133)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                            d: "M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0",
                            stroke: "#7FCFFF",
                            strokeWidth: "1.5",
                            strokeOpacity: "1",
                            fill: "none",
                            initial: {
                                pathLength: 0
                            },
                            animate: shouldAnimate ? {
                                pathLength: 1
                            } : {
                                pathLength: 0
                            },
                            transition: shouldAnimate ? {
                                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].BLUE_PATH_DURATION,
                                ease: "easeInOut"
                            } : {
                                duration: 0.2
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
                lineNumber: 165,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = AnimatedSVG;
AnimatedSVG.displayName = "AnimatedSVG";
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedSVG$React.memo");
__turbopack_context__.k.register(_c1, "AnimatedSVG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HireableLogo",
    ()=>HireableLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const HireableLogo = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "35",
        height: "35",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.05005 0C4.23891 0 4.42004 0.0750243 4.55358 0.208568C4.68712 0.342112 4.76215 0.523237 4.76215 0.712097V15.2878C4.76215 15.4767 4.68712 15.6578 4.55358 15.7914C4.42004 15.9249 4.23891 15.9999 4.05005 15.9999C2.97591 15.9999 1.94576 15.5732 1.18623 14.8137C0.426701 14.0542 0 13.024 0 11.9499L0 4.05005C0 2.97591 0.426701 1.94576 1.18623 1.18623C1.94576 0.426701 2.97591 0 4.05005 0Z",
                fill: "#FB2E6F"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.65781 0H6.31986C5.92658 0 5.60776 0.318817 5.60776 0.712097V6.29761C5.60776 6.69089 5.92658 7.00971 6.31986 7.00971H9.65781C10.0511 7.00971 10.3699 6.69089 10.3699 6.29761V0.712097C10.3699 0.318817 10.0511 0 9.65781 0Z",
                fill: "#FF2FC5"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.9276 4.42842C13.0018 4.42842 14.0319 4.85513 14.7914 5.61466C15.551 6.37419 15.9777 7.40434 15.9777 8.47848V11.95C15.9777 13.0241 15.551 14.0542 14.7914 14.8138C14.0319 15.5733 13.0018 16 11.9276 16C11.7388 16 11.5576 15.925 11.4241 15.7914C11.2906 15.6579 11.2155 15.4768 11.2155 15.2879V5.14052C11.2155 4.95166 11.2906 4.77054 11.4241 4.63699C11.5576 4.50345 11.7388 4.42842 11.9276 4.42842Z",
                fill: "#00A7F8"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.65781 7.85539H6.31986C5.92658 7.85539 5.60776 8.17421 5.60776 8.56749V15.2879C5.60776 15.6812 5.92658 16 6.31986 16H9.65781C10.0511 16 10.3699 15.6812 10.3699 15.2879V8.56749C10.3699 8.17421 10.0511 7.85539 9.65781 7.85539Z",
                fill: "#FF8112"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = HireableLogo;
HireableLogo.displayName = "HireableLogo";
var _c, _c1;
__turbopack_context__.k.register(_c, "HireableLogo$React.memo");
__turbopack_context__.k.register(_c1, "HireableLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoWithAnimation",
    ()=>LogoWithAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$HireableLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx [app-client] (ecmascript)");
;
;
;
;
const LogoWithAnimation = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ shouldAnimate, animationPhase, animationComplete })=>{
    const isComplete = animationPhase === "complete";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-[106px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-flex flex-col items-center justify-center gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid bg-white p-[11.55px]",
                style: {
                    borderColor: isComplete ? "#A8D8F0" : "#d4d4d4",
                    boxShadow: isComplete ? "0 0 12px 4px rgba(0, 167, 248, 0.2)" : "0 0 0 0 rgba(0, 167, 248, 0)",
                    transition: isComplete ? "border-color 0.3s ease-out, box-shadow 0.3s ease-out" : "border-color 0.2s ease-out, box-shadow 0.2s ease-out",
                    willChange: shouldAnimate && !animationComplete ? "box-shadow" : "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[34.69px] w-[34.64px] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                filter: "grayscale(1)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$HireableLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HireableLogo"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                clipPath: shouldAnimate ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                                transition: shouldAnimate ? `clip-path ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].LOGO_COLOR_DURATION}s ease-out ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].LOGO_COLOR_START}s` : "clip-path 0.2s ease-out",
                                willChange: shouldAnimate && !animationComplete ? "clip-path" : "auto"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$HireableLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HireableLogo"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            shouldAnimate && isComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-[72px] left-1/2",
                style: {
                    animation: `popIn 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "feature-capsule-rounded px-4 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-text-s text-sm leading-(--text-s-line-height) font-semibold tracking-(--text-s-letter-spacing) whitespace-nowrap text-[var(--color-matched-green)] [font-style:var(--text-s-font-style)]",
                        children: "Matched"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                    lineNumber: 67,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = LogoWithAnimation;
LogoWithAnimation.displayName = "LogoWithAnimation";
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoWithAnimation$React.memo");
__turbopack_context__.k.register(_c1, "LogoWithAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/PersonAvatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PersonAvatar",
    ()=>PersonAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const POSITIONS = {
    person1: {
        className: "absolute top-[31px] left-[31px]",
        imageSrc: "/images/Jacob-Smith.svg",
        bgColor: "bg-white"
    },
    person2: {
        className: "absolute top-[166px] left-[304px]",
        imageSrc: "/images/Catalina-Ramos.svg",
        bgColor: "bg-neutral-300"
    }
};
const PersonAvatar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ position, shouldAnimate, animationPhase, animationComplete })=>{
    const config = POSITIONS[position];
    const isComplete = animationPhase === "complete";
    const isPhase2OrComplete = animationPhase === "phase2" || animationPhase === "complete";
    const shouldShowColor = position === "person1" ? shouldAnimate : isPhase2OrComplete;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${config.className} z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid bg-white p-[4.77px]`,
        style: {
            borderColor: isComplete ? "#A8D8F0" : "#d4d4d4",
            transition: "border-color 0.3s ease-out"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `size-[63.59px] overflow-hidden rounded-[198.73px] ${config.bgColor}`,
            style: {
                filter: shouldShowColor ? "grayscale(0)" : "grayscale(1)",
                transition: shouldAnimate ? position === "person1" ? "filter 0.3s ease-in-out" : "filter 0.5s ease-in-out" : "filter 0.2s ease-out",
                willChange: shouldAnimate && !animationComplete ? "filter" : "auto"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "size-16 rounded-full object-cover",
                alt: "Profile",
                src: config.imageSrc,
                width: 64,
                height: 64,
                priority: true
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/PersonAvatar.tsx",
                lineNumber: 55,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/PersonAvatar.tsx",
            lineNumber: 43,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/PersonAvatar.tsx",
        lineNumber: 36,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = PersonAvatar;
PersonAvatar.displayName = "PersonAvatar";
var _c, _c1;
__turbopack_context__.k.register(_c, "PersonAvatar$React.memo");
__turbopack_context__.k.register(_c1, "PersonAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StaticContent",
    ()=>StaticContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$HireableLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/HireableLogo.tsx [app-client] (ecmascript)");
;
;
;
;
const StaticContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ isAnimated })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[31px] left-[31px] z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[4.77px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-[63.59px] overflow-hidden rounded-[198.73px] bg-white",
                    style: {
                        filter: isAnimated ? "grayscale(0)" : "grayscale(1)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "size-16 rounded-full object-cover",
                        alt: "Profile",
                        src: "/images/Jacob-Smith.svg",
                        width: 64,
                        height: 64,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[106px] left-1/2 z-10 flex -translate-x-1/2 flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex flex-col items-center justify-center gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[11.55px]",
                        style: {
                            boxShadow: isAnimated ? "0 0 30px 10px rgba(0, 167, 248, 0.6)" : "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[34.69px] w-[34.64px] overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$HireableLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HireableLogo"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isAnimated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[72px] left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border border-gray-100 bg-white px-4 py-2 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-text-s text-sm leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-[var(--color-matched-green)] [font-style:var(--text-s-font-style)]",
                                children: "Matched"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[166px] left-[304px] z-10 inline-flex flex-col items-start gap-[15.9px] overflow-hidden rounded-[158.98px] border-[0.96px] border-solid border-neutral-300 bg-white p-[4.77px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-[63.59px] overflow-hidden rounded-[198.73px] bg-neutral-300",
                    style: {
                        filter: isAnimated ? "grayscale(0)" : "grayscale(1)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "size-16 rounded-full object-cover",
                        alt: "Profile",
                        src: "/images/Catalina-Ramos.svg",
                        width: 64,
                        height: 64,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "pointer-events-none absolute inset-0 size-full",
                style: {
                    zIndex: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(67, -9)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0.483116 0V119.328C0.483116 132.135 10.8653 142.517 23.6723 142.517H137.686",
                            stroke: isAnimated ? "#00A7F8" : "#d4d4d4",
                            strokeWidth: isAnimated ? "1.5" : "0.962264",
                            fill: "none",
                            strokeDasharray: isAnimated ? "none" : "3.85 3.85"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        transform: "translate(204, 133)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M136.705 142V23.5865C136.705 10.8259 126.36 0.481425 113.6 0.481425H0",
                            stroke: isAnimated ? "#00A7F8" : "#d4d4d4",
                            strokeWidth: isAnimated ? "1.5" : "0.962264",
                            fill: "none",
                            strokeDasharray: isAnimated ? "none" : "3.85 3.85"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true));
_c1 = StaticContent;
StaticContent.displayName = "StaticContent";
var _c, _c1;
__turbopack_context__.k.register(_c, "StaticContent$React.memo");
__turbopack_context__.k.register(_c1, "StaticContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/useMatchAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMatchAnimation",
    ()=>useMatchAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/constants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useMatchAnimation(shouldAnimate) {
    _s();
    const [animationPhase, setAnimationPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [animationComplete, setAnimationComplete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMatchAnimation.useEffect": ()=>{
            if (shouldAnimate) {
                setAnimationPhase("phase1");
                setAnimationComplete(false);
                // Phase 2: Blue lines appear
                const phase2Timer = setTimeout({
                    "useMatchAnimation.useEffect.phase2Timer": ()=>{
                        setAnimationPhase("phase2");
                    }
                }["useMatchAnimation.useEffect.phase2Timer"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].GREY_LINES_HIDE * 1000);
                // Complete: Remove will-change after all animations
                const completeTimer = setTimeout({
                    "useMatchAnimation.useEffect.completeTimer": ()=>{
                        setAnimationPhase("complete");
                        setAnimationComplete(true);
                    }
                }["useMatchAnimation.useEffect.completeTimer"], (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_PHASES"].MATCHED_POPUP + 0.5) * 1000);
                return ({
                    "useMatchAnimation.useEffect": ()=>{
                        clearTimeout(phase2Timer);
                        clearTimeout(completeTimer);
                    }
                })["useMatchAnimation.useEffect"];
            } else {
                setAnimationPhase("idle");
                setAnimationComplete(false);
            }
        }
    }["useMatchAnimation.useEffect"], [
        shouldAnimate
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useMatchAnimation.useMemo[containerStyle]": ()=>({
                willChange: shouldAnimate && !animationComplete ? "contents" : "auto"
            })
    }["useMatchAnimation.useMemo[containerStyle]"], [
        shouldAnimate,
        animationComplete
    ]);
    return {
        animationPhase,
        animationComplete,
        containerStyle
    };
}
_s(useMatchAnimation, "+QTqLcGgRuhTQDC2n6Ih3FKqOos=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientMatchAnimation",
    ()=>ClientMatchAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$AnimatedSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/AnimatedSVG.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$LogoWithAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/LogoWithAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$PersonAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/PersonAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$StaticContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/StaticContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$useMatchAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/useMatchAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const ClientMatchAnimation = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ shouldAnimate })=>{
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { animationPhase, animationComplete, containerStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$useMatchAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatchAnimation"])(shouldAnimate);
    // Use reduced motion: skip animations entirely
    if (prefersReducedMotion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$StaticContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StaticContent"], {
                isAnimated: shouldAnimate
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pathAnimationStyles"]
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]",
                style: containerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$AnimatedSVG$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedSVG"], {
                        shouldAnimate: shouldAnimate,
                        animationPhase: animationPhase
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$PersonAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonAvatar"], {
                        position: "person1",
                        shouldAnimate: shouldAnimate,
                        animationPhase: animationPhase,
                        animationComplete: animationComplete
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$LogoWithAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoWithAnimation"], {
                        shouldAnimate: shouldAnimate,
                        animationPhase: animationPhase,
                        animationComplete: animationComplete
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$PersonAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonAvatar"], {
                        position: "person2",
                        shouldAnimate: shouldAnimate,
                        animationPhase: animationPhase,
                        animationComplete: animationComplete
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
}, "a5pgpZKQ5mCAWrLpqeb0AwAuTVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$useMatchAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatchAnimation"]
    ];
})), "a5pgpZKQ5mCAWrLpqeb0AwAuTVc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$useMatchAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMatchAnimation"]
    ];
});
_c1 = ClientMatchAnimation;
ClientMatchAnimation.displayName = "ClientMatchAnimation";
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientMatchAnimation$React.memo");
__turbopack_context__.k.register(_c1, "ClientMatchAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$ClientMatchAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatCardContent",
    ()=>ChatCardContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const ChatCardContent = ({ card })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "size-10 shrink-0 overflow-hidden rounded-full",
                style: {
                    background: card.bgColor
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: card.avatar,
                    alt: card.name,
                    width: 40,
                    height: 40,
                    className: "size-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col items-start gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-['Inter'] text-[14px] leading-[120%] font-semibold tracking-[0.2px] text-neutral-900",
                        children: card.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-['Inter'] text-[12px] leading-[120%] font-normal tracking-[0.2px] text-neutral-900",
                        children: card.message
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
_c = ChatCardContent;
var _c;
__turbopack_context__.k.register(_c, "ChatCardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * TalentChatMessages Constants
 */ __turbopack_context__.s([
    "ANIMATION_TIMING",
    ()=>ANIMATION_TIMING,
    "CARD_BASE_STYLE",
    ()=>CARD_BASE_STYLE,
    "CARD_DIMENSIONS",
    ()=>CARD_DIMENSIONS,
    "CONVERSATION_CARDS",
    ()=>CONVERSATION_CARDS,
    "STACK_CONFIG",
    ()=>STACK_CONFIG
]);
const CONVERSATION_CARDS = [
    {
        id: 1,
        name: "Marc Reyes",
        message: "Given research time, can we adjust to 8 posts/week?",
        avatar: "/images/Marc-Reyes.svg",
        bgColor: "#D2D8DB"
    },
    {
        id: 2,
        name: "Ethan Carter",
        message: "8 posts/week is fine. I'm going to adjust the contract.",
        avatar: "/images/Ethan-Carter.svg",
        bgColor: "#D5D5D5"
    },
    {
        id: 3,
        name: "Marc Reyes",
        message: "Thanks! What about the revision policy?",
        avatar: "/images/Marc-Reyes.svg",
        bgColor: "#D2D8DB"
    },
    {
        id: 4,
        name: "Ethan Carter",
        message: "Fantastic — let's start next Monday!",
        avatar: "/images/Ethan-Carter.svg",
        bgColor: "#D5D5D5"
    },
    {
        id: 5,
        name: "Marc Reyes",
        message: "Thanks, looking forward to hitting the ground running.",
        avatar: "/images/Marc-Reyes.svg",
        bgColor: "#D2D8DB"
    }
];
const CARD_DIMENSIONS = {
    width: 289,
    height: 81,
    topCardY: 25,
    bottomCardY: 115,
    offScreenX: 395
};
const ANIMATION_TIMING = {
    enterDuration: 0.4,
    resetDuration: 0.5,
    card2EnterDelay: 0.7,
    card3EnterDelay: 1.6,
    card4EnterDelay: 2.5,
    card5EnterDelay: 3.4
};
const STACK_CONFIG = {
    stackOffset: 12,
    scaleDecrement: 0.03
};
const CARD_BASE_STYLE = {
    background: "radial-gradient(150.17% 150.17% at 50% 50%, #FFFFFF 0%, #E1E1E1 100%)"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/useStackAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStackAnimation",
    ()=>useStackAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/constants.ts [app-client] (ecmascript)");
;
const useStackAnimation = ()=>{
    const { bottomCardY } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_DIMENSIONS"];
    const { stackOffset, scaleDecrement } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STACK_CONFIG"];
    const getStackStyle = (stackPosition)=>({
            scale: 1 - stackPosition * scaleDecrement,
            y: bottomCardY + stackPosition * stackOffset
        });
    return {
        getStackStyle
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentChatMessages",
    ()=>TalentChatMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/ChatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$useStackAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/useStackAnimation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TalentChatMessages = ({ shouldAnimate })=>{
    _s();
    const { getStackStyle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$useStackAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStackAnimation"])();
    const { width: cardWidth, height: cardHeight, topCardY, bottomCardY, offScreenX } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_DIMENSIONS"];
    const { enterDuration, resetDuration, card2EnterDelay, card3EnterDelay, card4EnterDelay, card5EnterDelay } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANIMATION_TIMING"];
    const cardClassName = "absolute flex items-start gap-3 rounded-[12px] border border-[#C3C3C3] p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.1)]";
    const cardStyle = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CARD_BASE_STYLE"],
        width: cardWidth,
        height: cardHeight,
        transformOrigin: "center top"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-[264px] w-[408px] items-center justify-center overflow-hidden rounded-lg bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: cardClassName,
                style: {
                    ...cardStyle,
                    left: `calc(50% - ${cardWidth / 2}px - 0.5px)`
                },
                initial: {
                    top: topCardY,
                    scale: 1,
                    filter: "blur(0px)",
                    zIndex: 10
                },
                animate: {
                    top: shouldAnimate ? [
                        topCardY,
                        topCardY,
                        bottomCardY,
                        bottomCardY,
                        getStackStyle(1).y,
                        getStackStyle(1).y,
                        getStackStyle(2).y,
                        getStackStyle(2).y,
                        getStackStyle(3).y
                    ] : topCardY,
                    scale: shouldAnimate ? [
                        1,
                        1,
                        1,
                        1,
                        getStackStyle(1).scale,
                        getStackStyle(1).scale,
                        getStackStyle(2).scale,
                        getStackStyle(2).scale,
                        getStackStyle(3).scale
                    ] : 1,
                    filter: "blur(0px)",
                    zIndex: 10
                },
                transition: {
                    top: shouldAnimate ? {
                        duration: 3.5,
                        delay: 0,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.085,
                            0.2,
                            0.34,
                            0.457,
                            0.6,
                            0.714,
                            0.857,
                            0.97
                        ]
                    } : {
                        duration: resetDuration
                    },
                    scale: shouldAnimate ? {
                        duration: 3.5,
                        delay: 0,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.085,
                            0.2,
                            0.34,
                            0.457,
                            0.6,
                            0.714,
                            0.857,
                            0.97
                        ]
                    } : {
                        duration: resetDuration
                    },
                    filter: {
                        duration: 0.3,
                        delay: shouldAnimate ? 0.1 : 0
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatCardContent"], {
                    card: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONVERSATION_CARDS"][0]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: cardClassName,
                style: cardStyle,
                initial: {
                    left: offScreenX,
                    top: topCardY,
                    scale: 1,
                    opacity: 0,
                    zIndex: 11
                },
                animate: {
                    left: shouldAnimate ? [
                        offScreenX,
                        `calc(50% - ${cardWidth / 2}px - 0.5px)`
                    ] : offScreenX,
                    top: shouldAnimate ? [
                        topCardY,
                        topCardY,
                        topCardY,
                        bottomCardY,
                        bottomCardY,
                        getStackStyle(1).y,
                        getStackStyle(1).y,
                        getStackStyle(2).y
                    ] : topCardY,
                    scale: shouldAnimate ? [
                        1,
                        1,
                        1,
                        1,
                        1,
                        getStackStyle(1).scale,
                        getStackStyle(1).scale,
                        getStackStyle(2).scale
                    ] : 1,
                    opacity: shouldAnimate ? 1 : 0,
                    zIndex: 11
                },
                transition: {
                    left: shouldAnimate ? {
                        duration: enterDuration,
                        delay: card2EnterDelay,
                        ease: "easeOut"
                    } : {
                        duration: resetDuration
                    },
                    opacity: shouldAnimate ? {
                        duration: 0.3,
                        delay: card2EnterDelay
                    } : {
                        duration: resetDuration
                    },
                    top: shouldAnimate ? {
                        duration: 2.7,
                        delay: card2EnterDelay,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.148,
                            0.185,
                            0.333,
                            0.518,
                            0.666,
                            0.851,
                            1
                        ]
                    } : {
                        duration: resetDuration
                    },
                    scale: shouldAnimate ? {
                        duration: 2.7,
                        delay: card2EnterDelay,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.148,
                            0.185,
                            0.333,
                            0.518,
                            0.666,
                            0.851,
                            1
                        ]
                    } : {
                        duration: resetDuration
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatCardContent"], {
                    card: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONVERSATION_CARDS"][1]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: cardClassName,
                style: cardStyle,
                initial: {
                    left: offScreenX,
                    top: topCardY,
                    scale: 1,
                    opacity: 0,
                    zIndex: 12
                },
                animate: {
                    left: shouldAnimate ? [
                        offScreenX,
                        `calc(50% - ${cardWidth / 2}px - 0.5px)`
                    ] : offScreenX,
                    top: shouldAnimate ? [
                        topCardY,
                        topCardY,
                        topCardY,
                        bottomCardY,
                        bottomCardY,
                        getStackStyle(1).y
                    ] : topCardY,
                    scale: shouldAnimate ? [
                        1,
                        1,
                        1,
                        1,
                        1,
                        getStackStyle(1).scale
                    ] : 1,
                    opacity: shouldAnimate ? 1 : 0,
                    zIndex: 12
                },
                transition: {
                    left: shouldAnimate ? {
                        duration: enterDuration,
                        delay: card3EnterDelay,
                        ease: "easeOut"
                    } : {
                        duration: resetDuration
                    },
                    opacity: shouldAnimate ? {
                        duration: 0.3,
                        delay: card3EnterDelay
                    } : {
                        duration: resetDuration
                    },
                    top: shouldAnimate ? {
                        duration: 1.8,
                        delay: card3EnterDelay,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.222,
                            0.277,
                            0.5,
                            0.777,
                            1
                        ]
                    } : {
                        duration: resetDuration
                    },
                    scale: shouldAnimate ? {
                        duration: 1.8,
                        delay: card3EnterDelay,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.222,
                            0.277,
                            0.5,
                            0.777,
                            1
                        ]
                    } : {
                        duration: resetDuration
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatCardContent"], {
                    card: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONVERSATION_CARDS"][2]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: cardClassName,
                style: {
                    ...cardStyle,
                    zIndex: 13
                },
                initial: {
                    left: offScreenX,
                    top: topCardY,
                    opacity: 0
                },
                animate: {
                    left: shouldAnimate ? [
                        offScreenX,
                        `calc(50% - ${cardWidth / 2}px - 0.5px)`
                    ] : offScreenX,
                    top: shouldAnimate ? [
                        topCardY,
                        topCardY,
                        topCardY,
                        bottomCardY
                    ] : topCardY,
                    opacity: shouldAnimate ? 1 : 0
                },
                transition: {
                    left: shouldAnimate ? {
                        duration: enterDuration,
                        delay: card4EnterDelay,
                        ease: "easeOut"
                    } : {
                        duration: resetDuration
                    },
                    opacity: shouldAnimate ? {
                        duration: 0.3,
                        delay: card4EnterDelay
                    } : {
                        duration: resetDuration
                    },
                    top: shouldAnimate ? {
                        duration: 0.9,
                        delay: card4EnterDelay,
                        ease: "easeInOut",
                        times: [
                            0,
                            0.444,
                            0.555,
                            1
                        ]
                    } : {
                        duration: resetDuration
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatCardContent"], {
                    card: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONVERSATION_CARDS"][3]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: cardClassName,
                style: {
                    ...cardStyle,
                    top: topCardY,
                    zIndex: 14
                },
                initial: {
                    left: offScreenX,
                    opacity: 0
                },
                animate: {
                    left: shouldAnimate ? `calc(50% - ${cardWidth / 2}px - 0.5px)` : offScreenX,
                    opacity: shouldAnimate ? 1 : 0
                },
                transition: {
                    left: shouldAnimate ? {
                        duration: enterDuration,
                        delay: card5EnterDelay,
                        ease: "easeOut"
                    } : {
                        duration: resetDuration
                    },
                    opacity: shouldAnimate ? {
                        duration: 0.3,
                        delay: card5EnterDelay
                    } : {
                        duration: resetDuration
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$ChatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatCardContent"], {
                    card: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONVERSATION_CARDS"][4]
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TalentChatMessages, "Cxm+lQNnhPk2YPvIcHGFeLyGs/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$useStackAnimation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStackAnimation"]
    ];
});
_c = TalentChatMessages;
var _c;
__turbopack_context__.k.register(_c, "TalentChatMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * TalentChatMessages - Re-export from folder structure
 *
 * This file maintains backward compatibility.
 * The component has been split into smaller files in the TalentChatMessages/ folder.
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$TalentChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentScheduleAnimation",
    ()=>TalentScheduleAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TalentScheduleAnimation = ({ shouldAnimate })=>{
    _s();
    const [isJoinMeetingPressed, setIsJoinMeetingPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Animation sequence - only for button press
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TalentScheduleAnimation.useEffect": ()=>{
            if (shouldAnimate) {
                // Press join meeting button after unblur
                const joinTimer = setTimeout({
                    "TalentScheduleAnimation.useEffect.joinTimer": ()=>{
                        setIsJoinMeetingPressed(true);
                    }
                }["TalentScheduleAnimation.useEffect.joinTimer"], 800);
                return ({
                    "TalentScheduleAnimation.useEffect": ()=>{
                        clearTimeout(joinTimer);
                    }
                })["TalentScheduleAnimation.useEffect"];
            } else {
                setIsJoinMeetingPressed(false);
            }
        }
    }["TalentScheduleAnimation.useEffect"], [
        shouldAnimate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "relative flex h-[264px] w-[408px] flex-col items-center justify-center overflow-hidden rounded-lg bg-white p-4",
        initial: {
            filter: "blur(0px)"
        },
        animate: {
            filter: "blur(0px)"
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full max-w-[360px] flex-col justify-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center gap-3 px-2 sm:gap-4",
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: shouldAnimate ? 1 : 0,
                        y: shouldAnimate ? 0 : -10
                    },
                    transition: {
                        duration: 0.4,
                        ease: "easeOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/Camille-Mercado.svg",
                            alt: "Camille Mercado",
                            width: 48,
                            height: 48,
                            className: "size-10 shrink-0 rounded-full object-cover sm:size-12"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900",
                                    children: "Camille Mercado"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
                                    children: "Sales Manager"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "relative w-full overflow-hidden rounded border border-neutral-200 bg-white p-3 shadow-[0px_2px_8px_rgba(0,0,0,0.08)] sm:p-4",
                    initial: {
                        y: 0
                    },
                    animate: {
                        y: shouldAnimate ? 20 : 0
                    },
                    transition: {
                        duration: 0.4,
                        ease: "easeOut"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-client absolute top-0 bottom-0 left-0 w-1"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full flex-col gap-3 pl-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 flex-1 flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-['Inter'] text-base leading-[120%] font-bold tracking-[0.2px] text-neutral-900",
                                                    children: "Interview Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
                                                    children: "Jan 30, 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "More options",
                                            className: "cursor-pointer text-neutral-700 hover:text-neutral-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z",
                                                        fill: "currentColor",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z",
                                                        fill: "currentColor",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z",
                                                        fill: "currentColor",
                                                        stroke: "currentColor",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-schedule-time-bg flex items-center rounded-full border border-solid border-white px-3 py-2 shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-schedule-time-text font-['Inter'] text-xs leading-[120%] font-normal tracking-[0.2px]",
                                                children: "9:30 am - 10:00 am"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                            animate: {
                                                scale: isJoinMeetingPressed ? 0.95 : 1
                                            },
                                            transition: {
                                                duration: 0.1
                                            },
                                            className: `border-client flex h-[32px] cursor-pointer items-center justify-center gap-2 rounded-[4px] border px-[12px] py-[6px] font-['Inter'] text-xs font-medium whitespace-nowrap transition-colors ${isJoinMeetingPressed ? "bg-client text-white" : "text-client bg-[rgba(194,235,255,0.4)]"}`,
                                            children: "Join meeting"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TalentScheduleAnimation, "Y4sUGocXptkWi4HtPEYxpRttUxs=");
_c = TalentScheduleAnimation;
var _c;
__turbopack_context__.k.register(_c, "TalentScheduleAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * FeaturesSection Components Barrel Export
 *
 * Re-exports all extracted components for clean imports.
 */ // Card sub-components for LastCard
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedProgressCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$SlotDigit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/SlotDigit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentPaymentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx [app-client] (ecmascript)");
// Card sub-components for FirstCard
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$CandidateCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx [app-client] (ecmascript)");
// Existing components
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentScheduleAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FeaturesSection Constants
 *
 * Centralized content data for the features section cards.
 */ // ============================================
// LastCard Constants
// ============================================
// Talent role content data for LastCard
__turbopack_context__.s([
    "CANDIDATE_CARDS",
    ()=>CANDIDATE_CARDS,
    "FIRST_CARD_CLIENT_CONTENT",
    ()=>FIRST_CARD_CLIENT_CONTENT,
    "FIRST_CARD_TALENT_CONTENT",
    ()=>FIRST_CARD_TALENT_CONTENT,
    "INITIAL_CARDS",
    ()=>INITIAL_CARDS,
    "LAST_CARD_CLIENT_CONTENT",
    ()=>LAST_CARD_CLIENT_CONTENT,
    "LAST_CARD_TALENT_CONTENT",
    ()=>LAST_CARD_TALENT_CONTENT
]);
const LAST_CARD_TALENT_CONTENT = {
    title: "Get paid during test period",
    description: "30-60-90 day test periods with full pay while you both figure out if it's a good fit."
};
const LAST_CARD_CLIENT_CONTENT = {
    title: "Test before you commit.",
    description: 'End the "seemed great in interviews, terrible at work" cycle.'
};
const CANDIDATE_CARDS = [
    {
        name: "Camille Mercado",
        role: "Marketing Specialist",
        salary: "$1,780 /mo",
        experience: "2-5 years",
        match: "82% MATCHED",
        avatar: "/images/Camille-Mercado.svg",
        position: "-top-8"
    },
    {
        name: "Jethro Soriano",
        role: "Graphic Designer",
        salary: "$1,980 /mo",
        experience: "2-5 years",
        match: "84% MATCHED",
        avatar: "/images/Jethro-Soriano.svg",
        position: "top-[214px]"
    }
];
const INITIAL_CARDS = [
    ...CANDIDATE_CARDS.map((card, idx)=>({
            ...card,
            id: idx
        })),
    {
        name: "Michaela Reyes",
        role: "Sales Manager",
        salary: "$1,680 /mo",
        experience: "2-5 years",
        match: "86% MATCHED",
        avatar: "/images/Michaela.svg",
        id: 2
    }
];
const FIRST_CARD_TALENT_CONTENT = {
    title: "Book calls instantly.",
    description: 'No more "let me check my calendar" back-and-forth.'
};
const FIRST_CARD_CLIENT_CONTENT = {
    title: "See every candidate. Miss nothing.",
    description: 'No more "Wait, who was that designer from last week?" moments.'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FirstCard",
    ()=>FirstCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useViewportCenter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$CandidateCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/CandidateCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentScheduleAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentScheduleAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function FirstCardComponent() {
    _s();
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INITIAL_CARDS"]);
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 1024px)");
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isCarouselCentered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"])(carouselRef, {
        threshold: 0.2,
        enabled: isMobile
    });
    const isTalent = selectedRole === "talent";
    const content = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIRST_CARD_TALENT_CONTENT"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIRST_CARD_CLIENT_CONTENT"];
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FirstCardComponent.useCallback[handleMouseEnter]": ()=>setIsHovering(true)
    }["FirstCardComponent.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FirstCardComponent.useCallback[handleMouseLeave]": ()=>setIsHovering(false)
    }["FirstCardComponent.useCallback[handleMouseLeave]"], []);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FirstCardComponent.useCallback[handleNext]": ()=>{
            setCards({
                "FirstCardComponent.useCallback[handleNext]": (prev)=>{
                    const newCards = [
                        ...prev
                    ];
                    const first = newCards.shift();
                    if (first) newCards.push(first);
                    return newCards;
                }
            }["FirstCardComponent.useCallback[handleNext]"]);
        }
    }["FirstCardComponent.useCallback[handleNext]"], []);
    const wasAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirstCardComponent.useEffect": ()=>{
            const shouldAnimate = isMobile ? isCarouselCentered : isHovering;
            if (!shouldAnimate) {
                wasAnimatingRef.current = false;
                return;
            }
            if (!wasAnimatingRef.current) {
                wasAnimatingRef.current = true;
                handleNext();
            }
            const interval = setInterval(handleNext, 1800);
            return ({
                "FirstCardComponent.useEffect": ()=>clearInterval(interval)
            })["FirstCardComponent.useEffect"];
        }
    }["FirstCardComponent.useEffect"], [
        isHovering,
        isCarouselCentered,
        isMobile,
        handleNext
    ]);
    const shouldAnimate = isMobile ? isCarouselCentered : isHovering;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        title: content.title,
        description: content.description,
        cardRef: carouselRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: isTalent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentScheduleAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentScheduleAnimation"], {
            shouldAnimate: shouldAnimate
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[269.43px] w-[408px] overflow-hidden rounded-[7.7px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-full items-center justify-center",
                children: cards.slice(0, 3).map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$CandidateCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CandidateCard"], {
                        card: card,
                        index: index
                    }, card.id, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx",
                        lineNumber: 80,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx",
                lineNumber: 78,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(FirstCardComponent, "LuJMLOOf3ewlsqaE48sTUWPj0B0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"]
    ];
});
_c = FirstCardComponent;
const FirstCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(FirstCardComponent);
_c1 = FirstCard;
FirstCard.displayName = "FirstCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "FirstCardComponent");
__turbopack_context__.k.register(_c1, "FirstCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LastCard",
    ()=>LastCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedProgressCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/AnimatedProgressCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentPaymentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentPaymentCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function LastCardComponent() {
    _s();
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const isTalent = selectedRole === "talent";
    const content = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAST_CARD_TALENT_CONTENT"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAST_CARD_CLIENT_CONTENT"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        title: content.title,
        description: content.description,
        children: isTalent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentPaymentCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentPaymentCard"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx",
            lineNumber: 22,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$AnimatedProgressCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedProgressCard"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx",
            lineNumber: 22,
            columnNumber: 43
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(LastCardComponent, "KPymmMLBhLHJWV7Z5zNyeC7+QL8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"]
    ];
});
_c = LastCardComponent;
const LastCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(LastCardComponent);
_c1 = LastCard;
LastCard.displayName = "LastCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "LastCardComponent");
__turbopack_context__.k.register(_c1, "LastCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MiddleCard",
    ()=>MiddleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useViewportCenter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/components/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$ClientMatchAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/ClientMatchAnimation/ClientMatchAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$TalentChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/components/TalentChatMessages/TalentChatMessages.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const TALENT_CONTENT = {
    title: "Negotiate upfront, openly.",
    description: "Comment on rates and KPIs before you start."
};
const CLIENT_CONTENT = {
    title: "Match minds, not just skills.",
    description: "Stop hiring great portfolios attached to difficult personalities."
};
const MiddleCardComponent = ()=>{
    _s();
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 1024px)");
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isTalent = selectedRole === "talent";
    const content = isTalent ? TALENT_CONTENT : CLIENT_CONTENT;
    const isCentered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"])(cardRef, {
        threshold: 0.2,
        enabled: isMobile
    });
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MiddleCardComponent.useCallback[handleMouseEnter]": ()=>setIsHovered(true)
    }["MiddleCardComponent.useCallback[handleMouseEnter]"], []);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MiddleCardComponent.useCallback[handleMouseLeave]": ()=>setIsHovered(false)
    }["MiddleCardComponent.useCallback[handleMouseLeave]"], []);
    const shouldAnimate = isMobile ? isCentered : isHovered;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        title: content.title,
        description: content.description,
        cardRef: cardRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sr-only",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/Jacob-Smith.svg",
                        alt: "",
                        width: 1,
                        height: 1
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/Catalina-Ramos.svg",
                        alt: "",
                        width: 1,
                        height: 1
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isTalent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$TalentChatMessages$2f$TalentChatMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentChatMessages"], {
                shouldAnimate: shouldAnimate
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$components$2f$ClientMatchAnimation$2f$ClientMatchAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientMatchAnimation"], {
                shouldAnimate: shouldAnimate
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MiddleCardComponent, "NhrkpYRqki6ysc89Z+uIKyO/6n4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useViewportCenter"]
    ];
});
_c = MiddleCardComponent;
const MiddleCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MiddleCardComponent);
_c1 = MiddleCard;
MiddleCard.displayName = "MiddleCard";
var _c, _c1;
__turbopack_context__.k.register(_c, "MiddleCardComponent");
__turbopack_context__.k.register(_c1, "MiddleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesSection",
    ()=>FeaturesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FirstCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$LastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$MiddleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Images to preload for faster display
const PRELOAD_IMAGES = [
    // FirstCard images
    "/images/Camille-Mercado.svg",
    "/images/Jethro-Soriano.svg",
    "/images/Michaela.svg",
    "/icons/icon-components-3.svg",
    // MiddleCard images
    "/images/Jacob-Smith.svg",
    "/images/Catalina-Ramos.svg",
    "/images/Marc-Reyes.svg",
    "/images/Ethan-Carter.svg",
    // LastCard images
    "/images/Isabel-Reyes.svg",
    "/icons/component-18-7.svg",
    "/icons/icon-calendar.svg"
];
const FeaturesSectionComponent = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Preload images immediately on mount using both Image API and link preload
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturesSectionComponent.useEffect": ()=>{
            // Use Image API for caching
            PRELOAD_IMAGES.forEach({
                "FeaturesSectionComponent.useEffect": (src)=>{
                    const img = new Image();
                    img.src = src;
                }
            }["FeaturesSectionComponent.useEffect"]);
            // Also add link preload for priority loading
            PRELOAD_IMAGES.forEach({
                "FeaturesSectionComponent.useEffect": (src)=>{
                    const link = document.createElement("link");
                    link.rel = "preload";
                    link.as = "image";
                    link.href = src;
                    document.head.appendChild(link);
                }
            }["FeaturesSectionComponent.useEffect"]);
        }
    }["FeaturesSectionComponent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "no-drag -mt-20 flex w-full flex-col items-center justify-center gap-56 px-4 py-20 sm:-mt-32 sm:gap-80 sm:px-10 sm:py-32 lg:-mt-40 lg:flex-row lg:items-start lg:gap-10 lg:px-20 lg:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FirstCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirstCard"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$MiddleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiddleCard"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$LastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LastCard"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeaturesSectionComponent, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = FeaturesSectionComponent;
const FeaturesSection = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(FeaturesSectionComponent);
_c1 = FeaturesSection;
FeaturesSection.displayName = "FeaturesSection";
var _c, _c1;
__turbopack_context__.k.register(_c, "FeaturesSectionComponent");
__turbopack_context__.k.register(_c1, "FeaturesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FeaturesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FirstCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$LastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$MiddleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FeaturesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturesSection"],
    "FirstCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FirstCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FirstCard"],
    "LastCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$LastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LastCard"],
    "MiddleCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$MiddleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MiddleCard"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FeaturesSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FeaturesSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$FirstCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/FirstCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$LastCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/LastCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesSection$2f$MiddleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/MiddleCard.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesSection/index.ts [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesSection/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_features_waitlist_34577286._.js.map