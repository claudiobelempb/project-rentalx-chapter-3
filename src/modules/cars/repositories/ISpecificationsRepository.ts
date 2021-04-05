import { Specification } from '../model/Specification';

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  index(): Specification[] | undefined;
  show(id: string): Specification[] | undefined;
  create({ name, description }: Specification): void;
  findByName(name: string): ISpecificationsDTO;
  findById(id: string): Specification;
}

export { ISpecificationsDTO, ISpecificationsRepository };