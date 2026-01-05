/**
 * API Contract Types for Backend Development
 * Generated from frontend component requirements
 * 
 * These interfaces represent the data shapes the frontend expects.
 * Use as a starting point for API design discussions.
 */

// =============================================================================
// COMMON TYPES
// =============================================================================

export type BadgeVariant = "default" | "ontrack" | "atrisk" | "offtrack" | "complete";
export type JobPostType = "full-time" | "test-30-60-90";
export type UpdateMethod = "automatic" | "manual";

// =============================================================================
// USER / CANDIDATE
// =============================================================================

export interface Education {
  id: string;
  degree: string;
  school: string;
  years: string; // e.g., "2014-2018"
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface AIMatch {
  percentage: number; // 0-100
  workStyleFit: string;
  performanceHistory: string;
  jobDescriptionFit: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  role: string;
  avatar: string; // URL
  salary: string; // e.g., "$2,200 /mo"
  experience: string; // e.g., "5-8 years"
  location: string;
  status: "active" | "inactive" | "hired" | "rejected";
  activityTitle: string;
  application: {
    position: string;
    appliedDate: string; // ISO 8601 date string
  };
  aiMatch: AIMatch;
  about: string;
  skills: string[];
  education: Education[];
  certificates: Certificate[];
  links: {
    linkedin?: string;
    portfolio?: string;
  };
  personalMessage: string;
}
/** Minimal candidate for list views / kanban cards */
export interface CandidateSummary {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  salary: string;
  experience: string;
  matchPercentage?: number;
  status?: "active" | "inactive" | "hired" | "rejected";
}

// =============================================================================
// JOB APPLICATIONS
// =============================================================================

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  salary: string; // e.g., "$110k - $140k/yr"
  experience: string; // e.g., "1-3 years experience"
  status: "full-time" | "part-time" | "contract";
  postedAt: string; // ISO 8601 date string
  badge?: {
    label: string;
    variant: BadgeVariant;
  };
}
// =============================================================================
// GOALS / OBJECTIVES
// =============================================================================

export interface KeyResult {
  id: string;
  title: string;
  badgeText: string; // e.g., "Percent", "Number"
  currentValue?: number;
  targetValue?: number;
}

export interface Goal {
  id: string;
  title: string;
  description?: string;
  updateMethod: UpdateMethod;
  progress: number; // 0-100
  badge?: {
    label: string;
    variant: BadgeVariant;
  };
  metrics?: {
    label: string;
    current?: number;
    total?: number;
    value?: string;
  }[];
  keyResults?: KeyResult[];
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGoalRequest {
  title: string;
  description: string;
  updateMethod: UpdateMethod;
  keyResults?: Omit<KeyResult, "id">[];
  unitType?: string;
  currentValue?: number;
  targetValue?: number;
}// =============================================================================
// KANBAN / PIPELINE
// =============================================================================

export interface KanbanColumn<T> {
  id: string;
  title: string;
  count: number;
  items: T[];
}

export interface CandidatePipeline {
  columns: KanbanColumn<CandidateSummary>[];
}

export interface ApplicationPipeline {
  columns: KanbanColumn<JobApplication>[];
}

// =============================================================================
// CHARTS / ANALYTICS
// =============================================================================

export interface ChartDataPoint {
  date: string;
  progress: number;
}

export interface ProgressChart {
  id: string;
  title: string;
  dataPoints: ChartDataPoint[];
}

// =============================================================================
// FILE UPLOADS
// =============================================================================

export interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  mimeType: string;
}

// =============================================================================
// API RESPONSES (Pagination)
// =============================================================================

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
  };
}

export interface ApiError {
  code: string;
  message: string;
  field?: string; // for validation errors
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errors?: ApiError[];
}


// =============================================================================
// SUGGESTED API ENDPOINTS
// =============================================================================

/**
 * Suggested REST API endpoints based on frontend requirements:
 *
 * CANDIDATES
 * GET    /api/candidates                    - List candidates (paginated)
 * GET    /api/candidates/:id                - Get full candidate profile
 * POST   /api/candidates                    - Create candidate
 * PUT    /api/candidates/:id                - Update candidate
 * DELETE /api/candidates/:id                - Delete/drop candidate
 * POST   /api/candidates/:id/invite         - Invite to interview
 * POST   /api/candidates/:id/offer          - Send job offer
 *
 * APPLICATIONS
 * GET    /api/applications                  - List applications (paginated)
 * POST   /api/applications                  - Create application
 * PUT    /api/applications/:id              - Update application status
 * DELETE /api/applications/:id              - Withdraw application
 *
 * GOALS / OBJECTIVES
 * GET    /api/goals                         - List goals
 * POST   /api/goals                         - Create goal (CreateGoalRequest)
 * GET    /api/goals/:id                     - Get goal with key results
 * PUT    /api/goals/:id                     - Update goal
 * DELETE /api/goals/:id                     - Delete goal
 * PUT    /api/goals/:id/progress            - Update progress
 *
 * KANBAN / PIPELINE
 * GET    /api/pipeline/candidates           - Get candidate pipeline columns
 * PUT    /api/pipeline/candidates/reorder   - Reorder candidates (drag-drop)
 * GET    /api/pipeline/applications         - Get application pipeline columns
 * PUT    /api/pipeline/applications/reorder - Reorder applications (drag-drop)
 *
 * UPLOADS
 * POST   /api/upload/photo                  - Upload profile photo
 * POST   /api/upload/resume                 - Upload resume
 *
 * CHARTS
 * GET    /api/charts/progress               - Get progress chart data
 *
 * AUTH (suggested)
 * POST   /api/auth/login
 * POST   /api/auth/logout
 * GET    /api/auth/me
 * POST   /api/auth/refresh
 */
