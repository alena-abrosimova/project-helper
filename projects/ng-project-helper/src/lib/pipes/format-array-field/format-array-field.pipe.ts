import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatArrayField'
})
export class FormatArrayFieldPipe implements PipeTransform {

  transform<T, K extends keyof T>(value: T[], key: K, separator?: string): string | T[K][] {
    const newValues: T[K][] = value.map(item => item[key]).filter(item => !!item);

    return separator ? newValues.join(separator) : newValues;
  }
}
