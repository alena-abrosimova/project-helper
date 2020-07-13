import { HttpParams } from '@angular/common/http';
import { clearNull } from './clearNull';


export function generateQuery(params: object): HttpParams {
  if (!params) {
    return null;
  }

  params = clearNull(params);

  let newParams: HttpParams = new HttpParams();
  Object.keys(params).forEach(key => newParams = newParams.append(key, params[key]));

  return newParams;
}
