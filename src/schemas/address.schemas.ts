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

export const updateAddressSchema = z.object({
  cep: z.string().optional(),
  street: z.string().optional(),
  number: z.number().optional(),
  complement: z.string().optional(),
  district: z.string().optional(),
  state: z.string().optional(),
  city: z.string().optional(),
});
