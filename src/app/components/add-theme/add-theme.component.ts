import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Themes } from 'src/app/interfaces/themes';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private categoriesService: CategoriesService) {}
  subCategory: string | null = localStorage.getItem('nombre');
  temas: FormControl = new FormControl('', [Validators.required]);
  idCategory: string | null = localStorage.getItem('idCategorie');
  idSubcategory: string | null = localStorage.getItem('idSubcategory');
  addtTheme() {
    const tema = this.temas.value.split(',');
    let newtemas: Themes[] = [];
    tema.forEach((x: any) => {
      newtemas.push({ nombre: x, _id: null });
    });

    this.categoriesService
      .AddTheme(this.idCategory!, this.idSubcategory!, newtemas)
      .subscribe({
        next: (res: any) => {
          Swal.fire({ title: res.message, icon: 'success' }).then(
            (action: any) => {
              if (action.isConfirmed) {
                this.temas.setValue('');
              }
            }
          );
        },
      });
  }
}
