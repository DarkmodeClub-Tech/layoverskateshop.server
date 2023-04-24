import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { Product } from "./product.entity";
import { Customer } from "./customer.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: true, nullable: true })
  active: boolean;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
