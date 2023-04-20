import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";

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

  @ManyToMany(() => Order, (order) => order.products)
  orders: Order[];
}
