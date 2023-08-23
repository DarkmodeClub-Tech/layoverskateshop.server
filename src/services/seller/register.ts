import { hash } from "bcrypt";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { instanceToPlain } from "class-transformer";

export const registerSellerService = async (data: Seller): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);

  const { password } = data;

  data.password = await hash(password, 10);
  const seller = sellerRepo.create(data);

  await sellerRepo.save(seller);
  return instanceToPlain(seller) as Seller;
};
