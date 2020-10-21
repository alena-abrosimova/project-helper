import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EntityApiParams, EntityParams } from './get-entity.model';
import { generateQuery } from '../../functions/generateQuery';
import { genParams } from '../../functions/genParams';


@Injectable({
  providedIn: 'root'
})
export class GetEntityService {

  constructor(private http: HttpClient) {
  }

  getUrls(apiParams: EntityApiParams): string {
    const url: string = apiParams.url ? `${apiParams.url}/` : '';
    const id: string = apiParams.id ? `${apiParams.id}/` : '';
    const path: string = apiParams.path ? `${apiParams.path}/` : '';

    return `${url}${id}${path}`;
  }

  getEntity<T>(apiParams: EntityApiParams): Observable<T> {
    const params: HttpParams = generateQuery(genParams<EntityParams>(apiParams.params));
    return this.http.get<T>(this.getUrls(apiParams), {params});
  }
}
