import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/Interface/serie';

@Component({
  selector: 'app-category-movie',
  templateUrl: './movieCategory.component.html',
  styleUrls: ['./movieCategory.component.scss']
})
export class MovieCategoryComponent implements OnInit {
  @Input() series: Serie[] = [];
  @Input() genre: string = '';
  serieGenre: Serie[] = [];
  filterMovies = {};

  ngOnInit(): void {
    console.log(this.genre);
    this.filterSeriesByGender();
  }

  filterSeriesByGender() {
    this.series.filter((serie) => {
      if(serie.genre.includes(this.genre)) {
        this.serieGenre.push(serie);
      }
    });
    console.log(this.serieGenre);
  }
}
