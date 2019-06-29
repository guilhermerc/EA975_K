import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../assets/filme';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FilmeService {

router:string;

  constructor(
  private http: HttpClient) { }

  // Observable ativa uma chamada assincrona do retorno dessa função
  getFilme(nome: String):Observable<Filme[]> {
    this.router = '/filmes/' + nome;
    return this.http.get<Filme[]>(this.router);
  }
}
