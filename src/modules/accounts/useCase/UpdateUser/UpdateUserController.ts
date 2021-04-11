import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "../UpdateUser/UpdateUserUseCase";

class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, password, driver_license } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).json(user);
  }
}

export { UpdateUserController };
