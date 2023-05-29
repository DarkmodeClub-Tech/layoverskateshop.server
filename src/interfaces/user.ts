import { IAddressRegisterReq } from "./address";

export interface IUserRegisterReq {
  username: string;
  first_name: string;
  last_name: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  address: IAddressRegisterReq;
}

export interface ILogin {
  username?: string;
  email?: string;
  password: string;
}
