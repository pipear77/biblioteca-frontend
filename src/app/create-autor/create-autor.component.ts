import { Component, OnInit } from "@angular/core";
import { Autor } from "../models/autor";
import { AutorService } from "../service/autor.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-autor",
  templateUrl: "./create-autor.component.html",
  styleUrls: ["./create-autor.component.css"],
})
export class CreateAutorComponent implements OnInit {
  autor: Autor = new Autor();

  constructor(private autorService: AutorService, private router: Router) { }

  ngOnInit(): void {
  }

  saveAutor(): void {
    this.autorService.addAutor(this.autor).subscribe(
      data => {
        console.log('Autor creado con éxito', data);
        this.router.navigate(['/autores']);
      },
      error => {
        console.error('Error al crear el autor', error);
      }
    );
  }

  onSubmit(): void {
    this.saveAutor();
  }
}
