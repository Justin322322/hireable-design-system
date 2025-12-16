import { VALIDATION } from "@/constants";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(
      VALIDATION.PASSWORD_MIN_LENGTH,
      `Password must be at least ${VALIDATION.PASSWORD_MIN_LENGTH} characters`
    ),
});

export type LoginFormData = z.infer<typeof loginSchema>;
