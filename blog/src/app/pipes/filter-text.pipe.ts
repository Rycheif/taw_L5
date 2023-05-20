import {Pipe, PipeTransform} from '@angular/core';

import {Post} from "../models/post";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Post[], filterText: string): Post[] {
    if (!value) {
      return [] as Post[];
    }

    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();

    return value
      .filter(val => val.text !== undefined)
      .filter(val => val.text.toLowerCase().includes(filterText));
  }

}
