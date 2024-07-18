import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibroService } from '../service/libro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libro-list',
  templateUrl: './libro-list.component.html',
  styleUrls: ['./libro-list.component.css']
})
export class LibroListComponent implements OnInit {

  libros: Libro[];

  constructor(private libroService: LibroService, private router: Router) {}

  ngOnInit() {
    this.getLibros();
  }

  getLibros() {
    this.libroService.getLibros().subscribe(
      data => {
        this.libros = data;
      },
      error => {
        console.error('Error al obtener libros:', error);
      }
    );
  }

  getAutorNombreCompleto(libro: Libro): string {
    return `${libro.autor.nombre} ${libro.autor.apellido}`;
  }

    // Navegación a los detalles del libro
    showLibro(id: number) {
      this.router.navigate(['show-libro', id]);
    }

  updateLibro(id: number) {
    this.router.navigate(['update-libro', id]);
  }

  deleteLibro(id: number) {
    this.libroService.deleteLibro(id).subscribe(
      response => {
        console.log('Libro eliminado correctamente');
        // Actualizar lista de libros después de eliminar
        this.getLibros();
      },
      error => {
        console.error('Error al eliminar libro:', error);
        // Aquí puedes mostrar un mensaje de error al usuario si es necesario
      }
    );
  }
}
