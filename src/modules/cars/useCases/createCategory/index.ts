import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default(): CreateCategoryController => {
  const repositoryCategory = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(repositoryCategory);
  const createCategoryController = new CreateCategoryController(createCategoryUseCase);

  return createCategoryController;
}