import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filme } from '../assets/filme';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


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
    return this.http.get<Filme[]>(this.router)
    .pipe(
      catchError(this.handleError<Filme[]>('getFilme', []))
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
