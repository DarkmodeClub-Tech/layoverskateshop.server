import { z } from "zod";
import { Customer } from "../entities";
import { registerCustomerRequestSchema } from "../schemas/customer.schemas";
import { TProduct } from "./product";

export interface ICustomer extends Customer {
  products?: TProduct[];
}

export type TCustomer = z.infer<typeof registerCustomerRequestSchema>;
