/**
 * Waitlist Service
 *
 * Handles waitlist-related API calls
 */

import { apiClient } from "@/services/api";
import { WAITLIST } from "@/services/api/endpoints";

export interface TalentWaitlistRequest {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  agree: boolean;
}

export interface ClientWaitlistRequest {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companySize: string;
  industry: string;
  role: string;
  agree: boolean;
}

export interface WaitlistApiResponse {
  message: string;
  success: boolean;
  data?: {
    id: string;
    timestamp: string;
  };
}

export const waitlistService = {
  /**
   * Join talent waitlist
   */
  async joinTalent(data: TalentWaitlistRequest): Promise<WaitlistApiResponse> {
    const response = await apiClient.post<WaitlistApiResponse>(
      WAITLIST.TALENT,
      data
    );
    return response.data;
  },

  /**
   * Join client waitlist
   */
  async joinClient(data: ClientWaitlistRequest): Promise<WaitlistApiResponse> {
    const response = await apiClient.post<WaitlistApiResponse>(
      WAITLIST.CLIENT,
      data
    );
    return response.data;
  },
};
