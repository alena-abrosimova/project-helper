/**
 * Метод для сцепления списков внутри списка в один список. Пример:
 * - [[1, 2], [3, 4]] превратится в [1, 2, 3, 4]
 */
export function concatMatrix<T>(matrix: T[][]): T[] {
  let array: T[] = [];
  matrix.forEach(row => array = array.concat(row));

  return array;
}
