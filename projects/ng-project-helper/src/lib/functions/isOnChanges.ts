import { SimpleChange } from '@angular/core';

/**
 * Возвращает true, если были изменения в simpleChange, иначе false.
 */
export function isOnChanges(simpleChange: SimpleChange): boolean {
  return simpleChange && simpleChange.currentValue && simpleChange.currentValue !== simpleChange.previousValue;
}
