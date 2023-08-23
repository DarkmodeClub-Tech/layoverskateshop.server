import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { TUpdateSellerRequest } from "../../interfaces/seller";
import { getSellerDataService } from "./get";

export const updateSellerService = async (
  id: string,
  data: TUpdateSellerRequest
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  let seller = await getSellerDataService(id);

  await sellerRepo.update(seller.id, data);

  seller = await getSellerDataService(id);
  return instanceToPlain(seller) as Seller;
};
