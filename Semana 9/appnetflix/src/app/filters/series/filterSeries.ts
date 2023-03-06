import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTVSeries',
  pure: false
})

export class FilterSeriesPipe implements PipeTransform {
  transform(value: any[], filter: Object): any[] {
    if (!value || !filter){
      return value;
    }

    return value.filter(serie => serie.contentType == 'TVSeries');
  }
}
