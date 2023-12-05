import * as T from "typeorm";
import { User } from ".";

@T.Entity("addresses")
export class Address {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ length: 8 })
  cep: string;

  @T.Column({ length: 120 })
  street: string;

  @T.Column({ nullable: true })
  number: number;

  @T.Column({ length: 20, nullable: true })
  complement: string;

  @T.Column({ length: 120 })
  district: string;

  @T.Column({ length: 120 })
  city: string;

  @T.Column({ length: 120 })
  state: string;

  @T.OneToMany(() => User, (user) => user.address)
  users: User[];
}
