import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../assets/filme';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FilmeService {


  constructor(
  private http: HttpClient) { }

  // Observable ativa uma chamada assincrona do retorno dessa função
  getFilme():Observable<Filme> {
    return this.http.get<Filme>('/users');
  }
}
