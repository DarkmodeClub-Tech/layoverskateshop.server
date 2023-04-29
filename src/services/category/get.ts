import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const getCategoriesService = async (
  offset: number,
  limit: number
): Promise<Category[]> => {
  const categoryRepo = AppDataSource.getRepository(Category);
  const categories = await categoryRepo.find({ skip: offset, take: limit });
  return categories;
};
