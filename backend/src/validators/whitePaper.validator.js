import { z } from "zod";

const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

export const whitePaperSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(80, "Name cannot exceed 80 characters"),

    company: z
      .string()
      .trim()
      .min(2, "Company name must be at least 2 characters")
      .max(120, "Company name cannot exceed 120 characters"),

    email: z
      .string()
      .trim()
      .email("Enter a valid email address")
      .max(254, "Email cannot exceed 254 characters")
      .transform((value) => value.toLowerCase()),

    phone: z
      .string()
      .trim()
      .transform((value) => value.replace(/[\s()-]/g, ""))
      .refine(
        (value) => value === "" || phoneRegex.test(value),
        "Enter a valid Indian mobile number"
      )
      .default(""),

    emailPermission: z.boolean().default(false),
  })
  .strict();