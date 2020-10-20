import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';


export function cloneArray<T>(original: T[], cls?: ClassType<T>): T[] {
  return original.map(item => cls ? plainToClass(cls, item) : item);
}
