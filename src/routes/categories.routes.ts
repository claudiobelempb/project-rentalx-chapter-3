import multer from "multer";
import { Router } from "express";

import { IndexCategoryController } from "../modules/cars/useCases/indexCategory/IndexCategoryController";
import { ShowCategoryController } from '../modules/cars/useCases/showCategory/ShowCategoryController';
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const indexCategoryController = new IndexCategoryController();
const showCategoryController = new ShowCategoryController();
const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();


categoriesRoutes.get("/", indexCategoryController.handle);
categoriesRoutes.get("/:id", showCategoryController.handle);
categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes };
