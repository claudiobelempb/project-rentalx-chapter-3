import { EntityRepository, getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICategoriesRepositoryDTO,
} from "../ICategoriesRepository";

@EntityRepository(Category)
class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  //private static INSTANCE: CategoriesRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  public async index(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  public async show(id: string): Promise<Category | undefined> {
    const category = await this.repository.findOne(id);
    return category;
  }

  public async create({
    name,
    description,
  }: ICategoriesRepositoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  public async findByName(name: string): Promise<Category> {
    const categoryNameExists = await this.repository.findOne({ name });
    return categoryNameExists;
  }

  public async findById(id: string): Promise<Category> {
    const categoryIdExists = await this.repository.findOne({ id });
    return categoryIdExists;
  }
}

export { CategoriesRepository };
