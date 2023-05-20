import { instanceToPlain } from "class-transformer";
import AppDataSource from "../../data-source";
import { Customer } from "../../entities";

export const retrieveCustomerService = async (
  id: string
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const customerData = await customerRepo.findOneBy({ id: id });
  return instanceToPlain(customerData) as Customer;
};
