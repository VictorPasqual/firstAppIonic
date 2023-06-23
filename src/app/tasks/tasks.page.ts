import { Component, OnInit } from '@angular/core';
import { TaskModel } from './task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: TaskModel[] = [];
  task: TaskModel = new TaskModel();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks=> {
      this.tasks = tasks;
    }, err => {
      console.log('Erro ao listar os usuarios', err);
    })
  }

  createTask(task: TaskModel) {
    this.taskService.addTask(task).subscribe(
      () => {
        this.loadTasks();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateTask(taskId: number, updatedTask: TaskModel) {
    this.taskService.updateTask(taskId, updatedTask).subscribe(
      () => {
        this.loadTasks();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe(
      () => {
        this.loadTasks();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
