import { TypeProductPage } from './TypeProductPage';

export type TypeCategoryPage = {
  id: number;
  name: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  products?: TypeProductPage[];
};
