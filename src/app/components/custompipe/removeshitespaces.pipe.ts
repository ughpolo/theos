import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeshitespaces'
})
export class RemoveshitespacesPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/ /g, '');
  }

}
