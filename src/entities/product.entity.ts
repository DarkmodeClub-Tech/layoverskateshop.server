import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from "typeorm";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 100 })
  title: string;

  @Column({ length: 8 })
  price: number;

  @Column({ length: 3 })
  max_installments: number;

  @Column({ default: true, nullable: true })
  available: boolean;

  @Column({ length: 5, default: 1 })
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Cart)
  carts: Cart;

  @ManyToMany(() => Order)
  orders: Order[];
}
