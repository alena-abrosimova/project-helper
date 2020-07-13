import { baseUniqueBy } from './baseUniqueBy';


export function uniqBy<T, K extends keyof T>(array: T[], iteratee: string): T[] {
  return array && array.length ?
    array.filter((value, index, self) => baseUniqueBy<K>(value, index, self, iteratee)) : [];
}
