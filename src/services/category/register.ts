import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const registerCategoryService = async (
  data: Category
): Promise<Category> => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const category = categoryRepo.create(data);
  await categoryRepo.save(category);

  return category;
};
