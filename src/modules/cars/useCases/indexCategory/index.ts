import { IndexCategoryController } from '../../useCases/indexCategory/IndexCategoryController';
import { IndexCategoryUserCase } from "./IndexCategoryUseCase";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoryRepository = CategoriesRepository.getInstance();
const indexCategoryUserCase = new IndexCategoryUserCase(categoryRepository);
const indexCategoryController = new IndexCategoryController(indexCategoryUserCase);

export { indexCategoryController };