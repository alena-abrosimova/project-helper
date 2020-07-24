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
    const api: string = apiParams.api ? `${apiParams.api}/` : '';
    const dir: string = apiParams.dir ? `${apiParams.dir}/` : '';
    const id: string = apiParams.id ? `${apiParams.id}/` : '';
    const path: string = apiParams.path ? `${apiParams.path}/` : '';

    return `${api}${dir}${id}${path}`;
  }

  getEntity<T>(apiParams: EntityApiParams): Observable<T> {
    return this.http.get<T>(this.getUrls(apiParams));
  }
}
