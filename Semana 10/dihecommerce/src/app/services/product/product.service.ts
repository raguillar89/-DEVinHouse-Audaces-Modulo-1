import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/environments/environments';
import { IProduct } from 'src/app/interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${API_CONFIG.baseUrl}/products`);
  }

  findById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${API_CONFIG.baseUrl}/products/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${API_CONFIG.baseUrl}/products`, product);
  }
}
