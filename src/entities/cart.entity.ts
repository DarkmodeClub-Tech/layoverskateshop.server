import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @OneToOne(() => User, (user) => user.cart)
  user: User;

  @ManyToMany(() => Product, (product) => product.carts, { eager: true })
  products: Product[];
}
