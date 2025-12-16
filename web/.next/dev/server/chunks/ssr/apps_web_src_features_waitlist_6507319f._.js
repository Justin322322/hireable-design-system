module.exports = [
"[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureSectionBlock",
    ()=>FeatureSectionBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const SECTION_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 36,
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
const FeatureSectionBlock = ({ title, description, children, className = "" })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use hysteresis: enter at 20%, exit only when completely out of viewport
    const checkVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibleRatio = Math.max(0, visibleHeight / elementHeight);
        if (!isActiveRef.current && visibleRatio >= 0.2) {
            // Enter: need 20% visible
            isActiveRef.current = true;
            setIsInView(true);
        } else if (isActiveRef.current && visibleRatio <= 0) {
            // Exit: only when completely out of viewport
            isActiveRef.current = false;
            setIsInView(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(()=>{
                checkVisibility();
                rafRef.current = null;
            });
        };
        checkVisibility();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [
        checkVisibility
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: containerRef,
        className: `flex w-full flex-col items-center gap-10 overflow-hidden px-4 py-28 sm:gap-14 sm:px-10 sm:py-40 lg:px-20 lg:py-48 ${className}`,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: SECTION_VARIANTS,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-w-[632px] flex-col items-center gap-4 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "hero-title-text font-heading-s relative -mt-px flex w-full items-center justify-center text-center text-2xl leading-[1.2] font-(--heading-s-font-weight) tracking-(--heading-s-letter-spacing) [font-style:var(--heading-s-font-style)] sm:text-3xl sm:leading-(--heading-s-line-height) lg:text-(length:--heading-s-font-size)",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-text-s relative flex items-center justify-center text-center text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXT_VARIANTS",
    ()=>TEXT_VARIANTS,
    "TITLE_VARIANTS",
    ()=>TITLE_VARIANTS,
    "availabilitySlots",
    ()=>availabilitySlots,
    "calendarOptions",
    ()=>calendarOptions,
    "candidateProfiles",
    ()=>candidateProfiles,
    "checkinNames",
    ()=>checkinNames,
    "suggestedActions",
    ()=>suggestedActions
]);
const calendarOptions = [
    {
        icon: "/icons/icon-google-calendar.svg",
        name: "Google Calendar",
        showConnect: true
    },
    {
        icon: "/icons/icon-microsoft-outlook.svg",
        name: "Microsoft Outlook",
        showConnect: false
    }
];
const availabilitySlots = [
    {
        day: "M",
        startTime: "9:00 am",
        endTime: "4:30 pm"
    },
    {
        day: "T",
        startTime: "9:30 am",
        endTime: "5:00 pm"
    },
    {
        day: "W",
        startTime: "10:00 am",
        endTime: "6:00 pm"
    }
];
const checkinNames = [
    "Juan Dela Cruz",
    "Maria Santos",
    "Carlos Reyes",
    "Ana Garcia",
    "Miguel Torres"
];
const suggestedActions = [
    {
        id: 1,
        title: "Schedule a check-in call",
        description: "Discuss workload concerns and offer support"
    },
    {
        id: 2,
        title: "Adjust project timeline",
        description: "Extend deadlines to reduce pressure"
    },
    {
        id: 3,
        title: "Provide additional resources",
        description: "Assign a junior developer to help with tasks"
    }
];
const candidateProfiles = [
    {
        id: 3,
        name: "Jethro Soriano",
        role: "Graphic Designer",
        salary: "$1,980 /mo",
        experience: "2-5 years",
        match: "84% MATCHED",
        avatar: "/images/Jethro-Soriano.svg"
    },
    {
        id: 2,
        name: "Michaela Reyes",
        role: "Sales Manager",
        salary: "$1,680 /mo",
        experience: "2-5 years",
        match: "86% MATCHED",
        avatar: "/images/Michaela.svg"
    },
    {
        id: 1,
        name: "Camille Mercado",
        role: "Sales Manager",
        salary: "$1,780 /mo",
        experience: "2-5 years",
        match: "82% MATCHED",
        avatar: "/images/Camille-Mercado.svg"
    }
];
const TEXT_VARIANTS = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
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
        filter: "blur(0px)",
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
const TITLE_VARIANTS = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
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
        filter: "blur(0px)",
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.2,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        }
    }
};
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeftIcon",
    ()=>ChevronLeftIcon,
    "ChevronRightIcon",
    ()=>ChevronRightIcon,
    "ClockIcon",
    ()=>ClockIcon,
    "CloseIcon",
    ()=>CloseIcon,
    "CopyIcon",
    ()=>CopyIcon,
    "GlobeIcon",
    ()=>GlobeIcon,
    "LocationIcon",
    ()=>LocationIcon,
    "MicrophoneIcon",
    ()=>MicrophoneIcon,
    "MoreVerticalIcon",
    ()=>MoreVerticalIcon,
    "PhoneOffIcon",
    ()=>PhoneOffIcon,
    "PlusCircleIcon",
    ()=>PlusCircleIcon,
    "VideoIcon",
    ()=>VideoIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function ClockIcon({ className, size = 14, color = "#000000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "6",
                stroke: color,
                strokeWidth: "1.32"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4V8L11 11",
                stroke: color,
                strokeWidth: "1.32",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function LocationIcon({ className, size = 14, color = "#000000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z",
                stroke: color,
                strokeWidth: "1.32"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 14C8 14 13 10 13 6.5C13 3.46243 10.5376 1 7.5 1C4.46243 1 2 3.46243 2 6.5C2 10 8 14 8 14Z",
                stroke: color,
                strokeWidth: "1.32"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function GlobeIcon({ className, size = 14, color = "#00324B" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 14 14",
        fill: "none",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "7",
                cy: "7",
                r: "6",
                stroke: color,
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1 7H13M7 1C5.5 3 5 5 5 7C5 9 5.5 11 7 13M7 1C8.5 3 9 5 9 7C9 9 8.5 11 7 13",
                stroke: color,
                strokeWidth: "1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function ChevronLeftIcon({ className, size = 7, color = "rgba(26, 26, 26, 0.61)" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size + 4,
        viewBox: "0 0 7 11",
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 1L1 5.5L6 10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function ChevronRightIcon({ className, size = 7, color = "white" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size + 4,
        viewBox: "0 0 7 11",
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M1 1L6 5.5L1 10",
            stroke: color,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
function MicrophoneIcon({ className, size = 20, color = "#8b8b8b" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19 10v2a7 7 0 0 1-14 0v-2"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "19",
                x2: "12",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "23",
                x2: "16",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
function PhoneOffIcon({ className, size = 20 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "23",
                y1: "1",
                x2: "1",
                y2: "23"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
function VideoIcon({ className, size = 20, color = "#8b8b8b" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "23 7 16 12 23 17 23 7"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1",
                y: "5",
                width: "15",
                height: "14",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function MoreVerticalIcon({ className, size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 4C8.36819 4 8.66667 3.70152 8.66667 3.33333C8.66667 2.96514 8.36819 2.66667 8 2.66667C7.63181 2.66667 7.33333 2.96514 7.33333 3.33333C7.33333 3.70152 7.63181 4 8 4Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 13.3333C8.36819 13.3333 8.66667 13.0349 8.66667 12.6667C8.66667 12.2985 8.36819 12 8 12C7.63181 12 7.33333 12.2985 7.33333 12.6667C7.33333 13.0349 7.63181 13.3333 8 13.3333Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
function CloseIcon({ className, size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.33333 3.33333L12.6667 12.6667M12.6667 3.33333L3.33333 12.6667",
            stroke: "#616161",
            strokeWidth: "1.5",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
function PlusCircleIcon({ className, size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8",
                cy: "8",
                r: "6.67",
                stroke: "#616161",
                strokeWidth: "1.33"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5.33333V10.6667M5.33333 8H10.6667",
                stroke: "#616161",
                strokeWidth: "1.33",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
function CopyIcon({ className, size = 16 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 16 16",
        fill: "none",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "1.33",
                y: "1.33",
                width: "8.67",
                height: "8.67",
                stroke: "#616161",
                strokeWidth: "1.33",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "6",
                width: "8.67",
                height: "8.67",
                stroke: "#616161",
                strokeWidth: "1.33",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvailabilitySlotsPhase",
    ()=>AvailabilitySlotsPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AvailabilitySlotsPhase({ isIsolating }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 1
        },
        exit: {
            opacity: 0,
            filter: "blur(10px)"
        },
        transition: {
            duration: 0.5
        },
        className: "flex w-full flex-1 flex-col justify-center gap-3 sm:gap-4",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["availabilitySlots"].map((slot, index)=>{
            const isSelected = index === 1;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: isIsolating && !isSelected ? 0 : 1,
                    y: 0,
                    scale: isIsolating && isSelected ? 1.05 : 1,
                    filter: isIsolating && !isSelected ? "blur(5px)" : "blur(0px)"
                },
                transition: {
                    duration: 0.5,
                    delay: isIsolating ? 0 : 0.35 + index * 0.1,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: `flex w-full items-center justify-between gap-2 transition-colors duration-500 sm:gap-4 ${isIsolating && isSelected ? "rounded-xl bg-white/50 p-2 shadow-sm" : "p-2"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex min-w-0 flex-1 items-center gap-2 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00324b] text-xs font-semibold text-white sm:size-10 sm:text-sm",
                                children: slot.day
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 flex-1 items-center gap-1.5 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSlotBadge, {
                                        time: slot.startTime
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-text-s text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm",
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeSlotBadge, {
                                        time: slot.endTime
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 items-center gap-2 sm:gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CloseIcon"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                    lineNumber: 64,
                                    columnNumber: 33
                                }, void 0),
                                label: "Remove slot"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlusCircleIcon"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                    lineNumber: 65,
                                    columnNumber: 33
                                }, void 0),
                                label: "Edit slot"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconButton, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CopyIcon"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, void 0),
                                label: "Select slot"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                lineNumber: 29,
                columnNumber: 11
            }, this);
        })
    }, "slots", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function TimeSlotBadge({ time }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex h-7 min-w-[70px] items-center justify-center rounded-full border border-white bg-[rgba(250,250,250,0.98)] px-2 py-1.5 sm:h-8 sm:min-w-[85px] sm:px-3 sm:py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-text-s relative z-10 text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-sm",
                children: time
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 rounded-full shadow-[inset_0px_0.5px_4px_0px_#c3c3c3]"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function IconButton({ icon, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "aria-label": label,
        className: "flex size-4 shrink-0 cursor-pointer items-center justify-center opacity-60 hover:opacity-100",
        children: icon
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarConnectPhase",
    ()=>CalendarConnectPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CalendarConnectPhase({ isVisible, shouldShowConnect, buttonClicked }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: false,
        animate: {
            opacity: isVisible ? 1 : 0,
            scale: 1,
            filter: isVisible ? "blur(0px)" : "blur(10px)"
        },
        transition: {
            duration: 0.3,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        className: "absolute inset-0 flex flex-col gap-5 sm:gap-6",
        style: {
            pointerEvents: isVisible ? "auto" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-center justify-center gap-1 px-4 pt-4 pb-2 sm:gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-large-b text-center text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg",
                        children: "Connect your calendar"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-text-s text-center text-xs leading-normal font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm sm:leading-[1.6]",
                        children: "Sync existing calendar so your availability stays up to date."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "flex w-full flex-col items-start gap-3 px-4 pb-4 sm:gap-3.5",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calendarOptions"].map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "feature-capsule h-[46px] w-full justify-between px-4 py-3 sm:h-[50px] sm:px-5 sm:py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "size-5 shrink-0 sm:size-6",
                                            alt: "Calendar icon",
                                            src: option.icon,
                                            width: 24,
                                            height: 24
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-(length:--text-s-font-size)",
                                            children: option.name
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                option.showConnect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    animate: {
                                        opacity: shouldShowConnect || buttonClicked ? 1 : 0,
                                        filter: shouldShowConnect || buttonClicked ? "blur(0px)" : "blur(10px)",
                                        scale: buttonClicked ? 0.9 : shouldShowConnect ? 1 : 0.8
                                    },
                                    transition: {
                                        duration: buttonClicked ? 0.15 : 0.3,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1
                                        ]
                                    },
                                    className: "bg-schedule-time-bg pointer-events-auto relative z-10 inline-flex h-8 items-center justify-center gap-1.5 rounded-full border border-solid border-white px-2.5 py-1.5 shadow-[inset_0px_0.5px_4px_0px_#75a9c2] sm:h-9 sm:gap-2 sm:px-3 sm:py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-text-s text-schedule-time-text text-center text-[11px] leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap [font-style:var(--text-s-font-style)] sm:text-xs",
                                        children: "Connect"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                                        lineNumber: 76,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallScreenPhase",
    ()=>CallScreenPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function CallScreenPhase() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.5
        },
        className: "flex w-full flex-col items-center justify-center gap-6 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center",
                children: [
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "border-client/50 absolute rounded-full border",
                            initial: {
                                width: "100%",
                                height: "100%",
                                opacity: 0.8
                            },
                            animate: {
                                width: [
                                    "100%",
                                    "250%"
                                ],
                                height: [
                                    "100%",
                                    "250%"
                                ],
                                opacity: [
                                    0.8,
                                    0
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 1,
                                ease: "easeOut"
                            }
                        }, i, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 size-20 overflow-hidden rounded-full border-2 border-white shadow-lg sm:size-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/Camille-Mercado.svg",
                            alt: "Camille Mercado",
                            fill: true,
                            sizes: "(max-width: 640px) 80px, 96px",
                            className: "rounded-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg",
                        children: "Camille Mercado"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm",
                        children: "Sales Manager"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallButton, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicrophoneIcon"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                            lineNumber: 62,
                            columnNumber: 27
                        }, void 0),
                        variant: "default"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallButton, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneOffIcon"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                            lineNumber: 63,
                            columnNumber: 27
                        }, void 0),
                        variant: "hangup"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallButton, {
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoIcon"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                            lineNumber: 64,
                            columnNumber: 27
                        }, void 0),
                        variant: "default"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, "call", true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function CallButton({ icon, variant }) {
    if (variant === "hangup") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex size-10 items-center justify-center rounded-full bg-[#ff4d4d] text-white transition-transform hover:scale-105",
            children: icon
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex size-10 items-center justify-center rounded-full border border-white/70 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] transition-transform hover:scale-105",
        children: icon
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateProfileCard",
    ()=>CandidateProfileCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const CandidateProfileCard = ({ name, role, salary, experience, match, avatar, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex w-full flex-col items-start gap-3 overflow-hidden rounded-xl bg-white p-4 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center gap-2.5 self-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "size-9 overflow-hidden rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "size-full rounded-full object-cover",
                            alt: name,
                            src: avatar,
                            width: 36,
                            height: 36
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-start gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-text-s text-sm leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[13px]",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-[11px]",
                                children: role
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11px]",
                        children: salary
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-[11px]",
                        children: experience
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center rounded bg-[#27ae6014] px-1.5 py-0.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-text-s text-success text-[10px] font-semibold tracking-wide whitespace-nowrap uppercase [font-style:var(--text-s-font-style)] sm:text-[9px]",
                            children: match
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-between pt-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-s text-xs leading-(--text-s-line-height) font-medium tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-300 [font-style:var(--text-s-font-style)] sm:text-[11px]",
                        children: "Activity Title"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex size-5 items-center justify-center rounded-full bg-neutral-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "12",
                            height: "12",
                            viewBox: "0 0 12 12",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "opacity-40",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M4.5 9L7.5 6L4.5 3",
                                stroke: "#212121",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidateInvitesPhase",
    ()=>CandidateInvitesPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$CandidateProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CandidateInvitesPhase({ showSendInvites, showCandidateSelects, isCandidateSelected }) {
    const [visibleCandidates, setVisibleCandidates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Staggered candidate appearance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showSendInvites && !showCandidateSelects) {
            setVisibleCandidates([]);
            let currentIndex = 0;
            const interval = setInterval(()=>{
                if (currentIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateProfiles"].length) {
                    clearInterval(interval);
                    return;
                }
                const nextCandidate = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["candidateProfiles"][currentIndex];
                if (nextCandidate) {
                    setVisibleCandidates((prev)=>[
                            nextCandidate,
                            ...prev
                        ]);
                }
                currentIndex++;
            }, 800);
            return ()=>clearInterval(interval);
        } else {
            setVisibleCandidates([]);
        }
    }, [
        showSendInvites,
        showCandidateSelects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "relative flex w-full flex-col gap-3 overflow-hidden",
        style: {
            height: "250px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "popLayout",
                initial: false,
                children: visibleCandidates.map((candidate)=>{
                    const isCamille = candidate.id === 1;
                    return candidate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        initial: {
                            opacity: 0,
                            y: -20,
                            scale: 0.9
                        },
                        animate: {
                            opacity: isCandidateSelected && !isCamille ? 0 : 1,
                            y: isCandidateSelected && !isCamille ? -20 : 0,
                            scale: isCandidateSelected && !isCamille ? 0.9 : 1,
                            zIndex: isCandidateSelected && isCamille ? 20 : 1,
                            filter: isCandidateSelected && !isCamille ? "blur(8px)" : "blur(0px)"
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            opacity: {
                                duration: 0.4,
                                ease: "easeOut"
                            },
                            filter: {
                                duration: 0.3,
                                ease: "easeOut"
                            },
                            y: {
                                duration: 0.4,
                                ease: "easeOut"
                            },
                            scale: {
                                duration: 0.4,
                                ease: "easeOut"
                            }
                        },
                        className: "relative w-full",
                        style: {
                            pointerEvents: isCandidateSelected && !isCamille ? "none" : "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$CandidateProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidateProfileCard"], {
                            ...candidate,
                            className: isCandidateSelected && isCamille ? "ring-success/50 ring-1 transition-all duration-300 ring-inset" : "transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx",
                            lineNumber: 91,
                            columnNumber: 15
                        }, this)
                    }, candidate.id, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this) : null;
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-12 bg-linear-to-t from-[#f2f2f2] to-transparent"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, "candidates", true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeetingDetailsPhase",
    ()=>MeetingDetailsPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MeetingDetailsPhase({ showConfirmedCandidate, showMeetingDetails, isJoinMeetingPressed, onJoinMeeting }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-1 flex-col justify-center gap-3 p-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "popLayout",
            children: [
                showConfirmedCandidate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "flex items-center gap-3 px-2 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/Camille-Mercado.svg",
                            alt: "Camille Mercado",
                            width: 48,
                            height: 48,
                            className: "size-10 shrink-0 rounded-full object-cover sm:size-12"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]",
                                    children: "Camille Mercado"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)]",
                                    children: "Sales Manager"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this)
                    ]
                }, "confirmed-candidate", true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this),
                showMeetingDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    },
                    className: "relative w-full overflow-hidden rounded border border-neutral-200 bg-white p-3 sm:p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-client absolute top-0 bottom-0 left-0 w-1"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full flex-col gap-3 pl-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full items-start justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 flex-1 flex-col gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-text-s text-base leading-(--text-s-line-height) font-bold tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]",
                                                    children: "Interview Call"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-text-s text-xs leading-[1.2] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)]",
                                                    children: "Jan 30, 2025"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "aria-label": "More options",
                                            className: "cursor-pointer text-neutral-700 hover:text-neutral-900",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full items-center justify-between gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center rounded-full border border-solid border-white bg-[var(--color-schedule-time-bg)] px-3 py-2 shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-[var(--color-schedule-time-text)] [font-style:var(--text-s-font-style)]",
                                                children: "9:30 am - 10:00 am"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                            animate: {
                                                scale: isJoinMeetingPressed ? 0.95 : 1
                                            },
                                            transition: {
                                                duration: 0.1
                                            },
                                            onClick: onJoinMeeting,
                                            className: `font-text-s border-client hover:bg-client flex h-[32px] cursor-pointer items-center justify-center gap-2 rounded-[4px] border px-[12px] py-[6px] text-xs font-medium whitespace-nowrap transition-colors hover:text-white sm:tracking-(--text-s-letter-spacing) ${isJoinMeetingPressed ? "bg-client text-white" : "text-client bg-[rgba(194,235,255,0.4)]"}`,
                                            children: "Join meeting"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    ]
                }, "meeting-card", true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhaseHeader",
    ()=>PhaseHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
const PHASE_CONTENT = {
    availability: {
        title: "Set Your Availability",
        description: "Choose the days and times you're open for interviews."
    },
    invites: {
        title: "Send interview invites",
        description: "Invite candidates to interviews with a simple drag-and-drop"
    },
    selects: {
        title: "Candidate selects schedule",
        description: "They pick a slot, and both sides receive instant confirmation."
    }
};
function PhaseHeader({ showSendInvites, showCandidateSelects, showCallScreen }) {
    const getPhaseKey = ()=>{
        if (showCallScreen) return null;
        if (showCandidateSelects) return "selects";
        if (showSendInvites) return "invites";
        return "availability";
    };
    const phaseKey = getPhaseKey();
    if (!phaseKey) return null;
    const content = PHASE_CONTENT[phaseKey];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -20
                },
                transition: {
                    duration: 0.4,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "flex w-full flex-col items-start gap-1.5 sm:gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg",
                        children: content.title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm",
                        children: content.description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, phaseKey, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/useAvailabilityAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAvailabilityAnimation",
    ()=>useAvailabilityAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useInViewWithDelay.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function useAvailabilityAnimation({ isMobile }) {
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use delayed exit to prevent jarring resets when scrolling
    const isCardInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewWithDelay"])(cardRef, {
        amount: 0.3,
        exitDelay: 800
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Animation phases
    const [buttonClicked, setButtonClicked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAvailability, setShowAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExpandedAvailability, setShowExpandedAvailability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSendInvites, setShowSendInvites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIsolating, setIsIsolating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCandidateSelects, setShowCandidateSelects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCandidateSelected, setIsCandidateSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMeetingDetails, setShowMeetingDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmedCandidate, setShowConfirmedCandidate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCallScreen, setShowCallScreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isJoinMeetingPressed, setIsJoinMeetingPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const shouldTrigger = isMobile ? isCardInView : isHovered;
    // Phase 1: Initial button click animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Prevent re-triggering while animation is running
        if (shouldTrigger && hasTriggeredRef.current) return;
        if (shouldTrigger && !showAvailability) {
            hasTriggeredRef.current = true;
            const timer = setTimeout(()=>{
                setButtonClicked(true);
                setTimeout(()=>setShowAvailability(true), 200);
            }, 1000);
            return ()=>clearTimeout(timer);
        }
        if (!shouldTrigger) {
            // Reset when leaving viewport (mobile) or unhover (desktop)
            hasTriggeredRef.current = false;
            setShowAvailability(false);
            setShowExpandedAvailability(false);
            setButtonClicked(false);
        }
    }, [
        shouldTrigger,
        showAvailability
    ]);
    // Phase 2: Expand availability panel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showAvailability && !showExpandedAvailability) {
            const timer = setTimeout(()=>setShowExpandedAvailability(true), 900);
            return ()=>clearTimeout(timer);
        } else if (!showAvailability) {
            setShowExpandedAvailability(false);
        }
    }, [
        showAvailability,
        showExpandedAvailability
    ]);
    // Phase 3: Show send invites
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showExpandedAvailability) {
            const isolateTimer = setTimeout(()=>setIsIsolating(true), 2500);
            const timer = setTimeout(()=>setShowSendInvites(true), 3500);
            return ()=>{
                clearTimeout(timer);
                clearTimeout(isolateTimer);
            };
        } else {
            setShowSendInvites(false);
            setIsIsolating(false);
        }
    }, [
        showExpandedAvailability
    ]);
    // Phase 4: Candidate selection and meeting flow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showSendInvites) {
            // Use a single timeline array for cleaner cleanup
            const timers = [];
            // All timers relative to showSendInvites becoming true
            timers.push(setTimeout(()=>setIsCandidateSelected(true), 3200));
            timers.push(setTimeout(()=>setShowCandidateSelects(true), 4500));
            timers.push(setTimeout(()=>setShowMeetingDetails(true), 5000)); // 4500 + 500
            timers.push(setTimeout(()=>setShowConfirmedCandidate(true), 6500)); // 4500 + 2000
            timers.push(setTimeout(()=>setIsJoinMeetingPressed(true), 9000)); // 4500 + 4500
            timers.push(setTimeout(()=>setShowCallScreen(true), 9500)); // 4500 + 5000
            return ()=>timers.forEach((t)=>clearTimeout(t));
        } else {
            setShowCandidateSelects(false);
            setIsCandidateSelected(false);
            setShowMeetingDetails(false);
            setShowConfirmedCandidate(false);
            setShowCallScreen(false);
            setIsJoinMeetingPressed(false);
        }
    }, [
        showSendInvites
    ]);
    return {
        cardRef,
        isCardInView,
        isHovered,
        setIsHovered,
        buttonClicked,
        showAvailability,
        showExpandedAvailability,
        showSendInvites,
        isIsolating,
        showCandidateSelects,
        isCandidateSelected,
        showMeetingDetails,
        showConfirmedCandidate,
        showCallScreen,
        isJoinMeetingPressed,
        setIsJoinMeetingPressed,
        setShowCallScreen,
        isMobile
    };
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvailabilityCard",
    ()=>AvailabilityCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$AvailabilitySlotsPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilitySlotsPhase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CalendarConnectPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CalendarConnectPhase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CallScreenPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CallScreenPhase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CandidateInvitesPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/CandidateInvitesPhase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$MeetingDetailsPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/MeetingDetailsPhase.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$PhaseHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/PhaseHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$useAvailabilityAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/useAvailabilityAnimation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const AvailabilityCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isMobile })=>{
    const { cardRef, isCardInView, isHovered, setIsHovered, buttonClicked, showExpandedAvailability, showSendInvites, isIsolating, showCandidateSelects, isCandidateSelected, showMeetingDetails, showConfirmedCandidate, showCallScreen, isJoinMeetingPressed, setIsJoinMeetingPressed, setShowCallScreen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$useAvailabilityAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAvailabilityAnimation"])({
        isMobile
    });
    const shouldShowConnect = isMobile ? isCardInView : isHovered;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "flex h-[350px] w-full items-start justify-center",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feature-card flex w-full max-w-[380px] flex-col items-center gap-0! overflow-hidden p-0! sm:max-w-[460px] lg:max-w-[500px]",
            style: {
                height: showExpandedAvailability ? "350px" : "auto",
                minHeight: "260px",
                transition: "height 0.3s ease"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CalendarConnectPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarConnectPhase"], {
                    isVisible: !showExpandedAvailability,
                    shouldShowConnect: shouldShowConnect,
                    buttonClicked: buttonClicked
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                showExpandedAvailability && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-full flex-col items-start gap-3 p-5 sm:gap-4 sm:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$PhaseHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhaseHeader"], {
                            showSendInvites: showSendInvites,
                            showCandidateSelects: showCandidateSelects,
                            showCallScreen: showCallScreen
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                            lineNumber: 65,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: !showSendInvites ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$AvailabilitySlotsPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailabilitySlotsPhase"], {
                                isIsolating: isIsolating
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                                lineNumber: 73,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)) : !showCandidateSelects ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CandidateInvitesPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidateInvitesPhase"], {
                                showSendInvites: showSendInvites,
                                showCandidateSelects: showCandidateSelects,
                                isCandidateSelected: isCandidateSelected
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                                lineNumber: 75,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)) : !showCallScreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$MeetingDetailsPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MeetingDetailsPhase"], {
                                showConfirmedCandidate: showConfirmedCandidate,
                                showMeetingDetails: showMeetingDetails,
                                isJoinMeetingPressed: isJoinMeetingPressed,
                                onJoinMeeting: ()=>{
                                    setIsJoinMeetingPressed(true);
                                    setTimeout(()=>setShowCallScreen(true), 500);
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                                lineNumber: 81,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$CallScreenPhase$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallScreenPhase"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                                lineNumber: 91,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                            lineNumber: 71,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx",
        lineNumber: 41,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
AvailabilityCard.displayName = "AvailabilityCard";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$AvailabilityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlassRow",
    ()=>GlassRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
;
const GlassRow = ({ className, contentClassName, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("feature-capsule w-full", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-full items-center gap-2", contentClassName),
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBlock",
    ()=>HeroBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$ParticleBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/shared/ParticleBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const HeroBlock = ({ textRef, isInView, beamColor, heroTitle, heroSubtitle })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative isolate flex min-h-[600px] w-full flex-col items-center justify-center gap-2.5 overflow-hidden px-4 py-28 sm:min-h-[800px] sm:px-10 sm:py-40 lg:px-20 lg:py-48",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 z-5 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[120px] w-full rounded-full blur-[60px] transition-colors duration-500 lg:h-[200px] xl:h-[240px] 2xl:h-[280px]",
                    style: {
                        backgroundColor: `${beamColor}4D`
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                    lineNumber: 25,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$ParticleBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ParticleBackground"], {
                className: "absolute inset-0 z-15"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                className: "relative z-20 inline-flex w-full max-w-[672px] flex-col items-center gap-2 px-4 lg:max-w-[900px] xl:max-w-[1100px] 2xl:max-w-[1300px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: isInView ? "visible" : "hidden",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXT_VARIANTS"],
                        className: "font-text-large-b relative -mt-px flex items-center justify-center text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-xl lg:text-[32px]! xl:text-[36px]! 2xl:text-[40px]!",
                        children: heroSubtitle
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: isInView ? "visible" : "hidden",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TITLE_VARIANTS"],
                        className: "hero-title-text font-display relative -mt-px flex items-center justify-center text-center text-3xl leading-[1.2] font-semibold tracking-[0px] filter-[url(#inner-shadow)] sm:text-5xl sm:leading-(--display-line-height) lg:text-[72px]! xl:text-[84px]! 2xl:text-[96px]!",
                        children: heroTitle
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 46,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 z-1 h-[1200px] w-full overflow-hidden bg-[linear-gradient(180deg,rgba(250,250,250,0)_0%,rgba(250,250,250,0.08)_100%)] backdrop-blur-[6px] backdrop-brightness-100 [-webkit-backdrop-filter:blur(6px)_brightness(100%)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-0 right-0 left-0 z-2 h-[250px] bg-linear-to-b from-transparent to-white/40"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute right-0 bottom-0 left-0 z-2 h-[200px] bg-linear-to-t from-neutral-50 via-neutral-50/80 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 58,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-0 bottom-0 left-0 z-2 w-[150px] bg-linear-to-r from-white/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 59,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute top-0 right-0 bottom-0 z-2 w-[150px] bg-linear-to-l from-white/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                        lineNumber: 60,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
                lineNumber: 56,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationAnimation",
    ()=>ConversationAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useInViewWithDelay.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const CLIENT_CONVERSATION = [
    {
        id: 1,
        sender: "candidate",
        name: "Isabel Reyes",
        text: "Can we align on the KPI? 4% conversion in 30 days feels realistic.",
        avatar: "/images/Isabel-Reyes.svg"
    },
    {
        id: 2,
        sender: "client",
        name: "Jacob Smith",
        text: "Agreed. Let's set 4% as the KPI for the Test Period.",
        avatar: "/images/Jacob-Smith.svg"
    },
    {
        id: 3,
        sender: "candidate",
        name: "Isabel Reyes",
        text: "What's the budget for A/B testing tools?",
        avatar: "/images/Isabel-Reyes.svg"
    },
    {
        id: 4,
        sender: "client",
        name: "Jacob Smith",
        text: "$500/month for tools. Does that work?",
        avatar: "/images/Jacob-Smith.svg"
    },
    {
        id: 5,
        sender: "candidate",
        name: "Isabel Reyes",
        text: "Perfect! I'll include weekly progress reports.",
        avatar: "/images/Isabel-Reyes.svg"
    }
];
const TALENT_CONVERSATION = [
    {
        id: 1,
        sender: "candidate",
        name: "Isabel Reyes",
        text: "Given the workload and creative research involved, can we adjust the rate to $2,200/month?",
        avatar: "/images/Isabel-Reyes.svg"
    },
    {
        id: 2,
        sender: "client",
        name: "Jacob Smith",
        text: "That's reasonable — your portfolio shows great motion depth.",
        avatar: "/images/Jacob-Smith.svg"
    },
    {
        id: 3,
        sender: "candidate",
        name: "Isabel Reyes",
        text: "I appreciate that! I'm confident I can deliver high-impact visuals.",
        avatar: "/images/Isabel-Reyes.svg"
    }
];
const ConversationAnimation = ({ isTalent = false })=>{
    const conversation = isTalent ? TALENT_CONVERSATION : CLIENT_CONVERSATION;
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMediaQuery"])("(max-width: 768px)");
    const wasAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use delayed exit to prevent jarring resets
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewWithDelay"])(containerRef, {
        amount: 0.3,
        exitDelay: 800
    });
    const resetAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setMessages([]);
        setCurrentIndex(0);
    }, []);
    // Start/reset animation based on viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const shouldAnimate = isMobile ? isInView : isInView || isHovered;
        if (shouldAnimate && !wasAnimatingRef.current) {
            // Starting animation
            resetAnimation();
            setIsAnimating(true);
            wasAnimatingRef.current = true;
        } else if (!shouldAnimate && wasAnimatingRef.current) {
            // Leaving viewport - reset for next time
            setIsAnimating(false);
            wasAnimatingRef.current = false;
            // Keep messages visible briefly, then reset
            setTimeout(()=>{
                resetAnimation();
            }, 300);
        }
    }, [
        isMobile,
        isInView,
        isHovered,
        resetAnimation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isAnimating) return;
        if (currentIndex < conversation.length) {
            const delay = currentIndex === 0 ? 500 : 1200;
            const timer = setTimeout(()=>{
                setMessages((prev)=>[
                        ...prev,
                        conversation[currentIndex]
                    ]);
                setCurrentIndex((prev)=>prev + 1);
            }, delay);
            return ()=>clearTimeout(timer);
        }
    // Animation completed - messages stay visible until viewport exit
    }, [
        currentIndex,
        isAnimating,
        conversation
    ]);
    // Render message bubble component
    const MessageBubble = ({ message })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "size-10 shrink-0 overflow-hidden rounded-full bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: message.avatar,
                        alt: message.name,
                        width: 40,
                        height: 40,
                        className: "size-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                    lineNumber: 142,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-col justify-center gap-1 rounded-2xl bg-white p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-['Inter'] text-sm leading-[120%] font-semibold tracking-[0.2px] text-neutral-900",
                            children: message.name
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                            lineNumber: 152,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-['Inter'] text-sm leading-[120%] font-normal tracking-[0.2px] text-neutral-900",
                            children: message.text
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                    lineNumber: 151,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
            lineNumber: 141,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative w-full px-4 py-0",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "invisible flex flex-col gap-4",
                "aria-hidden": "true",
                children: conversation.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                        message: message
                    }, `placeholder-${message.id}`, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 flex flex-col gap-4 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "sync",
                    children: messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: false,
                            initial: {
                                opacity: 0,
                                y: 15
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.4,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageBubble, {
                                message: message
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, message.id, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NegotiationCard",
    ()=>NegotiationCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$ConversationAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/ConversationAnimation.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const NegotiationCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ gradientBg, gradientShadow, isTalent = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "feature-card flex w-full max-w-[546px] flex-col items-start !gap-0 !p-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "flex w-full flex-col items-start gap-0 rounded-2xl border-0 bg-transparent shadow-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col items-start justify-center gap-1 px-4 pt-4 pb-4 sm:gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-text-large-b text-base leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) text-neutral-900 [font-style:var(--text-large-b-font-style)] sm:text-lg",
                            children: isTalent ? "Product Motion Designer" : "Improve Website Conversion Rate"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-text-s text-xs leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-700 [font-style:var(--text-s-font-style)] sm:text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-neutral-900",
                                    children: isTalent ? "Salary:" : "Description:"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                " ",
                                isTalent ? "$2000 /mo." : "Increase conversion rate from 2% to 6% through landing page optimization and targeted A/B testing."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$ConversationAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConversationAnimation"], {
                    isTalent: isTalent
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex w-full flex-col items-start gap-2.5 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "feature-capsule h-12 w-full py-2 pr-2 pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Add a comment",
                                className: "font-text-paragraph relative z-10 flex flex-1 items-center justify-center border-none bg-transparent text-(length:--text-paragraph-font-size) leading-(--text-paragraph-line-height) font-(--text-paragraph-font-weight) tracking-(--text-paragraph-letter-spacing) text-neutral-900 [font-style:var(--text-paragraph-font-style)] shadow-none placeholder:text-neutral-900 focus-visible:ring-0 focus-visible:ring-offset-0"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "icon",
                                className: `z-10 inline-flex size-7 flex-[0_0_auto] items-center gap-[8.75px] overflow-hidden rounded-[14px] ${gradientBg} p-[3.5px] ${gradientShadow}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "relative size-[21px]",
                                    alt: "Icon components",
                                    src: "/icons/icon-chevron-right.svg",
                                    width: 21,
                                    height: 21
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                        lineNumber: 43,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
            lineNumber: 22,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx",
        lineNumber: 21,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
NegotiationCard.displayName = "NegotiationCard";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Constants for TalentScheduleCard
 */ // Available dates (light blue with inset shadow)
__turbopack_context__.s([
    "AVAILABLE_DATES",
    ()=>AVAILABLE_DATES,
    "CALENDAR_COLUMNS",
    ()=>CALENDAR_COLUMNS,
    "MOBILE_CALENDAR_COLUMNS",
    ()=>MOBILE_CALENDAR_COLUMNS,
    "MOBILE_TIME_SLOTS",
    ()=>MOBILE_TIME_SLOTS,
    "SELECTED_DATE",
    ()=>SELECTED_DATE,
    "TIME_SLOTS",
    ()=>TIME_SLOTS
]);
const AVAILABLE_DATES = [
    23,
    24,
    25,
    26,
    29,
    30
];
const SELECTED_DATE = 23;
const CALENDAR_COLUMNS = [
    {
        day: "SUN",
        dates: [
            null,
            7,
            14,
            21,
            28
        ]
    },
    {
        day: "MON",
        dates: [
            1,
            8,
            15,
            22,
            29
        ]
    },
    {
        day: "TUE",
        dates: [
            2,
            9,
            16,
            23,
            30
        ]
    },
    {
        day: "WED",
        dates: [
            3,
            10,
            17,
            24,
            null
        ]
    },
    {
        day: "THU",
        dates: [
            4,
            11,
            18,
            25,
            null
        ]
    },
    {
        day: "FRI",
        dates: [
            5,
            12,
            19,
            26,
            null
        ]
    },
    {
        day: "SAT",
        dates: [
            6,
            13,
            20,
            27,
            null
        ]
    }
];
const MOBILE_CALENDAR_COLUMNS = [
    {
        day: "S",
        dates: [
            null,
            7,
            14,
            21,
            28
        ]
    },
    {
        day: "M",
        dates: [
            1,
            8,
            15,
            22,
            29
        ]
    },
    {
        day: "T",
        dates: [
            2,
            9,
            16,
            23,
            30
        ]
    },
    {
        day: "W",
        dates: [
            3,
            10,
            17,
            24,
            null
        ]
    },
    {
        day: "T",
        dates: [
            4,
            11,
            18,
            25,
            null
        ]
    },
    {
        day: "F",
        dates: [
            5,
            12,
            19,
            26,
            null
        ]
    },
    {
        day: "S",
        dates: [
            6,
            13,
            20,
            27,
            null
        ]
    }
];
const TIME_SLOTS = [
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm"
];
const MOBILE_TIME_SLOTS = [
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm"
];
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarGrid",
    ()=>CalendarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CalendarGrid({ compact = false }) {
    const columns = compact ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOBILE_CALENDAR_COLUMNS"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CALENDAR_COLUMNS"];
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full flex-col gap-3 border-b border-neutral-300 bg-[rgba(255,255,255,0.24)] p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-['Inter'] text-[14px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900",
                    children: "Select Schedule"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthNavigation, {
                    compact: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-7 gap-1.5",
                    children: columns.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-full text-center font-['Inter'] text-[10px] leading-[12px] font-normal text-neutral-800 uppercase",
                                    children: column.day
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full flex-col items-center gap-1",
                                    children: column.dates.map((date, dateIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateCell, {
                                            date: date,
                                            compact: true
                                        }, dateIndex, false, {
                                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                            lineNumber: 39,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, colIndex, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimezoneDisplay, {
                    compact: true
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[460px] w-[356px] flex-col justify-between border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]",
        style: {
            padding: "16px 24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                style: {
                    gap: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-['Inter'] text-[16px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900",
                        style: {
                            height: "24px"
                        },
                        children: "Select Schedule"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            gap: "14.32px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MonthNavigation, {}, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-end",
                                style: {
                                    gap: "5.37px"
                                },
                                children: columns.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center",
                                        style: {
                                            gap: "14.32px",
                                            width: "39.39px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-['Inter'] text-[10.77px] leading-[11px] font-normal text-neutral-800 uppercase",
                                                style: {
                                                    height: "11px",
                                                    textAlign: "center"
                                                },
                                                children: column.day
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center",
                                                style: {
                                                    gap: "7.16px"
                                                },
                                                children: column.dates.map((date, dateIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateCell, {
                                                        date: date
                                                    }, dateIndex, false, {
                                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, colIndex, true, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimezoneDisplay, {}, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
function MonthNavigation({ compact = false }) {
    const buttonSize = compact ? "size-7" : "";
    const nextButtonSize = compact ? "size-6" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-between ${compact ? "px-0.5" : ""}`,
        style: compact ? undefined : {
            height: "34px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex items-center justify-center rounded-full ${buttonSize}`,
                style: compact ? undefined : {
                    width: "34px",
                    height: "34px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronLeftIcon"], {
                    size: compact ? 6 : 7
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `font-['Inter'] ${compact ? "text-[13px]" : "text-[14.36px]"} leading-[150%] font-normal text-neutral-800`,
                children: "April 2024"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `flex items-center justify-center rounded-full ${nextButtonSize}`,
                style: {
                    width: compact ? undefined : "28px",
                    height: compact ? undefined : "28px",
                    background: "linear-gradient(180deg, #EFFAFF 0.48%, #D7F2FF 17.79%, #0078B2 100%)",
                    boxShadow: compact ? "0px 6px 8px rgba(0, 54, 80, 0.25)" : "0px 8.4px 11.2px rgba(0, 54, 80, 0.25)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {
                    size: compact ? 6 : 7
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
function DateCell({ date, compact = false }) {
    if (date === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: compact ? "size-8" : "",
            style: compact ? undefined : {
                width: "39.39px",
                height: "39.39px"
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, this);
    }
    const isAvailable = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AVAILABLE_DATES"].includes(date);
    const isSelected = date === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SELECTED_DATE"];
    const hasIndicator = date === 22;
    const cellSize = compact ? "size-8" : "";
    const cellStyle = compact ? undefined : {
        width: "39.39px",
        height: "39.39px"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center rounded-full ${cellSize} ${isSelected ? "bg-[linear-gradient(180deg,#EFFAFF_0.48%,#D7F2FF_17.79%,#0078B2_100%)]" : isAvailable ? "border border-white bg-[#f2fbff]" : ""}`,
        style: {
            ...cellStyle,
            boxShadow: isSelected ? compact ? "0px 4px 6px rgba(0,54,80,0.25)" : "0px 8.4px 11.2px rgba(0,54,80,0.25)" : isAvailable ? compact ? "inset 0px 0.5px 3px 0px #75a9c2" : "inset 0px 0.5px 4px 0px #75a9c2" : undefined
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-['Inter'] ${compact ? "text-[11px]" : "text-[14.36px]"} leading-[150%] font-normal ${isSelected ? "text-white" : isAvailable ? "text-client" : "text-[rgba(26,26,26,0.61)]"}`,
                    children: date
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this),
                hasIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute rounded-full bg-[rgba(26,26,26,0.61)]",
                    style: {
                        width: "3.58px",
                        height: "3.58px",
                        bottom: "-4px"
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
function TimezoneDisplay({ compact = false }) {
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 pt-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeIcon"], {
                    size: 12,
                    className: "shrink-0"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "truncate font-['Inter'] text-[11px] leading-[150%] font-normal text-neutral-800",
                    children: "Central European Time"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        style: {
            gap: "5.99px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-['Inter'] text-[12px] leading-[150%] font-normal text-neutral-800",
                children: "Time zone"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                style: {
                    gap: "3.99px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        style: {
                            gap: "11.97px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobeIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-['Inter'] text-[12px] leading-[150%] font-normal text-neutral-800",
                                children: "Central European Time (8:11pm)"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "8",
                        height: "8",
                        viewBox: "0 0 8 8",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 3L4 5L6 3",
                            stroke: "currentColor",
                            className: "text-neutral-800",
                            strokeWidth: "1",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InterviewInvitation",
    ()=>InterviewInvitation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function InterviewInvitation({ compact = false }) {
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full flex-col gap-3 border-b border-neutral-300 bg-[rgba(255,255,255,0.24)] p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative size-12 shrink-0 overflow-hidden rounded-full bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/Jacob-Smith.svg",
                                alt: "Jacob Smith",
                                width: 48,
                                height: 48,
                                className: "size-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 flex-1 flex-col gap-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
                                    children: "Jacob Smith"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate font-['Inter'] text-[14px] leading-[150%] font-semibold tracking-[0.2px] text-neutral-900",
                                    children: "Interview Invitation"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700",
                                    children: "30 mins."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700",
                                    children: "Zoom"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[460px] w-[240px] flex-col justify-between border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]",
        style: {
            padding: "24px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                style: {
                    gap: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        style: {
                            gap: "12px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative size-12 overflow-hidden rounded-full bg-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/Jacob-Smith.svg",
                                    alt: "Jacob Smith",
                                    width: 48,
                                    height: 48,
                                    className: "size-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.2px] text-neutral-700",
                                        children: "Jacob Smith"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Inter'] text-[14px] leading-[150%] font-semibold tracking-[0.2px] text-neutral-900",
                                        children: "Interview Invitation"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                        size: 14,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700",
                                        children: "30 mins."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LocationIcon"], {
                                        size: 14,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Inter'] text-[11px] leading-[120%] font-normal tracking-[0.21px] text-neutral-700",
                                        children: "Zoom"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "flex h-8 w-full items-center justify-center rounded border-[0.75px] border-neutral-300 bg-transparent font-['Inter'] text-[11px] leading-[96%] font-semibold text-neutral-900 transition-colors hover:bg-[rgba(0,0,0,0.02)]",
                children: "Send a message"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimeSlotPicker",
    ()=>TimeSlotPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TimeSlotPicker({ isVisible, compact = false }) {
    const slots = compact ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOBILE_TIME_SLOTS"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIME_SLOTS"];
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex w-full flex-col gap-3 overflow-hidden bg-[rgba(255,255,255,0.24)]",
            initial: {
                height: 0,
                paddingTop: 0,
                paddingBottom: 0,
                opacity: 0
            },
            animate: {
                height: isVisible ? "auto" : 0,
                paddingTop: isVisible ? 16 : 0,
                paddingBottom: isVisible ? 16 : 0,
                opacity: isVisible ? 1 : 0
            },
            transition: {
                duration: 0.4,
                ease: [
                    0.22,
                    1,
                    0.36,
                    1
                ]
            },
            style: {
                minHeight: isVisible ? "auto" : 0
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "px-4 font-['Inter'] text-[13px] leading-[150%] font-bold tracking-[0.2px] text-neutral-900",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: isVisible ? 1 : 0
                    },
                    transition: {
                        duration: 0.2,
                        delay: isVisible ? 0.1 : 0
                    },
                    children: "Friday April 23"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2 px-4",
                    children: slots.map((time, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                            initial: {
                                opacity: 0,
                                y: 10
                            },
                            animate: {
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 10
                            },
                            transition: {
                                duration: 0.25,
                                delay: isVisible ? 0.1 + index * 0.03 : 0,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "text-client hover:bg-client flex h-[36px] w-full items-center justify-center rounded border border-white bg-[var(--color-schedule-time-bg)] font-['Inter'] text-[13px] font-medium shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)] transition-colors hover:text-white hover:shadow-none",
                            children: time
                        }, time, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex h-[460px] flex-col border-r border-neutral-300 bg-[rgba(255,255,255,0.24)]",
        initial: {
            width: 0,
            opacity: 0,
            padding: 0
        },
        animate: {
            width: isVisible ? "248px" : 0,
            opacity: isVisible ? 1 : 0,
            padding: isVisible ? "24px" : 0
        },
        transition: {
            duration: 0.4,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        style: {
            gap: isVisible ? "20px" : 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "font-['Inter'] text-[16px] leading-[150%] font-bold tracking-[0.2px] whitespace-nowrap text-neutral-900",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: isVisible ? 1 : 0
                },
                transition: {
                    duration: 0.2,
                    delay: isVisible ? 0.2 : 0
                },
                children: "Friday April 23"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col",
                style: {
                    gap: "6px"
                },
                children: slots.map((time, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: isVisible ? 1 : 0,
                            x: isVisible ? 0 : 20
                        },
                        transition: {
                            duration: 0.25,
                            delay: isVisible ? 0.15 + index * 0.03 : 0,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "text-client hover:bg-client flex h-[38px] w-full items-center justify-center rounded border border-white bg-[var(--color-schedule-time-bg)] font-['Inter'] text-[14px] font-medium whitespace-nowrap shadow-[inset_0px_0.5px_4px_0px_var(--color-schedule-time-shadow)] transition-colors hover:text-white hover:shadow-none",
                        children: time
                    }, time, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentScheduleCard",
    ()=>TalentScheduleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useInViewWithDelay.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useWindowSize.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$CalendarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/CalendarGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$InterviewInvitation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/InterviewInvitation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TimeSlotPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TimeSlotPicker.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const TalentScheduleCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isMobile })=>{
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use delayed exit to prevent jarring resets when scrolling
    const isCardInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewWithDelay"])(cardRef, {
        amount: 0.3,
        exitDelay: 800
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTimeSlots, setShowTimeSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { width } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWindowSize"])();
    // Check if we should use mobile layout (under 640px)
    const useMobileLayout = width > 0 && width < 640;
    // Calculate scale based on expanded width to prevent layout shift
    // Always use expanded width (844px) for scale calculation
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (width === 0) return 1;
        if (useMobileLayout) return 1;
        const expandedWidth = 844;
        const availableWidth = Math.min(width - 32, 900);
        return Math.min(1, availableWidth / expandedWidth);
    }, [
        width,
        useMobileLayout
    ]);
    const shouldAnimate = isMobile ? isCardInView : isHovered;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Prevent re-triggering while already showing
        if (shouldAnimate && hasTriggeredRef.current) return;
        if (shouldAnimate) {
            hasTriggeredRef.current = true;
            const timer = setTimeout(()=>setShowTimeSlots(true), 300);
            return ()=>clearTimeout(timer);
        } else {
            // Reset when leaving viewport (mobile) or unhover (desktop)
            hasTriggeredRef.current = false;
            setShowTimeSlots(false);
        }
    }, [
        shouldAnimate
    ]);
    // Mobile layout - pass showTimeSlots which is already controlled by the effect above
    if (useMobileLayout) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: cardRef,
            className: "flex w-full justify-center px-4",
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feature-card flex w-full max-w-[380px] flex-col sm:max-w-[420px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$InterviewInvitation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InterviewInvitation"], {
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                        lineNumber: 68,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$CalendarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarGrid"], {
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TimeSlotPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeSlotPicker"], {
                        isVisible: showTimeSlots,
                        compact: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                lineNumber: 67,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
            lineNumber: 61,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Fixed container width to prevent layout shift
    const containerWidth = 844;
    const cardWidth = showTimeSlots ? 844 : 596;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "flex w-full justify-center px-4",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: `${containerWidth * scale}px`,
                height: `${460 * scale}px`
            },
            className: "flex items-start justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "feature-card flex p-0!",
                style: {
                    height: "460px",
                    transform: `scale(${scale})`,
                    transformOrigin: "top center"
                },
                initial: {
                    width: "596px"
                },
                animate: {
                    width: `${cardWidth}px`
                },
                transition: {
                    duration: 0.4,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$InterviewInvitation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InterviewInvitation"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                            lineNumber: 107,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$CalendarGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CalendarGrid"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                            lineNumber: 108,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TimeSlotPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TimeSlotPicker"], {
                            isVisible: showTimeSlots
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                            lineNumber: 109,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
                lineNumber: 95,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
            lineNumber: 88,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx",
        lineNumber: 81,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
TalentScheduleCard.displayName = "TalentScheduleCard";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TalentScheduleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckinContent",
    ()=>CheckinContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$GlassRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const CheckinContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ showLoadingPhase, showProcessingPhase, showTrendsPhase, showSecondTrendPhase, showThirdTrendPhase, showAnalyzingPhase, showCompletionPhase, showSuggestedActions, suggestedActionsHeight, currentNameIndex, checkinNames, suggestedActions, suggestedActionsRef })=>{
    const isProcessingOrTrends = showProcessingPhase || showTrendsPhase || showSecondTrendPhase || showThirdTrendPhase || showAnalyzingPhase;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "flex w-full flex-col items-start gap-4 px-4 pb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "popLayout",
            initial: false,
            children: !showLoadingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CollectingPhase, {
                currentNameIndex: currentNameIndex,
                checkinNames: checkinNames
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)) : isProcessingOrTrends ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessingPhase, {
                showProcessingPhase: showProcessingPhase,
                showAnalyzingPhase: showAnalyzingPhase,
                showTrendsPhase: showTrendsPhase,
                showSecondTrendPhase: showSecondTrendPhase
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 58,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)) : showCompletionPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompletionPhase, {
                showSuggestedActions: showSuggestedActions,
                suggestedActionsHeight: suggestedActionsHeight,
                suggestedActions: suggestedActions,
                suggestedActionsRef: suggestedActionsRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)) : null
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 51,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
CheckinContent.displayName = "CheckinContent";
const CollectingPhase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ currentNameIndex, checkinNames })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.35
        },
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$GlassRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassRow"], {
            contentClassName: "justify-start items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/icons/icon-active-trials.svg",
                    alt: "User icon",
                    width: 20,
                    height: 20,
                    className: "size-4 shrink-0 sm:size-5"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "flex min-w-0 flex-1 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                y: 10,
                                filter: "blur(4px)"
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                duration: 0.25,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            },
                            className: "font-text-s mr-1 text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)",
                            children: [
                                checkinNames[currentNameIndex],
                                ":"
                            ]
                        }, currentNameIndex, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            layout: true,
                            className: "font-text-s text-client truncate text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)",
                            children: "submitted their weekly checkin."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, "content-collecting", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CollectingPhase.displayName = "CollectingPhase";
const ProcessingPhase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ showProcessingPhase, showAnalyzingPhase, showTrendsPhase, showSecondTrendPhase })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "w-full",
        transition: {
            duration: 0.35
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$GlassRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlassRow"], {
            contentClassName: "items-center gap-2 sm:gap-2.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    initial: false,
                    children: showProcessingPhase || showAnalyzingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpinnerIcon, {}, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendIcon, {}, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    initial: false,
                    children: showProcessingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessingText, {
                        children: "Processing weekly responses..."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : showAnalyzingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessingText, {
                        children: "System connecting patterns..."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendsPill, {
                        showTrendsPhase: showTrendsPhase,
                        showSecondTrendPhase: showSecondTrendPhase
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 163,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, "content-processing-group", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
ProcessingPhase.displayName = "ProcessingPhase";
const SpinnerIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "flex items-center justify-center",
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.8
        },
        transition: {
            duration: 0.2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 16 16",
            fill: "none",
            className: "size-5 shrink-0 animate-spin",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8",
                    cy: "8",
                    r: "6",
                    stroke: "#e0e0e0",
                    strokeWidth: "2",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 193,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M 8 2 A 6 6 0 0 1 14 8",
                    stroke: "#00a7f8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 201,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 186,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, "spinner-wrapper", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 177,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TrendIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        exit: {
            opacity: 0,
            scale: 0.8
        },
        transition: {
            duration: 0.2
        },
        className: "flex shrink-0 items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative size-6 shrink-0 overflow-hidden sm:size-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/icons/yellow-circle.svg",
                    alt: "Trend indicator",
                    width: 80,
                    height: 80,
                    className: "absolute size-[80px]",
                    style: {
                        left: "50%",
                        top: "calc(50% + 4px)",
                        transform: "translate(-50%, -50%)",
                        width: "auto",
                        height: "auto"
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 223,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 222,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-text-s text-sm leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)] sm:text-base lg:text-(length:--text-s-font-size)",
                children: "Spotting trends:"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 238,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, "trend-icon", true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 213,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ProcessingText = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            x: -10
        },
        animate: {
            opacity: 1,
            x: 0
        },
        exit: {
            opacity: 0,
            x: 10
        },
        transition: {
            duration: 0.25
        },
        className: "flex-1",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-text-s text-base leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-s-font-style)]",
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 253,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 245,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const TrendsPill = ({ showTrendsPhase, showSecondTrendPhase })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "flex min-w-0 flex-1 items-center justify-start overflow-hidden rounded-full border border-white bg-[#FFF7E0] px-2.5 py-1 shadow-[inset_0px_0.5px_4px_#FFE390] sm:ml-auto sm:w-auto sm:flex-none sm:justify-center sm:px-3 sm:py-1.5",
        transition: {
            layout: {
                duration: 0.35,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "popLayout",
            initial: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                layout: true,
                initial: {
                    opacity: 0,
                    y: 10,
                    filter: "blur(4px)"
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)"
                },
                exit: {
                    opacity: 0,
                    y: -10,
                    transition: {
                        duration: 0.15
                    }
                },
                transition: {
                    opacity: {
                        duration: 0.25
                    },
                    y: {
                        duration: 0.25
                    },
                    filter: {
                        duration: 0.25
                    }
                },
                className: "font-text-s truncate text-left text-xs leading-[120%] font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) text-[#533E00] [font-style:var(--text-s-font-style)] sm:text-center sm:text-sm sm:whitespace-nowrap",
                children: showTrendsPhase ? "Workload 30% higher" : showSecondTrendPhase ? "Satisfaction score dropped 15%" : 'Availability marked "Limited"'
            }, showTrendsPhase ? "workload" : showSecondTrendPhase ? "satisfaction" : "availability", false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 272,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, "pill-container", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 266,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const CompletionPhase = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ showSuggestedActions, suggestedActionsHeight, suggestedActions, suggestedActionsRef })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "feature-capsule-rounded w-full cursor-pointer",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: 0.35
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: "relative z-10 flex w-full flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "flex h-12 w-full items-center gap-2.5 px-6 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            layout: true,
                            className: "relative size-8 shrink-0 overflow-hidden",
                            initial: {
                                scale: 0,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                scale: {
                                    duration: 0.5,
                                    ease: [
                                        0.34,
                                        1.56,
                                        0.64,
                                        1
                                    ]
                                },
                                opacity: {
                                    duration: 0.5
                                },
                                layout: {
                                    duration: 0.35
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/icons/green-circle.svg",
                                alt: "Success indicator",
                                width: 80,
                                height: 80,
                                className: "absolute size-[80px]",
                                style: {
                                    left: "50%",
                                    top: "calc(50% + 4px)",
                                    transform: "translate(-50%, -50%)",
                                    width: "auto",
                                    height: "auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            layout: true,
                            initial: {
                                opacity: 0,
                                y: 10,
                                filter: "blur(4px)"
                            },
                            animate: {
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)"
                            },
                            transition: {
                                duration: 0.5,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ],
                                layout: {
                                    duration: 0.35
                                }
                            },
                            className: "font-text-s text-success text-base leading-(--text-s-line-height) font-(--text-s-font-weight) tracking-(--text-s-letter-spacing) [font-style:var(--text-s-font-style)]",
                            children: "Check our suggested actions."
                        }, "completion-text", false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                            lineNumber: 354,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !showSuggestedActions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    ref: suggestedActionsRef,
                    className: "invisible absolute flex w-full flex-col border-t border-white/20 px-6 py-2.5",
                    style: {
                        pointerEvents: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuggestedActionsList, {
                        actions: suggestedActions
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 378,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 372,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    initial: false,
                    children: showSuggestedActions && suggestedActionsHeight > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: 1,
                            height: suggestedActionsHeight
                        },
                        exit: {
                            opacity: 0,
                            height: 0
                        },
                        transition: {
                            height: {
                                duration: 0.8,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ]
                            },
                            opacity: {
                                duration: 0.7,
                                ease: [
                                    0.25,
                                    0.1,
                                    0.25,
                                    1
                                ],
                                delay: 0.15
                            },
                            layout: {
                                duration: 0.35
                            }
                        },
                        className: "flex w-full flex-col overflow-hidden border-t border-white/20 px-6 py-2.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuggestedActionsList, {
                            actions: suggestedActions,
                            animated: true
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                            lineNumber: 400,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 384,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
            lineNumber: 323,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, "completion-content", false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
CompletionPhase.displayName = "CompletionPhase";
const SuggestedActionsList = ({ actions, animated = false })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        className: "flex w-full flex-col gap-2.5",
        children: actions.map((action, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                ...animated && {
                    initial: {
                        opacity: 0,
                        y: -10,
                        filter: "blur(4px)"
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)"
                    },
                    transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: [
                            0.25,
                            0.1,
                            0.25,
                            1
                        ],
                        layout: {
                            duration: 0.35
                        }
                    }
                },
                className: "flex w-full items-start gap-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "bg-success mt-0.5 ml-1 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white",
                        children: action.id
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 435,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        layout: true,
                        className: "flex flex-1 flex-col gap-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                className: "font-text-s text-xs leading-[150%] font-semibold tracking-(--text-s-letter-spacing) text-neutral-900 [font-style:var(--text-s-font-style)]",
                                children: action.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                layout: true,
                                className: "text-[11px] leading-[150%] tracking-[0.2px] text-neutral-700",
                                children: action.description
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, action.id, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
                lineNumber: 420,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx",
        lineNumber: 418,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckinHeader",
    ()=>CheckinHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const CheckinHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ showLoadingPhase, showProcessingPhase, showTrendsPhase, showSecondTrendPhase, showThirdTrendPhase, showAnalyzingPhase, showCompletionPhase, loadingProgress })=>{
    const isSpotting = showProcessingPhase || showTrendsPhase || showSecondTrendPhase || showThirdTrendPhase;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute top-0 left-0 z-50 flex w-full flex-col items-center justify-center gap-1 overflow-hidden px-4 pt-4 pb-2 sm:gap-1.5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative grid grid-cols-1 grid-rows-1 place-items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-text-large-b collapse col-start-1 row-start-1 text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) whitespace-nowrap [font-style:var(--text-large-b-font-style)] opacity-0",
                    children: "Collecting Weekly Checkin"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    initial: false,
                    children: !showLoadingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderText, {
                        children: "Collecting Weekly Checkin"
                    }, "header-collecting", false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                        lineNumber: 42,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : isSpotting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderText, {
                        className: "gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                children: "Spotting Problems"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                layout: true,
                                className: "inline-block min-w-10 text-left tabular-nums",
                                children: [
                                    Math.round(loadingProgress),
                                    "%"
                                ]
                            }, "progress-nums", true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                                lineNumber: 49,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, "header-spotting", true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                        lineNumber: 46,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : showAnalyzingPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderText, {
                        children: "Analyzing trends"
                    }, "header-analyzing", false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                        lineNumber: 58,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : showCompletionPhase ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderText, {
                        children: "We Spot 3 Problems"
                    }, "header-completion", false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                        lineNumber: 60,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : null
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
CheckinHeader.displayName = "CheckinHeader";
const HeaderText = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ children, className = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        layout: true,
        initial: {
            opacity: 0,
            filter: "blur(4px)"
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)"
        },
        exit: {
            opacity: 0,
            filter: "blur(4px)",
            transition: {
                duration: 0.15
            }
        },
        transition: {
            duration: 0.25,
            layout: {
                duration: 0.35
            }
        },
        className: `font-text-large-b z-10 col-start-1 row-start-1 flex items-center justify-center text-center text-lg leading-(--text-large-b-line-height) font-(--text-large-b-font-weight) tracking-(--text-large-b-letter-spacing) whitespace-nowrap text-neutral-900 [font-style:var(--text-large-b-font-style)] ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
HeaderText.displayName = "HeaderText";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/checkinAnimationUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INITIAL_STATE",
    ()=>INITIAL_STATE,
    "animateProgress",
    ()=>animateProgress,
    "createDelayedAction",
    ()=>createDelayedAction
]);
const INITIAL_STATE = {
    currentNameIndex: 0,
    showLoadingPhase: false,
    showProcessingPhase: false,
    showTrendsPhase: false,
    showSecondTrendPhase: false,
    showThirdTrendPhase: false,
    showAnalyzingPhase: false,
    showCompletionPhase: false,
    showSuggestedActions: false,
    loadingProgress: 0,
    suggestedActionsHeight: 0
};
function animateProgress(from, to, duration, onUpdate, onComplete) {
    const startTime = Date.now();
    const interval = 50; // Update every 50ms instead of every frame
    const timerId = setInterval(()=>{
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = from + (to - from) * progress;
        onUpdate(value);
        if (progress >= 1) {
            clearInterval(timerId);
            onComplete?.();
        }
    }, interval);
    return ()=>clearInterval(timerId);
}
function createDelayedAction(delay, action) {
    const timer = setTimeout(action, delay);
    return ()=>clearTimeout(timer);
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/useCheckinAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCheckinAnimation",
    ()=>useCheckinAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/checkinAnimationUtils.ts [app-ssr] (ecmascript)");
;
;
function useCheckinAnimation({ isMobile, isInView, isHovered, namesCount }) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_STATE"]);
    const suggestedActionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasTriggeredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const updateState = (updates)=>setState((prev)=>({
                ...prev,
                ...updates
            }));
    const resetState = ()=>setState(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_STATE"]);
    // Name cycling effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const shouldTrigger = isMobile ? isInView : isHovered;
        // Prevent re-triggering while animation is running
        if (shouldTrigger && hasTriggeredRef.current) return;
        if (shouldTrigger) {
            hasTriggeredRef.current = true;
            let cycleCount = 0;
            let intervalId = null;
            const advanceName = ()=>{
                setState((prev)=>{
                    const next = prev.currentNameIndex + 1;
                    if (next >= namesCount) {
                        cycleCount++;
                        if (cycleCount >= 1) {
                            // Clear interval when loading phase starts
                            if (intervalId) clearInterval(intervalId);
                            return {
                                ...prev,
                                showLoadingPhase: true
                            };
                        }
                        return {
                            ...prev,
                            currentNameIndex: 0
                        };
                    }
                    return {
                        ...prev,
                        currentNameIndex: next
                    };
                });
            };
            advanceName();
            intervalId = setInterval(advanceName, 2000);
            return ()=>{
                if (intervalId) clearInterval(intervalId);
            };
        }
        // Reset when leaving viewport (mobile) or unhover (desktop)
        hasTriggeredRef.current = false;
        updateState({
            showSuggestedActions: false
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedAction"])(850, resetState);
    }, [
        isMobile,
        isInView,
        isHovered,
        namesCount
    ]);
    // Animation sequence effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!state.showLoadingPhase) return;
        updateState({
            showProcessingPhase: true,
            loadingProgress: 0
        });
        const cleanups = [];
        const runSequence = ()=>{
            updateState({
                showProcessingPhase: false,
                showTrendsPhase: true
            });
            cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateProgress"])(0, 35, 2000, (v)=>updateState({
                    loadingProgress: v
                }), ()=>{
                updateState({
                    showTrendsPhase: false,
                    showSecondTrendPhase: true
                });
                cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateProgress"])(35, 65, 2000, (v)=>updateState({
                        loadingProgress: v
                    }), ()=>{
                    updateState({
                        showSecondTrendPhase: false,
                        showThirdTrendPhase: true
                    });
                    cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["animateProgress"])(65, 100, 2000, (v)=>updateState({
                            loadingProgress: v
                        }), ()=>{
                        cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedAction"])(800, ()=>{
                            updateState({
                                showThirdTrendPhase: false,
                                showAnalyzingPhase: true
                            });
                            cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedAction"])(2000, ()=>{
                                updateState({
                                    showAnalyzingPhase: false,
                                    showCompletionPhase: true
                                });
                            }));
                        }));
                    }));
                }));
            }));
        };
        cleanups.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedAction"])(1800, runSequence));
        return ()=>cleanups.forEach((cleanup)=>cleanup());
    }, [
        state.showLoadingPhase
    ]);
    // Suggested actions height measurement
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (state.showCompletionPhase && suggestedActionsRef.current) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$checkinAnimationUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDelayedAction"])(500, ()=>{
                const height = suggestedActionsRef.current?.scrollHeight ?? 0;
                updateState({
                    suggestedActionsHeight: height
                });
                setTimeout(()=>updateState({
                        showSuggestedActions: true
                    }), 50);
            });
        }
        updateState({
            showSuggestedActions: false,
            suggestedActionsHeight: 0
        });
    }, [
        state.showCompletionPhase
    ]);
    return {
        state,
        suggestedActionsRef
    };
}
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeeklyCheckinCard",
    ()=>WeeklyCheckinCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useInViewWithDelay.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$CheckinContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$CheckinHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/CheckinHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$useCheckinAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/useCheckinAnimation.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const WeeklyCheckinCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isMobile })=>{
    const checkinCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use delayed exit to prevent jarring resets when scrolling
    const isCheckinCardInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewWithDelay"])(checkinCardRef, {
        amount: 0.3,
        exitDelay: 800
    });
    const [isCheckinHovered, setIsCheckinHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { state, suggestedActionsRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$useCheckinAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCheckinAnimation"])({
        isMobile,
        isInView: isCheckinCardInView,
        isHovered: isCheckinHovered,
        namesCount: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkinNames"].length
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: checkinCardRef,
        className: "flex h-[350px] w-full items-start justify-center",
        onMouseEnter: ()=>setIsCheckinHovered(true),
        onMouseLeave: ()=>setIsCheckinHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            layout: true,
            className: "feature-card flex w-auto max-w-[600px] flex-col items-center gap-0! overflow-hidden p-0!",
            transition: {
                layout: {
                    duration: 0.35,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ]
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: "relative flex w-full flex-col items-center gap-2 overflow-hidden border-0 bg-transparent shadow-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$CheckinHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckinHeader"], {
                        showLoadingPhase: state.showLoadingPhase,
                        showProcessingPhase: state.showProcessingPhase,
                        showTrendsPhase: state.showTrendsPhase,
                        showSecondTrendPhase: state.showSecondTrendPhase,
                        showThirdTrendPhase: state.showThirdTrendPhase,
                        showAnalyzingPhase: state.showAnalyzingPhase,
                        showCompletionPhase: state.showCompletionPhase,
                        loadingProgress: state.loadingProgress
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[54px] w-full shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$CheckinContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckinContent"], {
                        showLoadingPhase: state.showLoadingPhase,
                        showProcessingPhase: state.showProcessingPhase,
                        showTrendsPhase: state.showTrendsPhase,
                        showSecondTrendPhase: state.showSecondTrendPhase,
                        showThirdTrendPhase: state.showThirdTrendPhase,
                        showAnalyzingPhase: state.showAnalyzingPhase,
                        showCompletionPhase: state.showCompletionPhase,
                        showSuggestedActions: state.showSuggestedActions,
                        suggestedActionsHeight: state.suggestedActionsHeight,
                        currentNameIndex: state.currentNameIndex,
                        checkinNames: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkinNames"],
                        suggestedActions: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["suggestedActions"],
                        suggestedActionsRef: suggestedActionsRef
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx",
        lineNumber: 31,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
WeeklyCheckinCard.displayName = "WeeklyCheckinCard";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$WeeklyCheckinCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WellnessScoreCard",
    ()=>WellnessScoreCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useInViewWithDelay.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
;
// Status based on score - using CSS variables where possible
const getStatus = (score)=>{
    if (score >= 8) return {
        label: "Good",
        color: "var(--color-matched-green)",
        bg: "rgba(5, 150, 105, 0.08)"
    };
    if (score >= 5) return {
        label: "Poor",
        color: "var(--color-warning)",
        bg: "rgba(245, 158, 11, 0.08)"
    };
    return {
        label: "Critical",
        color: "var(--color-error)",
        bg: "var(--color-error-light)"
    };
};
// Bar widths from Figma
const barWidthPercents = [
    19.72,
    20.53,
    19.51,
    20.33,
    19.92
];
// Chart rows from Figma - bottom to top
// Using CSS variable references for client color and trial orange
const CLIENT_COLOR = "var(--color-client)";
const CLIENT_LIGHT = "#99DBFF";
const TRIAL_ORANGE = "var(--color-trial-orange)";
const TRIAL_LIGHT = "#FFC299";
const chartRows = [
    {
        bottom: 10,
        colors: [
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_LIGHT
        ]
    },
    {
        bottom: 36,
        colors: [
            CLIENT_LIGHT,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR
        ]
    },
    {
        bottom: 62,
        colors: [
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_LIGHT,
            CLIENT_LIGHT
        ]
    },
    {
        bottom: 88,
        colors: [
            CLIENT_LIGHT,
            CLIENT_LIGHT,
            CLIENT_COLOR,
            CLIENT_COLOR,
            CLIENT_COLOR
        ]
    },
    {
        bottom: 114,
        colors: [
            CLIENT_LIGHT,
            CLIENT_LIGHT,
            CLIENT_LIGHT,
            TRIAL_LIGHT,
            TRIAL_LIGHT
        ]
    },
    {
        bottom: 140,
        colors: [
            CLIENT_LIGHT,
            TRIAL_LIGHT,
            TRIAL_LIGHT,
            TRIAL_LIGHT,
            TRIAL_ORANGE
        ]
    },
    {
        bottom: 166,
        colors: [
            TRIAL_ORANGE,
            TRIAL_ORANGE,
            TRIAL_LIGHT,
            TRIAL_LIGHT,
            TRIAL_ORANGE
        ]
    },
    {
        bottom: 192,
        colors: [
            TRIAL_ORANGE,
            TRIAL_ORANGE,
            TRIAL_ORANGE,
            TRIAL_LIGHT,
            null
        ]
    }
];
const verticalLines = [
    97,
    198,
    294,
    394
];
const easeOutCubic = (t)=>1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t)=>t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
// Pre-calculate score for each cell to avoid recalculation during animation
const TOTAL_CELLS = 40;
const PHASE1_CELLS = 25;
const getScoreForCell = (cellIndex)=>{
    if (cellIndex < PHASE1_CELLS) {
        const phase1Progress = cellIndex / PHASE1_CELLS;
        return Math.round(10 * easeOutCubic(phase1Progress));
    }
    const phase2Progress = (cellIndex - PHASE1_CELLS) / (TOTAL_CELLS - PHASE1_CELLS);
    return Math.round(10 - 6 * easeInOutCubic(phase2Progress));
};
const initialAnimationState = {
    cellIndex: -1,
    score: 0,
    status: getStatus(0)
};
// Reducer batches all animation state updates into single dispatch
const animationReducer = (state, action)=>{
    switch(action.type){
        case "UPDATE":
            {
                const score = getScoreForCell(action.cellIndex);
                return {
                    cellIndex: action.cellIndex,
                    score,
                    status: getStatus(score)
                };
            }
        case "RESET":
            return initialAnimationState;
        default:
            return state;
    }
};
const WellnessScoreCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(({ isMobile })=>{
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isCardInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useInViewWithDelay$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInViewWithDelay"])(cardRef, {
        amount: 0.3,
        exitDelay: 800
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use reducer for batched animation state updates (3 states → 1 dispatch)
    const [animationState, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])(animationReducer, initialAnimationState);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAnimatingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const shouldAnimate = isMobile ? isCardInView : isHovered;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (shouldAnimate && isAnimatingRef.current) return;
        if (!shouldAnimate) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            isAnimatingRef.current = false;
            dispatch({
                type: "RESET"
            });
            return;
        }
        isAnimatingRef.current = true;
        let currentCell = 0;
        // Use setInterval instead of RAF - fires every 300ms instead of every frame
        // Single dispatch replaces 3 setState calls
        intervalRef.current = setInterval(()=>{
            if (currentCell >= TOTAL_CELLS) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return;
            }
            dispatch({
                type: "UPDATE",
                cellIndex: currentCell
            });
            currentCell++;
        }, 300);
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [
        shouldAnimate
    ]);
    // Helper to check if a cell should be visible
    const isCellVisible = (rowIndex, colIndex)=>{
        const cellIndex = rowIndex * 5 + colIndex;
        return cellIndex <= animationState.cellIndex;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: "flex w-full justify-center",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "feature-card flex h-[310px] w-full max-w-[524px] flex-col items-start gap-4 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative flex h-full w-full flex-col items-start gap-4 border-0 bg-transparent p-0 shadow-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "flex flex-wrap items-center gap-2 p-0 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 shrink-0 items-center justify-center gap-2 rounded-full border border-neutral-300 bg-(--color-neutral-100) px-3 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-['Inter'] text-sm leading-[150%] font-normal tracking-[0.2px] whitespace-nowrap text-neutral-900 sm:text-base",
                                        children: "Wellness Score:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                        lineNumber: 238,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-5 text-center font-['Inter'] text-sm leading-[150%] font-semibold tracking-[0.2px] text-neutral-900 tabular-nums sm:text-base",
                                        children: animationState.score
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                        lineNumber: 241,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-8 shrink-0 items-center justify-center rounded-full border px-3 py-1 transition-all duration-300 ease-out sm:px-4",
                                style: {
                                    backgroundColor: animationState.status.bg,
                                    borderColor: `color-mix(in srgb, ${animationState.status.color} 30%, transparent)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-['Inter'] text-sm leading-[150%] font-medium tracking-[0.2px] whitespace-nowrap transition-colors duration-300",
                                    style: {
                                        color: animationState.status.color
                                    },
                                    children: animationState.status.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                        lineNumber: 236,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "relative w-full p-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full rounded-lg border border-neutral-300 bg-(--color-neutral-100)",
                            style: {
                                height: "222px"
                            },
                            children: [
                                chartRows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 flex h-[18px] w-full flex-row items-center",
                                        style: {
                                            bottom: `${row.bottom}px`
                                        },
                                        children: row.colors.map((color, colIndex)=>{
                                            if (color === null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: `${barWidthPercents[colIndex]}%`
                                                }
                                            }, colIndex, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                                lineNumber: 277,
                                                columnNumber: 27
                                            }, ("TURBOPACK compile-time value", void 0));
                                            const visible = isCellVisible(rowIndex, colIndex);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[18px] shrink-0 transition-opacity duration-300 ease-out",
                                                style: {
                                                    width: `${barWidthPercents[colIndex]}%`,
                                                    backgroundColor: color,
                                                    opacity: visible ? 1 : 0
                                                }
                                            }, colIndex, false, {
                                                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                                lineNumber: 286,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, rowIndex, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                        lineNumber: 269,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))),
                                verticalLines.map((left, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 z-10 h-full w-px bg-neutral-300",
                                        style: {
                                            left: `${left / 492 * 100}%`
                                        }
                                    }, i, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                            lineNumber: 263,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                        lineNumber: 261,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
                lineNumber: 235,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
            lineNumber: 234,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx",
        lineNumber: 228,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
WellnessScoreCard.displayName = "WellnessScoreCard";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/icons.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$CandidateProfileCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/CandidateProfileCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$GlassRow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/GlassRow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$HeroBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$NegotiationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WellnessScoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx [app-ssr] (ecmascript)");
// Shared utilities
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Content constants for FeaturesListSection
 * Extracted to reduce component file size and improve maintainability
 */ __turbopack_context__.s([
    "FEATURE_CONTENT",
    ()=>FEATURE_CONTENT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const FEATURE_CONTENT = {
    talent: {
        hero: {
            subtitle: "Completely transparent",
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Real visibility into",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/content.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "your work life"
                ]
            }, void 0, true)
        },
        wellbeing: {
            title: "Track your own wellbeing",
            description: "Monitor your workload, stress levels, and work-life balance so you know when to speak up or take breaks."
        },
        scheduling: {
            title: "Book your own interviews",
            description: "Schedule calls directly with potential clients instead of waiting days for a recruiter to coordinate availability."
        }
    },
    client: {
        hero: {
            subtitle: "Completely transparent",
            title: "Real-time insight into every hire"
        },
        wellbeing: {
            title: "Track burnout before it happens.",
            description: "Monitor workload, satisfaction, and availability scores so you know when your remote worker needs support."
        },
        scheduling: {
            title: "Schedule instantly, anywhere.",
            description: 'Built-in calendar booking means no more "let me check my schedule" delays. Book calls directly from candidate profiles.'
        }
    }
};
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesListSection",
    ()=>FeaturesListSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/components/shared/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$InnerShadowFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/shared/InnerShadowFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureSectionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/components/FeatureSectionBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$AvailabilityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/AvailabilityCard/AvailabilityCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$HeroBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/HeroBlock.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$NegotiationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/NegotiationCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TalentScheduleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/TalentScheduleCard/TalentScheduleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$WeeklyCheckinCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WeeklyCheckinCard/WeeklyCheckinCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WellnessScoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/components/WellnessScoreCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/content.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const FeaturesListSectionComponent = ()=>{
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isActiveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use hysteresis: enter at 25%, exit only when completely out of viewport
    const checkVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!textRef.current) return;
        const rect = textRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const elementHeight = rect.height;
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        const visibleRatio = Math.max(0, visibleHeight / elementHeight);
        if (!isActiveRef.current && visibleRatio >= 0.25) {
            isActiveRef.current = true;
            setIsInView(true);
        } else if (isActiveRef.current && visibleRatio <= 0) {
            isActiveRef.current = false;
            setIsInView(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (rafRef.current) return;
            rafRef.current = requestAnimationFrame(()=>{
                checkVisibility();
                rafRef.current = null;
            });
        };
        checkVisibility();
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [
        checkVisibility
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    const isTalent = selectedRole === "talent";
    const content = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FEATURE_CONTENT"].talent : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$content$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FEATURE_CONTENT"].client;
    const gradientBg = isTalent ? "bg-[linear-gradient(180deg,rgba(255,240,245,1)_0%,rgba(255,224,236,1)_18%,rgba(255,107,157,1)_100%)]" : "bg-[linear-gradient(180deg,rgba(239,250,255,1)_0%,rgba(215,242,255,1)_18%,rgba(0,120,178,1)_100%)]";
    const gradientShadow = isTalent ? "shadow-[0px_8.4px_11.2px_#ff408140]" : "shadow-[0px_8.4px_11.2px_#00365040]";
    const beamColor = isTalent ? "#ff6b9d" : "#00A7F8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex w-full flex-col items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$HeroBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroBlock"], {
                textRef: textRef,
                isInView: isInView,
                beamColor: beamColor,
                heroTitle: content.hero.title,
                heroSubtitle: content.hero.subtitle
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureSectionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureSectionBlock"], {
                title: content.wellbeing.title,
                description: content.wellbeing.description,
                className: "relative",
                children: isTalent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WellnessScoreCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WellnessScoreCard"], {
                    isMobile: isMobile
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$WeeklyCheckinCard$2f$WeeklyCheckinCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WeeklyCheckinCard"], {
                    isMobile: isMobile
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                    lineNumber: 98,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureSectionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureSectionBlock"], {
                title: content.scheduling.title,
                description: content.scheduling.description,
                children: isTalent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$TalentScheduleCard$2f$TalentScheduleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TalentScheduleCard"], {
                    isMobile: isMobile
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$AvailabilityCard$2f$AvailabilityCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AvailabilityCard"], {
                    isMobile: isMobile
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$FeatureSectionBlock$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeatureSectionBlock"], {
                title: "Negotiate openly, upfront",
                description: "Comment on budgets, KPIs, and objectives before hiring starts. No surprises.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$components$2f$NegotiationCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NegotiationCard"], {
                    gradientBg: gradientBg,
                    gradientShadow: gradientShadow,
                    isTalent: isTalent
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$shared$2f$InnerShadowFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InnerShadowFilter"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const FeaturesListSection = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(FeaturesListSectionComponent);
FeaturesListSection.displayName = "FeaturesListSection";
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$FeaturesListSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturesListSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$FeaturesListSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FeaturesListSection"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$FeaturesListSection$2f$FeaturesListSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/FeaturesListSection.tsx [app-ssr] (ecmascript)");
}),
"[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/index.ts [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/FeaturesListSection/index.ts [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=apps_web_src_features_waitlist_6507319f._.js.map