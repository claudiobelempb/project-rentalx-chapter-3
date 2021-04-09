import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  public async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {

    const user = await this.usersRepository.findByEmail(email);

    if(user){
      throw new Error("User email already exists!");
    }

    this.usersRepository.create({ 
      name, 
      username,
      email,
      password,
      driver_license
    });
  }

}

export { CreateUserUseCase };