import { z } from "zod";
import { registerAddressSchema } from "./address.schemas";

export const registerCustomerRequestSchema = z.object({
  username: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  cpf: z.string(),
  email: z.string().email("Invalid email format."),
  phone: z.string(),
  password: z.string(),
  address: registerAddressSchema,
});

export const loginCustomerRequestSchema = z.object({
  username: z.string().optional(),
  email: z.string().email("Invalid email format.").optional(),
  password: z.string(),
});

export const updateCustomerRequestSchema = z.object({
  username: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  cpf: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
  address: registerAddressSchema.partial(),
});
