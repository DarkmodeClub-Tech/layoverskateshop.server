import * as T from "typeorm";
import { User, Product, Photo } from ".";

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
