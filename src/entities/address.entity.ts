import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 120 })
  street: string;

  @Column({ nullable: true })
  number: number;

  @Column({ length: 20, nullable: true })
  complement: string;

  @Column({ length: 120 })
  district: string;

  @Column({ length: 120 })
  city: string;

  @Column({ length: 120 })
  state: string;

  @OneToMany(() => User, (user) => user.address)
  users: User[];
}
