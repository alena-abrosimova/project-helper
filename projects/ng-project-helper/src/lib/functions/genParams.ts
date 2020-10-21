import { dateToString } from './dateToString';
import {isDate} from 'date-fns';


export function genParams<T>(params: T): T {
  return params ? prepareParams<T>(params) : params;
}

function prepareParams<T>(params: T): T {
  const newParams = Object.assign({}, params);

  Object.keys(newParams).forEach(key => {
    if (isDate(newParams[key])) {
      newParams[key] = dateToString(newParams[key], 'yyyy-MM-dd');
    }
  });

  return newParams;
}
