import { z } from "zod";
import * as s from "../schemas/seller.schemas";

export type TRegisterSellerRequest = z.infer<typeof s.registerSellerSchema>;

export type TUpdateSellerRequest = z.infer<typeof s.updateSellerSchema>;

export type TLoginSeller = z.infer<typeof s.loginSchema>;
