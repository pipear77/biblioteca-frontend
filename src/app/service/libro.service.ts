import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Libro } from '../models/libro';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  
  private baseUrl = 'http://localhost:9999/api/libros';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // Método para obtener todos los libros
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para obtener un libro por su ID
  getLibro(id: number): Observable<Libro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Libro>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para agregar un nuevo libro
  addLibro(libro: Libro): Observable<Object> {
    return this.http.post(this.baseUrl, libro, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para actualizar un libro existente
  updateLibro(id: number, libro: Libro): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, libro, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para eliminar un libro por su ID
  deleteLibro(id: number): Observable<Libro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Libro>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Método para manejar errores
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }

}
