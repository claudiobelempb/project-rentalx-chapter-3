import { Category } from '../entities/Category';

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  index(): Promise<Category[] | undefined>;
  show(id: string): Promise<Category | undefined>;
  create({ name, description }: ICategoriesRepositoryDTO): Promise<void>;
  findByName(name: string): Promise<ICategoriesRepositoryDTO>;
  findById(id: string): Promise<Category>;
}

export { ICategoriesRepository , ICategoriesRepositoryDTO};