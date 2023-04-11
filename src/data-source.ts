import "dotenv/config";

import { DataSource } from "typeorm";
import { User, Address, Cart, Order, Product } from "./entities";
import {
  InitialMigrations1681211388494,
  CreateTables1681211502804,
  AlterTables1681214882297,
  AlterTables1681218740737,
  AlterTables1681218949606,
  AlterTables1681219186397,
} from "./migrations";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: true,
        entities: [User, Address, Cart, Order, Product],
        migrations: [
          InitialMigrations1681211388494,
          CreateTables1681211502804,
          AlterTables1681218949606,
          AlterTables1681219186397,
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
        entities: [User, Address, Cart, Order, Product],
        migrations: [
          InitialMigrations1681211388494,
          CreateTables1681211502804,
          AlterTables1681218949606,
          AlterTables1681219186397,
        ],
      }
);

export default AppDataSource;
