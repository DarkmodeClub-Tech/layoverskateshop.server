import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Photo } from "./photos.entity";

@Entity("sellers")
export class Seller extends User {
  @Column({ default: true })
  adm: boolean;

  @OneToMany(() => Product, (product) => product.seller)
  products: Product[];

  @OneToMany(() => Photo, (photo) => photo.owner, {
    onDelete: "CASCADE",
    eager: true,
  })
  photos: Photo[];

  @OneToOne(() => Photo, (avatar) => avatar.profile, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn()
  avatar: Photo;
}
