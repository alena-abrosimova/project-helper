export function baseUniqueBy<T>(value: T, index: number, self: T[], iteratee: string) {
  return self.findIndex(item => item[iteratee] === value[iteratee]) === index;
}
