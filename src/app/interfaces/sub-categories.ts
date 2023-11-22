import { Themes } from './themes';

export interface SubCategories {
  _id: string | null;
  nombre: string;
  activo: boolean;
  temas: Themes[];
}
