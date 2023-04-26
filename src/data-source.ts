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
} from "./entities";
import {
  InitialMigration1682346444041,
  CreateTables1682346648117,
  AlterTables1682346922430,
  AlterTables1682347365164,
  AlterTables1682348287338,
  AlterTable1682448498485,
  AlterTables1682459438455,
  AlterTables1682464795384,
  AlterTables1682467557649,
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
        ],
        migrations: [
          InitialMigration1682346444041,
          CreateTables1682346648117,
          AlterTables1682346922430,
          AlterTables1682347365164,
          AlterTables1682348287338,
          AlterTable1682448498485,
          AlterTables1682459438455,
          AlterTables1682464795384,
          AlterTables1682467557649,
        ],
      }
    : {
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
        ],
        migrations: [
          InitialMigration1682346444041,
          CreateTables1682346648117,
          AlterTables1682346922430,
          AlterTables1682347365164,
          AlterTables1682348287338,
          AlterTable1682448498485,
          AlterTables1682459438455,
          AlterTables1682464795384,
          AlterTables1682467557649,
        ],
      }
);

export default AppDataSource;
