import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: 'users.page.html',
  styleUrls: ['users.page.scss'],
})
export class UsersPage implements OnInit {
  users: UserModel[] = [];
  user: UserModel = new UserModel();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users=> {
      this.users = users;
    }, err => {
      console.log('Erro ao listar os usuarios', err);
    })
  }

  createUser(user: UserModel) {
    this.userService.addUser(user).subscribe(
      () => {
        this.loadUsers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  editUser(userId: number, updatedUser: UserModel) {
    this.userService.updateUser(userId, updatedUser).subscribe(
      () => {
        this.loadUsers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.loadUsers();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
