export function isOverlap<T>(array1: T[], array2: T[]): boolean {
  return !!array2.find(item => includes(item, array1));
}

function includes<T>(item: T, array2: T[]): boolean {
  return array2.includes(item);
}
