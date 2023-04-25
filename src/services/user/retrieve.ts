import AppDataSource from "../../data-source";
import { Customer } from "../../entities";

export const retrieveUserService = async (id: string) => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const customerData = await customerRepo.findOneBy({ id: id });
  return customerData;
};
