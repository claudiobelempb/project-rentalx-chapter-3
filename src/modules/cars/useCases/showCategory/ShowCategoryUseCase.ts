import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { Category } from "../../entities/Category";

interface IRequest {
  id: string;
}

@injectable()
class ShowCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new Error("Category id not found");
    }

    return category;
  }
}

export { ShowCategoryUseCase };
