import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { API_CONFIG } from 'src/app/environments/environments';
import { Serie } from 'src/app/Interface/serie';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Serie[]>{
    return this.http.get<Serie[]>(`${API_CONFIG.baseUrl}/series`);
  }
}
