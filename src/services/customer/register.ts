import AppDataSource from "../../data-source";
import { Customer, Address } from "../../entities";
import { hash } from "bcrypt";
import { instanceToPlain } from "class-transformer";
import { createCartService } from "../cart";

export const registerUserService = async (
  data: Customer
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const addressRepo = AppDataSource.getRepository(Address);

  data.password = await hash(data.password, 10);

  const newCustomer = customerRepo.create(data);
  const userAddress = addressRepo.create(data.address);

  newCustomer.address = userAddress;
  newCustomer.cart = await createCartService();
  await customerRepo.save(newCustomer);

  return instanceToPlain(newCustomer) as Customer;
};
