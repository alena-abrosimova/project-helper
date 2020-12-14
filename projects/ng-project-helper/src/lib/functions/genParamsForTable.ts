import { classToPlain } from 'class-transformer';


export function genParamsForTable<P>(params: P, withoutPagination: boolean = false): P {
  const newParams = withoutPagination ?
    Object.assign({}, classToPlain(params)) : Object.assign({}, classToPlain(params), params['paginationOption']);

  delete newParams['length'];
  delete newParams['paginationOption'];

  return newParams;
}
