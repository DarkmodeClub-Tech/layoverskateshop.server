import { object, z } from "zod";

export const registerCategorySchema = z.object({ title: z.string() });
