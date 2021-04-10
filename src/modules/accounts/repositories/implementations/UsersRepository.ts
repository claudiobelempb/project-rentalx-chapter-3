import { EntityRepository, getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

@EntityRepository(User)
class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  public async index(): Promise<User[] | undefined> {
    const users = await this.repository.find();
    return users;
  }

  public async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }

  public async findByEmail(email: string): Promise<User> {
    const userEmailExists = await this.repository.findOne({ email });
    return userEmailExists;
  }
}

export { UsersRepository };
