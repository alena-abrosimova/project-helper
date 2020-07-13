export function baseUniqueBy<K>(value, index, self, iteratee: string) {
  return self.indexOf(item => item[iteratee] === value[iteratee]) === index;
}
