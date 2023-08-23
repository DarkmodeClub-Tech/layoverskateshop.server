import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Order } from "./order.entity";
import { Seller } from "./seller.entity";
import { Category } from "./category.entity";
import { Photo } from "./photos.entity";
import { CartProduct } from "./cartProduct.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  title: string;

  @Column()
  price: number;

  @Column()
  max_installments: number;

  @Column({ default: true, nullable: true })
  available: boolean;

  @Column({ default: 1 })
  stock_amount: number;

  @Column({ nullable: true })
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
}
