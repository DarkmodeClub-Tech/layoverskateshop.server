import { Customer } from "../../entities";
import { ICustomer } from "../../interfaces/customer";
import { registerAddressMock } from "./address";

export const registerCustomerMock: ICustomer = {
  username: "TesterOne",
  first_name: "Tester",
  last_name: "Testing",
  cpf: "01234567890",
  email: "testertesting@mail.com",
  phone: "0000000000",
  password: "12345678",
  address: registerAddressMock,
};

//  registerCustomerMock.address.
