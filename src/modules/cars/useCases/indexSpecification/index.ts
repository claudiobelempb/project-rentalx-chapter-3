import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { IndexSpecificationUseCase } from "./IndexSpecificationUseCase";
import { IndexSpecificationController } from './IndexSpecificationController';

const specificationRepository = SpecificationsRepository.getInstance();
const indexSpecificationUseCase = new IndexSpecificationUseCase(specificationRepository);
const indexSpecificationController = new IndexSpecificationController(indexSpecificationUseCase);

export { indexSpecificationController };