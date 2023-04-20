import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  JoinTable,
} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: true, nullable: true })
  active: boolean;

  @ManyToMany(() => Product, (product) => product.orders)
  products: Product[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
