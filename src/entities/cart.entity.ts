import { Entity, PrimaryGeneratedColumn, OneToOne, ManyToMany } from "typeorm";
import { Product } from "./product.entity";
import { Customer } from "./customer.entity";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Product, (product) => product.carts, { eager: true })
  products: Product[] | [];

  @OneToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;
}
