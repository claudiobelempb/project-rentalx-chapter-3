import { Router } from "express";

import { IndexSpecificationController } from "../modules/cars/useCases/indexSpecification/IndexSpecificationController";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const indexSpecificationController = new IndexSpecificationController();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.get("/", indexSpecificationController.handle);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
