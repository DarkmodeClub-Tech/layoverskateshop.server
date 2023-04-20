import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Address } from "./address.entity";
import { Cart } from "./cart.entity";
import { Order } from "./order.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 80 })
  username: string;

  @Column({ length: 80 })
  first_name: string;

  @Column({ length: 80 })
  last_name: string;

  @Column({ length: 120 })
  email: string;

  @Exclude()
  @Column({ length: 150 })
  password: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 14 })
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Address, (address) => address.users, { eager: true })
  address: Address;

  @OneToOne(() => Cart)
  cart: Cart;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
