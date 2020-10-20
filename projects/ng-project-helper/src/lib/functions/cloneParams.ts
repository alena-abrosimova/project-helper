export function cloneParams<T, K extends keyof T>(params: T, cloned: T, keys: K[]): T {
  keys.forEach(key => params[key] = cloned[key]);

  return params;
}
