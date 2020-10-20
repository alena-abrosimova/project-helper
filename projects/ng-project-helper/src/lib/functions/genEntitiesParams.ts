import { genParamsForTable } from './genParamsForTable';
import { EntitiesParams } from '../directives/get-entities/get-entities.model';


export function genEntitiesParams<T>(url: string, params: T): EntitiesParams {
  return new EntitiesParams(url, genParamsForTable<T>(params));
}
