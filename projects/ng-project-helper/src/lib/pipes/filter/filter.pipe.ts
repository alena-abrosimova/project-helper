import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform<T, K extends keyof T>(array: T[], filter: T[K], key: K): T[] {
    return array ? array.filter(item => item[key] === filter) : array;
  }
}
