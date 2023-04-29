import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const updateCategoryService = async (
  id: string,
  data: Category
): Promise<Category> => {
  const categoryRepo = AppDataSource.getRepository(Category);

  await categoryRepo.update(id, data);

  const updatedProduct = await categoryRepo.findOneBy({ id: id });

  return updatedProduct as Category;
};
