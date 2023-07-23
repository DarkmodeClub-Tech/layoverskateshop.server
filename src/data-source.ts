import "dotenv/config";

import { DataSource } from "typeorm";
import {
  User,
  Address,
  Cart,
  Order,
  Product,
  Customer,
  Seller,
  Category,
  Photo,
  CartProduct,
} from "./entities";
import {
  InitialMigration1682346444041,
  CreateTables1684524108180,
  AlterTables1685395288009,
  AddDescriptionFieldToProduct1685473363142,
  AddDescriptionFieldToProduct1685473703904,
  AlterTables1687388606344,
} from "./migrations";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: true,
        entities: [
          User,
          Customer,
          Seller,
          Address,
          Cart,
          Order,
          Product,
          Category,
          Photo,
          CartProduct,
        ],
        migrations: [
          InitialMigration1682346444041,
          CreateTables1684524108180,
          AlterTables1685395288009,
          AddDescriptionFieldToProduct1685473703904,
          AlterTables1687388606344,
        ],
      }
    : // : process.env.NODE_ENV === "test"
      // ? {
      //     type: "sqlite",
      //     database: ":memory:",
      //     synchronize: true,
      //     entities: [
      //       User,
      //       Customer,
      //       Seller,
      //       Address,
      //       Cart,
      //       Order,
      //       Product,
      //       Category,
      //       Photo,
      //       CartProduct,
      //     ],
      //     migrations: [
      //       InitialMigration1682346444041,
      //       CreateTables1684524108180,
      //       AlterTables1685395288009,
      //       AddDescriptionFieldToProduct1685473703904,
      //       AlterTables1687388606344,
      //     ],
      //   }
      {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: [
          User,
          Customer,
          Seller,
          Address,
          Cart,
          Order,
          Product,
          Category,
          Photo,
          CartProduct,
        ],
        migrations: [
          InitialMigration1682346444041,
          CreateTables1684524108180,
          AlterTables1685395288009,
          AddDescriptionFieldToProduct1685473703904,
          AlterTables1687388606344,
        ],
      }
);

export default AppDataSource;
