import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IndexCategoryUserCase } from './IndexCategoryUseCase';

class IndexCategoryController {

  public async handle(request: Request, response: Response ): Promise<Response> {

    const indexCategoryUserCase = container.resolve(IndexCategoryUserCase);

    const categories = await indexCategoryUserCase.execute();

    return response.json(categories);

  }
}

export { IndexCategoryController };