import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {

  constructor(private specificationsRepository: ISpecificationsRepository){};

  execute({ name, description }: IRequest): void {

    const specificationAlreadyExist = this.specificationsRepository.findByName(name);

    if(specificationAlreadyExist){
      throw new Error('Specification name already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
      created_at: new Date(),
      updated_at: new Date()
    });
    
  }
}

export { CreateSpecificationUseCase };