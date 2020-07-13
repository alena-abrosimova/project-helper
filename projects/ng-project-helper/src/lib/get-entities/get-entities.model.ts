export class EntitiesParams {
  constructor(public api: string,
              public dir: string,
              public params?: any,
              public field?: string,
              public iteratee?: string) {
  }
}

export interface IDefaultResponse<T> {
  count: number,
  next: string,
  previous: string,
  results: Array<T>
}
