import { SimpleChange } from '@angular/core';


export function isOnChanges(simpleChange: SimpleChange): boolean {
  return simpleChange && simpleChange.currentValue && simpleChange.currentValue !== simpleChange.previousValue;
}
