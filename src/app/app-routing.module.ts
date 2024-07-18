import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LibroListComponent } from "./libro-list/libro-list.component";
import { AutorListComponent } from "./autor-list/autor-list.component";
import { CreateAutorComponent } from "./create-autor/create-autor.component";
import { UpdateAutorComponent } from "./update-autor/update-autor.component";
import { ShowAutorComponent } from "./show-autor/show-autor.component";
import { CreateLibroComponent } from "./create-libro/create-libro.component";
import { UpdateLibroComponent } from "./update-libro/update-libro.component";
import { ShowLibroComponent } from "./show-libro/show-libro.component";

const routes: Routes = [
  { path: "libros", component: LibroListComponent },
  { path: "autores", component: AutorListComponent },
  { path: "", redirectTo: "/libros", pathMatch: "full" },
  { path: "create-autor",component: CreateAutorComponent },
  { path: 'update-autor/:id', component: UpdateAutorComponent },
  { path: 'show-autor/:id', component: ShowAutorComponent},
  { path: "create-libro",component: CreateLibroComponent },
  { path: 'update-libro/:id', component: UpdateLibroComponent },
  { path: 'show-libro/:id', component: ShowLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
