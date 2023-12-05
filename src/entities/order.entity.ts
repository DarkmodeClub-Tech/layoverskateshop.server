import * as T from "typeorm";
import { Product, Customer } from ".";
// import { OrderProducts } from "./orderProducts.entity";

@T.Entity("orders")
export class Order {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ default: true, nullable: true })
  active: boolean;

  @T.ManyToMany(() => Product, (product) => product.orders)
  products: Product[];
  // @OneToMany(() => OrderProducts, (cartProducts) => cartProducts.orders)
  // products: OrderProducts[];

  @T.ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;

  @T.CreateDateColumn()
  created_at: Date;

  @T.UpdateDateColumn()
  updated_at: Date;
}
