import { Subject } from 'rxjs';

/** Базовый класс для edited-option и search-option */
export class CustomOption<T> {
  /** Сабжект для передачи значения, которое содержится в edited-option или search-option */
  itemSubject: Subject<T>;
  /** Значение, которое содержится в edited-option или search-option */
  value: T;
}
