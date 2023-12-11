import { z } from "zod";
import { Cart } from "../entities";
import { registerCustomerRequestSchema } from "../schemas/";
import { TCartProduct } from "./";

export type TRegisterCustomerReq = z.infer<
  typeof registerCustomerRequestSchema
>;

export interface ICustomer extends TRegisterCustomerReq {
  products?: TCartProduct[];
  cart?: Cart;
}
