import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';


export function prepareObjectToPlain<T>(item: Partial<T>, cls: ClassType<T>): T {
  item = plainToClass(cls, item);

  return classToPlain(item) as T;
}
