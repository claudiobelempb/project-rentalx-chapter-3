import { IndexCategoryController } from '../../useCases/indexCategory/IndexCategoryController';
import { IndexCategoryUserCase } from "./IndexCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export default (): IndexCategoryController => {
  const categoryRepository = new CategoriesRepository();
  const indexCategoryUserCase = new IndexCategoryUserCase(categoryRepository);
  const indexCategoryController = new IndexCategoryController(indexCategoryUserCase);

  return indexCategoryController;
}