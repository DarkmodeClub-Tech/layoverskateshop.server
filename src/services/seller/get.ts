import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { AppError } from "../../errors/appError";

export const getSellerDataService = async (
  sellerId: string
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const sellerData = await sellerRepo.findOneBy({ id: sellerId });

  if (!sellerData) throw new AppError("Not Found");
  return instanceToPlain(sellerData) as Seller;
};
