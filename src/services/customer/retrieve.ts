import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Customer } from "../../entities";
import { AppError } from "../../errors/appError";

export const retrieveCustomerService = async (
  id: string
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const customerData = await customerRepo.findOneBy({ id: id });

  if (!customerData) throw new AppError("Not found", 404);

  return instanceToPlain(customerData) as Customer;
};
