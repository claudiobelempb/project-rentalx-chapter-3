import { Request, Response } from 'express';
import { IndexSpecificationUseCase } from './IndexSpecificationUseCase';

class IndexSpecificationController {

  constructor(private indexSpecificationUseCase: IndexSpecificationUseCase){};

  handle( request: Request, response: Response ): Response {

    const specification = this.indexSpecificationUseCase.execute();

    return response.json(specification);
  }

}

export { IndexSpecificationController };