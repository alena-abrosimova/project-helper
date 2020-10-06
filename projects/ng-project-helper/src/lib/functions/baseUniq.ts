export function baseUnique<T>(value: T, index: number, self: T[]): boolean {
  return self.findIndex(item => item === value) === index;
}
