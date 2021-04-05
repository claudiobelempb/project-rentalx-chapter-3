import { Specification } from '../../model/Specification';
import { ISpecificationsRepository, ISpecificationsDTO } from '../../repositories/ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {

  private specifications: Specification[];

  private static INSTANCE: SpecificationsRepository;

  constructor(){
    this.specifications = [];
  }

  public static getInstance(): SpecificationsRepository {
    if(!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  index(): Specification[] {
    return this.specifications;
  }

  show(id: string): Specification[] | undefined {
    const specification = this.specifications.filter(specification => specification.id === id);
    return specification;
  }

  create({ name, description }: ISpecificationsDTO): void {
    
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
      updated_at: new Date()
    });

    this.specifications.push(specification);

  }

  findByName(name: string): ISpecificationsDTO {
    const specificationNameExists = this.specifications.find(specification => specification.name === name);
    return specificationNameExists;
  }

  findById(id: string): Specification {
    const specificationIdExists = this.specifications.find(specification => specification.id === id);
    return specificationIdExists;
  }

}

export { SpecificationsRepository };