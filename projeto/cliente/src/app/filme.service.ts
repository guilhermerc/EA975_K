import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from './filme';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespostaServidorFilmes, RespPutFilme, RespPostFilme }  from './tipos/interfaces-servidor';
import { Critica } from './tipos/critica';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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
  getFilmeById(id: string): Observable<RespostaServidorFilmes> {
    var router = '/filmes/id/' + id;

    return this.http.get<RespostaServidorFilmes>(router);
  }

  postFilme(filme: Filme) {

  }

  putFilme(idFilme: string, body: string):Observable<RespPutFilme> {

    var url = '/filmes/id/' + idFilme;

    return this.http.put<RespPostFilme>(url, body, httpOptions);
  }
  /** Observable ativa uma chamada assincrona do retorno dessa função
  *  @idFilme: Id do filme que se deseja excluir
  */
  deleteFilme(idFilme: string) {

  }
  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  postCritica(idFilme: string, critica: Critica): Observable<RespPostFilme> {
    var router = '/filmes/id/' + idFilme;

    return this.http.post<RespPutFilme>(router, critica);
  }
  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  putCritica(idFilme: string, username: string, critica: Critica): Observable<RespPostFilme> {
    var router = '/filmes/criticas/' + idFilme + '/' + username;

    return this.http.put<RespPostFilme>(router, critica);
  }

  // TODO: ATUALIZAR COM INTERFACE CERTA QUANDO TIVER
  deleteCritica(idFilme: string, username: string): Observable<RespPostFilme> {
    var router = '/filmes/criticas/' + idFilme + '/' + username;

    return this.http.get<RespPostFilme>(router);
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
