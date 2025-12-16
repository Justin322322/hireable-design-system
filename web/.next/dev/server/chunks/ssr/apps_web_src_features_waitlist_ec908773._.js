module.exports = [
"[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleIconsGroup",
    ()=>RoleIconsGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const ICONS = [
    {
        src: "/icons/GD.svg",
        alt: "GD",
        width: 38.45,
        height: 80,
        flip: true
    },
    {
        src: "/icons/PM.svg",
        alt: "PM",
        width: 47.87,
        height: 76.32,
        flip: false
    },
    {
        src: "/icons/SM.svg",
        alt: "SM",
        width: 51.94,
        height: 67.46,
        flip: false
    },
    {
        src: "/icons/Vector.svg",
        alt: "Vector",
        width: 63.02,
        height: 56.62,
        flip: false
    }
];
const RoleIconsGroup = ({ className, hovered = false, isTalent = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-row items-end justify-center gap-[9.31px] pr-[5.82px]", "h-[80px] w-[235.03px]", className),
        children: [
            ICONS.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: icon.src,
                    alt: icon.alt,
                    width: icon.width,
                    height: icon.height,
                    style: {
                        filter: "url(#role-icon-inner-shadow)",
                        transform: icon.flip ? "scaleX(-1)" : undefined
                    }
                }, icon.alt, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex flex-row items-end justify-center gap-[9.31px] pr-[5.82px] transition-opacity duration-300 ease-out",
                style: {
                    opacity: hovered ? 1 : 0,
                    maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 100%)"
                },
                children: ICONS.map((icon)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: icon.src,
                        alt: "",
                        width: icon.width,
                        height: icon.height,
                        style: {
                            filter: isTalent ? "url(#role-icon-colored-shadow-talent)" : "url(#role-icon-colored-shadow-client)",
                            transform: icon.flip ? "scaleX(-1)" : undefined
                        }
                    }, `${icon.alt}-overlay`, false, {
                        fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute size-0 overflow-hidden",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "role-icon-inner-shadow",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#000000",
                                    result: "flood"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "out",
                                    in: "flood",
                                    in2: "SourceAlpha",
                                    result: "inverse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "1.16",
                                    in: "inverse",
                                    result: "blurred"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dx: "0",
                                    dy: "1.16",
                                    in: "blurred",
                                    result: "offset"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "offset",
                                    in2: "SourceAlpha",
                                    result: "shadow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                    in: "shadow",
                                    result: "shadow-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncA", {
                                        type: "linear",
                                        slope: "0.25"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "over",
                                    in: "shadow-opacity",
                                    in2: "SourceGraphic"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "role-icon-colored-shadow-talent",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#FFCCE0",
                                    result: "pink"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "pink",
                                    in2: "SourceAlpha",
                                    result: "colored"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#000000",
                                    result: "flood"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "out",
                                    in: "flood",
                                    in2: "SourceAlpha",
                                    result: "inverse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "1.16",
                                    in: "inverse",
                                    result: "blurred"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dx: "0",
                                    dy: "1.16",
                                    in: "blurred",
                                    result: "offset"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "offset",
                                    in2: "SourceAlpha",
                                    result: "shadow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                    in: "shadow",
                                    result: "shadow-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncA", {
                                        type: "linear",
                                        slope: "0.25"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "over",
                                    in: "shadow-opacity",
                                    in2: "colored"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "role-icon-colored-shadow-client",
                            x: "-50%",
                            y: "-50%",
                            width: "200%",
                            height: "200%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#CCE8FF",
                                    result: "blue"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "blue",
                                    in2: "SourceAlpha",
                                    result: "colored"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                                    floodColor: "#000000",
                                    result: "flood"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "out",
                                    in: "flood",
                                    in2: "SourceAlpha",
                                    result: "inverse"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "1.16",
                                    in: "inverse",
                                    result: "blurred"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                                    dx: "0",
                                    dy: "1.16",
                                    in: "blurred",
                                    result: "offset"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "in",
                                    in: "offset",
                                    in2: "SourceAlpha",
                                    result: "shadow"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComponentTransfer", {
                                    in: "shadow",
                                    result: "shadow-opacity",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feFuncA", {
                                        type: "linear",
                                        slope: "0.25"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                                    operator: "over",
                                    in: "shadow-opacity",
                                    in2: "colored"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Style constants for CallToActionSection
 * Extracted to reduce component file size
 */ __turbopack_context__.s([
    "CTA_CONTENT",
    ()=>CTA_CONTENT,
    "CTA_STYLES",
    ()=>CTA_STYLES,
    "GLOW_OPACITY",
    ()=>GLOW_OPACITY
]);
const CTA_STYLES = {
    default: {
        heading: "#BABABA",
        paragraph: "#616161",
        ctaOuter: "linear-gradient(180.81deg, #DADADA -17.64%, #FAFAFA 99.31%)",
        ctaShadow: "0px 6px 8px rgba(0, 0, 0, 0.1)",
        ctaInner: "#FAFAFA",
        buttonText: "#616161",
        svgFilter: "brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(90%) contrast(92%)"
    },
    client: {
        headingBase: "#797979",
        headingOverlay: "#BABABA",
        ctaOuter: "linear-gradient(180deg, #ACE2FD -22.19%, #E1F5FF 100%)",
        ctaShadow: "0px 2px 4px 0px #0000001A, 0px 6px 16px 2px #55C3FF3D",
        ctaInner: "linear-gradient(180deg, #E8F7FF 0%, #CCEDFF 46.63%, #CCEDFF 100%)",
        svgFilter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(93%)",
        glowColor: "#ACE2FD",
        glowColorMid: "rgba(172, 226, 253, 0.7)",
        glowColorRgba: "rgba(172, 226, 253, 0.4)"
    },
    talent: {
        headingBase: "#797979",
        headingOverlay: "#BABABA",
        ctaOuter: "linear-gradient(180deg, #FDACCE -22.19%, #FFE1EE 100%)",
        ctaShadow: "0px 2px 4px 0px #0000001A, 0px 6px 16px 2px #FF6B9D3D",
        ctaInner: "linear-gradient(180deg, #FFF0F5 0%, #FFCCE0 46.63%, #FFCCE0 100%)",
        svgFilter: "brightness(0) saturate(100%) invert(91%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(87%) contrast(93%)",
        glowColor: "#FDACCE",
        glowColorMid: "rgba(253, 172, 206, 0.7)",
        glowColorRgba: "rgba(253, 172, 206, 0.4)"
    }
};
const CTA_CONTENT = {
    talent: {
        heading: "Ready to stop client juggling?",
        paragraph: "Join 600+ remote workers building stable career with committed clients."
    },
    client: {
        heading: "Find your next long-term hire",
        paragraph: "Join 600+ clients to work with committed remote workers."
    }
};
const GLOW_OPACITY = 0.85;
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTAButton",
    ()=>CTAButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
function CTAButton({ onClick, isActive, isTalent, onMouseEnter, onMouseLeave }) {
    const hoverStyles = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].talent : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].client;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cta-button-outer transition-all duration-300 ease-out",
        "data-theme": isTalent ? "talent" : "client",
        style: {
            background: isActive ? hoverStyles.ctaOuter : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].default.ctaOuter,
            boxShadow: isActive ? hoverStyles.ctaShadow : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].default.ctaShadow
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: onClick,
            className: "cta-button-inner transition-all duration-300 ease-out",
            "data-theme": isTalent ? "talent" : "client",
            style: {
                background: isActive ? hoverStyles.ctaInner : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].default.ctaInner
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-center font-['Inter',Helvetica] text-xl leading-[150%] font-medium tracking-[0.4px] whitespace-nowrap",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].default.buttonText
                },
                children: "Join waitlist"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowText",
    ()=>GlowText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const HEADING_CLASSES = "w-full text-center font-['DM_Sans',Helvetica] text-3xl leading-[120%] font-semibold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px]";
const PARAGRAPH_CLASSES = "w-full text-center font-['Inter',Helvetica] text-sm leading-[150%] font-normal tracking-[0.4px] sm:text-base lg:text-xl";
function GlowText({ text, isGlowing, glowColors, glowOpacity, variant }) {
    const isHeading = variant === "heading";
    const baseClasses = isHeading ? HEADING_CLASSES : PARAGRAPH_CLASSES;
    // Gradient position differs for heading vs paragraph
    const gradientPosition = isHeading ? "50% calc(100% + 60px)" : "50% -150px";
    const gradientStyle = {
        backgroundImage: `radial-gradient(ellipse 950px 550px at ${gradientPosition}, ${glowColors.glowColor} 0%, ${glowColors.glowColorMid} 30%, ${glowColors.glowColorRgba} 60%, transparent 85%)`,
        opacity: isGlowing ? glowOpacity : 0
    };
    const Tag = isHeading ? "h2" : "p";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                className: `${baseClasses} ${isHeading ? "text-[rgba(128,128,128,0.6)] transition-colors duration-300 ease-out [text-shadow:0.25px_0.5px_0.75px_#f5f5f5,0_0_0_#000,0.25px_0.5px_0.75px_#f5f5f5] sm:[text-shadow:0.5px_1px_1.5px_#f5f5f5,0_0_0_#000,0.5px_1px_1.5px_#f5f5f5]" : "text-neutral-700"}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                className: `${baseClasses} pointer-events-none absolute inset-0 bg-clip-text text-transparent transition-opacity duration-300 ease-out`,
                style: gradientStyle,
                children: text
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$CTAButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$GlowText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/hooks/useCallToActionAnimation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCallToActionAnimation",
    ()=>useCallToActionAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
// Animation constants
const getMovingMap = (color)=>({
        TOP: `radial-gradient(20.7% 50% at 50% 0%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
        LEFT: `radial-gradient(16.6% 43.1% at 0% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
        BOTTOM: `radial-gradient(20.7% 50% at 50% 100%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`,
        RIGHT: `radial-gradient(16.2% 41.2% at 100% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`
    });
const getHighlightGradient = (color)=>`radial-gradient(75% 181.15942028985506% at 50% 50%, ${color} 0%, rgba(0, 0, 0, 0) 100%)`;
const ANIMATION_DURATION = 1.5;
const HOVER_DURATION = 0.5;
const rotateDirection = (currentDirection)=>{
    const directions = [
        "TOP",
        "LEFT",
        "BOTTOM",
        "RIGHT"
    ];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = (currentIndex - 1 + directions.length) % directions.length;
    return directions[nextIndex];
};
// Hover state colors from Figma design
const HOVER_COLORS = {
    // Text colors on hover (from Figma)
    headingColor: "#797979",
    headingColorAlt: "#BABABA",
    paragraphColor: "#616161",
    // CTA button hover styles
    ctaOuterGradient: "linear-gradient(180deg, #ACE2FD -22.19%, #E1F5FF 100%)",
    ctaInnerGradient: "linear-gradient(180deg, #E8F7FF 0%, #CCEDFF 46.63%, #CCEDFF 100%)",
    ctaShadow: "0px 6px 16px 2px rgba(85, 195, 255, 0.24), 0px 2px 4px rgba(0, 0, 0, 0.1)",
    // Glow effect
    glowColor: "#86D4FF",
    glowOpacity: 0.85
};
const useCallToActionAnimation = ()=>{
    const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelectedRole"])();
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("TOP");
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(ref);
    const isTalent = selectedRole === "talent";
    const accentColor = isTalent ? "rgba(255, 107, 157, 1)" : "rgba(134, 212, 255, 1)"; // #86D4FF for client
    const textAccentColor = isTalent ? "rgba(255, 107, 157, 0.8)" : "#BABABA";
    const textAccentColorAlt = isTalent ? "rgba(255, 107, 157, 0.9)" : "#616161";
    const MOVING_MAP = getMovingMap(accentColor);
    const HIGHLIGHT_GRADIENT = getHighlightGradient(accentColor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hovered && isInView) {
            const interval = setInterval(()=>{
                setDirection((prevState)=>rotateDirection(prevState));
            }, ANIMATION_DURATION * 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        hovered,
        isInView
    ]);
    return {
        ref,
        direction,
        hovered,
        setHovered,
        isTalent,
        textAccentColor,
        textAccentColorAlt,
        MOVING_MAP,
        HIGHLIGHT_GRADIENT,
        HOVER_DURATION,
        ANIMATION_DURATION,
        HOVER_COLORS
    };
};
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallToActionSection",
    ()=>CallToActionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$RoleIconsGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/components/RoleIconsGroup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$CTAButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/CTAButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$GlowText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/components/GlowText.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$hooks$2f$useCallToActionAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/hooks/useCallToActionAnimation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const CTA_VARIANTS = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(12px)"
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
const CallToActionSectionComponent = ({ onJoinWaitlistClick })=>{
    const { ref, hovered, setHovered, isTalent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$hooks$2f$useCallToActionAnimation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallToActionAnimation"])();
    const animateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(animateRef, {
        once: false,
        amount: 0.45,
        margin: "0px"
    });
    const content = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_CONTENT"].talent : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_CONTENT"].client;
    const glowColors = isTalent ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].talent : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTA_STYLES"].client;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: animateRef,
        className: "relative flex w-full flex-col items-center justify-center gap-[104px] px-4 py-[180px] sm:px-10 lg:px-20",
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: CTA_VARIANTS,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "flex w-full max-w-[742px] flex-col items-center gap-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$GlowText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlowText"], {
                            text: content.heading,
                            isGlowing: hovered,
                            glowColors: glowColors,
                            glowOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOW_OPACITY"],
                            variant: "heading"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$GlowText$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlowText"], {
                            text: content.paragraph,
                            isGlowing: hovered,
                            glowColors: glowColors,
                            glowOpacity: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GLOW_OPACITY"],
                            variant: "paragraph"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$components$2f$CTAButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTAButton"], {
                    onClick: onJoinWaitlistClick,
                    isActive: hovered,
                    isTalent: isTalent,
                    onMouseEnter: ()=>setHovered(true),
                    onMouseLeave: ()=>setHovered(false)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$components$2f$RoleIconsGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RoleIconsGroup"], {
                    className: "mt-16",
                    hovered: hovered,
                    isTalent: isTalent
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CallToActionSection = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(CallToActionSectionComponent);
CallToActionSection.displayName = "CallToActionSection";
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$CallToActionSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallToActionSection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$CallToActionSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallToActionSection"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$waitlist$2f$sections$2f$CallToActionSection$2f$CallToActionSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/CallToActionSection.tsx [app-ssr] (ecmascript)");
}),
"[project]/apps/web/src/features/waitlist/sections/CallToActionSection/index.ts [app-ssr] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/features/waitlist/sections/CallToActionSection/index.ts [app-ssr] (ecmascript)"));
}),
];

//# sourceMappingURL=apps_web_src_features_waitlist_ec908773._.js.map