import {Request, Response} from "express";
import { container } from "tsyringe";

import { IndexUserUseCase } from "../IndexUser/IndexUserUseCase";

class IndexUserController {

  public async handle(request: Request, response: Response): Promise<Response> {
    const indexUserUseCase = container.resolve(IndexUserUseCase);
    const users = await indexUserUseCase.execute();
    return response.json(users);
  }
}

export { IndexUserController };