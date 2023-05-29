import AppDataSource from "../../data-source";
import { Customer, Address } from "../../entities";
import { hash } from "bcrypt";
import { instanceToPlain } from "class-transformer";
import { createCartService } from "../cart";
import { ICustomer } from "../../interfaces/customer";
import { retrieveCustomerService } from "./retrieve";

export const registerCustomerService = async (
  data: ICustomer
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const addressRepo = AppDataSource.getRepository(Address);
  const { address, password, products } = data;

  data.address = addressRepo.create(address);
  data.password = await hash(password, 10);
  data.cart = await createCartService(products);

  let newCustomer = customerRepo.create(data);
  await customerRepo.save(newCustomer);
  newCustomer = await retrieveCustomerService(newCustomer.id);

  return instanceToPlain(newCustomer) as Customer;
};
