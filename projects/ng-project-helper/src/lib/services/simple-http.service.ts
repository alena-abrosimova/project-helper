import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDefaultResponse } from '../directives/get-entities/get-entities.model';
import { generateQuery } from '../functions/generateQuery';
import { map } from 'rxjs/operators';


function getUrl(url: string, id: number | string, path: string): string {
  id = id ? `/${id}` : '';
  path = path ? `/${path}` : '';

  return `${url}${id}${path}/`;
}

@Injectable({
  providedIn: 'root'
})
export class SimpleHttpService {

  constructor(private http: HttpClient) {
  }
  /** Метод для GET запроса на сервер, возвращает интерфейс IDefaultResponse с списком объектов класса
   * - params: ожидает объект с параметрами фильтрации, может быть null (на логику не влияет),
   * - url: ожидает строку с URL адресом
   */
  getList<T>( params: object, url: string): Observable<IDefaultResponse<T>> {
    return this.http.get<IDefaultResponse<T>>(`${url}/`, {params: generateQuery(params)});
  }
  /** Метод для GET запроса на сервер, возвращает объект класса
   * - params: ожидает объект с параметрами фильтрации, может быть null (на логику не влияет),
   * - url: ожидает строку с URL адресом,
   * - id: ожидает ID для запроса на запись,
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  get<T>( params: object, url: string, id: number | string, path?: string): Observable<T> {
    return this.http.get<T>(getUrl(url, id, path), {params: generateQuery(params)});
  }
  /** Метод для POST запроса на сервер, возвращает объект класса
   * - url: ожидает строку с URL адресом,
   * - item: ожидает объект класса (можно часть свойств благодаря Partial<T>) для отправки в запросе,
   * - id: ожидает ID для запроса на запись, необязательное,
   */
  post<T>(url: string, item: Partial<T>, id?: number | string, path?: string): Observable<T> {
    return this.http.post<T>(getUrl(url, id, path), item);
  }
  /** Метод для PATCH запроса на сервер, возвращает объект класса
   * - url: ожидает строку с URL адресом,
   * - id: ожидает ID для запроса на запись,
   * - item: ожидает объект класса (можно часть свойств благодаря Partial<T>) для отправки в запросе,
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  patch<T>(url: string, id: number | string, item: Partial<T>, path?: string): Observable<T> {
    return this.http.patch<T>(getUrl(url, id, path), item);
  }
  /** Метод для DELETE запроса на сервер, возвращает true
   * - url: ожидает строку с URL адресом,
   * - id: ожидает ID для запроса на запись,
   * - path?: ожидает строку с продолжением URL адреса (если например адрес должен быть api/id/path/)
   */
  delete(url: string, id: number | string, path?: string): Observable<boolean> {
    return this.http.delete(getUrl(url, id, path))
      .pipe(map(() => true));
  }
}
