import { Product, Seller } from "../entities";

export type TPhoto = {
  id: string;
  url: string;
  public_id: string;
};

export type TPhotosRegisterData = {
  public_id: string;
  url: string;
  owner?: Seller;
  product?: Product;
  profile?: Seller;
};
