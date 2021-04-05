import { Request, Response } from 'express';
import { IndexCategoryUserCase } from './IndexCategoryUseCase';

class IndexCategoryController {

  constructor(private indexCategoryUserCase: IndexCategoryUserCase){}

  handle(request: Request, response: Response ): Response {

    const categories = this.indexCategoryUserCase.execute();

    return response.json(categories);

  }
}

export { IndexCategoryController };