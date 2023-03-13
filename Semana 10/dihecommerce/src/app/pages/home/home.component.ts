import { Component } from '@angular/core';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  user: User = new User();
  listUsers: User[] = [];
  filterUserName = {};

  ngOnInit(): void {

  }

}
