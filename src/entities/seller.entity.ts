import * as t from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Photo } from "./photos.entity";

@t.Entity("sellers")
export class Seller extends User {
  @t.Column({ default: true })
  adm: boolean;

  @t.OneToMany(() => Product, (product) => product.seller)
  products: Product[];

  @t.OneToMany(() => Photo, (photo) => photo.owner, {
    onDelete: "CASCADE",
    eager: true,
  })
  cover_photos: Photo[];

  @t.OneToOne(() => Photo, (avatar) => avatar.profile, {
    onDelete: "CASCADE",
    eager: true,
  })
  @t.JoinColumn()
  avatar: Photo;
}
