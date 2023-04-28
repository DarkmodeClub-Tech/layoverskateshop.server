import AppDataSource from "../../data-source";
import { Product } from "../../entities";

export const deactivateProductAddService = async (
  id: string
): Promise<void> => {
  const productRepo = AppDataSource.getRepository(Product);
  const product = await productRepo.findOneBy({ id: id });

  await productRepo.update(id, { available: false });

  return;
};
