import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibroListComponent } from './libro-list/libro-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AutorListComponent } from './autor-list/autor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CreateAutorComponent } from './create-autor/create-autor.component';
import { CreateLibroComponent } from './create-libro/create-libro.component';
import { UpdateAutorComponent } from './update-autor/update-autor.component';
import { ShowAutorComponent } from './show-autor/show-autor.component';
import { UpdateLibroComponent } from './update-libro/update-libro.component';
import { ShowLibroComponent } from './show-libro/show-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibroListComponent,
    AutorListComponent,
    CreateAutorComponent,
    CreateLibroComponent,
    UpdateAutorComponent,
    ShowAutorComponent,
    UpdateLibroComponent,
    ShowLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
