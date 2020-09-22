import { baseUniqueBy } from './baseUniqueBy';


export function uniqBy<T>(array: T[], iteratee: string): T[] {
  return array && array.length ?
    array.filter((value, index, self) => baseUniqueBy<T>(value, index, self, iteratee)) : [];
}
