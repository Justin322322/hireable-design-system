/**
 * Mock API Service
 * Simulates real API calls with delays and tracking
 */

import { apiTracker } from "./api-tracker";
import type {
  ApiResponse,
  PaginatedResponse,
  CandidateProfile,
  CandidateSummary,
  Goal,
  CreateGoalRequest,
  JobApplication,
  KanbanColumn,
  ProgressChart,
  UploadResponse,
} from "@/types/api-contracts";

import { mockCandidates } from "@/data/mock/candidates";
import { mockGoals, createGoalFromRequest } from "@/data/mock/goals";
import { mockApplicationPipeline } from "@/data/mock/applications";
import { mockCandidatePipeline } from "@/data/mock/pipeline";
import { mockProgressCharts } from "@/data/mock/charts";
import { mockJobs, mockTrialObjectives, type Job, type TrialObjective } from "@/data/mock/jobs";
import { 
  mockEmployerSetupItems, 
  mockTalentSetupItems, 
  mockEmployerProgress,
  mockTalentProgress,
  type SetupItem, 
  type OnboardingProgress 
} from "@/data/mock/setup";
import { mockUsers, mockAuthSession, type User, type AuthSession } from "@/data/mock/users";

// Simulated network delay (ms)
const MOCK_DELAY = { min: 200, max: 800 };

const delay = (ms?: number): Promise<void> => {
  const duration = ms ?? Math.random() * (MOCK_DELAY.max - MOCK_DELAY.min) + MOCK_DELAY.min;
  return new Promise((resolve) => setTimeout(resolve, duration));
};

// In-memory state (simulates database)
const candidatesState = [...mockCandidates];
let goalsState = [...mockGoals];
const jobsState = [...mockJobs];
const employerSetupState = [...mockEmployerSetupItems];
const talentSetupState = [...mockTalentSetupItems];

// =============================================================================
// CANDIDATES API
// =============================================================================

