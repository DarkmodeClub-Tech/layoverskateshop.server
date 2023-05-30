import { z } from "zod";
import { registerCategorySchema } from "../schemas/category.schemas";

export type TRegisterCategoryRequest = z.infer<typeof registerCategorySchema>;
