import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private apiUrl = 'https://api.escuelajs.co/api/v1/products';
  // private postUrl = 'https://api.escuelajs.co/api/v1/products/';
  // private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/`);
  }

  getUser(id: any) {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }

  addUser(user: any) {
    return this.http.post(`${this.apiUrl}/`, user);
  }

  updateUser(id: any, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: any) : Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
