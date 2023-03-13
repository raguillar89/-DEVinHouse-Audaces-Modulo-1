import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-screen-com-menu',
  templateUrl: './full-screen-with-menu.component.html',
  styleUrls: ['./full-screen-with-menu.component.scss']
})
export class FullScreenWithMenuComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit(): void {
    //this.router.navigate(['/wm/home'])
    this.router.navigate(['/wm/product'])
  }
}
