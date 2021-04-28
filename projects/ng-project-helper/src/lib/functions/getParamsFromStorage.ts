/**
 * Метод для быстрого получения "предыдущих фильтров/параметров" для запрашиваемого роута.
 */


export function getParamsFromStorage<T>(state: string, clearParams: boolean): T {
  const params = localStorage.getItem('prevParams');
  const prevState = localStorage.getItem('prevState');
  if (clearParams) {
    localStorage.removeItem('prevState');
    localStorage.removeItem('prevParams');
  }
  if (prevState === state && params) {
    return JSON.parse(params);
  }

  return null;
}
