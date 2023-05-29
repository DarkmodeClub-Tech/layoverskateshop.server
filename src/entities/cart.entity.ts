import { Entity, PrimaryGeneratedColumn, OneToOne, OneToMany } from "typeorm";
import { Customer } from "./customer.entity";
import { CartProduct } from "./cartProduct.entity";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart, {
    eager: true,
  })
  products: CartProduct[];
}
