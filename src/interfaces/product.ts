import { z } from "zod";
import { registerProductRequestSchema } from "../schemas/products.schemas";
import { TPhoto } from "./photo";

export type TProduct = { product_id: string; amount: number };

export type TRegisterProductRequest = z.infer<
  typeof registerProductRequestSchema
>;
