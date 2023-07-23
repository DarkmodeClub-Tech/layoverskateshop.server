import { z } from "zod";
import { registerAddressSchema } from "../schemas/address.schemas";

export type TRegisterAddressReq = z.infer<typeof registerAddressSchema>;
