import { SimpleChange } from '@angular/core';


export function isCancelSearch(searchChange: SimpleChange): boolean {
  return searchChange && searchChange.previousValue && !searchChange.currentValue;
}
