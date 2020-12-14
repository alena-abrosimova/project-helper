import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityApiParams } from './get-entity.model';
import { GetEntityService } from './get-entity.service';
import { isOnChanges } from '../../functions/isOnChanges';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[entityParams]'
})
export class GetEntityDirective<T> implements OnChanges {
  @Input() entityParams: EntityApiParams;

  @Output() getEntity: EventEmitter<Observable<T>> = new EventEmitter<Observable<T>>();
  @Output() getEntityResponse: EventEmitter<T> = new EventEmitter<T>();

  constructor(private getEntityService: GetEntityService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.entityParams)) {
      this.getEntity.emit(this._getEntity());
    }
  }

  _getEntity(): Observable<T> {
    return this.getEntityService.getEntity<T>(this.entityParams)
      .pipe(
        tap(response => this.getEntityResponse.emit(response))
      );
  }
}
