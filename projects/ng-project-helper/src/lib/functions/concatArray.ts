import { uniqBy } from './uniqBy';


export function concatArray<T>(array: T[], iteratee: string, value: T | T[]): T[] {
  if (value) {
    if (Array.isArray(value)) {
      array = value.concat(array);
    } else {
      array = [value].concat(array);
    }

    return uniqBy(array, iteratee);
  }

  return array;
}
