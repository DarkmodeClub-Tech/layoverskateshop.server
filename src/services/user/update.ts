import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Customer } from "../../entities";
import { AppError } from "../../errors/appError";

export const updateUserService = async (
  id: string,
  data: Customer
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);

  const account = await customerRepo.findOneBy({ id: id });

  if (!account) throw new AppError("Not found", 404);
  await customerRepo.update(id, { ...data });

  const updatedData = await customerRepo.findOneBy({ id: id });
  return instanceToPlain(updatedData) as Customer;
};
