import { z } from "zod";

export const registerProductRequestSchema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  max_installments: z.string(),
  stock_amount: z.string(),
  category: z.string(),
});
