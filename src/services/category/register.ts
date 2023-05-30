import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const registerCategoryService = async (
  title: string
): Promise<Category> => {
  const categoryRepo = AppDataSource.getRepository(Category);

  let category = await categoryRepo.findOneBy({ title });
  if (category) return category;

  category = categoryRepo.create({ title });
  await categoryRepo.save(category);
  return category;
};
