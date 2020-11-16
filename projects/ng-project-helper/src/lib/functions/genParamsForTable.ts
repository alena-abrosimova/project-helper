import { dateToString } from './dateToString';
import { isDate } from 'date-fns';


export function genParamsForTable<T>(params: T, forExport: boolean = false): T {
  const newParams = Object.assign({}, params, params['paginationOption']);

  Object.keys(newParams).forEach(key => {
    if (isDate(newParams[key])) {
      newParams[key] = dateToString(newParams[key], 'yyyy-MM-dd');
    }
  });

  if (forExport) {
    delete newParams['limit'];
  }

  delete newParams['length'];
  delete newParams['paginationOption'];

  return newParams;
}
