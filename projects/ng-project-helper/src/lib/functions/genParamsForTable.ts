import { dateToString } from './dateToString';
import {isDate} from 'date-fns';


export function genParamsForTable<T>(params: T): T {
  const newParams = Object.assign({}, params, params['paginationOption']);

  Object.keys(newParams).forEach(key => {
    if (isDate(newParams[key])) {
      newParams[key] = dateToString(newParams[key], 'yyyy-MM-dd');
    }
  });

  delete newParams['length'];
  delete newParams['paginationOption'];

  return newParams;
}
