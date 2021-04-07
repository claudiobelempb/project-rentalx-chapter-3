import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class IndexCategoryUserCase {

  constructor(private categoriesRepository: ICategoriesRepository){};

  public async execute(): Promise<Category[] | undefined> {

    const categories = await this.categoriesRepository.index();

    return categories;

  }
}

export { IndexCategoryUserCase };