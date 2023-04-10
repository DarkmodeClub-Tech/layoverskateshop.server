import { DataSource } from "typeorm";
import "dotenv/config";
import { User, Address, Cart, Order, Product } from "./entities";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "production"
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: false,
        logging: true,
        entities: [User, Address, Cart, Order, Product],
        migrations: [],
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
        migrations: [],
      }
);

export default AppDataSource;
