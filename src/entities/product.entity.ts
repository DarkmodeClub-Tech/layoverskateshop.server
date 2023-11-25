import * as t from "typeorm";
import { Order } from "./order.entity";
import { Seller } from "./seller.entity";
import { Category } from "./category.entity";
import { Photo } from "./photos.entity";
import { CartProduct } from "./cartProduct.entity";
import { ProductPackaging } from "./productPackaging.entity";

@t.Entity("products")
export class Product {
  @t.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @t.Column({ length: 100 })
  title: string;

  @t.Column()
  price: number;

  @t.Column()
  max_installments: number;

  @t.Column({ default: true, nullable: true })
  available: boolean;

  @t.Column({ default: 1 })
  stock_amount: number;

  @t.Column({ default: "" })
  description: string;

  @t.Column("text", { array: true, default: [""] })
  available_sizes: string[];

  @t.Column("text", { array: true, default: [""] })
  available_colors: string[];

  @t.CreateDateColumn()
  created_at: Date;

  @t.UpdateDateColumn()
  updated_at: Date;

  @t.OneToMany(() => CartProduct, (cartProduct) => cartProduct.product)
  carts: CartProduct[];

  @t.ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @t.ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  @t.ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  category: Category;

  @t.OneToMany(() => Photo, (photo) => photo.product, { eager: true })
  photos: Photo[];

  @t.OneToOne(() => ProductPackaging, { eager: true, onDelete: "CASCADE" })
  @t.JoinColumn()
  packaging: ProductPackaging;
}
