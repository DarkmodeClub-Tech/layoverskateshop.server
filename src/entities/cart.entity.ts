import * as T from "typeorm";
import { Customer, CartProduct } from ".";

@T.Entity("carts")
export class Cart {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.OneToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;

  @T.OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart, {
    eager: true,
  })
  products: CartProduct[];
}
