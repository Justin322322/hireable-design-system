module.exports = [
"[project]/apps/web/src/features/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Hooks - Barrel export
 *
 * Re-exports auth hooks from the store for cleaner feature-based imports.
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$stores$2f$authStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/stores/authStore.ts [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/services/auth.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Authentication Service
 *
 * Handles all authentication-related API calls including:
 * - Login/Logout
 * - Signup
 * - Password reset
 * - Token refresh
 */ __turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/services/api/endpoints.ts [app-ssr] (ecmascript)");
;
;
const authService = {
    /**
   * Login with email and password
   */ async login (credentials) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].LOGIN, credentials);
        // Store token for subsequent requests
        if (response.data.accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(response.data.accessToken);
        }
        return response.data;
    },
    /**
   * Register a new user
   */ async signup (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].SIGNUP, data);
        if (response.data.accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(response.data.accessToken);
        }
        return response.data;
    },
    /**
   * Logout current user
   */ async logout () {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].LOGOUT);
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(null);
        }
    },
    /**
   * Request password reset email
   */ async forgotPassword (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].FORGOT_PASSWORD, data);
        return response.data;
    },
    /**
   * Reset password with token
   */ async resetPassword (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].RESET_PASSWORD, data);
        return response.data;
    },
    /**
   * Refresh access token
   */ async refreshToken (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].REFRESH_TOKEN, data);
        if (response.data.accessToken) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].setAuthToken(response.data.accessToken);
        }
        return response.data;
    },
    /**
   * Get current authenticated user
   */ async getCurrentUser () {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].ME);
        return response.data;
    },
    /**
   * Verify email with token
   */ async verifyEmail (token) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$services$2f$api$2f$endpoints$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH"].VERIFY_EMAIL, {
            token
        });
        return response.data;
    }
};
}),
"[project]/apps/web/src/features/auth/services/mappers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Mappers - Transform API responses to domain models
 */ __turbopack_context__.s([
    "mapUserResponseToDomain",
    ()=>mapUserResponseToDomain,
    "mapUserToApiFormat",
    ()=>mapUserToApiFormat
]);
function mapUserResponseToDomain(res) {
    return {
        id: String(res.id),
        email: res.email,
        firstName: res.firstName,
        lastName: res.lastName,
        role: res.role?.toUpperCase() ?? "GUEST",
        avatar: res.avatar,
        createdAt: new Date(res.createdAt),
        updatedAt: new Date(res.updatedAt)
    };
}
function mapUserToApiFormat(user) {
    return {
        ...user.id && {
            id: user.id
        },
        ...user.email && {
            email: user.email
        },
        ...user.firstName && {
            firstName: user.firstName
        },
        ...user.lastName && {
            lastName: user.lastName
        },
        ...user.role && {
            role: user.role.toLowerCase()
        },
        ...user.avatar && {
            avatar: user.avatar
        }
    };
}
}),
"[project]/apps/web/src/features/auth/services/storage.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Storage Service - Browser localStorage wrapper for auth data
 *
 * Handles token and user data persistence in localStorage.
 */ __turbopack_context__.s([
    "storageService",
    ()=>storageService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/app.config.ts [app-ssr] (ecmascript)");
;
const { TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_CONFIG"];
class StorageService {
    isBrowser;
    constructor(){
        this.isBrowser = ("TURBOPACK compile-time value", "undefined") !== "undefined";
    }
    getItem(key) {
        if (!this.isBrowser) return null;
        return localStorage.getItem(key);
    }
    setItem(key, value) {
        if (!this.isBrowser) return;
        localStorage.setItem(key, value);
    }
    removeItem(key) {
        if (!this.isBrowser) return;
        localStorage.removeItem(key);
    }
    // Auth specific helpers
    getToken() {
        return this.getItem(TOKEN_KEY);
    }
    setToken(token) {
        this.setItem(TOKEN_KEY, token);
    }
    getRefreshToken() {
        return this.getItem(REFRESH_TOKEN_KEY);
    }
    setRefreshToken(token) {
        this.setItem(REFRESH_TOKEN_KEY, token);
    }
    getUser() {
        const userStr = this.getItem(USER_KEY);
        if (!userStr) return null;
        try {
            return JSON.parse(userStr);
        } catch  {
            return null;
        }
    }
    setUser(user) {
        this.setItem(USER_KEY, JSON.stringify(user));
    }
    clearAuth() {
        this.removeItem(TOKEN_KEY);
        this.removeItem(REFRESH_TOKEN_KEY);
        this.removeItem(USER_KEY);
    }
}
const storageService = new StorageService();
}),
"[project]/apps/web/src/features/auth/schemas/forgot-password.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forgotPasswordSchema",
    ()=>forgotPasswordSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const forgotPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Email address is required").email("Please enter a valid email address")
});
}),
"[project]/apps/web/src/features/auth/schemas/login.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loginSchema",
    ()=>loginSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/constants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/validation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
