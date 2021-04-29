import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { prepareAndDownloadFile } from '../functions/prepareAndDownloadFile';
import { openFileInNewTab } from '../functions/openFileInNewTab';
import { openFileInCard } from '../functions/openFileInCard';
import { generateQuery } from '../functions/generateQuery';
import { printFile } from '../functions/printFile';
import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})

export class SimpleFileService {

  constructor(private http: HttpClient) { }
  /** Метод для скачивания файла по уже готовому URL
   * - fileUrl: ожидает строку с URL адресом,
   */
  downloadFileByUrl(fileUrl: string): void {
    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    anchor.download = fileUrl.substring((fileUrl.lastIndexOf('/') + 1), fileUrl.length);
    if (location.protocol === 'https:') {
      fileUrl = fileUrl.replace('http://', 'https://');
    }
    anchor.href = fileUrl;
    anchor.target = '_self';
    anchor.click();
    anchor.remove();
  }

  /** Метод для скачивания файла, пришедшего с сервера, возвращает Blob
   * - url: ожидает строку с URL адресом,
   * - type: ожидает тип для Blob,
   * - filters: ожидает параметры фильтрации, необязательное,
   */
  downloadFile(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => prepareAndDownloadFile(response, type))
      );
  }
  /** Метод для получения ссылки на файл, пришедшего с сервера, возвращает string
   * - url: ожидает строку с URL адресом,
   * - filters: ожидает параметры фильтрации, необязательное,
   */
  openFileInCard(url: string, filters?: object): Observable<string> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => openFileInCard(response))
      );
  }
  /** Метод для открытия в новом окне файла, пришедшего с сервера, возвращает Blob
   * - url: ожидает строку с URL адресом,
   * - type: ожидает тип для Blob,
   * - filters: ожидает параметры фильтрации, необязательное,
   */
  openFileInNewTab(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => openFileInNewTab(response, type))
      );
  }
  /** Метод для вывода на печать файла, пришедшего с сервера, возвращает Blob
   * - url: ожидает строку с URL адресом,
   * - type: ожидает тип для Blob,
   * - filters: ожидает параметры фильтрации, необязательное,
   */
  printFile(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => printFile(response, type))
      );
  }
  /** Метод для вывода на печать файла, пришедшего с сервера, возвращает T
   * - url: ожидает строку с URL адресом,
   * - formData: ожидает FormData, где будет File и дополнительные данные для запроса,
   * - cls: ожидает класс для сериализации объекта, который придет в ответ, необязательное,
   */
  uploadFile<T>(url: string, formData: FormData, cls?: ClassType<T>): Observable<T> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post<T>(`${url}`, formData, { headers })
      .pipe(map(result => cls ? plainToClass(cls, result) : result));
  }
}
