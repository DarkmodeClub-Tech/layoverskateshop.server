import { z } from "zod";
import { Cart, Customer } from "../entities";
import { registerCustomerRequestSchema } from "../schemas/customer.schemas";
import { TProduct } from "./product";
import { TRegisterCategoryRequest } from "./category";

export type TRegisterCustomerReq = z.infer<
  typeof registerCustomerRequestSchema
>;

export interface ICustomer extends TRegisterCustomerReq {
  products?: TProduct[];
  cart?: Cart;
}
