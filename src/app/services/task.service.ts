import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7106/api/'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  // Create - Adicionar uma nova tarefa
  addTask(tarefa: TaskModel):  Observable<any> {
    return this.http.post(`${this.apiUrl}tarefa`, tarefa);
  }

  // Read - Obter todas as tarefas
  getTasks():  Observable<any> {
    return this.http.get(`${this.apiUrl}tarefa`);
  }

  // Read - Obter uma tarefa pelo ID
  getTaskById(id: number):  Observable<any> {
    const url = `${this.apiUrl}tarefa/${id}`;
    return this.http.get(url);
  }

  // Update - Atualizar uma tarefa
  updateTask(id: number, updatedTask: any):  Observable<any> {
    const url = `${this.apiUrl}tarefa/${id}`;
    return this.http.put(url, updatedTask);
  }

  // Delete - Remover uma tarefa
  deleteTask(id: number):  Observable<any> {
    const url = `${this.apiUrl}tarefa/${id}`;
    return this.http.delete(url);
  }
}
