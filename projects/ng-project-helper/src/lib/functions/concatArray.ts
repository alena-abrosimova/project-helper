import { uniqBy } from './uniqBy';

/**
 * Метод для сцепления списков одного класса или элемента со списком одного класса.
 * Отдает список содержащий только оригинальные элементы.
 * Оригинальность проверяется по свойству, указанному в iteratee.
 * Так, например, список не позволит в себе находится двум (и более) объектам с id=3
 */
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
