import { DefaultParams } from '../../default-classes';


export class EntitiesParams {
  constructor(public url: string,
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
