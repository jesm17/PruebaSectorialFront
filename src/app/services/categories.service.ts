import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SubCategories } from '../interfaces/sub-categories';
import { Themes } from '../interfaces/themes';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  base_url = environment.base_url;
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get(this.base_url);
  }

  createCategory(categoria: Category) {
    return this.http.post(`${this.base_url}/create/category`, categoria);
  }

  

  changeStatusCategory(id: string) {
    return this.http.put(
      `${this.base_url}/update/changeStatusCategory/${id}`,
      {}
    );
  }
  changeStatusSubCategory(idCategory: string, idSubCategory: string) {
    return this.http.put(
      `${this.base_url}/update/changeStatusSubCategory/${idCategory}/${idSubCategory}`,
      {}
    );
  }

  addSubCategory(id: string, Subcategories: SubCategories) {
    return this.http.put(
      `${this.base_url}/update/addsubcategory/${id}`,
      Subcategories
    );
  }
  AddTheme(idCategory: string, idSubcategory: string, tema: Themes[]) {
    return this.http.put(
      `${this.base_url}/update/addtheme/${idCategory}/${idSubcategory}`,
      tema
    );
  }
  
  deleteTheme(idCategory: string, idSubcategory: string, idTheme: string) {
    return this.http.delete(
      `${this.base_url}/delete/theme/${idCategory}/${idSubcategory}/${idTheme}`
    );
  }
  deleteCategory(categoryId: string) {
    return this.http.delete(`${this.base_url}/delete/category/${categoryId}`);
  }

  deleteSubcategory(categoryId: string, subCategoryId: string) {
    return this.http.delete(
      `${this.base_url}/delete/subcategory/${categoryId}/${subCategoryId}`
    );
  }
}
