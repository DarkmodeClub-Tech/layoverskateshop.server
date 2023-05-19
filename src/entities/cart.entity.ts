import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
  JoinColumn,
} from "typeorm";
// import { Product } from "./product.entity";
import { Customer } from "./customer.entity";
import { CartProduct } from "./cartProduct.entity";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  // @ManyToMany(() => Product, (product) => product.carts, { eager: true })
  // @JoinTable()
  // products: Product[];

  @OneToOne(() => Customer, (customer) => customer.cart)
  customer: Customer;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart, {
    eager: true,
  })
  products: CartProduct[];
}
