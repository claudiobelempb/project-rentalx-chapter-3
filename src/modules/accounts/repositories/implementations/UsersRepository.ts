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

  public async show(id: string): Promise<User> {
    const user = await this.repository.findOne({ id });
    return user;
  }

  public async create({
    id,
    name,
    email,
    password,
    driver_license,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      id,
      name,
      email,
      password,
      driver_license,
      avatar,
    });

    await this.repository.save(user);
  }

  public async update({
    id,
    name,
    email,
    password,
    driver_license,
  }: User): Promise<ICreateUserDTO> {
    const user = {
      id,
      name,
      email,
      password,
      driver_license,
    };

    await this.repository.save(user);

    return user;
  }

  public async delete(id: string): Promise<void> {
    const user = await this.repository.findOne({ id });
    await this.repository.remove(user);
  }

  public async findByEmail(email: string): Promise<User> {
    const userEmailExists = await this.repository.findOne({ email });
    return userEmailExists;
  }

  public async findById(id: string): Promise<User> {
    const userIdExists = await this.repository.findOne(id);
    return userIdExists;
  }
}

export { UsersRepository };
