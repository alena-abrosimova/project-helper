import { genParamsForTable } from './genParamsForTable';
import { EntitiesParams } from '../directives/get-entities/get-entities.model';
import { ClassType } from 'class-transformer/ClassTransformer';

/**
 * Метод для получения EntitiesParams при работе с сортировкой и пагинацией в таблице
 */
export function genEntitiesParams<P, T>(url: string, params: P, cls: ClassType<T>): EntitiesParams<T> {
  return new EntitiesParams<T>(url, cls, genParamsForTable<P>(params));
}
