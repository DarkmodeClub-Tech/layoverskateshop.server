import * as T from "typeorm";
import { Photo, Product } from ".";

@T.Entity("categories")
export class Category {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @T.Column({ nullable: true })
  title: string;

  @T.OneToMany(() => Product, (product) => product.category)
  products: Product[];

  @T.CreateDateColumn()
  created_at: Date;

  @T.UpdateDateColumn()
  updated_at: Date;
}
