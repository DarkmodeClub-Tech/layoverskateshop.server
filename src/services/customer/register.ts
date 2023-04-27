import AppDataSource from "../../data-source";
import { Customer, Address } from "../../entities";
import { hash } from "bcrypt";
import { instanceToPlain } from "class-transformer";

export const registerUserService = async (
  data: Customer
): Promise<Customer> => {
  const userRepo = AppDataSource.getRepository(Customer);
  const addressRepo = AppDataSource.getRepository(Address);

  data.password = await hash(data.password, 10);

  const newUser = userRepo.create(data);
  const userAddress = addressRepo.create(data.address);

  newUser.address = userAddress;

  await userRepo.save(newUser);

  const createdUser = await userRepo.findOneBy({ id: newUser.id });

  return instanceToPlain(createdUser) as Customer;
};
