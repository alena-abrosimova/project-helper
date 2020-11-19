import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  get<T>( params: object, url: string, id: number | string, path?: string): Observable<T> {
    return this.http.get<T>(getUrl(url, id, path), {params: generateQuery(params)});
  }

  post<T>(url: string, item: Partial<T>, path?: string): Observable<T> {
    return this.http.post<T>(getUrl(url, null, path), item);
  }

  patch<T>(url: string, id: number | string, item: Partial<T>, path?: string): Observable<T> {
    return this.http.patch<T>(getUrl(url, id, path), item);
  }

  delete(url: string, id: number | string, path?: string): Observable<boolean> {
    return this.http.delete(getUrl(url, id, path))
      .pipe(map(() => true));
  }
}
