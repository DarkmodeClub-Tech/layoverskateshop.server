import AppDataSource from "../../data-source";
import { User, Address, Cart } from "../../entities";

export const registerUserService = async (data: User) => {
  const userRepo = AppDataSource.getRepository(User);
  const addressRepo = AppDataSource.getRepository(Address);
  const cartRepo = AppDataSource.getRepository(Cart);

  const cpf = await userRepo.findOneBy({
    cpf: data.cpf,
  });

  const username = await userRepo.findOneBy({
    username: data.username,
  });

  const email = await userRepo.findOneBy({
    email: data.email,
  });

  if (email) throw new Error("email already being used");
  if (cpf) throw new Error("cpf already being used");
  if (username) throw new Error("username already being used");

  const address = addressRepo.create({ ...data.address });
  await addressRepo.save(address);

  const cart = new Cart();
  await cartRepo.save(cart);

  // data.cart = cart;
  const newUser = userRepo.create(data);
  newUser.address = address;

  await userRepo.save(newUser);

  const user = await userRepo.findOneBy({ id: newUser.id });

  return user;
};
