import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';

/**
 * Метод для копирования массива без мутирования - но еще нужно изучать и думать.
 */
export function cloneArray<T>(original: T[], cls?: ClassType<T>): T[] {
  return original.map(item => cls ? plainToClass(cls, item) : item);
}
