import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Customer } from "../../entities";
import { AppError } from "../../errors/appError";

export const updateCustomerService = async (
  id: string,
  data: Customer
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  await customerRepo.update(id, data);
  const updatedData = await customerRepo.findOneBy({ id: id });
  return instanceToPlain(updatedData) as Customer;
};
