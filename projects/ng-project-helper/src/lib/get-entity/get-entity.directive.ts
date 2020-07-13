import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { EntityApiParams } from './get-entity.model';
import { GetEntityService } from './get-entity.service';
import { isOnChanges } from '../functions/isOnChanges';
import { tap } from 'rxjs/operators';

@Directive({
  selector: '[getEntity]'
})
export class GetEntityDirective<T> implements OnChanges {
  @Input() getEntity: Observable<T>;
  @Input() entityParams: EntityApiParams;

  @Output() getEntityChange: EventEmitter<Observable<T>> = new EventEmitter<Observable<T>>();
  @Output() getEntityResponse: EventEmitter<T> = new EventEmitter<T>();

  constructor(private getEntityService: GetEntityService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.entityParams)) {
      this.getEntityChange.emit(this._getEntity());
    }
  }

  _getEntity(): Observable<T> {
    return this.getEntityService.getEntity<T>(this.entityParams)
      .pipe(
        tap(response => this.getEntityResponse.emit(response))
      );
  }
}
