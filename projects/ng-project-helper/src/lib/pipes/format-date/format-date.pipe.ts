import { Pipe, PipeTransform } from '@angular/core';

import { dateToString } from '../../functions/dateToString';


@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: Date, strFormats: string = 'dd.MM.yyyy'): number | Date | string {
    if (!date) {
      return '';
    }

    return dateToString(date, strFormats);
  }
}
