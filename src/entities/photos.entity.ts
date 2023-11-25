import * as t from "typeorm";
import { Product } from "./product.entity";
import { Seller } from "./seller.entity";

@t.Entity("photos")
export class Photo {
  @t.PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @t.Column({ length: 300 })
  url: string;

  @t.Column()
  public_id: string;

  @t.ManyToOne(() => Product, (product) => product.photos)
  product?: Product;

  @t.ManyToOne(() => Seller, (seller) => seller.cover_photos)
  owner: Seller;

  @t.OneToOne(() => Seller, (profile) => profile.avatar)
  profile: Seller;
}
