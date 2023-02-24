import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/API_CONFIG';
import { Personagem } from '../model/personagem';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(`${API_CONFIG.baseUrl}/personagens`);
  }

  findById(id: any): Observable<Personagem> {
    return this.http.get<Personagem>(`${API_CONFIG.baseUrl}/personagens/${id}`);
  }

  update(personagem: Personagem): Observable<Personagem> {
    return this.http.put<Personagem>(`${API_CONFIG.baseUrl}/personagens/${personagem.id}`, personagem);
  }

  delete(id: any): Observable<Personagem> {
    return this.http.delete<Personagem>(`${API_CONFIG.baseUrl}/personagens/${id}`);
  }
}
