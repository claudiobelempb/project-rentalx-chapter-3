import { TypeCategoryPage } from './TypeCategoryPage';

export type TypeProductPage = {
  id?: number;
  name: string;
  description?: string;
  price: number;
  imgUrl: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string | null;
  categories?: TypeCategoryPage[];
};
