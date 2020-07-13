import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDefaultResponse } from './get-entities.model';
import { generateQuery } from '../functions/generateQuery';

@Injectable({
  providedIn: 'root'
})
export class GetEntitiesService {
  constructor(private http: HttpClient) {
  }

  getEntities<T>(api: string, directory: string, params?: any): Observable<IDefaultResponse<T>> {
    return this.http
      .get<IDefaultResponse<T>>(`${api}/${directory}/`, {params: generateQuery(params)});
  }
}
