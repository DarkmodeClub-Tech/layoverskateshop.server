import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { photoUploaderService } from "../photos";
import { getSellerDataService } from "./get";

export const savePhotosService = async (
  sellerId: string,
  photos: Express.Multer.File[]
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const seller = await getSellerDataService(sellerId);

  seller.photos = await photoUploaderService(photos);

  await sellerRepo.save(seller);

  return await getSellerDataService(sellerId);
};
