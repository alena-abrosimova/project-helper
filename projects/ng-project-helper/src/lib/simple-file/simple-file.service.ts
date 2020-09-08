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

  downloadFile(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => prepareAndDownloadFile(response, type))
      );
  }

  openFileInCard(url: string, filters?: object): Observable<string> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => openFileInCard(response))
      );
  }

  openFileInNewTab(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => openFileInNewTab(response, type))
      );
  }

  printFile(url: string, type: string, filters?: object): Observable<Blob> {
    const params: HttpParams = generateQuery(filters);

    return this.http
      .get(url, { params, responseType: 'blob', observe: 'response' })
      .pipe(
        map(response => printFile(response, type))
      );
  }

  uploadFile<T>(url: string, formData: FormData, cls?: ClassType<T>): Observable<T> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http
      .post<T>(`${url}`, formData, { headers })
      .pipe(map(result => cls ? plainToClass(cls, result) : result));
  }
}
