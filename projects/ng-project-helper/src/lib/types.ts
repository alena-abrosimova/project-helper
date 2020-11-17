import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';


export type Id = number;

export type CanActivateResult = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export type DefaultParamsType = string | number | Date | boolean;

export type DefaultKeys<T> = { [k in keyof T]: T[k] extends DefaultParamsType ? k : never }[keyof T];

export type KeysOfType<T, U> = { [k in keyof T]: T[k] extends U ? k : never }[keyof T];
