import * as T from "typeorm";
import { User } from "./user.entity";
import { Product } from "./product.entity";
import { Photo } from "./photos.entity";

@T.Entity("sellers")
export class Seller extends User {
  @T.Column({ default: true })
  adm: boolean;

  @T.OneToMany(() => Product, (product) => product.seller, {
    onDelete: "CASCADE",
  })
  products: Product[];

  @T.OneToMany(() => Photo, (photo) => photo.owner, {
    onDelete: "CASCADE",
    eager: true,
  })
  cover_photos: Photo[];

  @T.OneToOne(() => Photo, (avatar) => avatar.profile, {
    onDelete: "CASCADE",
    eager: true,
  })
  @T.JoinColumn()
  avatar: Photo;
}
