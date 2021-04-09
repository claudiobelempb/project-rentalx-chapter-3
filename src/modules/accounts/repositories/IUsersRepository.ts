import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  index(): Promise<User[] | undefined>;
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<ICreateUserDTO>;
}

export { IUsersRepository };