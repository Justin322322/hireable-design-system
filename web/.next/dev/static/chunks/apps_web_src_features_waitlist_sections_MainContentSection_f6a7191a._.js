(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/features/waitlist/sections/MainContentSection/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientRoles",
    ()=>clientRoles,
    "talentCountries",
    ()=>talentCountries
]);
const clientRoles = [
    {
        text: "Developers.",
        image: "/images/roles/developer.svg"
    },
    {
        text: "Designers.",
        image: "/images/roles/designers.svg"
    },
    {
        text: "Marketers.",
        image: "/images/roles/marketers.svg"
    },
    {
        text: "VAs.",
        image: "/images/roles/va.svg"
    },
    {
        text: "Writers.",
        image: "/images/roles/writer.svg"
    },
    {
        text: "Analysts.",
        image: "/images/roles/analyst.svg"
    }
];
const talentCountries = [
    {
        text: "USA.",
        image: "/images/countries/USA.svg"
    },
    {
        text: "Canada.",
        image: "/images/countries/CANADA.svg"
    },
    {
        text: "UK.",
        image: "/images/countries/UK.svg"
    },
    {
        text: "Australia.",
        image: "/images/countries/AUSTRALIA.svg"
    },
    {
        text: "Germany.",
        image: "/images/countries/GERMANY.svg"
    },
    {
        text: "Everywhere.",
        image: "/images/countries/EVERYWHERE.svg"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentSection",
    ()=>MainContentSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/MainContentSection/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Animation variants - moved outside component for performance
const SECTION_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 32,
        filter: "blur(10px)",
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
            duration: 1,
            ease: [
                0.22,
                1,
                0.36,
                1
            ],
            delay: 0.05
        }
    }
};
const CONTAINER_VARIANTS = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3,
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
        transition: {
            duration: 0.6,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const MainContentSectionComponent = ()=>{
    _s();
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSectionInView, setIsSectionInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use hysteresis: enter at 30%, exit only when completely out of viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContentSectionComponent.useEffect": ()=>{
            const checkVisibility = {
                "MainContentSectionComponent.useEffect.checkVisibility": ()=>{
                    if (!sectionRef.current) return;
                    const rect = sectionRef.current.getBoundingClientRect();
                    const viewportHeight = window.innerHeight;
                    const elementHeight = rect.height;
                    const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
                    const visibleRatio = Math.max(0, visibleHeight / elementHeight);
                    if (!isActiveRef.current && visibleRatio >= 0.3) {
                        // Enter: need 30% visible
                        isActiveRef.current = true;
                        setIsSectionInView(true);
                    } else if (isActiveRef.current && visibleRatio <= 0) {
                        // Exit: only when completely out of viewport
                        isActiveRef.current = false;
                        setIsSectionInView(false);
                    }
                }
            }["MainContentSectionComponent.useEffect.checkVisibility"];
            const handleScroll = {
                "MainContentSectionComponent.useEffect.handleScroll": ()=>{
                    if (rafRef.current) return;
                    rafRef.current = requestAnimationFrame({
                        "MainContentSectionComponent.useEffect.handleScroll": ()=>{
                            checkVisibility();
                            rafRef.current = null;
                        }
                    }["MainContentSectionComponent.useEffect.handleScroll"]);
                }
            }["MainContentSectionComponent.useEffect.handleScroll"];
            checkVisibility();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "MainContentSectionComponent.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                }
            })["MainContentSectionComponent.useEffect"];
        }
    }["MainContentSectionComponent.useEffect"], []);
    // For kicking off the text animation cycle once
    const isInViewOnce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        once: true,
        amount: 0.2
    });
    // For pausing/resuming the cycle when out of view
    const isCurrentlyInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef);
    const isTalent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainContentSectionComponent.useMemo[isTalent]": ()=>selectedRole === "talent"
    }["MainContentSectionComponent.useMemo[isTalent]"], [
        selectedRole
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainContentSectionComponent.useMemo[items]": ()=>isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["talentCountries"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clientRoles"]
    }["MainContentSectionComponent.useMemo[items]"], [
        isTalent
    ]);
    // Reset index when role changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContentSectionComponent.useEffect": ()=>{
            setCurrentIndex(0);
            setIsExiting(false);
        }
    }["MainContentSectionComponent.useEffect"], [
        selectedRole
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainContentSectionComponent.useEffect": ()=>{
            // Start the animation cycle when component mounts or comes into view
            if (!isInViewOnce) return;
            // Pause if scrolled out of view
            if (!isCurrentlyInView) return;
            let timeoutId;
            const timer = setInterval({
                "MainContentSectionComponent.useEffect.timer": ()=>{
                    // Trigger exit animation
                    setIsExiting(true);
                    // Wait for exit animation to complete before changing index
                    timeoutId = setTimeout({
                        "MainContentSectionComponent.useEffect.timer": ()=>{
                            setCurrentIndex({
                                "MainContentSectionComponent.useEffect.timer": (prev)=>{
                                    // Loop back to 0 after reaching the end
                                    return (prev + 1) % items.length;
                                }
                            }["MainContentSectionComponent.useEffect.timer"]);
                            setIsExiting(false);
                        }
                    }["MainContentSectionComponent.useEffect.timer"], 400); // Exit animation duration (matches the transition duration)
                }
            }["MainContentSectionComponent.useEffect.timer"], 1400); // 600ms entrance + 400ms hold + 400ms exit
            return ({
                "MainContentSectionComponent.useEffect": ()=>{
                    clearInterval(timer);
                    if (timeoutId) clearTimeout(timeoutId);
                }
            })["MainContentSectionComponent.useEffect"];
        }
    }["MainContentSectionComponent.useEffect"], [
        isInViewOnce,
        isCurrentlyInView,
        items.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        className: "relative z-30 flex w-full flex-col items-center gap-2.5 px-4 pt-20 pb-12 sm:px-10 sm:pt-32 sm:pb-16 lg:px-20 lg:pt-40 lg:pb-20",
        initial: "hidden",
        animate: isSectionInView ? "visible" : "hidden",
        variants: SECTION_VARIANTS,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex w-full max-w-[1352px] flex-col items-start gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "-mt-px flex items-center justify-center self-stretch text-center font-['DM_Sans',sans-serif] text-2xl leading-[1.2] font-semibold text-neutral-900 sm:text-3xl lg:text-[40px]",
                        style: {
                            fontVariationSettings: "'opsz' 14"
                        },
                        children: isTalent ? "Time to work globally" : "Time to hire differently"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative flex w-full flex-wrap items-center justify-center gap-x-1 gap-y-0",
                        initial: "hidden",
                        animate: isSectionInView ? "visible" : "hidden",
                        variants: CONTAINER_VARIANTS,
                        children: items.map((item, index)=>{
                            const isActive = index === currentIndex;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "inline-flex items-center text-center font-['DM_Sans',Helvetica] text-3xl leading-[1.2] font-semibold tracking-[0] whitespace-nowrap text-[rgba(128,128,128,0.6)] antialiased [text-shadow:0.25px_0.5px_0.75px_#f5f5f5,0_0_0_#000,0.25px_0.5px_0.75px_#f5f5f5] sm:text-5xl sm:leading-[1.2] sm:[text-shadow:0.5px_1px_1.5px_#f5f5f5,0_0_0_#000,0.5px_1px_1.5px_#f5f5f5] md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[115.2px]",
                                        children: item.text
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 flex items-center justify-center overflow-hidden",
                                        initial: {
                                            clipPath: "inset(100% 0% 0% 0%)",
                                            filter: "blur(4px)"
                                        },
                                        animate: isExiting ? {
                                            clipPath: "inset(0% 0% 100% 0%)",
                                            filter: "blur(4px)"
                                        } : {
                                            clipPath: "inset(0% 0% 0% 0%)",
                                            filter: "blur(0px)"
                                        },
                                        transition: {
                                            duration: isExiting ? 0.4 : 0.6,
                                            ease: "easeInOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "absolute inset-0 inline-flex items-center justify-center bg-clip-text text-center font-['DM_Sans',Helvetica] text-3xl leading-[1.2] font-semibold tracking-[0] whitespace-nowrap text-transparent antialiased sm:text-5xl sm:leading-[1.2] md:text-6xl lg:text-7xl xl:text-8xl xl:leading-[115.2px]",
                                            style: {
                                                backgroundImage: `url(${item.image}), linear-gradient(135deg, #374151 0%, #1f2937 100%)`,
                                                backgroundSize: "cover, 100% 100%",
                                                backgroundPosition: "center 20%, center",
                                                backgroundRepeat: "no-repeat, no-repeat"
                                            },
                                            children: item.text
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                                        lineNumber: 168,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-[150px] bg-linear-to-t from-neutral-50 via-neutral-50/50 to-transparent"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MainContentSectionComponent, "WB57U6NOkCMeIr+7FPiGc3RO5gc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelectedRole"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = MainContentSectionComponent;
const MainContentSection = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(MainContentSectionComponent);
_c1 = MainContentSection;
MainContentSection.displayName = "MainContentSection";
var _c, _c1;
__turbopack_context__.k.register(_c, "MainContentSectionComponent");
__turbopack_context__.k.register(_c1, "MainContentSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/MainContentSection/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$MainContentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/features/waitlist/sections/MainContentSection/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MainContentSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$MainContentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MainContentSection"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/MainContentSection/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$MainContentSection$2f$MainContentSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/MainContentSection/MainContentSection.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/features/waitlist/sections/MainContentSection/index.ts [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/MainContentSection/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_features_waitlist_sections_MainContentSection_f6a7191a._.js.map