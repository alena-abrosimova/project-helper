import { Injectable } from '@angular/core';
import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { toClassToPlain } from '../functions/toClassToPlain';
import { generateQuery } from '../functions/generateQuery';
import { getFullUrl } from '../functions/getFullUrl';


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) {
  }
  /** Метод для GET запроса на сервер с сериализацией, возвращает объект класса
   * - params: ожидает объект с параметрами фильтрации, может быть null (на логику не влияет),
   * - url: ожидает строку с URL адресом,
   * - cls: ожидает класс, к которому трансформирует ответ,
   * - id?: ожидает ID для запроса на запись, необязательное,
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  getEntity<T>(params: object, url: string, cls: ClassType<T>, id?: number, path?: string): Observable<T> {
    return this.http.get(`${getFullUrl(url, id, path)}`, {params: generateQuery(params)})
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }
  /** Метод для POST запроса на сервер с сериализацией, возвращает объект класса
   * - item: ожидает объект класса (можно часть свойств благодаря Partial<T>) для отправки в запросе,
   * - url: ожидает строку с URL адресом,
   * - cls: ожидает класс, к которому трансформирует ответ
   */
  createEntity<T>(item: Partial<T>, url: string, cls: ClassType<T>): Observable<T> {
    return this.http.post(`${url}/`, toClassToPlain<T>(item, cls))
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }
  /** Метод для PATCH запроса на сервер с сериализацией, возвращает объект класса
   * - item: ожидает объект класса (можно часть свойств благодаря Partial<T>) для отправки в запросе,
   * - id: ожидает ID для запроса на запись,
   * - url: ожидает строку с URL адресом,
   * - cls: ожидает класс, к которому трансформирует ответ
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  updateEntity<T>(item: Partial<T>, id: number, url: string, cls: ClassType<T>, path?: string): Observable<T> {
    return this.http.patch(`${getFullUrl(url, id, path)}`, toClassToPlain<T>(item, cls))
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }
  /** Метод для DELETE запроса на сервер, возвращает true
   * - id: ожидает ID для запроса на запись,
   * - url: ожидает строку с URL адресом,
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  deleteEntity(id: number, url: string, path?: string): Observable<boolean> {
    return this.http.delete(`${getFullUrl(url, id, path)}`)
      .pipe(
        map(() => true)
      );
  }
}
