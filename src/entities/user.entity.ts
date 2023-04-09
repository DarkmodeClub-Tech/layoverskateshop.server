import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";

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

  @Column({ length: 150 })
  password: string;

  @Column({ length: 11 })
  cpf: string;

  @Column({ length: 14 })
  phone: string;
}
