(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/config/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Environment Configuration
 *
 * Centralized environment variables with validation using Zod.
 * This is the single source of truth for all environment variables.
 */ __turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const envSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    // API Configuration
    NEXT_PUBLIC_API_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("http://localhost:3001/api"),
    NEXT_PUBLIC_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(30000),
    // Application Configuration
    NEXT_PUBLIC_APP_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("http://localhost:3000"),
    NEXT_PUBLIC_APP_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("Hireable PH"),
    // Environment
    NODE_ENV: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "development",
        "production",
        "test"
    ]).default("development")
});
const env = envSchema.parse({
    NEXT_PUBLIC_API_URL: ("TURBOPACK compile-time value", "http://localhost:3001/api"),
    NEXT_PUBLIC_API_TIMEOUT: ("TURBOPACK compile-time value", "30000"),
    NEXT_PUBLIC_APP_URL: ("TURBOPACK compile-time value", "http://localhost:3000"),
    NEXT_PUBLIC_APP_NAME: ("TURBOPACK compile-time value", "Hireable PH"),
    NODE_ENV: ("TURBOPACK compile-time value", "development")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/api.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Configuration
 *
 * Settings for the API client and backend communication.
 */ __turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/env.ts [app-client] (ecmascript)");
;
const API_CONFIG = {
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_URL,
    TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/app.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application Configuration
 *
 * General application settings and metadata.
 */ __turbopack_context__.s([
    "APP_CONFIG",
    ()=>APP_CONFIG,
    "AUTH_CONFIG",
    ()=>AUTH_CONFIG,
    "PAGINATION",
    ()=>PAGINATION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/env.ts [app-client] (ecmascript)");
;
const APP_CONFIG = {
    URL: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_URL,
    NAME: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_APP_NAME
};
const AUTH_CONFIG = {
    TOKEN_KEY: "hireable_access_token",
    REFRESH_TOKEN_KEY: "hireable_refresh_token",
    USER_KEY: "hireable_user",
    SESSION_DURATION: 7 * 24 * 60 * 60 * 1000
};
const PAGINATION = {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Configuration Module
 *
 * Centralized configuration for the application.
 * Import from '@/config' for all configuration needs.
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/api.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/app.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/env.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/api/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Client - Centralized HTTP client for backend communication
 *
 * This module provides a type-safe, configurable HTTP client that handles:
 * - Request/response interceptors
 * - Authentication token management
 * - Error handling and retry logic
 * - Request cancellation
 */ __turbopack_context__.s([
    "ApiClientError",
    ()=>ApiClientError,
    "apiClient",
    ()=>apiClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/env.ts [app-client] (ecmascript)");
class ApiClientError extends Error {
    status;
    code;
    details;
    constructor(status, message, code, details){
        super(message), this.status = status, this.code = code, this.details = details;
        this.name = "ApiClientError";
    }
}
class ApiClient {
    baseUrl;
    timeout;
    defaultHeaders;
    requestInterceptors = [];
    responseInterceptors = [];
    constructor(config){
        this.baseUrl = config.baseUrl;
        this.timeout = config.timeout ?? 30000;
        this.defaultHeaders = {
            "Content-Type": "application/json",
            ...config.headers
        };
    }
    /**
   * Add a request interceptor
   */ addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }
    /**
   * Add a response interceptor
   */ addResponseInterceptor(interceptor) {
        this.responseInterceptors.push(interceptor);
    }
    /**
   * Set authorization token
   */ setAuthToken(token) {
        if (token) {
            this.defaultHeaders["Authorization"] = `Bearer ${token}`;
        } else {
            delete this.defaultHeaders["Authorization"];
        }
    }
    /**
   * Build full URL with query parameters
   */ buildUrl(endpoint, params) {
        // Normalization: Ensure baseUrl ends with '/' and endpoint doesn't start with '/'
        // This prevents absolute path segments in endpoints (like /api/...) from overriding the base URL path
        const normalizedBase = this.baseUrl.endsWith("/") ? this.baseUrl : `${this.baseUrl}/`;
        const normalizedEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
        const url = new URL(normalizedEndpoint, normalizedBase);
        if (params) {
            Object.entries(params).forEach(([key, value])=>{
                url.searchParams.append(key, String(value));
            });
        }
        return url.toString();
    }
    /**
   * Execute request with interceptors and error handling
   */ async request(endpoint, options = {}, params) {
        const url = this.buildUrl(endpoint, params);
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), this.timeout);
        let config = {
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers
            },
            signal: controller.signal
        };
        // Apply request interceptors
        for (const interceptor of this.requestInterceptors){
            config = await interceptor(config);
        }
        try {
            let response = await fetch(url, config);
            clearTimeout(timeoutId);
            // Apply response interceptors
            for (const interceptor of this.responseInterceptors){
                response = await interceptor(response);
            }
            if (!response.ok) {
                const errorData = await response.json().catch(()=>({}));
                throw new ApiClientError(response.status, errorData.message || `HTTP ${response.status}`, errorData.code, errorData.details);
            }
            const data = await response.json();
            return {
                data,
                status: response.status,
                message: "Success"
            };
        } catch (error) {
            clearTimeout(timeoutId);
            if (error instanceof ApiClientError) {
                throw error;
            }
            // Handle AbortError (timeout)
            if (error instanceof Error && error.name === "AbortError") {
                throw new ApiClientError(408, "Request timed out. Please check your connection and try again.", "TIMEOUT");
            }
            // Handle network errors (Failed to fetch, CORS, etc.)
            if (error instanceof TypeError && error.message === "Failed to fetch") {
                throw new ApiClientError(0, "Unable to connect to the server. Please check if the API server is running and accessible.", "NETWORK_ERROR", {
                    possibleCauses: [
                        "The API server may not be running",
                        "There may be a CORS configuration issue",
                        "The network connection may be unavailable",
                        "The API URL may be incorrect"
                    ],
                    apiUrl: url
                });
            }
            // Handle other network-related errors
            if (error instanceof TypeError) {
                throw new ApiClientError(0, `Network error: ${error.message}`, "NETWORK_ERROR", {
                    originalError: error.message
                });
            }
            // Handle generic errors
            throw new ApiClientError(500, error instanceof Error ? error.message : "An unexpected error occurred. Please try again.", "UNKNOWN_ERROR");
        }
    }
    async get(endpoint, params) {
        return this.request(endpoint, {
            method: "GET"
        }, params);
    }
    async post(endpoint, body) {
        return this.request(endpoint, {
            method: "POST",
            body: body ? JSON.stringify(body) : undefined
        });
    }
    async put(endpoint, body) {
        return this.request(endpoint, {
            method: "PUT",
            body: body ? JSON.stringify(body) : undefined
        });
    }
    async patch(endpoint, body) {
        return this.request(endpoint, {
            method: "PATCH",
            body: body ? JSON.stringify(body) : undefined
        });
    }
    async delete(endpoint) {
        return this.request(endpoint, {
            method: "DELETE"
        });
    }
}
;
// Create singleton instance
const apiClient = new ApiClient({
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_URL,
    timeout: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/api/endpoints.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Endpoints - Centralized endpoint definitions
 *
 * All API endpoints should be defined here for:
 * - Single source of truth
 * - Easy API versioning
 * - Better discoverability
 */ __turbopack_context__.s([
    "APPLICATIONS",
    ()=>APPLICATIONS,
    "AUTH",
    ()=>AUTH,
    "JOBS",
    ()=>JOBS,
    "TRIALS",
    ()=>TRIALS,
    "USERS",
    ()=>USERS,
    "WAITLIST",
    ()=>WAITLIST
]);
const AUTH = {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    REFRESH_TOKEN: "/auth/refresh",
    ME: "/auth/me",
    VERIFY_EMAIL: "/auth/verify-email"
};
const WAITLIST = {
    TALENT: "/waitlist/talent",
    CLIENT: "/waitlist/client"
};
const USERS = {
    LIST: "/users",
    GET: (id)=>`/users/${id}`,
    UPDATE: (id)=>`/users/${id}`,
    DELETE: (id)=>`/users/${id}`,
    PROFILE: "/users/profile"
};
const JOBS = {
    LIST: "/jobs",
    GET: (id)=>`/jobs/${id}`,
    CREATE: "/jobs",
    UPDATE: (id)=>`/jobs/${id}`,
    DELETE: (id)=>`/jobs/${id}`
};
const APPLICATIONS = {
    LIST: "/applications",
    GET: (id)=>`/applications/${id}`,
    CREATE: "/applications",
    UPDATE_STATUS: (id)=>`/applications/${id}/status`
};
const TRIALS = {
    LIST: "/trials",
    GET: (id)=>`/trials/${id}`,
    CREATE: "/trials",
    UPDATE: (id)=>`/trials/${id}`,
    COMPLETE: (id)=>`/trials/${id}/complete`
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/services/api/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * API Services - Barrel export for all API-related modules
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/client.ts [app-client] (ecmascript)");
// Centralized endpoints
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/endpoints.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useScrollDirection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollDirection",
    ()=>useScrollDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__throttle$3e$__ = __turbopack_context__.i("[project]/node_modules/lodash-es/throttle.js [app-client] (ecmascript) <export default as throttle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useScrollDirection = (threshold = 100)=>{
    _s();
    const [isScrollingUp, setIsScrollingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollDirection.useEffect": ()=>{
            const handleScroll = {
                "useScrollDirection.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    // Show navbar when scrolling up, hide when scrolling down
                    if (currentScrollY < lastScrollY.current) {
                        // Scrolling up
                        setIsScrollingUp(true);
                    } else if (currentScrollY > lastScrollY.current && currentScrollY > threshold) {
                        // Scrolling down and past threshold
                        setIsScrollingUp(false);
                    }
                    // Always show navbar at the top
                    if (currentScrollY < 10) {
                        setIsScrollingUp(true);
                    }
                    lastScrollY.current = currentScrollY;
                }
            }["useScrollDirection.useEffect.handleScroll"];
            const throttledHandleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2d$es$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__throttle$3e$__["throttle"])(handleScroll, 100);
            window.addEventListener("scroll", throttledHandleScroll, {
                passive: true
            });
            return ({
                "useScrollDirection.useEffect": ()=>{
                    throttledHandleScroll.cancel();
                    window.removeEventListener("scroll", throttledHandleScroll);
                }
            })["useScrollDirection.useEffect"];
        }
    }["useScrollDirection.useEffect"], [
        threshold
    ]);
    return isScrollingUp;
};
_s(useScrollDirection, "NNGUBi9Hj6af5UZYtfpozJEph3s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useThrottledWindowSize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useThrottledWindowSize",
    ()=>useThrottledWindowSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lodash/throttle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useThrottledWindowSize(wait = 100) {
    _s();
    // Initialize with 0 to prevent hydration mismatch
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useThrottledWindowSize.useEffect": ()=>{
            const handleResize = {
                "useThrottledWindowSize.useEffect.handleResize": ()=>{
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["useThrottledWindowSize.useEffect.handleResize"];
            // Use lodash throttle to limit the rate of updates
            const throttledHandleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lodash$2f$throttle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(handleResize, wait);
            // Initial call to set correct size after mount
            handleResize();
            window.addEventListener("resize", throttledHandleResize);
            return ({
                "useThrottledWindowSize.useEffect": ()=>{
                    throttledHandleResize.cancel();
                    window.removeEventListener("resize", throttledHandleResize);
                }
            })["useThrottledWindowSize.useEffect"];
        }
    }["useThrottledWindowSize.useEffect"], [
        wait
    ]);
    return windowSize;
}
_s(useThrottledWindowSize, "u4T2YQmxFMlb92DDoJhpQy4d8Zc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useApi Hook
 *
 * A generic hook for handling API calls with loading, error, and data states.
 * Supports automatic retries, caching, and request cancellation.
 */ __turbopack_context__.s([
    "clearApiCache",
    ()=>clearApiCache,
    "clearCacheKey",
    ()=>clearCacheKey,
    "useApi",
    ()=>useApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * Simple LRU (Least Recently Used) Cache implementation
 * Uses Map which preserves insertion order.
 */ class SimpleCache {
    map = new Map();
    maxSize;
    constructor(maxSize = 50){
        this.maxSize = maxSize;
    }
    get(key) {
        const value = this.map.get(key);
        if (value) {
            // Refresh key (move to end to mark as recently used)
            this.map.delete(key);
            this.map.set(key, value);
        }
        return value;
    }
    set(key, value) {
        if (this.map.has(key)) {
            // If updating existing key, remove it first
            this.map.delete(key);
        } else if (this.map.size >= this.maxSize) {
            // Evict the least recently used item (first in Map)
            const firstKey = this.map.keys().next().value;
            if (firstKey !== undefined) {
                this.map.delete(firstKey);
            }
        }
        this.map.set(key, value);
    }
    delete(key) {
        this.map.delete(key);
    }
    clear() {
        this.map.clear();
    }
}
// Global LRU cache instance
const cache = new SimpleCache(50);
function useApi(apiFunction, options = {}) {
    _s();
    const { immediate = false, retries = 0, retryDelay = 1000, cacheKey, cacheDuration = 5 * 60 * 1000 } = options;
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        data: null,
        isLoading: immediate,
        error: null,
        isSuccess: false,
        isError: false
    });
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Check cache on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApi.useEffect": ()=>{
            if (cacheKey) {
                const cached = cache.get(cacheKey);
                if (cached && Date.now() - cached.timestamp < cacheDuration) {
                    setState({
                        data: cached.data,
                        isLoading: false,
                        error: null,
                        isSuccess: true,
                        isError: false
                    });
                }
            }
        }
    }["useApi.useEffect"], [
        cacheKey,
        cacheDuration
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApi.useEffect": ()=>{
            mountedRef.current = true;
            return ({
                "useApi.useEffect": ()=>{
                    mountedRef.current = false;
                    abortControllerRef.current?.abort();
                }
            })["useApi.useEffect"];
        }
    }["useApi.useEffect"], []);
    const execute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApi.useCallback[execute]": async (...params)=>{
            // Cancel any pending request
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            // Check cache first
            if (cacheKey) {
                const cached = cache.get(cacheKey);
                if (cached && Date.now() - cached.timestamp < cacheDuration) {
                    if (mountedRef.current) {
                        setState({
                            data: cached.data,
                            isLoading: false,
                            error: null,
                            isSuccess: true,
                            isError: false
                        });
                    }
                    return cached.data;
                }
            }
            if (mountedRef.current) {
                setState({
                    "useApi.useCallback[execute]": (prev)=>({
                            ...prev,
                            isLoading: true,
                            error: null,
                            isError: false
                        })
                }["useApi.useCallback[execute]"]);
            }
            let lastError = null;
            let attempt = 0;
            while(attempt <= retries){
                try {
                    const data = await apiFunction(...params);
                    // Cache the result
                    if (cacheKey) {
                        cache.set(cacheKey, {
                            data,
                            timestamp: Date.now()
                        });
                    }
                    if (mountedRef.current) {
                        setState({
                            data,
                            isLoading: false,
                            error: null,
                            isSuccess: true,
                            isError: false
                        });
                    }
                    return data;
                } catch (error) {
                    lastError = error instanceof Error ? error : new Error(String(error));
                    attempt++;
                    if (attempt <= retries) {
                        await new Promise({
                            "useApi.useCallback[execute]": (resolve)=>setTimeout(resolve, retryDelay)
                        }["useApi.useCallback[execute]"]);
                    }
                }
            }
            // All retries failed
            const errorMessage = lastError instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApiClientError"] ? lastError.message : lastError?.message || "An error occurred";
            if (mountedRef.current) {
                setState({
                    data: null,
                    isLoading: false,
                    error: errorMessage,
                    isSuccess: false,
                    isError: true
                });
            }
            return null;
        }
    }["useApi.useCallback[execute]"], [
        apiFunction,
        cacheKey,
        cacheDuration,
        retries,
        retryDelay
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApi.useCallback[reset]": ()=>{
            abortControllerRef.current?.abort();
            setState({
                data: null,
                isLoading: false,
                error: null,
                isSuccess: false,
                isError: false
            });
        }
    }["useApi.useCallback[reset]"], []);
    const setData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useApi.useCallback[setData]": (data)=>{
            setState({
                "useApi.useCallback[setData]": (prev)=>({
                        ...prev,
                        data
                    })
            }["useApi.useCallback[setData]"]);
        }
    }["useApi.useCallback[setData]"], []);
    // Execute immediately if option is set
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApi.useEffect": ()=>{
            if (immediate) {
                execute(...[]);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useApi.useEffect"], [
        immediate
    ]);
    return {
        ...state,
        execute,
        reset,
        setData
    };
}
_s(useApi, "s6KmWT2bYR4DmuwnaRdIBaDRFAM=");
function clearApiCache() {
    cache.clear();
}
function clearCacheKey(key) {
    cache.delete(key);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useAsyncError.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAsyncError",
    ()=>useAsyncError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useAsyncError = ()=>{
    _s();
    const [, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAsyncError.useCallback": (error)=>{
            setError({
                "useAsyncError.useCallback": ()=>{
                    throw error;
                }
            }["useAsyncError.useCallback"]);
        }
    }["useAsyncError.useCallback"], [
        setError
    ]);
};
_s(useAsyncError, "CoqLyE4ifF7OcAo/YVZM3tfQjfo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useWindowSize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWindowSize",
    ()=>useWindowSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useWindowSize() {
    _s();
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWindowSize.useEffect": ()=>{
            let timeoutId;
            function handleResize() {
                // Debounce resize events to prevent excessive re-renders
                clearTimeout(timeoutId);
                timeoutId = setTimeout({
                    "useWindowSize.useEffect.handleResize": ()=>{
                        setWindowSize({
                            width: window.innerWidth,
                            height: window.innerHeight
                        });
                    }
                }["useWindowSize.useEffect.handleResize"], 100);
            }
            // Set initial size immediately after mount
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            window.addEventListener("resize", handleResize, {
                passive: true
            });
            return ({
                "useWindowSize.useEffect": ()=>{
                    window.removeEventListener("resize", handleResize);
                    clearTimeout(timeoutId);
                }
            })["useWindowSize.useEffect"];
        }
    }["useWindowSize.useEffect"], []);
    return windowSize;
}
_s(useWindowSize, "FWLQJ94ZHIj2+2MfYdQiv9X0Ttk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useCardScale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCardScale",
    ()=>useCardScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useWindowSize.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useCardScale(options = {}) {
    _s();
    const { contentWidth = 408, padding = 60 } = options;
    const { width } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWindowSize"])();
    const [hasMounted, setHasMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCardScale.useEffect": ()=>{
            setHasMounted(true);
        }
    }["useCardScale.useEffect"], []);
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCardScale.useMemo[scale]": ()=>{
            // Always return 1 before mount to match server render
            if (!hasMounted || width === 0) return 1;
            const availableWidth = width - padding;
            if (availableWidth < contentWidth) {
                return availableWidth / contentWidth;
            }
            return 1;
        }
    }["useCardScale.useMemo[scale]"], [
        width,
        hasMounted,
        contentWidth,
        padding
    ]);
    return {
        scale,
        hasMounted
    };
}
_s(useCardScale, "fLChT9FwjVZW2i9eoLgbObWcePw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWindowSize"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useDebounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebounce(value, delay) {
    _s();
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const handler = setTimeout({
                "useDebounce.useEffect.handler": ()=>{
                    setDebouncedValue(value);
                }
            }["useDebounce.useEffect.handler"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(handler);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debouncedValue;
}
_s(useDebounce, "KDuPAtDOgxm8PU6legVJOb3oOmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useForm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * useForm Hook
 *
 * A lightweight form management hook that handles:
 * - Form state management
 * - Field validation
 * - Error handling
 * - Form submission
 */ __turbopack_context__.s([
    "useForm",
    ()=>useForm,
    "validators",
    ()=>validators
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useForm({ initialValues, validationRules = {}, onSubmit }) {
    _s();
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValues);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[validateField]": (field)=>{
            const rules = validationRules[field];
            if (!rules) return true;
            for (const rule of rules){
                if (!rule.validate(values[field], values)) {
                    setErrors({
                        "useForm.useCallback[validateField]": (prev)=>({
                                ...prev,
                                [field]: rule.message
                            })
                    }["useForm.useCallback[validateField]"]);
                    return false;
                }
            }
            setErrors({
                "useForm.useCallback[validateField]": (prev)=>{
                    const newErrors = {
                        ...prev
                    };
                    delete newErrors[field];
                    return newErrors;
                }
            }["useForm.useCallback[validateField]"]);
            return true;
        }
    }["useForm.useCallback[validateField]"], [
        values,
        validationRules
    ]);
    const validateForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[validateForm]": ()=>{
            let isValid = true;
            const newErrors = {};
            for (const field of Object.keys(validationRules)){
                const rules = validationRules[field];
                if (!rules) continue;
                for (const rule of rules){
                    if (!rule.validate(values[field], values)) {
                        newErrors[field] = rule.message;
                        isValid = false;
                        break;
                    }
                }
            }
            setErrors(newErrors);
            return isValid;
        }
    }["useForm.useCallback[validateForm]"], [
        values,
        validationRules
    ]);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[handleChange]": (e)=>{
            const { name, value, type } = e.target;
            const newValue = type === "checkbox" ? e.target.checked : value;
            setValues({
                "useForm.useCallback[handleChange]": (prev)=>({
                        ...prev,
                        [name]: newValue
                    })
            }["useForm.useCallback[handleChange]"]);
            // Clear error when user starts typing
            if (errors[name]) {
                setErrors({
                    "useForm.useCallback[handleChange]": (prev)=>{
                        const newErrors = {
                            ...prev
                        };
                        delete newErrors[name];
                        return newErrors;
                    }
                }["useForm.useCallback[handleChange]"]);
            }
        }
    }["useForm.useCallback[handleChange]"], [
        errors
    ]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[handleBlur]": (e)=>{
            const { name } = e.target;
            setTouched({
                "useForm.useCallback[handleBlur]": (prev)=>({
                        ...prev,
                        [name]: true
                    })
            }["useForm.useCallback[handleBlur]"]);
            validateField(name);
        }
    }["useForm.useCallback[handleBlur]"], [
        validateField
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[handleSubmit]": async (e)=>{
            e.preventDefault();
            // Mark all fields as touched
            const allTouched = Object.keys(values).reduce({
                "useForm.useCallback[handleSubmit].allTouched": (acc, key)=>({
                        ...acc,
                        [key]: true
                    })
            }["useForm.useCallback[handleSubmit].allTouched"], {});
            setTouched(allTouched);
            if (!validateForm()) return;
            setIsSubmitting(true);
            try {
                await onSubmit(values);
            } finally{
                setIsSubmitting(false);
            }
        }
    }["useForm.useCallback[handleSubmit]"], [
        values,
        validateForm,
        onSubmit
    ]);
    const setFieldValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[setFieldValue]": (field, value)=>{
            setValues({
                "useForm.useCallback[setFieldValue]": (prev)=>({
                        ...prev,
                        [field]: value
                    })
            }["useForm.useCallback[setFieldValue]"]);
        }
    }["useForm.useCallback[setFieldValue]"], []);
    const setFieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[setFieldError]": (field, error)=>{
            setErrors({
                "useForm.useCallback[setFieldError]": (prev)=>({
                        ...prev,
                        [field]: error
                    })
            }["useForm.useCallback[setFieldError]"]);
        }
    }["useForm.useCallback[setFieldError]"], []);
    const resetForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useForm.useCallback[resetForm]": ()=>{
            setValues(initialValues);
            setErrors({});
            setTouched({});
            setIsSubmitting(false);
        }
    }["useForm.useCallback[resetForm]"], [
        initialValues
    ]);
    const isValid = Object.keys(errors).length === 0;
    return {
        values,
        errors,
        touched,
        isSubmitting,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        setFieldError,
        resetForm,
        validateField,
        validateForm
    };
}
_s(useForm, "JOulOWA/kyWHt/vzM/3Sgsqev9E=");
const validators = {
    required: (message = "This field is required")=>({
            validate: (value)=>value !== undefined && value !== null && value !== "",
            message
        }),
    email: (message = "Please enter a valid email")=>({
            validate: (value)=>typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            message
        }),
    minLength: (length, message)=>({
            validate: (value)=>typeof value === "string" && value.length >= length,
            message: message || `Must be at least ${length} characters`
        }),
    maxLength: (length, message)=>({
            validate: (value)=>typeof value === "string" && value.length <= length,
            message: message || `Must be no more than ${length} characters`
        }),
    pattern: (regex, message)=>({
            validate: (value)=>typeof value === "string" && regex.test(value),
            message
        }),
    match: (field, message = "Fields do not match")=>({
            validate: (value, values)=>value === values[field],
            message
        }),
    password: (message = "Password must contain uppercase, lowercase, number, and special character")=>({
            validate: (value)=>typeof value === "string" && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
            message
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useMediaQuery(query) {
    _s();
    // Always start with false to match server render
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const media = window.matchMedia(query);
            // Set initial value after mount
            setMatches(media.matches);
            const listener = {
                "useMediaQuery.useEffect.listener": (event)=>{
                    setMatches(event.matches);
                }
            }["useMediaQuery.useEffect.listener"];
            media.addEventListener("change", listener);
            return ({
                "useMediaQuery.useEffect": ()=>media.removeEventListener("change", listener)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
}
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useModalScrollLock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModalScrollLock",
    ()=>useModalScrollLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useModalScrollLock(isOpen, options = {}) {
    _s();
    const { onClose } = options;
    const lenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useModalScrollLock.useEffect": ()=>{
            if (isOpen) {
                lenis?.stop();
                document.body.style.overflow = "hidden";
                document.documentElement.style.overflow = "hidden";
            } else {
                lenis?.start();
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
                onClose?.();
            }
            return ({
                "useModalScrollLock.useEffect": ()=>{
                    lenis?.start();
                    document.body.style.overflow = "";
                    document.documentElement.style.overflow = "";
                }
            })["useModalScrollLock.useEffect"];
        }
    }["useModalScrollLock.useEffect"], [
        isOpen,
        onClose,
        lenis
    ]);
}
_s(useModalScrollLock, "bmMhC/Jg10Kg3cTG/8BlQOWhN9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLenis"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/useViewportCenter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useViewportCenter",
    ()=>useViewportCenter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useViewportCenter(ref, options = {}) {
    _s();
    const { threshold = 0.2, enabled = true, exitDelay = 500 } = options;
    const [isCentered, setIsCentered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const exitTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useViewportCenter.useEffect": ()=>{
            if (!enabled || !ref.current) {
                setIsCentered(false);
                return;
            }
            const element = ref.current;
            const observer = new IntersectionObserver({
                "useViewportCenter.useEffect": ([entry])=>{
                    if (!entry) return;
                    const rect = entry.boundingClientRect;
                    const viewportHeight = window.innerHeight;
                    const viewportCenter = viewportHeight / 2;
                    const elementCenter = rect.top + rect.height / 2;
                    const centerThreshold = viewportHeight * threshold;
                    const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
                    const shouldBeCentered = distanceFromCenter <= centerThreshold;
                    if (shouldBeCentered) {
                        // Clear any pending exit timer and set centered immediately
                        if (exitTimerRef.current) {
                            clearTimeout(exitTimerRef.current);
                            exitTimerRef.current = null;
                        }
                        setIsCentered(true);
                    } else {
                        // Delay the exit to prevent jumping during scroll
                        if (!exitTimerRef.current) {
                            exitTimerRef.current = setTimeout({
                                "useViewportCenter.useEffect": ()=>{
                                    setIsCentered(false);
                                    exitTimerRef.current = null;
                                }
                            }["useViewportCenter.useEffect"], exitDelay);
                        }
                    }
                }
            }["useViewportCenter.useEffect"], {
                threshold: [
                    0,
                    0.25,
                    0.5,
                    0.75,
                    1
                ],
                rootMargin: "-10% 0px -10% 0px"
            });
            observer.observe(element);
            return ({
                "useViewportCenter.useEffect": ()=>{
                    observer.disconnect();
                    if (exitTimerRef.current) {
                        clearTimeout(exitTimerRef.current);
                    }
                }
            })["useViewportCenter.useEffect"];
        }
    }["useViewportCenter.useEffect"], [
        ref,
        threshold,
        enabled,
        exitDelay
    ]);
    return isCentered;
}
_s(useViewportCenter, "6BWbIP/bWtdXqenJ0jumFejqWiw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/hooks/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Hooks - Barrel export for all custom hooks
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useAsyncError$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useAsyncError.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useCardScale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useCardScale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useModalScrollLock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useModalScrollLock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useScrollDirection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useScrollDirection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useThrottledWindowSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useThrottledWindowSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useViewportCenter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useViewportCenter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$hooks$2f$useWindowSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/hooks/useWindowSize.ts [app-client] (ecmascript)"); // Auth is now managed via Zustand store
 // Import useAuthStore, useAuthActions, etc. from @/stores instead
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
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/forms.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Form Constants
 *
 * Options and data for form selects and dropdowns.
 */ // Company sizes for forms
__turbopack_context__.s([
    "COMPANY_SIZES",
    ()=>COMPANY_SIZES,
    "EXPERIENCE_LEVELS",
    ()=>EXPERIENCE_LEVELS,
    "INDUSTRIES",
    ()=>INDUSTRIES,
    "JOB_TYPES",
    ()=>JOB_TYPES
]);
const COMPANY_SIZES = [
    {
        value: "1-10",
        label: "1-10 employees"
    },
    {
        value: "11-50",
        label: "11-50 employees"
    },
    {
        value: "51-200",
        label: "51-200 employees"
    },
    {
        value: "201-500",
        label: "201-500 employees"
    },
    {
        value: "500+",
        label: "500+ employees"
    }
];
const INDUSTRIES = [
    {
        value: "technology",
        label: "Technology"
    },
    {
        value: "finance",
        label: "Finance"
    },
    {
        value: "healthcare",
        label: "Healthcare"
    },
    {
        value: "education",
        label: "Education"
    },
    {
        value: "retail",
        label: "Retail"
    },
    {
        value: "manufacturing",
        label: "Manufacturing"
    },
    {
        value: "other",
        label: "Other"
    }
];
const JOB_TYPES = [
    {
        value: "full-time",
        label: "Full-time"
    },
    {
        value: "part-time",
        label: "Part-time"
    },
    {
        value: "contract",
        label: "Contract"
    },
    {
        value: "freelance",
        label: "Freelance"
    }
];
const EXPERIENCE_LEVELS = [
    {
        value: "entry",
        label: "Entry Level"
    },
    {
        value: "mid",
        label: "Mid Level"
    },
    {
        value: "senior",
        label: "Senior Level"
    },
    {
        value: "lead",
        label: "Lead"
    },
    {
        value: "executive",
        label: "Executive"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/http.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * HTTP Constants
 *
 * HTTP status codes for consistent error handling.
 */ __turbopack_context__.s([
    "HTTP_STATUS",
    ()=>HTTP_STATUS
]);
const HTTP_STATUS = {
    // Success
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    // Client Errors
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    TOO_MANY_REQUESTS: 429,
    // Server Errors
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/routes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route Constants
 *
 * Centralized route definitions for consistent navigation.
 */ __turbopack_context__.s([
    "ROUTES",
    ()=>ROUTES
]);
const ROUTES = {
    // Public routes
    HOME: "/",
    LOGIN: "/login",
    SIGNUP: "/signup",
    SIGNUP_CLIENT: "/signup/client",
    SIGNUP_TALENT: "/signup/talent",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    PRIVACY_POLICY: "/privacy-policy",
    // Protected routes
    DASHBOARD: "/dashboard",
    PROFILE: "/profile",
    JOBS: "/jobs",
    APPLICATIONS: "/applications",
    TRIALS: "/trials",
    SETTINGS: "/settings"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validation Constants
 *
 * Form validation rules and limits.
 */ __turbopack_context__.s([
    "VALIDATION",
    ()=>VALIDATION
]);
const VALIDATION = {
    // Password rules
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 128,
    // Name rules
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
    // Other field limits
    BIO_MAX_LENGTH: 500,
    EMAIL_MAX_LENGTH: 254,
    COMPANY_NAME_MAX_LENGTH: 100
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/constants/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Constants Module
 *
 * Centralized application constants.
 * Import from '@/constants' for all constant values.
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$forms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/forms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$http$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/http.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$routes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/routes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/validation.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/stores/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Store - Zustand store for authentication state management
 *
 * Provides global authentication state and methods for login, logout,
 * signup, and session management without requiring provider wrappers.
 */ __turbopack_context__.s([
    "useAuthActions",
    ()=>useAuthActions,
    "useAuthError",
    ()=>useAuthError,
    "useAuthLoading",
    ()=>useAuthLoading,
    "useAuthStore",
    ()=>useAuthStore,
    "useIsAuthenticated",
    ()=>useIsAuthenticated,
    "useUser",
    ()=>useUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/auth.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/storage.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set, get)=>({
        // Initial state
        user: null,
        isAuthenticated: false,
        isLoading: true,
        error: null,
        isInitialized: false,
        // Initialize auth state from storage and validate token with server
        initAuth: async ()=>{
            if (get().isInitialized) return;
            try {
                const token = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].getToken();
                if (token) {
                    // Validate token by fetching current user from server
                    try {
                        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].getCurrentUser();
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setUser(user); // Update stored user with fresh data
                        set({
                            user,
                            isAuthenticated: true,
                            isLoading: false,
                            error: null,
                            isInitialized: true
                        });
                    } catch  {
                        // Token is invalid/expired - clear auth state
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].clearAuth();
                        set({
                            isLoading: false,
                            isInitialized: true
                        });
                    }
                } else {
                    set({
                        isLoading: false,
                        isInitialized: true
                    });
                }
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].clearAuth();
                set({
                    isLoading: false,
                    isInitialized: true
                });
            }
        },
        login: async (credentials)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].login(credentials);
                // Store tokens and user
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setToken(response.accessToken);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setRefreshToken(response.refreshToken);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setUser(response.user);
                set({
                    user: response.user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : "Login failed";
                set({
                    isLoading: false,
                    error: message
                });
                throw error;
            }
        },
        signup: async (data)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].signup(data);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setToken(response.accessToken);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setRefreshToken(response.refreshToken);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setUser(response.user);
                set({
                    user: response.user,
                    isAuthenticated: true,
                    isLoading: false,
                    error: null
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : "Signup failed";
                set({
                    isLoading: false,
                    error: message
                });
                throw error;
            }
        },
        logout: async ()=>{
            set({
                isLoading: true
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].logout();
            } finally{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].clearAuth();
                set({
                    user: null,
                    isAuthenticated: false,
                    isLoading: false,
                    error: null
                });
            }
        },
        forgotPassword: async (data)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].forgotPassword(data);
                set({
                    isLoading: false
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : "Failed to send reset email";
                set({
                    isLoading: false,
                    error: message
                });
                throw error;
            }
        },
        resetPassword: async (data)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].resetPassword(data);
                set({
                    isLoading: false
                });
            } catch (error) {
                const message = error instanceof Error ? error.message : "Failed to reset password";
                set({
                    isLoading: false,
                    error: message
                });
                throw error;
            }
        },
        refreshSession: async ()=>{
            const refreshToken = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].getRefreshToken();
            if (!refreshToken) return;
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].refreshToken({
                    refreshToken
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageService"].setToken(response.accessToken);
            } catch  {
                // If refresh fails, logout
                await get().logout();
            }
        },
        clearError: ()=>{
            set({
                error: null
            });
        }
    }), {
    name: "AuthStore"
}));
const useUser = ()=>{
    _s();
    return useAuthStore({
        "useUser.useAuthStore": (state)=>state.user
    }["useUser.useAuthStore"]);
};
_s(useUser, "BSK3XewfuZPixDP8tbzcobpulFc=", false, function() {
    return [
        useAuthStore
    ];
});
const useIsAuthenticated = ()=>{
    _s1();
    return useAuthStore({
        "useIsAuthenticated.useAuthStore": (state)=>state.isAuthenticated
    }["useIsAuthenticated.useAuthStore"]);
};
_s1(useIsAuthenticated, "BSK3XewfuZPixDP8tbzcobpulFc=", false, function() {
    return [
        useAuthStore
    ];
});
const useAuthLoading = ()=>{
    _s2();
    return useAuthStore({
        "useAuthLoading.useAuthStore": (state)=>state.isLoading
    }["useAuthLoading.useAuthStore"]);
};
_s2(useAuthLoading, "BSK3XewfuZPixDP8tbzcobpulFc=", false, function() {
    return [
        useAuthStore
    ];
});
const useAuthError = ()=>{
    _s3();
    return useAuthStore({
        "useAuthError.useAuthStore": (state)=>state.error
    }["useAuthError.useAuthStore"]);
};
_s3(useAuthError, "BSK3XewfuZPixDP8tbzcobpulFc=", false, function() {
    return [
        useAuthStore
    ];
});
const useAuthActions = ()=>{
    _s4();
    return useAuthStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useAuthActions.useAuthStore.useShallow": (state)=>({
                login: state.login,
                signup: state.signup,
                logout: state.logout,
                forgotPassword: state.forgotPassword,
                resetPassword: state.resetPassword,
                clearError: state.clearError,
                refreshSession: state.refreshSession,
                initAuth: state.initAuth
            })
    }["useAuthActions.useAuthStore.useShallow"]));
};
_s4(useAuthActions, "qD8Hsc+sTR4Jw2f+gF4p4ZRDZVo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        useAuthStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Role Store - Zustand store for managing user role selection
 *
 * Manages the selected role (client/talent) state globally
 * without requiring provider wrappers.
 */ __turbopack_context__.s([
    "useRoleStore",
    ()=>useRoleStore,
    "useSelectedRole",
    ()=>useSelectedRole,
    "useSetSelectedRole",
    ()=>useSetSelectedRole,
    "useToggleRole",
    ()=>useToggleRole
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const useRoleStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        selectedRole: "client",
        setSelectedRole: (role)=>set({
                selectedRole: role
            }),
        toggleRole: ()=>set((state)=>({
                    selectedRole: state.selectedRole === "client" ? "talent" : "client"
                }))
    }), {
    name: "RoleStore"
}));
const useSelectedRole = ()=>{
    _s();
    return useRoleStore({
        "useSelectedRole.useRoleStore": (state)=>state.selectedRole
    }["useSelectedRole.useRoleStore"]);
};
_s(useSelectedRole, "lFQeE/PyW+U9b+YSuYE3Cu5JXc0=", false, function() {
    return [
        useRoleStore
    ];
});
const useSetSelectedRole = ()=>{
    _s1();
    return useRoleStore({
        "useSetSelectedRole.useRoleStore": (state)=>state.setSelectedRole
    }["useSetSelectedRole.useRoleStore"]);
};
_s1(useSetSelectedRole, "lFQeE/PyW+U9b+YSuYE3Cu5JXc0=", false, function() {
    return [
        useRoleStore
    ];
});
const useToggleRole = ()=>{
    _s2();
    return useRoleStore({
        "useToggleRole.useRoleStore": (state)=>state.toggleRole
    }["useToggleRole.useRoleStore"]);
};
_s2(useToggleRole, "lFQeE/PyW+U9b+YSuYE3Cu5JXc0=", false, function() {
    return [
        useRoleStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/stores/uiStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * UI Store - Zustand store for UI-related state
 *
 * Manages UI state like smooth scroll instances, modals, etc.
 * Note: Lenis instance is kept in a separate ref-based approach
 * since it's a mutable object that shouldn't trigger re-renders.
 */ __turbopack_context__.s([
    "useLenis",
    ()=>useLenis,
    "useMobileMenu",
    ()=>useMobileMenu,
    "useSetLenis",
    ()=>useSetLenis,
    "useUIStore",
    ()=>useUIStore,
    "useWaitlistModal",
    ()=>useWaitlistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react/shallow.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
;
;
const useUIStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"])((set)=>({
        // Lenis smooth scroll
        lenis: null,
        setLenis: (lenis)=>set({
                lenis
            }),
        // Waitlist modal
        isWaitlistModalOpen: false,
        setWaitlistModalOpen: (open)=>set({
                isWaitlistModalOpen: open
            }),
        openWaitlistModal: ()=>set({
                isWaitlistModalOpen: true
            }),
        closeWaitlistModal: ()=>set({
                isWaitlistModalOpen: false
            }),
        // Mobile menu
        isMobileMenuOpen: false,
        setMobileMenuOpen: (open)=>set({
                isMobileMenuOpen: open
            }),
        toggleMobileMenu: ()=>set((state)=>({
                    isMobileMenuOpen: !state.isMobileMenuOpen
                }))
    }), {
    name: "UIStore"
}));
const useLenis = ()=>{
    _s();
    return useUIStore({
        "useLenis.useUIStore": (state)=>state.lenis
    }["useLenis.useUIStore"]);
};
_s(useLenis, "WiSE7o0r28r0Hhb/tJt8xUFE3pA=", false, function() {
    return [
        useUIStore
    ];
});
const useSetLenis = ()=>{
    _s1();
    return useUIStore({
        "useSetLenis.useUIStore": (state)=>state.setLenis
    }["useSetLenis.useUIStore"]);
};
_s1(useSetLenis, "WiSE7o0r28r0Hhb/tJt8xUFE3pA=", false, function() {
    return [
        useUIStore
    ];
});
const useWaitlistModal = ()=>{
    _s2();
    return useUIStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useWaitlistModal.useUIStore.useShallow": (state)=>({
                isOpen: state.isWaitlistModalOpen,
                open: state.openWaitlistModal,
                close: state.closeWaitlistModal,
                setOpen: state.setWaitlistModalOpen
            })
    }["useWaitlistModal.useUIStore.useShallow"]));
};
_s2(useWaitlistModal, "HzeW8hPkTX/c6E4Tq4nW6LLvvTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        useUIStore
    ];
});
const useMobileMenu = ()=>{
    _s3();
    return useUIStore((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"])({
        "useMobileMenu.useUIStore.useShallow": (state)=>({
                isOpen: state.isMobileMenuOpen,
                toggle: state.toggleMobileMenu,
                setOpen: state.setMobileMenuOpen
            })
    }["useMobileMenu.useUIStore.useShallow"]));
};
_s3(useMobileMenu, "HzeW8hPkTX/c6E4Tq4nW6LLvvTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2f$shallow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShallow"],
        useUIStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Stores - Barrel export for all Zustand stores
 */ // Auth store
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/authStore.ts [app-client] (ecmascript)");
// Role store
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$roleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/roleStore.ts [app-client] (ecmascript)");
// UI store
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/uiStore.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/AuthInitializer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Initializer - Initializes auth state from storage
 *
 * This component should be placed near the root of the app to initialize
 * auth state on mount. It uses the auth store's initAuth action.
 */ __turbopack_context__.s([
    "AuthInitializer",
    ()=>AuthInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/authStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AuthInitializer = ({ children })=>{
    _s();
    const initAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "AuthInitializer.useAuthStore[initAuth]": (state)=>state.initAuth
    }["AuthInitializer.useAuthStore[initAuth]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthInitializer.useEffect": ()=>{
            initAuth();
        }
    }["AuthInitializer.useEffect"], [
        initAuth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(AuthInitializer, "TJnx2C4kCrTi3Z8Eff5+hljBwDY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = AuthInitializer;
var _c;
__turbopack_context__.k.register(_c, "AuthInitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/SmoothScrollProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Smooth Scroll Provider - Initializes Lenis smooth scroll
 *
 * This is a thin wrapper component that initializes Lenis and stores
 * the instance in the UI store. Components can access it via useLenis().
 */ __turbopack_context__.s([
    "SmoothScrollProvider",
    ()=>SmoothScrollProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/uiStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SmoothScrollProvider = ({ children })=>{
    _s();
    const setLenis = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetLenis"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScrollProvider.useEffect": ()=>{
            const lenisInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                // Smooth scroll duration
                duration: 1.2,
                // Easing function for smooth scroll
                easing: {
                    "SmoothScrollProvider.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScrollProvider.useEffect"],
                // Scroll direction
                orientation: "vertical",
                // Gesture orientation
                gestureOrientation: "vertical",
                // Smooth scroll on touch devices
                touchMultiplier: 2,
                // Infinite scroll
                infinite: false,
                // Sync scroll to wrapped element
                syncTouch: false
            });
            setLenis(lenisInstance);
            // Animation frame loop
            let rafId;
            function raf(time) {
                lenisInstance.raf(time);
                rafId = requestAnimationFrame(raf);
            }
            rafId = requestAnimationFrame(raf);
            return ({
                "SmoothScrollProvider.useEffect": ()=>{
                    cancelAnimationFrame(rafId);
                    lenisInstance.destroy();
                    setLenis(null);
                }
            })["SmoothScrollProvider.useEffect"];
        }
    }["SmoothScrollProvider.useEffect"], [
        setLenis
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(SmoothScrollProvider, "+LrJCA22Gt21vgashCt8GWDqaR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$uiStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSetLenis"]
    ];
});
_c = SmoothScrollProvider;
var _c;
__turbopack_context__.k.register(_c, "SmoothScrollProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/providers/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Providers - Barrel export for all provider components
 *
 * Note: With Zustand, most state no longer requires providers.
 * These exports are for components that still need provider wrappers
 * (like SmoothScrollProvider for Lenis initialization).
 */ // Auth initializer (replaces AuthProvider)
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$AuthInitializer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/AuthInitializer.tsx [app-client] (ecmascript)");
// Smooth scroll provider (thin wrapper for Lenis initialization)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$providers$2f$SmoothScrollProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/providers/SmoothScrollProvider.tsx [app-client] (ecmascript)");
// Re-export store hooks for convenience
// These can be imported directly from @/stores as well
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/stores/index.ts [app-client] (ecmascript) <locals>");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_7df56237._.js.map