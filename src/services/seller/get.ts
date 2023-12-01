import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { AppError } from "../../errors/appError";

export const getSellerDataByIdService = async (
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

export const getGlobalSellerService = async () => {
  let globalSeller: Seller | Seller[] = await getAllSellersDataService();
  globalSeller = globalSeller[0];

  // const sellerRepo = AppDataSource.getRepository(Seller);
  // const seller = await sellerRepo.findOneBy({});

  return globalSeller;
};
