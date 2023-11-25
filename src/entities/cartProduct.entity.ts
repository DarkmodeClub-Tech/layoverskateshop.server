import * as t from "typeorm";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";

@t.Entity("cart_products")
export class CartProduct {
  @t.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @t.Column()
  cart_amount: number;

  @t.Column("text", { array: true, default: [""] })
  requested_colors: string[];

  @t.Column("text", { array: true, default: [""] })
  requested_sizes: string[];

  @t.ManyToOne(() => Cart)
  cart: Cart;

  @t.ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;
}
