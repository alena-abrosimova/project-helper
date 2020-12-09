import { ClassType } from 'class-transformer/ClassTransformer';
import { DefaultParams } from '../../default-classes';


export class EntitiesParams<T> {
  constructor(public url: string,
              public cls: ClassType<T>,
              public params?: DefaultParams,
              public field?: string,
              public iteratee?: string) {
  }
}

export interface IDefaultResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}
