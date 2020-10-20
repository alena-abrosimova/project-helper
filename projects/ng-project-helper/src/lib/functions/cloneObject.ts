import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';

export function cloneObject<T>(item: T, cls?: ClassType<T>): T {
  const cloned: T = Object.assign<T, T>({} as T, item);
  return cls ? plainToClass(cls, cloned) : cloned;
}
