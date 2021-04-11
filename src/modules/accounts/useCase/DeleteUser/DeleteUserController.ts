import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUserUseCase } from "../DeleteUser/DeleteUserUseCase";

class DeleteUserController {

  public async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteUserController = container.resolve(DeleteUserUseCase);

    const user = await deleteUserController.execute({ id });

    return response.send();

  }
}

export { DeleteUserController };