;
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Email address is required").email("Please enter a valid email address"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Password is required").min(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATION"].PASSWORD_MIN_LENGTH, `Password must be at least ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$validation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VALIDATION"].PASSWORD_MIN_LENGTH} characters`)
});
}),
"[project]/apps/web/src/features/auth/schemas/reset-password.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resetPasswordSchema",
    ()=>resetPasswordSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const resetPasswordSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Password is required").min(8, "Password must be at least 8 characters").regex(/[0-9]/, "Password must contain a number").regex(/[a-z]/, "Password must contain a lowercase letter").regex(/[A-Z]/, "Password must contain an uppercase letter").regex(/[^a-zA-Z0-9]/, "Password must contain a special character"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Please confirm your password")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: [
        "confirmPassword"
    ]
});
}),
"[project]/apps/web/src/features/auth/schemas/signup.schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signupSchema",
    ()=>signupSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-ssr] (ecmascript) <export * as z>");
;
const signupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "First name is required"),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Last name is required"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Email address is required").email("Please enter a valid email address"),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Password is required").min(8, "Password must be at least 8 characters").regex(/[0-9]/, "Password must contain a number").regex(/[a-z]/, "Password must contain a lowercase letter").regex(/[A-Z]/, "Password must contain an uppercase letter").regex(/[^a-zA-Z0-9]/, "Password must contain a special character"),
    confirmPassword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Please confirm your password"),
    acceptTerms: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().refine((val)=>val === true, "You must accept the terms")
}).refine((data)=>data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: [
        "confirmPassword"
    ]
});
}),
"[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Feature - Validation Schemas
 */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$forgot$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/forgot-password.schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$login$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/login.schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$reset$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/reset-password.schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$signup$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/signup.schema.ts [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthBackground",
    ()=>AuthBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function AuthBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-[-0.37px] left-[28px] z-0 h-[380.37px] w-[607px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-118.9%] left-[-4.2%] h-[218.9%] w-[115.96%] max-w-none bg-cover bg-center bg-no-repeat",
                style: {
                    backgroundImage: "url('/backgrounds/auth-background.png')"
                }
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx",
                lineNumber: 5,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/AuthBackground/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthBackground$2f$AuthBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthLayout",
    ()=>AuthLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthBackground$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthBackground/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthBackground$2f$AuthBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthBackground/AuthBackground.tsx [app-ssr] (ecmascript)");
;
;
;
;
function AuthLayout({ children, backButton }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-text-paragraph flex min-h-screen w-full overflow-x-hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "auth-sidebar-bg fixed top-0 left-0 isolate hidden h-screen w-[552px] flex-col items-start overflow-hidden lg:flex",
                style: {
                    backgroundColor: "#212121"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "z-10 w-full p-8 lg:p-[56px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex shrink-0 items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                                    className: "relative size-9",
                                    width: 36,
                                    height: 36
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    className: "relative h-[25.24px] w-[122.75px] brightness-0 invert",
                                    alt: "Hireable Text",
                                    src: "/logos/frame-1-1.svg",
                                    width: 123,
                                    height: 25
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthBackground$2f$AuthBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthBackground"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden w-[552px] shrink-0 lg:block"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-white px-4 py-6 sm:px-6 sm:py-12 lg:px-8",
                children: [
                    backButton,
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/auth/components/AuthLayout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ForgotPasswordPage",
    ()=>ForgotPasswordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/back-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$forgot$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/forgot-password.schema.ts [app-ssr] (ecmascript)");
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
function ForgotPasswordPage() {
    const [generalError, setGeneralError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$forgot$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forgotPasswordSchema"])
    });
    const onSubmit = async (_data)=>{
        setGeneralError(null);
        try {
        // TODO: Call forgot password API
        } catch  {
            setGeneralError("An error occurred. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        backButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackLink"], {
            href: "/",
            children: "back to landing page"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
            lineNumber: 36,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full max-w-[480px] space-y-6 sm:space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-3 sm:space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                            className: "relative size-[44px]",
                            width: 44,
                            height: 44
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-foreground text-center text-2xl font-semibold tracking-tight sm:text-3xl",
                            children: "Forgot your password?"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-text-paragraph text-center text-sm font-normal text-neutral-700",
                            children: "Enter your email address to send code to your account."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-6",
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    children: [
                        generalError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: generalError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Email address"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    autoComplete: "email",
                                    placeholder: "Enter email address....",
                                    "aria-invalid": !!errors.email,
                                    "aria-describedby": errors.email ? "email-error" : undefined,
                                    className: `font-text-paragraph text-foreground h-[44px] rounded-[8px] bg-white placeholder:text-neutral-700 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("email")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "email-error",
                                    className: "text-sm text-red-600",
                                    children: errors.email.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>window.history.back(),
                                    className: "font-text-paragraph-b text-foreground h-[44px] flex-1 rounded-[8px] border-neutral-300 bg-white text-sm font-semibold hover:bg-gray-50",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "bg-client font-text-paragraph-b h-[44px] flex-1 rounded-[8px] text-sm font-semibold text-white hover:bg-[#008ecc]",
                                    children: isSubmitting ? "Submitting..." : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-text-paragraph flex flex-wrap items-center justify-center gap-1 text-center text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-foreground",
                            children: "Don't have an account yet?"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/signup",
                            className: "text-client cursor-pointer hover:underline",
                            children: "Sign up now"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/ForgotPasswordPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$ForgotPasswordPage$2f$ForgotPasswordPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/ForgotPasswordPage/ForgotPasswordPage.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginPage",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/back-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/password-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/constants/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/constants/routes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$login$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/login.schema.ts [app-ssr] (ecmascript)");
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
;
;
;
function LoginPage() {
    const [generalError, setGeneralError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$login$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginSchema"])
    });
    const onSubmit = async (data)=>{
        setGeneralError(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].login(data);
        // Redirect or handle successful login
        } catch  {
            setGeneralError("Invalid email or password");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        backButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackLink"], {
            href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].HOME,
            children: "back to landing page"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
            lineNumber: 38,
            columnNumber: 19
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full max-w-[480px] space-y-6 sm:space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-3 sm:space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                            className: "relative size-[44px]",
                            width: 44,
                            height: 44
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-foreground text-center text-2xl font-semibold tracking-tight sm:text-3xl",
                            children: "Login to Hireable"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-6",
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    children: [
                        generalError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: generalError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Email address"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    autoComplete: "email",
                                    placeholder: "Email address",
                                    "aria-invalid": !!errors.email,
                                    "aria-describedby": errors.email ? "email-error" : undefined,
                                    className: `font-text-paragraph text-foreground h-[44px] rounded-[8px] bg-white placeholder:text-neutral-700 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("email")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "email-error",
                                    className: "text-sm text-red-600",
                                    children: errors.email.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "password",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Password"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                    id: "password",
                                    autoComplete: "current-password",
                                    placeholder: "Password",
                                    "aria-invalid": !!errors.password,
                                    "aria-describedby": errors.password ? "password-error" : undefined,
                                    className: `font-text-paragraph text-foreground h-[44px] rounded-[8px] bg-white placeholder:text-neutral-700 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("password")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "password-error",
                                    className: "text-sm text-red-600",
                                    children: errors.password.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].FORGOT_PASSWORD,
                                className: "font-text-paragraph text-client cursor-pointer text-sm font-normal hover:underline",
                                children: "Forgot your password?"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "bg-client font-text-paragraph-b hover:bg-client-hover h-[44px] w-full rounded-[8px] text-sm font-semibold text-white",
                            children: isSubmitting ? "Logging in..." : "Continue"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-text-paragraph flex items-center justify-center gap-1 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-foreground",
                            children: "Don't have an account yet?"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$constants$2f$routes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].SIGNUP,
                            className: "text-client cursor-pointer hover:underline",
                            children: "Sign up now"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/LoginPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/LoginPage/LoginPage.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResetPasswordPage",
    ()=>ResetPasswordPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/back-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/password-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$reset$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/reset-password.schema.ts [app-ssr] (ecmascript)");
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
const passwordRequirements = [
    "Numbers",
    "Upper and lowercase letters",
    "Special character",
    "8 characters minimum"
];
function ResetPasswordPage() {
    const [generalError, setGeneralError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$reset$2d$password$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetPasswordSchema"])
    });
    const onSubmit = async (_data)=>{
        setGeneralError(null);
        try {
        // TODO: Call reset password API
        } catch  {
            setGeneralError("An error occurred. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        backButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackLink"], {
            href: "/login",
            children: "back to login"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
            lineNumber: 40,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 w-full max-w-[480px] space-y-5 lg:space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                            className: "relative size-10 lg:size-11",
                            width: 44,
                            height: 44
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-foreground text-center text-2xl font-semibold tracking-tight lg:text-[32px]",
                            children: "Reset your password"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-text-paragraph text-center text-sm leading-relaxed font-normal text-neutral-700",
                            children: "Create a new password for your account."
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-4",
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    children: [
                        generalError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: generalError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                            children: "Create new password"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                            id: "password",
                                            placeholder: "Enter new password...",
                                            "aria-invalid": !!errors.password,
                                            "aria-describedby": errors.password ? "password-error" : undefined,
                                            className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-400 lg:h-11 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                            ...register("password")
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "password-error",
                                            className: "text-sm text-red-600",
                                            children: errors.password.message
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-x-3 gap-y-1 text-xs text-neutral-700 sm:grid-cols-2 lg:text-sm lg:text-neutral-900",
                                    children: passwordRequirements.map((requirement)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "size-1 shrink-0 rounded-full bg-neutral-500 lg:size-1.5 lg:bg-neutral-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: requirement
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, requirement, true, {
                                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "confirmPassword",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Confirm password"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                    id: "confirmPassword",
                                    placeholder: "Confirm password...",
                                    "aria-invalid": !!errors.confirmPassword,
                                    "aria-describedby": errors.confirmPassword ? "confirmPassword-error" : undefined,
                                    className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-400 lg:h-11 ${errors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("confirmPassword")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "confirmPassword-error",
                                    className: "text-sm text-red-600",
                                    children: errors.confirmPassword.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    variant: "outline",
                                    onClick: ()=>window.history.back(),
                                    className: "font-text-paragraph-b text-foreground h-10 flex-1 rounded-[8px] border-neutral-300 bg-white text-sm font-semibold hover:bg-gray-50 lg:h-11",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    disabled: isSubmitting,
                                    className: "bg-client font-text-paragraph-b h-10 flex-1 rounded-[8px] text-sm font-semibold text-white hover:bg-[#008ecc] lg:h-11",
                                    children: isSubmitting ? "Submitting..." : "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/ResetPasswordPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$ResetPasswordPage$2f$ResetPasswordPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/ResetPasswordPage/ResetPasswordPage.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupFormPage",
    ()=>SignupFormPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/back-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/password-input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$signup$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/signup.schema.ts [app-ssr] (ecmascript)");
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
;
const passwordRequirements = [
    "Numbers",
    "Upper and lowercase letters",
    "Special character",
    "8 characters minimum"
];
const PRIVACY_POLICY_LINK = "/privacy-policy";
function SignupFormPage({ title, checkboxText }) {
    const [generalError, setGeneralError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$signup$2e$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signupSchema"])
    });
    const password = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "password"
    }) || "";
    const isRequirementMet = (req)=>{
        if (req === "Numbers") return /[0-9]/.test(password);
        if (req === "Upper and lowercase letters") return /[a-z]/.test(password) && /[A-Z]/.test(password);
        if (req === "Special character") return /[^a-zA-Z0-9]/.test(password);
        if (req === "8 characters minimum") return password.length >= 8;
        return false;
    };
    const onSubmit = async (_data)=>{
        setGeneralError(null);
        try {
        // TODO: Call signup API
        } catch  {
            setGeneralError("An error occurred during signup. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        backButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackLink"], {
            href: "/signup",
            children: "select account"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
            lineNumber: 60,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "z-10 flex w-full max-w-[480px] flex-col gap-3 rounded-2xl bg-white/80 p-6 pt-8 backdrop-blur-md sm:gap-4 sm:bg-transparent sm:p-0 sm:pt-10 sm:backdrop-blur-none lg:gap-6 lg:pt-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-xl font-semibold text-neutral-900 sm:text-2xl lg:text-[32px]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "space-y-4 lg:space-y-5",
                    onSubmit: handleSubmit(onSubmit),
                    noValidate: true,
                    children: [
                        generalError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "alert",
                            className: "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700",
                            children: generalError
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 75,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-3 sm:grid-cols-2 lg:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "firstName",
                                            className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                            children: "First Name"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "firstName",
                                            autoComplete: "given-name",
                                            placeholder: "Enter first name",
                                            "aria-invalid": !!errors.firstName,
                                            "aria-describedby": errors.firstName ? "firstName-error" : undefined,
                                            className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${errors.firstName ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                            ...register("firstName")
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this),
                                        errors.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "firstName-error",
                                            className: "text-sm text-red-600",
                                            children: errors.firstName.message
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "lastName",
                                            className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                            children: "Last Name"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "lastName",
                                            autoComplete: "family-name",
                                            placeholder: "Enter last name",
                                            "aria-invalid": !!errors.lastName,
                                            "aria-describedby": errors.lastName ? "lastName-error" : undefined,
                                            className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${errors.lastName ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                            ...register("lastName")
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        errors.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "lastName-error",
                                            className: "text-sm text-red-600",
                                            children: errors.lastName.message
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "email",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Email address"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "email",
                                    type: "email",
                                    autoComplete: "email",
                                    placeholder: "Enter email address",
                                    "aria-invalid": !!errors.email,
                                    "aria-describedby": errors.email ? "email-error" : undefined,
                                    className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("email")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "email-error",
                                    className: "text-sm text-red-600",
                                    children: errors.email.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                            children: "Create password"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                            id: "password",
                                            autoComplete: "new-password",
                                            placeholder: "Create password",
                                            "aria-invalid": !!errors.password,
                                            "aria-describedby": errors.password ? "password-error" : undefined,
                                            className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${errors.password ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                            ...register("password")
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "password-error",
                                            className: "text-sm text-red-600",
                                            children: errors.password.message
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-x-3 gap-y-1 text-xs text-neutral-700 sm:grid-cols-2 lg:text-sm lg:text-neutral-900",
                                    children: passwordRequirements.map((requirement)=>{
                                        const met = isRequirementMet(requirement);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `size-1 rounded-full lg:size-1.5 ${met ? "bg-green-500" : "bg-neutral-500 lg:bg-neutral-900"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: met ? "text-green-600" : "",
                                                    children: requirement
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, requirement, true, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                            lineNumber: 204,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "confirmPassword",
                                    className: "font-text-paragraph-b text-foreground text-sm font-semibold tracking-wide",
                                    children: "Confirm password"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$password$2d$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PasswordInput"], {
                                    id: "confirmPassword",
                                    autoComplete: "new-password",
                                    placeholder: "Confirm password",
                                    "aria-invalid": !!errors.confirmPassword,
                                    "aria-describedby": errors.confirmPassword ? "confirmPassword-error" : undefined,
                                    className: `h-10 rounded-[8px] bg-white text-neutral-900 placeholder:text-neutral-700 lg:h-11 ${errors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : "border-neutral-300"}`,
                                    ...register("confirmPassword")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this),
                                errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    id: "confirmPassword-error",
                                    className: "text-sm text-red-600",
                                    children: errors.confirmPassword.message
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex cursor-pointer items-start gap-2.5 text-sm text-neutral-900",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: `mt-0.5 size-4 rounded border ${errors.acceptTerms ? "border-red-500" : "border-neutral-300"}`,
                                    ...register("acceptTerms")
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leading-tight select-none",
                                    children: checkboxText
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        errors.acceptTerms && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600",
                            children: errors.acceptTerms.message
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "bg-client hover:bg-client-hover h-10 w-full rounded-[8px] text-sm font-semibold text-white lg:h-11",
                            children: isSubmitting ? "Signing up..." : "Sign up"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full items-center justify-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] text-neutral-900",
                            children: "Already have an account?"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/login",
                            className: "flex cursor-pointer items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-text-paragraph text-client text-center text-sm leading-[1.2] font-normal tracking-[0.2px] hover:underline",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs leading-normal text-neutral-700 lg:text-left",
                    children: [
                        "By continuing, you acknowledge that you have read and accept the",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-client underline",
                            children: "Terms of Use"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        " ",
                        "and ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: PRIVACY_POLICY_LINK,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "text-client underline",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupRoleSelectionPage",
    ()=>SignupRoleSelectionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/back-link.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const imgTalent = "/images/signup-talent.svg";
const imgClient = "/images/signup-client.svg";
function SignupRoleSelectionPage() {
    const [selectedRole, setSelectedRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        backButton: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$back$2d$link$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackLink"], {
            href: "/login",
            children: "back to login"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
            lineNumber: 17,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 flex w-full max-w-[720px] flex-1 flex-col items-start justify-center gap-4 sm:gap-6 lg:gap-8 lg:p-[56px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-display w-full text-center text-xl leading-normal font-semibold text-neutral-900 sm:text-2xl lg:text-[32px]",
                    children: "It only takes a minute to create an account"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-col gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/signup/client",
                            onClick: ()=>setSelectedRole("client"),
                            className: `group focus-visible:ring-client relative h-auto min-h-[160px] w-full cursor-pointer rounded-2xl border bg-white p-2 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] sm:h-[192px] ${selectedRole === "client" ? "border-client" : "hover:border-client border-neutral-300"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex size-full items-center gap-3 rounded-xl transition-colors sm:gap-4 ${selectedRole === "client" ? "bg-[#dcf4ff]" : "bg-white group-hover:bg-[#dcf4ff]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col items-start gap-2 p-3 sm:gap-3 sm:py-0 sm:pr-10 sm:pl-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `font-display text-lg font-semibold transition-colors sm:text-xl ${selectedRole === "client" ? "text-neutral-900" : "text-neutral-900 group-hover:text-neutral-800"}`,
                                                children: "I'm a Client"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] transition-colors ${selectedRole === "client" ? "text-neutral-700" : "text-neutral-700 group-hover:text-neutral-800"}`,
                                                children: "Post jobs, manage trials, and hire top remote talent with confidence."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative size-[80px] shrink-0 sm:size-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-[6.43%_3.57%_6.88%_3.57%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: imgClient,
                                                alt: "Client Illustration",
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/signup/talent",
                            onClick: ()=>setSelectedRole("talent"),
                            className: `group focus-visible:ring-talent relative h-auto min-h-[160px] w-full cursor-pointer rounded-2xl border bg-white p-2 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] sm:h-[192px] ${selectedRole === "talent" ? "border-talent" : "hover:border-talent border-neutral-300"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex size-full items-center gap-3 rounded-xl transition-colors sm:gap-4 ${selectedRole === "talent" ? "bg-[#ffeaf2]" : "bg-white group-hover:bg-[#ffeaf2]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col items-start gap-2 p-3 sm:gap-3 sm:py-0 sm:pr-10 sm:pl-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `font-display text-lg font-semibold transition-colors sm:text-xl ${selectedRole === "talent" ? "text-neutral-900" : "text-neutral-900 group-hover:text-neutral-800"}`,
                                                children: "I'm a Remote Talent"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] transition-colors ${selectedRole === "talent" ? "text-neutral-700" : "text-neutral-700 group-hover:text-neutral-800"}`,
                                                children: "Find global opportunities and work with great teams that fit your style."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative size-[80px] shrink-0 sm:size-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-[12.14%_5.71%_12.21%_5.71%]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: imgTalent,
                                                alt: "Talent Illustration",
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full items-center justify-center gap-2 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-text-paragraph text-sm leading-[1.2] font-normal tracking-[0.2px] text-neutral-900",
                            children: "Already have an account?"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/login",
                            className: "flex cursor-pointer items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-text-paragraph text-client text-center text-sm leading-[1.2] font-normal tracking-[0.2px] hover:underline",
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/SignupPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$SignupPage$2f$SignupFormPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/SignupPage/SignupFormPage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$SignupPage$2f$SignupRoleSelectionPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/SignupPage/SignupRoleSelectionPage.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignupSuccessPage",
    ()=>SignupSuccessPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function SignupSuccessPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full flex-col items-center justify-center bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center gap-6 px-4 pb-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative size-[200px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/Avatar-client.svg",
                        alt: "Success",
                        fill: true,
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "max-w-[700px] text-center text-neutral-900 lg:max-w-[1120px]",
                    style: {
                        fontFamily: "var(--heading-m-font-family)",
                        fontSize: "var(--heading-m-font-size)",
                        fontWeight: "var(--heading-m-font-weight)",
                        lineHeight: "var(--heading-m-line-height)",
                        letterSpacing: "var(--heading-m-letter-spacing)"
                    },
                    children: "Congratulations, your account has been created. Let's get you started"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/SignupSuccessPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$SignupSuccessPage$2f$SignupSuccessPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/SignupSuccessPage/SignupSuccessPage.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerifyEmailPage",
    ()=>VerifyEmailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function VerifyEmailPage({ email = "juanlopez@sample.com" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full flex-col bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 flex w-full items-center gap-2.5 bg-white px-5 pt-6 pb-3 backdrop-blur lg:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex shrink-0 items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "relative size-8",
                            alt: "Hireable Logo",
                            src: "/logos/frame-2.svg",
                            width: 32,
                            height: 32
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "relative h-[25px] w-[121px]",
                            alt: "Hireable Text",
                            src: "/logos/frame-1-1.svg",
                            width: 121,
                            height: 25
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-1 flex-col items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-10 pb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[120px] w-[108.9px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/verify-email-icon.svg",
                                alt: "Verify Email",
                                fill: true,
                                className: "object-contain"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full max-w-[1120px] flex-col items-center gap-4 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-neutral-900",
                                    style: {
                                        fontFamily: "var(--heading-m-font-family)",
                                        fontSize: "var(--heading-m-font-size)",
                                        fontWeight: "var(--heading-m-font-weight)",
                                        lineHeight: "var(--heading-m-line-height)",
                                        letterSpacing: "var(--heading-m-letter-spacing)"
                                    },
                                    children: "Verify your email to proceed"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-neutral-700",
                                    style: {
                                        fontFamily: "var(--text-s-font-family)",
                                        fontSize: "var(--text-s-font-size)",
                                        fontWeight: "var(--text-s-font-weight)",
                                        lineHeight: "var(--text-s-line-height)",
                                        letterSpacing: "var(--text-s-letter-spacing)"
                                    },
                                    children: [
                                        "We sent a verification link to",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: email
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this),
                                        ". Check your inbox to activate your account, or look in your spam folder. Didn't get it? Resend below."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            className: "bg-client hover:bg-client-hover flex h-12 w-[237px] items-center justify-center gap-2 rounded-lg px-5 text-base font-semibold text-white",
                            children: "Resend Verification Email"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/features/auth/components/VerifyEmailPage/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$VerifyEmailPage$2f$VerifyEmailPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/VerifyEmailPage/VerifyEmailPage.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/apps/web/src/features/auth/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Auth Feature - Public API
 *
 * This is the main entry point for the auth feature.
 * Import from '@/features/auth' for all auth-related functionality.
 */ // Hooks
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/hooks/index.ts [app-ssr] (ecmascript) <locals>");
// Services
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/auth.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$mappers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/mappers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$services$2f$storage$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/services/storage.service.ts [app-ssr] (ecmascript)");
// Schemas
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$schemas$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/schemas/index.ts [app-ssr] (ecmascript) <locals>");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthBackground$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthBackground/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$AuthLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/AuthLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$ForgotPasswordPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/ForgotPasswordPage/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$LoginPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/LoginPage/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$ResetPasswordPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/ResetPasswordPage/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$SignupPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/SignupPage/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$SignupSuccessPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/SignupSuccessPage/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$features$2f$auth$2f$components$2f$VerifyEmailPage$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/features/auth/components/VerifyEmailPage/index.ts [app-ssr] (ecmascript) <locals>");
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
;
;
}),
];

//# sourceMappingURL=apps_web_src_features_auth_481bfdf0._.js.map