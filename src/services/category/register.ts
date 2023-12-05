import AppDataSource from "../../data-source";
import { Category, Photo } from "../../entities";

export const registerCategoryService = async (
  title: string,
  photos?: Photo[]
): Promise<Category> => {
  const categoryRepo = AppDataSource.getRepository(Category);

  let category = await categoryRepo.findOneBy({ title });
  if (category) {
    await categoryRepo.update(category.id, { photos: photos });
    return category;
  }

  category = categoryRepo.create({ title, photos });
  await categoryRepo.save(category);
  return category;
};
