/**
 * Метод для вычисления первого элемента в списке. Отдает или элемент или null
 */
export function firstElement<T>(array: T[]): T | null {
  return !!array && !!array.length ? array[0] : null;
}
