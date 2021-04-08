import { Request, Response } from "express";
import { container } from "tsyringe";

import { IndexSpecificationUseCase } from "./IndexSpecificationUseCase";

class IndexSpecificationController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const indexSpecificationUseCase = container.resolve(
      IndexSpecificationUseCase
    );

    const specification = await indexSpecificationUseCase.execute();

    return response.json(specification);
  }
}

export { IndexSpecificationController };
