import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddSubcategoriesComponent } from './components/add-subcategories/add-subcategories.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AddThemeComponent } from './components/add-theme/add-theme.component';

const imports = [
  HttpClientModule,
  MatTableModule,
  MatTreeModule,
  MatButtonModule,
  SweetAlert2Module,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddSubcategoriesComponent,
    AddThemeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
