export function firstElement<T>(array: T[]): T {
  return !!array && !!array.length ? array[0] : null;
}
