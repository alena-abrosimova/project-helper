import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';


export type Id = number;

export type CanActivateResult = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export type KeysOfType<T, U> = { [k in keyof T]: T[k] extends U ? k : never }[keyof T];
