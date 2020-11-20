import { Injectable } from '@angular/core';
import { classToPlain, plainToClass } from 'class-transformer';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { prepareObjectToPlain } from '../../functions/toClassToPlain';
import { getFullUrl } from '../../functions/getFullUrl';
import { SaveEntityParams } from './save-entity.model';

@Injectable({
  providedIn: 'root'
})
export class SaveEntityService<T> {
  constructor(private http: HttpClient) {
  }

  create(params: SaveEntityParams<T>): Observable<T> {
    return this.http.post(
      getFullUrl(params.url, null, params.path),
      params.toClass ? prepareObjectToPlain(params.item, params.cls) : classToPlain(params.item)
    )
      .pipe(map(result => plainToClass(params.cls, result)));
  }

  update(params: SaveEntityParams<T>): Observable<T> {
    return this.http.patch(
      getFullUrl(params.url, params.item[params.idKey], params.path),
      params.toClass ? prepareObjectToPlain(params.item, params.cls) : classToPlain(params.item)
    )
      .pipe(map(result => plainToClass(params.cls, result)));
  }
}
