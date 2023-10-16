import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { ConteudoSite } from '../model/conteudo-site';
@Injectable({
  providedIn: 'root'
})
export class ConteudoSiteService {

  constructor( private http: HttpClient) { }

  readonly apiUrl: string = 'http://localhost:3000/';

  getContHome(): Observable<ConteudoSite>{
    return this.http.get<ConteudoSite>(this.apiUrl + 'conteudoSite')
  }
}
