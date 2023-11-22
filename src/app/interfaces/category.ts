import { SubCategories } from './sub-categories';

export interface Category {
  _id: string | null;
  nombre: string;
  activo: boolean;
  subcategorias: SubCategories[];
}
