import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddSubcategoriesComponent } from './components/add-subcategories/add-subcategories.component';
import { AddThemeComponent } from './components/add-theme/add-theme.component';

const routes: Routes = [
  { component: CategoriesComponent, path: '' },
  { component: AddSubcategoriesComponent, path: 'addSubcategories' },
  { component: AddThemeComponent, path: 'addTheme' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
