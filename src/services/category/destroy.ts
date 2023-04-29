import AppDataSource from "../../data-source";
import { Category } from "../../entities";

export const deleteCategoryService = async (id: string): Promise<void> => {
  const categoryRepo = AppDataSource.getRepository(Category);

  await categoryRepo.delete(id);
  return;
};
