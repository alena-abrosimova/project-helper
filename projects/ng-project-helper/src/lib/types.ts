import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';


export type Id = number;

export type CanActivateResult = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
