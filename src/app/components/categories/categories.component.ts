import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  constructor(private categoriesService: CategoriesService) {}
  categoryName = new FormControl('', Validators.required);
  subCategoryName = new FormControl('', Validators.required);
  addCategoryForm = new FormGroup({
    nombre: this.categoryName,
    subcategorias: this.subCategoryName,
  });

  allCategories: Category[] = [];

  ngOnInit(): void {
    localStorage.clear()
    this.getAllcategories();
  }

  categoryId: string = '';
  subCategoryId: string = '';

  getAllcategories() {
    this.categoriesService.getAllCategories().subscribe({
      next: (res: any) => {
        this.allCategories = res;

        console.log(res);
      },
    });
  }

  addCategory() {
    const category: Category = {
      _id: null,
      nombre: this.categoryName.value!,
      activo: true,
      subcategorias: [
        {
          nombre: this.subCategoryName.value!,
          activo: true,
          temas: [],
          _id: undefined!,
        },
      ],
    };
    this.categoriesService.createCategory(category).subscribe({
      next: (res: any) => {
        console.log(res);
      },
    });
  }

  deleteSubCategory(categoryId: string, subCategoryId: string) {
    Swal.fire({
      title: 'Desea eliminar esta subcategoria?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    }).then((action: any) => {
      if (action.isConfirmed) {
        this.categoriesService
          .deleteSubcategory(categoryId, subCategoryId)
          .subscribe({
            next: (res: any) => {
              Swal.fire({ title: res.message, icon: 'success' }).then(() => {
                document.location.reload();
              });
            },
          });
      }
    });
  }

  changeStatusCategory(categoryid: string) {
    Swal.fire({
      title: 'Desea cambiar el estado de categoria?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
    }).then((action: any) => {
      if (action.isConfirmed) {
        this.categoriesService.changeStatusCategory(categoryid).subscribe({
          next: (res: any) => {
            console.log(res);
            Swal.fire({
              title: res.message,
              icon: 'success',
            }).then((action) => {
              if (action.isConfirmed) {
                document.location.reload();
              }
            });
          },
          error: (err: any) => {
            Swal.fire({
              title: err.message,
              icon: 'warning',
              showCancelButton: true,
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Aceptar',
            });
          },
        });
      }
    });
  }

  changeStatusSubCategory(categoryid: string, subcategoryid: string) {
    Swal.fire({
      title: 'Desea cambiar el estado de la subcategoria?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
    }).then((action: any) => {
      if (action.isConfirmed) {
        this.categoriesService
          .changeStatusSubCategory(categoryid, subcategoryid)
          .subscribe({
            next: (res: any) => {
              console.log(res);
              Swal.fire({
                title: res.message,
                icon: 'success',
              }).then((action) => {
                if (action.isConfirmed) {
                  document.location.reload();
                }
              });
            },
            error: (err: any) => {
              Swal.fire({
                title: err.message,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Aceptar',
              });
            },
          });
      }
    });
  }

  addSubCategory(idCategorie: string, nombre: string) {
    localStorage.setItem('idCategorie', idCategorie);

    localStorage.setItem('nombre', nombre);
  }

  addTheme(
    idCategorie: string,
    idSubCategory: string,
    nameSubCategory: string
  ) {
    localStorage.setItem('idCategorie', idCategorie);
    localStorage.setItem('idSubcategory', idSubCategory);

    localStorage.setItem('nombre', nameSubCategory);
  }

  deleteCategory(id: string) {
    Swal.fire({
      title: 'Desea eliminar esta categoria',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
    }).then((action: any) => {
      if (action.isConfirmed) {
        this.categoriesService.deleteCategory(id).subscribe({
          next: (res: any) => {
            Swal.fire({ title: res.message, icon: 'success' }).then(() => {
              document.location.reload();
            });
          },
        });
      }
    });
  }

  deleteTheme(idCategorie: string, idSubCategory: string, idTheme: string) {
    Swal.fire({
      title: 'Desea eliminar el tema?',
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
    }).then((action: any) => {
      if (action.isConfirmed) {
        this.categoriesService
          .deleteTheme(idCategorie, idSubCategory, idTheme)
          .subscribe({
            next: (res: any) => {
              Swal.fire({ title: res.message, icon: 'success' }).then(() => {
                document.location.reload();
              });
            },
          });
      }
    });
  }

  abrirSubcategoria(id: string) {
    const elemento = document.querySelector('#collapseSubategory' + id);
    elemento!.classList.toggle('show');
  }
}
