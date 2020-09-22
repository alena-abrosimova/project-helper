import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { generateQuery } from '../functions/generateQuery';
import { IDefaultResponse } from './get-entities.model';


function getUrl(api: string, directory: string): string {
  directory = directory ? `${directory}/` : '';

  return `${api}/${directory}`;
}

@Injectable({
  providedIn: 'root'
})
export class GetEntitiesService {
  constructor(private http: HttpClient) {
  }

  getEntities<T>(api: string, directory: string, params?: any): Observable<IDefaultResponse<T>> {
    return this.http
      .get<IDefaultResponse<T>>(getUrl(api, directory), {params: generateQuery(params)});
  }
}
