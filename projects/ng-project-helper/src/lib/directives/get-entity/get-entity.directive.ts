import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { isOnChanges } from '../../functions/isOnChanges';
import { GetEntityService } from './get-entity.service';
import { EntityApiParams } from './get-entity.model';


@Directive({
  selector: '[entityParams]'
})
export class GetEntityDirective<T> implements OnChanges {
  @Input() entityParams: EntityApiParams<T>;

  @Output() getEntity: EventEmitter<Observable<T>> = new EventEmitter<Observable<T>>();
  @Output() getEntityResponse: EventEmitter<T> = new EventEmitter<T>();

  constructor(private getEntityService: GetEntityService<T>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.entityParams)) {
      this.getEntity.emit(this._getEntity());
    }
  }

  _getEntity(): Observable<T> {
    return this.getEntityService.getEntity(this.entityParams)
      .pipe(
        tap(response => this.getEntityResponse.emit(response))
      );
  }
}
