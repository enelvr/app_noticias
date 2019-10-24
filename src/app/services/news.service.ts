import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  API_PATILLA = 'https://www.lapatilla.com/wp-json/wp/v2/posts?categories=15';

  //1 = nacionales
  //3 = internacionales
  //4 = economia
  //5 = deportes
  //6 = entretenimiento
  //15 = home
  //16 = actualidad
   //17 = titulares
  constructor(private http: HttpClient) {}

  
  index() {
    return this.http.get(`${this.API_PATILLA}`);
  }
}