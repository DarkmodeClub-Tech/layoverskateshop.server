import * as T from "typeorm";
import { Product } from ".";

@T.Entity("product_packaging")
export class ProductPackaging {
  @T.PrimaryGeneratedColumn("uuid")
  readonly id: number;

  @T.Column({ length: 10 })
  packaging_type: string;

  @T.Column()
  box_length: number;

  @T.Column()
  box_height: number;

  @T.Column()
  box_width: number;

  @T.Column()
  box_weight: number;

  @T.OneToOne(() => Product, (product) => product.packaging)
  product?: Product;
}
