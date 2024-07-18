import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Autor } from '../models/autor';
import { AutorService } from '../service/autor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-autor',
  templateUrl: './update-autor.component.html',
  styleUrls: ['./update-autor.component.css']
})
export class UpdateAutorComponent implements OnInit {
  autor: Autor = {
    id: 0,
    nombre: '',
    apellido: ''
  };


  errorMessage: string = '';
  
  constructor( private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getAutor();
  }

  getAutor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.autorService.getAutor(id)
      .pipe(
        catchError((error) => {
          this.errorMessage = error.message;
          return throwError(error);
        })
      )
      .subscribe(autor => this.autor = autor);
  }

  onSubmit(): void {
    this.autorService.updateAutor(this.autor.id, this.autor)
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
