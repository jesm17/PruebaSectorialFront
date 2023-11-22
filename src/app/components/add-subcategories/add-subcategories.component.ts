import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubCategories } from 'src/app/interfaces/sub-categories';
import { Themes } from 'src/app/interfaces/themes';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-subcategories',
  templateUrl: './add-subcategories.component.html',
  styleUrls: ['./add-subcategories.component.css'],
})
export class AddSubcategoriesComponent {
  constructor(private categoriesService: CategoriesService) {}
  mainCategory: string | null = localStorage.getItem('nombre');
  nombre: FormControl = new FormControl('', [Validators.required]);
  temas: FormControl = new FormControl('', [Validators.required]);

  addSubCatagorie = new FormGroup({
    nombre: this.nombre,
    temas: this.temas,
  });

  addSubCategory() {
    const temas = this.temas.value;
    let arrayTemas = temas.split(',');
    let newTheme: Themes[] = [];
    arrayTemas.forEach((temas: any) => {
      newTheme.push({ nombre: temas, _id: null });
    });
    const newSubCategory: SubCategories = {
      activo: true,
      nombre: this.nombre.value,
      temas: newTheme,
      _id: null,
    };
    const idCategory = localStorage.getItem('idCategorie');
    this.categoriesService
      .addSubCategory(idCategory!, newSubCategory)
      .subscribe({
        next: (res: any) => {
          Swal.fire({
            title: res.message,
            icon: 'success',
          }).then((action) => {
            if (action.isConfirmed) {
              this.addSubCatagorie.reset({ nombre: '', temas: '' });
            }
          });
        },
      });
  }
}
