import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-show-libro',
  templateUrl: './show-libro.component.html',
  styleUrls: ['./show-libro.component.css']
})
export class ShowLibroComponent implements OnInit {
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
  
  constructor( private libroService: LibroService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAutor();
  }

  getAutor(): void {
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

  getAutorNombreCompleto(libro: Libro): string {
    return `${libro.autor.nombre} ${libro.autor.apellido}`;
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
        // Navegar de regreso a la lista de autores después de editar exitosamente
        this.router.navigate(['/autores']);
      });
  }

}
