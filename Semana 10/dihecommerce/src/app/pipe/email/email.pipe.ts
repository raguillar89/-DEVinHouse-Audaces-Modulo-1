import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailToUserName',
  pure: false
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    const resp = value.split('@');
    return resp[0];
  }
}
