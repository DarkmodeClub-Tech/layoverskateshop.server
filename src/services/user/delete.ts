import AppDataSource from "../../data-source";
import { Customer } from "../../entities";
import { AppError } from "../../errors/appError";

export const deleteAccountService = async (id: string) => {
  const customerRepo = AppDataSource.getRepository(Customer);

  const account = await customerRepo.findOneBy({ id: id });

  if (!account) throw new AppError("Not found", 404);

  await customerRepo.delete(id);

  return;
};
