import AppDataSource from "../../data-source";
import { Customer } from "../../entities";
import { AppError } from "../../errors/appError";

export const deactivateAccountService = async (id: string): Promise<void> => {
  const customerRepo = AppDataSource.getRepository(Customer);

  await customerRepo.update(id, { is_active: false });

  return;
};
