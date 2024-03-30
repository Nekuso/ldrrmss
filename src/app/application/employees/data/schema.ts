import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export const requestSchema = z.object({
  id: z.number().nullable(),
  calamity_type: z.string().nullable(),
  status: z.string().nullable(),
  first_name: z.string().nullable(),
  last_name: z.string().nullable(),
  address: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;
export type Request = z.infer<typeof requestSchema>;
