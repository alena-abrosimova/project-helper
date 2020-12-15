import { Subject } from 'rxjs';


export class CustomOption<T> {
  itemSubject: Subject<T>;
  value: T;
}
