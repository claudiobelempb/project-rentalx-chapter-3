import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from "../../entities/Category";

@injectable()
class IndexCategoryUserCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    const categories = await this.categoryRepository.index();

    return categories;
  }
}

export { IndexCategoryUserCase };
