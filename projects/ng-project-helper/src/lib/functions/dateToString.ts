import { format, isDate } from 'date-fns';
import { ru as locale } from 'date-fns/locale';

/**
 * Метод для проверки - входит ли дата в определенный диапазон.
 * Если входит - возвращает true, иначе - false.
 */
export function dateToString(value: number | Date, strFormat: string = 'yyyy-MM-dd'): string {
  if (typeof value === 'number' || isDate(value)) {
    return format(value, strFormat, {locale});
  }

  return '';
}
