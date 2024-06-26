import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  // [x: string]: any;
  private apiUrl = 'http://localhost:3000/products'; //https://api.escuelajs.co/api/v1/products

  constructor(private http: HttpClient) { }

  // getUsers() {
  //   return this.http.get(`${this.apiUrl}?offset=30&limit=10`);
  // }
  getUsers() {
    return this.http.get(`${this.apiUrl}/`);
  }
  // getUsu(offset: number, limit: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  // }
  getUser(id: any) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addUser(id: any) {
    return this.http.post(`${this.apiUrl}/`, id);
  }

  updateUser(id: any, user: any) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
