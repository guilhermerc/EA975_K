import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from './filme';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespostaServidorFilmes, INTERFACE } from './tipos/resposta-servidor-filmes'
import { Critica } from './tipos/critica';

@Injectable({
  providedIn: 'root'
})


export class FilmeService {

  constructor(
  private http: HttpClient) { }

  /** Observable ativa uma chamada assincrona do retorno dessa função
  *  @identificador: Aceita as opções:
  *   1. ""
  *   2. "filtro/informação do Filme
  *   3. "id/id do filme"
  */
  getFilme(identificador: string):Observable<RespostaServidorFilmes> {
    var router = '/filmes/' + identificador;

    return this.http.get<RespostaServidorFilmes>(router);
  }
  getFilmeById(id: number): Observable<RespostaServidorFilmes> {
    var router = '/filmes/id/' + id;

    return this.http.get<RespostaServidorFilmes>(router);
  }

  postFilme(filme: Filme) {

  }

  putFilme(filme: Filme) {

  }
  /** Observable ativa uma chamada assincrona do retorno dessa função
  *  @idFilme: Id do filme que se deseja excluir
  */
  deleteFilme(idFilme: number) {

  }
  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  postCritica(idFilme: number, critica: Critica): Observable<INTERFACE> {
    var router = 'filmes/criticas/' + idFilme;

    return this.http.post<INTERFACE>(router, critica);
  }
  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  putCritica(idFilme: number, username: string, critica: Critica): Observable<INTERFACE> {
    var router = 'filmes/criticas/' + idFilme + '/' + username;

    return this.http.put<INTERFACE>(router, critica);
  }

  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  deleteCritica(idFilme: number, username: string): Observable<INTERFACE> {
    var router = 'filmes/criticas/' + idFilme + '/' + username;

    return this.http.get<INTERFACE>(router);
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
