import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-testa-servidor',
  templateUrl: './testa-servidor.component.html',
  styleUrls: ['./testa-servidor.component.css']
})
export class TestaServidorComponent implements OnInit {

  router: string;
  query: string;
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  get() {
    this.http.get(this.router).subscribe(response =>{
      this.response = response;
    });
  }

  post() {

    var req = JSON.stringify(this.query);

    console.log('post this query:' + req);
    this.http.post(this.router, req).subscribe(response =>{
      this.response = response;
    });
  }

  put() {
    var req = JSON.stringify(this.query);
    this.http.put(this.router, req).subscribe(response =>{
      this.response = response;
    });
  }

  delete() {
    this.http.delete(this.router).subscribe(response =>{
      this.response = response;
    });
  }

}
