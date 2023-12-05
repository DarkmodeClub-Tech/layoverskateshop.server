import * as T from "typeorm";
import { Cart, Product } from ".";

@T.Entity("cart_products")
export class CartProduct {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column()
  cart_amount: number;

  @T.Column("text", { array: true, default: [""] })
  requested_colors: string[];

  @T.Column("text", { array: true, default: [""] })
  requested_sizes: string[];

  @T.ManyToOne(() => Cart)
  cart: Cart;

  @T.ManyToOne(() => Product, {
    eager: true,
  })
  product: Product;
}
