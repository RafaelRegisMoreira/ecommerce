import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { Produtos } from '../model/produtos';
import { Categorias } from '../model/categorias';
import { SubCategorias } from '../model/sub-categorias';
import { ConteudoSite } from '../model/conteudo-site';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http: HttpClient) { }

  readonly apiUrl: string = 'http://localhost:3000/';

  // GET 
  getProdutos(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.apiUrl + 'produtos')
  }
  getProdutosById(id: number): Observable<Produtos>{
    return this.http.get<Produtos>(this.apiUrl + 'produtos/' + id)
  }

  // // POST 
  // Post( post: Usuarios ): Observable<Usuarios>{
  //   return this.http.post<Usuarios>(this.apiUrl + 'usuarios', post)
  // }

  // // PUT   
  // putComentario(id : number , novoComentario: Roupas): Observable<Roupas []> {
  //   return this.http.put< Roupas[] >(this.apiUrl + 'roupas/' + novoComentario.id, novoComentario)
  // }

  // postComentario( comentario: Avaliacao): Observable<Avaliacao>{
  //   return this.http.post<Avaliacao>(this.apiUrl + 'roupas/', comentario)
  // }
}
