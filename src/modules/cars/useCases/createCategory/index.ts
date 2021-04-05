import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const repositoryCategory = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(repositoryCategory);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };