import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { Autor } from '../models/autor';
import { LibroService } from '../service/libro.service';
import { AutorService } from '../service/autor.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css']
})
export class CreateLibroComponent implements OnInit {
  autores: Autor[] = [];
  libro: Libro = new Libro(); // Inicializa un nuevo objeto Libro

  constructor(private autorService: AutorService, private libroService: LibroService, private router: Router) { }

  ngOnInit(): void {
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

  onSubmit(): void {
    // Lógica para guardar el libro
    this.libroService.addLibro(this.libro).subscribe(
      data => {
        console.log('Libro creado con éxito', data);
        this.router.navigate(['/libros']);
      },
      error => {
        console.error('Error creando libro', error);
      }
    );
  }
}
