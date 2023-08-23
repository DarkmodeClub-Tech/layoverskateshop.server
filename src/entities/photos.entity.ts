import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import { Product } from "./product.entity";
import { Seller } from "./seller.entity";

@Entity("photos")
export class Photo {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 300 })
  url: string;

  @Column()
  public_id: string;

  @ManyToOne(() => Product, (product) => product.photos)
  product?: Product;

  @ManyToOne(() => Seller, (seller) => seller.photos)
  owner: Seller;

  @OneToOne(() => Seller, (profile) => profile.avatar)
  profile: Seller;
}
