import { z } from "zod";

// ===============================================
// Error
// ===============================================

export const ServerError = z.object({
  error: z.string(),
});

export type ServerError = z.infer<typeof ServerError>;

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

// ===============================================
// Utility Types
// ===============================================

// from FullStackOpen course
export type UnionOmit<T, K extends string | number | symbol> = T extends unknown
  ? Omit<T, K>
  : never;

// Some potentially useful Custom Utility Types (à la Claude):
export type NonEmptyArray<T> = [T, ...T[]];
export type OmitStrict<T, K extends keyof T> = Omit<T, K> & { [P in K]?: never }; // Omit but extra fields not allowed

/*
type Prettify<T> = { [K in keyof T]: T[K] } & {};          // flattens ugly intersections in hovers
type Nullable<T> = T | null;
type ValueOf<T> = T[keyof T];
type Mutable<T> = { -readonly [K in keyof T]: T[K] };
type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> };
type XOR<A, B> = (A & { [K in keyof B]?: never }) | (B & { [K in keyof A]?: never });
type RequireAtLeastOne<T> =
  { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Omit<T, K>> }[keyof T];
*/

/* EOF */
