import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDocumentaries',
  pure: false
})

export class FilterDocumentariesPipe implements PipeTransform {
  transform(value: any[], filter: Object): any[] {
    if (!value || !filter){
      return value;
    }

    return value.filter(serie => serie.genre == 'Documentaries');
  }
}
