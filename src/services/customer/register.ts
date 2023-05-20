import AppDataSource from "../../data-source";
import { Customer, Address } from "../../entities";
import { hash } from "bcrypt";
import { instanceToPlain } from "class-transformer";
import { createCartService } from "../cart";
import { ICustomer } from "../../interfaces/customer";

export const registerCustomerService = async (
  data: ICustomer
): Promise<Customer> => {
  const customerRepo = AppDataSource.getRepository(Customer);
  const addressRepo = AppDataSource.getRepository(Address);
  const {
    first_name,
    last_name,
    username,
    email,
    cpf,
    password,
    phone,
    address,
    products,
  } = data;

  const newCustomer = customerRepo.create({
    password: await hash(password, 10),
    first_name,
    last_name,
    username,
    cpf,
    email,
    phone,
  });

  const userAddress = addressRepo.create(address);

  newCustomer.address = userAddress;
  newCustomer.cart = await createCartService(products);
  await customerRepo.save(newCustomer);

  return instanceToPlain(newCustomer) as Customer;
};
