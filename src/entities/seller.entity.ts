import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { User, Product, Photo } from ".";

@Entity("sellers")
export class Seller extends User {
  @Column({ default: true })
  adm: boolean;

  @OneToMany(() => Product, (product) => product.seller, {
    onDelete: "CASCADE",
  })
  products: Product[];

  @OneToMany(() => Photo, (photo) => photo.owner, {
    onDelete: "CASCADE",
    eager: true,
  })
  photos: Photo[];

  @OneToOne(() => Photo, (avatar) => avatar.owner, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn()
  avatar: Photo;
}
