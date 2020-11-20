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
  @Input() saveEntity: Observable<T>;
  @Input() saveParams: SaveEntityParams<T>;

  @Output() saveEntityChange: EventEmitter<Observable<T>> = new EventEmitter<Observable<T>>();
  @Output() saveEntityResponse: EventEmitter<T> = new EventEmitter<T>();

  constructor(private saveService: SaveEntityService<T>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isOnChanges(changes.saveParams)) {
      this.saveEntityChange.emit(this._saveEntity());
    }
  }

  _saveEntity(): Observable<T> {
    return this.checkItemAndSave(this.saveParams.item, this.saveParams.idKey)
      .pipe(
        tap(response => this.saveEntityResponse.emit(response))
      );
  }

  checkItemAndSave(item: T, idKey: string): Observable<T> {
    return idKey && item[idKey] ? this.saveService.update(this.saveParams) : this.saveService.create(this.saveParams);
  }
}
