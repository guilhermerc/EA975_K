import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme, Critica } from './filme';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RespGetFilmes, RespGetFilmeById, RespPutFilme, RespPostFilme, RespDelFilme}  from './tipos/interfaces-servidor';
import { RespDelCritica, RespPostCritica, RespPutCritica}  from './tipos/interfaces-servidor';

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
  getFilmes(filtro: string, conteudoDeBusca: string):Observable<RespGetFilmes> {

    var url;

    if (conteudoDeBusca == "") {
      url = '/filmes/';
    } else {
      url = `/filmes/${filtro}/${conteudoDeBusca}`;
    }

    return this.http.get<RespGetFilmes>(url, httpOptions);
  }

  getFilmeById(id: string): Observable<RespGetFilmeById> {

    var url = '/filmes/id/' + id;

    return this.http.get<RespGetFilmeById>(url, httpOptions);
  }

  postFilme(filme: Filme): Observable<RespPostFilme>  {
    var url = '/filmes';
    var body = JSON.stringify(filme);

    return this.http.post<RespPostFilme>(url, body, httpOptions);
  }

  putFilme(idFilme: string, body: string):Observable<RespPutFilme> {

    var url = '/filmes/id/' + idFilme;

    return this.http.put<RespPutFilme>(url, body, httpOptions);
  }
  /** Observable ativa uma chamada assincrona do retorno dessa função
  *  @idFilme: Id do filme que se deseja excluir
  */
  deleteFilme(idFilme: string): Observable<RespDelFilme> {
    var url = '/filmes/id/' + idFilme;
    return this.http.delete<RespDelFilme>(url, httpOptions);
  }
  /*
  Seção de Críticas
  */

  postCritica(idFilme: string, critica: Critica): Observable<RespPostCritica> {

    var url = `/filmes/id/${idFilme}/criticas`;

    return this.http.post<RespPostCritica>(url, critica, httpOptions);
  }

  putCritica(idFilme: string, critica: Critica): Observable<RespPutCritica> {

    var url = `/filmes/id/${idFilme}/criticas`;

    return this.http.put<RespPutCritica>(url, critica, httpOptions);
  }

  deleteCritica(idFilme: string, username: string): Observable<RespDelCritica> {

    var url = `/filmes/id/${idFilme}/criticas/${username}`;

    return this.http.delete<RespDelCritica>(url, httpOptions);
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
