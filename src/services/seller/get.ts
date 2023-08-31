import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { AppError } from "../../errors/appError";

export const getSellerDataService = async (
  sellerId: string
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const sellerData = await sellerRepo.findOneBy({ id: sellerId });

  if (!sellerData) throw new AppError("Not Found", 404);
  return instanceToPlain(sellerData) as Seller;
};

export const getAllSellersDataService = async () => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const sellers = (await sellerRepo.find()).map((s) => instanceToPlain(s));

  return sellers as Seller[];
};
