import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/Interface/user';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  user: User = new User();
  formUser!: FormGroup;
  listUsers: User[] = [];

  ngOnInit(): void {
    this.getUsersList();
    this.createForm(new User());
    this.createLocalStorage(false);
  }

  constructor(private router: Router, private service: LoginService) { }

  createForm(user: User) {
    this.formUser = new FormGroup({
      email: new FormControl(user.email),
      password: new FormControl(user.password)
    })
  }

  createLocalStorage(booleanValue: boolean) {
    localStorage.setItem('logged', `${booleanValue}`);
  }

  getUsersList() {
    this.service.login().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findUser(form: FormGroup) {
    this.listUsers.find((user) => {
      if(user.email === form.value.email) {
        this.user = user;
      }
    });
  }

  correctPassword(form: FormGroup, user: User) {
    if(user.password === form.value.password) {
      return true;
    }
    return false;
  }

  onSubmit() {
    this.findUser(this.formUser);
    if(this.correctPassword(this.formUser, this.user)) {
      this.createLocalStorage(true);
      this.router.navigate(['/']);
    }else{
      alert('password incorrect');
      this.createLocalStorage(false);
    }
  }
}
