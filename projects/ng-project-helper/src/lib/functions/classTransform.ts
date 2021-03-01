import { dateToString } from './dateToString';


function getFormatDate(value: Date, strFormat?: string | 'full'): string {
  return strFormat === 'full' ? value.toString() : dateToString(value, strFormat);
}

/**
 * Форматируем дату в строку, по умолчанию формат 'yyyy-MM-dd',
 * чтобы сделать дату строкой, нужно вложить 'full'
 * Используется для @Transform(dateToPlain(), { toPlainOnly: true })
 *
 * Все форматы можно посмотреть по ссылке https://date-fns.org/v2.17.0/docs/format
 */
export function dateToPlain(strFormat?: string | 'full'): (value: Date) => string {
  return value => value ? getFormatDate(value, strFormat) : null;
}

/**
 * Форматируем строку в дату.
 * Используется для @Transform(dateToClass(), { toClassOnly: true })
 */
export function dateToClass(): (value: string) => Date {
  return value => value ? new Date(value) : null;
}
/**
 * Форматируем объект в свойство.
 * Пример @Transform(objectToField<DefaultApi, keyof DefaultApi>('id'), {toPlainOnly: true})
 * Используется для @Transform()
 */
export function objectToField<T, K extends keyof T>(key: K): (value: T) => T[K] {
  return value => value ? value[key] : null;
}
