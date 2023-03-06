import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent {
  constructor(private router: Router){ }

  ngOnInit(): void {
    this.router.navigate([''])
  }
}
