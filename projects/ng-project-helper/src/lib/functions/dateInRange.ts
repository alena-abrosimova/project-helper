/**
 * Метод для проверки - входит ли дата в определенный диапазон.
 * Если входит - возвращает true, иначе - false.
 */
export function dateInRange(date: Date, from: Date, to: Date): boolean {
  return date >= from && to >= date;
}
