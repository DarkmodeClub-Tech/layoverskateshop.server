import AppDataSource from "../../data-source";
import { Customer } from "../../entities";

export const deleteAccountService = async (id: string) => {
  const customerRepo = AppDataSource.getRepository(Customer);
  await customerRepo.delete(id);
  return;
};
