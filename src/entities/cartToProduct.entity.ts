import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";

@Entity("cart_to_products")
export class CartToProducts {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  amount: number;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;
}
