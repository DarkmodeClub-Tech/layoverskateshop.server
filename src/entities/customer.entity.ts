import * as T from "typeorm";
import { User, Cart, Order } from ".";

@T.Entity("customers")
export class Customer extends User {
  @T.OneToOne(() => Cart, (cart) => cart.customer, {
    onDelete: "CASCADE",
    eager: true,
  })
  @T.JoinColumn()
  cart: Cart;

  @T.OneToMany(() => Order, (order) => order.customer, { cascade: true })
  orders: Order[] | [];
}
