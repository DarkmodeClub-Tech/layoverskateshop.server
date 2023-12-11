import * as T from "typeorm";
import {
  Order,
  Seller,
  Category,
  Photo,
  CartProduct,
  ProductPackaging,
} from ".";

@T.Entity("products")
export class Product {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ length: 100 })
  title: string;

  @T.Column()
  price: number;

  @T.Column({ nullable: true })
  promotionalPrice?: number;

  @T.Column()
  max_installments: number;

  @T.Column({ default: true, nullable: true })
  available: boolean;

  @T.Column({ default: 1 })
  stock_amount: number;

  @T.Column({ default: "" })
  description: string;

  @T.Column("text", { array: true, default: [""] })
  available_sizes: string[];

  @T.Column("text", { array: true, default: [""] })
  available_colors: string[];

  @T.CreateDateColumn()
  created_at: Date;

  @T.UpdateDateColumn()
  updated_at: Date;

  @T.OneToMany(() => CartProduct, (cartProduct) => cartProduct.product)
  carts: CartProduct[];

  @T.ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @T.ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  @T.ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  category: Category;

  @T.OneToMany(() => Photo, (photo) => photo.product, { eager: true })
  photos: Photo[];

  @T.OneToOne(() => ProductPackaging, { eager: true, onDelete: "CASCADE" })
  @T.JoinColumn()
  packaging: ProductPackaging;
}
