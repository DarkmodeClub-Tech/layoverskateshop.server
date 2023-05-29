import { Column, Entity, OneToMany } from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";

@Entity("sellers")
export class Seller extends User {
  @Column({ default: true })
  adm: boolean;

  @OneToMany(() => Product, (product) => product.seller)
  products: Product[] | [];
}
