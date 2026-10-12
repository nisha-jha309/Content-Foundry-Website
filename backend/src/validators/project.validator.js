import { z } from "zod";

const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;

export const projectEnquirySchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be between 2 and 80 characters")
        .max(80, "Name must be between 2 and 80 characters"),

    company: z
        .string()
        .trim()
        .min(2, "Company name must be between 2 and 120 characters")
        .max(120, "Company name must be between 2 and 120 characters"),

    email: z
        .string()
        .trim()
        .email("Enter a valid email address"),

    phone: z
        .string()
        .trim()
        .transform((value) => value.replace(/[\s()-]/g, ""))
        .refine(
            (value) => phoneRegex.test(value),
            "Enter a valid Indian mobile number, e.g. 9876543210"
        ),

    service: z
        .string()
        .trim()
        .min(1, "Please select a service"),

    message: z
        .string()
        .trim()
        .max(1000, "Message cannot exceed 1,000 characters")
        .optional()
        .default(""),
});