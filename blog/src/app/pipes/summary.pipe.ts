import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string | undefined, limit: number): null | string {
    return !value ? null : value.substring(0, limit) + '...';
  }

}
