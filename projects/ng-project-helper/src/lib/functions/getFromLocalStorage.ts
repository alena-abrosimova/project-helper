import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';

/**
 * Берем нужный элемент из localStorage. Чтобы получить object в parse нужно подставить true.
 * Чтобы сериализовать этот объект в конкретный класс - подставляем класс в cls;
 */
export function getFromLocalStorage<T>(key: string, parse: boolean = false, cls?: ClassType<T>): T | string {
  const item = localStorage.getItem(key);
  if (parse) {
    const object = JSON.parse(item);
    return cls ? plainToClass(cls, object) : object;
  }

  return item;
}
