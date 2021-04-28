/**
 * Метод для вычисления последнего элемента в списке. Отдает или элемент или null
 */
export function lastElement<T>(array: T[]): T {
  return !!array && !!array.length ? array[array.length - 1] : null;
}
