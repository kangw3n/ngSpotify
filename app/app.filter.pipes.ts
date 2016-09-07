import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
  transform(items: any, term: any): number {
    if (term === undefined) return items;

    return items.filter(function (item: any) {
      return item.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}