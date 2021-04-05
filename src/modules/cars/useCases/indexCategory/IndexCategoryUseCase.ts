import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class IndexCategoryUserCase {

  constructor(private categoriesRepository: ICategoriesRepository){};

  execute(): Category[] | undefined {

    const categories = this.categoriesRepository.index();

    return categories;

  }
}

export { IndexCategoryUserCase };