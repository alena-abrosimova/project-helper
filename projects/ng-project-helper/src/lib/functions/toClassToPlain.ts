import { classToPlain, plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

/**
 * Метод для быстрой сериализации объекта в объект класса и объекта класса в обычный объект.
 * Например, для подготовки form.value для пригодного серверу вида
 */
export function toClassToPlain<T>(item: Partial<T>, cls: ClassType<T>): T {
  item = plainToClass(cls, item);

  return classToPlain(item) as T;
}
