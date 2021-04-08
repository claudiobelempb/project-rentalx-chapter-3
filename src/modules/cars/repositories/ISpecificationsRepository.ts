import { Specification } from '../entities/Specification';

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  index(): Promise<Specification[] | undefined>;
  show(id: string): Promise<Specification | undefined>;
  create({ name, description }: ISpecificationsDTO): Promise<void>;
  findByName(name: string): Promise<ISpecificationsDTO>;
  findById(id: string): Promise<Specification>;
}

export { ISpecificationsDTO, ISpecificationsRepository };