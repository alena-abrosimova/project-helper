import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { generateQuery } from '../../functions/generateQuery';
import { IDefaultResponse } from './get-entities.model';

@Injectable({
  providedIn: 'root'
})
export class GetEntitiesService {
  constructor(private http: HttpClient) {
  }

  getIEntities<T>(url: string, params?: any): Observable<IDefaultResponse<T>> {
    return this.http
      .get<IDefaultResponse<T>>(`${url}/`, {params: generateQuery(params)});
  }

  getEntities<T>(url: string, params?: any): Observable<T[]> {
    return this.http.get<T[]>(`${url}/`, {params: generateQuery(params)});
  }
}
