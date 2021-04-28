import { baseUniqueBy } from './baseUniqueBy';

/**
 * Метод для быстрой фильтрации списка по уникальности определленного свойства у элементов, например по id.
 */
export function uniqBy<T>(array: T[], iteratee: string): T[] {
  return array && array.length ?
    array.filter((value, index, self) => baseUniqueBy<T>(value, index, self, iteratee)) : [];
}
