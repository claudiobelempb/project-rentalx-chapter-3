import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

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
      throw new Error("User id not found.");
    }

    const userReturn: IRequest = {
      id,
      name,
      email,
      password,
      driver_license,
    };

    await this.usersRepository.update(userReturn);

    return userReturn;
  }
}

export { UpdateUserUseCase };