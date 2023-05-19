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
  CreateTables1684064393378,
  CreateTables1684064708330,
  AlterTables1684286281140,
  AlterTables1684379137825,
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
          CreateTables1684064393378,
          CreateTables1684064708330,
          AlterTables1684286281140,
          AlterTables1684379137825,
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
          CartProduct,
        ],
        migrations: [
          InitialMigration1682346444041,
          CreateTables1684064393378,
          CreateTables1684064708330,
          AlterTables1684286281140,
          AlterTables1684379137825,
        ],
      }
);

export default AppDataSource;
