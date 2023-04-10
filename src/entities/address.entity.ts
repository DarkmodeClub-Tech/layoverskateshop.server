import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./user.entity";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 120 })
  street: string;

  @Column({ length: 5 })
  number: number;

  @Column({ length: 20, nullable: true })
  complement: string;

  @Column({ length: 120 })
  district: string;

  @OneToMany(() => User, (user) => user.address)
  users: User[];
}
