import { HttpParams } from '@angular/common/http';
import { clearNull } from './clearNull';


/**
 * Метод для получения HttpParams из объекта
 */
export function generateQuery<T>(params: Partial<T>): HttpParams {
  if (!params) {
    return null;
  }

  params = clearNull(params);

  let newParams: HttpParams = new HttpParams();
  Object.keys(params).forEach(key => newParams = newParams.append(key, params[key]));

  return newParams;
}
