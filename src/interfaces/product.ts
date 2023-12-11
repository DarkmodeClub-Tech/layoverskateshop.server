import { z } from "zod";
import { registerProductRequestSchema } from "../schemas/";

export type TCartProduct = {
  product_id: string;
  amount: number;
  requested_colors: string[];
  requested_sizes: string[];
};

export type TRegisterProductRequest = z.infer<
  typeof registerProductRequestSchema
>;
