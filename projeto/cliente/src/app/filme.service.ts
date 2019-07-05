import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from './filme';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespostaServidorFilmes } from './tipos/resposta-servidor-filmes'


@Injectable({
  providedIn: 'root'
})


export class FilmeService {

router: string;

  constructor(
  private http: HttpClient) { }

  // Observable ativa uma chamada assincrona do retorno dessa função
  getFilme(nome: String):Observable<RespostaServidorFilmes> {
    this.router = '/filmes/' + nome;

    return this.http.get<RespostaServidorFilmes>(this.router)
    .pipe(
      //catchError(this.handleError<RespostaServidorFilmes>('getFilme', []))
    );
  }

  /**
     * Fonte: https://angular.io/tutorial/toh-pt6
     * Tratador de error em operações HTTP
     * Permite que o app continue executando
     * @param operation - nome da operação que falhou
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.error(error);
        console.log(`${operation} failed: ${error.message}`);

        // Permite que o app continue executando com valor vazio
        return of(result as T);
      };
    }
}
