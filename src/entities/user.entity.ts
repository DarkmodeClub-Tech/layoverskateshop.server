import * as T from "typeorm";
import { Exclude } from "class-transformer";
import { Address } from ".";

@T.Entity("users")
export class User {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ length: 80 })
  username: string;

  @T.Column({ length: 80 })
  first_name: string;

  @T.Column({ length: 80 })
  last_name: string;

  @T.Column({ length: 120 })
  email: string;

  @Exclude()
  @T.Column({ length: 150 })
  password: string;

  @T.Column({ length: 11 })
  cpf: string;

  @T.Column({ length: 14 })
  phone: string;

  @T.Column({ default: true })
  is_active: boolean;

  @T.Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_login: Date;

  @T.Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  last_logout: Date;

  @T.CreateDateColumn()
  created_at: Date;

  @T.UpdateDateColumn()
  updated_at: Date;

  @T.ManyToOne(() => Address, (address) => address.users, {
    eager: true,
    cascade: true,
  })
  address: Address;
}
