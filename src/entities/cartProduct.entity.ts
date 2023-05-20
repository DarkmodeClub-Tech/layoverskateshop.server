import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";

@Entity("cart_products")
export class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  cart_amount: number;

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;
}
