import { SimpleChange } from '@angular/core';


export function isOnChange(change: SimpleChange): boolean {
  return change && change.currentValue && change.currentValue !== change.previousValue;
}
