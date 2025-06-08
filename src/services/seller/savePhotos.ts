import AppDataSource from "../../data-source";
import { Seller } from "../../entities";
import { AppError } from "../../errors/appError";
import { photoUploaderService } from "../photos";
import { getSellerDataByIdService } from "./get";

export const savePhotosService = async (
  sellerId: string,
  photos: Express.Multer.File[]
): Promise<Seller> => {
  const sellerRepo = AppDataSource.getRepository(Seller);
  const seller = await getSellerDataByIdService(sellerId);

  if (!seller) throw new AppError("Seller is not found.", 404);
  seller.photos = await photoUploaderService(photos, seller);

  await sellerRepo.save(seller);

  return await getSellerDataByIdService(sellerId);
};
