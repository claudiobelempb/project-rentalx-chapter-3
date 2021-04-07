import { Request, Response } from 'express';
import { IndexCategoryUserCase } from './IndexCategoryUseCase';

class IndexCategoryController {

  constructor(private indexCategoryUserCase: IndexCategoryUserCase){}

  public async handle(request: Request, response: Response ): Promise<Response> {

    const categories = await this.indexCategoryUserCase.execute();

    return response.json(categories);

  }
}

export { IndexCategoryController };