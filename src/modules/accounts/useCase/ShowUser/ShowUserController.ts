import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowUserUseCase } from "./ShowUserUseCase";

class ShowUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showUserUseCase = container.resolve(ShowUserUseCase);

    const user = await showUserUseCase.execute({id});

    return response.json(user);
  }
}

export { ShowUserController };
