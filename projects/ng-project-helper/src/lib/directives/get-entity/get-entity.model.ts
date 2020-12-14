import { ClassType } from 'class-transformer/ClassTransformer';


export class EntityParams {
  [key: string]: any;
}

export class EntityApiParams<T> {
  constructor(public url: string,
              public id: number,
              public cls?: ClassType<T>,
              public path?: string,
              public params?: EntityParams) {
  }
}
