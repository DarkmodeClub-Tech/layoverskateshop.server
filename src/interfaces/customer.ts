import { Customer } from "../entities";
import { TProduct } from "./product";

export interface ICustomer extends Customer {
  products?: TProduct[];
}
