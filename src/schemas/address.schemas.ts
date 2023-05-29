import { z } from "zod";

export const registerAddressSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
  district: z.string(),
  state: z.string(),
  city: z.string(),
});
