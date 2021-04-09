import { inject, injectable } from "tsyringe";

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { User } from "../../entities/User";


@injectable()
class IndexUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.index();
    return users;
  }

}

export { IndexUserUseCase }