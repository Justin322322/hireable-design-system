/**
 * Security Validator
 *
 * Input validation and sanitization utilities.
 */

import { NextRequest } from "next/server";
import type { ValidationResult } from "./types";

const DEFAULT_MAX_BODY_SIZE = 1024 * 1024; // 1MB

export class SecurityValidator {
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.push("Email is required");
    } else if (typeof email !== "string") {
      errors.push("Email must be a string");
    } else if (email.length > 254) {
      errors.push("Email is too long");
    } else if (!emailRegex.test(email)) {
      errors.push("Invalid email format");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? email.toLowerCase().trim() : null,
    };
  }

  static validateFirstName(firstName: string): ValidationResult {
    const errors: string[] = [];
    const nameRegex = /^[a-zA-Z\s\-'.]{2,50}$/;

    if (!firstName) {
      errors.push("First name is required");
    } else if (typeof firstName !== "string") {
      errors.push("First name must be a string");
    } else if (firstName.length < 2) {
      errors.push("First name must be at least 2 characters");
    } else if (firstName.length > 50) {
      errors.push("First name is too long");
    } else if (!nameRegex.test(firstName)) {
      errors.push("First name contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? firstName.trim() : null,
    };
  }

  static validateLastName(lastName: string): ValidationResult {
    const errors: string[] = [];
    const nameRegex = /^[a-zA-Z\s\-'.]{2,50}$/;

    if (!lastName) {
      errors.push("Last name is required");
    } else if (typeof lastName !== "string") {
      errors.push("Last name must be a string");
    } else if (lastName.length < 2) {
      errors.push("Last name must be at least 2 characters");
    } else if (lastName.length > 50) {
      errors.push("Last name is too long");
    } else if (!nameRegex.test(lastName)) {
      errors.push("Last name contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? lastName.trim() : null,
    };
  }

  static validateCompany(company: string): ValidationResult {
    const errors: string[] = [];
    const companyRegex = /^[a-zA-Z0-9\s\-'.&]{2,100}$/;

    if (!company) {
      errors.push("Company is required");
    } else if (typeof company !== "string") {
      errors.push("Company must be a string");
    } else if (company.length < 2) {
      errors.push("Company must be at least 2 characters");
    } else if (company.length > 100) {
      errors.push("Company name is too long");
    } else if (!companyRegex.test(company)) {
      errors.push("Company contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? company.trim() : null,
    };
  }

  static validateCompanySize(companySize: string): ValidationResult {
    const errors: string[] = [];
    const companySizeRegex = /^[a-zA-Z0-9\s\-+(),']{2,50}$/;

    if (!companySize) {
      errors.push("Company size is required");
    } else if (typeof companySize !== "string") {
      errors.push("Company size must be a string");
    } else if (!companySizeRegex.test(companySize)) {
      errors.push("Company size contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? companySize.trim() : null,
    };
  }

  static validateIndustry(industry: string): ValidationResult {
    const errors: string[] = [];
    const industryRegex = /^[a-zA-Z0-9\s\-+(),'./&]{2,50}$/;

    if (!industry) {
      errors.push("Industry is required");
    } else if (typeof industry !== "string") {
      errors.push("Industry must be a string");
    } else if (!industryRegex.test(industry)) {
      errors.push("Industry contains invalid characters");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? industry.trim() : null,
    };
  }

  static validateRole(role: string): ValidationResult {
    const errors: string[] = [];

    if (role && typeof role !== "string") {
      errors.push("Role must be a string");
    } else if (role && role.trim().length > 100) {
      errors.push("Role is too long (max 100 characters)");
    }

    let sanitizedRole = "not specified";
    if (role && typeof role === "string") {
      sanitizedRole = role.trim().replace(/[<>"]/g, "");
      if (sanitizedRole.length === 0) {
        sanitizedRole = "not specified";
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: sanitizedRole,
    };
  }

  static validateAgree(agree: boolean): ValidationResult {
    const errors: string[] = [];

    if (typeof agree !== "boolean") {
      errors.push("Agreement must be a boolean");
    } else if (agree !== true) {
      errors.push("Agreement is required");
    }

    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: errors.length === 0 ? String(agree) : null,
    };
  }

  static validateRequestSize(
    request: NextRequest,
    maxSize: number = DEFAULT_MAX_BODY_SIZE
  ): boolean {
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > maxSize) {
      return false;
    }
    return true;
  }
}
