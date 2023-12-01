import AppDataSource from "../../data-source";
import { Product } from "../../entities";
import Fuse from "fuse.js";

export const getProductsService = async (
  offset: number,
  limit: number,
  search?: string
): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product);
  const products = await productRepo.find({
    skip: offset,
    take: limit,
    loadRelationIds: { relations: ["seller"] },
    cache: true,
  });

  if (search) {
    const fuseOptions = {
      keys: ["title", "description"],
    };

    const fuse = new Fuse(products, fuseOptions);
    const result = fuse.search(search);
    return result.map((item) => item.item);

    // const foundProducts = products.filter((p) =>
    //   p.title.toLowerCase().includes(search.toLowerCase())
    // );
    // return foundProducts;
  }
  return products;
};

export const getProductsBySellerIdService = async (
  sellerId: string,
  offset: number = 0,
  limit: number = 50
) => {
  const productRepo = AppDataSource.getRepository(Product);
  const products = await productRepo.find({
    skip: offset,
    take: limit,
    where: { seller: { id: sellerId } },
  });
  return products;
};
