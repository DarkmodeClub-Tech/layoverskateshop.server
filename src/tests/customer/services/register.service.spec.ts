import { Customer, Address } from "../../../entities";
import AppDataSource from "../../../data-source";

import {
  deleteAccountService,
  registerCustomerService,
  retrieveCustomerService,
} from "../../../services/customer";
import { registerCustomerMock } from "../../mocks/customer";
import { DataSource } from "typeorm";

describe("Register a new Customer", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Should insert the Customer data into the database", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    const retrievedCustomer = await retrieveCustomerService(newCustomer.id);
    expect(newCustomer).toEqual(retrievedCustomer);

    await deleteAccountService(newCustomer.id);
  });

  const customerProperties = [
    "id",
    "username",
    "first_name",
    "last_name",
    "email",
    "cpf",
    "phone",
    "is_active",
    "last_login",
    "last_logout",
    "created_at",
    "updated_at",
    "address",
    "cart",
  ];

  test("Should have the property id", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("id");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property username", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("username");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property first_name", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("first_name");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property last_name", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("last_name");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property last_name", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("last_name");
    await deleteAccountService(newCustomer.id);
  });
  test("Should have the property email", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("email");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property cpf", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("cpf");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property phone", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("phone");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property is_active", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("is_active");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property last_login", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("last_login");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property last_logout", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("last_logout");
    await deleteAccountService(newCustomer.id);
  });
  test("Should have the property created_at", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("created_at");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property updated_at", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("updated_at");
    await deleteAccountService(newCustomer.id);
  });

  test("Should have the property address", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("address");
    await deleteAccountService(newCustomer.id);
  });
  test("Should have the property cart", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).toHaveProperty("cart");
    await deleteAccountService(newCustomer.id);
  });

  test("Should not have the property password", async () => {
    const newCustomer = await registerCustomerService(registerCustomerMock);
    expect(newCustomer).not.toHaveProperty("password");
    await deleteAccountService(newCustomer.id);
  });
});
