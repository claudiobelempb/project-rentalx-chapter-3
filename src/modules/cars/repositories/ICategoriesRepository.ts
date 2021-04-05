import { Category } from '../model/Category';

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  index(): Category[] | undefined;
  show(id: string): Category[] | undefined;
  create({ name, description }: Category): void;
  findByName(name: string): ICategoriesRepositoryDTO;
  findById(id: string): Category;
}

export { ICategoriesRepository , ICategoriesRepositoryDTO};