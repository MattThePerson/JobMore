import { z } from "zod";

// ===============================================
// Error
// ===============================================

export interface ServerError {
  error: string;
}

// ===============================================
// Company
// ===============================================

export const Company = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export type Company = z.infer<typeof Company>;

// ===============================================
// Application
// ===============================================

export const ApplicationStatus = z.enum([
  "interested",
  "applied",
  "interview",
  "pending",
  "offered",
  "accepted",
  "declined",
]);

export type ApplicationStatus = z.infer<typeof ApplicationStatus>;

export const NewApplication = z.object({
  status: ApplicationStatus,
  company: Company.shape.name,
  position: z.string(),
  dateAdded: z.iso.date(),
  dateApplied: z.iso.date().optional(),
  description: z.string().optional(),
});

export type NewApplication = z.infer<typeof NewApplication>;

export const Application = z.object({
  ...NewApplication.shape,
  id: z.string(),
});

export type Application = z.infer<typeof Application>;

/* EOF */
