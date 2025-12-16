/**
 * useForm Hook
 *
 * A lightweight form management hook that handles:
 * - Form state management
 * - Field validation
 * - Error handling
 * - Form submission
 */

"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type ValidationRule<T> = {
  validate: (value: T[keyof T], values: T) => boolean;
  message: string;
};

type ValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T>[];
};

interface UseFormOptions<T> {
  initialValues: T;
  validationRules?: ValidationRules<T>;
  onSubmit: (values: T) => Promise<void> | void;
}

interface UseFormReturn<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, error: string) => void;
  resetForm: () => void;
  validateField: (field: keyof T) => boolean;
  validateForm: () => boolean;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validationRules = {},
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (field: keyof T): boolean => {
      const rules = validationRules[field];
      if (!rules) return true;

      for (const rule of rules) {
        if (!rule.validate(values[field], values)) {
          setErrors((prev) => ({ ...prev, [field]: rule.message }));
          return false;
        }
      }

      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
      return true;
    },
    [values, validationRules]
  );

  const validateForm = useCallback((): boolean => {
    let isValid = true;
    const newErrors: Partial<Record<keyof T, string>> = {};

    for (const field of Object.keys(validationRules) as (keyof T)[]) {
      const rules = validationRules[field];
      if (!rules) continue;

      for (const rule of rules) {
        if (!rule.validate(values[field], values)) {
          newErrors[field] = rule.message;
          isValid = false;
          break;
        }
      }
    }

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules]);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name, value, type } = e.target;
      const newValue =
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

      setValues((prev) => ({ ...prev, [name]: newValue }));

      // Clear error when user starts typing
      if (errors[name as keyof T]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name as keyof T];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const handleBlur = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const { name } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name as keyof T);
    },
    [validateField]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {} as Record<keyof T, boolean>
      );
      setTouched(allTouched);

      if (!validateForm()) return;

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateForm, onSubmit]
  );

  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

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
    validateForm,
  };
}

// Common validation helpers
export const validators = {
  required: (message = "This field is required") => ({
    validate: (value: unknown) =>
      value !== undefined && value !== null && value !== "",
    message,
  }),

  email: (message = "Please enter a valid email") => ({
    validate: (value: unknown) =>
      typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    message,
  }),

  minLength: (length: number, message?: string) => ({
    validate: (value: unknown) =>
      typeof value === "string" && value.length >= length,
    message: message || `Must be at least ${length} characters`,
  }),

  maxLength: (length: number, message?: string) => ({
    validate: (value: unknown) =>
      typeof value === "string" && value.length <= length,
    message: message || `Must be no more than ${length} characters`,
  }),

  pattern: (regex: RegExp, message: string) => ({
    validate: (value: unknown) =>
      typeof value === "string" && regex.test(value),
    message,
  }),

  match: <T extends Record<string, unknown>>(
    field: keyof T,
    message = "Fields do not match"
  ) => ({
    validate: (value: unknown, values: T) => value === values[field],
    message,
  }),

  password: (
    message = "Password must contain uppercase, lowercase, number, and special character"
  ) => ({
    validate: (value: unknown) =>
      typeof value === "string" &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value
      ),
    message,
  }),
};
