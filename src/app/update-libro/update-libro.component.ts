import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../service/libro.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Autor } from '../models/autor';
import { AutorService } from '../service/autor.service';

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.component.html',
  styleUrls: ['./update-libro.component.css']
})
export class UpdateLibroComponent implements OnInit {
  autores: Autor[] = [];
  libro: Libro = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaPublicacion: '',
    autor: {
      id: 0,
      nombre: '',
      apellido: ''
    }
  };

  errorMessage: string = '';

  constructor( private libroService: LibroService, private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getLibro();
    this.cargarAutores();
  }

  cargarAutores(): void {
    this.autorService.getAutores().subscribe(
      autores => {
        this.autores = autores;
      },
      error => {
        console.error('Error cargando autores', error);
      }
    );
  }

  getLibro(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.libroService.getLibro(id)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe(libro => this.libro = libro);
  }

  onSubmit(): void {
    this.libroService.updateLibro(this.libro.id, this.libro)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe(() => {
        // Navegar de regreso a la lista de libros después de editar exitosamente
        this.router.navigate(['/libros']);
      });
  }
}
