import { Entity, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { User } from "./user.entity";
import { Address } from "./address.entity";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";

@Entity("customers")
export class Customer extends User {
  @ManyToOne(() => Address, (address) => address.customers, {
    eager: true,
    cascade: true,
  })
  address: Address;

  @OneToOne(() => Cart, (cart) => cart.customer)
  cart: Cart;

  @OneToMany(() => Order, (order) => order.customer, { cascade: true })
  orders: Order[] | [];
}
