import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Photo, Product } from ".";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ nullable: true })
  title: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
