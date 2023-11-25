import * as t from "typeorm";
import { Product } from "./product.entity";
import { Customer } from "./customer.entity";
// import { OrderProducts } from "./orderProducts.entity";

@t.Entity("orders")
export class Order {
  @t.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @t.Column({ default: true, nullable: true })
  active: boolean;

  @t.ManyToMany(() => Product, (product) => product.orders)
  products: Product[];
  // @OneToMany(() => OrderProducts, (cartProducts) => cartProducts.orders)
  // products: OrderProducts[];

  @t.ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @t.CreateDateColumn()
  created_at: Date;

  @t.UpdateDateColumn()
  updated_at: Date;
}
