import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product, Seller, Category } from ".";

@Entity("photos")
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 300 })
  url: string;

  @Column()
  public_id: string;

  @ManyToOne(() => Product, (product) => product.photos)
  product: Product | null;

  // // @T.ManyToOne(() => Category)
  // // category?: Category;

  @ManyToOne(() => Seller, (seller) => seller.photos)
  owner: Seller | null;
}
