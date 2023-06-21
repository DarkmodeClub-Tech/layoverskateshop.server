import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";

@Entity("cart_products")
export class CartProduct {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  cart_amount: number;

  @Column("text", { array: true, default: [""] })
  requested_colors: string[];

  @Column("text", { array: true, default: [""] })
  requested_sizes: string[];

  @ManyToOne(() => Cart)
  cart: Cart;

  @ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;
}
