import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  user: User = new User();
  listUsers: User[] = [];

  constructor(private router: Router) {}

  ngOnit() { }

  logout() {
    localStorage.setItem('logged', 'false');
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
}
