import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from ".";

@Entity("product_packaging")
export class ProductPackaging {
  @PrimaryGeneratedColumn("uuid")
  readonly id: number;

  @Column({ length: 10 })
  packaging_type: string;

  @Column()
  box_length: number;

  @Column()
  box_height: number;

  @Column()
  box_width: number;

  @Column()
  box_weight: number;

  @OneToOne(() => Product, (product) => product.packaging)
  product?: Product;
}
