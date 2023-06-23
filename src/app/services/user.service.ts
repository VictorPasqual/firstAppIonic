import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7106/api/'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  // Create - Adicionar um novo usuário
  addUser(usuario: UserModel):  Observable<any> {
    return this.http.post(`${this.apiUrl}usuario`, usuario);
  }

  // Read - Obter todos os usuários
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}usuario`);
  }

  // Read - Obter um usuário pelo ID
  getUserById(id: number): Observable<any> {
    const url = `${this.apiUrl}usuario/${id}`;
    return this.http.get(url);
  }

  // Update - Atualizar um usuário
  updateUser(id: number, updatedUser: any): Observable<any> {
    const url = `${this.apiUrl}usuario/${id}`;
    return this.http.put(url, updatedUser);
  }

  // Delete - Remover um usuário
  deleteUser(id: number): Observable<any> {
    const url = `${this.apiUrl}usuario/${id}`;
    return this.http.delete(url);
  }
}
