import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Serie } from 'src/app/Interface/serie';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  series!: Serie[];
  filterMovies = {};
  filterTVSeries = {};

  constructor(private service: HomeService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((series) => {
      this.series = series;
    })
  }
}
