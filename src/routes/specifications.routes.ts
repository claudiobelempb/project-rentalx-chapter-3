import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { indexSpecificationController } from '../modules/cars/useCases/indexSpecification';


const specificationRoutes = Router();

specificationRoutes.get('/', (request, response) => {

  return indexSpecificationController.handle(request, response);

});

specificationRoutes.post('/', (request, response) => {

  
  return createSpecificationController.handle(request, response);

});

export { specificationRoutes };