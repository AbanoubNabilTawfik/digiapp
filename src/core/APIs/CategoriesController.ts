import { BaseUrl } from "../config";

export const CategoriesController = {
  GetAllCategories: BaseUrl + `/products/categories`,
  GetAllProductsByCategoryName: BaseUrl + `/products/category/`,

}