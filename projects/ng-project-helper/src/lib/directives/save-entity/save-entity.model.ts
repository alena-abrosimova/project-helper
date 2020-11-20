import { ClassType } from 'class-transformer/ClassTransformer';

export class SaveEntityParams<T> {
  constructor(public url: string,
              public item: T,
              public cls: ClassType<T>,
              public toClass: boolean = false,
              public idKey?: string,
              public path?: string) {
  }
}
