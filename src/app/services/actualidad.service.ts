import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualidadService {

  API_ACTUALIDAD = 'https://www.lapatilla.com/wp-json/wp/v2/posts?categories=16';

  constructor(private http: HttpClient) {}

  
  index() {
    return this.http.get(`${this.API_ACTUALIDAD}`);
  }
}