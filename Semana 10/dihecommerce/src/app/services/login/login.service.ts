import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { IUser } from 'src/app/interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${API_CONFIG.baseUrl}/users`);
  }
}
