import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {

  constructor(private categoriesRepository: ICategoriesRepository){}

  execute({name, description}: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if(categoryAlreadyExists){
      // return response.status(400).json({error: 'Category already exists!'});
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({
      name,
      description,
      created_at: new Date(),
      updated_at: new Date()
    });

  }

}

export { CreateCategoryUseCase };