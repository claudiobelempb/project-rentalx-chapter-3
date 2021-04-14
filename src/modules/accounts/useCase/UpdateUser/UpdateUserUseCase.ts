import { injectable, inject } from "tsyringe";
import { hash } from "bcryptjs";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  driver_license: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    id,
    name,
    email,
    password,
    driver_license,
  }: IRequest): Promise<IRequest> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError("User id not found.");
    }

    const passwordHash = await hash(password, 8);

    const userReturn: IRequest = {
      id,
      name,
      email,
      password: passwordHash,
      driver_license,
    };

    await this.usersRepository.update(userReturn);

    return userReturn;
  }
}

export { UpdateUserUseCase };
