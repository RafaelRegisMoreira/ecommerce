import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SubCategorias } from '../model/sub-categorias';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriasService {

  constructor(private http: HttpClient) { }

  readonly apiUrl: string = 'http://localhost:3000/';

  // GET 
  getSubCategorias(): Observable<SubCategorias[]> {
    return this.http.get<SubCategorias[]>(this.apiUrl + 'subcategorias')
  }
  getSubCategoriasById(id: number): Observable<SubCategorias> {
    return this.http.get<SubCategorias>(this.apiUrl + 'subcategorias/' + id)
  }
}
