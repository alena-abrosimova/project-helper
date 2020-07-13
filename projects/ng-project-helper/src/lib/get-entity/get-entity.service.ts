import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EntityApiParams } from './get-entity.model';


@Injectable({
  providedIn: 'root'
})
export class GetEntityService {

  constructor(private http: HttpClient) {
  }

  getUrls(apiParams: EntityApiParams): string {
    if (apiParams.path) {
      return `${apiParams.api}/${apiParams.dir}/${apiParams.id}/${apiParams.path}/`;
    }

    return `${apiParams.api}/${apiParams.dir}/${apiParams.id}/`;
  }

  getEntity<T>(apiParams: EntityApiParams): Observable<T> {
    return this.http.get<T>(this.getUrls(apiParams));
  }
}
