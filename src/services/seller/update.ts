import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { TUpdateSellerRequest } from "../../interfaces/seller";
import { getSellerDataByIdService } from "./get";

export const updateSellerService = async (
  id: string,
  data: TUpdateSellerRequest
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  let seller = await getSellerDataByIdService(id);

  await sellerRepo.update(seller.id, data);

  seller = await getSellerDataByIdService(id);
  return instanceToPlain(seller) as Seller;
};
