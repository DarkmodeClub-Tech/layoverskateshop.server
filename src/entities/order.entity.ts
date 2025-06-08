import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product, Customer } from ".";
// import { OrderProducts } from "./orderProducts.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: true, nullable: true })
  active: boolean;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];
  // @OneToMany(() => OrderProducts, (cartProducts) => cartProducts.orders)
  // products: OrderProducts[];

  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
