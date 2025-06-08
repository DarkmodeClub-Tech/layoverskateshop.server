import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User, Cart, Order } from ".";

@Entity("customers")
export class Customer extends User {
  @OneToOne(() => Cart, (cart) => cart.customer, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn()
  cart: Cart;

  @OneToMany(() => Order, (order) => order.customer, { cascade: true })
  orders: Order[] | [];
}
