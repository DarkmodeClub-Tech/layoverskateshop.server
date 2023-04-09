import "dotenv/config";
import app from "./app";
import AppDataSource from "./data-source";

const server = async () => {
  await AppDataSource.initialize().catch((error) => {
    console.error("Error during initialization", error);
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
  });
};

server();
