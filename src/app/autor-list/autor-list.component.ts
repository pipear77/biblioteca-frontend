import { Component, OnInit } from '@angular/core';
import { Autor } from '../models/autor';
import { AutorService } from '../service/autor.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrls: ['./autor-list.component.css']
})
export class AutorListComponent implements OnInit {

  autores: Autor[] = [];
  errorMessage: string = '';

  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit(): void {
    this.getAutores();
  }

  getAutores(): void {
    this.autorService.getAutores()
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe(autores => this.autores = autores);
  }

  addAutor(): void {
    // Implementación de la navegación hacia el componente de agregar autor
    this.router.navigate(['add-autor']);
  }

  updateAutor(id: number) {
    // Implementación de la navegación hacia el componente de editar autor
    this.router.navigate(['update-autor', id]);
  }

  deleteAutor(id: number) {
    this.autorService.deleteAutor(id)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe(() => {
        // Actualiza la lista de autores después de eliminar
        this.getAutores();
      });
  }

  // Navegación a los detalles del autor
  showAutor(id: number) {
    this.router.navigate(['show-autor', id]);
  }

}
