export function lastElement<T>(array: T[]): T {
  return !!array && !!array.length ? array[array.length - 1] : null;
}
