import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const getCategoriesService = async (
  offset: number = 0,
  limit: number = 100
): Promise<Category[]> => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const categories = await categoryRepo.find({ skip: offset, take: limit });
  return categories;
};
