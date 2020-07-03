import { Directive } from '@angular/core';


@Directive({
  selector: '[getEntities]'
})
export class GetEntitiesDirective {

  constructor() {
    console.log('im here');
  }
}
