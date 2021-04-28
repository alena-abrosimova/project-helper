import { baseUnique } from './baseUniq';

/**
 * Метод для фильтрации простого списка по уникальности.
 */
export function uniq<T>(array: T[]): T[] {
  return array && array.length ? array.filter((value, index, self) => baseUnique(value, index, self)) : [];
}
