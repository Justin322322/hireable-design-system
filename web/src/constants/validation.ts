/**
 * Validation Constants
 *
 * Form validation rules and limits.
 */

export const VALIDATION = {
  // Password rules
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,

  // Name rules
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,

  // Other field limits
  BIO_MAX_LENGTH: 500,
  EMAIL_MAX_LENGTH: 254,
  COMPANY_NAME_MAX_LENGTH: 100,
} as const;
