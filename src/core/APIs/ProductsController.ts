import { BaseUrl } from "../config";

export const ProductsController = {
  GetAllProducts: BaseUrl + `/products`,
  AddProduct: BaseUrl + `/products`,
  UpdateProduct: BaseUrl + `/products`,
  GetProductById: BaseUrl + `/products`,
  DeleteProduct: BaseUrl + `/products`,



}