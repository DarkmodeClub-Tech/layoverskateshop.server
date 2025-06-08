import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Address } from ".";

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

  @Column({ default: true })
  is_active: boolean;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_login: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_logout: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Address, (address) => address.users, {
    eager: true,
    cascade: true,
  })
  address: Address;
}
