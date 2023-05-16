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
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";
import { Seller } from "./seller.entity";
import { Category } from "./category.entity";
import { Photo } from "./photos.entity";

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
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Cart, (cart) => cart.products)
  carts: Cart[];
  // @OneToMany(() => CartProducts, (cartProducts) => cartProducts.products)
  // cart_products: CartProducts[];

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];

  @ManyToOne(() => Seller)
  seller: Seller[];

  @ManyToOne(() => Category, (category) => category.products, {
    eager: true,
    cascade: true,
  })
  category: Category;

  @OneToMany(() => Photo, (photo) => photo.product, { eager: true })
  photos: Photo[];
}
