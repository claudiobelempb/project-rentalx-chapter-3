import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
  id: string;
}

interface IResponse {
  user: {
    id?: string;
    name: string;
    email: string;
    driver_license: string;
    created_at: Date;
    updated_at: Date;
  };
}

@injectable()
class ShowUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ id }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User id not found.");
    }

    const userReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
        driver_license: user.driver_license,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    };

    return userReturn;
  }
}

export { ShowUserUseCase };
