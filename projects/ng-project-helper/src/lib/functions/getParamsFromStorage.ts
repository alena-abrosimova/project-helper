export function getParamsFromStorage<T>(state: string, clearParams: boolean): T {
  const params = localStorage.getItem('prevParams');
  if (localStorage.getItem('prevState') === state && params) {
    return JSON.parse(params);
  }

  if (clearParams) {
    localStorage.removeItem('prevState');
    localStorage.removeItem('prevParams');
  }

  return null;
}
