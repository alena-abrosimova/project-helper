/** Класс для созданий простых словариков, например для селектов,
 * когда значения берутся не с сервера, а "вшиты в код"
 */
export class DefaultDictionary<T> {
  constructor(public value: T,
              public label: string) {
  }
}
