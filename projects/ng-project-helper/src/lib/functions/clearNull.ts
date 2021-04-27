/**
 * Метод проходится по свойствам объекта, проверяет, есть ли там хоть какое то значение,
 * и если значение равно **null**, **undefined**, **[]**, **0** или **''** то удаляет это свойство
 * из объекта и возвращает объект.
 * Подходит для очистки параметров для http-запросов. Не "заглядывает" внутрь объектов в свойствах.
 */
export function clearNull<T>(clearingObject: T): Partial<T> {
  const newObject = Object.assign({}, clearingObject);
  Object.keys(newObject).forEach(key => {
    const value = newObject[key];
    if (value === null || value === undefined || value === '' || Array.isArray(value) && !value.length) {
      delete newObject[key];
    }
  });

  return newObject;
}
