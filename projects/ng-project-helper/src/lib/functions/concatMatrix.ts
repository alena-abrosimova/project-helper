export function concatMatrix<T>(matrix: T[][]): T[] {
  let array: T[] = [];
  matrix.forEach(row => array = array.concat(row));

  return array;
}
