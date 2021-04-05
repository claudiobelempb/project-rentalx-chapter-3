import { Category } from '../model/Category';
import { CategoriesRepository } from '../repositories/implementations/CategoriesRepository';

class ShowCategoryService {

  constructor(private categoriesRepository: CategoriesRepository){};

  execute(id: string): Category[] | undefined {

    const categoryIdExist = this.categoriesRepository.findById(id);

    if(!categoryIdExist){
      throw new Error('Id category not exist!');
    }

    const categories = this.categoriesRepository.show(id);

    return categories;

  }
}

export { ShowCategoryService };