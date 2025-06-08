import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import {
  Order,
  Seller,
  Category,
  Photo,
  CartProduct,
  ProductPackaging,
} from ".";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  promotional_price?: number;

  @Column()
  max_installments: number;

  @Column({ default: true, nullable: true })
  available: boolean;

  @Column({ default: 1 })
  stock_amount: number;

  @Column({ default: "" })
  description: string;

  @Column("text", { array: true, default: [""] })
  available_sizes: string[];

  @Column("text", { array: true, default: [""] })
  available_colors: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.product)
  carts: CartProduct[];

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @ManyToOne(() => Seller, (seller) => seller.products)
  seller: Seller;

  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  category: Category;

  @OneToMany(() => Photo, (photo) => photo.product, { eager: true })
  photos: Photo[];

  @OneToOne(() => ProductPackaging, { eager: true, onDelete: "CASCADE" })
  @JoinColumn()
  packaging: ProductPackaging;
}
