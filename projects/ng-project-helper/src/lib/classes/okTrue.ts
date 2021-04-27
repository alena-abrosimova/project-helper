/** Класс для BehaviorSubject или же для ответов с сервера (некоторые запросы возвращают {ok: true} или {ok: false} )
 *
 * Пример:
 * okSubject = new BehaviorSubject(new OkTrue(true));
 *
 * Я бы еще подумала над названием, например - OkResponse
 */

export class OkTrue {
  constructor(public ok: boolean) {
  }
}
