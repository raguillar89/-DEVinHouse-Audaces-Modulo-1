import { Component } from '@angular/core';
import { Serie } from 'src/app/Interface/serie';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  series: Serie[] = [];
  genres: string[] = [];
  filterMovies = {};

  constructor(private service: MoviesService) {
    this.listSeriesAndGender();
  }

  ngOnInit(): void { }

  listSeriesAndGender() {
    this.service.findAll().subscribe((series) => {
      this.series = series;
      for(let serie of series) {
        for(let uniqGenre of serie.genre.split(' ')) {
          if(uniqGenre != 'TV' && uniqGenre != '&' && uniqGenre != 'Based' && uniqGenre != 'on' && uniqGenre != 'US' && uniqGenre != 'Movies' && uniqGenre != 'Life'){
            this.genres.push(uniqGenre);
          }
        }
      }
      this.genres = this.genres.filter((element, index, self) => {
        return index === self.indexOf(element);
      });
    });
  }
}