export const candidatesApi = {
  async list(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<CandidateSummary>>> {
    const callId = apiTracker.track({
      endpoint: "/api/candidates",
      method: "GET",
      params: { page, pageSize },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const summaries = candidatesState.map((c) => ({
      id: c.id,
      name: c.name,
      role: c.role,
      avatar: c.avatar,
      salary: c.salary,
      experience: c.experience,
      matchPercentage: c.aiMatch.percentage,
      status: c.status,
    }));

    const startIdx = (page - 1) * pageSize;
    const data = summaries.slice(startIdx, startIdx + pageSize);

    const response: ApiResponse<PaginatedResponse<CandidateSummary>> = {
      success: true,
      data: {
        data,
        pagination: {
          page,
          pageSize,
          totalItems: summaries.length,
          totalPages: Math.ceil(summaries.length / pageSize),
        },
      },
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getById(id: string): Promise<ApiResponse<CandidateProfile>> {
    const callId = apiTracker.track({
      endpoint: `/api/candidates/${id}`,
      method: "GET",
      params: { id },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const candidate = candidatesState.find((c) => c.id === id);

    if (!candidate) {
      const errorResponse: ApiResponse<CandidateProfile> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Candidate not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Candidate not found",
      });
      return errorResponse;
    }

    const response: ApiResponse<CandidateProfile> = {
      success: true,
      data: candidate,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// GOALS API
// =============================================================================

export const goalsApi = {
  async list(): Promise<ApiResponse<Goal[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/goals",
      method: "GET",
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<Goal[]> = {
      success: true,
      data: goalsState,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getById(id: string): Promise<ApiResponse<Goal>> {
    const callId = apiTracker.track({
      endpoint: `/api/goals/${id}`,
      method: "GET",
      params: { id },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const goal = goalsState.find((g) => g.id === id);

    if (!goal) {
      const errorResponse: ApiResponse<Goal> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Goal not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Goal not found",
      });
      return errorResponse;
    }

    const response: ApiResponse<Goal> = {
      success: true,
      data: goal,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async create(request: CreateGoalRequest): Promise<ApiResponse<Goal>> {
    const callId = apiTracker.track({
      endpoint: "/api/goals",
      method: "POST",
      body: request,
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const newGoal = createGoalFromRequest(request);
    goalsState = [...goalsState, newGoal];

    const response: ApiResponse<Goal> = {
      success: true,
      data: newGoal,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async updateProgress(id: string, progress: number): Promise<ApiResponse<Goal>> {
    const callId = apiTracker.track({
      endpoint: `/api/goals/${id}/progress`,
      method: "PUT",
      body: { progress },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const goalIndex = goalsState.findIndex((g) => g.id === id);

    if (goalIndex === -1) {
      const errorResponse: ApiResponse<Goal> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Goal not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Goal not found",
      });
      return errorResponse;
    }

    goalsState[goalIndex] = {
      ...goalsState[goalIndex],
      progress,
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<Goal> = {
      success: true,
      data: goalsState[goalIndex],
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async delete(id: string): Promise<ApiResponse<void>> {
    const callId = apiTracker.track({
      endpoint: `/api/goals/${id}`,
      method: "DELETE",
      params: { id },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    goalsState = goalsState.filter((g) => g.id !== id);

    const response: ApiResponse<void> = { success: true };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// PIPELINE API
// =============================================================================

export const pipelineApi = {
  async getCandidatePipeline(): Promise<ApiResponse<KanbanColumn<CandidateSummary>[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/pipeline/candidates",
      method: "GET",
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<KanbanColumn<CandidateSummary>[]> = {
      success: true,
      data: mockCandidatePipeline,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getApplicationPipeline(): Promise<ApiResponse<KanbanColumn<JobApplication>[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/pipeline/applications",
      method: "GET",
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<KanbanColumn<JobApplication>[]> = {
      success: true,
      data: mockApplicationPipeline,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// CHARTS API
// =============================================================================

export const chartsApi = {
  async getProgressCharts(): Promise<ApiResponse<ProgressChart[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/charts/progress",
      method: "GET",
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<ProgressChart[]> = {
      success: true,
      data: mockProgressCharts,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// UPLOAD API
// =============================================================================

export const uploadApi = {
  async uploadPhoto(file: File): Promise<ApiResponse<UploadResponse>> {
    const callId = apiTracker.track({
      endpoint: "/api/upload/photo",
      method: "POST",
      body: { filename: file.name, size: file.size },
      status: "pending",
    });
    const start = Date.now();

    await delay(1000); // Simulate upload time

    const response: ApiResponse<UploadResponse> = {
      success: true,
      data: {
        url: `/uploads/${Date.now()}-${file.name}`,
        filename: file.name,
        size: file.size,
        mimeType: file.type,
      },
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// JOBS API
// =============================================================================

export const jobsApi = {
  async list(status?: Job["status"]): Promise<ApiResponse<Job[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/jobs",
      method: "GET",
      params: { status },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const filtered = status 
      ? jobsState.filter((j) => j.status === status)
      : jobsState;

    const response: ApiResponse<Job[]> = {
      success: true,
      data: filtered,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getById(id: string): Promise<ApiResponse<Job>> {
    const callId = apiTracker.track({
      endpoint: `/api/jobs/${id}`,
      method: "GET",
      params: { id },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const job = jobsState.find((j) => j.id === id);

    if (!job) {
      const errorResponse: ApiResponse<Job> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Job not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Job not found",
      });
      return errorResponse;
    }

    const response: ApiResponse<Job> = {
      success: true,
      data: job,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getTrialObjectives(jobId: string): Promise<ApiResponse<TrialObjective[]>> {
    const callId = apiTracker.track({
      endpoint: `/api/jobs/${jobId}/objectives`,
      method: "GET",
      params: { jobId },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<TrialObjective[]> = {
      success: true,
      data: mockTrialObjectives,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async publish(id: string): Promise<ApiResponse<Job>> {
    const callId = apiTracker.track({
      endpoint: `/api/jobs/${id}/publish`,
      method: "POST",
      params: { id },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const jobIndex = jobsState.findIndex((j) => j.id === id);

    if (jobIndex === -1) {
      const errorResponse: ApiResponse<Job> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Job not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Job not found",
      });
      return errorResponse;
    }

    jobsState[jobIndex] = {
      ...jobsState[jobIndex],
      status: "published",
      postedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const response: ApiResponse<Job> = {
      success: true,
      data: jobsState[jobIndex],
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// SETUP/ONBOARDING API
// =============================================================================

export const setupApi = {
  async getSetupItems(userType: "employer" | "talent"): Promise<ApiResponse<SetupItem[]>> {
    const callId = apiTracker.track({
      endpoint: "/api/setup/items",
      method: "GET",
      params: { userType },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const items = userType === "employer" ? employerSetupState : talentSetupState;

    const response: ApiResponse<SetupItem[]> = {
      success: true,
      data: items,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async getProgress(userType: "employer" | "talent"): Promise<ApiResponse<OnboardingProgress>> {
    const callId = apiTracker.track({
      endpoint: "/api/setup/progress",
      method: "GET",
      params: { userType },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const progress = userType === "employer" ? mockEmployerProgress : mockTalentProgress;

    const response: ApiResponse<OnboardingProgress> = {
      success: true,
      data: progress,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async completeItem(itemId: string, userType: "employer" | "talent"): Promise<ApiResponse<SetupItem>> {
    const callId = apiTracker.track({
      endpoint: `/api/setup/items/${itemId}/complete`,
      method: "POST",
      params: { itemId, userType },
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const items = userType === "employer" ? employerSetupState : talentSetupState;
    const itemIndex = items.findIndex((i) => i.id === itemId);

    if (itemIndex === -1) {
      const errorResponse: ApiResponse<SetupItem> = {
        success: false,
        errors: [{ code: "NOT_FOUND", message: "Setup item not found" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Setup item not found",
      });
      return errorResponse;
    }

    items[itemIndex] = { ...items[itemIndex], completed: true };

    const response: ApiResponse<SetupItem> = {
      success: true,
      data: items[itemIndex],
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// AUTH API
// =============================================================================

export const authApi = {
  async login(email: string, password: string): Promise<ApiResponse<AuthSession>> {
    const callId = apiTracker.track({
      endpoint: "/api/auth/login",
      method: "POST",
      body: { email },
      status: "pending",
    });
    const start = Date.now();

    await delay(500);

    const user = mockUsers.find((u) => u.email === email);

    if (!user || password !== "password123") {
      const errorResponse: ApiResponse<AuthSession> = {
        success: false,
        errors: [{ code: "INVALID_CREDENTIALS", message: "Invalid email or password" }],
      };
      apiTracker.update(callId, {
        status: "error",
        response: errorResponse,
        duration: Date.now() - start,
        error: "Invalid credentials",
      });
      return errorResponse;
    }

    const session: AuthSession = {
      user,
      token: `mock-jwt-${Date.now()}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    };

    const response: ApiResponse<AuthSession> = {
      success: true,
      data: session,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async me(): Promise<ApiResponse<User>> {
    const callId = apiTracker.track({
      endpoint: "/api/auth/me",
      method: "GET",
      status: "pending",
    });
    const start = Date.now();

    await delay();

    const response: ApiResponse<User> = {
      success: true,
      data: mockAuthSession.user,
    };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },

  async logout(): Promise<ApiResponse<void>> {
    const callId = apiTracker.track({
      endpoint: "/api/auth/logout",
      method: "POST",
      status: "pending",
    });
    const start = Date.now();

    await delay(200);

    const response: ApiResponse<void> = { success: true };

    apiTracker.update(callId, {
      status: "success",
      response,
      duration: Date.now() - start,
    });

    return response;
  },
};

// =============================================================================
// COMBINED API EXPORT
// =============================================================================

export const mockApi = {
  candidates: candidatesApi,
  goals: goalsApi,
  pipeline: pipelineApi,
  charts: chartsApi,
  upload: uploadApi,
  jobs: jobsApi,
  setup: setupApi,
  auth: authApi,
};
