import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMovies',
  pure: false
})

export class FilterMoviesPipe implements PipeTransform {
  transform(value: any[], filter: Object): any[] {
    if (!value || !filter){
      return value;
    }

    return value.filter(serie => serie.contentType == 'Movie');
  }
}
