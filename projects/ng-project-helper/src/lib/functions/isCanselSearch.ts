import { SimpleChange } from '@angular/core';

/**
 * Метод для getEntities директивы - проверяет, был ли сброшен поиск.
 */
export function isCancelSearch(searchChange: SimpleChange): boolean {
  return searchChange && searchChange.previousValue && !searchChange.currentValue;
}
