import AppDataSource from "../../data-source";
import { Product } from "../../entities";

export const updateProductService = async (
  id: string,
  data: Product
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product);

  await productRepo.update(id, data);

  const updatedProduct = await productRepo.findOneBy({ id: id });

  return updatedProduct as Product;
};
