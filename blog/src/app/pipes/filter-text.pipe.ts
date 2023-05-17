import {Pipe, PipeTransform} from '@angular/core';
import {Post} from "../components/blog-item/blog-item.component";

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
