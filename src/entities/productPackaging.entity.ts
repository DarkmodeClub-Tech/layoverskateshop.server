import * as t from "typeorm";
import { Product } from "./product.entity";

@t.Entity("product_packaging")
export class ProductPackaging {
  @t.PrimaryGeneratedColumn("uuid")
  readonly id: number;

  @t.Column({ length: 10 })
  packaging_type: string;

  @t.Column()
  box_length: number;

  @t.Column()
  box_height: number;

  @t.Column()
  box_width: number;

  @t.Column()
  box_weight: number;

  @t.OneToOne(() => Product, (product) => product.packaging)
  product?: Product;
}
