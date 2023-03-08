import { Component } from '@angular/core';
import { Serie } from 'src/app/Interface/serie';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent {

  series: Serie[] = [];
  genres: string[] = [];
  filterTVSeries = {};

  constructor(private service: SeriesService) {
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
