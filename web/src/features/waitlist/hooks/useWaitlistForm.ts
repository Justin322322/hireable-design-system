"use client";

import { toast } from "@/components/ui/sonner";
import { ApiClientError } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { waitlistService } from "../services/waitlist.service";

/**
 * Get a user-friendly error message based on the error type
 */
function getUserFriendlyErrorMessage(error: unknown): string {
  if (error instanceof ApiClientError) {
    switch (error.code) {
      case "NETWORK_ERROR":
        return "Unable to connect to the server. Please check your internet connection and try again.";
      case "TIMEOUT":
        return "The request took too long. Please try again.";
      case "UNKNOWN_ERROR":
      default:
        // For 4xx/5xx errors, use the server message if available
        if (error.status >= 400 && error.status < 600) {
          return error.message || "Something went wrong. Please try again.";
        }
        return "Something went wrong. Please try again.";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Failed to join waitlist. Please try again.";
}

// Talent schema
const talentSchema = z.object({
  type: z.literal("talent"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
});

// Client schema
const clientSchema = z.object({
  type: z.literal("client"),
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms"),
  companyName: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters"),
  companySize: z.string().min(1, "Company size is required"),
  industry: z.string().min(1, "Industry is required"),
});

export type TalentFormData = z.infer<typeof talentSchema>;
export type ClientFormData = z.infer<typeof clientSchema>;
export type WaitlistFormData = TalentFormData | ClientFormData;

// Talent waitlist form hook
export const useTalentWaitlistForm = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<TalentFormData>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      type: "talent",
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      terms: false,
    },
  });

  const submitTalent = async (data: TalentFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await waitlistService.joinTalent({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        role: data.role,
        agree: data.terms,
      });

      toast.success("You're on the waitlist!", {
        description: "We'll notify you when we're ready to launch.",
      });
      onSuccess?.();
    } catch (err) {
      const errorMessage = getUserFriendlyErrorMessage(err);
      setError(errorMessage);
      toast.error("Unable to join waitlist", {
        description: errorMessage,
      });
      onError?.(errorMessage);

      // Log detailed error info for debugging
      if (err instanceof ApiClientError) {
        console.error("Failed to join waitlist:", {
          code: err.code,
          status: err.status,
          message: err.message,
          details: err.details,
        });
      } else {
        console.error("Failed to join waitlist:", err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, submitTalent, isSubmitting, error };
};

// Client waitlist form hook
export const useClientWaitlistForm = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      type: "client",
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      companySize: "",
      industry: "",
      role: "",
      terms: false,
    },
  });

  const submitClient = async (data: ClientFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await waitlistService.joinClient({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.companyName,
        companySize: data.companySize,
        industry: data.industry,
        role: data.role,
        agree: data.terms,
      });

      toast.success("You're on the waitlist!", {
        description: "We'll notify you when we're ready to launch.",
      });
      onSuccess?.();
    } catch (err) {
      const errorMessage = getUserFriendlyErrorMessage(err);
      setError(errorMessage);
      toast.error("Unable to join waitlist", {
        description: errorMessage,
      });
      onError?.(errorMessage);

      // Log detailed error info for debugging
      if (err instanceof ApiClientError) {
        console.error("Failed to join waitlist:", {
          code: err.code,
          status: err.status,
          message: err.message,
          details: err.details,
        });
      } else {
        console.error("Failed to join waitlist:", err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, submitClient, isSubmitting, error };
};
