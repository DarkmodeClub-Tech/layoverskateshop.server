import { z } from "zod";

export const registerProductRequestSchema = z.object({
  title: z.string(),
  price: z.string(),
  promotionalPrice: z.string().optional(),
  description: z.string(),
  max_installments: z.string(),
  stock_amount: z.string(),
  category: z.string(),
  available_sizes: z.array(z.string()),
  available_colors: z.array(z.string()),
  packaging_type: z.enum(["box", "bag"]),
  box_length: z.string(),
  box_height: z.string(),
  box_width: z.string(),
  box_weight: z.string(),
});
