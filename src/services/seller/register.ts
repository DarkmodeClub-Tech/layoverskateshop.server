import AppDataSource from "../../data-source";
import { Seller } from "../../entities";

export const registerSellerService = async (data: Seller): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const seller = sellerRepo.create(data);

  await sellerRepo.save(seller);
  return seller;
};
