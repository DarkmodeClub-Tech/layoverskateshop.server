import { z } from "zod";
import { registerAddressSchema, updateAddressSchema } from "./address.schemas";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email Format.")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password should have at least 8 caracters.")
    .nonempty("Password is required."),
});

export const registerSellerSchema = z.object({
  username: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  cpf: z.string(),
  email: z
    .string()
    .email("Invalid email Format.")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password should have at least 8 caracters.")
    .nonempty("Password is required."),
  phone: z.string(),
  address: registerAddressSchema,
});

export const savePhotoSchema = z.object({
  id: z.string(),
  url: z.string(),
  public_id: z.string(),
});

export const updateSellerSchema = z.object({
  username: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  cpf: z.string().optional(),
  email: z.string().email("Invalid email Format.").optional(),
  password: z
    .string()
    .min(8, "Password should have at least 8 caracters.")
    .optional(),
  phone: z.string().optional(),
  address: updateAddressSchema,
  photos: z.array(savePhotoSchema).optional(),
});

// {
// 	"username" : "Layover",
// 	"first_name": "lvr",
// 	"last_name": "sk8shop",
// 	"cpf": "01201201201",
// 	"email": "lvr@mail.com",
// 	"phone": "0000000000",
// 	"password": "1234",
// 	"address": {
// 		"cep": "00000000",
// 		"street": "sk8 street",
// 		"number": 358,
// 		"complement": "",
// 		"district": "zepa",
// 		"state": "PB",
// 		"city": "campina grande"
// 	}
// }
