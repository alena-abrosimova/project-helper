import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stringFilter'
})
export class StringFilterPipe implements PipeTransform {
  transform<T, K extends keyof T>(array: T[], filter: string, key: K): T[] {
    return array && filter && key ? array.filter(item => this.checkItem(item[key], filter)) : array;
  }

  checkItem<T, K extends keyof T>(value: T[K], filter: string): boolean {
    switch (typeof value) {
      case 'string':
        return value.toLowerCase().includes(filter.toLowerCase());
      case 'number':
        return value.toString().includes(filter);
      default:
        return false;
    }
  }
}
