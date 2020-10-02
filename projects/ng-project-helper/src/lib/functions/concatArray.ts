import { uniqBy } from './uniqBy';


export function concatArray<T>(array: T[], iteratee: string, value: T | T[]): T[] {
  if (value) {
    if (Array.isArray(value)) {
      array = array.concat(value);
    } else if (!array.find(item => iteratee ? item[iteratee] === value[iteratee] : item === value)) {
      array = array.concat([value]);
    }

    return uniqBy(array, iteratee);
  }

  return array;
}
