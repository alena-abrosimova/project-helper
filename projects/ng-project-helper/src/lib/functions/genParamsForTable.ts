import { classToPlain } from 'class-transformer';


export function genParamsForTable<T>(params: T, withoutPagination: boolean = false): T {
  const newParams = withoutPagination ?
    Object.assign({}, classToPlain(params)) : Object.assign({}, classToPlain(params), params['paginationOption']);

  delete newParams['length'];
  delete newParams['paginationOption'];

  return newParams;
}
