import { Component, OnInit } from "@angular/core";
import { Autor } from "../models/autor";
import { AutorService } from "../service/autor.service";
import { ActivatedRoute } from "@angular/router";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: "app-show-autor",
  templateUrl: "./show-autor.component.html",
  styleUrls: ["./show-autor.component.css"],
})
export class ShowAutorComponent implements OnInit {
  autor: Autor = {
    id: 0,
    nombre: "",
    apellido: "",
  };
  errorMessage: string = "";
  constructor( private autorService: AutorService,
    private route: ActivatedRoute) {}

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
}
