/**
 * Метод для быстрой передачи в localStorage "предыдущих фильтров/параметров" и роута.
 */
export function setParamsToStorage<T>(state: string, params: T) {
  localStorage.setItem('prevState', state);
  localStorage.setItem('prevParams', JSON.stringify(params));
}
