import { Injectable } from '@angular/core';
import { ClassType } from 'class-transformer/ClassTransformer';
import { plainToClass } from 'class-transformer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { prepareObjectToPlain } from '../functions/toClassToPlain';
import { generateQuery } from '../functions/generateQuery';


function getUrl(url: string, id: number, path: string): string {
  url = url ? `${url}/` : '';
  const strId = id ? `${id}/` : '';
  path = path ? `${path}/` : '';

  return `${url}${strId}${path}`;
}

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor(private http: HttpClient) {
  }

  getEntity<T>(params: object, url: string, cls: ClassType<T>, id?: number, path?: string): Observable<T> {
    return this.http.get(`${getUrl(url, id, path)}`, {params: generateQuery(params)})
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }

  createEntity<T>(item: Partial<T>, url: string, cls: ClassType<T>): Observable<T> {
    return this.http.post(`${url}/`, prepareObjectToPlain<T>(item, cls))
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }

  updateEntity<T>(item: Partial<T>, id: number, url: string, cls: ClassType<T>, path?: string): Observable<T> {
    return this.http.patch(`${getUrl(url, id, path)}`, prepareObjectToPlain<T>(item, cls))
      .pipe(
        map(response => plainToClass(cls, response))
      );
  }

  deleteEntity(id: number, url: string, path?: string): Observable<boolean> {
    return this.http.delete(`${getUrl(url, id, path)}`)
      .pipe(
        map(() => true)
      );
  }
}
