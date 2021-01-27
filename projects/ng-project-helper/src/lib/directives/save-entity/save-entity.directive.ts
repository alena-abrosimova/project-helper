import { Directive, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { SaveEntityService } from './save-entity.service';
import { isOnChanges } from '../../functions/isOnChanges';
import { SaveEntityParams } from './save-entity.model';

@Directive({
  selector: '[saveEntity]'
})
export class SaveEntityDirective<T> implements OnChanges {
  @Input() saveEntity: SaveEntityParams<T>;

  @Output() getSavedEntity: EventEmitter<Observable<T>> = new EventEmitter<Observable<T>>();
  @Output() saveResponse: EventEmitter<T> = new EventEmitter<T>();

  constructor(private saveService: SaveEntityService<T>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.saveEntity)) {
      this.getSavedEntity.emit(this._saveEntity());
    }
  }

  _saveEntity(): Observable<T> {
    return this.checkItemAndSave(this.saveEntity.item, this.saveEntity.idKey)
      .pipe(
        tap(response => this.saveResponse.emit(response))
      );
  }

  checkItemAndSave(item: T, idKey: string): Observable<T> {
    return idKey && item[idKey] ? this.saveService.update(this.saveEntity) : this.saveService.create(this.saveEntity);
  }
}
