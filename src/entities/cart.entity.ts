import { Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer, CartProduct } from ".";

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
