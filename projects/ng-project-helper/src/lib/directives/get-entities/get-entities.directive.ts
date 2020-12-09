import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Observable } from 'rxjs';

import { EntitiesParams, IDefaultResponse } from './get-entities.model';
import { isCancelSearch } from '../../functions/isCanselSearch';
import { GetEntitiesService } from './get-entities.service';
import { isOnChanges } from '../../functions/isOnChanges';
import { concatArray } from '../../functions/concatArray';
import { DefaultParams } from '../../default-classes';


@Directive({
  selector: '[getEntities]'
})
export class GetEntitiesDirective<T> implements OnChanges {
  @Input() getEntities: EntitiesParams<T>;
  @Input() entitiesSearch: string;
  @Input() entitiesValue: T;
  @Input() entitiesResult: string = 'results';

  @Output() get: EventEmitter<Observable<T[]>> = new EventEmitter<Observable<T[]>>();
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() responseChange: EventEmitter<IDefaultResponse<T>> = new EventEmitter<IDefaultResponse<T>>();

  constructor(private getEntitiesService: GetEntitiesService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.entitiesParams) || isOnChanges(changes.entitiesSearch) || isCancelSearch(changes.entitiesSearch)) {
      this.get.emit(this.getDictionary());
    }
  }

  getDictionaryParams(): DefaultParams {
    const params: DefaultParams = this.getEntities.params ? this.getEntities.params : {};
    if (this.getEntities.field) {
      params[this.getEntities.field] = this.entitiesSearch;
    }

    return params;
  }

  emitResponse(response: IDefaultResponse<T>): void {
    this.responseChange.emit(response);
    this.countChange.emit(response.count);
  }

  prepareAndEmitResponse(response: IDefaultResponse<T>): T[] {
    response[this.entitiesResult] = plainToClass(response[this.entitiesResult], this.getEntities.cls);
    this.emitResponse(response);

    return concatArray<T>(response[this.entitiesResult], this.getEntities.iteratee, this.entitiesValue);
  }

  getDictionary(): Observable<T[]> {
    const params = this.getDictionaryParams();

    return this.getEntitiesService.getEntities<T>(this.getEntities.url, params)
      .pipe(
        debounceTime(500),
        map((response: IDefaultResponse<T>) => this.prepareAndEmitResponse(response))
      );
  }
}
