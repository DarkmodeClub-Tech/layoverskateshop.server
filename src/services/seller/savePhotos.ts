import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { photoUploaderService } from "../photos";
import { getSellerDataByIdService } from "./get";

export const savePhotosService = async (
  sellerId: string,
  photos: Express.Multer.File[]
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const seller = await getSellerDataByIdService(sellerId);

  seller.cover_photos = await photoUploaderService(photos);

  await sellerRepo.save(seller);

  return await getSellerDataByIdService(sellerId);
};
