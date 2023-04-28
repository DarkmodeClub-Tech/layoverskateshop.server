import AppDataSource from "../../data-source";
import { Product } from "../../entities";
import { photoDestroyerService } from "../photos/destroy";

export const deleteProductService = async (id: string): Promise<void> => {
  const productRepo = AppDataSource.getRepository(Product);
  const product = (await productRepo.findOneBy({ id: id })) as Product;
  const photos = product.photos;

  let i = 0;
  while (photos.length > i) {
    await photoDestroyerService(photos[i].id);
    i++;
  }

  await productRepo.delete(id);
  return;
};
