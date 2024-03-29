import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entityPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");
  //demo-M4-T18[WSL:Ubuntu]/src/entities/**.{ts,js} */

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error('Missing env: var "DATABASE_URL"');
  }

  return {
    type: "postgres",
    url: dbUrl,
    logging: true,
    entities: [entityPath],
    migrations: [migrationPath],
    ssl: { rejectUnauthorized: false },
    synchronize: false,
  };
};

const AppDataSource: DataSource = new DataSource(dataSourceConfig());
export default AppDataSource;
