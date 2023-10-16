import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Categorias } from '../model/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private http: HttpClient) { }

  readonly apiUrl: string = 'http://localhost:3000/';

  // GET 
  getCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(this.apiUrl + 'categorias')
  }
  getCategoriasById(id: number): Observable<Categorias>{
    return this.http.get<Categorias>(this.apiUrl + 'categorias/' + id)
  }
}
