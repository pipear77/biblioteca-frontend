import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Autor } from '../models/autor'; // 
import { handleError } from 'src/assets/handleError';//función handleError para manejar errores

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private baseUrl = 'http://localhost:9999/api/autores';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your-token-here' 
    })
  };

  constructor(private http: HttpClient) { }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.baseUrl)
      .pipe(
        catchError(handleError<Autor[]>('getAutores', []))
      );
  }

  getAutor(id: number): Observable<Autor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Autor>(url)
      .pipe(
        catchError(handleError<Autor>(`getAutor id=${id}`))
      );
  }

  addAutor(autor: Autor): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, autor, this.httpOptions);
  }

  updateAutor(id: number, autor: Autor): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, autor, this.httpOptions)
      .pipe(
        catchError(handleError<any>('updateAutor'))
      );
  }

  deleteAutor(id: number): Observable<Autor> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Autor>(url, this.httpOptions)
      .pipe(
        catchError(handleError<Autor>('deleteAutor'))
      );
  }
}
