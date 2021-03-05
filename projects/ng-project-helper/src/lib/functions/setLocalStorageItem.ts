/**
 * "Кладем" нужный элемент в localStorage.
 */
export function setToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
}
