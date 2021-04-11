import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  index(): Promise<User[] | undefined>;
  show(id: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  update(data: ICreateUserDTO): Promise<ICreateUserDTO>;
  delete(id:string): Promise<void>;

  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>
}

export { IUsersRepository };