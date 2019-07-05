import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
    this.http.post(this.router, this.query).subscribe(response =>{
      this.response = response;
    });
  }

  put() {
    this.http.put(this.router, this.query).subscribe(response =>{
      this.response = response;
    });
  }

  delete() {
    this.http.delete(this.router).subscribe(response =>{
      this.response = response;
    });
  }

}
